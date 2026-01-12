import { Controller, Get } from '@nestjs/common';
import { ApartamentsService } from './apartaments.service';
import { Apartaments } from 'src/Entities/apartaments';

@Controller('apartaments')
export class ApartamentsController {
  constructor(private readonly apartamentsService: ApartamentsService) {}

  @Get()
  getApartaments(): Promise<Apartaments[]> {
    return this.apartamentsService.getApartaments();
  }
}
