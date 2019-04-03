'use strict';

const input = document.querySelector('.input');
const result =  document.querySelector('.result');

const addText = function textCard() {
    if (input.value === '') {
        result.innerHTML = 'No me borres :-)';
    } else {
        result.innerHTML = input.value;
    } 
} 
input.addEventListener('keyup', addText);
