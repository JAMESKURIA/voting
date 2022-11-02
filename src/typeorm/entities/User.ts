import {
  BaseEntity,
  Column,
  Entity,
  Generated,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Login } from './Login';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryColumn({ name: 'user_id' })
  @Generated('uuid')
  id: string;

  @Column({ name: 'user_fname' })
  fname: string;

  @Column({ name: 'user_onames' })
  onames: string;

  @Column({ name: 'user_phonenumber' })
  phonenumber: string;

  @Column({ name: 'user_voted', type: 'boolean', default: false })
  voted: boolean;

  @OneToOne((type) => Login, (login) => login.user, {
    eager: true,
  })
  @JoinColumn({ name: 'user_login_id' })
  login: Login;
}
