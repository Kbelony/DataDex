import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class ApiPokemonService {
  public pokemons: any[] = [];

  constructor(private http: HttpClient) { }

  // updatePokemons() {
  //   this.pokemons = this.fetchKantoPokemon();
  // }

  fetchKantoPokemon():Observable<any> {
    return this.http
    .get('https://pokeapi.co/api/v2/pokemon?limit=151');
    // .pipe(
    //   map(responseData => {
    //     return Object.values(responseData).map(apiPokemon => {
    //       console.log('apiPokemon.results :', apiPokemon.results);
    //       return apiPokemon.results;
    //     });
    //   })
    // );
  }
}
