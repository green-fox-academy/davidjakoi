class Sharpie {
    color: string;
    width: number;
    inkAmount: number;
    constructor(color: string, width: number, inkAmount: number = 100){
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount;
    }
    use(){
        this.inkAmount -= 5;
    }
}

let sharpie1: Sharpie = new Sharpie('blue', 2);
sharpie1.use();
console.log(sharpie1);