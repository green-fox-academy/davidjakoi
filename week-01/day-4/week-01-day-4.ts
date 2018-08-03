// Create a program that writes this line 100 times:
// "I won't cheat on the exam!"

/*for(let i=0;i<100;i++){
  console.log("I won't cheat on the exam!");
}*/

// Create a program that prints all the even numbers between 0 and 500

/*for(let i=0;i<500;i++){
  if(i % 2 == 0){
    console.log(i);
  }
}*/

// Create a program that
// prints the multiplication table with number

/*let number: number = 15;

for(let i=0; i<10; i++){
  console.log(number + "*" + i + "=" + (number * i));
}*/

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

/*for(let i=0; i<100; i++){
  if(i%3 == 0){
    console.log("Fizz");
  }else if(i%5 == 0){
    console.log("Buzz");
  }else if(i%3 == 0 && i%5 == 0){
    console.log("Fizzbuzz");
  } else{
    console.log(i);
  }
}*/

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

/*let lineCount: number = 4;
let stars :string[]= ["hello ", "world ", "cica"];
console.log(stars);

for(let i=0; i<lineCount; i++){
  stars.push("*");
  console.log(stars.join(""));
}*/

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is













let lineCount: number = 4;

let stars :string= "*";
let spaces : string='   ';


for(let i=0; i<lineCount; i++){
  console.log(spaces+stars);
  stars+="**";
  spaces=spaces.slice(0,-1);

}
