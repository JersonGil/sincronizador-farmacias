import { Injectable } from '@nestjs/common';

@Injectable()
export class RequestsToPharmaciesService {
  getHello(): string {
    return 'Hello World!';
  }
}
