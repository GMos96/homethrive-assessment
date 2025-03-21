import { get, post } from '@/utils/fetch-util';
import type { CareRecipientListDTO } from '../dto/care-recipient-list';
import type { CareRecipient } from '@/modules/care-recipient/dto/care-recipient';

export const CareRecipientService = {
  getCareRecipients: async () => {
    return get<CareRecipientListDTO>('/care-recipient');
  },
  getCareRecipientById: async (careRecipientId: number) => {
    return get<CareRecipient>(`/care-recipient/${careRecipientId}`);
  },
  addCareRecipient: async (careRecipient: CareRecipient) => {
    return post<void>('/care-recipient', careRecipient);
  },
};
