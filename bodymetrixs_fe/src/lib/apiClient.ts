import axios from 'axios';
import { supabase } from './supabase';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
});

// Request interceptor to add the Supabase auth token to headers
apiClient.interceptors.request.use(
  async (config) => {
    const { data: { session } } = await supabase.auth.getSession();
    const token = session?.access_token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// The Supabase client handles token refresh automatically.
// The onAuthStateChange listener in App.tsx will handle logout on session expiry.

export default apiClient; 