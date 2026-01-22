import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Apartaments } from 'src/Entities/apartaments';
import { Repository } from 'typeorm';
import { UpdateResult } from 'typeorm/browser';

@Injectable()
export class ApartamentsService {

  constructor(
    @InjectRepository(Apartaments)
    private apartamentsRepository: Repository<Apartaments>,
  ) { }

  getApartaments(): Promise<Apartaments[]> {
    return this.apartamentsRepository.find();
  }
  
  getApartament(idRecord: number): Promise<Apartaments | null> {
    return this.apartamentsRepository.findOneBy({id: idRecord});
  }
  
  delApartaments(id: number): void {
    this.apartamentsRepository.delete(id);
  }

  addApartament(data: Apartaments): Promise<Apartaments | null> {
    return this.apartamentsRepository.save(data);
  }
  
  modApartament(data: Apartaments): Promise<UpdateResult> {
    const id = data.id;
    console.log(id);
    return this.apartamentsRepository.update(id, data);
  }

  
}
