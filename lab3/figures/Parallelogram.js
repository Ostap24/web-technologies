import Rectangle from './Rectangle.js';
class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("Parallelogram is a quadrilateral with opposite sides equal and opposite angles equal.");
    }

    length() {
        console.log(`Perimeter of parallelogram: ${2 * (this.a + this.b)}`);
    }

    square() {
        const area = this.a * this.b * Math.sin(this.alpha * Math.PI / 180);
        console.log(`Area of parallelogram: ${area}`);
    }

    info() {
        console.log(`Parallelogram Info:
      - Side Lengths: ${this.a}, ${this.b}
      - Angles: ${this.alpha}°, ${this.beta}°
      - Sum of Sides: ${2 * (this.a + this.b)}
      - Area: ${this.a * this.b * Math.sin(this.alpha * Math.PI / 180)}`);
    }
}

export default Parallelogram;
