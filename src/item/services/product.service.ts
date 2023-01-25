import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { from, Observable } from 'rxjs';
import { DeleteResult, FindOneOptions, Repository, UpdateResult } from 'typeorm';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductPostEntity } from '../models/post.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductPostEntity)
        private readonly ProductPostRepository: Repository<ProductPostEntity>
    ) { }

    createProduct(productPost: CreateProductDto): Observable<ProductPostEntity> {
        return from(this.ProductPostRepository.save(productPost));
    }

    findAllProducts(): Observable<ProductPostEntity[]> {
        return from(this.ProductPostRepository.find());

    }

    updateProduct(id: number, productPost: CreateProductDto): Observable<UpdateResult> { //Observable laa33
        productPost.updatedAt = new Date();
        return from(this.ProductPostRepository.update(id, productPost))
    }

    deleteProduct(id: number): Observable<DeleteResult> {
        return from(this.ProductPostRepository.delete(id))

    }

    async paginate(options: IPaginationOptions): Promise<Pagination<ProductPostEntity>> {
        const queryBuilder = this.ProductPostRepository.createQueryBuilder('q');
        queryBuilder.orderBy('q.idProduct', 'ASC');
        return paginate<ProductPostEntity>(queryBuilder, options);
    }


    async getProductById(id: number): Promise<ProductPostEntity> {
        return this.ProductPostRepository.findOne({ where: { idProduct: id } })
    }



}
