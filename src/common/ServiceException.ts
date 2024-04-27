import { HttpException } from '@nestjs/common';

export class ServiceException extends HttpException {
  constructor(message: string, code: number = 500) {
    super(message, code);
  }
}
