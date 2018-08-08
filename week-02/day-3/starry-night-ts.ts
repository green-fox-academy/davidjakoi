'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillRect(0,0,600,400);
ctx.fillStyle = "black";
let r: number = Math.floor(Math.random() * 256);
let g: number = Math.floor(Math.random() * 256);
let b: number = Math.floor(Math.random() * 256);

for(let i=0; i<30; i++){

    ctx.fillRect(Math.floor(Math.random()*600),Math.floor(Math.random()*400), 10, 10);
    ctx.fillStyle = 'rgb(' + r + "," + g + "," + b +')';
}