import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import { supabase } from '@/app/lib/supabase';

export async function GET() {
  const health: {
    status: string;
    timestamp: string;
    message?: string;
    services: {
      database: string;
      prisma: string;
      supabase: string;
    };
    details: {
      databaseUrl: string;
      supabaseUrl: string;
      supabaseKey: string;
      prisma?: any;
      database?: any;
      supabase?: any;
    };
    errors: string[];
  } = {
    status: 'unknown',
    timestamp: new Date().toISOString(),
    services: {
      database: 'unknown',
      prisma: 'unknown',
      supabase: 'unknown'
    },
    details: {
      databaseUrl: process.env.DATABASE_URL ? '已设置' : '未设置',
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ? '已设置' : '未设置',
      supabaseKey: process.env.SUPABASE_SERVICE_ROLE_KEY ? '已设置' : '未设置'
    },
    errors: []
  };

  try {
    // 测试 Prisma 数据库连接
    try {
      console.log('🔍 测试 Prisma 数据库连接...');
      const startTime = Date.now();
      await prisma.$queryRaw`SELECT 1 as test`;
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      
      health.services.prisma = 'ok';
      health.details.prisma = {
        status: 'connected',
        responseTime: `${responseTime}ms`,
        message: '数据库连接正常'
      };
      console.log('✅ Prisma 数据库连接成功，响应时间:', responseTime, 'ms');
    } catch (error) {
      health.services.prisma = 'error';
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      health.errors.push(`Prisma 连接失败: ${errorMessage}`);
      console.error('❌ Prisma 数据库连接失败:', error);
    }

    // 测试数据库表访问
    try {
      console.log('🔍 测试数据库表访问...');
      const userCount = await prisma.user.count();
      health.services.database = 'ok';
      health.details.database = {
        status: 'accessible',
        userCount: userCount,
        message: `数据库表访问正常，用户数量: ${userCount}`
      };
      console.log('✅ 数据库表访问成功，用户数量:', userCount);
    } catch (error) {
      health.services.database = 'error';
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      health.errors.push(`数据库表访问失败: ${errorMessage}`);
      console.error('❌ 数据库表访问失败:', error);
    }

    // 测试 Supabase 连接
    try {
      console.log('🔍 测试 Supabase 连接...');
      const { data, error } = await supabase.auth.getUser('test-token');
      if (error && error.message !== 'Invalid JWT') {
        // 如果错误不是JWT相关，说明连接有问题
        health.services.supabase = 'error';
        health.errors.push(`Supabase 连接失败: ${error.message}`);
        console.error('❌ Supabase 连接失败:', error);
      } else {
        health.services.supabase = 'ok';
        health.details.supabase = {
          status: 'connected',
          message: 'Supabase 连接正常'
        };
        console.log('✅ Supabase 连接成功');
      }
    } catch (error) {
      health.services.supabase = 'error';
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      health.errors.push(`Supabase 连接失败: ${errorMessage}`);
      console.error('❌ Supabase 连接失败:', error);
    }

    // 确定整体状态
    if (health.errors.length === 0) {
      health.status = 'ok';
      health.message = '所有服务运行正常';
    } else if (health.services.prisma === 'ok' && health.services.database === 'ok') {
      health.status = 'degraded';
      health.message = '核心服务正常，部分服务异常';
    } else {
      health.status = 'error';
      health.message = '核心服务异常';
    }

    const statusCode = health.status === 'ok' ? 200 : 
                      health.status === 'degraded' ? 200 : 503;

    console.log('🏥 健康检查完成:', health);

    return NextResponse.json(health, { 
      status: statusCode,
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:5173',
        'Access-Control-Allow-Credentials': 'true',
      }
    });

  } catch (error) {
    health.status = 'error';
    health.message = '健康检查执行失败';
    health.errors.push(`健康检查失败: ${error instanceof Error ? error.message : 'Unknown error'}`);
    
    console.error('❌ 健康检查执行失败:', error);
    
    return NextResponse.json(health, { 
      status: 503,
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:5173',
        'Access-Control-Allow-Credentials': 'true',
      }
    });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:5173',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization, x-auth-token',
      'Access-Control-Max-Age': '86400',
      'Access-Control-Allow-Credentials': 'true',
    },
  });
}
