'use strict';

const myDiv = document.querySelector('div');

let leftSideClick = new CustomEvent('left-side-click',

);
let rightSideClick = new CustomEvent('right-side-click');

myDiv.addEventListener('left-side-click', (ev) => {
  ev.target.style.backgroundColor = 'yellow';
  console.log(ev);
});

myDiv.addEventListener('right-side-click', (ev) => {
  ev.target.style.backgroundColor = 'blue';
});