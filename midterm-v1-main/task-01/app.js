class Shape {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  getInfo() {
    return `This is a ${this.name} and its color is ${this.color}`;
  }
}

class Circle extends Shape {
  constructor(name, color, radius) {
    super(name, color);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getInfo() {
    return `This is a ${this.name} and its color is ${this.color}. It has a radius of ${this.radius}`;
  }
}

class Rectangle extends Shape {
  constructor(name, color, width, height) {
    super(name, color);
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getInfo() {
    return `This is a ${this.name} and its color is ${this.color}. It has width ${this.width} and height ${this.height}`;
  }
}

// Test cases
const circle = new Circle("circle", "red", 5);
const rectangle = new Rectangle("rectangle", "blue", 4, 6);

console.log(circle.getInfo());
console.log(rectangle.getInfo());
console.log(circle.getArea());
console.log(rectangle.getArea());

