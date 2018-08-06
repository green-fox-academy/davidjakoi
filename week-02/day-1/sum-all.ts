// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

let ai: number[] = [3,4,5,6,7];
let summa: number = 0;

ai.forEach(function(num){
    summa=summa+num;
    return summa;
})
console.log(summa);