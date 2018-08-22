export class Aircraft {
  type: string;
  maxAmmo: number;
  baseDamage: number;
  ammo: number;
  damage: number;
  allDamage: number;

  constructor(type: string) {
    this.type = type;
    this.ammo = 0;
    this.allDamage = this.damage * this.ammo;
    if (type == 'F16') {
      this.baseDamage = 30;
      this.maxAmmo = 8;
    } else if (type == 'F35') {
      this.baseDamage = 50;
      this.maxAmmo = 12;
    }
  }

 
  fight() {
    this.ammo = 0;
    this.damage = this.damage * this.ammo;
  }

  refill(amount: number){
    this.ammo = amount -(amount - this.maxAmmo);
    return amount - this.maxAmmo;
  }

  getType() {
    return this.type;
  }

  getStatus() {
    console.log(`Type ${this.type}, Ammo: ${this.ammo}, Base damage: ${this.baseDamage}, All damage: ${this.allDamage}`);
  }

  isPriority() {
    if (this.type == 'F35') {
      return true;
    } else {
      return false;
    }
  }
}

