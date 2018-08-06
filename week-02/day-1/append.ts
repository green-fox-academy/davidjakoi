// -  Create a string variable named `typo` and assign the value `Chinchill` to it
// -  Write a function called `appendAFunc` that gets a string as an input,
//    appends an 'a' character to its end and returns with a string
// -  Print the result of `appendAFunc(typo)`

let typo: string = "Chinchill";

function appendAFunc(szoveg){
    let add: string = "a";
    
    return szoveg.concat(add);
   
}
console.log(appendAFunc(typo));

function sum (megadottszam: number){
    let summarize: number = 0;
    for (let i: number = 0; i <= megadottszam; i++) {
    summarize = summarize+i;
    }
    return summarize;
 }
 console.log(sum(10));