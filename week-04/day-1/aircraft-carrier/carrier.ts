import { Aircraft } from "./aircraft";

class Carrier {
  storedAmmo: number;
  healthPoint: number;
  aircrafts: Aircraft[];
  totalDamage: number;
  constructor(storedAmmo: number, healthPoint: number) {
    this.healthPoint = healthPoint;
    this.storedAmmo = storedAmmo;
    this.aircrafts = [];
    this.totalDamage = this.aircrafts.
  }

  add(type: string) {

    this.aircrafts.push(new Aircraft(type));
  }

  fill() {
    if (this.storedAmmo == 0) {
      throw new Error("There is no ammo on this carrier");
    }
    this.aircrafts.forEach(element => {
      element.refill(this.storedAmmo);
    });
  }

  fight() {

  }

  getStatus() {
    console.log(`HP: ${this.healthPoint}, Aircraft count: ${this.aircrafts.length}, Ammo storage: ${this.storedAmmo}, Total damage: ${} `)
  }
}

let carrier1: Carrier = new Carrier(500, 400);
carrier1.add('F35');

console.log(carrier1.aircrafts);