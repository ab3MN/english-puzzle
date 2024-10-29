import { IBuilder } from '../types/Builder';
import ElementBuilder from '../utils/elementBuilder';

class FormBuilder extends ElementBuilder {
  constructor(parameters: IBuilder) {
    super(Object.assign({ tag: 'form' }, parameters));

    if (this.elem instanceof HTMLFormElement) this.elem.noValidate = true;
  }
}

export default FormBuilder;
