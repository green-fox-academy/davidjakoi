//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

let list: number[] = [2,3,3,5,6,7,7,8]; 

function unique(value, index, arr) {
    return arr.indexOf(value) === index;
}

let newList: number[] = [];

newList = list.filter(unique);

console.log(newList);
