import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { OrderDto } from '../dtos/order.dto';
import { OrderService } from '../services/order.service';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) { }
    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() order: OrderDto) {
        this.orderService.create(order)
        return { data: order };
    }
}
