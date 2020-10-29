import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:"username"})
    userName: string;

    @Column()
    password: string;
}