import { Body, Controller, Post, Get, Put, Param, Delete } from '@nestjs/common';
import { Query, UsePipes } from '@nestjs/common/decorators';
import { DefaultValuePipe, ParseIntPipe, ValidationPipe } from '@nestjs/common/pipes';
import { Pagination } from 'nestjs-typeorm-paginate';
import { IPaginationOptions } from 'nestjs-typeorm-paginate/dist/interfaces';

import { ProductPostEntity } from '../models/product.entity';
import { ProductService } from '../services/product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }


    @Get()
    async findAll(
        @Query('orderby') orderby: string = 'createdAt',
        @Query('way') way: "DESC" | "ASC" = 'DESC',
        @Query('categorie') id: number,

        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
        @Query('limit', new DefaultValuePipe(12), ParseIntPipe) limit: number = 12,
    ): Promise<Pagination<ProductPostEntity>> {
        const options: IPaginationOptions = {
            limit,
            page,
        };
        return await this.productService.paginate(options, id, orderby, way);
    }

    @Get('top')
    async findAllTopProducts(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
        @Query('limit', new DefaultValuePipe(8), ParseIntPipe) limit: number = 8,
    ): Promise<Pagination<ProductPostEntity>> {
        const options: IPaginationOptions = {
            limit,
            page,
        };
        return await this.productService.paginateTopProducts(options);
    }

    // @Post()
    // @UsePipes(ValidationPipe)
    // create(@Body() post: CreateProductDto) {
    //     this.productService.createProduct(post)
    //     return { data: post };
    // }


    // @Get(':id')
    // async getProductById(@Param('id', ParseIntPipe) id: number): Promise<ProductPostEntity> {
    //     return await this.productService.getProductById(id);
    // }

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


    // @Put(':id')
    // @UsePipes(ValidationPipe)
    // update(
    //     @Param('id') id: number,
    //     @Body() productPost: CreateProductDto
    // ) {
    //     this.productService.updateProduct(id, productPost)
    //     return { data: productPost }
    // }

    // @Delete(':id')
    // delete(@Param('id') id: number): Observable<DeleteResult> {
    //     return this.productService.deleteProduct(id)
    // }

}


