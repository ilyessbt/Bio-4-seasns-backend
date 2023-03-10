import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
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

@Entity('product')
export class ProductPostEntity {
    @PrimaryGeneratedColumn()
    idProduct: number;

    @Column({ default: '' })
    name: string;

    @Column({ default: 0 })
    price: number;

    @Column({ default: '' })
    urlImg: string;

    @Column({ default: false })
    isTop: boolean;

    @Column({ default: 0 })
    remainingQuantity: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column()
    sellType: string;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @ManyToOne(() => CategoriePostEntity, categorie => categorie.idCategorie)
    categorie: CategoriePostEntity;
    @Column()
    categorieIdCategorie: number;


}


