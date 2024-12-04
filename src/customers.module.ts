import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
