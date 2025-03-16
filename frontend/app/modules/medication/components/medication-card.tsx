import type { MedicationDTO } from '@/modules/medication/dto/medication-list.dto';
import { Card, CardBody, CardHeader } from '@/components/ui/card/card';

type Props = {
  medication: MedicationDTO;
};

export const MedicationCard = ({ medication }: Props) => {
  return (
    <Card>
      <CardHeader>
        {medication.name} - {medication.dosage} {medication.dosageUnit}
      </CardHeader>
      <CardBody>
        <p>Active: {medication.active ? 'Yes' : 'No'}</p>
        {medication.scheduledDoses && (
          <p>
            Next Scheduled Dose:{' '}
            {new Date(medication.scheduledDoses[0].dueDate).toLocaleString()}
          </p>
        )}
      </CardBody>
    </Card>
  );
};
