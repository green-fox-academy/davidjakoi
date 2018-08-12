'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let r: number = 17.32;
let startX: number = 180;
let startY: number = 140;
let height: number = 4;
let width: number = 1;
let y: number = startY;
let sideLength: number = 20;

for(let z: number = 0; z < 5; z++){

    for(let i:number = 0; i< height; i++){
    let color1: number = Math.floor(Math.random() * 256);
    let color2: number = Math.floor(Math.random() * 256);
    let color3: number = Math.floor(Math.random() * 256);
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(startX + sideLength,startY);
    ctx.lineTo(startX + sideLength+sideLength/2,startY + r);
    ctx.lineTo(startX + sideLength,startY + (2*r));
    ctx.lineTo(startX,startY + (2*r));
    ctx.lineTo(startX-sideLength/2,startY + r);
    ctx.lineTo(startX,startY);
    ctx.strokeStyle = 'rgb(' + color1 + "," + color2 + "," + color3 +')';
    ctx.stroke();
    

    startY += 2*r;
    }
    startX += sideLength + sideLength/2;
    startY = y-r;
    y = y-r;

    if(width >4){
        y = y+r*2;
    }
    if(width<7){
        width ++;
    }
    else {
        width = 0;
    }
   
    if(width<5) {
        height++;
    }else{
        height --;
        startY = y + r*2;
    }
}
