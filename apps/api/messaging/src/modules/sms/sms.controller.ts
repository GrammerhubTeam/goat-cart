import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { SMSService } from './sms.service'

@ApiBearerAuth()
@ApiTags('sms')
@Controller("sms")
export class SMSController {
  constructor(private readonly smsService: SMSService) {}

  @Get()
  @ApiOperation({summary: 'test'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 404, description: 'Forbidden'})
  getData() {
    return this.smsService.getData();
  }

}
