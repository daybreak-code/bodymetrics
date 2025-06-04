import { prisma } from '../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (req.method === 'PUT') {
    const data = req.body;
    const measurement = await prisma.measurement.update({ where: { id: id as string }, data });
    return res.json(measurement);
  }
  if (req.method === 'DELETE') {
    await prisma.measurement.delete({ where: { id: id as string } });
    return res.json({ success: true });
  }
  res.status(405).end();
} 