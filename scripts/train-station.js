"use strict";

const { htmlFromString } = require("./utils/html-from-string.js");

class TrainStation {
    displayName = "MISSING NAME";

    trains = []; // Trains at this station

    platforms = 2; // Maximum number of trains that can be at this station
    length = 5; // Maximum number of cars that can be at this station
    capacity = 20; // Maximum number of passengers that can be at this station
    passengers = 0; // Number of passengers at this station waiting for a train

    constructor(displayName) {
        this.displayName = displayName || this.displayName;
        this.displayName += " Station";
    }
    
    DOM = this.generateDOM();

    generateDOM() {
        const note = this.trains.length > this.platforms ? "Station full" : "";

        const stationContainer = htmlFromString(`
            <div class="train-station">
                <div class="header">
                    <p class="station-name">${this.displayName}</p>
                    <p class="passengers">${this.passengers} passengers</p>
                </div>
        
                <div class="platforms">
                    <p class="note">${note}</p>
                    <ol class="list"></ol>
                </div>
            </div>`);

        const stationList = stationContainer.querySelector(".list");

        for (let index = 0; index < this.platforms; index++) {
            stationList.appendChild(htmlFromString(`<li>${this.trains.at(index)?.displayName || ""}</li>`));
        }

        if (this.trains.length > this.platforms) {
            stationList.appendChild(htmlFromString(`<li>...and ${this.trains.length - this.platforms} more waiting</li>`));
        }

        return stationContainer;
    }
}

module.exports = { TrainStation };