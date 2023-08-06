import { Pokemon } from '../../data/pokemon';
import { ApiRepository, Repository } from '../../data/repository';
import { Component } from '../component';

export class Card extends Component {
  pokemonUrl: string;
  pokemon: Pokemon;
  repo: Repository<Pokemon>;
  constructor(selector: string, pokemonUrl: string) {
    super(selector);
    this.pokemonUrl = pokemonUrl;
    this.repo = new ApiRepository(this.pokemonUrl);
    this.manageComponent();
  }

  createTemplate() {
    return `
      <li class="li-pokemon" id ="card-${this.pokemon.id}">
      <div class = "card-pokemon">
      <img class = "pokemon_image" src="${this.pokemon.url}" alt="imagen"/>
      </div>
      </li>
    `;
  }

  async manageComponent() {
    this.template = this.createTemplate();
    this.render();
  }
}
