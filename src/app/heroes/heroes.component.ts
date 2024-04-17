import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero'; // Interfaz

// Servicios
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit{

  heroes?: Hero[];
  
  // selectedHero: Hero = {
  //   id: 1,
  //   name: 'Xavier'
  // };

  constructor(private heroServices: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // Suscribiendose a los datos del servicio
    this.heroServices.getHeroes()
      .subscribe((heroes) => {
        this.heroes = heroes;
      })
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroServices.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes?.push(hero);
      });
  }
  
  delete(hero: Hero): void {
    this.heroes = this.heroes?.filter(h => h !== hero);
    this.heroServices.deleteHero(hero).subscribe();
  }
}
