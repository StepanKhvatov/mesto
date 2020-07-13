export default class Popup {
  constructor(popupSelector) {
      this._popupSelector = popupSelector;
  }

  open() {
    document.querySelector(this._popupSelector).classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
    document.addEventListener('click', (evt) => this._handleClickClose(evt));
  }

  close() {
      document.querySelector(this._popupSelector).classList.remove('popup_opened');
      document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
      document.removeEventListener('click', (evt) => this._handleClickClose(evt));
  }

  _handleEscClose(evt) {
      const escKeyCode = 27;
      if (evt.keyCode === escKeyCode) {
          this.close();
      }
  }

  _handleClickClose(evt) {
      if (evt.target.classList.contains('popup')) {
          this.close();
      }
  }

  setEventListeners() {
      document.querySelector(this._popupSelector).querySelector('.popup__close-button').addEventListener('click', () => this.close());

  }
}
