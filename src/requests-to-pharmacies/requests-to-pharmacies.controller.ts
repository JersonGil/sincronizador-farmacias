import { Body, Controller, Get, Post, Query, Put, Param } from '@nestjs/common';
import { RequestsToPharmaciesService } from './requests-to-pharmacies.service';
import {
  RequestDto,
  PostDto,
  updateDto,
  MyRequestDto,
} from './dto/request-to-pharmacie.dto';

@Controller('requests-to-pharmacies')
export class RequestsToPharmaciesController {
  constructor(
    private requestsToPharmaciesService: RequestsToPharmaciesService,
  ) {}

  @Post()
  createRequestToPharmacy(@Body() body: PostDto) {
    return this.requestsToPharmaciesService.postRequest(body);
  }

  @Get('/myRequest')
  getRequest(@Query() params: RequestDto) {
    return this.requestsToPharmaciesService.getRequest(params);
  }

  @Get()
  getMyRequests(@Query() params: MyRequestDto) {
    return this.requestsToPharmaciesService.getMyRequests(params);
  }

  @Put(':client_id')
  updateRequest(
    @Param('client_id') client_id: string,
    @Body() body: updateDto,
  ) {
    return this.requestsToPharmaciesService.updateRequest(body, client_id);
  }
}
