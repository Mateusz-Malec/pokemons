import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemonList: any[];

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe((pokemons) => {
      this.pokemonList = pokemons.results;
    });
  }
}