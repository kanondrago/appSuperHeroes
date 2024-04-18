import { Component, OnInit } from '@angular/core';

// RxJS
import { Observable, Subject } from 'rxjs';

// Operadores de RxJS
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

// Interfaz
import { Hero } from 'src/app/interfaces/hero';

// Servicios 
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit{

  heroes$?: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) 
  {}

  // Función de busqueda de héroes
  search(term: string): void {
    this.searchTerms.next(term);
  }
  // Fin Función de busqueda de héroes

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }


}
