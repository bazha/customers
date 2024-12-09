import { ConfigService } from '@nestjs/config';
import path from 'path';
import { DataSource } from 'typeorm';

import { fileURLToPath } from 'url';

const configService = new ConfigService();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USER'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_NAME'),
  entities: [path.join(__dirname, 'src/database/entities/customer.entities')],
  migrations: [path.join(__dirname, '../src/database/migrations/*.ts')],
  migrationsTableName: 'Customers',
  synchronize: false,
  logging: true,
});
