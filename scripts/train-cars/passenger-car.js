"use strict";

const { TrainCar } = require("../train-car.js");

class PassengerCar extends TrainCar {
    displayName = "Passenger Car";

    capacity = 5;

    constructor() {
        super();
    }
}

module.exports = { PassengerCar };