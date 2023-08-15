import { Controller, Post, Body } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryBodyDto } from './dto/inventory.dto';

@Controller('inventory')
export class InventoryController {
  constructor(private inventoryService: InventoryService) {}

  @Post()
  createRequestToPharmacy(@Body() body: InventoryBodyDto) {
    return this.inventoryService.saveInventory(body);
  }
}
