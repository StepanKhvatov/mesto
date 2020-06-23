import {initialCards} from './utils.js';
import {FormValidator} from './FormValidator.js';
import {Card} from './Card.js';
const changeProfilePopup = document.querySelector('#changeProfilePopup');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const photoPopup =  document.querySelector('.photo-popup');
const photoPopupCloseButton = photoPopup.querySelector('.photo-popup__close-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const createPhotoPopup = document.querySelector('#createPhotoPopup');
const profileFormElement = document.querySelector('#profileForm');
const photoFormElement = document.querySelector('#photoForm');
const nameInput = document.querySelector('#input-name');
const aboutInput = document.querySelector('#input-about');
const placeInput = document.querySelector('#input-place');
const linkInput = document.querySelector('#input-link');
const photoContainer = document.querySelector('.photos');
const formValidationOptions = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
  inactiveErrorClass: 'popup__error'
};
const profileForm = new FormValidator(formValidationOptions, profileFormElement);
profileForm.enableValidation();
const photoForm = new FormValidator(formValidationOptions, photoFormElement);
photoForm.enableValidation();

export const addEscapeClose = (evt) => {
  const openedPopup = document.querySelector('.popup_opened');
  const escKeyCode = 27;
  if (evt.keyCode === escKeyCode) {
    openedPopup.classList.remove('popup_opened');
    document.removeEventListener('keydown', addEscapeClose);
  }
};

const addClickClose = (evt) => {
  if (evt.target.classList.contains('popup')) {
      evt.target.classList.remove('popup_opened');
      document.removeEventListener('keydown', addEscapeClose);
  } else if (evt.target.classList.contains('photo-popup')) {
      evt.target.classList.remove('popup_opened');
      document.removeEventListener('keydown', addEscapeClose);
  }
};

const newPhotoSubmitHandler = (evt) => {
    evt.preventDefault()
    const card = new Card(linkInput.value, placeInput.value, '#photo-template');
    const cardElement = card.generateCard();
    photoContainer.prepend(cardElement);
    placeInput.value = '';
    linkInput.value = '';
    createPhotoPopup.classList.remove('popup_opened');
    document.removeEventListener('keydown', addEscapeClose);
};

const formSubmitHandler = (evt) => {
    evt.preventDefault()
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    changeProfilePopup.classList.remove('popup_opened');
    document.removeEventListener('keydown', addEscapeClose);
};

const resetErrors =  (el) => {
    const errorList = el.querySelectorAll('.popup__error');
    const inputList = el.querySelectorAll('.popup__input');
    errorList.forEach((error) => {
      error.classList.remove('popup__error_visible');
    });
    inputList.forEach((input) => {
      input.classList.remove('popup__input_type_error');
    });
};

const showPopup = (el) => {
    return () => {
        el.classList.add('popup_opened');
        document.addEventListener('keydown', addEscapeClose);
        resetErrors(el);

        if (el === changeProfilePopup) {
            nameInput.value = profileName.textContent;
            aboutInput.value = profileAbout.textContent;
            profileForm.handleFormInput();
        } else if (el === createPhotoPopup) {
            photoForm.handleFormInput();
        }
    };
};

document.addEventListener('click', addClickClose);
profileFormElement.addEventListener('submit', formSubmitHandler);
profileFormElement.addEventListener('reset', () => {
    changeProfilePopup.classList.remove('popup_opened');
    document.removeEventListener('keydown', addEscapeClose);
});
photoFormElement.addEventListener('submit', newPhotoSubmitHandler);
photoFormElement.addEventListener('reset', () => {
    createPhotoPopup.classList.remove('popup_opened');
    document.removeEventListener('keydown', addEscapeClose);
});
editButton.addEventListener('click', showPopup(changeProfilePopup));
addButton.addEventListener('click', showPopup(createPhotoPopup));
photoPopupCloseButton.addEventListener('click', () => {
  photoPopup.classList.remove('popup_opened');
  document.removeEventListener('keydown', addEscapeClose);
});

initialCards.forEach((el) => {
  const card = new Card(el.link, el.name, '#photo-template');
  const cardElement = card.generateCard();
  photoContainer.prepend(cardElement);
});

                                                /* Привет, Сёма!!! */









