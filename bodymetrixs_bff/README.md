# BodyMetrics Backend (BFF)

健康数据追踪与疾病管理应用的后端服务

## 项目概述

BodyMetrics BFF (Backend for Frontend) 是基于Next.js 14 App Router构建的API服务，提供用户认证、健康数据管理、疾病追踪和支付集成功能。使用Prisma ORM连接PostgreSQL数据库，支持Supabase认证集成。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **数据库**: PostgreSQL
- **ORM**: Prisma
- **认证**: Supabase Auth
- **支付**: Creem.io
- **API文档**: Swagger/OpenAPI 3.0
- **部署**: Docker

## 项目结构

```
src/
├── app/
│   ├── api/           # API路由
│   │   ├── auth/      # 认证相关API
│   │   ├── measurements/  # 身体测量数据API
│   │   ├── diseases/      # 疾病管理API
│   │   ├── create-checkout/ # 支付API
│   │   └── swagger/   # Swagger文档API
│   ├── api-docs/      # Swagger UI页面
│   ├── lib/           # 工具库
│   └── generated/     # Prisma生成文件
├── prisma/            # 数据库schema和迁移
└── public/            # 静态资源
```

## API 文档

### 在线文档
访问 `http://localhost:3000/api-docs` 查看交互式API文档，支持：
- 实时API测试
- 请求/响应示例
- 自动生成的Mock数据
- 认证头部自动填充

### Swagger集成特性
- **自动生成**: 基于JSDoc注释自动生成OpenAPI规范
- **交互式测试**: 直接在浏览器中测试API端点
- **Mock数据**: 自动生成示例请求和响应数据
- **认证支持**: 自动处理认证头部和令牌
- **实时更新**: 代码变更后文档自动更新

### 使用Swagger进行API Mock
1. 启动开发服务器: `npm run dev`
2. 访问: `http://localhost:3000/api-docs`
3. 选择要测试的API端点
4. 点击"Try it out"按钮
5. 填写请求参数（或使用默认值）
6. 点击"Execute"执行请求

**注意**: 对于需要认证的API，系统会自动添加`x-user-id: mock-user-id`头部。

## API 设计文档

### 1. 用户认证

#### 注册
- **POST** `/api/auth/register`
- **描述**: 创建新用户账户
- **请求体**：
```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```
- **响应**：
```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "avatar": "string"
}
```

#### 登录
- **POST** `/api/auth/login`
- **描述**: 用户登录验证
- **请求体**：
```json
{
  "email": "string",
  "password": "string"
}
```
- **响应**：
```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "avatar": "string",
  "token": "string"
}
```

#### 登出
- **POST** `/api/auth/logout`
- **描述**: 用户登出（当前为空实现）
- **请求头**：`Authorization: Bearer <token>`
- **响应**：
```json
{ "success": true }
```

---

### 2. 身体测量数据

#### 获取测量列表
- **GET** `/api/measurements`
- **描述**: 获取用户的所有身体测量记录
- **请求头**：`x-user-id: <user_id>` (实际应从JWT token解析)
- **响应**：
```json
[
  {
    "id": "string",
    "date": "YYYY-MM-DD",
    "weight": 65,
    "height": 170,
    "armCircumference": 30,
    "legCircumference": 50,
    "waistCircumference": 80,
    "chestCircumference": 90,
    "hipCircumference": 95,
    "neckCircumference": 35,
    "bmi": 22.5
  }
]
```

#### 新增测量
- **POST** `/api/measurements`
- **描述**: 创建新的身体测量记录
- **请求头**：`x-user-id: <user_id>`
- **请求体**：
```json
{
  "date": "YYYY-MM-DD",
  "weight": 65,
  "height": 170,
  "armCircumference": 30,
  "legCircumference": 50,
  "waistCircumference": 80,
  "chestCircumference": 90,
  "hipCircumference": 95,
  "neckCircumference": 35
}
```
- **响应**：返回创建的测量记录

#### 更新测量
- **PUT** `/api/measurements/{id}`
- **描述**: 更新指定的身体测量记录
- **请求头**：`x-user-id: <user_id>`
- **请求体**：同上（部分字段可选）
- **响应**：返回更新后的测量记录

#### 删除测量
- **DELETE** `/api/measurements/{id}`
- **描述**: 删除指定的身体测量记录
- **请求头**：`x-user-id: <user_id>`
- **响应**：
```json
{ "success": true }
```

