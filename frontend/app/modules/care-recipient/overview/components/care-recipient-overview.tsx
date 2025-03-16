import { Stack } from '@/components/ui/stack/stack';
import { MedicationList } from '@/modules/medication/components/medication-list';

type Props = {
  id: number;
};

export const CareRecipientOverview = ({ id }: Props) => {
  return (
    <Stack gap="5">
      <h1 className="text-2xl">Medications for: </h1>
      <MedicationList></MedicationList>
    </Stack>
  );
};
