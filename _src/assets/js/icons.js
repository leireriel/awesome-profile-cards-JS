'use strict';
//input
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let linkedin = document.querySelector('#linkedin');
let github = document.querySelector('#github');
// //icon
// let emailIcon = document.querySelector('.email__icon');
// let phoneIcon = document.querySelector('.phone__icon');
// let linkedinIcon = document.querySelector('.linkedin__icon');
// let githubIcon = document.querySelector('.github__icon');
//icon-specific
const itemEmail = document.querySelector('.list__item--email');
const itemPhone = document.querySelector('.list__item--phone');
const itemLinkedin = document.querySelector('.list__item--linkelind');
const itemGithub = document.querySelector('.list__item--github');

// <!-- <li class="list__item"><a href="" class="card__list--link far fa-envelope email__icon">email</a></li>
// <li class="list__item"><a href="" class="card__list--link fas fa-mobile-alt phone__icon">mobile</a></li>
// <li class="list__item"><a href="" class="card__list--link fab fa-linkedin-in linkedin__icon">linkedin</a></li>
// <li class="list__item"><a href="" class="card__list--link fab fa-github-alt github__icon">github</a></li> -->




//Function to convert input text to icon link
function printEmail (event) {
  const gilty = event.currentTarget;
  const value = gilty.value;

  if (value=== '') {
    itemEmail.innerHTML='';
  } else {
    itemEmail.innerHTML= `<a href="mailto:${value}" class="card__list--link far fa-envelope email__icon">email</a>`;
  }
}

function printPhone (event) {
  const gilty =event.currentTarget;
  const value = gilty.value;

  if (value==='') {
    itemPhone.innerHTML='';
  } else {
    itemPhone.innerHTML= `<a href="tel:${value}" class="card__list--link fas fa-mobile-alt phone__icon">mobile</a>`;
  }
}

function printLinkedin (event) {
  const gilty =event.currentTarget;
  const value = gilty.value;

  if (value==='') {
    itemLinkedin.innerHTML='';
  } else {
    itemLinkedin.innerHTML= `<a href="https://www.linkedin.com/in/${value}" class="card__list--link fab fa-linkedin-in linkedin__icon">linkedin</a>`;
  }
}

function printGithub (event) {
  const gilty =event.currentTarget;
  const value = gilty.value;

  if (value==='') {
    itemGithub.innerHTML='';
  } else {
    itemGithub.innerHTML= `<a href="https://github.com/${value}" class="card__list--link fab fa-github-alt github__icon">github</a>`;
  }
}

email.addEventListener('keyup', printEmail);
phone.addEventListener('keyup', printPhone);
linkedin.addEventListener('keyup', printLinkedin);
github.addEventListener('keyup', printGithub);

// //Function to make icons invisible if inputs are empty
// function invisibleIcon(input, target) {
//     if (input.value === "") {
//         target.classList.add('hide__card__list--link');
//     } else {
//         target.classList.remove('hide__card__list--link');
//     }
// }



// // Listener for function to convert input text to icon link
// function printEmail () {
//     convertToIcon(`mailto:${email.value}`, emailIcon);
// }
// function printPhone () {
//     convertToIcon(`tel:${phone.value}`, phoneIcon);
// }
// function printLinkedin () {
//     convertToIcon(`https://www.linkedin.com/in/${linkedin.value}`, linkedinIcon);
// }
// function printGithub () {
//     convertToIcon(`https://github.com/${github.value}`, githubIcon);
// }

// email.addEventListener('keyup', printEmail);
// phone.addEventListener('keyup', printPhone);
// linkedin.addEventListener('keyup', printLinkedin);
// github.addEventListener('keyup', printGithub);



// // Listener for function to make icons invisible if inputs are empty
// function invisibleEmail () {
//     invisibleIcon(email, emailIcon);
// }
// function invisiblePhone () {
//     invisibleIcon(phone, phoneIcon);
// }
// function invisibleLinkedin () {
//     invisibleIcon(linkedin, linkedinIcon);
// }
// function invisibleGithub () {
//     invisibleIcon(github, githubIcon);
// }

// email.addEventListener('keyup', invisibleEmail);
// phone.addEventListener('keyup', invisiblePhone);
// linkedin.addEventListener('keyup', invisibleLinkedin);
// github.addEventListener('keyup', invisibleGithub);
