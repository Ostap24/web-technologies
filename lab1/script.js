console.log(`
Інструкція з використання:
triangle(значення1, "тип1", значення2, "тип2");
Доступні типи: "leg", "hypotenuse", "adjacent angle", "opposite angle", "angle".
Наприклад: triangle(7, "leg", 18, "hypotenuse");
`);
function triangle(value1, type1, value2, type2) {

    const toRadians = (degrees) => (degrees * Math.PI) / 180;
    const toDegrees = (radians) => (radians * 180) / Math.PI;

    if (value1 <= 0 || value2 <= 0) {
        console.log("Zero or negative input");
        return "Zero or negative input";
    }

    let a, b, c, alpha, beta;

    const types = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];
    if (!types.includes(type1) || !types.includes(type2)) {
        console.log("Incorrect type. Please read the instruction again.");
        return "failed";
    }

    if ((type1 === "leg" && type2 === "hypotenuse") || (type1 === "hypotenuse" && type2 === "leg")) {
        const leg = type1 === "leg" ? value1 : value2;
        const hypotenuse = type1 === "hypotenuse" ? value1 : value2;
        if (leg >= hypotenuse) {
            console.log("Leg cannot be greater than or equal to the hypotenuse");
            return "Leg cannot be greater than or equal to the hypotenuse";
        }
        a = leg;
        c = hypotenuse;
        b = Math.sqrt(c ** 2 - a ** 2);
        alpha = toDegrees(Math.asin(a / c));
        beta = 90 - alpha;
    } else if ((type1 === "leg" && type2 === "leg") || (type1 === "leg" && type2 === "leg")) {
        a = value1;
        b = value2;
        c = Math.sqrt(a ** 2 + b ** 2);
        alpha = toDegrees(Math.atan(a / b));
        beta = 90 - alpha;
    } else if ((type1 === "leg" && type2 === "opposite angle") || (type1 === "opposite angle" && type2 === "leg")) {
        const leg = type1 === "leg" ? value1 : value2;
        const oppositeAngle = type1 === "opposite angle" ? value1 : value2;
        if (oppositeAngle >= 90) {
            console.log("Angle must be less than 90 degrees");
            return "Angle must be less than 90 degrees";
        }
        a = leg;
        alpha = oppositeAngle;
        c = a / Math.sin(toRadians(alpha));
        b = Math.sqrt(c ** 2 - a ** 2);
        beta = 90 - alpha;
    } else if ((type1 === "hypotenuse" && type2 === "angle") || (type1 === "angle" && type2 === "hypotenuse")) {
        const hypotenuse = type1 === "hypotenuse" ? value1 : value2;
        const angle = type1 === "angle" ? value1 : value2;
        if (angle >= 90) {
            console.log("Angle must be less than 90 degrees");
            return "Angle must be less than 90 degrees";
        }
        c = hypotenuse;
        alpha = angle;
        a = c * Math.sin(toRadians(alpha));
        b = Math.sqrt(c ** 2 - a ** 2);
        beta = 90 - alpha;
    } else {
        console.log("Unsupported combination of types. Please read the instruction again.");
        return "failed";
    }

    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);
    console.log(`alpha = ${alpha}`);
    console.log(`beta = ${beta}`);

    return "success";
}

triangle(7, "leg", 18, "hypotenuse");
triangle(60, "opposite angle", 5, "leg");
triangle(43.13, "angle", -2, "hypotenuse");
