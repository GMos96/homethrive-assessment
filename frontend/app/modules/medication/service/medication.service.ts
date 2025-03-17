import { get, patch, post } from '@/utils/fetch-util';
import type { MedicationListDTO } from '../dto/medication-list.dto';
import type { CreateMedicationDTO } from '@/modules/medication/dto/create-medication-dto';

export const MedicationService = {
  async getMedicationList(): Promise<MedicationListDTO> {
    return await get<MedicationListDTO>('/medication');
  },
  async createMedication(medication: CreateMedicationDTO): Promise<void> {
    return await post<void>('/medication', medication);
  },
  async updateMedicationStatus(
    medicationId: number,
    active: boolean,
  ): Promise<void> {
    return await patch<void>(`/medication/${medicationId}/active`, { active });
  },
  async markAsTaken(medicationId: number) {
    return await post<void>(`/medication/${medicationId}/scheduled-dose`);
  },
};
