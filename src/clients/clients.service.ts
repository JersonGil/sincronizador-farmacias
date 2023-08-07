import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Supabase } from '../common/supabase';
import { PartialClients } from './clients.entity';

@Injectable()
export class ClientsService {
  constructor(private readonly supabase: Supabase) {}

  async getClient(numDocument: string): Promise<PartialClients | null> {
    const { data, error } = await this.supabase
      .getClient()
      .from('clients')
      .select('*')
      .eq('num_document', numDocument)
      .single();

    if (error) {
      throw new InternalServerErrorException(error.message);
    }

    return data;
  }
}
