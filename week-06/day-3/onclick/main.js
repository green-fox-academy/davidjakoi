let myBody = document.querySelector('body');
let myContainer = document.createElement('div');
let leftList = document.createElement('ul');
let middle = document.createElement('ul');
let rightList = document.createElement('ul');
leftList.setAttribute('class', 'column');
middle.setAttribute('class', 'column');
rightList.setAttribute('class', 'column');

myBody.appendChild(myContainer);
myContainer.appendChild(leftList);
myContainer.appendChild(middle);
myContainer.appendChild(rightList);

let listItems = ['bread', 'milk', 'orange', 'tomato'];
let buttons = ['Up', '>', 'X', 'Down'];

for (let i = 0; i < 4; i++) {
  let newItem = document.createElement('li');
  newItem.innerText = listItems[i];
  leftList.appendChild(newItem);
}

for (let i = 0; i < 4; i++) {
  let newItem = document.createElement('button');
  newItem.innerText = buttons[i];
  middle.appendChild(newItem);
}

for (let i = 0; i < 4; i++) {
  let newItem = document.createElement('li');
  rightList.appendChild(newItem);
}