import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { CityEntity } from '../models/city.entity';

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(CityEntity)
        private readonly CityRepository: Repository<CityEntity>
    ) { }

    async findAll(id: number): Promise<CityEntity[]> {
        const queryBuilder = this.CityRepository.createQueryBuilder('city')
        queryBuilder.where('city.regionId = :id', { id })
            .select(
                ['city.id', 'city.name']
            )
        return queryBuilder.getMany();
    }
}
