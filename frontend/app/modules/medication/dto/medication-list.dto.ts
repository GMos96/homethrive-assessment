export type MedicationDTO = {
  id: number;
  name: string;
  dosage: number;
  dosageUnit: string;
  scheduledValue: number;
  scheduledUnit: 'day' | 'week';
  active: boolean;
  scheduledDoses: any[]; // todo: type
};

export type MedicationListDTO = MedicationDTO[];
