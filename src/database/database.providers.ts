import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { Customer } from './entities/customer.entities';


export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [__dirname + './entities/*.entity{.ts,.js}'],
        migrations: [__dirname + './migrations/*.ts'],
        synchronize: false,
        logging: true,
      });

      return dataSource.initialize();
    },
    inject: [ConfigService],
  },
];
