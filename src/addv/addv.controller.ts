import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { AddvrEntity } from 'src/models/addv.entity';
import { AddvService } from './addv.service';

@Controller('addv')
export class AddvController {
    constructor(private AddvrService: AddvService) { }

    @Get()
    async findAllAddvrs(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 1,
    ): Promise<Pagination<AddvrEntity>> {
        const options: IPaginationOptions = {
            limit,
            page,
        };
        return await this.AddvrService.paginate(options);
    }


}
