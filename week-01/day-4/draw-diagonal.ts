

// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

let lineCount: number = 6;

for(var i: number=0; i< lineCount; i++){
  if(i==0 || i==lineCount-1){
    console.log("%%%%%%");
    }
  else{
    console.log("%    %");
    }
  }
