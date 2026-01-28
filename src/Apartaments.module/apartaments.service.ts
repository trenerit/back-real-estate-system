import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Apartaments } from 'src/Entities/apartaments';
import { Like, Repository } from 'typeorm';
import { UpdateResult } from 'typeorm/browser';

@Injectable()
export class ApartamentsService {

  constructor(
    @InjectRepository(Apartaments)
    private apartamentsRepository: Repository<Apartaments>,
  ) { }

  getApartaments(): Promise<Apartaments[]> {
    return this.apartamentsRepository.find({
      order: {
        id: "DESC",
      }
    });
  }

  getApartament(idRecord: number): Promise<Apartaments | null> {
    return this.apartamentsRepository.findOneBy({ id: idRecord });
  }
  
  searchApartaments(queryData: {column: string, partQuery: string}): Promise<Apartaments[] | null> {
    console.log(queryData);
    const simpleQuery = queryData.partQuery;
    
    if(queryData.column == 'city') {
      return this.apartamentsRepository.findBy({ city: Like(`${simpleQuery}%`) });
    }
    return this.apartamentsRepository.findBy({ description: Like(`%${simpleQuery}%`) });
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
