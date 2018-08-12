'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let startX: number = 300;
let startY: number = 10;
let size: number = 20;
let triangleHeight: number = 17.32;
let height: number = 21;
let width: number = 1;
let x: number = startX;

for(let z: number = 0; z< height; z++){

    for( let i: number = 0; i<width; i++){
        ctx.beginPath();
        ctx.moveTo(startX,startY);
        ctx.lineTo(startX + size/2,startY + triangleHeight);
        ctx.lineTo(startX - size/2, startY + triangleHeight);
        ctx.lineTo(startX,startY);
        ctx.stroke();
        startX += size;
    }
    startY += triangleHeight;
    width ++;
    startX = x-size/2;
    x -= size/2;
}