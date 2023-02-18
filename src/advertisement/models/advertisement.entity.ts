import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('advertissment')
export class AdvertisementEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: '' })
    title: string;

    @Column({ default: '' })
    desc: string;

    @Column({ default: '' })
    link: string;

    @Column({ default: '' })
    imgUrl: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    start_date: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    end_date: Date;





}