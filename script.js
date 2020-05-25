const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const submitButton = document.querySelector('.popup__submit-button');
const addButton = document.querySelector('.profile__add-button');
let formElement = document.querySelector('.popup__form');
let formHeading = document.querySelector('.popup__heading');
let nameInput = document.querySelector('#input-name');
let aboutInput = document.querySelector('#input-about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let popup = document.querySelector('.popup');
let profile = document.querySelector('.profile');

const photoPopup =  document.querySelector('.photo-popup');
const photoPopupCloseButton = photoPopup.querySelector('.photo-popup__close-button');

let newPhoto = {
    name: undefined,
    link: undefined
};

profile.addEventListener('click', function showPopup(evt) {
    switch(evt.target) {
        case editButton:
            popup.classList.add('popup_opened');
            formHeading.textContent = 'Редактировать профиль';
            submitButton.textContent = 'Сохранить';
            nameInput.value = profileName.textContent;
            aboutInput.value = profileAbout.textContent;
            formElement.removeEventListener('submit', newPhotoSubmitHandler)
            formElement.addEventListener('submit', formSubmitHandler);
            break;
        case addButton:
            popup.classList.add('popup_opened');
            formHeading.textContent = 'Новое место';
            submitButton.textContent = 'Создать';
            nameInput.value = '';
            aboutInput.value = '';
            nameInput.placeholder = 'Название';
            aboutInput.placeholder = 'Ссылка на картинку';
            formElement.removeEventListener('submit', formSubmitHandler);
            formElement.addEventListener('submit', newPhotoSubmitHandler);
            break;
    };
});

function newPhotoSubmitHandler(evt) {
    evt.preventDefault();
    newPhoto.name = nameInput.value;
    newPhoto.link = aboutInput.value;
    initialCards.unshift(newPhoto);
    createCards(initialCards[0]);
    popup.classList.remove('popup_opened');
};

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    popup.classList.remove('popup_opened');
};

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

initialCards.forEach(createCards);
function createCards (el) {
    const photoContainer = document.querySelector('.photos');
    const photoTemplate = document.querySelector('#photo-template').content;
    const photoElement = photoTemplate.cloneNode(true);
    const photoPlace = photoElement.querySelector('.photo__place');
    const photoTitle = photoElement.querySelector('.photo__title');

    photoPlace.src = el.link;
    photoPlace.alt = el.name;
    photoTitle.textContent = el.name;
    photoContainer.prepend(photoElement);

    photoPlace.addEventListener('click', function showPhotoPopup() {
        const photoPopupImage = document.querySelector('.photo-popup__image');
        const photoPopupCaption = photoPopup.querySelector('.photo-popup__caption');
        photoPopup.classList.add('photo-popup_opened');
        photoPopupImage.src = el.link;
        photoPopupImage.alt = el.name;
        photoPopupCaption.textContent = el.name;
    });
};

closeButton.addEventListener('click', function closePopup() {                 // Слушатель с функцией закрытия попапа с формой профиля
    popup.classList.remove('popup_opened');
    popup.classList.add('popup_closed');
    setTimeout(() => {
      popup.classList.remove('popup_closed')
    }, 300)
});

photoPopupCloseButton.addEventListener('click', function closePhotoPopup() {  // Слушатель с функцией закрытия попапа с картинкой
    photoPopup.classList.remove('photo-popup_opened');
    photoPopup.classList.add('photo-popup_closed')
    setTimeout(() => {
      photoPopup.classList.remove('photo-popup_closed')
    }, 300)
});

document.querySelector('.photos').addEventListener('click', function likePhoto(evt) {   // Слушатель с функцией лайка фото.
    if (evt.target.classList.contains('photo__like-button')) {
        evt.target.classList.toggle('photo__like-button_active');
  };
});

document.querySelector('.photos').addEventListener('click', function deletePhoto(evt) {  // Слушатель с функцией удаления фото.
    if (evt.target.classList.contains('photo__delete-button')) {
        evt.target.parentElement.remove();
  };
});
