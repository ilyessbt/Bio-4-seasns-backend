import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index } from 'typeorm';
import { RegionEntity } from './region.entity';


@Entity('city')
export class CityEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Index()
    @Column({ default: '' })
    name: string;
    @Column({ default: 0 })
    postalCode: number;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @ManyToOne(() => RegionEntity, region => region.id)
    region: RegionEntity;
    @Column()
    Region_idRegion: number;





}