import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entities';
import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';

@Injectable()
export class CustomersService {
  constructor(
    @Inject('CUSTOMERS_REPOSITORY')
    private customersRepository: Repository<Customer>,
  ) {}

  async findOne(data: { customerId: string }): Promise<Customer> {
    const { customerId } = data;
    const customer = await this.customersRepository.findOne({
      where: { id: Number(customerId) },
    });

    if (!customer) {
      throw new RpcException({
        message: `Customer with ID ${customerId} not found`,
        code: status.NOT_FOUND,
      });
    }

    return customer;
  }
}
