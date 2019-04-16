'use strict';

const submitButton = document.querySelector('.share__button');
const responseURL = document.querySelector('.response');
const field = document.querySelector('#field');
const obj = {
    palette: 1,
    name: 'María García',
    job: 'Front-end developer',
    phone: '+34 666666666',
    email: 'mariagar@example.com',
    linkedin: 'mariagar',
    github: 'mariagar',
    photo: 'https://cdn.memegenerator.es/imagenes/memes/full/6/47/6470819.jpg'
  }

function sendRequest(objJson){
  console.log('esto nos sale');
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(objJson),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data=>{
    console.log(data);
    for (let i=0; i<data.length; i++) {
      obj[i]=data[i];
  }}
  );
}
submitButton.addEventListener('click', sendRequest(obj));
