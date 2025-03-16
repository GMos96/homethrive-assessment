import { get, post } from '@/utils/fetch-util';
import type { MedicationListDTO } from '../dto/medication-list.dto';
import type { CreateMedicationDTO } from '@/modules/medication/dto/create-medication-dto';

export const MedicationService = {
  async getMedicationList(): Promise<MedicationListDTO> {
    return await get<MedicationListDTO>('/medication');
  },
  async createMedication(medication: CreateMedicationDTO): Promise<void> {
    return await post<void>('/medication', medication);
  },
};
