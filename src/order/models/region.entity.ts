import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany, Unique } from 'typeorm';
import { CityEntity } from './city.entity';


@Entity('region')
export class RegionEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Unique(['name'])

    @Column({ default: '' })
    name: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
    @OneToMany(() => CityEntity, city => city.region)
    cities: CityEntity[];
}