'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

let startX: number = 0;
let startY: number = 0;
let size: number = 40;
let width: number = canvas.width/size;
let height: number = canvas.height/size;
for(let i: number = 0; i<width; i++){
    if(i % 2 ==1){
        startY = size;
    }
    for(let z: number = 0; z< height; z++){
       
        if(z % 2 === 0){
            ctx.fillRect(startX,startY,size,size);
        }
        startY += size;
    }
    startX += size;
    startY = 0;

}

    
        

        
