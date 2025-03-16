import { useGet } from '@/hooks/useGet';
import type { CareRecipientListDTO } from '@/modules/care-recipient/dto/care-recipient-list';
import { CareRecipientService } from '@/modules/care-recipient/service/care-recipient.service';
import Table from '@/components/ui/table/table';
import type { CareRecipient } from '@/modules/care-recipient/dto/care-recipient';
import { HStack } from '@chakra-ui/react';
import { DialogButton } from '@/components/ui/dialog';
import { AddCareRecipientForm } from '@/modules/care-recipient/components/add-care-recipient-form';

export const CareRecipientList = () => {
  const { loading, data } = useGet<CareRecipientListDTO>(() =>
    CareRecipientService.getCareRecipients(),
  );

  const refresh = () => {
    // TODO: Much better experience needed here
    window.location.reload();
  };

  return (
    <>
      <HStack justify="start" gap={2}>
        <DialogButton.Root>
          <DialogButton.Button>Add Care Recipient</DialogButton.Button>
          <DialogButton.Dialog title="Add Care Recipient">
            <AddCareRecipientForm onSuccess={refresh}></AddCareRecipientForm>
          </DialogButton.Dialog>
        </DialogButton.Root>
      </HStack>
      <Table.Root
        headerRow={<CarRecipientHeader />}
        loading={loading}
        data={data}
      >
        {data?.map((recipient: CareRecipient) => (
          <Table.Row key={recipient.id}>
            <Table.Cell>
              {recipient.firstName} {recipient.lastName}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Root>
    </>
  );
};

const CarRecipientHeader = () => {
  return (
    <Table.Row>
      <Table.ColumnHeader>Name</Table.ColumnHeader>
    </Table.Row>
  );
};
