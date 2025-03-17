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
import { InactivateMedicationButton } from '@/modules/medication/components/inactivate-medication-button';

type Props = {
  medication: MedicationDTO;
  onMutate: () => void;
};

export const MedicationCard = ({ medication, onMutate }: Props) => {
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
          <InactivateMedicationButton
            medication={medication}
            onMutate={onMutate}
          ></InactivateMedicationButton>
          <Button variant="subtle">Mark as Taken</Button>
        </HStack>
      </CardFooter>
    </Card>
  );
};

const formatDate = (date: Date | string | number) => {
  if (!date) {
    return;
  }

  if (typeof date === 'string' || typeof date === 'number') {
    date = new Date(date);
  }
  return date?.toLocaleDateString('en-US', {});
};
