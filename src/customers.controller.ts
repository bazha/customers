import { Controller } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @GrpcMethod('CustomersService', 'GetCustomer')
  getCustomer(data): { customerId: string; name: string; email: string } {
    return this.customersService.getCustomer(data);
  }
}
