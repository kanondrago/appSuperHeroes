import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../data/data-heroes';

// Importando Observable
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  getHero(id: number): Observable<any> {
    // TODO: send the message _after_ fetching the hero
    return of(HEROES.find((hero: Hero) => hero.id === id));
  }
}
