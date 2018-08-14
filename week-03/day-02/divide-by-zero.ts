// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0
function divide(num){
try{
    if(num === 0){
        return 'fail'
    }
    return 10/num;
    
}catch(err){
    console.log(err);
   
}
}
console.log(divide(0));