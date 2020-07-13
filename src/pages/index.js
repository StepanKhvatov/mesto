import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import {
  formValidationOptions,
  initialCards
} from '../utils/constants.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import './index.css'

const profileFormElement = document.querySelector('#profileForm');
const photoFormElement = document.querySelector('#photoForm');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const profileNameInput = document.querySelector('#input-name');
const profileAboutInput = document.querySelector('#input-about');

const info = new UserInfo({ name: '.profile__name', about: '.profile__about'});

const profileForm = new FormValidator(formValidationOptions, profileFormElement);
profileForm.enableValidation();

const photoForm = new FormValidator(formValidationOptions, photoFormElement);
photoForm.enableValidation();

const photoPopup = new PopupWithImage('#photoPopup');

const createCard = (item) => {
  const card = new Card({
    link: item.link,
    name: item.name,
    cardSelector: '#photo-template',
    handleCardClick: () => { photoPopup.open(item.link, item.name) }
  });
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
};

const cardList = new Section ({
    items: initialCards,
    renderer: createCard,
    containerSelector: '.photos'
});


const changeProfilePopup = new PopupWithForm({
    popupSelector: '#changeProfilePopup',
    handleSubmit: (newInfo) => { info.setUserInfo(newInfo) }
});

const createPhotoPopup = new PopupWithForm({
    popupSelector: '#createPhotoPopup',
    handleSubmit: createCard
});

changeProfilePopup.setEventListeners();
createPhotoPopup.setEventListeners();
photoPopup.setEventListeners();

editButton.addEventListener('click', () => {
    changeProfilePopup.open();
    const currentInfo = info.getUserInfo();
    profileNameInput.value = currentInfo.name;
    profileAboutInput.value = currentInfo.about;
    profileForm.handleFormInput();
    profileForm.resetErrors();
});

addButton.addEventListener('click', () => {
    createPhotoPopup.open();
    photoForm.handleFormInput();
    photoForm.resetErrors();
});

cardList.renderItems();
