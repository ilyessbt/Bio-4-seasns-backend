import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { OrderProductDto } from '../dtos/order-product.dto';
import { OrderDto } from '../dtos/order.dto';
import { OrderProductService } from '../services/order-product.service';
import { OrderService } from '../services/order.service';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService, private orderProductService: OrderProductService) { }
    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() order: OrderDto) {
        return this.orderService.create(order)

    }

    @Post('products')
    @UsePipes(ValidationPipe)
    createOrder(@Body() order: OrderProductDto) {
        return this.orderProductService.createOrder(order)

    }


    @Get()
    get() {
        return this.orderProductService.getSumPerOrder();
    }



}
