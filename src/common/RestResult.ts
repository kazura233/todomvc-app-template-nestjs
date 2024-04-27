import type { HttpException } from '@nestjs/common';

export class RestResult {
  public code: number = 200;
  public message: string = 'OK';
  public resource: any = null;

  public constructor(resource: any = null) {
    this.resource = resource;
  }

  public static success(resource?: any) {
    return new RestResult(resource);
  }

  public static exception(exception: HttpException, resource?: any) {
    const result = new RestResult(resource);
    const response = exception.getResponse();
    result.resource = response !== exception.message ? response : null;
    result.code = exception.getStatus();
    result.message = exception.message;
    return result;
  }

  public static error(message: string, code: number = 500, resource?: any) {
    const result = new RestResult(resource);
    result.message = message;
    result.code = code;
    return result;
  }
}
