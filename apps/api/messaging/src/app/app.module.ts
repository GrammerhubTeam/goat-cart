import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmsModule } from '../modules/sms/sms.module';
import { EmailModule } from '../modules/email/email.module';
import { EmailService } from '../modules/email/email.service';
import { SMSService } from '../modules/sms/sms.service';
import { EmailController } from '../modules/email/email.controller';
import { SMSController } from '../modules/sms/sms.controller';
import configuration from '../configs/configuration'

@Module({
  imports: [
    SmsModule,
    EmailModule,
    ConfigModule.forRoot({
      //envFilePath: '.development.env',
      load: [configuration],
    }),
  ],
  controllers: [AppController, EmailController, SMSController],
  providers: [AppService, EmailService, SMSService],
})
export class AppModule {}
