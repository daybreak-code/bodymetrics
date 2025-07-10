import { Link } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { useMeasurementStore } from '../stores/measurementStore';
import { useDiseaseStore } from '../stores/diseaseStore';
import { 
  Ruler, HeartPulse, ChevronRight, Activity
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';
import SettingsPage from './SettingsPage';
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

async function handleCreemPay(productId: string) {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    alert('请先登录');
    return;
  }
  console.log(`handleCreemPay: ${productId}`)
  const res = await fetch('/api/create-checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${session.access_token}`,
    },
    body: JSON.stringify({
      product_id: productId,
      success_url: window.location.origin + '/payment-success'
    })
  });
  const data = await res.json();
  if (data.checkout_url) {
    window.location.href = data.checkout_url;
  } else {
    alert('支付会话创建失败: ' + (data.error || '未知错误'));
  }
}

const DashboardPage = () => {
  const { user } = useAuthStore();
  const { getRecentMeasurements } = useMeasurementStore();
  const { diseases } = useDiseaseStore();
  
  const recentMeasurements = getRecentMeasurements(3);
  
  // Prepare chart data
  const chartData = recentMeasurements.map(m => ({
    date: m.date,
    weight: m.weight || 0,
    waist: m.waistCircumference || 0,
    arm: m.armCircumference || 0,
    leg: m.legCircumference || 0
  })).reverse();

  const { payment, loading, error } = useLatestPayment();

  return (
    <div className="animate-fade-in">
      <div className="mb-6 p-4 bg-blue-50 rounded-lg flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            onClick={() => handleCreemPay('prod_27UFKIrC71jFuMT72hB90v')}
          >
            去支付
          </button>
        </div>
        <div className="mt-2 md:mt-0 md:ml-4">
          {loading ? '支付状态加载中...' : error ? error : payment ? (
            <span className="text-green-600">支付状态：{payment.status}，订单号：{payment.orderId || '无'}</span>
          ) : '暂无支付记录'}
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
      <p className="text-neutral-600 mb-8">Welcome back, {user?.name}</p>
      
      <div className="mb-6">
        <button
          onClick={() => handleCreemPay('prod_27UFKIrC71jFuMT72hB90v')}
          className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Upgrade to Pro
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Measurements */}
        <section className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent Measurements</h2>
            <Link to="/measurements" className="text-primary-600 text-sm font-medium hover:text-primary-700 flex items-center">
              View All <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="text-left py-3 font-medium text-neutral-600 text-sm">Date</th>
                  <th className="text-left py-3 font-medium text-neutral-600 text-sm">Weight</th>
                  <th className="text-left py-3 font-medium text-neutral-600 text-sm">Height</th>
                  <th className="text-left py-3 font-medium text-neutral-600 text-sm">BMI</th>
                </tr>
              </thead>
              <tbody>
                {recentMeasurements.map((measurement) => (
                  <tr key={measurement.id} className="border-b border-neutral-100 hover:bg-neutral-50">
                    <td className="py-3 text-sm">{measurement.date}</td>
                    <td className="py-3 text-sm">{measurement.weight} kg</td>
                    <td className="py-3 text-sm">{measurement.height} cm</td>
                    <td className="py-3 text-sm">{measurement.bmi}</td>
                  </tr>
                ))}
                {recentMeasurements.length === 0 && (
                  <tr>
                    <td colSpan={4} className="py-4 text-center text-neutral-500 text-sm">
                      No measurements recorded yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
        
        {/* Health Status */}
        <section className="card">
          <h2 className="text-xl font-semibold mb-4">Health Status</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <p className="text-neutral-600 text-sm mb-1">Blood Pressure</p>
              <p className="text-2xl font-semibold">120/80 mmHg</p>
            </div>
            
            <div className="bg-neutral-50 p-4 rounded-lg">
              <p className="text-neutral-600 text-sm mb-1">Cholesterol</p>
              <p className="text-2xl font-semibold">180 mg/dL</p>
            </div>
            
            <div className="bg-neutral-50 p-4 rounded-lg">
              <p className="text-neutral-600 text-sm mb-1">Glucose</p>
              <p className="text-2xl font-semibold">90 mg/dL</p>
            </div>
          </div>
        </section>
        
        {/* Body Measurement Trends */}
        <section className="card lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Measurement Trends</h2>
          
          <div className="h-80">
            {chartData.length > 0 ? (
              <ResponsiveContainer width="100%\" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="weight" 
                    name="Weight (kg)"
                    stroke="#0078d4" 
                    activeDot={{ r: 8 }} 
                    strokeWidth={2}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="waist" 
                    name="Waist (cm)"
                    stroke="#34c759" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center text-neutral-500">
                No measurement data available to display trends
              </div>
            )}
          </div>
        </section>
        
        {/* Quick Actions */}
        <section className="card">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/measurements"
              className="bg-neutral-50 p-4 rounded-lg hover:bg-neutral-100 transition-colors flex flex-col items-center text-center"
            >
              <Ruler size={24} className="text-primary-600 mb-2" />
              <span className="font-medium">Record Measurements</span>
            </Link>
            
            <Link
              to="/disease-management"
              className="bg-neutral-50 p-4 rounded-lg hover:bg-neutral-100 transition-colors flex flex-col items-center text-center"
            >
              <HeartPulse size={24} className="text-primary-600 mb-2" />
              <span className="font-medium">Manage Diseases</span>
            </Link>
          </div>
        </section>
        
        {/* Disease Summary */}
        <section className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Disease Summary</h2>
            <Link to="/disease-management" className="text-primary-600 text-sm font-medium hover:text-primary-700 flex items-center">
              Manage <ChevronRight size={16} />
            </Link>
          </div>
          
          {diseases.length > 0 ? (
            <ul className="divide-y divide-neutral-100">
              {diseases.map((disease) => (
                <li key={disease.id} className="py-3">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">{disease.name}</h3>
                      <p className="text-sm text-neutral-600">
                        {disease.medications.length} medication(s)
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Activity size={18} className="text-neutral-400 mr-2" />
                      <span className="text-sm">Since {disease.onsetDate}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-neutral-500 py-4">
              No diseases recorded yet
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;