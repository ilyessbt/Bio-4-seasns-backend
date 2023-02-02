import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index, OneToMany } from 'typeorm';
import { CityEntity } from './city.entity';
import { OrderProductEntity } from './order-product.entity';


@Entity('order')
export class OrderEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Index()
    @Column({ default: '' })
    cltFullName: string;
    @Column({ default: '' })
    email: string;
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
    @OneToMany(() => OrderProductEntity, orderProduct => orderProduct.order, { cascade: true })
    orderProducts: OrderProductEntity[];
    @ManyToOne(() => CityEntity, city => city.id)
    city: CityEntity;

    @Column()
    cityId: number;

}