import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { hostname } from 'os';
import { prototype } from 'events';


@Module({
    imports: /*[
      MailerModule.forRoot({
        transport: 'smtps://user@domain.com:pass@smtp.domain.com',
        defaults: { from: '"nest-modules" <modules@nestjs.com>', },
        template: {
          dir: __dirname + '/templates',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    ]*/ [MailerModule.forRoot({
        transport: {
          host: process.env.HOST,
          port: process.env.PORT,
          ignoreTLS: true,
          secure: false,
          auth: {
            user: process.env.MAILDEV_INCOMING_USER,
            pass: process.env.MAILDEV_INCOMING_PASS,
          },
        },
        defaults: {
          from: '"No Reply" <no-reply@localhost>',
        },
        preview: true,
        template: {
          dir: process.cwd() + '/template/',
          adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
          options: {
            strict: true,
          },
        },
      }),], 
})
export class EmailModule {}
