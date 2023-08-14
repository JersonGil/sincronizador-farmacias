import { Module } from '@nestjs/common';
import { Inventory } from './inventory';
import { InventoryService } from './inventory.service';
import { DatabaseModule } from 'src/database/database.module';
import { inventoryProviders } from './inventory.provider';
import { InventoryController } from './inventory.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...inventoryProviders, Inventory, InventoryService],
  controllers: [InventoryController],
})
export class InventoryModule {}
