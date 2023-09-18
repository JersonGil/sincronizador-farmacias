import { IsString, IsNotEmpty } from 'class-validator';

export class RequestDto {
  @IsString()
  @IsNotEmpty()
  client_id_to: string;

  @IsNotEmpty()
  @IsString()
  status: string;
}

export class PostDto {
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

export class updateDto {
  @IsString()
  @IsNotEmpty()
  status: string;
}
