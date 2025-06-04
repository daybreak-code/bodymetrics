import { prisma } from '../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userId = req.headers['x-user-id'] as string; // 实际应从token解析
  if (req.method === 'GET') {
    const measurements = await prisma.measurement.findMany({ where: { userId } });
    return res.json(measurements);
  }
  if (req.method === 'POST') {
    const data = req.body;
    const measurement = await prisma.measurement.create({ data: { ...data, userId } });
    return res.json(measurement);
  }
  res.status(405).end();
} 