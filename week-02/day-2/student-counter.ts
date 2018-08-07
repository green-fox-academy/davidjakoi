'use strict';

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

let sum: number = 0;

function sumOfCandies(list){
    for(let i=0; i<list.length; i++){
        sum=sum + list[i].candies;
    }
    return sum;
}

console.log(sumOfCandies(students));

let sumOfAge: number = 0;

function lessThanFive(list){
    for(let i=0; i<list.length; i++){
        if(list[i].candies<5){
            sumOfAge = sumOfAge + list[i].age;
        }
    
    }
    return sumOfAge;
}

console.log(lessThanFive(students));