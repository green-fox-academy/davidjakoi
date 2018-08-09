'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.


/*function drawLines(x,y){
    for(let i: number = 0; i <31; i++){
    ctx.beginPath;
    ctx.moveTo(x,y);
    ctx.lineTo(canvas.width/2,canvas.height/2);
    ctx.strokeStyle = "green";
    ctx.stroke();
    x += 20;
    if( x == canvas.width){
        for(let i: number = 0; i<20; i++){
            ctx.beginPath;
            ctx.moveTo(x,y);
            ctx.lineTo(canvas.width/2,canvas.height/2);
            ctx.strokeStyle = "green";
            ctx.stroke();
            y += 20;
        }
    }
    if( x == canvas.width && y == canvas.height){
        for(let i:number = 0; i<31; i++){
        ctx.beginPath;
            ctx.moveTo(x,y);
            ctx.lineTo(canvas.width/2,canvas.height/2);
            ctx.strokeStyle = "green";
            ctx.stroke();
        
            x -= 20;
        }
    }
    if(y == canvas.height){
        for(let i:number = 0; i<20; i++){
        ctx.beginPath;
            ctx.moveTo(x,y);
            ctx.lineTo(canvas.width/2,canvas.height/2);
            ctx.strokeStyle = "green";
            ctx.stroke();
        
            y -= 20;
        }
    }
    }
    
}*/

let z:number = 0;

function drawLines(x,y){
    for(let i: number = 0; i<4; i++){
        for(z=0; z<20; z++){
            ctx.beginPath;
            ctx.moveTo(x,y);
            ctx.lineTo(canvas.width/2,canvas.height/2);
            ctx.strokeStyle = "green";
            ctx.stroke();
            x += 20;
    }
}
}

drawLines(0,0);