// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(para1: string, ...paraRest: string[]){

    console.log(para1 + "," + paraRest);

}

printParams("egy","ketto","harom");