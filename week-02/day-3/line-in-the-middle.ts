'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.

ctx.beginPath();

ctx.moveTo(0,200);
ctx.lineTo(300,200);
ctx.fill();

ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(300,0);
ctx.lineTo(300,200);

ctx.strokeStyle = "green";
ctx.stroke();

let header = document.createElement("h1");
let text = document.createTextNode("Powered by Greenfox");
header.appendChild(text);
document.body.appendChild(header);
header.setAttribute("align", "center");


