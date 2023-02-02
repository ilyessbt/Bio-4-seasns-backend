import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CityEntity } from '../models/city.entity';
import { RegionEntity } from '../models/region.entity';
import { RegionService } from './region.service';

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(CityEntity)
        private readonly CityRepository: Repository<CityEntity>,
        private regionService: RegionService

    ) { }

    async findAll(id: number): Promise<CityEntity[]> {
        const found: Promise<RegionEntity> = this.regionService.getRegionById(id)
        if (await found != null) {
            const queryBuilder = this.CityRepository.createQueryBuilder('city')

            queryBuilder.where('city.regionId = :id', { id })

                .select(
                    ['city.id', 'city.name']
                )
            if ((await queryBuilder.getMany()).length > 0) {
                return queryBuilder.getMany();

            } else {
                throw new HttpException('The Region have not cities yet', HttpStatus.NOT_FOUND);

            }


        } else {
            throw new BadRequestException('Invalid region id');
        }

    }

    async getCityById(id: number): Promise<CityEntity> {
        return await this.CityRepository.findOne({ where: { id: id } })
    }

}
