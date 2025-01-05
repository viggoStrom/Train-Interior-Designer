"use strict";

const { TrainCar } = require("../train-car.js");

class Locomotive extends TrainCar {
    displayName = "Locomotive";

    constructor() {
        super();
    }
}

module.exports = { Locomotive };