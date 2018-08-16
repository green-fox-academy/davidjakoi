'use strict';


const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let startX: number = 200;
let startY: number = 0;
let size: number = 200;
let index: number = 1;

ctx.strokeRect(startX ,startY,size,size);
ctx.strokeRect(startX + size, startY + size, size, size);
ctx.strokeRect(startX, startY + (size * 2), size, size);
ctx.strokeRect(startX - size, startY + size, size, size);

function drawSquares(){

if(size < 3){
  return null;
}else{
  size = size / 3;
  ctx.strokeRect(startX + size*index,startY,size,size);
  ctx.strokeRect(startX + size, startY + size, size, size);
  ctx.strokeRect(startX + size, startY + (size * 2), size, size);
  ctx.strokeRect(startX , startY + size, size, size);
  i++;
   
  drawSquares();
}
//ctx.strokeRect(startX + size, startY, size, size);



}

drawSquares();