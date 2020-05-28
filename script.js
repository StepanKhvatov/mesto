const editButton = document.querySelector('.profile__edit-button');
const submitButton = document.querySelectorAll('.popup__submit-button');
const addButton = document.querySelector('.profile__add-button');
const photoPopup =  document.querySelector('.photo-popup');
const photoPopupCloseButton = photoPopup.querySelector('.photo-popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let profile = document.querySelector('.profile');
let createPhotoPopup = document.querySelector('#createPhotoPopup');
let changeProfilePopup = document.querySelector('#changeProfilePopup');
let profileFormElement = document.querySelector('#profileForm');
let photoFormElement = document.querySelector('#photoForm');
let nameInput = document.querySelector('#input-name');
let aboutInput = document.querySelector('#input-about');
let placeInput = document.querySelector('#input-place');
let linkInput = document.querySelector('#input-link');

let newPhoto = {name: undefined, link: undefined};

const initialCards = [
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

function newPhotoSubmitHandler(evt) {
  evt.preventDefault();
  newPhoto.name = placeInput.value;
  newPhoto.link = linkInput.value;
  createCards(newPhoto);
  createPhotoPopup.classList.remove('popup_opened');
};

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  changeProfilePopup.classList.remove('popup_opened');
};

function showPopup(el) {
    return () => {
        el.classList.add('popup_opened');
        if (el === changeProfilePopup) {
            nameInput.value = profileName.textContent;
            aboutInput.value = profileAbout.textContent;
        };
    };
};

profileFormElement.addEventListener('submit', formSubmitHandler);
profileFormElement.addEventListener('reset', () => changeProfilePopup.classList.remove('popup_opened'));

photoFormElement.addEventListener('submit', newPhotoSubmitHandler);
photoFormElement.addEventListener('reset', () => createPhotoPopup.classList.remove('popup_opened'));

editButton.addEventListener('click', showPopup(changeProfilePopup));
addButton.addEventListener('click', showPopup(createPhotoPopup));
photoPopupCloseButton.addEventListener('click', (closePhotoPopup) => photoPopup.classList.remove('photo-popup_opened'));

function createCards (el) {
    const photoContainer = document.querySelector('.photos');
    const photoTemplate = document.querySelector('#photo-template').content;
    const photoElement = photoTemplate.cloneNode(true);
    const photoPlace = photoElement.querySelector('.photo__place');
    const photoTitle = photoElement.querySelector('.photo__title');
    const photoLikeButton = photoElement.querySelector('.photo__like-button');
    const photoDeleteButton = photoElement.querySelector('.photo__delete-button');

    photoPlace.src = el.link;
    photoPlace.alt = el.name;
    photoTitle.textContent = el.name;
    photoContainer.prepend(photoElement);

    photoPlace.addEventListener('click', function showPhotoPopup() {
        const photoPopupImage = document.querySelector('.photo-popup__image');
        const photoPopupCaption = photoPopup.querySelector('.photo-popup__caption');
        photoPopup.classList.remove('photo-popup_closed');
        photoPopup.classList.add('photo-popup_opened');
        photoPopupImage.src = el.link;
        photoPopupImage.alt = el.name;
        photoPopupCaption.textContent = el.name;
    });

    photoDeleteButton.addEventListener('click', (deletePhoto) => { photoDeleteButton.parentElement.remove(); });
    photoLikeButton.addEventListener('click', (likePhoto) => { photoLikeButton.classList.toggle('photo__like-button_active'); });
};

initialCards.forEach(createCards);