#### 导出测量数据
- **GET** `/api/measurements/export`
- **描述**: 导出用户的所有测量数据为CSV格式
- **请求头**：`x-user-id: <user_id>`
- **响应**：`text/csv` 文件，包含Date,Weight,Height,Arm,Leg,Waist,Chest,Hip,Neck,BMI列

---

### 3. 疾病与药物管理

#### 获取疾病列表
- **GET** `/api/diseases`
- **描述**: 获取用户的所有疾病记录，包含相关药物信息
- **请求头**：`x-user-id: <user_id>`
- **响应**：
```json
[
  {
    "id": "string",
    "name": "string",
    "symptoms": "string",
    "onsetDate": "YYYY-MM-DD",
    "isPrivate": true,
    "medications": [
      {
        "id": "string",
        "name": "string",
        "dosage": "string",
        "reminderTime": "HH:mm"
      }
    ]
  }
]
```

#### 新增疾病
- **POST** `/api/diseases`
- **描述**: 创建新的疾病记录
- **请求头**：`x-user-id: <user_id>`
- **请求体**：
```json
{
  "name": "string",
  "symptoms": "string",
  "onsetDate": "YYYY-MM-DD",
  "isPrivate": true
}
```
- **响应**：返回创建的疾病记录

#### 更新疾病
- **PUT** `/api/diseases/{id}`
- **描述**: 更新指定的疾病记录
- **请求头**：`x-user-id: <user_id>`
- **请求体**：同上（部分字段可选）
- **响应**：返回更新后的疾病记录

#### 删除疾病
- **DELETE** `/api/diseases/{id}`
- **描述**: 删除指定的疾病记录
- **请求头**：`x-user-id: <user_id>`
- **响应**：
```json
{ "success": true }
```

#### 新增药物
- **POST** `/api/diseases/medications`
- **描述**: 为指定疾病添加药物记录
- **请求头**：`x-user-id: <user_id>`
- **请求体**：
```json
{
  "diseaseId": "string",
  "name": "string",
  "dosage": "string",
  "reminderTime": "HH:mm"
}
```
- **响应**：
```json
{
  "id": "string",
  "name": "string",
  "dosage": "string",
  "reminderTime": "HH:mm"
}
```

#### 删除药物
- **DELETE** `/api/diseases/medications/{medicationId}`
- **描述**: 删除指定的药物记录
- **请求头**：`x-user-id: <user_id>`
- **响应**：
```json
{ "success": true }
```

#### 导出疾病数据
- **GET** `/api/diseases/export`
- **描述**: 导出用户的所有疾病和药物数据为CSV格式
- **请求头**：`x-user-id: <user_id>`
- **响应**：`text/csv` 文件，包含Disease Name,Symptoms,Onset Date,Medications,Dosages,Reminders列

---

### 4. 支付集成

#### 创建支付会话
- **POST** `/api/create-checkout`
- **描述**: 创建Creem.io支付会话
- **请求体**：
```json
{
  "product_id": "string",
  "success_url": "string"
}
```
- **响应**：
```json
{
  "checkout_url": "string"
}
```
- **错误响应**：
```json
{
  "error": "string",
  "details": "object"
}
```

---

## 环境变量配置

```env
# 数据库
DATABASE_URL="postgresql://username:password@localhost:5432/bodymetrics"

# Creem.io支付
CREEM_API_KEY="your_creem_api_key"

# Supabase认证
NEXT_PUBLIC_SUPABASE_URL="your_supabase_url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your_supabase_anon_key"
SUPABASE_SERVICE_ROLE_KEY="your_supabase_service_role_key"
```

## 安装与运行

### 安装依赖
```bash
npm install
```

### 数据库迁移
```bash
npx prisma migrate dev
npx prisma generate
```

### 开发模式
```bash
npm run dev
```

### 生产构建
```bash
npm run build
npm start
```

## 注意事项

1. **认证机制**: 当前使用`x-user-id`头部进行用户识别，实际生产环境应使用JWT token
2. **错误处理**: API端点包含基本的错误处理，但需要进一步完善
3. **数据验证**: 建议添加请求数据验证中间件
4. **日志记录**: 建议集成结构化日志记录
5. **API文档**: 建议使用Swagger/OpenAPI生成交互式文档

---

> 本API为RESTful风格，所有接口均需认证（注册/登录除外），返回数据均为JSON格式，适合前后端分离架构。 