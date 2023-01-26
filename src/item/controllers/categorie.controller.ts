import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateCategorieDto } from '../dto/create-categorie.dto';
import { CategoriePostEntity } from '../../models/post.entity';
import { CategorieService } from '../services/categorie.service';

@Controller('categorie')
export class CategorieController {
    constructor(private categorieService: CategorieService) { }
    @Post()
    @UsePipes(ValidationPipe)

    create(@Body() post: CreateCategorieDto) {
        this.categorieService.createCategorie(post);
        return { data: post }
    }
    @Get()
    async findAll(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 1,
    ): Promise<Pagination<CategoriePostEntity>> {
        const options: IPaginationOptions = {
            limit,
            page,
        };
        return await this.categorieService.paginate(options);
    }

    @Get(':id')
    async getCategorieById(@Param('id', ParseIntPipe) id: number): Promise<CategoriePostEntity> {
        return await this.categorieService.getCategorieById(id);
    }

    @Put(':id')
    @UsePipes(ValidationPipe)

    update(
        @Param('id') id: number,
        @Body() categoriePost: CreateCategorieDto
    ) {
        this.categorieService.updateCategorie(id, categoriePost)
        return { data: categoriePost }
    }

    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult> {
        return this.categorieService.deleteCategorie(id)
    }
}
