import { Pipe, PipeTransform } from "@angular/core";
import { Pokemons } from "../interfaces/pokemon.interface";

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(pokemon: Pokemons[], page: number = 0): Pokemons[] {
        return pokemon.slice(page, page + 5)
    }
}