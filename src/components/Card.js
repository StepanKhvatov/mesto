export default class Card {
  constructor({link, name, cardSelector, handleCardClick}) {
      this._link = link;
      this._name = name;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
      const cardElement = document.querySelector(this._cardSelector).content.querySelector('.photo').cloneNode(true);
      return cardElement;
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
      this._element.querySelector('.photo__place').addEventListener('click', () => {this._handleCardClick()})
  }

  generateCard() {
      this._element = this._getTemplate();
      this._setEventListeners();
      const photoPlace = this._element.querySelector('.photo__place');
      const photoTitle = this._element.querySelector('.photo__title');
      photoPlace.src = this._link;
      photoPlace.alt = this._name;
      photoTitle.textContent = this._name;
      return this._element;
  }

}
