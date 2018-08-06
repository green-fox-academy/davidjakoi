// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals: string[] = ["koal", "pand", "zebr"];
let add: string = "a";
animals=animals.map(function(item){
    
    item= item + "a";
    return item;
})

console.log(animals);