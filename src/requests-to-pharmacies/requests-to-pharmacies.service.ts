import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Supabase } from '../common/supabase';
import { RequestDto, PostDto } from './dto/request-to-pharmacie.dto';
@Injectable()
export class RequestsToPharmaciesService {
  constructor(private readonly supabase: Supabase) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getRequest(params: RequestDto): Promise<any> {
    const { data, error } = await this.supabase
      .getClient()
      .from('petitions_log')
      .select('*')
      .eq('client_id_to', params.client_id_to)
      .eq('status', params.status);

    if (!data || error) {
      throw new InternalServerErrorException(error.message);
    }

    if (data.length === 0) {
      return 'No hay peticiones';
    }

    return data;
  }

  async postRequest(body: PostDto): Promise<string> {
    const resp = await this.getRequest({
      client_id_to: body.clientIdTo,
      status: '2',
    });

    console.log('peticiones', resp);

    if (resp !== 'No hay peticiones' || resp.length > 0) {
      return 'Petition already send';
    }

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

  async updateRequest(body, client_id: string): Promise<string> {
    const { data, error } = await this.supabase
      .getClient()
      .from('petitions_log')
      .update({ ...body })
      .eq('client_id', client_id)
      .select();

    if (!data || error) {
      throw new InternalServerErrorException(error.message);
    }
    return 'Petition update successfully';
  }
}
