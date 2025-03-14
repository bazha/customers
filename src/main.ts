import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL],
      queue: 'customers_queue',
      queueOptions: {
        durable: true,
      },
    },
  });

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'customers',
      protoPath: join(__dirname, '../../src/protos/customers.proto'),
      url: '0.0.0.0:3003',
    },
  });

  await app.startAllMicroservices();
  logger.log('Customers microservice has started');
}
bootstrap();
