import { Component } from '@angular/core';

// Interfaz 
import { Hero } from 'src/app/interfaces/hero';

// Servicios
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }
 
  ngOnInit() {
    this.getHeroes();
  }

  // Función que obtiene todos los héroes
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
  // Fin Función que obtiene todos los héroes

  
}
