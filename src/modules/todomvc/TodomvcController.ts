import { Controller, Inject } from '@nestjs/common';
import { TodomvcService } from './TodomvcService';
import { BaseController } from 'src/base/BaseController';

@Controller('/todomvc')
export class TodomvcController extends BaseController {
  @Inject()
  private readonly todomvcService!: TodomvcService;
}
