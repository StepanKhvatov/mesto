export default class Popup {
  constructor(popupSelector) {
      this._popupSelector = popupSelector;
  }

  open() {
      document.querySelector(this._popupSelector).classList.add('popup_opened');
      document.addEventListener('keydown', this._handleEscClose);
      document.addEventListener('click', this._handleClickClose);
  }

  close() {
      document.querySelector(this._popupSelector).classList.remove('popup_opened');
      document.removeEventListener('keydown', this._handleEscClose);
      document.removeEventListener('click', this._handleClickClose);
  }

  _handleEscClose = (evt) => {
      const escKeyCode = 27;
      if (evt.keyCode === escKeyCode) {
          this.close();
      }
  }

  _handleClickClose = (evt) => {
      if (evt.target.classList.contains('popup')) {
          this.close();
      } else if (evt.target.classList.contains('photo-popup')) {
          this.close();
      }
  }

  setEventListeners() {
      document.querySelector(this._popupSelector).querySelector('#close-button').addEventListener('click', () => this.close());

  }
}
