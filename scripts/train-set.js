"use strict";

const { htmlFromString } = require("./utils/html-from-string.js");

class TrainSet {
    displayName = "Train Set";

    cars = [];
    length = () => this.cars.length;

    destination = null; // Station 
    origin = null; // Station

    departureTime = null;
    arrivalTime = null;

    speed = 0; // km/h
    acceleration = 0;

    nominalPower = 0; // How many cars can be pulled at the nominal speed

    constructor(displayName, cars) {
        this.displayName = displayName || this.displayName;
        this.cars = cars;
    }

    DOM = this.generateDOM();

    arrive(station) {
        station.trains.push(this);
    }

    generateDOM() {
        const trainSetContainer = htmlFromString(`
            <div class="train-set">
                <div class="header">
                    <p class="train-name">${this.displayName}</p>
                    <p>${this.origin?.displayName || "from"} - ${this.destination?.displayName || "to"}</p>
                </div>
        
                <div class="schedule">
                    <p>Speed ${this.speed} km/h</p>
                    <p>${this.departureTime || "--:--"} - ${this.arrivalTime || "--:--"}</p>
                </div>
        
                <div class="train-cars">
                    <p class="note">Nominal power</p>
                    <ol class="list"></ol>
                </div>
            </div>`);

        const trainSetList = trainSetContainer.querySelector(".list");

        // Add the cars to display them
        this.cars.forEach(car => {
            const carContainer = htmlFromString(`<li>${car.displayName}</li>`);
            trainSetList.appendChild(carContainer);
        });

        return trainSetContainer;
    }
}

module.exports = { TrainSet };