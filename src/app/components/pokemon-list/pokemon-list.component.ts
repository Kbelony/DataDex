import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from 'src/app/services/api-pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];
  constructor(
    private apiPokemonService: ApiPokemonService
  ) { }

  ngOnInit(): void {
    this.apiPokemonService.fetchKantoPokemon();
    this.pokemons = this.apiPokemonService.pokemons;
  }



}
