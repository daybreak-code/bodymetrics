import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from './stores/authStore';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import MeasurementsPage from './pages/MeasurementsPage';
import DiseaseManagementPage from './pages/DiseaseManagementPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  const { isAuthenticated } = useAuthStore();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      
      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/measurements" element={<MeasurementsPage />} />
          <Route path="/disease-management" element={<DiseaseManagementPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

// Protected route component to guard authenticated routes
function ProtectedRoute({ isAuthenticated }: { isAuthenticated: boolean }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default App;