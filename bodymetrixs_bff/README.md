## API 设计文档

### 1. 用户认证

#### 注册
- **POST** `/api/auth/register`
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
- **请求头**：`Authorization: Bearer <token>`
- **响应**：
```json
{ "success": true }
```

---

### 2. 身体测量数据

#### 获取测量列表
- **GET** `/api/measurements`
- **请求头**：`Authorization: Bearer <token>`
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
- **请求头**：`Authorization: Bearer <token>`
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
- **响应**：同上

#### 更新测量
- **PUT** `/api/measurements/{id}`
- **请求头**：`Authorization: Bearer <token>`
- **请求体**：同上（部分字段可选）
- **响应**：同上

#### 删除测量
- **DELETE** `/api/measurements/{id}`
- **请求头**：`Authorization: Bearer <token>`
- **响应**：
```json
{ "success": true }
```

---

### 3. 疾病与药物管理

#### 获取疾病列表
- **GET** `/api/diseases`
- **请求头**：`Authorization: Bearer <token>`
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
- **请求头**：`Authorization: Bearer <token>`
- **请求体**：
```json
{
  "name": "string",
  "symptoms": "string",
  "onsetDate": "YYYY-MM-DD",
  "isPrivate": true
}
```
- **响应**：同上

#### 更新疾病
- **PUT** `/api/diseases/{id}`
- **请求头**：`Authorization: Bearer <token>`
- **请求体**：同上（部分字段可选）
- **响应**：同上

#### 删除疾病
- **DELETE** `/api/diseases/{id}`
- **请求头**：`Authorization: Bearer <token>`
- **响应**：
```json
{ "success": true }
```

#### 新增药物
- **POST** `/api/diseases/{diseaseId}/medications`
- **请求头**：`Authorization: Bearer <token>`
- **请求体**：
```json
{
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
- **DELETE** `/api/diseases/{diseaseId}/medications/{medicationId}`
- **请求头**：`Authorization: Bearer <token>`
- **响应**：
```json
{ "success": true }
```

---

### 4. 其他

#### 导出测量/疾病数据
- **GET** `/api/measurements/export`  
- **GET** `/api/diseases/export`  
- **请求头**：`Authorization: Bearer <token>`
- **响应**：`text/csv` 文件

---

> 本API为RESTful风格，所有接口均需认证（注册/登录除外），返回数据均为JSON格式，适合前后端分离架构。 