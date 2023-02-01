import { Controller, ParseIntPipe } from '@nestjs/common';
import { Get, Param } from '@nestjs/common/decorators';
import { CityEntity } from '../models/city.entity';
import { CityService } from '../services/city.service';

@Controller('city')
export class CityController {
    constructor(private cityService: CityService) { }

    @Get(':id')
    async findAll(@Param('id', ParseIntPipe) id: number): Promise<CityEntity[]> {
        return this.cityService.findAll(id)
    }

    @Get('c/:id')
    async findCity(@Param('id', ParseIntPipe) id: number): Promise<CityEntity> {
        return this.cityService.getCityById(id);
    }

}
