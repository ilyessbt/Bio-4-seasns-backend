import { Controller, Get } from '@nestjs/common';

import { CategoriePostEntity } from '../models/categorie.entity';
import { CategorieService } from '../services/categorie.service';

@Controller('categorie')
export class CategorieController {
    constructor(private categorieService: CategorieService) { }



    @Get()
    async findAll(): Promise<CategoriePostEntity[]> {
        return this.categorieService.findAll();
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
