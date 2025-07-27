import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import { supabase } from '@/app/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // 验证请求数据
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // 使用Supabase验证用户凭据
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Supabase login error:', error);
      return NextResponse.json(
        { error: error.message },
        { status: 401 }
      );
    }

    if (!data.user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // 同步用户到业务表
    try {
      const userData = {
        id: data.user.id,
        email: data.user.email!,
        name: data.user.user_metadata?.name || data.user.email!.split('@')[0] || 'User',
      };

      // 使用 upsert 操作，如果用户不存在则创建，存在则更新
      const businessUser = await prisma.user.upsert({
        where: { id: userData.id },
        update: {
          email: userData.email,
          name: userData.name,
        },
        create: {
          id: userData.id,
          email: userData.email,
          name: userData.name,
          password: '', // 业务表中不存储密码
        },
      });

      console.log('User synced to business table:', businessUser.id);

      return NextResponse.json({
        message: 'Login successful',
        user: {
          id: businessUser.id,
          email: businessUser.email,
          name: businessUser.name,
        },
        session: data.session,
      });

    } catch (syncError) {
      console.error('User sync error:', syncError);
      // 即使同步失败，仍然返回登录成功，但记录错误
      return NextResponse.json({
        message: 'Login successful but user sync failed',
        user: {
          id: data.user.id,
          email: data.user.email,
          name: data.user.user_metadata?.name || data.user.email!.split('@')[0] || 'User',
        },
        session: data.session,
        warning: 'User data sync failed',
      });
    }

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 