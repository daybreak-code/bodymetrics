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
import PaymentSuccessPage from './pages/PaymentSuccessPage';
import CheckEmailPage from './pages/CheckEmailPage';
import AuthCallbackPage from './pages/AuthCallbackPage';
import { supabase } from './lib/supabase';
import { useEffect, useState } from 'react';

function App() {
  const { setCurrentUser } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const user = session?.user;
      setCurrentUser(user ? {
        id: user.id,
        name: user.user_metadata?.name || user.email,
        email: user.email || '',
        avatar: user.user_metadata?.avatar_url,
      } : null);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [setCurrentUser]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div>Loading authentication...</div>
      </div>
    );
  }

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/check-email" element={<CheckEmailPage />} />
      <Route path="/auth/confirm" element={<AuthCallbackPage />} />
      <Route path="/payment-success" element={<PaymentSuccessPage />} />
      
      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
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

function ProtectedRoute() {
  const { isAuthenticated } = useAuthStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default App;