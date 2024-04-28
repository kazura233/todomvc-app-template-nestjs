import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  DeleteResult,
  FindOptionsWhere,
  InsertResult,
  Like,
  Repository,
  UpdateResult,
} from 'typeorm';
import { TodomvcEntity } from './entities/TodomvcEntity';
import { StatusEnum } from './enums/StatusEnum';
import { TodomvcAddDTO } from './dtos/TodomvcDTO';
import { isNotEmpty } from 'class-validator';

@Injectable()
export class TodomvcService {
  @InjectRepository(TodomvcEntity)
  private todomvcRepository!: Repository<TodomvcEntity>;

  public async deleteAll(): Promise<DeleteResult> {
    return this.todomvcRepository.delete({});
  }

  public async findAll(): Promise<TodomvcEntity[]> {
    return this.todomvcRepository.find();
  }

  public async find(
    keyword: string,
    status: StatusEnum,
  ): Promise<TodomvcEntity[]> {
    const where: FindOptionsWhere<TodomvcEntity> = {};

    if (isNotEmpty(keyword)) where.item = Like(`%${keyword}%`);

    if (<number>status !== -1) where.status = status;

    return this.todomvcRepository.find({
      where,
    });
  }

  public async addByDTO(dto: TodomvcAddDTO): Promise<InsertResult> {
    return this.add(dto.item, StatusEnum.TODOMVC_STATUS_ACTIVE);
  }

  public async add(item: string, status: StatusEnum): Promise<InsertResult> {
    return this.todomvcRepository.insert({
      item,
      status,
    });
  }

  public async modify(entity: TodomvcEntity): Promise<UpdateResult> {
    return this.todomvcRepository.update(
      { id: entity.id },
      {
        item: entity.item,
        status: entity.status,
      },
    );
  }

  public async del(id: number): Promise<DeleteResult> {
    return this.todomvcRepository.delete({ id });
  }

  public async findById(id: number): Promise<TodomvcEntity | null> {
    return this.todomvcRepository.findOneBy({ id });
  }
}
