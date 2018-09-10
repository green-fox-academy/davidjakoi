import { Flower } from "./flower";
import { Tree } from "./tree";
import { Garden } from "./garden";

let garden: Garden = new Garden();

let flower1: Flower = new Flower('yellow', 'Flower', 5);
let flower2: Flower = new Flower('blue', 'Flower', 5);

let tree1: Tree = new Tree('purple', 'Tree', 10);
let tree2: Tree = new Tree('orange', 'Tree', 10);

garden.addTree(tree1);
garden.addTree(tree2);
garden.addFlower(flower1);
garden.addFlower(flower2);

garden.getStatus(garden.trees);
garden.getStatus(garden.flowers);

for (let i: number = 0; i < garden.trees.length; i++) {
  garden.plants.push(garden.trees[i]);
  
}

for (let i: number = 0; i < garden.flowers.length; i++) {
  garden.plants.push(garden.flowers[i]);
}

console.log(garden.plants);

garden.watering(40);