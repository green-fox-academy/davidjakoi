// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'
const fs = require('fs');
export {}


let name: string = "David Jakoi";

try{
    fs.writeFileSync('mytext.xt',name);
} catch(error) {
    console.log('unable to write file');
}