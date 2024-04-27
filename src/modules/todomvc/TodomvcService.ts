import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodomvcEntity } from './entities/TodomvcEntity';

@Injectable()
export class TodomvcService {
  @InjectRepository(TodomvcEntity)
  private todomvcRepository!: Repository<TodomvcEntity>;
}
