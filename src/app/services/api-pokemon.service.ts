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
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    return this.http
    .get(url);
  }
}
