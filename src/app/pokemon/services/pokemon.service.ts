import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FetchAllPokemonsResponse, Pokemons } from '../interfaces/pokemon.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private api = 'https://pokeapi.co/api/v2'



  constructor(
    private readonly http: HttpClient,
  ) { }



  getAllPokemon(): Observable<Pokemons[]> {
    return this.http.get<FetchAllPokemonsResponse>(`${this.api}/pokemon?limit=1500`).pipe(
      map((response: FetchAllPokemonsResponse) => this.transformSmallPokemonIntoPokemon(response))
    )

  }


  private transformSmallPokemonIntoPokemon(res: FetchAllPokemonsResponse): Pokemons[] {
    let pokemonList: Pokemons[] = res.results.map(poke => {

      let id = poke.url.split('/')[6]
      let picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
      return {
        id,
        picture,
        name: poke.name,
      }

    })
    return pokemonList
  }



}
