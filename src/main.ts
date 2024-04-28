import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, NestFactory } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import type { NestExpressApplication } from '@nestjs/platform-express';

import { resolve } from 'node:path';
import { TypeOrmOptionsFactory } from './factory/TypeOrmOptionsFactory';
import { TodomvcModule } from './modules/todomvc/TodomvcModule';
import { GlobalExceptionFilter } from './common/GlobalExceptionFilter';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [resolve(process.cwd(), `env/.env.local`)],
      isGlobal: true,
      expandVariables: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmOptionsFactory,
    }),
    TodomvcModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
class MainModule {
  static async bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(this, {
      cors: true,
    });

    app.disable('x-powered-by');

    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        validateCustomDecorators: true,
      }),
    );

    await app.listen(parseInt(process.env.SERVER_PORT));
  }
}

MainModule.bootstrap();
