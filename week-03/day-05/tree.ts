'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let height: number = 60;
let size: number = 50;
let z: number = 0;
let i: number = 0;
let angle: number = 30;

ctx.beginPath();
ctx.translate(canvas.width / 2, 500);
ctx.moveTo(0, 0);
ctx.lineTo(0, size);
ctx.stroke();

function drawBranches() {
  let leftBranchendX: number = -size / 2;
  let leftBranchendY: number = -size;
  let centerBranchEndX: number = 0;
  let centerBranchEndY: number = -height;
  let rightBranchEndX: number = size / 2;
  let rightBranchEndY: number = -size;

  ctx.rotate(angle * Math.PI / 180);
  if (i < 10) {
    ctx.beginPath();
   
    ctx.moveTo(0, 0);
    
    
    ctx.lineTo(leftBranchendX, leftBranchendY);
    ctx.moveTo(0, 0);
    ctx.lineTo(centerBranchEndX, centerBranchEndY);
    ctx.moveTo(0, 0);
    ctx.lineTo(rightBranchEndX, rightBranchEndY);
    ctx.translate(0, centerBranchEndY);
    ctx.stroke();
    i++;

    angle -= 5;
    height -= 6;
    size -= 5;
    return drawBranches();
  }
}

drawBranches();




