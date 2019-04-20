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
const fileInput = document.querySelector('#selectImage');
let imageToSave = "";
const devImage = document.querySelector('.share__created--link');

function getUserInfostr() {
  const userInfo = {
    //:cheked es el atributo de radio
    palette: document.querySelector('.desidn__radio:checked').value,
    name: fullName.value,
    job: jobTitle.value,
    phone: phone1.value,
    email: email1.value,
    linkedin: linkedin1.value,
    github: github1.value,
    photo: imageToSave
  }
  console.log(userInfo);
  const userInfostr = JSON.stringify(userInfo);
  localStorage.setItem('userInfo', userInfostr);
  return userInfostr;
}

function loadUserInfo(){
  const userInfostr = localStorage.getItem('userInfo');
  if(userInfostr != null){
   const userInfo = JSON.parse(userInfostr);

   fullName.value = userInfo.name;
   jobTitle.value = userInfo.job;
   phone1.value = userInfo.phone;
   email1.value = userInfo.email;
   linkedin1.value = userInfo.linkedin;
   github1.value = userInfo.github;
   const radios = document.querySelectorAll('.desidn__radio');
   for(const r of radios)
   {
      if(r.value === userInfo.palette)
      {
        r.checked = true;
      }
      else
      {
        r.checked = false;
      }
   }
  }
}

function sendRequest(event){
  event.preventDefault();
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: getUserInfostr(),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(response => response.json())
    .then(data => {
      devImage.innerHTML = data.cardURL;
      if (data.succes === false){
        console.log(data.error);
      }
    });
}

submitButton.addEventListener('click', sendRequest);

loadUserInfo();





