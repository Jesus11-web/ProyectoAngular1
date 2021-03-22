import { Component, OnInit } from '@angular/core';
import { Hero} from '../hero';
import { Hero2} from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero ={
    id: 1,
    name:'Spiderman',
    edad: 23,
    poder: 'Lansar Telarañas',
    identidad: 'Piter Parker',
    universo: 'Marvel'

  };

  hero2: Hero2 ={
    id: 2,
    name:'Batman',
    edad: 45,
    poder: 'Es millonario y utiliza y crea gadyets',
    identidad: 'Bruce Wayne',
    universo: 'DC'

  };

  constructor() { }

  ngOnInit(): void {
  }

}
