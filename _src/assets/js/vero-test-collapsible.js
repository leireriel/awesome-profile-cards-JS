// 'use strict';


// const titleArray = document.querySelectorAll('.collapsible__title');
// const sectionArray = document.querySelectorAll('.collapsible__container');
// const arrowArray = document.querySelectorAll('.arrow');

// const activateCollapse = (event) => {
//   const currentTitle = event.currentTarget;
//   const arrowElement = currentTitle.querySelector('.arrow');
//   const sectionSibling = currentTitle.nextElementSibling;

//   if (!sectionSibling.classList.contains('hidden')) {
//     sectionSibling.classList.toggle('hidden');
//     arrowElement.classList.add('fa-chevron-down');
//     arrowElement.classList.remove('fa-chevron-up');
//   } else {
//   for (const section of sectionArray) {
//     section.classList.add('hidden');
//   } 
//   for (const arrow of arrowArray) {
//     arrow.classList.add('fa-chevron-down');
//     arrow.classList.remove('fa-chevron-up');
//   }
//   sectionSibling.classList.remove('hidden');
//   arrowElement.classList.toggle('fa-chevron-up');
//   }
// }

// for (const title of titleArray) {
//   title.addEventListener('click', activateCollapse)
// }


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