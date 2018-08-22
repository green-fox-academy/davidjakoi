import { Animal } from "./animal";

export class Mammal extends Animal {

  constructor(name) {
    super();
    this.name = name;
  }

  breed() {
    return "pushing miniature versions out.";
  }
  getName() {
    return this.name;
  }

}