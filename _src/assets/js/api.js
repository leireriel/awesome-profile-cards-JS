'use strict';

const submitButton = document.querySelector('.share__button');
const responseURL = document.querySelector('.response');
const field = document.querySelector('#field');
const fullName = document.querySelector('#fullName');
const jobTitle = document.querySelector('#jobTitle');
//const paletteInput = document.querySelector('.desidn__radio');
let email1 = document.querySelector('#email');
let phone1 = document.querySelector('#phone');
let linkedin1 = document.querySelector('#linkedin');
let github1 = document.querySelector('#github');


function getUserInfostr()
{
  const userInfo = {
    palette: document.querySelector('.desidn__radio:checked').value,
    name: fullName.value,
    job: jobTitle.value,
    phone: phone1.value,
    email: email1.value,
    linkedin: linkedin1.value,
    github: github1.value,
    photo: 'https://cdn.memegenerator.es/imagenes/memes/full/6/47/6470819.jpg'
  }
  console.log(userInfo);
  const userInfostr = JSON.stringify(userInfo);
  localStorage.setItem('userInfo', userInfostr);
  return userInfostr;
}

function loadUserInfo(){
  const userInfostr = localStorage.getItem('userInfo');
  if(userInfostr != null)
  {
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
   //paletteInput.value = userInfo.palette;
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
      console.log(data.cardURL);
    });
}
submitButton.addEventListener('click', sendRequest);

loadUserInfo();




