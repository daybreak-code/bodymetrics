import axios from 'axios';
import { supabase } from './supabase';

// 获取正确的 API 基础 URL
function getApiBaseUrl(): string {
  // 优先使用环境变量
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }
  
  // 备用方案：使用默认的后端地址
  return 'http://localhost:3000/api';
}

const apiClient = axios.create({
  baseURL: getApiBaseUrl(),
});

// 添加调试日志
console.log('🔧 API Client 配置:', {
  baseURL: getApiBaseUrl(),
  env: import.meta.env.VITE_API_BASE_URL ? '已设置' : '使用默认值',
  fullUrl: `${getApiBaseUrl()}/create-checkout`
});

// Request interceptor to add the Supabase auth token to headers
apiClient.interceptors.request.use(
  async (config) => {
    // 添加调试日志
    console.log('📤 发送 API 请求:', {
      method: config.method?.toUpperCase(),
      url: config.url,
      baseURL: config.baseURL,
      fullUrl: `${config.baseURL}${config.url}`,
      headers: config.headers
    });
    
    const { data: { session } } = await supabase.auth.getSession();
    const token = session?.access_token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log('✅ 已添加认证 token');
    } else {
      console.warn('⚠️ 未找到认证 token');
    }
    return config;
  },
  (error) => {
    console.error('❌ 请求拦截器错误:', error);
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors better
apiClient.interceptors.response.use(
  (response) => {
    console.log('✅ API 响应成功:', {
      status: response.status,
      url: response.config.url,
      baseURL: response.config.baseURL,
      fullUrl: `${response.config.baseURL}${response.config.url}`,
      data: response.data
    });
    return response;
  },
  (error) => {
    console.error('❌ API Error:', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      url: error.config?.url,
      baseURL: error.config?.baseURL,
      fullUrl: error.config?.baseURL + error.config?.url,
      data: error.response?.data,
      message: error.message
    });
    return Promise.reject(error);
  }
);

// The Supabase client handles token refresh automatically.
// The onAuthStateChange listener in App.tsx will handle logout on session expiry.

export default apiClient; 