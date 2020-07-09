import barnaul from "../../images/photo/barnaul.jpg";
import krasnodar from "../../images/photo/krasnodar.jpg";
import murmansk from "../../images/photo/murmansk.jpg";
import novosibirsk from "../../images/photo/novosibirsk.jpg";
import peterburg from "../../images/photo/peterburg.jpg";
import vladivostok from "../../images/photo/vladivostok.jpg";


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
   link: barnaul
  },
  {
   name: 'Краснодар',
   link: krasnodar
  },
  {
   name: 'Мурманск',
   link: murmansk
  },
  {
   name: 'Новосибирск',
   link: novosibirsk
  },
  {
   name: 'Санкт-Петербург',
   link: peterburg
  },
  {
   name: 'Владивосток',
   link: vladivostok
  }
];

//всер картиники записать в переменные для webpack. "Этим перемные хранятся в index "
export const profileFormElement = document.querySelector('#profileForm');
export const photoFormElement = document.querySelector('#photoForm');
export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
export const profileNameInput = document.querySelector('#input-name');
export const profileAboutInput = document.querySelector('#input-about');
