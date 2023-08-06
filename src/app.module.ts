import { Module } from '@nestjs/common';
import { RequestsToPharmaciesModule } from './requests-to-pharmacies/requests-to-pharmacies.module';

@Module({
  imports: [RequestsToPharmaciesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
