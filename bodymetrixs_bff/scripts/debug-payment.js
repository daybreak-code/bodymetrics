#!/usr/bin/env node

/**
 * 支付系统调试脚本
 * 用于诊断支付相关的问题
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 BodyMetrics 支付系统调试工具');
console.log('=====================================\n');

// 检查环境变量
console.log('📋 环境变量检查:');
console.log('NODE_ENV:', process.env.NODE_ENV || '未设置');
console.log('CREEM_API_KEY:', process.env.CREEM_API_KEY ? '已设置' : '❌ 未设置');
console.log('DATABASE_URL:', process.env.DATABASE_URL ? '已设置' : '❌ 未设置');
console.log('SUPABASE_SERVICE_ROLE_KEY:', process.env.SUPABASE_SERVICE_ROLE_KEY ? '已设置' : '❌ 未设置');

// 检查 .env 文件
const envPath = path.join(__dirname, '..', '.env');
console.log('\n📁 .env 文件检查:');
if (fs.existsSync(envPath)) {
  console.log('✅ .env 文件存在');
  const envContent = fs.readFileSync(envPath, 'utf8');
  const hasCreemKey = envContent.includes('CREEM_API_KEY');
  const hasDatabaseUrl = envContent.includes('DATABASE_URL');
  console.log('  - CREEM_API_KEY:', hasCreemKey ? '✅ 已配置' : '❌ 未配置');
  console.log('  - DATABASE_URL:', hasDatabaseUrl ? '✅ 已配置' : '❌ 未配置');
} else {
  console.log('❌ .env 文件不存在');
}

// 检查 package.json
const packagePath = path.join(__dirname, '..', 'package.json');
console.log('\n📦 依赖检查:');
if (fs.existsSync(packagePath)) {
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  console.log('  - Next.js 版本:', packageJson.dependencies?.next || '未安装');
  console.log('  - Prisma 版本:', packageJson.dependencies?.prisma || '未安装');
  console.log('  - @prisma/client 版本:', packageJson.dependencies?.['@prisma/client'] || '未安装');
}

// 检查 Prisma schema
const prismaPath = path.join(__dirname, '..', 'prisma', 'schema.prisma');
console.log('\n🗄️  Prisma Schema 检查:');
if (fs.existsSync(prismaPath)) {
  console.log('✅ Prisma schema 文件存在');
  const schemaContent = fs.readFileSync(prismaPath, 'utf8');
  const hasPaymentModel = schemaContent.includes('model Payment');
  const hasUserModel = schemaContent.includes('model User');
  console.log('  - Payment 模型:', hasPaymentModel ? '✅ 已定义' : '❌ 未定义');
  console.log('  - User 模型:', hasUserModel ? '✅ 已定义' : '❌ 未定义');
} else {
  console.log('❌ Prisma schema 文件不存在');
}

// 检查 API 路由
const apiPath = path.join(__dirname, '..', 'src', 'app', 'api');
console.log('\n🌐 API 路由检查:');
if (fs.existsSync(apiPath)) {
  const apiDirs = fs.readdirSync(apiPath);
  console.log('  - 可用的 API 端点:');
  apiDirs.forEach(dir => {
    const routePath = path.join(apiPath, dir);
    if (fs.statSync(routePath).isDirectory()) {
      const hasRoute = fs.existsSync(path.join(routePath, 'route.ts'));
      console.log(`    ${dir}: ${hasRoute ? '✅' : '❌'}`);
    }
  });
}

// 建议
console.log('\n💡 建议:');
if (!process.env.CREEM_API_KEY) {
  console.log('  1. 设置 CREEM_API_KEY 环境变量');
  console.log('  2. 在 .env 文件中添加: CREEM_API_KEY="your_actual_key"');
}
if (!process.env.DATABASE_URL) {
  console.log('  3. 设置 DATABASE_URL 环境变量');
  console.log('  4. 确保数据库连接正常');
}
console.log('  5. 重启开发服务器以使环境变量生效');
console.log('  6. 检查浏览器控制台的错误信息');
console.log('  7. 检查后端服务器日志');

console.log('\n🔧 调试步骤:');
console.log('  1. 确保后端服务器正在运行');
console.log('  2. 检查前端 API 基础 URL 配置');
console.log('  3. 验证用户登录状态');
console.log('  4. 检查网络请求是否正常');
console.log('  5. 查看后端服务器控制台输出');

console.log('\n✨ 调试完成！');
