import { createSwaggerSpec } from 'next-swagger-doc';

const apiConfig = {
  openapi: '3.0.0',
  info: {
    title: 'BodyMetrics API',
    description: '健康数据追踪与疾病管理应用的API文档',
    version: '1.0.0',
    contact: {
      name: 'BodyMetrics Team',
      email: 'support@bodymetrics.com',
    },
  },
  servers: [
    {
      url: process.env.NODE_ENV === 'production' 
        ? 'https://your-production-domain.com' 
        : 'http://localhost:3000',
      description: process.env.NODE_ENV === 'production' ? 'Production server' : 'Development server',
    },
  ],
  tags: [
    {
      name: 'Authentication',
      description: '用户认证相关API',
    },
    {
      name: 'Measurements',
      description: '身体测量数据管理',
    },
    {
      name: 'Diseases',
      description: '疾病与药物管理',
    },
    {
      name: 'Payments',
      description: '支付集成',
    },
  ],
  components: {
    securitySchemes: {
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      User: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          name: { type: 'string' },
          email: { type: 'string', format: 'email' },
          avatar: { type: 'string', nullable: true },
        },
      },
      Measurement: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          date: { type: 'string', format: 'date' },
          weight: { type: 'number', nullable: true },
          height: { type: 'number', nullable: true },
          armCircumference: { type: 'number', nullable: true },
          legCircumference: { type: 'number', nullable: true },
          waistCircumference: { type: 'number', nullable: true },
          chestCircumference: { type: 'number', nullable: true },
          hipCircumference: { type: 'number', nullable: true },
          neckCircumference: { type: 'number', nullable: true },
          bmi: { type: 'number', nullable: true },
        },
      },
      Disease: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          name: { type: 'string' },
          symptoms: { type: 'string' },
          onsetDate: { type: 'string', format: 'date' },
          isPrivate: { type: 'boolean' },
          medications: {
            type: 'array',
            items: { $ref: '#/components/schemas/Medication' },
          },
        },
      },
      Medication: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          name: { type: 'string' },
          dosage: { type: 'string' },
          reminderTime: { type: 'string', nullable: true },
        },
      },
      Error: {
        type: 'object',
        properties: {
          error: { type: 'string' },
          details: { type: 'object', nullable: true },
        },
      },
    },
  },
};

export const getApiDocs = () => {
  try {
    return createSwaggerSpec({
      definition: apiConfig,
      apiFolder: 'src/app/api',
    });
  } catch (error) {
    console.error('Error creating Swagger spec:', error);
    // 返回一个基本的OpenAPI规范作为fallback
    return {
      ...apiConfig,
      paths: {
        '/api/auth/login': {
          post: {
            tags: ['Authentication'],
            summary: '用户登录',
            description: '用户登录接口',
            requestBody: {
              required: true,
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      email: { type: 'string', format: 'email' },
                      password: { type: 'string' },
                    },
                    required: ['email', 'password'],
                  },
                },
              },
            },
            responses: {
              200: {
                description: '登录成功',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        token: { type: 'string' },
                        user: { $ref: '#/components/schemas/User' },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        '/api/create-checkout': {
          post: {
            tags: ['Payments'],
            summary: '创建支付会话',
            description: '创建Creem.io支付会话',
            security: [{ BearerAuth: [] }],
            requestBody: {
              required: true,
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      product_id: { type: 'string' },
                      success_url: { type: 'string', format: 'uri' },
                    },
                    required: ['product_id', 'success_url'],
                  },
                },
              },
            },
            responses: {
              200: {
                description: '成功创建支付会话',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        checkout_url: { type: 'string', format: 'uri' },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    };
  }
}; 