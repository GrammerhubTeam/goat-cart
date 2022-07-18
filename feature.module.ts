import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

interface EnvironmentVariables {
  PORT: number;
  TIMEOUT: string;
}

@Module({
    imports: [ConfigModule],
  })
export class FeatureModule {
    constructor(private configService: ConfigService<EnvironmentVariables>) {
    const port = this.configService.get('PORT', { infer: true });
    const url = this.configService.get('URL', { infer: true });
    }
    const dbUser = this.configService.get<string>('DATABASE_USER')
    const dbPassword = this.configService.get<string>('DATABASE_PASSWORD');
}