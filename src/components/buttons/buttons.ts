import Button from '../../ui/button';
import './button.scss';

function createButton(classList: string[], buttonText: string) {
  return new Button({
    elemClassList: classList,
    text: buttonText,
  }).getElem();
}

export default createButton;
