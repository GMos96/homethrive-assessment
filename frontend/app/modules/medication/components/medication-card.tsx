import type { MedicationDTO } from '@/modules/medication/dto/medication-list.dto';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@/components/ui/card/card';
import { Stack } from '@/components/ui/stack/stack';
import {
  DataList,
  DataListItemLabel,
  DataListItemValue,
  HStack,
} from '@chakra-ui/react';
import { InactivateMedicationButton } from '@/modules/medication/components/inactivate-medication-button';
import { MarkAsTakenButton } from '@/modules/medication/components/mark-as-taken-button';
import { StatusPill } from '@/components/ui/pill/status-pill';

type Props = {
  medication: MedicationDTO;
  onMutate: () => void;
};

export const MedicationCard = ({ medication, onMutate }: Props) => {
  const scheduledDose = medication.scheduledDoses[0];

  return (
    <Card>
      <CardHeader>
        <HStack gap={5}>
          <h2>
            {medication.name} - {medication.dosage} {medication.dosageUnit}
          </h2>
          <StatusPill status={medication.active} />
        </HStack>
      </CardHeader>
      <CardBody>
        <Stack gap={3}>
          <DataList.Root orientation="horizontal">
            <DataList.Item>
              <DataListItemLabel>Next Dose</DataListItemLabel>
              <DataListItemValue>
                {formatDate(scheduledDose?.dueDate)}
              </DataListItemValue>
            </DataList.Item>
            <DataList.Item>
              <DataListItemLabel>Frequency</DataListItemLabel>
              <DataListItemValue>
                {scheduledDose.scheduledValue} Per {scheduledDose.scheduledUnit}
              </DataListItemValue>
            </DataList.Item>
          </DataList.Root>
        </Stack>
      </CardBody>
      <CardFooter justifyContent="flex-end">
        <InactivateMedicationButton
          medication={medication}
          onMutate={onMutate}
        ></InactivateMedicationButton>
        <MarkAsTakenButton medication={medication} onMutate={onMutate} />
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
