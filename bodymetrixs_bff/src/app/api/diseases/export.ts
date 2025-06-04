import { prisma } from '../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

type Medication = {
  name: string;
  dosage: string;
  reminderTime?: string;
};

type Disease = {
  name: string;
  symptoms: string;
  onsetDate: Date;
  medications: Medication[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userId = req.headers['x-user-id'] as string;
  const diseases = await prisma.disease.findMany({ where: { userId }, include: { medications: true } });
  let csv = 'Disease Name,Symptoms,Onset Date,Medications,Dosages,Reminders\n';
  diseases.forEach((disease: Disease) => {
    if (disease.medications.length === 0) {
      csv += `"${disease.name}","${disease.symptoms}","${disease.onsetDate.toISOString().slice(0,10)}","","",""\n`;
    } else {
      disease.medications.forEach((med: Medication, index: number) => {
        if (index === 0) {
          csv += `"${disease.name}","${disease.symptoms}","${disease.onsetDate.toISOString().slice(0,10)}","${med.name}","${med.dosage}","${med.reminderTime||''}"\n`;
        } else {
          csv += `"","","","${med.name}","${med.dosage}","${med.reminderTime||''}"\n`;
        }
      });
    }
  });
  res.setHeader('Content-Type', 'text/csv');
  res.send(csv);
} 