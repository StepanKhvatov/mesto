import FormValidator from '../scripts/components/FormValidator.js';
import Card from '../scripts/components/Card.js';
import {
  formValidationOptions,
  initialCards,
  profileFormElement,
  photoFormElement,
  editButton,
  addButton,
  profileNameInput,
  profileAboutInput
} from '../scripts/utils/constants.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import './index.css'

const info = new UserInfo({ name: '.profile__name', about: '.profile__about'});

const profileForm = new FormValidator(formValidationOptions, profileFormElement);
profileForm.enableValidation();
const photoForm = new FormValidator(formValidationOptions, photoFormElement);
photoForm.enableValidation();

const photoPopup = new PopupWithImage('.photo-popup');

const cardList = new Section ({
    items: initialCards,
    renderer: (item) => {
        const card = new Card({
          link: item.link,
          name: item.name,
          cardSelector: '#photo-template',
          handleCardClick: () => {
              photoPopup.open(item.link, item.name);
          }
        });
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
    },
    containerSelector: '.photos'
});

const changeProfilePopup = new PopupWithForm({
    popupSelector: '#changeProfilePopup',
    handleSubmit: (newInfo) => { info.setUserInfo(newInfo) }
});

const createPhotoPopup = new PopupWithForm({
    popupSelector: '#createPhotoPopup',
    handleSubmit: (newInfo) => {
        const card = new Card({
            link: newInfo.link,
            name: newInfo.place,
            cardSelector: '#photo-template',
            handleCardClick: () => { photoPopup.open(newInfo.link, newInfo.place) }
        });
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
    }
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
});

addButton.addEventListener('click', () => {
    createPhotoPopup.open();
    photoForm.handleFormInput();
});

cardList.renderItems();




















