import { Body, Controller, Post, Get, Put, Param, Delete } from '@nestjs/common';
import { Query, UsePipes } from '@nestjs/common/decorators';
import { DefaultValuePipe, ParseIntPipe, ValidationPipe } from '@nestjs/common/pipes';
import { Pagination } from 'nestjs-typeorm-paginate';
import { IPaginationOptions } from 'nestjs-typeorm-paginate/dist/interfaces';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductPostEntity } from '../models/post.entity';
import { ProductService } from '../services/product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }


    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() post: CreateProductDto) {
        this.productService.createProduct(post)
        return { data: post };
    }

    @Get()
    async findAll(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 1,
    ): Promise<Pagination<ProductPostEntity>> {
        const options: IPaginationOptions = {
            limit,
            page,
        };
        return await this.productService.paginate(options);
    }

    @Get(':id')
    async getProductById(@Param('id', ParseIntPipe) id: number): Promise<ProductPostEntity> {
        return await this.productService.getProductById(id);
    }

    // async index(
    //     @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    //     @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    // ): Promise<Pagination<ProductPostEntity>> {
    //     limit = limit > 100 ? 100 : limit;
    //     return this.productService.paginate({
    //         page,
    //         limit,
    //         route: 'http://products.com/products',
    //     });
    // }


    @Put(':id')
    @UsePipes(ValidationPipe)
    update(
        @Param('id') id: number,
        @Body() productPost: CreateProductDto
    ) {
        this.productService.updateProduct(id, productPost)
        return { data: productPost }
    }

    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult> {
        return this.productService.deleteProduct(id)
    }

}


