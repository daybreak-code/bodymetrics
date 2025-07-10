import { createClient } from '@supabase/supabase-js';
import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function syncExistingUsers() {
  try {
    console.log('Starting user sync...');

    // 获取所有Supabase用户
    const { data: users, error } = await supabase.auth.admin.listUsers();
    
    if (error) {
      console.error('Error fetching users from Supabase:', error);
      return;
    }

    console.log(`Found ${users.users.length} users in Supabase`);

    let createdCount = 0;
    let skippedCount = 0;

    for (const user of users.users) {
      try {
        // 检查用户是否已经在业务表中存在
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email! }
        });

        if (existingUser) {
          console.log(`User ${user.email} already exists in business table`);
          skippedCount++;
          continue;
        }

        // 创建业务用户记录
        const newUser = await prisma.user.create({
          data: {
            id: user.id,
            email: user.email!,
            name: user.user_metadata?.name || user.email!.split('@')[0] || 'User',
            password: '', // 业务表中不需要存储密码
          }
        });

        console.log(`Created business user record for ${user.email}`);
        createdCount++;

      } catch (userError) {
        console.error(`Error processing user ${user.email}:`, userError);
      }
    }

    console.log(`Sync completed: ${createdCount} users created, ${skippedCount} users skipped`);

  } catch (error) {
    console.error('Sync failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// 运行脚本
syncExistingUsers(); 