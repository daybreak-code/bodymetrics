import { prisma } from '../../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  const { diseaseId, ...data } = req.body;
  const medication = await prisma.medication.create({ data: { ...data, diseaseId } });
  res.json(medication);
} 