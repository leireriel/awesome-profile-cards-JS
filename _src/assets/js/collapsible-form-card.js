'use strict';

const titleContainer = document.querySelectorAll('.collapsible__title');
const sections = document.querySelectorAll('.section__fieldset');


function collapsePlease(event) {
    const culpable = event.currentTarget;
   
    if (culpable.parentElement.classList.contains('hidden__collapsible')) {
        for (const section of sections) {
          section.classList.add('hidden__collapsible');
        }
        culpable.parentElement.classList.remove('hidden__collapsible');
    } else {
        culpable.parentElement.classList.add('hidden__collapsible');
    }
}

for (const container of titleContainer){
    container.addEventListener('click', collapsePlease);
}




