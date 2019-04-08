'use strict';


const titleArray = document.querySelectorAll('.collapsible__title');
const sectionArray = document.querySelectorAll('.collapsible__container');

const toggleArrow = (element) => {
  element.classList.toggle('fa-chevron-down');
  element.classList.toggle('fa-chevron-up');
}

const activateCollapse = (event) => {
  const currentTitle = event.currentTarget;
  const arrow = currentTitle.querySelector('.arrow');
  const sectionSibling = currentTitle.nextElementSibling;

  if (!sectionSibling.classList.contains('hidden')) {
    sectionSibling.classList.toggle('hidden');
    toggleArrow(arrow);
  } else {
  for (const section of sectionArray) {
    section.classList.add('hidden');
  } 
  sectionSibling.classList.remove('hidden');
  toggleArrow(arrow);
  }
}

for (const title of titleArray) {
  title.addEventListener('click', activateCollapse)
}