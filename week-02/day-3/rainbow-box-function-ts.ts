'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

let colors: string[] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let k: number = 0;
function drawSquares(size,color){
    for(let i = 0; i<80; i++){
        if(k==colors.length){
            k=0;
        }
        ctx.fillStyle = color[k];
        ctx.fillRect(canvas.width/2-size/2,canvas.height/2-size/2, size, size);
        size -= 5;
        k++;
    }
}

drawSquares(canvas.height, colors);