import { Component, OnInit } from '@angular/core';
import { Result } from './../../models/SimplePokemon';
import { PokemonService } from './../../services/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  pokemons: Result[] = [];
  originalList: Result[] = [];

  ngOnInit(): void {
    this.pokemonService.onSearch.subscribe({
      next: (term: string) => {
        if (term.length > 0) {
          this.pokemons = this.originalList.filter((p) =>
            p.name.includes(term)
          );
        } else {
          this.pokemons = this.originalList;
        }
      },
    });

    this.pokemonService.getPokemon(0, 151).subscribe((data) => {
      this.pokemons = data.results;
      this.originalList = this.pokemons;
    });
  }

  imgUrl(url: string): string {
    return this.pokemonService.getPokemonImgUrl(url);
  }
}
