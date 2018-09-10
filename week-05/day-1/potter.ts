

 export let books: string[] = ['first', 'second'];
 export let numberOfBooks: number[] = [0, 6];
 export let priceSum: number = 0;
 export let bookPrice: number = 8;
 export function howMuch(books: string[], numberOfBooks: number[]) {
   
   if (numberOfBooks.length === 2) {
     priceSum += (bookPrice * numberOfBooks.length) * 0.95;
     console.log(priceSum);
   } else if (numberOfBooks.length === 3) {
     priceSum += (bookPrice * numberOfBooks.length) * 0.90;
   } else if (numberOfBooks.length === 4) {
     priceSum += (bookPrice * numberOfBooks.length) * 0.80;
   } else if (numberOfBooks.length === 5) {
     priceSum += (bookPrice * numberOfBooks.length) * 0.75;
   }
   for (let i: number = 0; i < numberOfBooks.length; i++) {
     if(numberOfBooks[i] === 0 || numberOfBooks[i] <0){
       throw Error('csicska vagy');
     }
     priceSum += (numberOfBooks[i] - 1) * bookPrice;
     console.log(priceSum);
   }
   return priceSum;
 }
 export {}