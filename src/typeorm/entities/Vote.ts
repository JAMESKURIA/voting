import {
  BaseEntity,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Candidate } from './Candidate';

@Entity({ name: 'votes' })
export class Vote extends BaseEntity {
  @PrimaryColumn({ name: 'vote_id' })
  @Generated('uuid')
  id: string;

  @ManyToOne((type) => Candidate, (candidate) => candidate.votes)
  @JoinColumn({ name: 'vote_candidate_id' })
  candidate: Candidate;
}
