import { IBuilder } from '../types/Builder';
import ElementBuilder from '../utils/elementBuilder';

class SpanBuilder extends ElementBuilder {
  constructor(parameters: IBuilder) {
    super(Object.assign({ tag: 'span' }, parameters));
  }
}

export default SpanBuilder;
