'use client';

import { useEffect, useState } from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export default function ApiDocs() {
  const [spec, setSpec] = useState<any>(null);

  useEffect(() => {
    fetch('/api/swagger')
      .then((response) => response.json())
      .then((data) => setSpec(data))
      .catch((error) => console.error('Error loading Swagger spec:', error));
  }, []);

  if (!spec) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading API documentation...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white px-6 py-4">
            <h1 className="text-2xl font-bold">BodyMetrics API Documentation</h1>
            <p className="text-blue-100 mt-2">
              健康数据追踪与疾病管理应用的API文档
            </p>
          </div>
          <div className="p-0">
            <SwaggerUI 
              spec={spec}
              docExpansion="list"
              defaultModelsExpandDepth={2}
              defaultModelExpandDepth={2}
              tryItOutEnabled={true}
              requestInterceptor={(request: any) => {
                // 为需要认证的请求添加默认的x-user-id头部
                if (request.url.includes('/api/measurements') || 
                    request.url.includes('/api/diseases')) {
                  request.headers['x-user-id'] = 'mock-user-id';
                }
                return request;
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 