// Create a method that decrypts duplicated-chars.txt

const fs = require('fs');

let text:string = fs.readFileSync('duplicated-chars.txt','utf-8');


function decrypt(string){
    return string.split("\r\n"," ");
}

console.log(decrypt(text));