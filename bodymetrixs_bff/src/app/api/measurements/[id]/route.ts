import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

/**
 * @swagger
 * /api/measurements/{id}:
 *   put:
 *     tags: [Measurements]
 *     summary: 更新测量
 *     description: 更新指定的身体测量记录
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Measurement'
 *     responses:
 *       200:
 *         description: 成功更新测量记录
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Measurement'
 *       401:
 *         description: 未授权
 *       404:
 *         description: 未找到记录
 *
 *   delete:
 *     tags: [Measurements]
 *     summary: 删除测量
 *     description: 删除指定的身体测量记录
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: 成功删除记录
 *       401:
 *         description: 未授权
 *       404:
 *         description: 未找到记录
 */
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const data = await req.json();
  const measurement = await prisma.measurement.update({
    where: { id: params.id },
    data,
  });
  return NextResponse.json(measurement);
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await prisma.measurement.delete({
    where: { id: params.id },
  });
  return new NextResponse(null, { status: 204 });
} 