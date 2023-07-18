import { Pipe, PipeTransform } from "@angular/core";
import { Pokemons } from "../interfaces/pokemon.interface";

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(pokemon: Pokemons[], page: number = 0, search: string = ''): Pokemons[] {
        if (search.length === 0)
            return pokemon.slice(page, page + 5)

        let pokeFilter = pokemon.filter(poke => poke.name.includes(search))
        return pokeFilter.slice(page, page + 5)
    }
}