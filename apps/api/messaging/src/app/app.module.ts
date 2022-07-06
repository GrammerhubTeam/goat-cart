import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmsModule } from '../modules/sms/sms.module';

@Module({
  imports: [SmsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
