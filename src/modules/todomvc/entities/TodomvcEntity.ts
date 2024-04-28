import { BaseEntity } from 'src/base/BaseEntity';
import { Column, Entity } from 'typeorm';
import { StatusEnum } from '../enums/StatusEnum';

@Entity({
  name: 'todomvc',
})
export class TodomvcEntity extends BaseEntity {
  @Column({
    name: 'item',
    type: 'varchar',
    unique: true,
    nullable: false,
    length: 233,
  })
  item!: string;

  @Column({
    name: 'status',
    type: 'int',
    nullable: false,
    default: () => 0,
  })
  status!: StatusEnum;
}
