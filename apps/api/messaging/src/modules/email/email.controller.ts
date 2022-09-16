import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { EmailService } from './email.service'

@ApiBearerAuth()
@ApiTags('email')
@Controller("email")
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get()
  @ApiOperation({summary: 'test'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  getData() {
    //return this.emailService.getData();
  }

  @Get()
  @ApiOperation({summary: 'Tests Email Sending'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  testEmailSend(){
    return this.emailService.testEmailSend();
  }

  sendEmail() {
    //return this.emailService.getData();
  }




}
