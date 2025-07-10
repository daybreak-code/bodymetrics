import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../lib/prisma';

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
  const userId = req.headers.get('x-user-id') as string;
  const measurements = await prisma.measurement.findMany({ where: { userId } });
  return NextResponse.json(measurements);
}

export async function POST(req: NextRequest) {
  const userId = req.headers.get('x-user-id') as string;
  const data = await req.json();
  const measurement = await prisma.measurement.create({
    data: { ...data, userId },
  });
  return NextResponse.json(measurement, { status: 201 });
} 