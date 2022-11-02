import {
  BaseEntity,
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { CandidateStatus } from '../enums/CandidateStatus';
import { Position } from './Position';
import { Vote } from './Vote';

@Entity({ name: 'candidates' })
export class Candidate extends BaseEntity {
  @PrimaryColumn({ name: 'candidate_id' })
  @Generated('uuid')
  id: string;

  @Column({ name: 'candidate_photo' })
  photo: string;

  @Column({ name: 'candidate_status', type: 'enum', enum: CandidateStatus })
  status: CandidateStatus;

  @Column({ name: 'candidate_fname' })
  fname: string;

  @Column({ name: 'candidate_onames' })
  onames: string;

  @Column({ name: 'candidate_idnumber', unique: true, nullable: true })
  idnumber: string;

  @Column({ name: 'candidate_email', unique: true })
  email: string;

  @ManyToOne((type) => Position, (position) => position.candidates, {
    eager: true,
  })
  @JoinColumn({ name: 'candidate_position_id' })
  position: Position;

  @OneToMany((type) => Vote, (vote) => vote.candidate)
  votes: Vote[];
}
