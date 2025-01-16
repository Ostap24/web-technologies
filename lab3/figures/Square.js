class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("Square is a quadrilateral with four equal sides.");
    }

    length() {
        console.log(`Perimeter of square: ${this.a * 4}`);
    }

    square() {
        console.log(`Area of square: ${this.a * this.a}`);
    }

    info() {
        console.log(`Square Info:
      - Side Length: ${this.a}
      - Angles: 90° (all four)
      - Sum of Sides: ${this.a * 4}
      - Area: ${this.a * this.a}`);
    }
}

export default Square;
