import { createClient } from '@supabase/supabase-js';
import { PrismaClient } from '../src/generated/prisma';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const prisma = new PrismaClient();

async function syncAllUsers() {
  try {
    console.log('Starting user sync process...');

    // 获取所有 Supabase 用户
    const { data: { users }, error } = await supabase.auth.admin.listUsers();
    
    if (error) {
      console.error('Error fetching Supabase users:', error);
      return;
    }

    console.log(`Found ${users.length} users in Supabase`);

    let syncedCount = 0;
    let errorCount = 0;

    for (const supabaseUser of users) {
      try {
        // 检查用户是否已经在业务表中存在
        const existingUser = await prisma.user.findUnique({
          where: { id: supabaseUser.id }
        });

        if (existingUser) {
          console.log(`User ${supabaseUser.email} already exists in business table`);
          continue;
        }

        // 创建用户同步数据
        const userData = {
          id: supabaseUser.id,
          email: supabaseUser.email!,
          name: supabaseUser.user_metadata?.name || supabaseUser.email!.split('@')[0] || 'User',
        };

        // 同步到业务表
        const businessUser = await prisma.user.create({
          data: {
            id: userData.id,
            email: userData.email,
            name: userData.name,
            password: '', // 业务表中不存储密码
          }
        });

        console.log(`Synced user: ${businessUser.email} (${businessUser.id})`);
        syncedCount++;

      } catch (userError) {
        console.error(`Error syncing user ${supabaseUser.email}:`, userError);
        errorCount++;
      }
    }

    console.log(`\nSync completed:`);
    console.log(`- Total users in Supabase: ${users.length}`);
    console.log(`- Successfully synced: ${syncedCount}`);
    console.log(`- Errors: ${errorCount}`);

  } catch (error) {
    console.error('Sync process failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// 运行同步脚本
if (require.main === module) {
  syncAllUsers();
}

export { syncAllUsers }; 