import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { SupabaseModule } from 'src/common/supabase.module';

@Module({
  imports: [SupabaseModule],
  providers: [ClientsService],
  exports: [ClientsService],
})
export class ClientsModule {}
