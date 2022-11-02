import {
  BaseEntity,
  Column,
  Entity,
  Generated,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { User } from './User';

@Entity({ name: 'login' })
export class Login extends BaseEntity {
  @PrimaryColumn({ name: 'login_id' })
  @Generated('uuid')
  id: string;

  @Column({ name: 'login_idnumber', unique: true, nullable: true })
  idnumber: string;

  @Column({ name: 'login_email', unique: true })
  email: string;

  @Column({ name: 'login_password' })
  password: string;

  // @Column({
  //   name: 'login_rank',
  //   type: 'enum',
  //   enum: RoleName,
  //   default: RoleName.VOTER,
  // })
  // rank: RoleName;

  @OneToOne((type) => User, (user) => user.login)
  user: User;
}
