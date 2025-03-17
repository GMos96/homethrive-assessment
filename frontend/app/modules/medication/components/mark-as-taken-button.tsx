import { Button } from '@/components/ui/button';
import { useServerMutation } from '@/hooks/useServerMutation';
import type { MedicationDTO } from '@/modules/medication/dto/medication-list.dto';
import { MedicationService } from '@/modules/medication/service/medication.service';

type Props = {
  medication: MedicationDTO;
  onMutate?: () => void;
};

export const MarkAsTakenButton = ({ medication, onMutate }: Props) => {
  const { mutate, loading } = useServerMutation((mutated: MedicationDTO) => {
    return MedicationService.markAsTaken(mutated.id);
  });

  const onClick = () => {
    mutate(medication).then(onMutate);
  };

  return (
    <Button variant="subtle" loading={loading} onClick={onClick}>
      Mark as Taken
    </Button>
  );
};
