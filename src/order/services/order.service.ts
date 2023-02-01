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
    async create(order: OrderDto): Promise<string> {
        const found: Promise<CityEntity> = this.cityService.getCityById(order.cityId)
        if (await found != null) {
            this.OrderRepository.save(order);
            return "Order Added";

        } else {
            throw new BadRequestException('Invalid city id');
        }
    }

}
