import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { ApiPokemonService } from 'src/app/services/api-pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  isLoading =true;
  constructor(private apiPokemonService: ApiPokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.apiPokemonService
      .fetchKantoPokemon()
      .pipe(delay(1000))
      .subscribe(
        (apiPokemons: any) => {
          this.isLoading = false;
          this.pokemons = [...apiPokemons.results];

          for (let i = 0; i < this.pokemons.length; i++) {
          this.apiPokemonService.getPokemonData(this.pokemons[i])
            .pipe(delay(1000))
            .subscribe((details: any) => {
              this.pokemons[i] = { ...apiPokemons.results[i], details };
              console.log(this.pokemons[i]);
            });
          }
        }
      );
  }
}
