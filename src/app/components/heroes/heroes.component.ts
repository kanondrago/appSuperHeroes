import { Component, OnInit } from '@angular/core';

// Interfaz
import { Hero } from 'src/app/interfaces/hero';

// Servicios
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit{

  heroes?: Hero[];

  constructor(private heroService: HeroService) 
  {}

  ngOnInit(): void {
    this.getHeroes();
  }

  // Función de obtención de héroes
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe((heroes) => {
      this.heroes = heroes;
    })
  }
  // Fin Función de obtención de héroes
  
  // Función para agregar un héroe
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({name} as Hero)
    .subscribe(hero => {
      this.heroes?.push(hero);
    });
  }
  // Fin Función para agregar un héroe
  
  
  // Función para eliminar un héroe
  delete(hero: Hero): void {
    this.heroes = this.heroes?.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  // Fin Función para agregar un héroe
}
