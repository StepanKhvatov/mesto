const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const submitButton = document.querySelector('.popup__submit-button');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input-name');
let aboutInput = document.querySelector('.popup__input-about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

function showPopup() {
  let popup = document.querySelector('.popup');
  if (popup.classList.contains('popup_opened') === false) {
    popup.classList.add('popup_opened');
} else {
    popup.classList.remove('popup_opened');
}
   nameInput.value = profileName.textContent;
   aboutInput.value = profileAbout.textContent;
};

function formSubmitHandler (evt) {
  evt.preventDefault();
  let popup = document.querySelector('.popup');
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  popup.classList.remove('popup_opened');
};

formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', showPopup);

