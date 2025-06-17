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
import { supabase } from './lib/supabase';
import { useEffect, useState } from 'react';

function App() {
  const { isAuthenticated, setCurrentUser } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setCurrentUser({
          id: session.user.id,
          name: session.user.user_metadata?.name || '',
          email: session.user.email || '',
          avatar: session.user.user_metadata?.avatar_url || '',
        });
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    // Initial check in case onAuthStateChange doesn't fire immediately on load
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setCurrentUser({
          id: session.user.id,
          name: session.user.user_metadata?.name || '',
          email: session.user.email || '',
          avatar: session.user.user_metadata?.avatar_url || '',
        });
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [setCurrentUser]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      
      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} loading={loading} />}>
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
function ProtectedRoute({ isAuthenticated, loading }: { isAuthenticated: boolean; loading: boolean }) {
  if (loading) {
    return <div>Loading authentication...</div>; // Or a more sophisticated loading indicator
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default App;