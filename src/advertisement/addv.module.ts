import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdvertisementController } from './controllers/addv.controller';
import { AdvertisementService } from './services/addv.service';
import { AdvertisementEntity } from './models/addv.entity';

@Module({

  imports: [

    TypeOrmModule.forFeature([AdvertisementEntity])
  ],
  controllers: [AdvertisementController],
  providers: [AdvertisementService]
})
export class AdvertisementModule { }
