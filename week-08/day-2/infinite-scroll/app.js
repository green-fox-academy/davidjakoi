const scrollTreshold = 300;

const randomForColor = () => {
  return Math.floor(Math.random() * 255);
};

const randomColor = () => {
  return `rgb(${randomForColor()}, ${randomForColor()}, ${randomForColor()})`;
};

const addDivs = () => {
  for (let i = 0; i < Math.ceil(Math.random() * 5) + 5; i++) {
    let newDiv = document.createElement('div');
    newDiv.style.backgroundColor = randomColor();
    document.body.appendChild(newDiv);
  }
};

addDivs();


let previousY = 0;
window.addEventListener('scroll', () => {
  let previousScrollTop = document.body.scrollTop;

  console.log(previousScrollTop);
  console.log(window.scrollY);

  let bottom = document.body.offsetHeight;
  if (previousY > window.scrollY && window.scrollY < scrollTreshold) {
    addDivs();
  } else {
    previousY = window.scrollY;
  }

  if ((window.innerHeight + window.scrollY) >= bottom - scrollTreshold) {
    //addDivs();
  }
});