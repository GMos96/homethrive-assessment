import type { MedicationDTO } from '@/modules/medication/dto/medication-list.dto';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@/components/ui/card/card';
import { Stack } from '@/components/ui/stack/stack';
import { HStack } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';

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
          <div>Active: {medication.active ? 'Yes' : 'No'}</div>
          {medication.scheduledDoses && (
            <div>
              Next Scheduled Dose:{' '}
              {formatDate(medication.scheduledDoses[0]?.dueDate)}
            </div>
          )}
        </Stack>
      </CardBody>
      <CardFooter>
        <HStack>
          <Button variant="subtle">Inactivate Medication</Button>
          <Button variant="subtle">Mark as Taken</Button>
        </HStack>
      </CardFooter>
    </Card>
  );
};

const formatDate = (date: Date | string | number) => {
  if (typeof date === 'string' || typeof date === 'number') {
    date = new Date(date);
  }
  return date?.toLocaleDateString('en-US', {});
};
