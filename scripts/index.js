let openPopupButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButtom = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__content');
let nameInput = document.querySelector('.popup__input_string_name-author');
let jobInput = document.querySelector('.popup__input_string_type-of-activity');
let profileAuthor = document.querySelector('.profile__author');
let profileTypeOfActivity = document.querySelector('.profile__type-of-activity');

let addButton = document.querySelector('.profile__add-button');

const itemTemplateContent = document.querySelector('.element-template').content;
const elements = document.querySelector('.elements');
const elementImg = itemTemplateContent.querySelector('.element__image');
const elementText = itemTemplateContent.querySelector('.element__text');
const element = itemTemplateContent.querySelector('.element');

function togglePopup() {
  popup.classList.toggle('popup_is-opened');
  nameInput.value = profileAuthor.textContent;
  jobInput.value = profileTypeOfActivity.textContent;
}

function handleOverlayClick(event) {
  if (event.target === event.currentTarget) {
    togglePopup(event);
  }
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameInputContent = nameInput.value;
  jobInputContent = jobInput.value;
  profileAuthor.textContent = nameInputContent;
  profileTypeOfActivity.textContent = jobInputContent;
  togglePopup(evt);
}

const initialElements = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function renderElements() {
  for (let i = 0; i < initialElements.length; i++) {

    elementImg.src = initialElements[i].link;
    elementText.textContent = initialElements[i].name;

    const itemElement = itemTemplateContent.cloneNode(true);

    elements.append(itemElement);
  };

};

renderElements();

function addElement() {

  elementImg.src = initialElements[4].link;
  elementText.textContent = initialElements[4].name;
  itemElement = element.cloneNode(true);

  elements.append(itemElement);


}



addButton.addEventListener('click', addElement);
openPopupButton.addEventListener('click', togglePopup);
closePopupButtom.addEventListener('click', togglePopup);
popup.addEventListener('click', handleOverlayClick);
formElement.addEventListener('submit', formSubmitHandler);
