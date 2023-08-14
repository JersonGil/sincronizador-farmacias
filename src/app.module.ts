import { Module } from '@nestjs/common';
import { RequestsToPharmaciesModule } from './requests-to-pharmacies/requests-to-pharmacies.module';
import { AuthModule } from './auth/auth.module';
import { ClientsModule } from './clients/clients.module';
import { SupabaseModule } from './common/supabase.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RequestsToPharmaciesModule,
    AuthModule,
    ClientsModule,
    SupabaseModule,
    DatabaseModule,
    InventoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
