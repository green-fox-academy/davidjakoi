'use strict'

export class Summarize {
    //numbers: number[] = [2, 3, 4];
    sumOfNumbers(num) {
        let summa: number = 0;
        for (let i: number = 0; i < num.length; i++) {
            summa += num[i];
        }
        return summa;
    }
}

