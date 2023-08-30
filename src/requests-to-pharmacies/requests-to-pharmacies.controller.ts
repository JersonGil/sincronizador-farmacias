import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { RequestsToPharmaciesService } from './requests-to-pharmacies.service';
import { RequestDto, PostDto } from './dto/request-to-pharmacie.dto';

@Controller('requests-to-pharmacies')
export class RequestsToPharmaciesController {
  constructor(
    private requestsToPharmaciesService: RequestsToPharmaciesService,
  ) {}

  @Post()
  createRequestToPharmacy(@Body() body: PostDto) {
    return this.requestsToPharmaciesService.postRequest(body);
  }

  @Get()
  getRequest(@Query() params: RequestDto) {
    return this.requestsToPharmaciesService.getRequest(params);
  }
}
