import { Injectable } from '@nestjs/common';
import {
  TypeOrmModuleOptions,
  TypeOrmOptionsFactory as ITypeOrmOptionsFactory,
} from '@nestjs/typeorm';

@Injectable()
export class TypeOrmOptionsFactory implements ITypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    const options: TypeOrmModuleOptions = {
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entityPrefix: process.env.MYSQL_TABLE_PREFIX,
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      poolSize: 10,
      connectorPackage: 'mysql2',
    };

    return options;
  }
}
