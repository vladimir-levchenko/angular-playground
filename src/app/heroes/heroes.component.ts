import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  // ngOnChanges(changeRecord) {
  //   console.log('ngOnChanges');
  // }

  // ngDoCheck() {
  //   console.log('ngDoCheck');
  // }

  // ngAfterContentInit() {
  //   'ngAfterContentInit';
  // }

  // ngAfterContentChecked() {
  //   'ngAfterContentChecked';
  // }

  // ngAfterViewInit() {
  //   'ngAfterViewInit';
  // }

  // ngAfterViewChecked() {
  //   'ngAfterViewChecked';
  // }

  // ngOnDestroy() {
  //   'ngOnDestroy';
  // }
}
