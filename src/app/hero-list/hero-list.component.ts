import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes = [
    new Hero(1, 'Ms Tafling', 'speed'),
    new Hero(2, 'Thor', 'hammer'),
    new Hero(3, 'Spiderman', 'webslinging'),
    new Hero(4, 'Batman', 'fashion')
  ];

  selectedHero: Hero;

  colors = [ 'red', 'yellow', 'green' ];

  constructor() {
    this.selectedHero = this.heroes[0];
  }

  ngOnInit() {
  }

  go() {
    alert('Hero Name: ' + this.selectedHero.name);
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }

}

export class Hero {
  constructor(public id: number, public name: string, public power: string) {}
}
