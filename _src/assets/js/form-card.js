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

const input1 = document.querySelector('.input1');
const result1 =  document.querySelector('.result1');

const addText1 = function textCard1() {
    if (input1.value === '') {
        result1.innerHTML = 'No me borres :-)';
    } else {
        result1.innerHTML = input1.value;
    } 
} 
input1.addEventListener('keyup', addText1);


