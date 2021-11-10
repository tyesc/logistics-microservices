import { Test, TestingModule } from '@nestjs/testing';
import { SupplyRequestController } from './supply-request.controller';

describe('SupplyRequestController', () => {
  let controller: SupplyRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupplyRequestController],
    }).compile();

    controller = module.get<SupplyRequestController>(SupplyRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
