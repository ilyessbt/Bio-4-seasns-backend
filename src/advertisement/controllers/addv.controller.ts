import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { AdvertisementEntity } from '../models/addv.entity';
import { AdvertisementService } from '../services/addv.service';

@Controller('addv')
export class AdvertisementController {
    constructor(private AddvrService: AdvertisementService) { }

    @Get()
    async findAllAddvrs(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 1,
    ): Promise<Pagination<AdvertisementEntity>> {
        const options: IPaginationOptions = {
            limit,
            page,
        };
        return await this.AddvrService.paginate(options);
    }


}
