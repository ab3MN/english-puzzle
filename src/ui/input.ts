import { IInputBuilder } from '../types/Builder';
import ElementBuilder from '../utils/elementBuilder';

class InputBuilder extends ElementBuilder {
  private inputElem: HTMLInputElement;
  private labelElem: HTMLLabelElement;

  constructor(parameters: IInputBuilder) {
    super(Object.assign({ tag: 'div' }, parameters));

    this.inputElem = document.createElement('input');
    this.labelElem = document.createElement('label');
    this.buildInput(parameters);
  }

  private buildInput(parameters: IInputBuilder) {
    this.inputElem.id = parameters.id;
    this.inputElem.required = true;
    this.inputElem.autocomplete = 'off';
    this.inputElem.minLength = parameters.minLength;

    this.labelElem.htmlFor = parameters.id;
    const errorMessage = document.createElement('span');
    errorMessage.classList.add('error-message');
    this.setText(parameters.text);

    this.elem?.append(this.labelElem, this.inputElem, errorMessage);
  }

  protected setText(text = '') {
    this.labelElem.textContent = text;
  }
}

export default InputBuilder;
