let myImages = document.getElementsByClassName('thumbNail');
let currentImage = document.getElementById('mainImage');
let currentImageSrc = currentImage.src;
let thumbNailIndex = 0;
let currentImageText = document.getElementById('imageTextContainer');
let thumbNailContainer = document.getElementById('thumbNailContainer');
let thumbNailParents = document.getElementsByClassName('thumbNailAndLogo');
let input = document.querySelector('input');
input.addEventListener('change', addFile);
currentImageText.innerText = myImages[0].alt;

function goLeft() {
  if (thumbNailIndex === 0) {
    thumbNailIndex = myImages.length - 1;
    myImages[0].style = 'border:';
  } else {
    thumbNailIndex--;
    myImages[thumbNailIndex + 1].style = 'border:';
  }
  currentImage.src = myImages[thumbNailIndex].src;
  myImages[thumbNailIndex].style = 'border: 2px solid deepskyblue';
  currentImageText.innerText = myImages[thumbNailIndex].alt;
}

function goRight() {
  if (thumbNailIndex === myImages.length - 1) {
    thumbNailIndex = 0;
    myImages[myImages.length - 1].style = 'border:';
  } else {
    thumbNailIndex++;
    myImages[thumbNailIndex - 1].style = 'border:';
  }
  currentImage.src = myImages[thumbNailIndex].src;
  myImages[thumbNailIndex].style = 'border: 2px solid deepskyblue';
  currentImageText.innerText = myImages[thumbNailIndex].alt;
}

function chooseImage() {

  let currentEventTarget = event.target;
  console.log(event);
  currentImage.src = currentEventTarget.src;
  for (let i = 0; i < myImages.length; i++) {
    myImages[i].style = 'border:'
    if (myImages[i] === event.target) {
      thumbNailIndex = i;
    }
  }
  currentImageText.innerText = myImages[thumbNailIndex].alt;
  event.target.style = 'border: 2px solid deepskyblue';
}

function addFile() {
  let newFiles = input.files;
  let newImage = document.createElement('img');
  newImage.src = `images/${newFiles[0].name}`;
  newImage.setAttribute('class', 'thumbNail');
  newImage.setAttribute('onclick', 'chooseImage()')
  thumbNailContainer.appendChild(newImage);
  myImages.push(newImage);
}

function makeItBlur() {
  if (currentImage.getAttribute('style', 'filter') != 'filter: blur(3px)') {
    currentImage.setAttribute('style', 'filter: blur(3px)');
  } else {
    currentImage.setAttribute('style', 'filter:');
  }
  console.log(currentImage.getAttribute('style', 'filter'));
}

function makeItBlackAndWhite() {
  if (currentImage.getAttribute('style', 'filter') != 'filter: grayscale(100%)') {
    currentImage.setAttribute('style', 'filter: grayscale(100%)');
  } else {
    currentImage.setAttribute('style', 'filter:');
  }
}

function makeItSepia() {
  if (currentImage.getAttribute('style', 'filter') != 'filter: sepia(100%)') {
    currentImage.setAttribute('style', 'filter: sepia(100%)');
  } else {
    currentImage.setAttribute('style', 'filter:');
  }
}

function deleteThumbNail() {
  console.log(myImages);
  let parent = event.target.parentElement;
  parent.removeChild(parent.firstChild);
  parent.removeChild(event.target);

  console.log(myImages);
}