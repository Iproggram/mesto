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



function togglePopup(evt) {
  if (evt.currentTarget === editButton) {
    nameInput.value = profileAuthor.textContent;
    jobInput.value = profileTypeOfActivity.textContent;
    submitButton.classList.add('editSubmitButton');
    submitButton.classList.remove('addSubmitButton');
    }

  else if (evt.currentTarget === addButton){
    nameInput.value = "название";
    jobInput.value = "ссылка на картинку";
    submitButton.classList.add('addSubmitButton');
    submitButton.classList.remove('editSubmitButton');
    }

    popup.classList.toggle('popup_is-opened')
  }


function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
        togglePopup(event);
    }
}




/*
function formSubmitHandler(evt) {

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
 if(submitButton.classList.contains('editSubmitButton') === true) {
  profileAuthor.textContent = nameInput.value; 
  profileTypeOfActivity.textContent = jobInput.value;
 // Выберите элементы, куда должны быть вставлены значения полей
 

 // Вставьте новые значения с помощью textContent
 // Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
 }
 else if (submitButton.classList.contains('addSubmitButton') === true){
  nameInput.value = 'asdas';
  jobInput.value = 'asdsad';
 }
  else {
    nameInput.value = '';
    jobInput.value = '';

  }
 
 togglePopup(evt);
}






editButton.addEventListener('click', togglePopup);
addButton.addEventListener('click', togglePopup);
closePopupButtom.addEventListener('click', togglePopup);
popup.addEventListener('click', handleOverlayClick);
formElement.addEventListener('submit', formSubmitHandler);





/*  пытаемся заставить работать лайки
let like = document.querySelectorAll('.element__like-button');

console.log(like);

function likeActive(){
    like[i].classList.toggle('element__like-button_active');
}

like[i].addEventListener('click', likeActive);
*/
