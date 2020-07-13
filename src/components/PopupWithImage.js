import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
      super(popupSelector);
      this._popup = document.querySelector(this._popupSelector);
  }

  open(link, name) {
      super.open();
      const photoPopupImage = this._popup.querySelector('.popup__image');
      const photoPopupCaption = this._popup.querySelector('.popup__caption');
      photoPopupImage.src = link;
      photoPopupCaption.textContent = name;
      photoPopupImage.alt = name;
  }
}
