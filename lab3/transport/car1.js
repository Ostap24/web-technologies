export const car1 = new Object();
car1.color = "red";
car1.maxSpeed = 150;
car1.driver = new Object();
car1.driver.name = "Ivan Ivanov";
car1.driver.category = "C";
car1.driver.personalLimitations = "No driving at night";
car1.tuning = true;
car1.numberOfAccidents = 0;

car1.drive = function() {
    console.log("I am not driving at night");
};
