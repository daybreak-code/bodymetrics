import { prisma } from './prisma';
import { createClient } from '@supabase/supabase-js';

// 创建Supabase客户端
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export interface UserSyncData {
  id: string;
  email: string;
  name: string;
}

/**
 * 同步用户到业务表
 * @param userData 用户数据
 * @returns 同步后的用户数据
 */
export async function syncUserToBusinessTable(userData: UserSyncData) {
  try {
    // 验证Supabase用户是否存在
    const { data: { user }, error } = await supabase.auth.admin.getUserById(userData.id);
    
    if (error || !user) {
      throw new Error(`Supabase user not found: ${error?.message || 'Unknown error'}`);
    }

    // 使用 upsert 操作，如果用户不存在则创建，存在则更新
    const businessUser = await prisma.user.upsert({
      where: { id: userData.id },
      update: {
        email: userData.email,
        name: userData.name,
      },
      create: {
        id: userData.id,
        email: userData.email,
        name: userData.name,
        password: '', // 业务表中不需要存储密码，认证由Supabase处理
      }
    });

    console.log('User synced to business table:', businessUser.id);
    return businessUser;

  } catch (error) {
    console.error('User sync error:', error);
    throw error;
  }
}

/**
 * 从Supabase用户数据创建同步数据
 * @param supabaseUser Supabase用户对象
 * @returns 用户同步数据
 */
export function createUserSyncData(supabaseUser: any): UserSyncData {
  return {
    id: supabaseUser.id,
    email: supabaseUser.email!,
    name: supabaseUser.user_metadata?.name || supabaseUser.email!.split('@')[0] || 'User',
  };
}

/**
 * 验证用户是否在业务表中存在
 * @param userId 用户ID
 * @returns 用户是否存在
 */
export async function userExistsInBusinessTable(userId: string): Promise<boolean> {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });
    return !!user;
  } catch (error) {
    console.error('Error checking user existence:', error);
    return false;
  }
}

/**
 * 获取业务表中的用户
 * @param userId 用户ID
 * @returns 用户数据或null
 */
export async function getUserFromBusinessTable(userId: string) {
  try {
    return await prisma.user.findUnique({
      where: { id: userId }
    });
  } catch (error) {
    console.error('Error getting user from business table:', error);
    return null;
  }
} 