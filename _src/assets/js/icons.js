'use strict';

let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let linkedin = document.querySelector('#linkedin');
let github = document.querySelector('#github');
let emailIcon = document.querySelector('.email__icon');
let phoneIcon = document.querySelector('.phone__icon');
let linkedinIcon = document.querySelector('.linkedin__icon');
let githubIcon = document.querySelector('.github__icon');


//Function to convert input text to icon link
function convertToIcon (input, target) {
    target.href = input;
    console.log(target.href);
}

//Function to make icons invisible if inputs are empty
function invisibleIcon(input, target) {
    if (input.value === "") {
        target.classList.add('hide__card__list--link');
    } else {
        target.classList.remove('hide__card__list--link');
    }
}



// Listener for function to convert input text to icon link
function printEmail () {
    convertToIcon(`mailto:${email.value}`, emailIcon);
}
function printPhone () {
    convertToIcon(`tel:${phone.value}`, phoneIcon);
}
function printLinkedin () {
    convertToIcon(`https://www.${linkedin.value}`, linkedinIcon);
}
function printGithub () {
    convertToIcon(`https://github.com/${github.value}`, githubIcon);
}

email.addEventListener('keyup', printEmail);
phone.addEventListener('keyup', printPhone);
linkedin.addEventListener('keyup', printLinkedin);
github.addEventListener('keyup', printGithub);



// Listener for function to make icons invisible if inputs are empty
function invisibleEmail () {
    invisibleIcon(email, emailIcon);
}
function invisiblePhone () {
    invisibleIcon(phone, phoneIcon);
}
function invisibleLinkedin () {
    invisibleIcon(linkedin, linkedinIcon);
}
function invisibleGithub () {
    invisibleIcon(github, githubIcon);
}

email.addEventListener('keyup', invisibleEmail);
phone.addEventListener('keyup', invisiblePhone);
linkedin.addEventListener('keyup', invisibleLinkedin);
github.addEventListener('keyup', invisibleGithub);
