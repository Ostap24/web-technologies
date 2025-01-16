export function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

Truck.prototype.trip = function() {
    if (!this.driver) {
        console.log("No driver assigned");
    } else {
        var nightDrivingStatus = this.driver.nightDriving ? "drives at night" : "does not drive at night";
        console.log("Driver " + this.driver.name + " " + nightDrivingStatus + " and has " + this.driver.experience + " years of experience");
    }
};
