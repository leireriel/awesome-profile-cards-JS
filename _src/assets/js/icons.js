'use strict';
//input
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let linkedin = document.querySelector('#linkedin');
let github = document.querySelector('#github');

//icon-specific
const itemEmail = document.querySelector('.list__item--email');
const itemPhone = document.querySelector('.list__item--phone');
const itemLinkedin = document.querySelector('.list__item--linkelind');
const itemGithub = document.querySelector('.list__item--github');


//Function to convert input text to icon link
function printEmail (event) {
  const gilty = event.currentTarget;
  const value = gilty.value;

  if (value=== '') {
    itemEmail.innerHTML='';
  } else {
    itemEmail.innerHTML= `<a href="mailto:${value}" class="card__list--link far fa-envelope email__icon" target="_blank">email</a>`;
  }
}

function printPhone (event) {
  const gilty =event.currentTarget;
  const value = gilty.value;

  if (value==='') {
    itemPhone.innerHTML='';
  } else {
    itemPhone.innerHTML= `<a href="tel:${value}" class="card__list--link fas fa-mobile-alt phone__icon" target="_blank">mobile</a>`;
  }
}

function printLinkedin (event) {
  const gilty =event.currentTarget;
  const value = gilty.value;

  if (value==='') {
    itemLinkedin.innerHTML='';
  } else {
    itemLinkedin.innerHTML= `<a href="https://www.linkedin.com/in/${value}" class="card__list--link fab fa-linkedin-in linkedin__icon" target="_blank">linkedin</a>`;
  }
}

function printGithub (event) {
  const gilty =event.currentTarget;
  const value = gilty.value;

  if (value==='') {
    itemGithub.innerHTML='';
  } else {
    itemGithub.innerHTML= `<a href="https://github.com/${value}" class="card__list--link fab fa-github-alt github__icon" target="_blank">github</a>`;
  }
}

email.addEventListener('keyup', printEmail);
phone.addEventListener('keyup', printPhone);
linkedin.addEventListener('keyup', printLinkedin);
github.addEventListener('keyup', printGithub);
