import { Container } from '@/components/ui/container/container';
import { CareRecipientOverview } from '@/modules/care-recipient/overview/components/care-recipient-overview';
import type { Route } from './+types/overview';

const CareRecipientOverviewRoute = ({ params }: Route.LoaderArgs) => {
  return (
    <Container>
      <CareRecipientOverview id={+params.id}></CareRecipientOverview>
    </Container>
  );
};

export default CareRecipientOverviewRoute;
