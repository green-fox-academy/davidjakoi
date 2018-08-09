'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"
let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
let numbersToTest: number[] = [4, 8, 12, 16];

for(let i: number =0; i< listOfNumbers.length; i++){
    if(listOfNumbers[i] == numbersToTest[i]){
        console.log("ja");
    }
}

// function checkNums(element){
//     return (element === 4 && element === 8 && element === 12 && element === 16);
// }

// console.log(listOfNumbers.some(checkNums));

