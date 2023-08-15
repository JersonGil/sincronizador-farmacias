import { Module } from '@nestjs/common';
import { Inventory } from './inventory';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { SupabaseModule } from 'src/common/supabase.module';

@Module({
  imports: [SupabaseModule],
  providers: [Inventory, InventoryService],
  controllers: [InventoryController],
})
export class InventoryModule {}
