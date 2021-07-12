let popupConteiner = document.querySelector('.popup__container');


let openPopupEditButton = document.querySelector('.profile__edit-button');
let openPopupAddButton = document.querySelector('.profile__add-button');
let closePopupButtom = popupConteiner.querySelector('.popup__close-button');

let popup = document.querySelector('.popup');
let popupEditProfile = document.querySelector('.popup__edit-profile');
let popupAddCards = document.querySelector('.popup__add-cards');

let nameInput = document.querySelector('.popup__input_string_name-author');
let jobInput = document.querySelector('.popup__input_string_type-of-activity');
let placeInput = document.querySelector('.popup__input_string_name-place');
let linkInput = document.querySelector('.popup__input_string_link');

let formElement = document.querySelector('.popup__content');
let profileAuthor = document.querySelector('.profile__author');
let profileTypeOfActivity = document.querySelector('.profile__type-of-activity');





const itemTemplateContent = document.querySelector('.element-template').content;
const elements = document.querySelector('.elements');
let elementImg = itemTemplateContent.querySelector('.element__image');
let elementText = itemTemplateContent.querySelector('.element__text');
const element = itemTemplateContent.querySelector('.element');


nameInput.value = profileAuthor.textContent;
jobInput.value = profileTypeOfActivity.textContent;



function openPopup(event) {
  if (event.target === openPopupEditButton) {
    popupEditProfile.classList.add('popup_is-opened');
  }
  else if( event.target === openPopupAddButton) {
    popupAddCards.classList.add('popup_is-opened');
}

}

/*function closePopup(evt) {
   {
    evt.target.classList.remove('popup_is-opened');
  }
 
}
*/const button = document.querySelector('button');
button.addEventListener('click', function (evt) {

    const eventTarget = evt.target;
    eventTarget.setAttribute('disabled', true);
    console.log(eventTarget);
}); 


function handleOverlayClick(event) {
  if (event.target === event.currentTarget) {
    closePopup(evt);
  }
}//--------------------------------------------------------------------------------------remove

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameInputContent = nameInput.value;
  jobInputContent = jobInput.value;
  profileAuthor.textContent = nameInputContent;
  profileTypeOfActivity.textContent = jobInputContent;
  placeInputContent = placeInput.value;
  linkInputContent = linkInput.value;
  //elementText.textContent = placeInputContent;--------------------------------------доделать

  closePopup(evt);//--------------------------------------------------------------------remove
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
/*
function addElement() {

  elementImg.src = initialElements[4].link;
  elementText.textContent = initialElements[4].name;
  itemElement = element.cloneNode(true);

  elements.append(itemElement);


}
*/
//-----------------------------------------------------------------переделать тогл попап
openPopupAddButton.addEventListener('click', openPopup);
//addButton.addEventListener('click', addElement);---------повесить на кнопку сохранитть
openPopupEditButton.addEventListener('click', openPopup);

//closePopupButtom.addEventListener('click', closePopup);//-------------------------remove
popupEditProfile.addEventListener('click', handleOverlayClick);
//popupAddCards.addEventListener('click', handleOverlayClick);
formElement.addEventListener('submit', formSubmitHandler);


