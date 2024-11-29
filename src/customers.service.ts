import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  getCustomer(data: { customerId: string }) {
    const { customerId } = data;
    const customer = {
      customerId,
      name: 'John Doe',
      email: 'john.doe@example.com',
    };

    return customer;
  }
}
