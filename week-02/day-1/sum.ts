// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

function sum(...restOfNumber: number[]) {
    let summa=0;
    for (let i=0; i<restOfNumber.length; i++){
        summa+= restOfNumber[i];
    }
    return summa;

}

console.log(sum(4,5,6,7));