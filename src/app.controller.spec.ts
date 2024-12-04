import { Test, TestingModule } from '@nestjs/testing';
import { CustomersController } from './customers.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let customersController: CustomersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CustomersController],
      providers: [AppService],
    }).compile();

    customersController = app.get<CustomersController>(CustomersController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(customersController.getHello()).toBe('Hello World!');
    });
  });
});
