class Car {
  constructor(name, accelerationPower, brakingPower, fuelCapacity) {
    this.name = name;
    this.accelerationPower = accelerationPower;
    this.brakingPower = brakingPower;
    this.speed = 0;
    this.fuelLevel = fuelCapacity;
    this.maxFuelCapacity = fuelCapacity;
  }

  accelerate() {
    if (this.fuelLevel > 0) {
      this.speed += this.accelerationPower;
      this.consumeFuel();
      console.log(`Accelerating. Current speed: ${this.speed} m/s`);
    } else {
      console.log('Out of fuel. Cannot accelerate.');
    }
  }

  brake() {
    this.speed -= this.brakingPower;
    if (this.speed < 0) {
      this.speed = 0;
    }
    console.log(`Brakes applied. Current speed: ${this.speed} m/s`);
  }

  checkSpeed() {
    return this.speed;
  }

  refuel() {
    this.fuelLevel = this.maxFuelCapacity;
    console.log('Refueled to maximum capacity.');
  }

  consumeFuel() {
    // Assuming a constant fuel consumption rate for simplicity
    const fuelConsumptionRate = 1;
    this.fuelLevel -= fuelConsumptionRate;
    if (this.fuelLevel < 0) {
      this.fuelLevel = 0;
    }
  }

  drive(duration, interval) {
    let time = 0;
    while (time < duration && this.fuelLevel > 0) {
      if (time % interval === 0) {
        this.accelerate();
      } else {
        this.brake();
      }
      console.log(`Time: ${time}s, Speed: ${this.speed} m/s, Fuel Level: ${this.fuelLevel}`);
      time++;
    }

    if (this.fuelLevel === 0) {
      console.log('Ran out of fuel during the drive.');
    }
  }
}
// Create a new car instance
const myCar = new Car('Toyota', 5, 3, 50);

// Test methods
console.log('Initial Speed:', myCar.checkSpeed());
myCar.accelerate();
console.log('Speed after accelerating:', myCar.checkSpeed());
myCar.brake();
console.log('Speed after braking:', myCar.checkSpeed());
myCar.refuel();

// Simulate a driving session
console.log('Starting a driving session...');
myCar.drive(10, 2);
