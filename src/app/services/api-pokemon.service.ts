import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiPokemonService {
  public pokemons: any[] = [];

  constructor() {}

  fetchKantoPokemon() {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((result) => {
        return result.results;
      });
  }
}
