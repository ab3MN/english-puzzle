import { IBuilder } from '../types/Builder';
import ElementBuilder from '../utils/elementBuilder';

class TextBuilder extends ElementBuilder {
  constructor(parameters: IBuilder) {
    super(Object.assign({ tag: 'p' }, parameters));
  }
}

export default TextBuilder;