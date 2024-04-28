import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodomvcEntity } from './entities/TodomvcEntity';
import { TodomvcService } from './TodomvcService';
import { TodomvcController } from './TodomvcController';

@Module({
  imports: [TypeOrmModule.forFeature([TodomvcEntity])],
  providers: [TodomvcService],
  controllers: [TodomvcController],
  exports: [TypeOrmModule, TodomvcService],
})
export class TodomvcModule {}
