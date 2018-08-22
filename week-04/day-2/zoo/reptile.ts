import { Animal } from "./animal";

export class Reptile extends Animal{

  constructor(name) {
    super();
    this.name = name;
  }


  breed() {
    return "laying eggs.";
  }
  getName(){
    return this.name;
  }

}