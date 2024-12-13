import { DataSource } from 'typeorm';
import { Customer } from './entities/customer.entities';

export const customersProviders = [
  {
    provide: 'CUSTOMERS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Customer),
    inject: ['DATABASE_SOURCE'],
  },
];
