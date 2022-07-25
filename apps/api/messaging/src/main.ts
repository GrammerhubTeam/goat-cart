/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { ClassSerializerInterceptor, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory , Reflector } from '@nestjs/core';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app/app.module';
import { initSwagger } from './configs/swagger.config';

async function bootstrap() {


  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
    {cors: true }
    );

  const globalPrefix = 'api';
  const reflector = app.get(Reflector);
  const port = process.env.PORT || 4000;

  app.setGlobalPrefix(globalPrefix);
  app.setGlobalPrefix(globalPrefix);
	app.useGlobalInterceptors(
		new ClassSerializerInterceptor(reflector),
	);
	app.useGlobalPipes(new ValidationPipe());

  const swagger = initSwagger(app, Number(port), globalPrefix);
  await app.listen(port, '0.0.0.0');

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );

  Logger.log(swagger);

}

bootstrap();
