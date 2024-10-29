import { IImageBuilder } from '../types/Builder';
import ElementBuilder from '../utils/elementBuilder';

class ImageBuilder extends ElementBuilder {
  constructor(parameters: IImageBuilder) {
    super(Object.assign({ tag: 'div' }, parameters));
  }

  createElem(parameters: IImageBuilder) {
    this.elem = document.createElement(parameters.tag);
    this.setClass(parameters.elemClassList);

    const imgElem = document.createElement('img');

    imgElem.src = parameters.src;
    imgElem.alt = parameters.alt;

    this.elem.append(imgElem);
  }
}

export default ImageBuilder;
