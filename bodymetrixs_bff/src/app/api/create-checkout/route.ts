import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import { supabase } from '@/app/lib/supabase';

/**
 * @swagger
 * /api/create-checkout:
 *   post:
 *     tags:
 *       - Payments
 *     summary: 创建支付会话
 *     description: 创建Creem.io支付会话
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - product_id
 *               - success_url
 *             properties:
 *               product_id:
 *                 type: string
 *                 description: 产品ID
 *                 example: "prod_123456789"
 *               success_url:
 *                 type: string
 *                 format: uri
 *                 description: 支付成功后的跳转URL
 *                 example: "https://example.com/success"
 *     responses:
 *       200:
 *         description: 成功创建支付会话
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 checkout_url:
 *                   type: string
 *                   format: uri
 *                   description: 支付页面URL
 *                   example: "https://checkout.creem.io/session/123456789"
 *       400:
 *         description: 请求参数错误
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: 服务器错误
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
export async function POST(req: NextRequest) {
  try {
    // 1. 从请求头获取token（由中间件设置）
    const authHeader = req.headers.get('Authorization') || req.headers.get('x-auth-token');
    if (!authHeader) {
      console.error('No authorization header found');
      return NextResponse.json({ error: 'Unauthorized - No token provided' }, { status: 401 });
    }
    
    // 处理Bearer token格式
    const token = authHeader.startsWith('Bearer ') ? authHeader.substring(7) : authHeader;
    console.log('Token received:', token.substring(0, 20) + '...');
    
    let userId: string;
    try {
      // 使用Supabase客户端验证JWT
      const { data: { user }, error } = await supabase.auth.getUser(token);
      
      if (error || !user) {
        console.error('JWT verification failed:', error);
        return NextResponse.json({ error: 'Invalid token - Authentication failed' }, { status: 401 });
      }
      
      userId = user.id;
      console.log('JWT verification successful, userId:', userId);
      
      // 验证用户是否存在
      const userRecord = await prisma.user.findUnique({
        where: { id: userId }
      });
      
      if (!userRecord) {
        console.error('User not found in database:', userId);
        return NextResponse.json({ error: 'User not found in database' }, { status: 404 });
      }
      
      console.log('User found:', userRecord.id);
    } catch (jwtError) {
      console.error('JWT verification failed:', jwtError);
      return NextResponse.json({ error: 'Invalid token - JWT processing error' }, { status: 401 });
    }

    // 2. 获取参数
    const body = await req.json();
    console.log('Request body:', body);
    
    const { product_id, success_url } = body;
    if (!product_id || !success_url) {
      console.error('Missing required parameters:', { product_id, success_url });
      return NextResponse.json({ 
        error: 'Missing required parameters', 
        details: { product_id: !!product_id, success_url: !!success_url }
      }, { status: 400 });
    }

    const apiKey = process.env.CREEM_API_KEY;
    if (!apiKey) {
      console.error('CREEM_API_KEY is not set in environment variables');
      return NextResponse.json({ 
        error: 'Server configuration error - Payment API key not configured',
        details: 'Please check CREEM_API_KEY environment variable'
      }, { status: 500 });
    }

    console.log('Using Creem API key:', apiKey.substring(0, 10) + '...');

    // 3. 创建 Creem 会话
    const isTestMode = process.env.NODE_ENV === 'development';
    const creemApiUrl = isTestMode 
      ? 'https://test-api.creem.io/v1/checkouts' 
      : 'https://api.creem.io/v1/checkouts';

    console.log('Creem API URL:', creemApiUrl);
    console.log('Request payload:', { product_id, success_url });

    const response = await fetch(creemApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify({
        product_id: product_id,
        success_url: success_url,
        // 可选: metadata: { user_id: userId }
      }),
    });

    console.log('Creem API response status:', response.status);
    console.log('Creem API response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Creem API error response:', errorBody);
      
      let errorDetails;
      try {
        errorDetails = JSON.parse(errorBody);
      } catch (e) {
        errorDetails = { raw_error: errorBody };
      }
      
      return NextResponse.json({ 
        error: 'Failed to create checkout session', 
        details: errorDetails,
        status_code: response.status
      }, { status: response.status });
    }

    const checkoutSession = await response.json();
    console.log('Creem API success response:', checkoutSession);
    
    // 4. 记录本地 Payment
    try {
      await prisma.payment.create({
        data: {
          userId,
          checkoutId: checkoutSession.id || checkoutSession.session_id || '',
          productId: product_id,
          status: 'pending',
        }
      });
      console.log('Payment record created successfully');
    } catch (error) {
      console.warn('Payment table not available, skipping local record:', error);
      // 继续执行，不影响支付流程
    }
    
    return NextResponse.json({ checkout_url: checkoutSession.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json({ 
      error: 'Internal Server Error', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 
