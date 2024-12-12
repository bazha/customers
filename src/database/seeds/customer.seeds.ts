import { DataSource } from 'typeorm';
import { Customer } from '../entities/customer.entities';

class CustomersSeed {
  private datasource: DataSource;
  constructor(dataSource: DataSource) {
    this.datasource = dataSource;
  }

  async seed() {
    const customerRepository = this.datasource.getRepository(Customer);

    const customers = [
      { name: 'John Doe', email: 'john.doe@example.com' },
      { name: 'Jane Doe', email: 'jane.doe@example.com' },
      { name: 'Alice Smith', email: 'alice.smith@example.com' },
    ];

    await customerRepository.insert(customers);

    console.log('Seed data inserted successfully!');
  }
}

export default CustomersSeed;
