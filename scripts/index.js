/*
let nameAuthor = document.querySelector('.profile__author')

let inputNameAuthor = document.querySelector('.popup__input_string_name-author');
inputNameAuthor.value = nameAuthor;

let typeOfActivity = "Исследователь океана"

let inputTypeOfActivity = document.querySelector('.popup__input_string_type-of-activity');
inputTypeOfActivity.value = typeOfActivity;
*/
/*let submitButton = document.querySelector('.popup__submit-button');----переменная должна распологаться ниже, надо перенести*/


let openPopupButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButtom = document.querySelector('.popup__close-button');
let closeButtom = document.querySelector('.popup__close-button');

function togglePopup(event){
    popup.classList.toggle('popup_is-opened');
}

openPopupButton.addEventListener('click', togglePopup);
closePopupButtom.addEventListener('click', togglePopup);

function handleOverlayClick(event) {
    if (event.target === event.currentTarget){
        togglePopup(event);
    }
}

popup.addEventListener('click', handleOverlayClick);




let like = document.querySelectorAll('.element__like-button');

console.log(like);



function likeActive(){
    like[3].classList.toggle('element__like-button_active');
}


like[3].addEventListener('click', likeActive);


/*


let nameAuthor = document.getElementById('nameAuthor');
let typeOfActivity = document.getElementById('typeOfActivity');


let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__input_string_name-author');
let jobInput = formElement.querySelector('.popup__input_string_type-of-activity');

nameInput.value = nameAuthor.textContent;
jobInput.value = typeOfActivity.textContent;

function formSubmitHandler (evt) {
    evt.preventDefault();

    // Получите значение полей jobInput и nameInput из свойства value
    
    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

console.log(nameInput);
*/