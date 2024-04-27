import { Column, CreateDateColumn } from 'typeorm';

export class BaseEntity {
  @Column({
    name: 'id',
    type: 'int',
    primary: true,
    generated: 'increment',
  })
  id!: number;

  @CreateDateColumn({
    name: 'created_at',
    type: 'datetime',
    precision: 3,
    default: () => 'CURRENT_TIMESTAMP(3)',
  })
  createdAt!: Date;
}
