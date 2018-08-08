'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

let x: number =20;
let y: number = 20;

for(let i: number = 0; i<15; i++){

    ctx.fillStyle = "purple";
    ctx.fillRect(x,y,20,20);
    x += 20;
    y += 20;
}

