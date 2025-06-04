import { useState } from 'react';
import { useMeasurementStore } from '../stores/measurementStore';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Download, Save, TrendingDown, TrendingUp } from 'lucide-react';

const MeasurementsPage = () => {
  const { measurements, addMeasurement, exportData } = useMeasurementStore();
  const [measurementInputs, setMeasurementInputs] = useState({
    date: new Date().toISOString().split('T')[0],
    weight: '',
    height: '',
    armCircumference: '',
    legCircumference: '',
    waistCircumference: '',
    chestCircumference: '',
    hipCircumference: '',
    neckCircumference: '',
  });
  const [quickEntry, setQuickEntry] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMeasurementInputs({
      ...measurementInputs,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { 
      date, weight, height, armCircumference, legCircumference,
      waistCircumference, chestCircumference, hipCircumference, neckCircumference 
    } = measurementInputs;
    
    // Calculate BMI if weight and height are provided
    let bmi;
    if (weight && height) {
      const weightNum = parseFloat(weight);
      const heightNum = parseFloat(height) / 100; // Convert cm to meters
      bmi = weightNum / (heightNum * heightNum);
      bmi = Math.round(bmi * 10) / 10; // Round to 1 decimal place
    }
    
    addMeasurement({
      date,
      weight: weight ? parseFloat(weight) : undefined,
      height: height ? parseFloat(height) : undefined,
      armCircumference: armCircumference ? parseFloat(armCircumference) : undefined,
      legCircumference: legCircumference ? parseFloat(legCircumference) : undefined,
      waistCircumference: waistCircumference ? parseFloat(waistCircumference) : undefined,
      chestCircumference: chestCircumference ? parseFloat(chestCircumference) : undefined,
      hipCircumference: hipCircumference ? parseFloat(hipCircumference) : undefined,
      neckCircumference: neckCircumference ? parseFloat(neckCircumference) : undefined,
      bmi,
    });
    
    // Reset form
    setMeasurementInputs({
      date: new Date().toISOString().split('T')[0],
      weight: '',
      height: '',
      armCircumference: '',
      legCircumference: '',
      waistCircumference: '',
      chestCircumference: '',
      hipCircumference: '',
      neckCircumference: '',
    });
  };

  const handleQuickEntrySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Parse quick entry format like "Arm: 32cm, Leg: 45cm, Waist: 80cm"
    const parts = quickEntry.split(',').map(part => part.trim());
    const newMeasurement: any = {
      date: new Date().toISOString().split('T')[0],
    };
    
    parts.forEach(part => {
      const [key, value] = part.split(':').map(item => item.trim());
      if (key && value) {
        const numericValue = parseFloat(value.replace(/[^\d.]/g, ''));
        
        if (key.toLowerCase().includes('arm')) {
          newMeasurement.armCircumference = numericValue;
        } else if (key.toLowerCase().includes('leg')) {
          newMeasurement.legCircumference = numericValue;
        } else if (key.toLowerCase().includes('waist')) {
          newMeasurement.waistCircumference = numericValue;
        } else if (key.toLowerCase().includes('chest')) {
          newMeasurement.chestCircumference = numericValue;
        } else if (key.toLowerCase().includes('hip')) {
          newMeasurement.hipCircumference = numericValue;
        } else if (key.toLowerCase().includes('neck')) {
          newMeasurement.neckCircumference = numericValue;
        } else if (key.toLowerCase().includes('weight')) {
          newMeasurement.weight = numericValue;
        } else if (key.toLowerCase().includes('height')) {
          newMeasurement.height = numericValue;
        }
      }
    });
    
    addMeasurement(newMeasurement);
    setQuickEntry('');
  };

  const handleExport = () => {
    const csvContent = exportData();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'bodymetrics-measurements.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Prepare chart data
  const sortedMeasurements = [...measurements].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  
  const chartData = sortedMeasurements.map(m => ({
    date: m.date,
    weight: m.weight || 0,
    waist: m.waistCircumference || 0,
    arm: m.armCircumference || 0,
    leg: m.legCircumference || 0
  }));

  // Calculate trends
  const calculateTrend = (field: keyof typeof sortedMeasurements[0]) => {
    if (sortedMeasurements.length < 2) return null;
    
    const lastIndex = sortedMeasurements.length - 1;
    const current = sortedMeasurements[lastIndex][field] as number;
    const previous = sortedMeasurements[lastIndex - 1][field] as number;
    
    if (current === undefined || previous === undefined) return null;
    
    const diff = current - previous;
    const percentage = (diff / previous) * 100;
    
    return {
      diff,
      percentage: Math.round(percentage * 10) / 10,
      increasing: diff > 0
    };
  };
  
  const weightTrend = calculateTrend('weight');
  
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold mb-2">Measurements</h1>
      <p className="text-neutral-600 mb-8">Track your body metrics over time.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Record Measurements Form */}
        <section className="card">
          <h2 className="text-xl font-semibold mb-4">Record Measurements</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="input"
                  value={measurementInputs.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="weight" className="block text-sm font-medium text-neutral-700 mb-1">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  step="0.1"
                  className="input"
                  value={measurementInputs.weight}
                  onChange={handleInputChange}
                  placeholder="Enter weight"
                />
              </div>
              
              <div>
                <label htmlFor="height" className="block text-sm font-medium text-neutral-700 mb-1">
                  Height (cm)
                </label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  step="0.1"
                  className="input"
                  value={measurementInputs.height}
                  onChange={handleInputChange}
                  placeholder="Enter height"
                />
              </div>
              
              <div>
                <label htmlFor="armCircumference" className="block text-sm font-medium text-neutral-700 mb-1">
                  Arm Circumference (cm)
                </label>
                <input
                  type="number"
                  id="armCircumference"
                  name="armCircumference"
                  step="0.1"
                  className="input"
                  value={measurementInputs.armCircumference}
                  onChange={handleInputChange}
                  placeholder="Enter arm circumference"
                />
              </div>
              
              <div>
                <label htmlFor="legCircumference" className="block text-sm font-medium text-neutral-700 mb-1">
                  Leg Circumference (cm)
                </label>
                <input
                  type="number"
                  id="legCircumference"
                  name="legCircumference"
                  step="0.1"
                  className="input"
                  value={measurementInputs.legCircumference}
                  onChange={handleInputChange}
                  placeholder="Enter leg circumference"
                />
              </div>
              
              <div>
                <label htmlFor="waistCircumference" className="block text-sm font-medium text-neutral-700 mb-1">
                  Waist Circumference (cm)
                </label>
                <input
                  type="number"
                  id="waistCircumference"
                  name="waistCircumference"
                  step="0.1"
                  className="input"
                  value={measurementInputs.waistCircumference}
                  onChange={handleInputChange}
                  placeholder="Enter waist circumference"
                />
              </div>
              
              <div>
                <label htmlFor="chestCircumference" className="block text-sm font-medium text-neutral-700 mb-1">
                  Chest Circumference (cm)
                </label>
                <input
                  type="number"
                  id="chestCircumference"
                  name="chestCircumference"
                  step="0.1"
                  className="input"
                  value={measurementInputs.chestCircumference}
                  onChange={handleInputChange}
                  placeholder="Enter chest circumference"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <button type="submit" className="btn-primary flex items-center justify-center">
                <Save size={18} className="mr-2" />
                Save Measurements
              </button>
            </div>
          </form>
        </section>
        
        {/* Quick Entry */}
        <section className="card">
          <h2 className="text-xl font-semibold mb-4">Quick Entry</h2>
          <p className="text-neutral-600 text-sm mb-4">
            Enter measurements in a single line (e.g., Arm: 32cm, Leg: 45cm, Waist: 80cm)
          </p>
          
          <form onSubmit={handleQuickEntrySubmit}>
            <div className="mb-4">
              <input
                type="text"
                className="input"
                value={quickEntry}
                onChange={(e) => setQuickEntry(e.target.value)}
                placeholder="e.g., Arm: 32cm, Leg: 45cm, Waist: 80cm"
              />
            </div>
            
            <button type="submit" className="btn-primary w-full">
              Submit Quick Entry
            </button>
          </form>
        </section>
        
        {/* Measurement Trends */}
        <section className="card lg:col-span-2">
          <div className="flex flex-wrap items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Measurement Trends</h2>
            
            {weightTrend && (
              <div className="flex items-center">
                <div className={`flex items-center ${
                  weightTrend.increasing ? 'text-danger' : 'text-success'
                }`}>
                  {weightTrend.increasing ? (
                    <TrendingUp size={18} className="mr-1" />
                  ) : (
                    <TrendingDown size={18} className="mr-1" />
                  )}
                  <span className="text-sm font-medium">
                    {weightTrend.increasing ? '+' : ''}
                    {weightTrend.diff.toFixed(1)}kg ({weightTrend.percentage}%)
                  </span>
                </div>
                <span className="text-xs text-neutral-500 ml-2">Last 30 Days</span>
              </div>
            )}
            
            <button onClick={handleExport} className="btn-secondary flex items-center text-sm mt-2 sm:mt-0">
              <Download size={16} className="mr-1" />
              Export Data
            </button>
          </div>
          
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
                  <Line 
                    type="monotone" 
                    dataKey="arm" 
                    name="Arm (cm)"
                    stroke="#ff9500" 
                    strokeWidth={2}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="leg" 
                    name="Leg (cm)"
                    stroke="#af52de" 
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
      </div>
    </div>
  );
};

export default MeasurementsPage;