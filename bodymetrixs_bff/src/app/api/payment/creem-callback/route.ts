import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const { checkout_id, order_id, status } = await req.json();
    if (!checkout_id || !status) {
      return NextResponse.json({ error: 'checkout_id and status are required' }, { status: 400 });
    }
    // TODO: 校验 Creem 回调签名，防止伪造
    try {
      await prisma.payment.updateMany({
        where: { checkoutId: checkout_id },
        data: { status, orderId: order_id }
      });
    } catch (error) {
      console.warn('Payment table not available, skipping update:', error);
      // 继续执行，不影响回调处理
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Creem callback error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 