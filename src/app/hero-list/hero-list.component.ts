import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  selectedHero = { id: 1, name: 'Ms Tafling', power: 'speed' };
  colors = [ 'red', 'yellow', 'green' ];

  constructor() { }

  ngOnInit() {
  }

  go() {
    alert('Hero Name: ' + this.selectedHero.name);
  }

}
