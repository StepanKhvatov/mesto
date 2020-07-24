export default class Card {
  constructor({link, name, likes, isLiked, isOwner, cardSelector, handleCardClick, handleDeletePhoto, handleLikePhoto}) {
      this._link = link;
      this._name = name;
      this._likes = likes;
      this._isLiked = isLiked;
      this._isOwner = isOwner;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
      this._handleDeletePhoto = handleDeletePhoto;
      this._handleLikePhoto = handleLikePhoto;
  }

  _getTemplate() {
      const cardElement = document.querySelector(this._cardSelector).content.querySelector('.photo').cloneNode(true);
      return cardElement;
  }

  deletePhoto() {
      this._element.querySelector('.photo__delete-button').parentElement.remove();
  }

  _likePhoto() {
    const likeButton = this._element.querySelector('.photo__like-button');
    const likeCount = this._element.querySelector('.photo__likes');
    if (likeButton.classList.contains('photo__like-button_active')) {
        likeButton.classList.remove('photo__like-button_active');
        likeCount.textContent = this._likes -= 1;
    } else {
        likeButton.classList.add('photo__like-button_active');
        likeCount.textContent = this._likes += 1;
    }
  }

  _handleLike(isLiked) {  // метод определяющий поставил ли я лайк или нет при загрузке страницы
    const likeButton = this._element.querySelector('.photo__like-button');
    this._element.querySelector('.photo__likes').textContent = this._likes;
    if (!isLiked) {
        likeButton.classList.remove('photo__like-button_active');
    } else {
        likeButton.classList.add('photo__like-button_active');
    }
  }

  _handleDeleteButton(isOwner) {
    const deleteButton = this._element.querySelector('.photo__delete-button')
      if (!isOwner) {
        deleteButton.remove();
      } else {
        deleteButton.addEventListener('click', () => { this._handleDeletePhoto  })
      }

  }

  _setEventListeners() {
      this._element.querySelector('.photo__delete-button').addEventListener('click', () => { this._handleDeletePhoto(); })
      this._element.querySelector('.photo__place').addEventListener('click', () => { this._handleCardClick() });
      this._element.querySelector('.photo__like-button').addEventListener('click', () => {
          this._handleLikePhoto(this._isLiked);
          this._likePhoto();
      })
  }

  generateCard() {
      this._element = this._getTemplate();
      this._setEventListeners();
      const photoPlace = this._element.querySelector('.photo__place');
      const photoTitle = this._element.querySelector('.photo__title');
      photoPlace.src = this._link;
      photoPlace.alt = this._name;
      photoTitle.textContent = this._name;
      this._handleLike(this._isLiked);
      this._handleDeleteButton(this._isOwner);
      return this._element;
  }

}
