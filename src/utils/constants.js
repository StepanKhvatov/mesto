import barnaul from "../images/photo/barnaul.jpg";
import krasnodar from "../images/photo/krasnodar.jpg";
import murmansk from "../images/photo/murmansk.jpg";
import novosibirsk from "../images/photo/novosibirsk.jpg";
import peterburg from "../images/photo/peterburg.jpg";
import vladivostok from "../images/photo/vladivostok.jpg";


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

export const config = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-13',
  headers: {
    authorization: '0fb698c6-c0f4-4661-887b-6a574c3a11ac',
    'Content-Type': 'application/json'
  }
}
