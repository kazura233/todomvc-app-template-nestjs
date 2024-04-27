import { RestResult } from 'src/common/RestResult';

export class BaseController {
  public success(resource?: any) {
    return RestResult.success(resource);
  }

  public error(message: string, code: number = 500, resource?: any) {
    return RestResult.error(message, code, resource);
  }
}
