import type { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function initSwagger(app: INestApplication, port: number, prefix: string): string {
	const version = '1.0';
	const options = new DocumentBuilder()
		.setTitle('Messaging API')
		.setDescription('API Documentation for the Messaging app')
		.setVersion(version)
		.addBearerAuth()
		.build();

	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup(prefix + '/docs', app, document, {
		swaggerOptions: {
			persistAuthorization: true,
		},
	});

	return `Documentation: http://localhost:${port}/${prefix}/docs`;
}