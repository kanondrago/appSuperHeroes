import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Interfaz
import { Hero } from '../interfaces/hero';

// RxJS
import { Observable, of } from 'rxjs';

// Operadores RxJS
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';

  // Elemento para acortar el código
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // Función para obtener todos los héroes
  getHeroes(): Observable <Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      catchError(this.handleError<Hero[]>('getHeroes', []))
      )
    }
    // Fin Función para obtener todos los héroes
    
  // Función para obtener un héroe
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    
    return this.http.get<Hero>(url)
    .pipe(
      catchError(this.handleError<Hero>(`getHero id=${id}`))
      )
    }
    // Fin Función para obtener un héroe
    
    
  // Función para actualizar un héroe
  updateHero(hero: any): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions)
    .pipe(
      catchError(this.handleError<any>('updateHero'))
      )
    }
    // Fin Función para actualizar un héroe
    
  // Función para agregar un héroe
  addHero(hero: Hero): Observable<any> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions)
    .pipe(
      catchError(this.handleError<Hero>('addHero'))
      )
    }
    // Fin Función para agregar un héroe
    
  // Función para eliminar un héroe
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
    
    return this.http.delete<Hero>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError<Hero>('deleteHero'))
      )
    }
  // Fin Función para eliminar un héroe


  // Función para buscar un héroe
  searchHeroes(term: string): Observable<Hero[]> {
    if(!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`)
    .pipe(
      catchError(this.handleError<Hero[]>('searchHeroes', []))
      )
    }
  // Fin Función para buscar un héroe
    
  // Función para manejar los errores
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  // Fin Función para manejar los errores
}
