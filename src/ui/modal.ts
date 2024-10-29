import { IBuilder } from '../types/Builder';
import ElementBuilder from '../utils/elementBuilder';

class ModalBuilder extends ElementBuilder {
  constructor(parameters: IBuilder) {
    super(Object.assign({ tag: 'dialog' }, parameters));
  }
}

export default ModalBuilder;
