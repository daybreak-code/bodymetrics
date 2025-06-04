import { prisma } from '../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userId = req.headers['x-user-id'] as string;
  if (req.method === 'GET') {
    const diseases = await prisma.disease.findMany({ where: { userId }, include: { medications: true } });
    return res.json(diseases);
  }
  if (req.method === 'POST') {
    const data = req.body;
    const disease = await prisma.disease.create({ data: { ...data, userId } });
    return res.json(disease);
  }
  res.status(405).end();
} 