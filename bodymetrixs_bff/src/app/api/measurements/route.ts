import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../lib/prisma';
import { supabase } from '../../lib/supabase';

/**
 * @swagger
 * /api/measurements:
 *   get:
 *     tags: [Measurements]
 *     summary: 获取测量列表
 *     description: 获取用户的所有身体测量记录
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: 成功获取测量列表
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Measurement'
 *       401:
 *         description: 未授权
 *
 *   post:
 *     tags: [Measurements]
 *     summary: 新增测量
 *     description: 创建新的身体测量记录
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Measurement'
 *     responses:
 *       201:
 *         description: 成功创建测量记录
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Measurement'
 *       401:
 *         description: 未授权
 */
export async function GET(req: NextRequest) {
  // 从请求头获取token
  const authHeader = req.headers.get('Authorization') || req.headers.get('x-auth-token');
  if (!authHeader) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  // 处理Bearer token格式
  const token = authHeader.startsWith('Bearer ') ? authHeader.substring(7) : authHeader;
  
  try {
    // 使用Supabase客户端验证JWT
    const { data: { user }, error } = await supabase.auth.getUser(token);
    
    if (error || !user) {
      console.error('JWT verification failed:', error);
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }
    
    const userId = user.id;
    const measurements = await prisma.measurement.findMany({ where: { userId } });
    return NextResponse.json(measurements);
  } catch (error) {
    console.error('Error fetching measurements:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  // 从请求头获取token
  const authHeader = req.headers.get('Authorization') || req.headers.get('x-auth-token');
  if (!authHeader) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  // 处理Bearer token格式
  const token = authHeader.startsWith('Bearer ') ? authHeader.substring(7) : authHeader;
  
  try {
    // 使用Supabase客户端验证JWT
    const { data: { user }, error } = await supabase.auth.getUser(token);
    
    if (error || !user) {
      console.error('JWT verification failed:', error);
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }
    
    const userId = user.id;
    const data = await req.json();
    const measurement = await prisma.measurement.create({
      data: { ...data, userId },
    });
    return NextResponse.json(measurement, { status: 201 });
  } catch (error) {
    console.error('Error creating measurement:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 