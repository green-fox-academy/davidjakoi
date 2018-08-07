'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];
let boysAndGirls: string [] = [];
let temp: string = "";
function makingMatches(arr1,arr2){
    for(let i: number = 0; i<6; i++){
        if(arr1.length > 0){
        temp = arr1.shift();
        boysAndGirls.push(temp);
        }
        temp=arr2.shift();
        boysAndGirls.push(temp);

    }
    return boysAndGirls;
}


console.log(makingMatches(girls, boys));

export = makingMatches;