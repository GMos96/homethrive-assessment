import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Profile } from '../profile/profile.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 256, nullable: false })
  password: string;

  @Column({ length: 128, nullable: false, unique: true})
  email: string;

  @CreateDateColumn({ nullable: false })
  createdDate: Date;

  @UpdateDateColumn({ nullable: false })
  lastUpdatedDate: Date;

  @OneToOne(() => Profile, { cascade: true })
  @JoinColumn({ name: 'profileId' })
  profileId: number;
}