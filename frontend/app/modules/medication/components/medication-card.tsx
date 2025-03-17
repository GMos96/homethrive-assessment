import type { MedicationDTO } from '@/modules/medication/dto/medication-list.dto';
import { Card, CardBody, CardHeader } from '@/components/ui/card/card';
import { Stack } from '@/components/ui/stack/stack';

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
        <Stack gap={3}>
          <p>Active: {medication.active ? 'Yes' : 'No'}</p>
          {medication.scheduledDoses && (
            <p>
              Next Scheduled Dose:{' '}
              {new Date(medication.scheduledDoses[0].dueDate).toLocaleString()}
            </p>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};
