import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import { supabase } from '@/app/lib/supabase';

export async function GET(req: NextRequest) {
  try {
    // 1. 从请求头获取token（由中间件设置）
    const authHeader = req.headers.get('Authorization') || req.headers.get('x-auth-token');
    if (!authHeader) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // 处理Bearer token格式
    const token = authHeader.startsWith('Bearer ') ? authHeader.substring(7) : authHeader;
    
    // 使用Supabase客户端验证JWT
    const { data: { user }, error } = await supabase.auth.getUser(token);
    
    if (error || !user) {
      console.error('JWT verification failed:', error);
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }
    
    const userId = user.id;
    console.log('JWT verification successful, userId:', userId);

    // 2. 查询最近一条支付记录
    try {
      const payment = await prisma.payment.findFirst({
        where: { userId },
        orderBy: { createdAt: 'desc' },
      });
      if (!payment) return NextResponse.json({ error: 'No payment found' }, { status: 404 });
      return NextResponse.json({ payment });
    } catch (error) {
      console.warn('Payment table not available:', error);
      return NextResponse.json({ error: 'Payment service temporarily unavailable' }, { status: 503 });
    }
  } catch (error) {
    console.error('user-latest payment error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 