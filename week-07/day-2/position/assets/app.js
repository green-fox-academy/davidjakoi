let button = document.querySelector('button');
let input = document.querySelector('input');
button.addEventListener('click', getCoordinates);

let myRequest = new XMLHttpRequest();
myRequest.open('GET', input.value);

function getCoordinates() {
  myRequest.open('GET', `/?location=${input.value}`);
  if (myRequest.readyState == 4) {
    myRequest.send();
  }
}