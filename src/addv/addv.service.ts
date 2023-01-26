import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { AddvrEntity } from 'src/models/addv.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AddvService {
    constructor(
        @InjectRepository(AddvrEntity)
        private readonly AddvrRepository: Repository<AddvrEntity>
    ) { }



    async paginate(options: IPaginationOptions): Promise<Pagination<AddvrEntity>> {
        const queryBuilder = this.AddvrRepository.createQueryBuilder('q');
        queryBuilder.orderBy('q.id', 'ASC');
        return paginate<AddvrEntity>(queryBuilder, options);
    }
}
