import { Stack } from '@/components/ui/stack/stack';
import { MedicationList } from '@/modules/medication/components/medication-list';
import { useGet } from '@/hooks/useGet';
import type { CareRecipient } from '@/modules/care-recipient/dto/care-recipient';
import { CareRecipientService } from '@/modules/care-recipient/service/care-recipient.service';
import { Heading } from '@chakra-ui/react';

type Props = {
  id: number;
};

export const CareRecipientOverview = ({ id }: Props) => {
  const { data } = useGet<CareRecipient>(() =>
    CareRecipientService.getCareRecipientById(id),
  );

  return (
    <Stack gap="5">
      <Heading>
        Medications for: {data?.firstName} {data?.lastName}
      </Heading>
      <MedicationList careRecipientId={id}></MedicationList>
    </Stack>
  );
};
