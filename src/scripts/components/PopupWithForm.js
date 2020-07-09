import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleSubmit }) {
      super(popupSelector);
      this._handleSubmit = handleSubmit;
      this._form = document.querySelector(this._popupSelector).querySelector('.popup__form');
      this._popup = document.querySelector(this._popupSelector);
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

  _resetErrors() {
      const errorList = this._popup.querySelectorAll('.popup__error');
      const inputList = this._popup.querySelectorAll('.popup__input');

      errorList.forEach((error) => {
          error.classList.remove('popup__error_visible');
      });

      inputList.forEach((input) => {
          input.classList.remove('popup__input_type_error');
      });
  }

  close() {
      super.close();
      this._resetErrors();
      this._form.reset();
  }
}
