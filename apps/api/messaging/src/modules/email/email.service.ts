import { MailerService } from '@nestjs-modules/mailer';
import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class EmailService{
    constructor(private readonly mailerService: MailerService){}

    public testEmailSend(): void {
        this.mailerService
        .sendMail({
          to: "test@nestjs.com",
          from: 'noreply@nestjs.com',
          subject: 'Testing Nest Mailermodule with template ✔',
          template: __dirname + '/welcome',
          context: {
            code: 'cf1a3f828287',
            username: 'john doe',
          },
    
        })
        .then(() => {console.log("Email Sent")})
        .catch(() => {console.log("Email not Sent")})
      }


    // getData(): { message: string } {
    //     return { message: 'Welcome to messaging!' };
    //   }

};

