import { fstat, read } from "fs";

// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// then it should print an error message like: 'Unable to read file: my-file.txt'
// If the program is unable to read the file (for example it does not exists),

const fs = require('fs');

function readFromFile(file){
    try{
        return fs.readFileSync(file,'utf-8');
    } catch(err) {
        console.log("unable to read file : " + file);
        return null;
    }
}

console.log(readFromFile('my-fle.txt'));