export const formValidationOptions = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
  inactiveErrorClass: 'popup__error'
};

export const initialCards = [
  {
   name: 'Барнаул',
   link: "./images/photo/barnaul.jpg"
  },
  {
   name: 'Краснодар',
   link: "./images/photo/krasnodar.jpg"
  },
  {
   name: 'Мурманск',
   link: "./images/photo/murmansk.jpg"
  },
  {
   name: 'Новосибирск',
   link: "./images/photo/novosibirsk.jpg"
  },
  {
   name: 'Санкт-Петербург',
   link: "./images/photo/peterburg.jpg"
  },
  {
   name: 'Владивосток',
   link: "./images/photo/vladivostok.jpg"
  }
];

//всер картиники записать в переменные для webpack. "Этим перемные хранятся в index "
export const profileFormElement = document.querySelector('#profileForm');
export const photoFormElement = document.querySelector('#photoForm');
export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
export const profileNameInput = document.querySelector('#input-name');
export const profileAboutInput = document.querySelector('#input-about');
