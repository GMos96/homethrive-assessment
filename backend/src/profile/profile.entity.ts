import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Account } from '../account/account.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 128 })
  firstName: string;

  @Column({ length: 128 })
  lastName: string;

  @OneToOne(() => Account, account => account.id)
  @JoinColumn({ name: 'accountId' })
  accountId: number;
}