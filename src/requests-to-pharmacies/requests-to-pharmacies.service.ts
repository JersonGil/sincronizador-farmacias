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
    const { data, error } = await this.supabase
      .getClient()
      .from('petitions_log')
      .insert({
        request: body.request,
        client_id: body.clientId,
        client_id_to: body.clientIdTo,
        status: 2,
      })
      .select();

    if (!data || error) {
      throw new InternalServerErrorException(error.message);
    }

    return 'Petition send successfully';
  }
}
