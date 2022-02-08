import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {

  public pokemons = [];

  constructor() { }

  fetchKantoPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(allpokemon => {
      this.pokemons = allpokemon.results;
      console.log('this.pokemons :', this.pokemons);
    })


  }
}

