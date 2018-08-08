'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

let x: number = 5;
let y: number = 5;
let startSize: number = 5;

for(let i: number = 0; i<6 ; i++){
    ctx.fillStyle = "purple";
    ctx.fillRect( x , y , startSize, startSize);
    x += x;
    y += y;
    startSize += startSize;
}