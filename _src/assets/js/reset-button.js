'use strict';

const fillForm = document.querySelector('.fill__form');
const inputBoxes = fillForm.querySelectorAll('input');
const buttonReset = document.querySelector('.card__reset');
const cardName = document.querySelector('.card__name');
const cardJob = document.querySelector('.card__job-title');
const cardPhoto = document.querySelector('.card__photo');
const previewImg = document.querySelector('.preview__image');

function resetFields (){
    for (const inputBox of inputBoxes) {
        inputBox.value = '';
    }
}  

function resetCard () {
    cardName.innerHTML = 'Nombre Apellido';
    cardJob.innerHTML = 'Front-end developer';
}

function resetImg () {
    cardPhoto.classList.remove('card__photo');
    cardPhoto.classList.add('card__photo--test');
}

buttonReset.addEventListener('click', resetFields);
buttonReset.addEventListener('click', resetCard);
buttonReset.addEventListener('click', resetImg);
