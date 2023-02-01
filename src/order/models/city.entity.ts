import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index, OneToMany, Unique } from 'typeorm';
import { OrderEntity } from './order.entity';
import { RegionEntity } from './region.entity';


@Entity('city')
export class CityEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Unique(['name'])

    @Column({ default: '' })
    name: string;
    @Column({ default: 0 })
    postalCode: number;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
    @OneToMany(() => OrderEntity, order => order.city)
    orders: OrderEntity[];


    @ManyToOne(() => RegionEntity, region => region.id)
    region: RegionEntity;






}