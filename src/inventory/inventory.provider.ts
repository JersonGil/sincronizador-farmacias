import { DataSource } from 'typeorm';
import { Inventory } from './invetory.entity';

export const inventoryProviders = [
  {
    provide: 'INVENTORY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Inventory),
    inject: ['DATA_SOURCE'],
  },
];
