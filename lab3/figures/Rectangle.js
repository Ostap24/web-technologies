import Square from './Square.js';

class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("Rectangle is a quadrilateral with opposite sides equal.");
    }

    length() {
        console.log(`Perimeter of rectangle: ${2 * (this.a + this.b)}`);
    }

    square() {
        console.log(`Area of rectangle: ${this.a * this.b}`);
    }

    info() {
        console.log(`Rectangle Info:
      - Side Lengths: ${this.a}, ${this.b}
      - Angles: 90° (all four)
      - Sum of Sides: ${2 * (this.a + this.b)}
      - Area: ${this.a * this.b}`);
    }
}

export default Rectangle;
