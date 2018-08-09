'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.


for(let i: number = 0; i<12; i++){
    
    let x: number = 0;
    let y: number = 0;
    

    
        if(i % 2 === 0){
            ctx.fillStyle = "white";
        }else{
        ctx.fillStyle = "black";
        ctx.fillRect(x,y,50,50);
        }
        x += 50;
    }

        

for(let i = 0; i<8; i++){

    let x: number = 0;
    let y: number = 0;
    

    if( i % 2 === 0){
        ctx.fillStyle = "white";
        else{
            ctx.fillStyle = "black";
            ctx.fillRect(x,y,50,50);
        }
        
            }
        
           y += 50;
}