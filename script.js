const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const submitButton = document.querySelector('.popup__submit-button');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('#input-name');
let aboutInput = document.querySelector('#input-about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let popup = document.querySelector('.popup');

function showPopup() {
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
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  popup.classList.remove('popup_opened');
};

formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', showPopup);

