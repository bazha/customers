import { Controller } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { GrpcMethod } from '@nestjs/microservices';
import { RpcException } from '@nestjs/microservices';

import { Customer } from './entities/customer.entities';

@Controller()
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @GrpcMethod('CustomersService', 'GetCustomer')
  async getCustomer(data): Promise<Customer> {
    const { customerId } = data;
    try {
      return await this.customersService.findOne({ customerId });
    } catch (err) {
      console.log(err instanceof RpcException);
      throw err;
    }
  }
}
