import {addEscapeClose} from './index.js';
export class Card {
  constructor(link, name, cardSelector) {
    this._link = link;
    this._name = name;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.photo').cloneNode(true);
    return cardElement;
  }

  _openPhoto() {
    const photoPopup = document.querySelector('.photo-popup');
    photoPopup.classList.add('popup_opened');
    photoPopup.querySelector('.photo-popup__image').src = this._link;
    photoPopup.querySelector('.photo-popup__caption').textContent = this._name;
    document.addEventListener('keydown', addEscapeClose);
  }

  _deletePhoto() {
    this._element.querySelector('.photo__delete-button').parentElement.remove();
  }

  _likePhoto() {
    this._element.querySelector('.photo__like-button').classList.toggle('photo__like-button_active');
  }

  _setEventListeners() {
    this._element.querySelector('.photo__like-button').addEventListener('click', () =>{ this._likePhoto(); });
    this._element.querySelector('.photo__delete-button').addEventListener('click', () => { this._deletePhoto(); });
    this._element.querySelector('.photo__place').addEventListener('click', () => { this._openPhoto() });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.photo__place').src = this._link;
    this._element.querySelector('.photo__place').alt = this._name;
    this._element.querySelector('.photo__title').textContent = this._name;
    return this._element;
  }

}
