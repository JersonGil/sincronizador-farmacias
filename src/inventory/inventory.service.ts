import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InventoryBodyDto } from './dto/inventory.dto';
import { Supabase } from '../common/supabase';

@Injectable()
export class InventoryService {
  constructor(private readonly supabase: Supabase) {}

  async saveInventory(body: InventoryBodyDto): Promise<string> {
    const { data, error } = await this.supabase
      .getClient()
      .from('petitions_log')
      .insert({
        petition_file: body.petition_file,
        request: body.request,
        client_id: body.clientId,
        client_id_to: body.clientIdTo,
        status: 1,
      })
      .select();

    if (!data || error) {
      throw new InternalServerErrorException(error.message);
    }

    return 'Petition send successfully';
  }
}
