
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Apartaments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
    city: string;

  @Column()
    price: number;

  @Column()
    date_add: string;
}
