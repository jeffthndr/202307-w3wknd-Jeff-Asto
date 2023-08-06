import { Component } from '../component';

export class Footer extends Component {
  constructor(selector: string) {
    super(selector);
    this.selector = selector;
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <footer class = "footer"><img src="../public/pokemon-logo.svg" size="50" alt="Pokemon"></footer>`;
  }
}
