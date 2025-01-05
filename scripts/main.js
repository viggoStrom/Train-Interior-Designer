"use strict";

const { TrainSet } = require("./train-set.js");
const { TrainStation } = require("./train-station.js");

const { Locomotive } = require("./train-cars/locomotive.js");
const { PassengerCar } = require("./train-cars/passenger-car.js");


const x52PassengerTrain = new TrainSet(
    "Passenger Train x52",
    [
        new Locomotive(),
        new PassengerCar(),
        new PassengerCar(),
        new PassengerCar(),
    ]
);

const hebyStation = new TrainStation("Heby");

document.querySelector("section.stations").appendChild(hebyStation.DOM);
document.querySelector("section.trains").appendChild(x52PassengerTrain.DOM);

document.addEventListener("click", () => {
    x52PassengerTrain.destination = hebyStation;
});

// Main loop
const frame = () => {
    // Update the DOM
    x52PassengerTrain.DOM.replaceWith(x52PassengerTrain.generateDOM());
    hebyStation.DOM.replaceWith(hebyStation.generateDOM());

    window.requestAnimationFrame(frame);
};
window.requestAnimationFrame(frame);