const click = document.querySelector('.click');

const getRandom = () => {
  return Math.floor(Math.random() * 255);
};

const getRandomColor = () => {
  return `rgb(${getRandom()},${getRandom()},${getRandom()})`;
};

click.addEventListener('click', (event) => {
  click.style.backgroundColor = getRandomColor();
});
