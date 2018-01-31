import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  selectedHero = { id: 1, name: 'Ms Tafling', power: 'speed' };
  colors = [ 'red', 'yellow', 'green' ];

  heroes = [
    { id: 1, name: 'Ms Tafling', power: 'speed' },
    { id: 2, name: 'Thor', power: 'hammer' },
    { id: 3, name: 'Spiderman', power: 'webslinging' },
    { id: 4, name: 'Batman', power: 'fashion' }
  ];

  constructor() { }

  ngOnInit() {
  }

  go() {
    alert('Hero Name: ' + this.selectedHero.name);
  }

}
