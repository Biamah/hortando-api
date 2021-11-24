import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Plant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'name', type: 'varchar'})
    name: string;

    @Column({name: 'description', type: 'varchar'})
    description: string;

    @Column({name: 'care', type: 'varchar'})
    care: string;

    @Column({name: 'image', type: 'varchar'})
    image: string;
}