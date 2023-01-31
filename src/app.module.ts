import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { AdvertisementModule } from './advertisement/advertisement.module';
import { OrderModule } from './order/order.module';
import { OrderService } from './services/order/order.service';
import { CityController } from './order/controllers/city.controller';
import { CityService } from './order/services/city.service';
import { RegionService } from './order/services/region.service';
import { RegionController } from './order/controllers/region.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductsModule,
    AdvertisementModule,
    OrderModule
  ],
  controllers: [AppController, CityController, RegionController],
  providers: [AppService, OrderService, CityService, RegionService],
})
export class AppModule { }
