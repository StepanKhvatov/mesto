import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
      super(popupSelector);
      this._popup = document.querySelector(this._popupSelector);
  }

  open(link, name) {
      super.open();
      this._popup.querySelector('.photo-popup__image').src = link;
      this._popup.querySelector('.photo-popup__caption').textContent = name;
      this._popup.querySelector('.photo-popup__image').alt = name;
  }
}
