import { Module } from '@nestjs/common';
import { RequestsToPharmaciesController } from './requests-to-pharmacies.controller';
import { RequestsToPharmaciesService } from './requests-to-pharmacies.service';

@Module({
  controllers: [RequestsToPharmaciesController],
  providers: [RequestsToPharmaciesService],
})
export class RequestsToPharmaciesModule {}
