import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { CustomersModule } from './customers.module';
import { Logger } from '@nestjs/common';
import { join } from 'path';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(CustomersModule);

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
      protoPath: join(__dirname, '../src/protos/customers.proto'),
      url: 'customers:3003',
    },
  });

  await app.startAllMicroservices();
  logger.log('Customers microservice has started');
}
bootstrap();
