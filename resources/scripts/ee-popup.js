'use strict';

export class EePopup {
  constructor() {
    this.popupIsOpen = false;
    this.container$ = document.querySelector('#eePopup');
    this.closeBtn$ = this.container$.querySelector('#eePopupCloseBtn');
    this.titleContainer$ = this.container$.querySelector('#eePopupTitle');
    this.contentContainer$ = this.container$.querySelector('#eePopupContent');
    this.openClass = 'ee-popup--active';
    this.closingClass = 'ee-popup--closing';
    this.closeBtnClickHandler = this.close.bind(this);
    this.containerTransitionEndHandler = this.onCloseTransitionEnd.bind(this);
  }

  open(title, content) {
    if (this.popupIsOpen) {
      return;
    }
    this.popupIsOpen = true;
    this.container$.style.display = 'flex';
    setTimeout(() => this.container$.classList.add(this.openClass), 0);
    this.appendTitle(title);
    this.appendContent(content);
    this.closeBtn$.addEventListener('click', this.closeBtnClickHandler);
  }

  appendTitle(title) {
    this.titleContainer$.innerHTML = title;
  }

  appendContent(content) {
    this.contentContainer$.innerHTML = content;
  }

  close() {
    if (!this.popupIsOpen) {
      return;
    }
    this.popupIsOpen = false;
    this.closeBtn$.removeEventListener('click', this.closeBtnClickHandler);
    this.container$.classList.add(this.closingClass);
    this.container$.addEventListener('transitionend', this.containerTransitionEndHandler);
  }

  onCloseTransitionEnd() {
    if (this.popupIsOpen) {
      return;
    }
    this.container$.removeEventListener('transitionend', this.containerTransitionEndHandler);
    this.container$.style.display = 'none';
    this.contentContainer$.innerHTML = '';
    this.container$.classList.remove(this.closingClass);
    this.container$.classList.remove(this.openClass);
  }
}
