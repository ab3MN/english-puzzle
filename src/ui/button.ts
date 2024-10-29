import { IBuilder } from '../types/Builder';
import checkIsNull from '../utils/checkIsNull';
import ElementBuilder from '../utils/elementBuilder';

class ButtonBuilder extends ElementBuilder {
  private onClick: (() => void) | null;

  constructor(parameters: IBuilder) {
    super({ tag: 'button', ...parameters });

    this.onClick = parameters.onClick || null;

    if (this.onClick) this.addListener('click', this.onClick);
  }

  removeElem() {
    checkIsNull(this.onClick, 'this.onClick');
    if (this.onClick) this.removeListener('click', this.onClick);

    super.removeElem();
  }
}

export default ButtonBuilder;
