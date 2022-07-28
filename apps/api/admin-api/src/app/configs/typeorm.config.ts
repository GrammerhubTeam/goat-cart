import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const defaultConnection = (config: ConfigService): TypeOrmModuleOptions & { seeds: string } => ({
    type: 'postgres',
    host:  config.get('TYPEORM_HOST'),
    port: config.get('TYPEORM_PORT'),
    username: config.get('TYPEORM_USERNAME'),
    password: config.get('TYPEORM_PASSWORD'),
    database: config.get('TYPEORM_DATABASE'),
    autoLoadEntities: config.get('TYPEORM_AUTOLOAD'),
    synchronize: config.get('TYPEORM_SYNCHRONIZE') == 'true',
    logging: config.get('TYPEORM_LOGGING') == 'true',
    entities: [config.get('TYPEORM_ENTITIES')], //needed for typeorm-seeding
    seeds:  config.get('TYPEORM_SEEDING_SEEDS') //needed for typeorm-seeding
});