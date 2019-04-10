'use strict';
// modificar nombre variable acc
let collapsibleTitle = document.querySelectorAll('.collapsible__title');

for (let i = 0; i < collapsibleTitle.length; i++) {
  collapsibleTitle[i].addEventListener('click', collapse); 
}

function collapse(e) {
  //sobra??
  //let collapsibleTitle = document.querySelectorAll('.collapsible__title');
  let titleClick = e.currentTarget.parentElement;
  //console.log(e.currentTarget.parentElement);
  titleClick.classList.toggle('hidden');
  



};
















  
    /*for (let i = 0; i < collapsibleTitle.length; i++) {
      let currentElement = collapsibleTitle[i];
      let collapsibleContainer = 
      document.querySelector('#'+currentElement.id+'-container');
      let arrow = 
      document.querySelector('#'+currentElement.id+'-arrow');
      if (this.id === currentElement.id){
          collapsibleContainer.style.maxHeight = collapsibleContainer.scrollHeight + "px";
          arrow.classList.replace('fa-chevron-up', 'fa-chevron-down');
      }else{
        collapsibleContainer.style.maxHeight =  null;
        arrow.classList.replace('fa-chevron-down', 'fa-chevron-up');
      }
    };
  } */
// sustituir this por currentTarget