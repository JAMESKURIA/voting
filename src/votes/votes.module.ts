import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vote } from './../typeorm/entities/Vote';
import { VotesController } from './controllers/votes/votes.controller';
import { VotesService } from './services/votes/votes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Vote])],
  controllers: [VotesController],
  providers: [VotesService],
})
export class VotesModule {}
