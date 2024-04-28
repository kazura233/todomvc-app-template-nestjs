import { Body, Controller, Inject, Post } from '@nestjs/common';
import { TodomvcService } from './TodomvcService';
import { BaseController } from 'src/base/BaseController';
import {
  TodomvcAddDTO,
  TodomvcDelDTO,
  TodomvcFindDTO,
  TodomvcModifyDTO,
} from './dtos/TodomvcDTO';
import { RestResult } from 'src/common/RestResult';
import { TodomvcEntity } from './entities/TodomvcEntity';

@Controller('/todomvc')
export class TodomvcController extends BaseController {
  @Inject()
  private readonly todomvcService!: TodomvcService;

  @Post('/find')
  public async find(@Body() body: TodomvcFindDTO): Promise<RestResult> {
    console.log('TodomvcController->find', body);
    return this.todomvcService
      .find(body.keyword, body.status)
      .then(this.success);
  }

  @Post('/add')
  public async add(@Body() body: TodomvcAddDTO): Promise<RestResult> {
    console.log('TodomvcController->add', body);
    return this.todomvcService.addByDTO(body).then(this.success);
  }

  @Post('/modify')
  public async modify(@Body() body: TodomvcModifyDTO): Promise<RestResult> {
    console.log('TodomvcController->modify', body);
    const entity: TodomvcEntity = new TodomvcEntity();
    entity.id = body.id;
    entity.item = body.item;
    entity.status = body.status;
    return this.todomvcService.modify(entity).then(this.success);
  }

  @Post('/del')
  public async del(@Body() body: TodomvcDelDTO): Promise<RestResult> {
    console.log('TodomvcController->del', body);
    return this.todomvcService.del(body.id).then(this.success);
  }
}
