import { PokemonService } from './../../services/pokemon.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() title: string = 'Title';
  term: string = '';
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {}

  onSearch($event: any) {
    this.pokemonService.onSearch.emit(this.term);
  }
}
