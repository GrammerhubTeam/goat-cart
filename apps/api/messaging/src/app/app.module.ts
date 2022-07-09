import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmsModule } from '../modules/sms/sms.module';
import { EmailModule } from '../modules/email/email.module';

@Module({
  imports: [
    SmsModule,
    EmailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
