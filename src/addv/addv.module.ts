import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddvrEntity } from 'src/models/addv.entity';
import { AddvController } from './addv.controller';
import { AddvService } from './addv.service';

@Module({

  imports: [

    TypeOrmModule.forFeature([AddvrEntity])
  ],
  controllers: [AddvController],
  providers: [AddvService]
})
export class AddvModule { }
