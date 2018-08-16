class Animal {
    hunger: number;
    thirst: number;
    constructor(hunger: number = 50, thirst: number = 50){
        this.hunger = hunger;
        this.thirst = thirst;
    }
    eat(){
        this.hunger --;
    }
    drink(){
        this.thirst --;
    }
    play(){
        this.hunger ++;
        this.thirst ++;
    }
}

let cat: Animal = new Animal(40,40);
let dog: Animal = new Animal();
