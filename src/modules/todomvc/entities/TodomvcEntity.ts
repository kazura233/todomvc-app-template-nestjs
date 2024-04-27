import { BaseEntity } from 'src/base/BaseEntity';
import { Entity } from 'typeorm';

@Entity({
  name: 'todomvc',
})
export class TodomvcEntity extends BaseEntity {}
