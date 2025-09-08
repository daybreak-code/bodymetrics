/**
 * URL 工具函数
 * 用于安全地构建和处理各种 URL
 */

/**
 * 获取当前应用的基础 URL
 * @returns 基础 URL，例如 "http://localhost:5173"
 */
export function getBaseUrl(): string {
  // 优先使用环境变量
  if (import.meta.env.VITE_API_BASE_URL) {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    // 移除 /api 后缀
    const baseUrl = apiUrl.replace('/api', '');
    
    // 确保 URL 包含协议
    if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
      return `http://${baseUrl}`;
    }
    return baseUrl;
  }
  
  // 备用方案：从当前页面 URL 构建
  try {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    return `${url.protocol}//${url.host}`;
  } catch (error) {
    console.warn('无法从当前页面 URL 构建基础 URL，使用默认值:', error);
    // 默认值
    return 'http://localhost:5173';
  }
}

/**
 * 构建完整的 URL
 * @param path 路径，例如 "/payment-success"
 * @returns 完整的 URL
 */
export function buildUrl(path: string): string {
  const baseUrl = getBaseUrl();
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const fullUrl = `${baseUrl}${cleanPath}`;
  
  // 验证生成的 URL
  try {
    new URL(fullUrl);
    return fullUrl;
  } catch (error) {
    console.error('生成的 URL 无效:', fullUrl, error);
    // 返回备用 URL
    return `http://localhost:5173${cleanPath}`;
  }
}

/**
 * 验证 URL 格式是否正确
 * @param url 要验证的 URL
 * @returns 是否为有效的 URL
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * 获取支付成功页面的 URL
 * @returns 支付成功页面的完整 URL
 */
export function getPaymentSuccessUrl(): string {
  return buildUrl('/payment-success');
}

/**
 * 获取 API 基础 URL
 * @returns API 基础 URL
 */
export function getApiBaseUrl(): string {
  return import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';
}

/**
 * 调试函数：显示所有 URL 相关信息
 */
export function debugUrls(): void {
  console.log('🔍 URL 调试信息:');
  console.log('  - VITE_API_BASE_URL:', import.meta.env.VITE_API_BASE_URL);
  console.log('  - 当前页面 URL:', window.location.href);
  console.log('  - 基础 URL:', getBaseUrl());
  console.log('  - API 基础 URL:', getApiBaseUrl());
  console.log('  - 支付成功 URL:', getPaymentSuccessUrl());
}
