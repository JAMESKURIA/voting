import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vote } from './../../../typeorm/entities/Vote';

@Injectable()
export class VotesService {
  constructor(
    @InjectRepository(Vote) private votesRepository: Repository<Vote>,
  ) {}
}
