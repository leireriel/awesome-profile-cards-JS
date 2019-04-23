'use strict';

const shareCreated = document.querySelector('.share__created');
const shareBtn = document.querySelector('.share__button');

shareCreated.classList.add('share__hidden');

function appear () {
  shareCreated.classList.remove('share__hidden');
}

shareBtn.addEventListener('click', appear);