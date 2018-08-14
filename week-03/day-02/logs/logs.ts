// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

const fs = require('fs');
export {}

let list: string []= fs.readFileSync("log.txt","utf-8").split('\r\n');
let splittedList = list.map(element =>{
    return element.split('   ');
})
let uniqueArray=[];

function makeUnique(arr){
    
    for(let i:number = 0; i< arr.length; i++){
           if(uniqueArray.indexOf(arr[i][1])===-1){
           uniqueArray.push(arr[i][1]);
       }
   }
   return uniqueArray;
}

makeUnique(splittedList);
console.log(uniqueArray);


function ratio(){
    
}