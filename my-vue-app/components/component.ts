/* eslint-disable no-undef */
export class Component {
  element: Element;
  selector!: string;
  template!: string;
  constructor(selector: string) {
    this.selector = selector;
  }

  render(position: InsertPosition = 'beforeend') {
    const element = document.querySelector(this.selector) as HTMLDivElement;
    this.element = element;
    element.insertAdjacentHTML(position, this.template);
  }
}
