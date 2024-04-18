import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// Interfaz
import { Hero } from 'src/app/interfaces/hero';

// Servicios
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent implements OnInit{

  hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  // Función de obtener un héroe
  getHero(): void {
    const id = +this.route.snapshot.params['id'];
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }
  // Fin Función de obtener un héroe
  
  // Función de regresar un paso atrás
  goBack(): void {
    this.location.back();
  }
  // Fin Función de regresar un paso atrás
  
  // Función grabar la edición de un héroe
  save(): void {
    this.heroService.updateHero(this.hero).
    subscribe(() => this.goBack());
  }
  // Fin Función grabar la edición de un héroe

}
