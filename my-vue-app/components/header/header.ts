import { Component } from '../component';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <header>
    <h1><img src="../public/pokemon-logo.svg" size="50" alt=""></h1>
    </header>
    `;
  }
}
