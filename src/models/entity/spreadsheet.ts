import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { IsNotEmpty } from 'class-validator'

@Entity()
export class Spreadsheet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', type: 'varchar'})
    @IsNotEmpty()
    name: string;

    @Column({ name: 'category', type: 'varchar'})
    @IsNotEmpty()
    category: string;

    @Column({ name: 'description', type: 'varchar'})
    @IsNotEmpty()
    description: string;

    @Column({ name: 'carefull', type: 'varchar'})
    @IsNotEmpty()
    carefull: string;

    @Column({ name: 'image', type: 'varchar'})
    @IsNotEmpty()
    image: string;
}



