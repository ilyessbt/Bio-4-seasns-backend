import { OrderProductEntity } from 'src/order/models/order-product.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index, OneToMany } from 'typeorm';
import { CategoriePostEntity } from './categorie.entity';


@Entity('product')
export class ProductPostEntity {
    @PrimaryGeneratedColumn()
    idProduct: number;
    @Index()
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

    @Column({ default: '' })
    description: string;
    @OneToMany(() => OrderProductEntity, orderProduct => orderProduct.order)
    orderProducts: OrderProductEntity[];

}