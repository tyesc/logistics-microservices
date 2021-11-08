import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PingController } from './ping/ping.controller';
import { RefModule } from '@log/ref';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ynov:ynov2021@fhemery.7sqpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    ),
    RefModule
  ],
  controllers: [AppController, PingController],
  providers: [AppService],
})
export class AppModule {}
