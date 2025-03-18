import { useGet } from '@/hooks/useGet';
import type { CareRecipientListDTO } from '@/modules/care-recipient/dto/care-recipient-list';
import { CareRecipientService } from '@/modules/care-recipient/service/care-recipient.service';
import Table from '@/components/ui/table/table';
import type { CareRecipient } from '@/modules/care-recipient/dto/care-recipient';
import { HStack } from '@chakra-ui/react';
import { DialogButton } from '@/components/ui/dialog';
import { AddCareRecipientForm } from '@/modules/care-recipient/components/add-care-recipient-form';
import { Card, CardBody, CardHeader } from '@/components/ui/card/card';
import { useNavigate } from 'react-router';

export const CareRecipientList = () => {
  const { loading, data, get } = useGet<CareRecipientListDTO>(() =>
    CareRecipientService.getCareRecipients(),
  );

  const navigate = useNavigate();

  const onRecipientClick = (recipientId: number) => {
    navigate(`/care-recipient/overview/${recipientId}`);
  };

  return (
    <Card>
      <CardHeader>Care Recipients</CardHeader>
      <CardBody gap={5}>
        <HStack justify="start" gap={2}>
          <DialogButton.Root>
            <DialogButton.Button>Add Care Recipient</DialogButton.Button>
            <DialogButton.Dialog title="Add Care Recipient">
              <AddCareRecipientForm onSuccess={get}></AddCareRecipientForm>
            </DialogButton.Dialog>
          </DialogButton.Root>
        </HStack>
        <Table.Root
          headerRow={<CarRecipientHeader />}
          loading={loading}
          data={data}
        >
          {data?.map((recipient: CareRecipient) => (
            <Table.Row
              key={recipient.id}
              onClick={() => onRecipientClick(recipient.id)}
            >
              <Table.Cell>
                {recipient.firstName} {recipient.lastName}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Root>
      </CardBody>
    </Card>
  );
};

const CarRecipientHeader = () => {
  return (
    <Table.Row>
      <Table.ColumnHeader>Name</Table.ColumnHeader>
    </Table.Row>
  );
};
