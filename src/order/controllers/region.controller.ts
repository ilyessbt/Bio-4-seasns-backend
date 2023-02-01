import { Controller, Get } from '@nestjs/common';
import { RegionEntity } from '../models/region.entity';
import { RegionService } from '../services/region.service';

@Controller('region')
export class RegionController {
    constructor(private regionService: RegionService) { }
    @Get()
    async findAll(): Promise<RegionEntity[]> {
        return this.regionService.findAll();
    }
}
