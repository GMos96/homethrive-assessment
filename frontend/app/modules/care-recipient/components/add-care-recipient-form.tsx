import { Stack } from '@/components/ui/stack/stack';
import { FormField } from '@/components/ui/form/form-field';
import { ControlledInput } from '@/components/ui/input/input';
import { Form } from '@/components/ui/form/form';
import { useServerMutation } from '@/hooks/useServerMutation';
import { CareRecipientService } from '@/modules/care-recipient/service/care-recipient.service';
import { DialogCancelButton, DialogSubmitButton } from '@/components/ui/dialog';
import React from 'react';
import { HStack } from '@chakra-ui/react';

type FormProps = {
  onSuccess: () => void;
};

export const AddCareRecipientForm = ({ onSuccess }: FormProps) => {
  const { loading, mutate } = useServerMutation(
    CareRecipientService.addCareRecipient,
  );

  const handleSubmit = (data: any) => {
    mutate(data).then(() => {
      onSuccess();
    });
  };

  return (
    <Stack>
      <Form onSubmit={(value) => handleSubmit(value)}>
        <FormField label="First Name" fieldName="firstName">
          <ControlledInput fieldName="firstName" required></ControlledInput>
        </FormField>

        <FormField label="Last Name" fieldName="lastName">
          <ControlledInput fieldName="lastName" required></ControlledInput>
        </FormField>

        <HStack justifyContent="flex-end">
          <DialogSubmitButton submitting={loading}></DialogSubmitButton>
          <DialogCancelButton></DialogCancelButton>
        </HStack>
      </Form>
    </Stack>
  );
};
