import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemons } from '../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.scss']
})
export class PokemonlistComponent implements OnInit {

  public pokemons: Pokemons[] = []
  public page: number = 0
  public search: string = ''

  constructor(
    private readonly pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemon().subscribe(pokemon => this.pokemons = pokemon)
  }

  nextPage(): number {
    return this.page += 5
  }
  previusPage() {
    if (this.page > 0)
      this.page -= 5
  }


  onSearchPokemones(search: string) {
    this.page = 0
    this.search = search
  }

}
