//import { Get, Injectable } from "@nestjs/common";
//import { ConfigService } from "@nestjs/config";

// @Injectable()
// export class configService{
//     constructor(private config: ConfigService){}
    
    
//     @Get()
//     async getHost() {
//     const hostVar = this.config.get<string>('HOST');

//     return hostVar;
    
//    }

    



//}

export default () => ({
    user_test: process.env.MAILDEV_INCOMING_USER,
    pass_test: process.env.MAILDEV_INCOMING_PASS,
    port: parseInt(process.env.PORT) || 3000,
    host: process.env.HOST,     
    database: {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432
    }
  });