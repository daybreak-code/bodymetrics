import { prisma } from '../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

type Measurement = {
  date: Date;
  weight?: number;
  height?: number;
  armCircumference?: number;
  legCircumference?: number;
  waistCircumference?: number;
  chestCircumference?: number;
  hipCircumference?: number;
  neckCircumference?: number;
  bmi?: number;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userId = req.headers['x-user-id'] as string;
  const measurements = await prisma.measurement.findMany({ where: { userId } });
  const headers = 'Date,Weight,Height,Arm,Leg,Waist,Chest,Hip,Neck,BMI\n';
  const rows = measurements.map((m: Measurement) =>
    `${m.date.toISOString().slice(0,10)},${m.weight||''},${m.height||''},${m.armCircumference||''},${m.legCircumference||''},${m.waistCircumference||''},${m.chestCircumference||''},${m.hipCircumference||''},${m.neckCircumference||''},${m.bmi||''}`
  ).join('\n');
  res.setHeader('Content-Type', 'text/csv');
  res.send(headers + rows);
} 