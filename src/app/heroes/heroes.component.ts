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

  selectedHero?: Hero;

  // selectedHero: Hero = {
  //   id: 1,
  //   name: 'Xavier'
  // };

  constructor(private heroServices: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

  getHeroes(): void {
    this.heroes = this.heroServices.getHeroes();
  }

}
