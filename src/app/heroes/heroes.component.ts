import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';
import {Router} from '@angular/router';

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

  constructor(private heroService: HeroService, private router: Router) {}

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.router.navigate([`/detail/${hero.id}`]);
  }

  add(name: string): void {
    name = name.trim();

    if (!name) {
      return;
    }

    this.heroService.addHero({name} as Hero).subscribe(hero => this.heroes.push(hero));
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h.id !== hero.id);
    this.heroService.deleteHero(hero).subscribe();
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
