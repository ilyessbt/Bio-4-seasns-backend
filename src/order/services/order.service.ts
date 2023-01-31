import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderDto } from '../dtos/order.dto';
import { OrderEntity } from '../models/order.entity';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(OrderEntity)
        private readonly OrderRepository: Repository<OrderEntity>
    ) { }


    create(order: OrderDto): Promise<OrderEntity> {
        return this.OrderRepository.save(order);
    }
}
