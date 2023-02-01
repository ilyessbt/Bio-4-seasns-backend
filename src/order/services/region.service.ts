import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegionEntity } from '../models/region.entity';

@Injectable()
export class RegionService {

    constructor(
        @InjectRepository(RegionEntity)
        private readonly RegionRepository: Repository<RegionEntity>
    ) { }

    async findAll(): Promise<RegionEntity[]> {
        const queryBuilder = this.RegionRepository.createQueryBuilder('region');
        queryBuilder.select([
            'region.id', 'region.name'
        ])


        return await queryBuilder.getMany();

    }
}
