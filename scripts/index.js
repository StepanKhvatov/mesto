const changeProfilePopup = document.querySelector('#changeProfilePopup');
const editButton = document.querySelector('.profile__edit-button');
const submitButton = document.querySelector('.popup__submit-button');
const addButton = document.querySelector('.profile__add-button');
const photoPopup =  document.querySelector('.photo-popup');
const photoPopupCloseButton = photoPopup.querySelector('.photo-popup__close-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const createPhotoPopup = document.querySelector('#createPhotoPopup');
const profileFormElement = document.querySelector('#profileForm');
const photoFormElement = document.querySelector('#photoForm');
const photoSubmitButton = photoFormElement.querySelector('.popup__submit-button');
const nameInput = document.querySelector('#input-name');
const aboutInput = document.querySelector('#input-about');
const placeInput = document.querySelector('#input-place');
const linkInput = document.querySelector('#input-link');
const newPhoto = {name: undefined, link: undefined};
const formValidationOptions = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

const addEscapeClose = (evt) => {
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

const createCards = (el) => {
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

    photoPlace.addEventListener('click', () => {
        const photoPopupImage = document.querySelector('.photo-popup__image');
        const photoPopupCaption = photoPopup.querySelector('.photo-popup__caption');
        photoPopup.classList.add('popup_opened');
        photoPopupImage.src = el.link;
        photoPopupImage.alt = el.name;
        photoPopupCaption.textContent = el.name;
        document.addEventListener('keydown', addEscapeClose);
        document.addEventListener('click', addClickClose);
    });

    photoDeleteButton.addEventListener('click', () => photoDeleteButton.parentElement.remove());
    photoLikeButton.addEventListener('click', () => photoLikeButton.classList.toggle('photo__like-button_active'));
};

const newPhotoSubmitHandler = (evt) => {
    evt.preventDefault();
    newPhoto.name = placeInput.value;
    newPhoto.link = linkInput.value;
    createCards(newPhoto);
    createPhotoPopup.classList.remove('popup_opened');
    document.removeEventListener('keydown', addEscapeClose);
};

const formSubmitHandler = (evt) => {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    changeProfilePopup.classList.remove('popup_opened');
    document.removeEventListener('keydown', addEscapeClose);
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
            handleFormInput(profileFormElement, submitButton, formValidationOptions.inactiveButtonClass);
        } else if (el === createPhotoPopup) {
            handleFormInput(photoFormElement, photoSubmitButton, formValidationOptions.inactiveButtonClass);
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

initialCards.forEach(createCards);
enableValidation(formValidationOptions);


/*Дорогой Семён, надеюсь это письмо застанет тебя в здравии и достатке.
У меня всё прекрасно, хотелось бы чтобы было больше часов в сутках, очень многое не успеваю.
Времена меняются медленно, но верно. Именно такие, как ты, изменят мир к лучшему.
Я безумно горд каждый раз, получая от тебя вести. Впереди у нас ещё очень долгий путь, но пока мы вместе, я уверен в успехе.
Надеюсь наши пути в будущем пересекутся, а до тех пор я остаюсь твоим другом.
Старушка Мэри Тодд зовёт меня, так что, пожалуй, пора идти спать.

С почтением, Хватов Степан.*/






