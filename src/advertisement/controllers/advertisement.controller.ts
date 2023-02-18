import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { PaginationDto } from 'src/shared dtos/pagination.dto';
import { AdvertisementEntity } from '../models/advertisement.entity';
import { AdvertisementService } from '../services/advertisement.service';

@Controller('add')
export class AdvertisementController {
    constructor(private AddvrService: AdvertisementService) { }

    @Get()
    async findAll(
        @Query() queryParams: PaginationDto
    ): Promise<Pagination<AdvertisementEntity>> {
        const { limit = 1, page = 1 } = queryParams;

        const options: IPaginationOptions = {
            limit,
            page,
        };
        return await this.AddvrService.paginate(options);
    }


}
