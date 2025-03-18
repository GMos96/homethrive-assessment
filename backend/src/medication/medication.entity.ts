import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DosageUnit } from './dosage-unit';
import { ScheduledDose } from './scheduled-dose/scheduled.dose.entity';
import { OwnedEntity } from '../common/entity/owned.entity';
import { CareRecipient } from '../care-recipient/care-recipient.entity';

@Entity()
export class Medication extends OwnedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 256 })
  name: string;

  @Column()
  dosage: number;

  @Column({ length: 64 })
  dosageUnit: DosageUnit = DosageUnit.MG;

  @Column({ type: 'boolean' })
  active: boolean = true;

  @ManyToOne(() => CareRecipient, (recipient) => recipient.id)
  @JoinColumn({ name: 'careRecipientId', referencedColumnName: 'id' })
  careRecipientId: number;

  @OneToMany(() => ScheduledDose, (scheduledDose) => scheduledDose.medicationId)
  scheduledDoses: ScheduledDose[];
}
