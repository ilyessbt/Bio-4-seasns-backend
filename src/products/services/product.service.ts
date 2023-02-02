import { BadRequestException, Injectable } from '@nestjs/common';
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


        const queryBuilder = this.ProductPostRepository.createQueryBuilder('product');
        queryBuilder.leftJoinAndSelect("product.categorie", "categorie")

        if (id) {
            const ids = Array.isArray(id) ? id : [id];
            queryBuilder
                .where(`"categorie"."idCategorie" IN (:...ids)`, { ids })
                .andWhere("product.remainingQuantity > 0")
                .select('product.name')
                .addSelect('product.urlImg')
                .addSelect('product.price')
                .addSelect('product.sellType')
                .orderBy(`product.${order}`, orderC);

        }
        queryBuilder
            .where("product.remainingQuantity > 0")
            .select('product.name')
            .addSelect('product.urlImg')
            .addSelect('product.price')
            .addSelect('product.sellType')
            .orderBy(`product.${order}`, orderC);
        return paginate<ProductPostEntity>(queryBuilder, options);
    }




    async paginateTopProducts(options: IPaginationOptions): Promise<Pagination<ProductPostEntity>> {
        const queryBuilder = this.ProductPostRepository.createQueryBuilder('q');
        queryBuilder.where("q.isTop = true")
            .andWhere("q.remainingQuantity > 0")
            .select('q.name')
            .addSelect('q.urlImg')
            .addSelect('q.price')
            .addSelect('q.sellType')

            .orderBy("q.createdAt", "DESC")


        return paginate<ProductPostEntity>(queryBuilder, options);
    }

    async getProductDetails(id: number): Promise<ProductPostEntity> {
        const queryBuilder = this.ProductPostRepository.createQueryBuilder('product');
        queryBuilder.where('product.idProduct = :id', { id })
            .andWhere("product.remainingQuantity > 0")
            .select('product.name')
            .addSelect('product.urlImg')
            .addSelect('product.price')
            .addSelect('product.sellType')
            .addSelect('product.description')

        return await queryBuilder.getOne();

    }
    async getOneById(id: number): Promise<ProductPostEntity> {
        return await this.ProductPostRepository.findOne({ where: { idProduct: id } })
    }

    async getProductTotal(qte: number, id: number) {
        const found: Promise<ProductPostEntity> = this.getOneById(id)

        if (await found != null) {
            const queryBuilder = this.ProductPostRepository.createQueryBuilder('product');
            const total = await queryBuilder
                .select(`sum(${qte} * product.price)`)
                .where('product.idProduct = :id', { id })
                .getRawOne()
            return total.sum
        } else {
            throw new BadRequestException('Invalid Product id');
        }


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








}
