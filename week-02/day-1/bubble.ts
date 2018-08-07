//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending
//  Example:

//  should print [5, 9, 12, 24, 34]

//  should print [34, 24, 12, 9, 5]

let lista: number[] = [34, 12, 24, 9, 5];

function bubble(list: number[], ascending: boolean){
    list.sort();
    if(!ascending){
        list.reverse();
    }
    return list;
}
bubble(lista, false);

console.log(lista);
