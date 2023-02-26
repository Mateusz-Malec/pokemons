import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: any;
  id: number;
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('name');
    if (id != null) {
      this.pokemonService.getPokemonDetails(id).subscribe((data: any) => {
        this.pokemon = data;
      });
    }
    //this.id = +this.route.snapshot.paramMap.get('id');
    /* const id = this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemonDetails(id).subscribe((pokemon) => {
      this.pokemon = pokemon;
    }); */
  }
}
