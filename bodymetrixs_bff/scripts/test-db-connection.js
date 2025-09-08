#!/usr/bin/env node

/**
 * 数据库连接测试脚本
 * 用于验证 Prisma 和 Supabase 连接状态
 */

require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const { createClient } = require('@supabase/supabase-js');

console.log('🔍 数据库连接测试工具');
console.log('=====================================\n');

// 检查环境变量
console.log('📋 环境变量检查:');
console.log('DATABASE_URL:', process.env.DATABASE_URL ? '已设置' : '❌ 未设置');
console.log('NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? '已设置' : '❌ 未设置');
console.log('SUPABASE_SERVICE_ROLE_KEY:', process.env.SUPABASE_SERVICE_ROLE_KEY ? '已设置' : '❌ 未设置');
console.log('NODE_ENV:', process.env.NODE_ENV || '未设置');

// 测试 Prisma 连接
async function testPrismaConnection() {
  console.log('\n🗄️  测试 Prisma 数据库连接...');
  
  if (!process.env.DATABASE_URL) {
    console.log('❌ DATABASE_URL 未设置，跳过 Prisma 测试');
    return false;
  }

  const prisma = new PrismaClient();
  
  try {
    console.log('  - 尝试连接数据库...');
    const startTime = Date.now();
    
    // 测试基本连接
    await prisma.$queryRaw`SELECT 1 as test`;
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    
    console.log(`  ✅ Prisma 连接成功！响应时间: ${responseTime}ms`);
    
    // 测试表访问
    console.log('  - 测试数据库表访问...');
    const userCount = await prisma.user.count();
    console.log(`  ✅ 数据库表访问正常，用户数量: ${userCount}`);
    
    // 测试 Payment 表
    try {
      const paymentCount = await prisma.payment.count();
      console.log(`  ✅ Payment 表访问正常，记录数量: ${paymentCount}`);
    } catch (error) {
      console.log(`  ⚠️  Payment 表访问失败: ${error.message}`);
    }
    
    await prisma.$disconnect();
    return true;
    
  } catch (error) {
    console.error('  ❌ Prisma 连接失败:', error.message);
    
    if (error.message.includes('ECONNREFUSED')) {
      console.log('  💡 提示: 数据库服务可能未启动或端口错误');
    } else if (error.message.includes('authentication failed')) {
      console.log('  💡 提示: 数据库用户名或密码错误');
    } else if (error.message.includes('database does not exist')) {
      console.log('  💡 提示: 数据库不存在，请检查数据库名称');
    } else if (error.message.includes('connection timeout')) {
      console.log('  💡 提示: 连接超时，请检查网络或防火墙设置');
    }
    
    await prisma.$disconnect();
    return false;
  }
}

// 测试 Supabase 连接
async function testSupabaseConnection() {
  console.log('\n☁️  测试 Supabase 连接...');
  
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.log('❌ Supabase 环境变量未设置，跳过测试');
    return false;
  }

  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );
    
    console.log('  - 尝试连接 Supabase...');
    
    // 测试基本连接（使用无效 token 测试连接性）
    const { data, error } = await supabase.auth.getUser('test-token');
    
    if (error && error.message === 'Invalid JWT') {
      console.log('  ✅ Supabase 连接正常（预期的 JWT 验证失败）');
      return true;
    } else if (error) {
      console.log(`  ⚠️  Supabase 连接异常: ${error.message}`);
      return false;
    } else {
      console.log('  ✅ Supabase 连接正常');
      return true;
    }
    
  } catch (error) {
    console.error('  ❌ Supabase 连接失败:', error.message);
    return false;
  }
}

// 主测试函数
async function runTests() {
  console.log('\n🚀 开始数据库连接测试...\n');
  
  const prismaResult = await testPrismaConnection();
  const supabaseResult = await testSupabaseConnection();
  
  console.log('\n📊 测试结果总结:');
  console.log('=====================================');
  console.log(`Prisma 数据库连接: ${prismaResult ? '✅ 成功' : '❌ 失败'}`);
  console.log(`Supabase 连接: ${supabaseResult ? '✅ 成功' : '❌ 失败'}`);
  
  if (prismaResult && supabaseResult) {
    console.log('\n🎉 所有数据库连接测试通过！');
  } else if (prismaResult || supabaseResult) {
    console.log('\n⚠️  部分服务正常，请检查失败的连接');
  } else {
    console.log('\n❌ 所有数据库连接测试失败！');
  }
  
  console.log('\n💡 故障排除建议:');
  if (!prismaResult) {
    console.log('  1. 检查 DATABASE_URL 是否正确');
    console.log('  2. 确认数据库服务正在运行');
    console.log('  3. 验证数据库用户名和密码');
    console.log('  4. 检查防火墙和网络设置');
  }
  
  if (!supabaseResult) {
    console.log('  1. 检查 Supabase URL 和密钥');
    console.log('  2. 确认 Supabase 项目状态');
    console.log('  3. 验证服务角色密钥权限');
  }
  
  console.log('\n✨ 测试完成！');
}

// 运行测试
runTests().catch(console.error);
