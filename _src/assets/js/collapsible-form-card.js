'use strict';

const fill = document.querySelector('.fill__form');
const share = document.querySelector('.share__collapsible--container');
let collapsibleTitle = document.querySelectorAll('.collapsible__title');

for (let i = 0; i < collapsibleTitle.length; i++) {
  collapsibleTitle[i].addEventListener('click', collapse); 
}

function collapse(e) {
  let titleClick = e.currentTarget.parentElement;
  titleClick.classList.toggle('hidden');
};

