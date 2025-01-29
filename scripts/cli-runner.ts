import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

import { Customer } from '../src/customers/entities/customer.entities';
dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Customer],
  migrations: [__dirname + '/../src/database/migrations/*.ts'],
  synchronize: false,
  logging: true,
});

export default AppDataSource;
