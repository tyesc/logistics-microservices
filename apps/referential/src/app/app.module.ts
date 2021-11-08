import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PingController } from './ping/ping.controller';
import { RefModule } from '@log/ref';
import { environment } from '../environments/environment';

@Module({
  imports: [MongooseModule.forRoot(environment.mongoUrl), RefModule],
  controllers: [AppController, PingController],
  providers: [AppService],
})
export class AppModule {}
