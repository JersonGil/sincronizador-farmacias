import { IsString, IsNotEmpty } from 'class-validator';

export class InventoryBodyDto {
  @IsNotEmpty()
  petition_file: JSON;

  @IsString()
  @IsNotEmpty()
  clientIdTo: string;

  @IsString()
  @IsNotEmpty()
  clientId: string;

  @IsString()
  @IsNotEmpty()
  request: string;
}
