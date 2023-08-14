import { Injectable, Inject } from '@nestjs/common';
import { QueryRunner } from 'typeorm';

@Injectable()
export class InventoryService {
  constructor(
    @Inject('INVENTORY_REPOSITORY') private readonly connection: QueryRunner,
  ) {}

  async doSomeQuery() {
    return this.connection.query('SELECT * FROM INVENTARIO;');
  }
}
