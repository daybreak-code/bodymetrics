import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import { jwtVerify } from 'jose';

export async function GET(req: NextRequest) {
  try {
    // 1. 校验 Supabase JWT
    const authHeader = req.headers.get('authorization');
    const token = authHeader?.split(' ')[1];
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.SUPABASE_JWT_SECRET!));
    const userId = payload.sub as string;

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