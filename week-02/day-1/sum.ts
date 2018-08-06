// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

function sum(firstNumber: number, ...restOfNumber: string[]) {
    let summa=0;
    for (let i=0; i<length.restOfNumber; i++){
        summa+= restOfNumber[i];
    }
    return firstNumber+summa;

}

console.log(sum(4,5,6,7));