import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { AdvertisementEntity } from '../models/advertisement.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdvertisementService {
    constructor(
        @InjectRepository(AdvertisementEntity)
        private readonly AddvrRepository: Repository<AdvertisementEntity>
    ) { }



    async paginate(options: IPaginationOptions): Promise<Pagination<AdvertisementEntity>> {
        const queryBuilder = this.AddvrRepository.createQueryBuilder('add');
        const sysDate: Date = new Date();
        queryBuilder
            .where('add.start_date <= :sysDate', { sysDate })
            .andWhere('add.end_date >= :sysDate', { sysDate })
            .orderBy('add.start_date', 'DESC')


        return paginate<AdvertisementEntity>(queryBuilder, options);
    }
}
