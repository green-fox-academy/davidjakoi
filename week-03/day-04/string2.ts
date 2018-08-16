// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function removeX(string: string){

    
    if(string.search('x') == -1){
        return string;
    }else {
        let posX: number = string.search('x');
        let start: string = string.slice(0,posX); 
        let end: string = string.slice(posX + 1);
        string = start + end;
        return removeX(string);
    }
}


console.log(removeX('teslamodelx, xellow'));