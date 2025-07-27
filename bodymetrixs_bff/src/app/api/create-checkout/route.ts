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
    const token = req.headers.get('x-auth-token');
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    let userId: string;
    try {
      // 使用Supabase客户端验证JWT
      const { data: { user }, error } = await supabase.auth.getUser(token);
      
      if (error || !user) {
        console.error('JWT verification failed:', error);
        return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
      }
      
      userId = user.id;
      console.log('JWT verification successful, userId:', userId);
      
      // 验证用户是否存在
      const userRecord = await prisma.user.findUnique({
        where: { id: userId }
      });
      
      if (!userRecord) {
        console.error('User not found in database:', userId);
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }
      
      console.log('User found:', userRecord.id);
    } catch (jwtError) {
      console.error('JWT verification failed:', jwtError);
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    // 2. 获取参数
    const { product_id, success_url } = await req.json();
    if (!product_id || !success_url) {
      return NextResponse.json({ error: 'product_id and success_url are required' }, { status: 400 });
    }

    const apiKey = process.env.CREEM_API_KEY;
    if (!apiKey) {
      console.error('CREEM_API_KEY is not set in environment variables');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // 3. 创建 Creem 会话
    const isTestMode = process.env.NODE_ENV === 'development';
    const creemApiUrl = isTestMode 
      ? 'https://test-api.creem.io/v1/checkouts' 
      : 'https://api.creem.io/v1/checkouts';

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

    if (!response.ok) {
      const errorBody = await response.json();
      console.error('Creem API error:', errorBody);
      return NextResponse.json({ error: 'Failed to create checkout session', details: errorBody }, { status: response.status });
    }

    const checkoutSession = await response.json();
    // 4. 记录本地 Payment (临时跳过，直到数据库迁移完成)
    try {
      await prisma.payment.create({
        data: {
          userId,
          checkoutId: checkoutSession.id || checkoutSession.session_id || '',
          productId: product_id,
          status: 'pending',
        }
      });
    } catch (error) {
      console.warn('Payment table not available, skipping local record:', error);
      // 继续执行，不影响支付流程
    }
    return NextResponse.json({ checkout_url: checkoutSession.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 