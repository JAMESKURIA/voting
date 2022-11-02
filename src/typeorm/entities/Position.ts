import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PositionName } from '../enums/PositionName';
import { Candidate } from './Candidate';

@Entity({ name: 'positions' })
export class Position extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'position_id' })
  id: number;

  @Column({
    name: 'position_name',
    type: 'enum',
    enum: PositionName,
    unique: true,
  })
  name: PositionName;

  @Column({ name: 'position_description' })
  description: string;

  @OneToMany((type) => Candidate, (candidate) => candidate.position)
  candidates: Candidate[];
}
