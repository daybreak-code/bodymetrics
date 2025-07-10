import { useSearchParams } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

function useLatestPayment() {
  const [payment, setPayment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPayment() {
      setLoading(true);
      setError(null);
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setError('未登录');
        setLoading(false);
        return;
      }
      const res = await fetch('/api/payment/user-latest', {
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
        }
      });
      if (!res.ok) {
        setError('未找到支付记录');
        setLoading(false);
        return;
      }
      const json = await res.json();
      setPayment(json.payment);
      setLoading(false);
    }
    fetchPayment();
  }, []);

  return { payment, loading, error };
}

const PaymentSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const { payment, loading, error } = useLatestPayment();

  const paymentDetails = {
    checkout_id: searchParams.get('checkout_id'),
    order_id: searchParams.get('order_id'),
    customer_id: searchParams.get('customer_id'),
    product_id: searchParams.get('product_id'),
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-neutral-50 p-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-apple-md p-8 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
        <p className="text-neutral-600 mb-6">Thank you for your purchase. Your account has been upgraded.</p>
        <div className="mb-4">
          {loading ? '支付状态加载中...' : error ? error : payment ? (
            <span className="text-green-600">支付状态：{payment.status}，订单号：{payment.orderId || '无'}</span>
          ) : '暂无支付记录'}
        </div>
        
        <div className="text-left bg-neutral-100 rounded-lg p-4 space-y-2">
          <p><strong>Checkout ID:</strong> {payment?.checkoutId}</p>
          <p><strong>Order ID:</strong> {payment?.orderId}</p>
          <p><strong>Product ID:</strong> {payment?.productId}</p>
          <p><strong>支付状态:</strong> {payment?.status}</p>
          <p><strong>创建时间:</strong> {payment?.createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage; 