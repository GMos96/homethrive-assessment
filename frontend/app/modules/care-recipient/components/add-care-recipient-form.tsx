import { Stack } from '@/components/ui/stack/stack';
import { FormField } from '@/components/ui/form/form-field';
import { ControlledInput } from '@/components/ui/input/input';
import { Form } from '@/components/ui/form/form';
import { useServerMutation } from '@/hooks/useServerMutation';
import { CareRecipientService } from '@/modules/care-recipient/service/care-recipient.service';
import { DialogSubmitButton } from '@/components/ui/dialog';
import React from 'react';

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
    <>
      <Stack>
        <Form onSubmit={(value) => handleSubmit(value)}>
          <FormField label="First Name">
            <ControlledInput fieldName="firstName"></ControlledInput>
          </FormField>

          <FormField label="Last Name">
            <ControlledInput fieldName="lastName"></ControlledInput>
          </FormField>

          <DialogSubmitButton submitting={loading}></DialogSubmitButton>
        </Form>
      </Stack>
    </>
  );
};
