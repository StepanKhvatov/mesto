import Popup from './Popup.js';

export default class PopupWithDelete extends Popup {
    constructor({ popupSelector }) {
      super(popupSelector);
      this._button = document.querySelector(this._popupSelector).querySelector('.popup__submit-button');
    }

    setSubmit(callBack) {
      this._handleSubmit = callBack; // переопределение функции удаления карточки
    }

    setEventListeners() {
      super.setEventListeners();
      this._button.addEventListener('click', () => {
         this._handleSubmit();
         this.close();
      });
    }

    close() {
      super.close();
    }




}
