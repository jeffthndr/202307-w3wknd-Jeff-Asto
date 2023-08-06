/* eslint-disable no-new */
import { Pokemon } from '../../data/pokemon';
import { ApiRepository, Repository } from '../../data/repository';
import { Card } from '../card/card';
import { Component } from '../component';

export class Main extends Component {
  pokemonsUrl: string[];
  repo: Repository<Pokemon>;
  urlBase: 'https://pokeapi.co/api/v2/pokemon';
  constructor(selector: string) {
    super(selector);
    this.repo = new ApiRepository(this.urlBase);
    this.manageComponent();
  }

  createTemplate() {
    return `<main>
    <div>
     <ul class="list-pokemon">
      </ul>
      </div>
    </main>`;
  }

  async manageComponent() {
    this.pokemonsUrl = await this.loadUrlPokemons();
    this.template = this.createTemplate();
    this.render();
    this.pokemonsUrl.forEach((pokemonsUrl) => {
      new Card('.list-pokemon', pokemonsUrl);
    });
  }

  async loadUrlPokemons() {
    let responsePokemon: any = await this.repo.getAll(this.urlBase);
    responsePokemon = responsePokemon.results;
    return responsePokemon.map((item: any) => item.url);
  }
}
