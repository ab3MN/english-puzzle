import checkIsNull from './checkIsNull';

interface ElementParameters {
  tag: string;
  elemClassList?: string[];
  text?: string;
}

class ElementBuilder {
  protected elem: HTMLElement | null = null;

  constructor(parameters: ElementParameters) {
    this.createElem(parameters);
  }

  createElem(parameters: ElementParameters) {
    this.elem = document.createElement(parameters.tag || 'div');
    this.setClass(parameters.elemClassList);
    this.setText(parameters.text);
  }

  getElem(): HTMLElement | null {
    return this.elem;
  }

  protected setClass(elemClassList: string[] = []) {
    elemClassList.forEach(elemClass => {
      this.elem?.classList.add(elemClass);
    });
  }

  protected setText(text: string = '') {
    checkIsNull(this.elem, 'Element');
    if (this.elem) {
      this.elem.textContent = text;
    }
  }

  addListener(event: string, listener: EventListener) {
    checkIsNull(this.elem, 'Element');
    this.elem?.addEventListener(event, listener);
  }

  removeListener(event: string, listener: EventListener) {
    checkIsNull(this.elem, 'Element');
    this.elem?.removeEventListener(event, listener);
  }

  removeElem() {
    this.elem?.remove();
  }
}

export default ElementBuilder;
