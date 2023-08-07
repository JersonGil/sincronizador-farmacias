import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ClientsService } from '../clients/clients.service';

@Injectable()
export class AuthService {
  constructor(private clientService: ClientsService) {}

  async checkClient(numDocument: string): Promise<any> {
    const client = await this.clientService.getClient(numDocument);

    if (!client || client.num_document !== numDocument)
      throw new UnauthorizedException();

    return true;
  }
}
