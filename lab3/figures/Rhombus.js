import Square from './Square.js';
class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this._alpha = alpha;
        this._beta = beta;
    }

    static help() {
        console.log("Rhombus is a quadrilateral with all sides equal, but angles are not 90°.");
    }
    get alpha() {
        return this._alpha;
    }

    set alpha(value) {
        this._alpha = value;
    }

    get beta() {
        return this._beta;
    }

    set beta(value) {
        this._beta = value;
    }

    length() {
        console.log(`Perimeter of rhombus: ${4 * this.a}`);
    }

    square() {
        const area = this.a * this.a * Math.sin(this.alpha * Math.PI / 180);
        console.log(`Area of rhombus: ${area}`);
    }

    info() {
        console.log(`Rhombus Info:
      - Side Length: ${this.a}
      - Angles: ${this.alpha}°, ${this.beta}°
      - Sum of Sides: ${4 * this.a}
      - Area: ${this.a * this.a * Math.sin(this.alpha * Math.PI / 180)}`);
    }
}

export default Rhombus;
