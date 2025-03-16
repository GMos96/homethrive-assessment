import { JoinColumn, ManyToOne } from 'typeorm';
import { Account } from '../../account/account.entity';

export abstract class OwnedEntity {
  @ManyToOne(() => Account, (account) => account.id)
  @JoinColumn({ name: 'accountId', referencedColumnName: 'id' })
  accountId: number;
}
