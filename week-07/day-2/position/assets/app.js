let button = document.querySelector('button');
let input = document.querySelector('input');
button.addEventListener('click', getCoordinates);

function getCoordinates() {
  let myRequest = new XMLHttpRequest();
  myRequest.open('GET', `http://localhost:3000/location?location=${input.value}`, true);
  myRequest.onload = () => {
    if (myRequest.status === 200) {
      const results = JSON.parse(myRequest.response);
      console.log(results);
      let inputField = document.getElementById('inputField');
      let newHeader = document.createElement('h1');
      newHeader.innerText = `The coordinates of ${results[0].name}: ${results[0].ll}`;
      inputField.appendChild(newHeader);
      let myMap = document.createElement('iframe');
      myMap.setAttribute('width', '800');
      myMap.setAttribute('height', '550');
      myMap.setAttribute('frameborder', '0');
      myMap.setAttribute('style', 'border:1px solid black');
      myMap.setAttribute('src', `https://www.google.com/maps/embed/v1/place?key=AIzaSyBroxirltG9wAmi2RPM7zgJDMfqDBY32x8&q=${results[0].lat},${results[0].lon}&zoom=12`);
      inputField.appendChild(myMap);
    }
  }
  myRequest.send();
}
