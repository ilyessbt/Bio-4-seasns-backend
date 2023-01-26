import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { AdvertisementEntity } from '../models/addv.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdvertisementService {
    constructor(
        @InjectRepository(AdvertisementEntity)
        private readonly AddvrRepository: Repository<AdvertisementEntity>
    ) { }



    async paginate(options: IPaginationOptions): Promise<Pagination<AdvertisementEntity>> {
        const queryBuilder = this.AddvrRepository.createQueryBuilder('q');
        queryBuilder.orderBy('q.id', 'ASC');
        return paginate<AdvertisementEntity>(queryBuilder, options);
    }
}
