'use strict';

const inputName = document.querySelector('.input-name');
const resultName =  document.querySelector('.result');

const addText = function textCard() {
    if (inputName.value === '') {
        resultName.innerHTML = 'No me borres 🐲';
    } else {
        resultName.innerHTML = inputName.value;
    } 
};
inputName.addEventListener('keyup', addText);

const inputJob = document.querySelector('.input-job');
const resultJob =  document.querySelector('.result1');

const addText1 = function textCard1() {
    if (inputJob.value === '') {
        resultJob.innerHTML = 'No me borres 🌋';
    } else {
        resultJob.innerHTML = inputJob.value;
    } 
} 
inputJob.addEventListener('keyup', addText1);

