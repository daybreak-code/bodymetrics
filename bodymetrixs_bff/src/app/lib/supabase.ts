import { createClient } from '@supabase/supabase-js';

// 从环境变量获取 Supabase 配置
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// 验证必需的配置
if (!supabaseUrl) {
  throw new Error('NEXT_PUBLIC_SUPABASE_URL environment variable is required');
}

if (!supabaseServiceRoleKey) {
  throw new Error('SUPABASE_SERVICE_ROLE_KEY environment variable is required');
}

// 创建并导出 Supabase 客户端
export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

// 日志输出，帮助调试环境变量问题
console.log('Supabase initialization:', {
  usingEnvUrl: !!supabaseUrl,
  usingEnvKey: !!supabaseServiceRoleKey,
  url: supabaseUrl?.substring(0, 30) + '...',
  keyLength: supabaseServiceRoleKey?.length || 0
});

