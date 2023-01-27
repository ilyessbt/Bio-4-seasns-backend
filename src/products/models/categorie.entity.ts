import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { ProductPostEntity } from './product.entity';
@Entity('categorie')
export class CategoriePostEntity {
    @PrimaryGeneratedColumn()
    idCategorie: number;

    @Column({ default: '' })
    name: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @OneToMany(() => ProductPostEntity, product => product.categorie)
    products: ProductPostEntity[];



}