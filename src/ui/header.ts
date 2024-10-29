import { IBuilder } from '../types/Builder';
import ElementBuilder from '../utils/elementBuilder';

class HeaderBuilder extends ElementBuilder {
  constructor(parameters: IBuilder) {
    super(Object.assign({ tag: 'h2' }, parameters));
  }
}

export default HeaderBuilder;
