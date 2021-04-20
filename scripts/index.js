let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButtom = document.querySelector('.popup__close-button');

function openForm(){
    popup.style.display = 'block';
}

editButton.addEventListener('click', openForm);

function closeForm(){   
    popup.style.display = 'none';
}

closeButtom.addEventListener('click', closeForm);

popup.addEventListener('mouseover', closeForm);



let nameAuthor = document.querySelector('.profile__author')

let inputNameAuthor = document.querySelector('.popup__input_string_name-author');
inputNameAuthor.value = nameAuthor;

let typeOfActivity = "Исследователь океана"

let inputTypeOfActivity = document.querySelector('.popup__input_string_type-of-activity');
inputTypeOfActivity.value = typeOfActivity;

/*let submitButton = document.querySelector('.popup__submit-button');----переменная должна распологаться ниже, надо перенести*/
