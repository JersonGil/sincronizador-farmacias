import { IsString, IsNotEmpty } from 'class-validator';

export class InventoryBodyDto {
  @IsNotEmpty()
  petition_file: JSON;

  @IsString()
  @IsNotEmpty()
  client_id_to: string;
}
