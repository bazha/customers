import { DataSource } from 'typeorm';
import { Customer } from '../customers/entities/customer.entities';

export const databaseProviders = [
  {
    provide: 'DATABASE_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [Customer],
        migrations: [__dirname + './migrations/*.ts'],
        synchronize: false,
        logging: true,
      });

      return dataSource.initialize();
    },
  },
];
