import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../interfaces/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 11, name: 'Ciclope'},
      {id: 12, name: 'Mystique'},
      {id: 13, name: 'Lobezno'},
      {id: 14, name: 'Magneto'},
      {id: 15, name: 'Jean Grey'},
      {id: 16, name: 'Bestia'},
      {id: 17, name: 'Tormenta'},
      {id: 18, name: 'Júbilo'},
      {id: 19, name: 'Bishop'},
      {id: 20, name: 'Gambito'},
      {id: 21, name: 'Xavier'},
      {id: 22, name: 'Ronald'},
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}