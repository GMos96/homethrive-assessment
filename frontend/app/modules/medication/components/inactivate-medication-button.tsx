import { Button } from '@/components/ui/button';
import type { MedicationDTO } from '@/modules/medication/dto/medication-list.dto';
import { useServerMutation } from '@/hooks/useServerMutation';
import { MedicationService } from '@/modules/medication/service/medication.service';

type Props = {
  medication: MedicationDTO;
  onMutate?: () => void;
};

export const InactivateMedicationButton = ({ medication, onMutate }: Props) => {
  const { mutate, loading } = useServerMutation((mutated: MedicationDTO) => {
    return MedicationService.updateMedicationStatus(mutated.id, mutated.active);
  });

  const onClick = () => {
    mutate({ ...medication, active: !medication.active }).then(onMutate);
  };

  return (
    <Button variant="subtle" loading={loading} onClick={onClick}>
      {medication.active ? 'Inactivate' : 'Activate'} Medication
    </Button>
  );
};
