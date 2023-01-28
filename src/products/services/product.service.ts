import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { from, Observable } from 'rxjs';
import { DeleteResult, FindOneOptions, Repository, UpdateResult } from 'typeorm';
import { CreateProductDto } from '../dto/create-product.dto';
import { CategoriePostEntity } from '../models/categorie.entity';
import { ProductPostEntity } from '../models/product.entity';
import { CategorieService } from './categorie.service';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductPostEntity)
        private readonly ProductPostRepository: Repository<ProductPostEntity>,
        private categorieService: CategorieService
    ) { }





    async paginate(options: IPaginationOptions, id: number, order: string, orderC: "DESC" | "ASC"): Promise<Pagination<ProductPostEntity>> {


        const queryBuilder = this.ProductPostRepository.createQueryBuilder('q');
        const join = queryBuilder.leftJoinAndSelect("q.categorie", "categorie")

        if (id) {
            const ids = Array.isArray(id) ? id : [id];
            join.where(`"categorie"."idCategorie" IN (:...ids)`, { ids })
                .select('q.name')
                .addSelect('q.urlImg')
                .addSelect('q.price')
                .addSelect('q.sellType')
                .orderBy(`q.${order}`, orderC);

        }
        join.select('q.name')
            .addSelect('q.urlImg')
            .addSelect('q.price')
            .addSelect('q.sellType')
            .orderBy(`q.${order}`, orderC);
        return paginate<ProductPostEntity>(queryBuilder, options);
    }




    async paginateTopProducts(options: IPaginationOptions): Promise<Pagination<ProductPostEntity>> {
        const queryBuilder = this.ProductPostRepository.createQueryBuilder('q');
        queryBuilder.where("q.isTop = :isTop", { isTop: true })
            .andWhere("q.remainingQuantity > :remainingQuantity", { remainingQuantity: 0 })
            .select('q.name')
            .addSelect('q.urlImg')
            .addSelect('q.price')
            .addSelect('q.sellType')

            .orderBy("q.createdAt", "DESC")


        return paginate<ProductPostEntity>(queryBuilder, options);
    }

    // findAllProducts(): Observable<ProductPostEntity[]> {
    //     return from(this.ProductPostRepository.find());

    // }
    // createProduct(productPost: CreateProductDto): Observable<ProductPostEntity> {
    //     return from(this.ProductPostRepository.save(productPost));
    // }

    // updateProduct(id: number, productPost: CreateProductDto): Observable<UpdateResult> { //Observable laa33
    //     productPost.updatedAt = new Date();

    //     return from(this.ProductPostRepository.update(id, productPost))
    // }

    // deleteProduct(id: number): Observable<DeleteResult> {
    //     return from(this.ProductPostRepository.delete(id))

    // }




    // async getProductById(id: number): Promise<ProductPostEntity> {
    //     return this.ProductPostRepository.findOne({ where: { idProduct: id } })
    // }



}
