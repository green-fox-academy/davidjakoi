// -  Create a function called `factorio`
//    that returns it's input's factorial
let factorial=1;
function factorio(num){
    while(num>1){
        factorial=factorial * num;
        num--;
    }
    return factorial;
}

console.log(factorio(5));