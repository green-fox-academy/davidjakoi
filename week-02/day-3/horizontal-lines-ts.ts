'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

function draw3Lines(x,y){
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+50,y+50);
    ctx.strokeStyle = "red"
    ctx.stroke();
    function draw2Lines()
    for(let i = 0; i < 2; i++ ){
        x += 30;
        y += 30;
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+50,y+50);
        ctx.strokeStyle = "blue";
        ctx.stroke();
    }
}

draw3Lines(50,50);