import { Link } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { useMeasurementStore } from '../stores/measurementStore';
import { useDiseaseStore } from '../stores/diseaseStore';
import { 
  Ruler, HeartPulse, ChevronRight, Activity
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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

  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
      <p className="text-neutral-600 mb-8">Welcome back, {user?.name}</p>
      
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