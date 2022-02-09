import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of,map, catchError } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiPokemonService {
  public pokemons: any[] = [];

  constructor(private httpClient: HttpClient) { }



  // updatePokemons() {
  //   this.pokemons = this.fetchKantoPokemon();
  // }

  fetchKantoPokemon():Observable<any> {
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=10';
    return this.httpClient
    .get(url);
  }

  getPokemonData(pokemon: any) {
    return this.httpClient.get(pokemon.url)
    .pipe(
      catchError((error) => {
        console.error(error);
        return of({});
      })
    );
  }
}

