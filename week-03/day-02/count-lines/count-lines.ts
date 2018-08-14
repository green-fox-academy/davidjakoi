// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
const fs = require('fs');
let text: string [];
let sumOfLines: number = 0;

function howLong(string){
    try{
        text = fs.readFileSync(string, 'utf-8').split("\r\n");
        text.forEach(element => {
            sumOfLines++;
        });
        return sumOfLines;
    } catch(err){
        return 0;
    }
}

console.log(howLong('mytet.txt'));