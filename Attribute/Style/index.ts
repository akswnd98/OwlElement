import Attribute, { ConstructorParam as ParentConstructorParam } from '../../Attribute';
import Element from '../../Element';

export type ConstructorParam = {
  styles: string;
} & ParentConstructorParam;

export default class Style extends Attribute {
  styleElement: HTMLStyleElement;

  constructor (payload: ConstructorParam) {
    super();
    this.styleElement = document.createElement<'style'>('style');
    this.styleElement.textContent = payload.styles;
  }

  register (element: Element) {
    element.shadowRoot!.appendChild(this.styleElement);
  }

  unregister (element: Element) {
    element.shadowRoot!.removeChild(this.styleElement);
  }
}
