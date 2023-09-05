import { Module } from '@nestjs/common';
import { RequestsToPharmaciesModule } from './requests-to-pharmacies/requests-to-pharmacies.module';
import { AuthModule } from './auth/auth.module';
import { ClientsModule } from './clients/clients.module';
import { SupabaseModule } from './common/supabase.module';
import { ConfigModule } from '@nestjs/config';
import { InventoryModule } from './inventory/inventory.module';
import { PingModule } from './ping/ping.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RequestsToPharmaciesModule,
    AuthModule,
    ClientsModule,
    SupabaseModule,
    InventoryModule,
    PingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
