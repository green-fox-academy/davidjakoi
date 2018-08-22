interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {
  days: string[] = ['MON','TUE','WED','THU','FRI','SAT','SUN'];
  lettersAndNumbers: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','0','1','2','3','4','5','6','7','8','9'];
  finalCode: string = "";

  getDowBooking(): string {
    return this.days[Math.floor(Math.random()*7)];
  }  
  getCodeBooking(): string {
    this.finalCode = "";
    for(let i: number = 0; i<8; i++){
      this.finalCode = this.finalCode.concat(this.lettersAndNumbers[Math.floor(Math.random()*34)]);
    }
    return this.finalCode.toUpperCase();
  }
}

let reservation1: Reservation = new Reservation;

for(let i: number = 0; i< 10; i++){
  console.log(`Booking# ${reservation1.getCodeBooking()} for ${reservation1.getDowBooking()}`);
}

