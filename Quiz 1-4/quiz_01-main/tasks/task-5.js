function Vehicle(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

Vehicle.prototype.getDetails = function() {
  return `${this.brand} ${this.model}`;
}

function Car(brand, model, year, doorCount) {
  Vehicle.call(this, brand, model, year);
  this.doorCount = doorCount;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.getDetails = function() {
  return `${this.brand} ${this.model} - Doors: ${this.doorCount}`;
}

function Motorcycle(brand, model, year, engineType) {
  Vehicle.call(this, brand, model, year);
  this.engineType = engineType;
}

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;
Motorcycle.prototype.getDetails = function() {
  return `${this.brand} ${this.model} - Engine: ${this.engineType}`;
}
// Test cases
const car = new Car("Toyota", "Camry", 2020, 4);    
const motorcycle = new Motorcycle("Honda", "CBR", 2021, "Electric");
console.log(car.getDetails()); // should print: "Toyota Camry - Doors: 4"
console.log(motorcycle.getDetails()); // should print: "Honda CBR - Engine: Electric"