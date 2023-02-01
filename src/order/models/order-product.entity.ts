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
    @Column({ default: '' })

    @Column({ default: 0 })
    cltPhone: number;

    @Column({ default: '' })
    delivryAdressOne: string;

    @Column({ default: '' })
    delivryAdressTwo: string;

    @Column({ default: 0 })
    status: number;



    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;



    @Column()
    cityId: number;

}