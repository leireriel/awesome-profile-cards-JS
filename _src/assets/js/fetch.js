'use strict';

const shareButton = document.querySelector('.share__button');
const responseURL = document.querySelector('.share__created--link');
const form = document.querySelector('form');
const fr = new FileReader(); 



shareButton.addEventListener('click', loadPhoto);

function sendData () {
  
    const inputs = Array.from(form.elements);
    const json = getJSONFromInputs(inputs);
    json.skills = ['JavaScript', 'React'];
    json.photo = fr.result;
    sendRequest(json);
}


function loadPhoto(){
    const myFile = document.querySelector('#img-selector').files[0];
  fr.addEventListener('load', sendData);
  fr.readAsDataURL(myFile);
}

function getJSONFromInputs(inputs){
  return inputs.reduce(function (acc, val) {
    if(val.nodeName !== 'BUTTON')
      acc[val.name] = val.value;
    return acc;
  }, {})
}

function sendRequest(json){
  