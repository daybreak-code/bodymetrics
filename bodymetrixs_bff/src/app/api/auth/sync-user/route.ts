import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import { supabase } from '@/app/lib/supabase';

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

    // 验证Supabase用户是否存在
    try {
      const { data: { user }, error } = await supabase.auth.admin.getUserById(userId);
      
      if (error || !user) {
        console.error('Supabase user not found:', error);
        return NextResponse.json(
          { error: 'Invalid user ID or user not found in Supabase' },
          { status: 400 }
        );
      }
    } catch (supabaseError) {
      console.error('Supabase verification error:', supabaseError);
      return NextResponse.json(
        { error: 'Failed to verify user with Supabase' },
        { status: 500 }
      );
    }

    // 使用 upsert 操作，如果用户不存在则创建，存在则更新
    try {
      const businessUser = await prisma.user.upsert({
        where: { id: userId },
        update: {
          email: email,
          name: name,
        },
        create: {
          id: userId,
          email: email,
          name: name,
          password: '', // 业务表中不需要存储密码，认证由Supabase处理
        }
      });

      console.log('User synced to business table:', businessUser.id);

      return NextResponse.json({
        message: 'User synced successfully',
        user: {
          id: businessUser.id,
          email: businessUser.email,
          name: businessUser.name
        }
      });

    } catch (dbError) {
      console.error('Database operation error:', dbError);
      return NextResponse.json(
        { error: 'Failed to sync user to business table' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('User sync error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 