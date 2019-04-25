'use strict';

const fillForm = document.querySelector('.fill__form');
const inputBoxes = fillForm.querySelectorAll('input');
const buttonReset = document.querySelector('.card__reset');
const cardName = document.querySelector('.card__name');
const cardJob = document.querySelector('.card__job-title');
const cardPhoto = document.querySelector('.card__photo');
const previewImg = document.querySelector('.preview__image');
const previewCard = document.querySelector('.section__card');
const previewLists = document.querySelectorAll('.list__item');

const defaultUser = {
  name: 'Nombre Apellido',
  job: 'Front end developer',
  photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1M8A6NkzDknLi9qdwF89W_Nhgd2Ru9D5s7REKbxWgpUo4TtL7',
  palette: 1,
  email: '',
  phone: '',
  linkedin: '',
  github: '',
};


function resetFields (){
  for (const inputBox of inputBoxes) {
    inputBox.value = '';
  }
  previewImg.style.backgroundImage = 'url()';
}

function resetCard () {
  cardName.innerHTML = defaultUser.name;
  cardJob.innerHTML = defaultUser.job;
  cardPhoto.style.backgroundImage = `url(${defaultUser.photo})`;
  for (const previewList of previewLists) {
    previewList.innerHTML = '';
  }
}

function resetPalette () {
  radio1.checked = true;
  radio2.checked = false;
  radio3.checked = false;
  previewCard.classList.remove('option1', 'option2', 'option3');
  previewCard.classList.add('option1');
}

const reset = () => {
  resetFields();
  resetCard();
  resetPalette();
};

buttonReset.addEventListener('click', reset);