import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import type { Response } from 'express';
import { RestResult } from './RestResult';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception instanceof HttpException) {
      const result = RestResult.exception(exception);
      response.status(HttpStatus.OK).json(result);
    } else {
      const result = RestResult.error('Unknown Error');
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(result);
    }
  }
}
