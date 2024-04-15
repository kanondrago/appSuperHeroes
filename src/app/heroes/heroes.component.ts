import { Component } from '@angular/core';
import { Hero } from '../interfaces/hero'; 

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent {

  hero: Hero = {
    id: 1,
    name: 'Xavier'
  };

  constructor() {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

}
