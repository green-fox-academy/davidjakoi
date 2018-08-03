// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let lineCount: number = 7;
let spaces: string = "   ";
let stars: string = "*";

for(let i=0; i< 3; i++){
    console.log(spaces+stars);
    stars+="**";
    spaces=spaces.slice(0, -1);
}

for(let i=0; i<4; i++){
        console.log(spaces+stars);
        spaces+=" ";
        stars=stars.slice(0, -2);

}
