import { Module } from '@nestjs/common';
import { RequestsToPharmaciesController } from './requests-to-pharmacies.controller';
import { RequestsToPharmaciesService } from './requests-to-pharmacies.service';
import { SupabaseModule } from 'src/common/supabase.module';

@Module({
  imports: [SupabaseModule],
  controllers: [RequestsToPharmaciesController],
  providers: [RequestsToPharmaciesService],
})
export class RequestsToPharmaciesModule {}
