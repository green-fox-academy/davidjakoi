
/*
let i1= 10;
let i2= 3;
let isquare=i2*i2;
let icube=i2*i2*i2;
let bigger=false;
if(i1>isquare && i1<icube){
    bigger=true;
    console.log(bigger);
}

let j=1521;

let k:string="Apple";
k=k.repeat(4);
console.log(k); */

let a: number=24;
let out:number=0;
if(a%2 == 0){
    out+=1;
}
console.log(out);

let b: number = 13;
let out2: string = '';

if(b>10 && b<20){
    out2="Sweet!";
}
else if(b<10){
    out2="Less!";
}
else if(b>20){
    out2="More!";
}

console.log(out2);

let c: number= 123;
let credits: number = 100;
let isBonus: boolean = false;

if(credits>=50 && isBonus==false){
    c-=2;
}else if(credits<50 && isBonus==false){
    c-=1;
}else if(isBonus){

}

console.log(c);

let d: number = 8;
let time: number = 120;
let out3: string = '';

if(d%4==0 && time<200){
    out3="check";
}else if(time>200){
    out3="Time out";
}else {
    out3="Run Forest Run!";
}

console.log(out3);
