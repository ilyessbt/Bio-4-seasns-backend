import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateCategorieDto } from '../dto/create-categorie.dto';
import { CategoriePostEntity } from '../models/categorie.entity';
import { ProductPostEntity } from '../models/product.entity';
import { CategorieService } from '../services/categorie.service';

@Controller('categorie')
export class CategorieController {
    constructor(private categorieService: CategorieService) { }



    @Get()
    async findAll(): Promise<CategoriePostEntity[]> {
        return this.categorieService.findAllCategories();
    }




    // @Post()
    // @UsePipes(ValidationPipe)
    // create(@Body() post: CreateCategorieDto) {
    //     this.categorieService.createCategorie(post);
    //     return { data: post }
    // }
    // @Get(':id')
    // async getCategorieById(@Param('id', ParseIntPipe) id: number): Promise<CategoriePostEntity> {
    //     return await this.categorieService.getCategorieById(id);
    // }

    // @Put(':id')
    // @UsePipes(ValidationPipe)

    // update(
    //     @Param('id') id: number,
    //     @Body() categoriePost: CreateCategorieDto
    // ) {
    //     this.categorieService.updateCategorie(id, categoriePost)
    //     return { data: categoriePost }
    // }

    // @Delete(':id')
    // delete(@Param('id') id: number): Observable<DeleteResult> {
    //     return this.categorieService.deleteCategorie(id)
    // }
}
