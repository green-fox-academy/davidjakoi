import { Tree } from "./tree";
import { Flower } from "./flower";

export class Garden {
  currentWaterAmount: number;
  colour: string;
  type: string;
  thirstLevel: number;
  trees: Tree[] = [];
  flowers: Flower[] = [];
  plants: Garden[] = [];

  constructor(colour?: string, type?: string, thirstLevel?: number) {
    this.colour = colour;
    this.type = type;
    this.thirstLevel = thirstLevel;
  }

  watering(waterAmount: number) {
    for(let i: number = 0; i< this.plants.length; i++){
      this.plants[i].currentWaterAmount += waterAmount / this.plants.length;
    }
    this.getStatus(this.plants);
  }

  addTree(tree: Tree) {
    this.trees.push(tree);
  }

  addFlower(flower: Flower) {
    this.flowers.push(flower);
  }

  needWater() {
    if (this.currentWaterAmount < this.thirstLevel) {
      return 'needs water';
    } else {
      return 'doesnt need water';
    }
  }

  getStatus(plants: any[]) {
    for (let i: number = 0; i < plants.length; i++) {
      console.log(`The ${plants[i].colour} ${plants[i].type} ${plants[i].needWater()}.`);
    }
  }
}