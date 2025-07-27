import { createClient } from '@supabase/supabase-js';

// 从环境变量获取 Supabase 配置
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// 如果环境变量不可用，使用硬编码的值作为备用
// 注意：这是一个临时解决方案，应该尽快修复环境变量问题
const fallbackUrl = 'https://vpstrwdjvsrlzgsippqw.supabase.co';
const fallbackKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwc3Ryd2RqdnNybHpnc2lwcHF3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0OTU2MjgzMywiZXhwIjoyMDY1MTM4ODMzfQ.3apg-azBWfxz1K55CHlUTq9j8AxJvKx6OjzUbFrZDMs';

// 创建并导出 Supabase 客户端
export const supabase = createClient(
  supabaseUrl || fallbackUrl,
  supabaseServiceRoleKey || fallbackKey
);

// 日志输出，帮助调试环境变量问题
console.log('Supabase initialization:', {
  usingEnvUrl: !!supabaseUrl,
  usingEnvKey: !!supabaseServiceRoleKey,
  usingFallbackUrl: !supabaseUrl,
  usingFallbackKey: !supabaseServiceRoleKey
}); 