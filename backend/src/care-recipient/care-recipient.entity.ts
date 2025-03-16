import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Account } from '../account/account.entity';

@Entity()
export class CareRecipient {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 128 })
  firstName: string;

  @Column({ length: 128 })
  lastName: string;

  @ManyToOne(() => Account, (account) => account.id)
  @JoinColumn()
  accountId: number;
}
