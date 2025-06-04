import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Measurement {
  id: string;
  date: string;
  weight?: number;
  height?: number;
  armCircumference?: number;
  legCircumference?: number;
  waistCircumference?: number;
  chestCircumference?: number;
  hipCircumference?: number;
  neckCircumference?: number;
  bmi?: number;
}

interface MeasurementState {
  measurements: Measurement[];
  addMeasurement: (measurement: Omit<Measurement, 'id'>) => void;
  updateMeasurement: (id: string, measurement: Partial<Measurement>) => void;
  deleteMeasurement: (id: string) => void;
  getRecentMeasurements: (limit?: number) => Measurement[];
  exportData: () => string;
}

export const useMeasurementStore = create<MeasurementState>()(
  persist(
    (set, get) => ({
      measurements: [
        {
          id: '1',
          date: '2024-07-26',
          weight: 65,
          height: 170,
          armCircumference: 30,
          legCircumference: 50,
          waistCircumference: 80,
          bmi: 22.5,
        },
        {
          id: '2',
          date: '2024-07-19',
          weight: 66,
          height: 170,
          armCircumference: 30.5,
          legCircumference: 50.5,
          waistCircumference: 81,
          bmi: 22.9,
        },
        {
          id: '3',
          date: '2024-07-12',
          weight: 67,
          height: 170,
          armCircumference: 31,
          legCircumference: 51,
          waistCircumference: 82,
          bmi: 23.3,
        },
      ],
      addMeasurement: (measurement) => {
        const newMeasurement = {
          ...measurement,
          id: Date.now().toString(),
        };
        set((state) => ({
          measurements: [newMeasurement, ...state.measurements],
        }));
      },
      updateMeasurement: (id, measurement) => {
        set((state) => ({
          measurements: state.measurements.map((m) =>
            m.id === id ? { ...m, ...measurement } : m
          ),
        }));
      },
      deleteMeasurement: (id) => {
        set((state) => ({
          measurements: state.measurements.filter((m) => m.id !== id),
        }));
      },
      getRecentMeasurements: (limit = 5) => {
        const { measurements } = get();
        return [...measurements]
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, limit);
      },
      exportData: () => {
        const { measurements } = get();
        const headers = 'Date,Weight,Height,Arm,Leg,Waist,Chest,Hip,Neck,BMI\n';
        const rows = measurements.map((m) => {
          return `${m.date},${m.weight || ''},${m.height || ''},${m.armCircumference || ''},${m.legCircumference || ''},${m.waistCircumference || ''},${m.chestCircumference || ''},${m.hipCircumference || ''},${m.neckCircumference || ''},${m.bmi || ''}`;
        }).join('\n');
        return headers + rows;
      },
    }),
    {
      name: 'bodymetrics-measurements',
    }
  )
);