'use strict';


const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let startX: number = 200;
let startY: number = 0;
let size: number = 200;

function drawSquares(size,startX){

if(size < 1){
  return null;
}else{
  ctx.strokeRect(startX ,startY,size,size);
  ctx.strokeRect(startX + size, startY + size, size, size);
  ctx.strokeRect(startX, startY + (size * 2), size, size);
  ctx.strokeRect(startX - size, startY + size, size, size);
  
  size = size / 3;
  startX += size;
  drawSquares(size, startX);
 
}
}

drawSquares(200,200);