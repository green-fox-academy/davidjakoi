'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

let x: number = 0;
let y: number = 0;
let size: number = 40;
for(let i: number = 0; i<size; i++){
    ctx.fillRect(x,y,size,size);
    
    for(let z: number = 0; z<30; z++){
        ctx.fillRect(x,y,size,size);
        

        if(z % 2 === 0){
            x += size;

            }else if(z % 2 != 0){
            y += size;
        }
            
    }
}

    
        

        
