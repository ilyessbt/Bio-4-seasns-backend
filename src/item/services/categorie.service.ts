import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { IPaginationOptions, IPaginationMeta } from 'nestjs-typeorm-paginate/dist/interfaces';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateCategorieDto } from '../dto/create-categorie.dto';
import { CategoriePostEntity } from '../models/post.entity';

@Injectable()
export class CategorieService {

    constructor(
        @InjectRepository(CategoriePostEntity)
        private readonly CategoriePostRepository: Repository<CategoriePostEntity>
    ) { }

    createCategorie(productPost: CreateCategorieDto): Observable<CategoriePostEntity> {
        return from(this.CategoriePostRepository.save(productPost));
    }
    findAllCategories(): Observable<CategoriePostEntity[]> {
        return from(this.CategoriePostRepository.find());

    }

    updateCategorie(id: number, categoriePost: CreateCategorieDto): Observable<UpdateResult> {
        categoriePost.updatedAt = new Date();
        return from(this.CategoriePostRepository.update(id, categoriePost))
    }

    deleteCategorie(id: number): Observable<DeleteResult> {
        return from(this.CategoriePostRepository.delete(id))

    }

    async paginate(options: IPaginationOptions): Promise<Pagination<CategoriePostEntity>> {
        const queryBuilder = this.CategoriePostRepository.createQueryBuilder('q');
        queryBuilder.orderBy('q.idCategorie', 'ASC');
        return paginate<CategoriePostEntity>(queryBuilder, options);
    }
    async getCategorieById(id: number): Promise<CategoriePostEntity> {
        return this.CategoriePostRepository.findOne({ where: { idCategorie: id } })
    }

}
