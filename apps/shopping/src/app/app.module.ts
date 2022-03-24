import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PingController } from './ping/ping.controller';
import { BasketController } from './basket/basket.controller';
import { ProductController } from './product/product.controller';
import { RefModule } from '@log/ref';
import { environment } from '../environments/environment';
import { ClientsModule } from '@log/clients';
import { SupplyModule } from '@log/supply';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    MongooseModule.forRoot(environment.mongoUrl),
    RefModule,
    ClientsModule,
    SupplyModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: true,
    }),
  ],
  controllers: [AppController, PingController, BasketController, ProductController],
  providers: [AppService],
})
export class AppModule {}
