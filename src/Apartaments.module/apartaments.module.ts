import { Module } from '@nestjs/common';
import { ApartamentsController } from './apartaments.controller';
import { ApartamentsService } from './apartaments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apartaments } from '../Entities/apartaments';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'real-estate',
      entities: [Apartaments],
      // synchronize: true,
    }),
    TypeOrmModule.forFeature([Apartaments])
  ],
  controllers: [ApartamentsController],
  providers: [ApartamentsService],
})
export class ApartamentsModule {}
