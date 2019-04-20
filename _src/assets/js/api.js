'use strict';

const submitButton = document.querySelector('.share__button');
const responseURL = document.querySelector('.response');
const field = document.querySelector('#field');
const fullName = document.querySelector('#fullName');
const jobTitle = document.querySelector('#jobTitle');
let email1 = document.querySelector('#email');
let phone1 = document.querySelector('#phone');
let linkedin1 = document.querySelector('#linkedin');
let github1 = document.querySelector('#github');
const shareLink = document.querySelector('.share__created--link');

const userInfo = {
  palette: '',
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: ''
};


function sendRequest(){
  const userInfoValue = {
    palette: 1,
    name: fullName.value,
    job: jobTitle.value,
    phone: phone1.value,
    email: email1.value,
    linkedin: linkedin1.value,
    github: github1.value,
    photo: fr.result
  };
  
  console.log('--^--', userInfoValue);
  
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(userInfoValue),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log(data.cardURL);
      shareLink.innerHTML = `<a href="${data.cardURL}" target="_blank">${data.cardURL}</a>`;
    });
    
}
submitButton.addEventListener('click', sendRequest);