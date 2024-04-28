import { BaseDTO } from 'src/base/BaseDTO';
import { StatusEnum } from '../enums/StatusEnum';
import { IsNumber, IsString } from 'class-validator';

export class TodomvcFindDTO {
  @IsString()
  public keyword!: string;
  @IsNumber()
  public status!: StatusEnum;
}

export class TodomvcAddDTO {
  @IsString()
  public item!: string;
}

export class TodomvcDelDTO extends BaseDTO {}

export class TodomvcModifyDTO extends BaseDTO {
  @IsString()
  public item!: string;
  @IsNumber()
  public status!: StatusEnum;
}
