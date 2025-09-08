# BodyMetrics BFF 设置指南

## 环境变量配置

### 1. 复制环境变量文件
```bash
cp env.example .env.local
```

### 2. 配置必需的环境变量

#### 数据库配置
```bash
# Supabase PostgreSQL 连接字符串
DATABASE_URL="postgresql://postgres.vpstrwdjvsrlzgsippqw:YOUR_PASSWORD@aws-0-us-west-1.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1&pool_timeout=20"
```

**获取数据库连接字符串的步骤：**
1. 登录 [Supabase Dashboard](https://supabase.com/dashboard)
2. 选择你的项目
3. 进入 Settings > Database
4. 复制 Connection string (使用 pooler)

#### Supabase 配置
```bash
# Supabase 项目 URL
NEXT_PUBLIC_SUPABASE_URL="https://vpstrwdjvsrlzgsippqw.supabase.co"

# Supabase Service Role Key (用于后端API)
SUPABASE_SERVICE_ROLE_KEY="your_service_role_key_here"
```

**获取 Service Role Key 的步骤：**
1. 在 Supabase Dashboard 中进入 Settings > API
2. 复制 `service_role` key (注意：这是敏感信息，不要暴露给前端)

#### Creem.io 支付配置
```bash
# Creem.io API 密钥
CREEM_API_KEY="your_creem_api_key_here"
```

**获取 Creem.io API Key 的步骤：**
1. 登录 [Creem.io Dashboard](https://dashboard.creem.io/)
2. 进入 API Keys 部分
3. 创建新的 API Key

## 安装依赖

```bash
npm install
```

## 数据库迁移

### 1. 生成 Prisma 客户端
```bash
npx prisma generate
```

### 2. 执行数据库迁移
```bash
npx prisma db push
```

### 3. 创建 Payment 表 (如果迁移失败)
```bash
# 手动执行 SQL 脚本
psql "YOUR_DATABASE_URL" -f create_payment_table.sql
```

## 启动服务

### 开发模式
```bash
npm run dev
```

### 生产模式
```bash
npm run build
npm start
```

## 测试 API

### 1. 健康检查
```bash
curl http://localhost:3000/api/health
```

### 2. API 文档
```bash
# 访问 Swagger UI
http://localhost:3000/api-docs

# 获取 OpenAPI 规范
curl http://localhost:3000/api/swagger
```

### 3. 支付接口测试
```bash
# 创建支付会话 (需要有效的 JWT token)
curl -X POST http://localhost:3000/api/create-checkout \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "product_id": "prod_27UFKIrC71jFuMT72hB90v",
    "success_url": "http://localhost:5173/payment-success"
  }'
```

## 常见问题解决

### 1. 数据库连接失败
**错误信息：** `Can't reach database server at db.vpstrwdjvsrlzgsippqw.supabase.co:5432`

**解决方案：**
- 检查 `DATABASE_URL` 是否正确
- 确认 Supabase 项目状态
- 检查网络连接和防火墙设置
- 使用 pooler 连接字符串而不是直接连接

### 2. Swagger API 文档生成失败
**错误信息：** `Failed to generate API documentation`

**解决方案：**
- 确认 `next-swagger-doc` 已安装
- 检查 API 路由文件中的 JSDoc 注释格式
- 查看控制台错误日志

### 3. Supabase 认证失败
**错误信息：** `JWT verification failed`

**解决方案：**
- 检查 `SUPABASE_SERVICE_ROLE_KEY` 是否正确
- 确认 Supabase 项目配置
- 验证 JWT token 格式

### 4. 支付接口错误
**错误信息：** `Payment table not available`

**解决方案：**
- 执行数据库迁移创建 Payment 表
- 检查 Payment 表结构是否正确
- 确认外键约束设置

## 开发工具

### 1. Prisma Studio
```bash
npx prisma studio
```

### 2. 数据库连接测试
```bash
npx prisma db pull
npx prisma validate
```

### 3. 环境变量验证
```bash
# 检查环境变量是否正确加载
node -e "console.log(process.env.DATABASE_URL)"
```

## 安全注意事项

1. **永远不要**将 `.env.local` 文件提交到版本控制
2. **永远不要**将 Service Role Key 暴露给前端
3. 定期轮换 API 密钥
4. 使用环境变量而不是硬编码配置
5. 在生产环境中启用 HTTPS

## 联系支持

如果遇到问题，请：
1. 检查控制台错误日志
2. 查看健康检查接口 `/api/health`
3. 确认所有环境变量已正确配置
4. 检查 Supabase 项目状态
