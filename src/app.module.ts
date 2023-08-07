import { Module } from '@nestjs/common';
import { RequestsToPharmaciesModule } from './requests-to-pharmacies/requests-to-pharmacies.module';
import { AuthModule } from './auth/auth.module';
import { ClientsModule } from './clients/clients.module';
import { SupabaseModule } from './common/supabase.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RequestsToPharmaciesModule,
    AuthModule,
    ClientsModule,
    SupabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
