'use strict';

const inputName = document.querySelector ('.input-name');
const resultName = document.querySelector ('.resultName');
const inputJob = document.querySelector ('.input-job');
const resultJob = document.querySelector ('.resultJob');

const textCard = (cardInfo, input, text) => {
  if (input.value === '') {
    cardInfo.innerHTML = `No me borres ${text}`;
  } else {
    cardInfo.innerHTML = input.value;
  }
};

inputName.addEventListener ('keyup', () => {
  textCard (resultName, inputName, 'soy el nombre');
});
inputJob.addEventListener ('keyup', () => {
  textCard (resultJob, inputJob, 'soy el trabajo');
});
