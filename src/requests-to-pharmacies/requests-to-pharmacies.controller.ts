import { Body, Controller, Get, Post } from '@nestjs/common';
import { RequestsToPharmaciesService } from './requests-to-pharmacies.service';
import { PostRequest } from './requests-to-pharmacies.entity';

@Controller('requests-to-pharmacies')
export class RequestsToPharmaciesController {
  constructor(
    private requestsToPharmaciesService: RequestsToPharmaciesService,
  ) {}

  @Get()
  helloWorld() {
    return this.requestsToPharmaciesService.getHello();
  }

  @Post()
  createRequestToPharmacy(@Body() body: PostRequest) {
    return this.requestsToPharmaciesService.postRequest(body);
  }
}
