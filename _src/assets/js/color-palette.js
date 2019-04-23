'use strict';

const preview = document.querySelector('.section__card');
const radio1 = document.getElementById('settings__palette1');
const radio2 = document.getElementById('settings__palette2');
const radio3 = document.getElementById('settings__palette3');


function changeColor(addedClass) {
  preview.classList.remove('option1', 'option2', 'option3');
  preview.classList.add(addedClass);
}


radio1.addEventListener('click', function() {changeColor('option1')});
  
radio2.addEventListener('click', function() {changeColor('option2')});
  
radio3.addEventListener('click', function() {changeColor('option3')});