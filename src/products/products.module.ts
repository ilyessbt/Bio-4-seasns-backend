import { Module } from '@nestjs/common';
import { ProductService } from './services/product.service';
import { ProductController } from './controllers/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategorieController } from './controllers/categorie.controller';
import { CategorieService } from './services/categorie.service';
import { ProductPostEntity } from './models/product.entity';
import { CategoriePostEntity } from './models/categorie.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductPostEntity]),
    TypeOrmModule.forFeature([CategoriePostEntity])

  ],
  providers: [ProductService, CategorieService],
  controllers: [ProductController, CategorieController]
})
export class ProductsModule { }
