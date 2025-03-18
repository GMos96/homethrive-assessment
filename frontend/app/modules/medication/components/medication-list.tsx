import { useGet } from '@/hooks/useGet';
import { MedicationService } from '@/modules/medication/service/medication.service';
import type { MedicationListDTO } from '@/modules/medication/dto/medication-list.dto';
import { MedicationCard } from '@/modules/medication/components/medication-card';
import { Stack } from '@/components/ui/stack/stack';
import { HStack } from '@chakra-ui/react';
import { DialogButton } from '@/components/ui/dialog';
import { AddMedicationForm } from '@/modules/medication/components/add-medication-form';

type Props = {
  careRecipientId: number;
};

export const MedicationList = ({ careRecipientId }: Props) => {
  const { data, get } = useGet<MedicationListDTO>(() =>
    MedicationService.getMedicationList(careRecipientId),
  );

  const refresh = () => {
    get();
  };

  // TODO: loading state

  return (
    <Stack gap={5}>
      <HStack>
        <DialogButton.Root>
          <DialogButton.Button>Add Medication</DialogButton.Button>
          <DialogButton.Dialog title="Add Medication">
            <AddMedicationForm
              onSuccess={refresh}
              careRecipientId={careRecipientId}
            />
          </DialogButton.Dialog>
        </DialogButton.Root>
      </HStack>
      {data?.map((medication) => (
        <MedicationCard
          medication={medication}
          key={medication.id}
          onMutate={refresh}
        />
      ))}
    </Stack>
  );
};
