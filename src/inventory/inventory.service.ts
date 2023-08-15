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
      .update({
        petition_file: body.petition_file,
        status: 1,
      })
      .eq('client_id_to', body.client_id_to)
      .select();
    if (!data || error) {
      throw new InternalServerErrorException(error.message);
    }

    return 'Petition send successfully';
  }
}
