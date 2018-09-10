'use strict';

let characterSet: string[] = [' ', '!', '.', ',', "'", '"', '?'];

function checkAnagrams(param: string){
param = param.toLowerCase().split('').sort().filter(element => characterSet.indexOf(element) === -1).join("");
return param;
}

function anagramm(inputString: string, inputString2: string){
    return(checkAnagrams(inputString) === checkAnagrams(inputString2))
}


console.log(anagramm('w6s','saw!'));

export { anagramm, checkAnagrams }

