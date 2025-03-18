import { Form } from '@/components/ui/form/form';
import { Stack } from '@/components/ui/stack/stack';
import { useServerMutation } from '@/hooks/useServerMutation';
import { MedicationService } from '@/modules/medication/service/medication.service';
import type { MedicationDTO } from '@/modules/medication/dto/medication-list.dto';
import { FormField } from '@/components/ui/form/form-field';
import { ControlledInput } from '@/components/ui/input/input';
import { HStack } from '@chakra-ui/react';
import { DialogCancelButton, DialogSubmitButton } from '@/components/ui/dialog';
import { ControlledSelect } from '@/components/ui/select/select';
import { ControlledNumericInput } from '@/components/ui/input/numeric-input';
import { MedicationConstants } from '@/modules/medication/constants/medication.constants';

type Props = {
  onSuccess: () => void;
  careRecipientId: number;
};

export const AddMedicationForm = ({ onSuccess, careRecipientId }: Props) => {
  const { loading, mutate } = useServerMutation(
    MedicationService.createMedication,
  );

  const handleSubmit = (data: MedicationDTO) => {
    mutate({ ...data, careRecipientId }).then(() => {
      onSuccess();
    });
  };

  const { dosageUnits, frequencyUnits } = MedicationConstants;

  return (
    <Stack>
      <Form onSubmit={handleSubmit}>
        <FormField label="Medication Name" fieldName="name" required>
          <ControlledInput fieldName="name"></ControlledInput>
        </FormField>

        <HStack>
          <FormField label="Dosage" fieldName="dosage" required>
            <ControlledNumericInput fieldName="dosage"></ControlledNumericInput>
          </FormField>
          <FormField label="Units" fieldName="dosageUnit" required>
            <ControlledSelect
              fieldName="dosageUnit"
              collection={dosageUnits}
            ></ControlledSelect>
          </FormField>
        </HStack>

        <HStack gap={5}>
          <FormField label="Frequency" fieldName="scheduledValue" required>
            <ControlledNumericInput fieldName="scheduledValue"></ControlledNumericInput>
          </FormField>
          <FormField label="Frequency Units" fieldName="scheduledUnit" required>
            <ControlledSelect
              fieldName="scheduledUnit"
              collection={frequencyUnits}
            ></ControlledSelect>
          </FormField>
        </HStack>

        <HStack gap={3} justifyContent="flex-end">
          <DialogSubmitButton submitting={loading}></DialogSubmitButton>
          <DialogCancelButton></DialogCancelButton>
        </HStack>
      </Form>
    </Stack>
  );
};
