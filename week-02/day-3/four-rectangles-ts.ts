'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

let x: number = 25;
let y: number = 25;

for(let i = 0; i <4; i++){
    ctx.strokeRect(x,y,25,25);
    x += 30;
    y += 30;
}