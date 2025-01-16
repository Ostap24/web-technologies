function Painter(color) {
    return function (obj) {
        if (obj.type) {
            console.log(`${color} ${obj.type}`);
        } else {
            console.log("No ‘type’ property occurred!");
        }
    };
}

export default Painter;
