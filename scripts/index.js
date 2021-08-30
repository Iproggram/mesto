const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closePopupButtom = document.querySelector('.popup__close-button');
const submitButton = document.querySelector('.popup__submit-button');

let formElement = document.querySelector('.popup__content');
let nameInput = document.querySelector('.popup__input_string_name-author');
let jobInput = document.querySelector('.popup__input_string_type-of-activity');
let profileAuthor = document.querySelector('.profile__author');
let profileTypeOfActivity = document.querySelector('.profile__type-of-activity');



let textElem = document.querySelector('.element__text')[0];


const itemTemplateContent = document.querySelector('.element-template').content;
const elements = document.querySelector('.elements');
const elementImg = itemTemplateContent.querySelector('.element__image');
const elementText = itemTemplateContent.querySelector('.element__text');
const element = itemTemplateContent.querySelector('.element');



function togglePopup(evt) {
  if (evt.currentTarget === editButton) {
    nameInput.value = profileAuthor.textContent;
    jobInput.value = profileTypeOfActivity.textContent;
    submitButton.classList.add('editSubmitButton');
    submitButton.classList.remove('addSubmitButton');
  }

  else if (evt.currentTarget === addButton) {
    nameInput.value = "название";
    jobInput.value = "ссылка на картинку";
    submitButton.classList.add('addSubmitButton');
    submitButton.classList.remove('editSubmitButton');
  }

  popup.classList.toggle('popup_is-opened')
};







function handleOverlayClick(event) {
  if (event.target === event.currentTarget) {
    togglePopup(event);
  }
}




/*
function formSubmitHandler(evt) {
<<<<<<< HEAD

     // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.
    evt.preventDefault();
    // Получите значение полей jobInput и nameInput из свойства value
    profileAuthor.textContent = nameInput.value; 
    profileTypeOfActivity.textContent = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
 
    // Вставьте новые значения с помощью textContent
    // Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
      
    
    togglePopup(evt);
}*/

function formSubmitHandler(evt) {

  // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.
  evt.preventDefault();
  // Получите значение полей jobInput и nameInput из свойства value
  if (submitButton.classList.contains('editSubmitButton') === true) {
    profileAuthor.textContent = nameInput.value;
    profileTypeOfActivity.textContent = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей


    // Вставьте новые значения с помощью textContent
    // Прикрепляем обработчик к форме:
    // он будет следить за событием “submit” - «отправка»
  }
  else if (submitButton.classList.contains('addSubmitButton') === true) {
    nameInput.value = 'asdas';
    jobInput.value = 'asdsad';
  }
  else {
    nameInput.value = '';
    jobInput.value = '';

  }

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

editButton.addEventListener('click', togglePopup);
addButton.addEventListener('click', togglePopup);
closePopupButtom.addEventListener('click', togglePopup);
popup.addEventListener('click', handleOverlayClick);
formElement.addEventListener('submit', formSubmitHandler);