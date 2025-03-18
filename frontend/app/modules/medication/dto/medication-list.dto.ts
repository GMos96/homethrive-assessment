import type { ScheduledDoseDTO } from '@/modules/medication/dto/scheduled-dose.dto';

export type MedicationDTO = {
  id: number;
  name: string;
  dosage: number;
  dosageUnit: string;
  scheduledValue: number;
  scheduledUnit: 'day' | 'week';
  active: boolean;
  careRecipientId: number;
  scheduledDoses: ScheduledDoseDTO[]; // todo: type
};

export type MedicationListDTO = MedicationDTO[];
