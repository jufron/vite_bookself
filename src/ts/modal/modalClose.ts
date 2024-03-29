import { modalShow } from "../config";

const modalClose = (target: HTMLElement) : void => {
  if (target.hasAttribute('id') && target.getAttribute('id') === 'close') {
    modalShow!.classList.remove('active');   
  }
};

export default modalClose;