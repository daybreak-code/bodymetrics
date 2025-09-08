// require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function testConnection() {
  try {
    console.log('🔍 测试数据库连接...');
    await prisma.$queryRaw`SELECT 1`;
    console.log('✅ 数据库连接成功');
    
    console.log('🔍 测试用户表访问...');
    const userCount = await prisma.user.count();
    console.log(`✅ 用户表访问成功，共有 ${userCount} 个用户`);
    
  } catch (error) {
    console.log('❌ 数据库连接失败:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
