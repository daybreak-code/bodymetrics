import { prisma } from '../../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { medicationId } = req.query;
  if (req.method !== 'DELETE') return res.status(405).end();
  await prisma.medication.delete({ where: { id: medicationId as string } });
  res.json({ success: true });
} 