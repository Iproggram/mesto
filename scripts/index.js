let openPopupButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButtom = document.querySelector('.popup__close-button');

function togglePopup(event) {
    popup.classList.toggle('popup_is-opened');
}

openPopupButton.addEventListener('click', togglePopup);
closePopupButtom.addEventListener('click', togglePopup);

function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
        togglePopup(event);
    }
}

popup.addEventListener('click', handleOverlayClick);

let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_string_name-author');
let jobInput = document.querySelector('.popup__input_string_type-of-activity');
let profileAuthor = document.querySelector('.profile__author');
let profileTypeOfActivity = document.querySelector('.profile__type-of-activity');

nameInput.value = profileAuthor.textContent;
jobInput.value = profileTypeOfActivity.textContent;

function formSubmitHandler(evt) {
    // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.
    evt.preventDefault();
    // Получите значение полей jobInput и nameInput из свойства value
    nameInputContent = nameInput.value; 
    jobInputContent = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    profileAuthor.textContent = nameInputContent;
    profileTypeOfActivity.textContent = jobInputContent;
    // Вставьте новые значения с помощью textContent
    togglePopup(event);
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

/*  пытаемся заставить работать лайки
let like = document.querySelectorAll('.element__like-button');

console.log(like);

function likeActive(){
    like[i].classList.toggle('element__like-button_active');
}

like[i].addEventListener('click', likeActive);
*/
