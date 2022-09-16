import { Injectable } from '@nestjs/common';

@Injectable()
export class SMSService{
    getData(): { message: string } {
        return { message: 'Welcome to SMS!' };
      }
}

