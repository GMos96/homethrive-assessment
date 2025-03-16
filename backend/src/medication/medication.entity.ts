import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DosageUnit } from './dosage-unit';
import { ScheduledDoseEntity } from './scheduled-dose/scheduled-dose.entity';
import { OwnedEntity } from '../common/entity/owned.entity';

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

  @Column({ type: 'bit' })
  active: boolean = true;

  @OneToMany(() => ScheduledDoseEntity, (scheduledDose) => scheduledDose.id)
  scheduledDoses: ScheduledDoseEntity[];
}
