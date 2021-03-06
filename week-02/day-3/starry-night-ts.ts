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

for(let i=0; i<30; i++){
    let color: number = Math.floor(Math.random() * 256);
    ctx.fillStyle = 'rgb(' + color + "," + color + "," + color +')';
    ctx.fillRect(Math.floor(Math.random()*600),Math.floor(Math.random()*400), 10, 10);
}