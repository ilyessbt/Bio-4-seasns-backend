import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdvertisementService } from './services/advertisement.service';
import { AdvertisementEntity } from './models/advertisement.entity';
import { AdvertisementController } from './controllers/advertisement.controller';

@Module({

  imports: [

    TypeOrmModule.forFeature([AdvertisementEntity])
  ],
  controllers: [AdvertisementController],
  providers: [AdvertisementService]
})
export class AdvertisementModule { }
