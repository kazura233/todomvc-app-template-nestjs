import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [],
  controllers: [],
  exports: [TypeOrmModule],
})
export class TodomvcModule {}
