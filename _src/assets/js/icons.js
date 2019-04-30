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

// const itemLink = document.querySelector('.card__list--link');



function print(event, item, text) {
  const gilty = event.currentTarget;
  const value = gilty.value;

  if (value === '') {
    item.classList.add('hidden');
  } else {
    item.classList.remove('hidden');
    item.querySelector('.card__list--link').href = `${text}${value}`;

  }
}

email.addEventListener('keyup', (event) => print(event, itemEmail, 'mailto: '));
phone.addEventListener('keyup', (event) => print(event, itemPhone, 'tel: '));
linkedin.addEventListener('keyup', (event) => print(event, itemLinkedin, 'https://www.linkedin.com/in/'));
github.addEventListener('keyup', (event) => print(event, itemGithub, 'https://github.com/'));

