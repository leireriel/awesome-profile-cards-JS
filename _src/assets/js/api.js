'use strict';

const submitButton = document.querySelector('.share__button'); //listener
const responseURL = document.querySelector('.response'); 
const field = document.querySelector('#field');
const fullName = document.querySelector('#fullName');
const jobTitle = document.querySelector('#jobTitle');
const email1 = document.querySelector('#email');
const phone1 = document.querySelector('#phone');
const linkedin1 = document.querySelector('#linkedin');
const github1 = document.querySelector('#github');
const img64 = 'data:image/png;base64,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';

// //OBJECT WITH USER INFO
const userInfo = {
  palette: 1,
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  photo: img64
};


//LOCAL STORAGE INCLUDING RESET OPTION

const fieldInputs = document.querySelectorAll('.fill__form input');

const saveLocalStorage = (e) => {
  const culpable = e.currentTarget;
  const inputValue = culpable.value;

  if (culpable === fieldInputs[0]) {
    userInfo.name = inputValue;
  } else if (culpable === fieldInputs[1]) {
    userInfo.job = inputValue;
  } else if (culpable === fieldInputs[3]) {
    userInfo.email = inputValue;
  } else if (culpable === fieldInputs[4]) {
    userInfo.phone = inputValue;
  } else if (culpable === fieldInputs[5]) {
    userInfo.linkedin = inputValue;
  } else if (culpable === fieldInputs[6]) {
    userInfo.github = inputValue;
  }
  console.log(userInfo);

  localStorage.setItem('userInfoLS', 'userInfo');
};


for (let input of fieldInputs) {
  input.addEventListener('keyup', saveLocalStorage);
}





// //REQUEST TO API
// function sendRequest(){
//   fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
//     method: 'POST',
//     body: JSON.stringify(userInfo),
//     headers: {
//       'content-type': 'application/json'
//     },
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data.cardURL);
//     });
// }
// submitButton.addEventListener('click', sendRequest);




