import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Plant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'plant_name', type: 'varchar'})
    plantName: string;

    @Column({name: 'plant_description', type: 'varchar'})
    plantDescription: string;

    @Column({name: 'plant_care', type: 'varchar'})
    plantCare: string;

    @Column({name: 'plant_image', type: 'varchar'})
    plantImage: string;
}