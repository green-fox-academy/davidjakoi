// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

let sum: number = 0;

function sumOfDigits(num){
    if(num < 10){
        sum += num;
        return sum;
    } else {
    sum += num % 10;
    num = Math.floor(num / 10);
    sumOfDigits(num);
    return sum;
    }
}

console.log(sumOfDigits(12));
