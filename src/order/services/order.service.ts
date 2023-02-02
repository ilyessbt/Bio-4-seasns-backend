import { BadRequestException, Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderDto } from '../dtos/order.dto';
import { CityEntity } from '../models/city.entity';
import { OrderEntity } from '../models/order.entity';
import { CityService } from './city.service';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(OrderEntity)
        private readonly OrderRepository: Repository<OrderEntity>,
        private cityService: CityService

    ) { }



    // fixed
    async create(order: OrderDto): Promise<OrderEntity> {
        order.orderProducts.forEach((value) => {
            return value.productPrice * value.qte
        })
        const found: Promise<CityEntity> = this.cityService.getCityById(order.cityId)
        if (await found != null) {
            return this.OrderRepository.save(order);

        } else {
            throw new BadRequestException('Invalid city id');
        }
    }

}
