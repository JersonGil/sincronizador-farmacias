import { IsString, IsNotEmpty } from 'class-validator';

export class RequestDto {
  @IsString()
  @IsNotEmpty()
  client_id_to: string;

  @IsNotEmpty()
  @IsString()
  status: string;
}
