import { ProductPostEntity } from 'src/products/models/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index } from 'typeorm';
import { CityEntity } from './city.entity';
import { OrderEntity } from './order.entity';


@Entity('orderProduct')
export class OrderProductEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ default: 0 })
    qte: number;
    @Column({ default: 0 })
    productPrice: number;
    @Column({ default: '' })
    name: string;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @ManyToOne(() => OrderEntity, order => order.id)
    order: OrderEntity;
    @ManyToOne(() => ProductPostEntity, product => product.idProduct)
    product: ProductPostEntity;



}