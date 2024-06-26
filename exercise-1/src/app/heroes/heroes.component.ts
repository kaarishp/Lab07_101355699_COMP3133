import { Component } from '@angular/core';
import { Hero } from '../hero';
import { UpperCasePipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { RemoveSpacesPipe } from '../remove-spaces.pipe'; 


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [NgFor, NgIf, UpperCasePipe, FormsModule, RemoveSpacesPipe],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes = HEROES;

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
}
