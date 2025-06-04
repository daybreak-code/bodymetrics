import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  reminderTime?: string;
}

export interface Disease {
  id: string;
  name: string;
  symptoms: string;
  onsetDate: string;
  medications: Medication[];
  documents?: string[];
  isPrivate: boolean;
}

interface DiseaseState {
  diseases: Disease[];
  privacyModeEnabled: boolean;
  privacyPassword?: string;
  addDisease: (disease: Omit<Disease, 'id'>) => void;
  updateDisease: (id: string, disease: Partial<Disease>) => void;
  deleteDisease: (id: string) => void;
  addMedication: (diseaseId: string, medication: Omit<Medication, 'id'>) => void;
  updateMedication: (diseaseId: string, medicationId: string, medication: Partial<Medication>) => void;
  deleteMedication: (diseaseId: string, medicationId: string) => void;
  setPrivacyMode: (enabled: boolean, password?: string) => void;
  validatePrivacyPassword: (password: string) => boolean;
  exportData: () => string;
}

export const useDiseaseStore = create<DiseaseState>()(
  persist(
    (set, get) => ({
      diseases: [
        {
          id: '1',
          name: 'Hypertension',
          symptoms: 'Occasional headaches, dizziness',
          onsetDate: '2023-05-15',
          medications: [
            {
              id: '1',
              name: 'Lisinopril',
              dosage: '10mg daily',
              reminderTime: '08:00',
            },
          ],
          isPrivate: false,
        },
      ],
      privacyModeEnabled: false,
      privacyPassword: undefined,
      addDisease: (disease) => {
        const newDisease = {
          ...disease,
          id: Date.now().toString(),
        };
        set((state) => ({
          diseases: [...state.diseases, newDisease],
        }));
      },
      updateDisease: (id, disease) => {
        set((state) => ({
          diseases: state.diseases.map((d) =>
            d.id === id ? { ...d, ...disease } : d
          ),
        }));
      },
      deleteDisease: (id) => {
        set((state) => ({
          diseases: state.diseases.filter((d) => d.id !== id),
        }));
      },
      addMedication: (diseaseId, medication) => {
        const newMedication = {
          ...medication,
          id: Date.now().toString(),
        };
        set((state) => ({
          diseases: state.diseases.map((d) =>
            d.id === diseaseId
              ? { ...d, medications: [...d.medications, newMedication] }
              : d
          ),
        }));
      },
      updateMedication: (diseaseId, medicationId, medication) => {
        set((state) => ({
          diseases: state.diseases.map((d) =>
            d.id === diseaseId
              ? {
                  ...d,
                  medications: d.medications.map((m) =>
                    m.id === medicationId ? { ...m, ...medication } : m
                  ),
                }
              : d
          ),
        }));
      },
      deleteMedication: (diseaseId, medicationId) => {
        set((state) => ({
          diseases: state.diseases.map((d) =>
            d.id === diseaseId
              ? {
                  ...d,
                  medications: d.medications.filter((m) => m.id !== medicationId),
                }
              : d
          ),
        }));
      },
      setPrivacyMode: (enabled, password) => {
        set({
          privacyModeEnabled: enabled,
          ...(password && { privacyPassword: password }),
        });
      },
      validatePrivacyPassword: (password) => {
        return get().privacyPassword === password;
      },
      exportData: () => {
        const { diseases } = get();
        let csv = 'Disease Name,Symptoms,Onset Date,Medications,Dosages,Reminders\n';
        
        diseases.forEach(disease => {
          if (disease.medications.length === 0) {
            csv += `"${disease.name}","${disease.symptoms}","${disease.onsetDate}","","",""\n`;
          } else {
            disease.medications.forEach((med, index) => {
              if (index === 0) {
                csv += `"${disease.name}","${disease.symptoms}","${disease.onsetDate}","${med.name}","${med.dosage}","${med.reminderTime || ''}"\n`;
              } else {
                csv += `"","","","${med.name}","${med.dosage}","${med.reminderTime || ''}"\n`;
              }
            });
          }
        });
        
        return csv;
      },
    }),
    {
      name: 'bodymetrics-diseases',
    }
  )
);