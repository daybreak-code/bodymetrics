import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../../generated/prisma';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { email, name, userId } = await request.json();

    // 验证请求数据
    if (!email || !name || !userId) {
      return NextResponse.json(
        { error: 'Email, name, and userId are required' },
        { status: 400 }
      );
    }

    // 检查用户是否已经在业务User表中存在
    const existingUser = await prisma.user.findUnique({
      where: { email: email }
    });

    if (existingUser) {
      return NextResponse.json({
        message: 'User already exists',
        user: {
          id: existingUser.id,
          email: existingUser.email,
          name: existingUser.name
        }
      });
    }

    // 在业务User表中创建用户记录
    const newUser = await prisma.user.create({
      data: {
        id: userId,
        email: email,
        name: name,
        password: '', // 业务表中不需要存储密码，认证由Supabase处理
      }
    });

    return NextResponse.json({
      message: 'User created successfully',
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name
      }
    });

  } catch (error) {
    console.error('User sync error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 