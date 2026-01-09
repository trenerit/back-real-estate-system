import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object[] {
    // return 'Hello World!';

    const tab = [
    {id: 1, city: 'Kraków', price: 2000000},
    {id: 2, city: 'Warszawa', price: 3000000},
    {id: 3, city: 'Wrocław', price: 4000000},
  ]

  return tab;
}
}
