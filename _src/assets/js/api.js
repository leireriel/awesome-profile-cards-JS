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
const shareTwitter = document.querySelector ('.twitter');


function getUserInfostr() {

  const userInfo = {
    palette: document.querySelector('.desidn__radio:checked').value,
    name: fullName.value,
    job: jobTitle.value,
    phone: phone1.value,
    email: email1.value,
    linkedin: linkedin1.value,
    github: github1.value,
    photo: imageToSave
  }
  
  const userInfostr = JSON.stringify(userInfo);
  localStorage.setItem('userInfo', userInfostr);
  return userInfostr;
}

function loadUserInfo(){
  const userInfostr = localStorage.getItem('userInfo');
  if(userInfostr !== null){
   const userInfo = JSON.parse(userInfostr);

   changeColor(`option${userInfo.palette}`);
   fullName.value = userInfo.name;
   jobTitle.value = userInfo.job;
   phone1.value = userInfo.phone;
   email1.value = userInfo.email;
   linkedin1.value = userInfo.linkedin;
   github1.value = userInfo.github;
   profilePreview.style.backgroundImage = `url(${userInfo.photo})`;
   imageToSave = userInfo.photo;

   resultName.innerHTML = userInfo.name;
   resultJob.innerHTML = userInfo.job;
   itemEmail.innerHTML= `<a href="mailto:${userInfo.email}" class="card__list--link far fa-envelope email__icon" target="_blank">email</a>`;
   itemPhone.innerHTML= `<a href="tel:${userInfo.phone}" class="card__list--link fas fa-mobile-alt phone__icon" target="_blank">mobile</a>`;
   itemLinkedin.innerHTML= `<a href="https://www.linkedin.com/in/${userInfo.linkedin}" class="card__list--link fab fa-linkedin-in linkedin__icon" target="_blank">linkedin</a>`;
   itemGithub.innerHTML= `<a href="https://github.com/${userInfo.github}" class="card__list--link fab fa-github-alt github__icon" target="_blank">github</a>`;
   profileImage.style.backgroundImage = `url(${userInfo.photo})`;
   imageToSave = userInfo.photo;
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
      devImage.innerHTML = `<a href="${data.cardURL}" target="_blank">${data.cardURL}</a>`;
      
      if (data.succes === false){
        console.log(data.error);
      }
      shareTwitter.innerHTML = `<a href="http://twitter.com/home?status=Echa%20un%20vistazo%20a%20mi%20tarjeta%20profesional%20👀💼%20${data.cardURL}" target="_blank" rel="noopener" class="share__created--twitter"><i class="share__created--twitter-img fab fa-twitter"></i> Compartir en twitter</a>`;
    });
}

function resetUserInfo () {
  localStorage.removeItem('userInfo');
}

submitButton.addEventListener('click', sendRequest);
buttonReset.addEventListener('click', resetUserInfo);

loadUserInfo();





