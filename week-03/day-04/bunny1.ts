// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

let numberOfEars: number = 0;

function countTotalEars(numberOfBunnies){
    if(numberOfBunnies > 0){
    numberOfEars += 2;
    countTotalEars(numberOfBunnies -1);
    }
    return numberOfEars;

}

console.log(countTotalEars(18));