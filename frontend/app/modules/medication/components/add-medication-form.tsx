import { Form } from '@/components/ui/form/form';
import { Stack } from '@/components/ui/stack/stack';
import { useServerMutation } from '@/hooks/useServerMutation';
import { MedicationService } from '@/modules/medication/service/medication.service';
import type { MedicationDTO } from '@/modules/medication/dto/medication-list.dto';
import { FormField } from '@/components/ui/form/form-field';
import { ControlledInput } from '@/components/ui/input/input';
import { createListCollection, HStack } from '@chakra-ui/react';
import { DialogCancelButton, DialogSubmitButton } from '@/components/ui/dialog';
import { ControlledSelect } from '@/components/ui/select/select';
import { ControlledNumericInput } from '@/components/ui/input/numeric-input';

type Props = {
  onSuccess: () => void;
  careRecipientId: number;
};

const dosageUnits = createListCollection({
  items: [{ label: 'MG', value: 'mg' }],
});

const frequencyUnits = createListCollection({
  items: [
    { label: 'Daily', value: 'day' },
    { label: 'Weekly', value: 'week' },
  ],
});

export const AddMedicationForm = ({ onSuccess, careRecipientId }: Props) => {
  const { loading, mutate } = useServerMutation(
    MedicationService.createMedication,
  );

  const handleSubmit = (data: MedicationDTO) => {
    mutate({ ...data, careRecipientId }).then(() => {
      onSuccess();
    });
  };

  return (
    <Stack>
      <Form onSubmit={handleSubmit}>
        <FormField label="Medication Name">
          <ControlledInput fieldName="name" required={true}></ControlledInput>
        </FormField>

        <HStack>
          <FormField label="Dosage">
            <ControlledNumericInput
              fieldName="dosage"
              required={true}
            ></ControlledNumericInput>
          </FormField>
          <FormField label="Units">
            <ControlledSelect
              required={true}
              fieldName="dosageUnit"
              collection={dosageUnits}
            ></ControlledSelect>
          </FormField>
        </HStack>

        <HStack gap={5}>
          <FormField label="Frequency">
            <ControlledNumericInput
              fieldName="scheduledValue"
              required={true}
            ></ControlledNumericInput>
          </FormField>
          <FormField label="Frequency Units">
            <ControlledSelect
              required={true}
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
