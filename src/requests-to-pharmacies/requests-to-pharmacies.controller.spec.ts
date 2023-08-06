import { Test, TestingModule } from '@nestjs/testing';
import { RequestsToPharmaciesController } from './requests-to-pharmacies.controller';

describe('RequestsToPharmaciesController', () => {
  let controller: RequestsToPharmaciesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestsToPharmaciesController],
    }).compile();

    controller = module.get<RequestsToPharmaciesController>(
      RequestsToPharmaciesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
