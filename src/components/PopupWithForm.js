import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleSubmit }) {
      super(popupSelector);
      this._handleSubmit = handleSubmit;
      this._form = document.querySelector(this._popupSelector).querySelector('.popup__form');
      this._popup = document.querySelector(this._popupSelector);
      this._submitButton = document.querySelector(this._popupSelector).querySelector('.popup__submit-button');
  }

  _getInputValues() {
      this._inputList = this._popup.querySelectorAll('.popup__input')
      this._formValues = {};

      this._inputList.forEach(input => {
          this._formValues[input.name] = input.value;
      });

      return this._formValues;
  }

  setEventListeners() {
      super.setEventListeners();
      this._form.addEventListener('submit', (evt) => {
          evt.preventDefault();
          this._handleSubmit(this._getInputValues());
          this.close();
      });
  }

  renderLoading(isTrue, text) {
      if (isTrue) {
          this._submitButton.textContent = 'Сохранение...'
      } else {
          this._submitButton.textContent = text;
      }
  }

  close() {
      super.close();
      this._form.reset();
  }
}
