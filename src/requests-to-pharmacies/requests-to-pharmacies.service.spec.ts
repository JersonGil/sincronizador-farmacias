import { Test, TestingModule } from '@nestjs/testing';
import { RequestsToPharmaciesService } from './requests-to-pharmacies.service';

describe('RequestsToPharmaciesService', () => {
  let service: RequestsToPharmaciesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestsToPharmaciesService],
    }).compile();

    service = module.get<RequestsToPharmaciesService>(
      RequestsToPharmaciesService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
