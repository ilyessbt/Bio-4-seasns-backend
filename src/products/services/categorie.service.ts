import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { IPaginationOptions, IPaginationMeta } from 'nestjs-typeorm-paginate/dist/interfaces';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateCategorieDto } from '../dto/create-categorie.dto';
import { CategoriePostEntity } from '../models/categorie.entity';
import { ProductPostEntity } from '../models/product.entity';

@Injectable()
export class CategorieService {

    constructor(
        @InjectRepository(CategoriePostEntity)
        private readonly CategoriePostRepository: Repository<CategoriePostEntity>,
        @InjectRepository(ProductPostEntity)
        private readonly ProductPostRepository: Repository<ProductPostEntity>

    ) { }




    async findAll(): Promise<CategoriePostEntity[]> {
        const queryBuilder = this.CategoriePostRepository.createQueryBuilder('categorie');
        queryBuilder.innerJoin('categorie.products', 'product')
            .select('categorie.idCategorie')
            .addSelect('categorie.name')

        return await queryBuilder.getMany();

    }




    // createCategorie(productPost: CreateCategorieDto): Observable<CategoriePostEntity> {
    //     return from(this.CategoriePostRepository.save(productPost));
    // }

    // updateCategorie(id: number, categoriePost: CreateCategorieDto): Observable<UpdateResult> {
    //     categoriePost.updatedAt = new Date();
    //     return from(this.CategoriePostRepository.update(id, categoriePost))
    // }

    // deleteCategorie(id: number): Observable<DeleteResult> {
    //     return from(this.CategoriePostRepository.delete(id))

    // }
    // async paginate(options: IPaginationOptions): Promise<Pagination<CategoriePostEntity>> {
    //     const queryBuilder = this.CategoriePostRepository.createQueryBuilder('categorie');
    //     queryBuilder.innerJoin('categorie.products', 'product')
    //         .select('categorie.name')
    //     return queryBuilder.getMany();
    // }


    // async getCategorieById(id: number): Promise<CategoriePostEntity> {
    //     return this.CategoriePostRepository.findOne({ where: { idCategorie: id } })
    // }

}
