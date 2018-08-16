// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function changeX(string: string){
    if(string.search('x') == -1){
        console.log("nincs x basszus");
        return string;
    }else {
    string = string.replace('x','y')
    console.log(string);
    return changeX(string);
    
    }
    
}


console.log(changeX('teslamodelx, xellow'));