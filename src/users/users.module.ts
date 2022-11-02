import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candidate } from 'src/typeorm/entities/Candidate';
import { Login } from './../typeorm/entities/Login';
import { User } from './../typeorm/entities/User';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Login, User, Candidate])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
