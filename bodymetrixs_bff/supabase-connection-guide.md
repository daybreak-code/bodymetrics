# Supabase 数据库连接配置指南

## 问题分析
当前错误：`FATAL: Tenant or user not found`

## 解决方案

### 1. 获取正确的数据库连接字符串

#### 方法 A: 使用 Supabase Dashboard
1. 登录 [Supabase Dashboard](https://supabase.com/dashboard)
2. 选择你的项目
3. 进入 **Settings** > **Database**
4. 在 **Connection string** 部分选择 **URI** 格式
5. 复制连接字符串

#### 方法 B: 手动构建连接字符串
```
postgresql://postgres.vpstrwdjvsrlzgsippqw:YOUR_PASSWORD@aws-0-us-west-1.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1&pool_timeout=20
```

**重要参数说明：**
- `postgres.vpstrwdjvsrlzgsippqw` - 这是你的项目引用ID
- `YOUR_PASSWORD` - 需要替换为实际的数据库密码
- `aws-0-us-west-1.pooler.supabase.com:6543` - Supabase 的 pooler 地址
- `pgbouncer=true` - 启用连接池
- `connection_limit=1` - 限制连接数
- `pool_timeout=20` - 连接超时时间

### 2. 获取数据库密码

1. 在 Supabase Dashboard 中进入 **Settings** > **Database**
2. 找到 **Database password** 部分
3. 点击 **Reset password** 生成新密码
4. 复制新密码

### 3. 更新 Prisma 配置

#### 选项 A: 直接在 schema.prisma 中设置（临时方案）
```prisma
datasource db {
  provider = "postgresql"
  url      = "postgresql://postgres.vpstrwdjvsrlzgsippqw:ACTUAL_PASSWORD@aws-0-us-west-1.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1&pool_timeout=20"
  schemas  = ["auth", "public"]
}
```

#### 选项 B: 使用环境变量（推荐方案）
1. 创建 `.env` 文件
2. 添加：`DATABASE_URL="你的连接字符串"`
3. 在 schema.prisma 中使用：`url = env("DATABASE_URL")`

### 4. 测试连接

```bash
# 验证 Prisma 配置
npx prisma validate

# 测试数据库连接
npx prisma db pull

# 生成 Prisma 客户端
npx prisma generate
```

### 5. 常见问题

#### 问题 1: "Tenant or user not found"
- 检查用户名是否正确（应该是 `postgres.vpstrwdjvsrlzgsippqw`）
- 确认密码是否正确
- 验证项目引用ID是否正确

#### 问题 2: 连接超时
- 检查网络连接
- 确认防火墙设置
- 尝试使用不同的连接方式

#### 问题 3: 权限不足
- 确认使用的是正确的数据库用户
- 检查数据库策略设置

## 安全提醒

⚠️ **重要：**
1. 不要在代码中硬编码密码
2. 使用环境变量存储敏感信息
3. 定期轮换数据库密码
4. 不要将包含密码的文件提交到版本控制

## 下一步

配置完成后，你应该能够：
1. 成功连接数据库
2. 执行 Prisma 命令
3. 解决 `/api/payment/user-latest` 的 503 错误
4. 正常使用支付功能
