import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { CustomersModule } from '../src/customers.module';
import { DataSource } from 'typeorm';

async function createDataSource() {
  const app = await NestFactory.createApplicationContext(CustomersModule);

  const configService = app.get(ConfigService);

  const dataSource = new DataSource({
    type: 'postgres',
    host: configService.get<string>('DB_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USER'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_NAME'),
    entities: ['usr/src/app/scripts/database/entities/**/*.entity{.ts,.js}'],
    migrations: ['usr/src/app/scripts/databse/migrations/*{.ts,.js}'],
    synchronize: false,
    logging: true,
  });

  await app.close();
  return dataSource;
}

createDataSource()
  .then((dataSource) => dataSource.initialize())
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
