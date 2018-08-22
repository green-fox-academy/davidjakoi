abstract class Instrument {
  protected name: string;

  abstract play()
}

abstract class stringedInstrument extends Instrument {
  numberOfStrings: number;
  noise: string;

  abstract sound();
}

class ElectricGuitar extends stringedInstrument{

  constructor(numberOfStrings:number = 6) {
   
    super();
    this.name = 'Electric Guitar';
    this.noise = 'Twang';
    this.numberOfStrings = numberOfStrings;
  }
  sound() {
    return this.noise;
  }
  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`);
  }
}
class BassGuitar extends stringedInstrument{

  constructor(numberOfStrings:number = 4) {
   
    super();
    this.name = 'Bass Guitar';
    this.numberOfStrings = numberOfStrings;
    this.noise = 'Duum-duum-duum';
  }
  sound() {
    return this.noise;
  }
  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`);
  }
}
class Violin extends stringedInstrument{

  constructor(numberOfStrings?:number) {
   
    super();
    this.name = 'Violin';
    
    this.numberOfStrings = 4;
    this.noise = 'Screech';
  }
  sound() {
    return this.noise;
  }
  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`);
  }
}
let guitar: ElectricGuitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

console.log('Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings .');
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();