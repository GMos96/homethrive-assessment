import { Column, Entity, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { OwnedEntity } from '../common/entity/owned.entity';

@Entity()
export class CareRecipient extends OwnedEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 128 })
  firstName: string;

  @Column({ length: 128 })
  lastName: string;
}
