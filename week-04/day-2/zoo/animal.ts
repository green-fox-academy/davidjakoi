export abstract class Animal {
  name: string;
  age: number;
  gender: string;
  isHungry: boolean;
  isThirsty: boolean;

  abstract getName();

  abstract breed();

  feed(){

  }
  getStatus(){

  }
}