import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ScheduleUnit } from './schedule-unit';
import { OwnedEntity } from '../../common/entity/owned.entity';
import { Medication } from '../medication.entity';

@Entity()
export class ScheduledDose extends OwnedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  scheduledValue: number;

  @Column({ length: 64 })
  scheduledUnit: ScheduleUnit = ScheduleUnit.DAY;

  @Column({ type: 'boolean' })
  taken: boolean = false;

  @Column()
  dueDate: Date;

  @ManyToOne(() => Medication, (medication) => medication.id)
  @JoinColumn({ name: 'medicationId', referencedColumnName: 'id' })
  medicationId: number;
}
