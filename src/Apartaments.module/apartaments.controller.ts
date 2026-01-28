import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApartamentsService } from './apartaments.service';
import { Apartaments } from 'src/Entities/apartaments';

@Controller('apartaments')
export class ApartamentsController {
  constructor(private readonly apartamentsService: ApartamentsService) {}

  @Get()
  getApartaments(): Promise<Apartaments[]> {
    return this.apartamentsService.getApartaments();
  }
  
  @Get(':idRecord')
  getApartament(@Param('idRecord') idRecord: number): Promise<Apartaments | null> {
    return this.apartamentsService.getApartament(idRecord);
  }
  
  @Post('/search')
  searchApartaments(@Body() queryData: {column: string, partQuery: string}): Promise<Apartaments[] | null> {
    return this.apartamentsService.searchApartaments(queryData);
  }
  
  @Delete(':idRecord')
  delApartaments(@Param('idRecord') idRecord: number): void {
    this.apartamentsService.delApartaments(idRecord);
  }
  
  @Post()
  addApartament(@Body() data: Apartaments): void {
    this.apartamentsService.addApartament(data);
  }
  
  @Patch()
  modApartament(@Body() data: Apartaments): void {
    this.apartamentsService.modApartament(data);
  }
}
