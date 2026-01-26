
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Apartaments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
    description: string;

  @Column()
    city: string;

  @Column()
    price: number;
  
    @Column()
    picture: string;

  @Column()
    date_add: string;
}
