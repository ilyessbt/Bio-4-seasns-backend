import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderProductDto } from '../dtos/order-product.dto';
import { OrderProductEntity } from '../models/order-product.entity';

@Injectable()
export class OrderProductService {
    constructor(
        @InjectRepository(OrderProductEntity)

        private readonly orderProductRepository: Repository<OrderProductEntity>

    ) { }

    createOrder(orderProduct: OrderProductDto): Promise<OrderProductEntity> {

        return this.orderProductRepository.save(orderProduct)
    }

    async getSumPerOrder() {
        const queryBuilder = this.orderProductRepository.createQueryBuilder('orderProduct')

        const result = await queryBuilder
            .select(`"orderProduct"."orderId"`, 'orderId')
            .addSelect(`SUM("orderProduct"."qte" * "orderProduct"."productPrice")`, 'sum')
            .groupBy(`"orderProduct"."orderId"`)
            .getRawMany();;

        return result;
    }
}
