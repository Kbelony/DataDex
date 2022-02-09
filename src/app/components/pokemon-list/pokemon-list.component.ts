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
          this.pokemons.forEach(pokemon => {
            this.apiPokemonService.getPokemonData(pokemon).subscribe((details) => {
              pokemon = { ...pokemon, details };
              console.log(pokemon.details.id);
          });
          console.log(this.pokemons)
        })
          // console.log('this.pokemons :', this.pokemons);
        }

      );
  }
}
