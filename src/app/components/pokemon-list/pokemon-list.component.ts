import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from 'src/app/services/api-pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  constructor(private apiPokemonService: ApiPokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.apiPokemonService
      .fetchKantoPokemon()
      .subscribe(
        (apiPokemons: any) => {
          this.pokemons = [...apiPokemons.results];
          
          for (let i = 0; i < this.pokemons.length; i++) {
          this.apiPokemonService.getPokemonData(this.pokemons[i])
            .subscribe((details: any) => {
              this.pokemons[i] = { ...apiPokemons.results[i], details };
              console.log(this.pokemons[i]);
            });
          }
        }
      );
  }
}
