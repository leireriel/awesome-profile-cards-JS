'use strict';

const collapsibleTitle = document.querySelectorAll('.collapsible__title');
const collapsibleContainer = document.querySelectorAll('.parent__container');

function collapseAll() {
  for (const collapse of collapsibleContainer) {
    collapse.classList.add('hidden');
  }
}

function collapse(e) {
  const trigger = e.currentTarget;
  const resultTrigger = trigger.parentElement.classList.contains('hidden');

  if (resultTrigger === true) {
      collapseAll();
      trigger.parentElement.classList.remove('hidden');
  } else {
      trigger.parentElement.classList.add('hidden');
  }
}
for (const container of collapsibleTitle){
  container.addEventListener('click', collapse);
}






