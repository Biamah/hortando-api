import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Plant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'name', type: 'varchar', nullable: true })
    name: string;

    @Column({name: 'description', type: 'varchar', nullable: true })
    description: string;

    @Column({name: 'care', type: 'varchar', nullable: true })
    care: string;

    @Column({name: 'image', type: 'varchar', nullable: true })
    image: string;
}