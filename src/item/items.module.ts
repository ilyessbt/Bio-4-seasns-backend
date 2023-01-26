import { Module } from '@nestjs/common';
import { ProductService } from './services/product.service';
import { ProductController } from './controllers/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriePostEntity, ProductPostEntity } from '../models/post.entity';
import { CategorieController } from './controllers/categorie.controller';
import { CategorieService } from './services/categorie.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductPostEntity]),
    TypeOrmModule.forFeature([CategoriePostEntity])

  ],
  providers: [ProductService, CategorieService],
  controllers: [ProductController, CategorieController]
})
export class ItemModule { }
