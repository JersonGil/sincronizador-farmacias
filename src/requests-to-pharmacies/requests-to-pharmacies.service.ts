import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Supabase } from '../common/supabase';
import { PostRequest } from './requests-to-pharmacies.entity';

@Injectable()
export class RequestsToPharmaciesService {
  constructor(private readonly supabase: Supabase) {}

  getHello(): string {
    return 'Hello World!';
  }

  async postRequest(body: PostRequest): Promise<string> {
    console.log(body);
    const { data, error } = await this.supabase
      .getClient()
      .from('petitions_log')
      .insert({ petition: body.petition, client_id: body.clientId, status: 2 })
      .select();

    if (!data || error) {
      throw new InternalServerErrorException(error.message);
    }

    return 'Petition send successfully';
  }
}
