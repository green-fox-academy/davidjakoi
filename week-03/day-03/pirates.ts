class Pirate {
  rumValue: number = 0;
  isAlive: boolean = true;
  isCaptain: boolean = false;
  isPassedOut: boolean = false;

  constructor(isCaptain: boolean = false) {
    this.isCaptain = isCaptain;
  }
  drinkSomeRum() {
    if (this.isAlive == true) {
      this.rumValue++;
    } else {
      console.log('He is dead.');
    }
  }
  howsItGoingMate() {
    if (this.rumValue > 0 && this.isAlive == true) {
      for (let i: number = 0; i < Math.random() * 4; i++) {
        console.log('Pour me anudder!');
      }
    } else if (this.isAlive == true) {
      console.log(`'Arghh, I'ma Pirate. How d'ya d'ink its goin?'`);
    } else {
      console.log('He is dead.');
    }
  }
  die() {
    this.isAlive = false;
  }
  brawl(enemy) {
    let result: number = Math.floor(Math.random() * 3);
    if (result == 0) {
      this.die();

    } else if (result == 1) {
      enemy.die();
    }
    else {
      enemy.isPassedOut = true;
      this.isPassedOut = true;
    }
    console.log(result);
  }
}

class Ship {
  crew: Pirate[] = [];
  captain: Pirate;
  numberOfAlivePirates: number = 0;
  fillShip() {
    for (let i: number = 0; i < 1 + Math.floor(Math.random() * 10); i++) {
      this.crew.push(new Pirate);
    }

    this.crew.forEach(element => {
      if (element.isAlive == true) {
        this.numberOfAlivePirates++;
      }
    });
    this.captain = new Pirate(true);
    console.log('Captain consumed ' + this.captain.rumValue + ' rum and he is passed out: ' + this.captain.isPassedOut + ' and alive? ' + this.captain.isAlive);
    console.log('Number of alive pirates on this ship: ' + this.crew.length);
  }
  battle(enemyShip): boolean {
    let result1: number = this.numberOfAlivePirates - this.captain.rumValue;
    let result2: number = enemyShip.numberOfAlivePirates - enemyShip.captain.rumValue;
    if (result1 > result2) {
      this.captain.rumValue += 1 + Math.floor(Math.random() * 2);
      this.crew.forEach(element => {
        element.rumValue += 1 + Math.floor(Math.random() * 2);
      });
      enemyShip.crew.forEach(element => {
        if ((Math.floor(Math.random() * 2)) == 1) {
          element.die();
        }
      });
      enemyShip.crew.forEach(element => {
        if (element.isAlive == false) {
          enemyShip.numberOfAlivePirates--;
        }
      });
      return true;
      console.log(this.crew);
    } else {
      enemyShip.captain.rumValue += 1 + Math.floor(Math.random() * 2);
      enemyShip.crew.forEach(element => {
        element.rumValue += 1 + Math.floor(Math.random() * 2);
      });
      this.crew.forEach(element => {
        if ((Math.floor(Math.random() * 2)) == 1) {
          element.die();
        }
      });
      this.crew.forEach(element => {
        if (element.isAlive == false) {
          this.numberOfAlivePirates--;
        }
      });
      return false;
    }
  }
}

class BattleApp {
  ship1: Ship;
  ship2: Ship;
  constructor() {
    this.ship1 = new Ship;
    this.ship2 = new Ship;
    this.ship1.fillShip();
    this.ship2.fillShip();
    this.ship1.battle(this.ship2);
  }
}

let battle1: BattleApp = new BattleApp();
console.log(battle1.ship1.numberOfAlivePirates);
console.log(battle1.ship2.numberOfAlivePirates);