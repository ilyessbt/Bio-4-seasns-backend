import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityController } from './controllers/city.controller';
import { OrderController } from './controllers/order.controller';
import { RegionController } from './controllers/region.controller';
import { CityEntity } from './models/city.entity';
import { OrderEntity } from './models/order.entity';
import { RegionEntity } from './models/region.entity';
import { CityService } from './services/city.service';
import { OrderService } from './services/order.service';
import { RegionService } from './services/region.service';
import { OrderProductEntity } from './models/order-product.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity]),
    TypeOrmModule.forFeature([CityEntity]),
    TypeOrmModule.forFeature([RegionEntity]),
    TypeOrmModule.forFeature([OrderProductEntity])

  ],
  controllers: [OrderController, CityController, RegionController],
  providers: [OrderService, CityService, RegionService]
})
export class OrderModule { }
