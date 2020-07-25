import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import {
  formValidationOptions,
  config
} from '../utils/constants.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithDelete from '../components/PopupWithDelete.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Api from '../components/Api.js';
import './index.css'
import { data } from 'autoprefixer';

const profileFormElement = document.querySelector('#profileForm');
const photoFormElement = document.querySelector('#photoForm');
const avatarFormElement = document.querySelector('#avatarForm');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const avatarButton = document.querySelector('.profile__avatar-container');
const profileNameInput = document.querySelector('#input-name');
const profileAboutInput = document.querySelector('#input-about');
const api = new Api(config);
let myId = '';

const info = new UserInfo({ name: '.profile__name', about: '.profile__about', avatar: '.profile__avatar'});

api.getUserInfo()
    .then((res) => {
        info.setUserInfo(res);
        info.setUserAvatar(res);
        myId = res._id;
    })
    .catch((err) => { console.log(err) })

const changeProfilePopup = new PopupWithForm({
    popupSelector: '#changeProfilePopup',
    handleSubmit: (newInfo) => {
        changeProfilePopup.renderLoading(true);
        api.setUserInfo(newInfo.name, newInfo.about)
            .then(() => { info.setUserInfo(newInfo) })
            .catch((err) => { console.log(err) })
            .finally(() => {
                changeProfilePopup.renderLoading(false, 'Сохранить');
                changeProfilePopup.close();
              })
    }
});
changeProfilePopup.setEventListeners();

const changeAvatarPopup = new PopupWithForm({
    popupSelector: '#changeAvatarPopup',
    handleSubmit: (newInfo) => {
        changeAvatarPopup.renderLoading(true);
        api.changeAvatar(newInfo.link)
            .then((res) => { info.setUserAvatar(res)})
            .catch((err) => { console.log(err) })
            .finally(() => {
                changeAvatarPopup.renderLoading(false, 'Сохранить');
                changeAvatarPopup.close();
             })
    }
});
changeAvatarPopup.setEventListeners();

const photoPopup = new PopupWithImage('#photoPopup');
photoPopup.setEventListeners();

const profileForm = new FormValidator(formValidationOptions, profileFormElement);
profileForm.enableValidation();

const photoForm = new FormValidator(formValidationOptions, photoFormElement);
photoForm.enableValidation();

const avatarForm = new FormValidator(formValidationOptions, avatarFormElement);
avatarForm.enableValidation();

editButton.addEventListener('click', () => {
    changeProfilePopup.open();
    const currentInfo = info.getUserInfo();
    profileNameInput.value = currentInfo.name;
    profileAboutInput.value = currentInfo.about;
    profileForm.handleFormInput();
    profileForm.resetErrors();
});

avatarButton.addEventListener('click', () => {
    changeAvatarPopup.open();
    avatarForm.handleFormInput();
    avatarForm.resetErrors();
});

api.getInitialCards()
  .then((res) => {
      const renderCard = (item) => {
          const deletePhotoPopup = new PopupWithDelete({ popupSelector: '#deletePhotoPopup' }); // создание попапа подтверждения удаления карточки
          let isLiked = item.likes.some((like) => like._id === myId);
          const isOwner = item.owner._id === myId;
          const card = new Card({
              link: item.link,
              name: item.name,
              likes: item.likes.length,
              isLiked: isLiked,
              isOwner: isOwner,
              cardSelector: '#photo-template',
              handleCardClick: () => { photoPopup.open(item.link, item.name) },
              handleDeletePhoto: () => {
                  deletePhotoPopup.setSubmit(() => {
                      api.deleteCard(item._id)
                          .then(() => { card.deletePhoto() })
                          .catch((err) => { console.log(err) })
                          .finally(() => { deletePhotoPopup.close() })
                  })
                  deletePhotoPopup.setEventListeners();
                  deletePhotoPopup.open();
              },
              handleLikePhoto: () => {
                  if (!isLiked) {
                      api.putLike(item._id)
                        .then(() => { isLiked = !isLiked })
                        .catch((err) => { console.log(err) })
                  } else {
                      api.deleteLike(item._id)
                        .then(() => { isLiked = !isLiked })
                        .catch((err) => { console.log(err) })
                  }
              }
          });

          const cardElement = card.generateCard();
          cardList.addItem(cardElement);
      };


      const createPhotoPopup = new PopupWithForm({
          popupSelector: '#createPhotoPopup',
          handleSubmit: (data) => {
              createPhotoPopup.renderLoading(true);
              api.postCard(data)
                .then(renderCard)
                .catch((err) => { console.log(err) })
                .finally(() => {
                    createPhotoPopup.renderLoading(false, 'Создать');
                    createPhotoPopup.close();
                })
          }
      });
      createPhotoPopup.setEventListeners();

      addButton.addEventListener('click', () => {
          createPhotoPopup.open();
          photoForm.handleFormInput();
          photoForm.resetErrors();
      });

      const cardList = new Section ({
          items: res,
          renderer: (renderCard),
          containerSelector: '.photos'
        });
      cardList.renderItems();
  })
  .catch((err) => { console.log(err) })
