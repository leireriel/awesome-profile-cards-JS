'use strict';

let collapsibleTitle = document.querySelectorAll('.collapsible__title');
const collapsibleContainer = document.querySelectorAll('.parent__container');

for (let i = 0; i < collapsibleTitle.length; i++) {
  collapsibleTitle[i].addEventListener('click', collapse); 
}

function collapse(e) {
  let trigger = e.currentTarget.parentElement;
  
 
  if (trigger.classList.contains('hidden')) {
    collapseAll();
    trigger.classList.remove('hidden');
  } else {
    collapseAll();
  }
}

function collapseAll() {
  for (let i = 0; i < collapsibleContainer.length; i++) {
    collapsibleContainer[i].classList.add('hiddenAll');
  }
}


