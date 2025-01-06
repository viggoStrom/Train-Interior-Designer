"use strict";

const { htmlFromString } = require("./utils/html-from-string");

//
// Cars
//
class TrainCar { // Should not be instantiated directly
    constructor() {
        this.name = "MISSING NAME";
        this.capacity = 0;
        this.passengers = 0;
    }
}
class Locomotive extends TrainCar {
    constructor() {
        super();
        this.name = "Locomotive";
    }
}
class PassengerCar extends TrainCar {
    constructor() {
        super();
        this.name = "Passenger Car";
        this.capacity = 10;
        this.passengers = 0;
    }
}

//
// Train
//
class TrainSet {
    constructor(name, ...cars) {
        this.name = name;
        this.cars = cars;

        this.stationIndex = 0;
    }
}

//
// Station
//
class Station {
    constructor({ name, distance, passengers = 0 }) {
        this.name = `${name} Station`;
        this.distance = distance;
        this.passengers = passengers;
    }
}

const stations = [
    new Station({ name: "Heby", passengers: 5 }),
    new Station({ name: "Uppsala", passengers: 10 }),
    new Station({ name: "Stockholm", passengers: 20 }),
    new Station({ name: "Södertälje", passengers: 15 }),
    new Station({ name: "Malmö", passengers: 25 }),
    new Station({ name: "Ystad", passengers: 5 }),
    new Station({ name: "Simrishamn", passengers: 5 }),
    new Station({ name: "Kristianstad", passengers: 5 }),
    new Station({ name: "Hässleholm", passengers: 5 }),
    new Station({ name: "Alvesta", passengers: 5 }),
    new Station({ name: "Växjö", passengers: 5 }),
    new Station({ name: "Nässjö", passengers: 5 }),
    new Station({ name: "Tranås", passengers: 5 }),
    new Station({ name: "Mjölby", passengers: 5 }),
    new Station({ name: "Linköping", passengers: 5 }),
    new Station({ name: "Norrköping", passengers: 5 }),
    new Station({ name: "Katrineholm", passengers: 5 }),
    new Station({ name: "Flen", passengers: 5 }),
    new Station({ name: "Eskilstuna", passengers: 5 }),
    new Station({ name: "Arboga", passengers: 5 }),
    new Station({ name: "Köping", passengers: 5 }),
    new Station({ name: "Västerås", passengers: 5 }),
    new Station({ name: "Örebro", passengers: 5 }),
    new Station({ name: "Karlstad", passengers: 5 }),
    new Station({ name: "Kristinehamn", passengers: 5 }),
    new Station({ name: "Hagfors", passengers: 5 }),
    new Station({ name: "Mora", passengers: 5 }),
    new Station({ name: "Falun", passengers: 5 }),
    new Station({ name: "Borlänge", passengers: 5 }),
    new Station({ name: "Gävle", passengers: 5 }),
    new Station({ name: "Söderhamn", passengers: 5 }),
    new Station({ name: "Hudiksvall", passengers: 5 }),
    new Station({ name: "Sundsvall", passengers: 5 }),
    new Station({ name: "Härnösand", passengers: 5 }),
    new Station({ name: "Örnsköldsvik", passengers: 5 }),
    new Station({ name: "Umeå", passengers: 5 }),
    new Station({ name: "Skellefteå", passengers: 5 }),
    new Station({ name: "Piteå", passengers: 5 }),
    new Station({ name: "Luleå", passengers: 5 }),
    new Station({ name: "Boden", passengers: 5 }),
    new Station({ name: "Kiruna", passengers: 5 }),
    new Station({ name: "Gällivare", passengers: 5 }),
    new Station({ name: "Arvidsjaur", passengers: 5 }),
    new Station({ name: "Östersund", passengers: 5 }),
    new Station({ name: "Sveg", passengers: 5 }),
    new Station({ name: "Storlien", passengers: 5 }),
    new Station({ name: "Åre", passengers: 5 }),
    new Station({ name: "Duved", passengers: 5 }),
    new Station({ name: "Östersund", passengers: 5 }),
    new Station({ name: "Bräcke", passengers: 5 }),
    new Station({ name: "Krokom", passengers: 5 }),
    new Station({ name: "Ås", passengers: 5 }),
    new Station({ name: "Östersund", passengers: 5 }),
];

stations.map(station => {
    const base = station.passengers;
    station.passengers = Math.floor(base + Math.random() * -base / 2);
});

const myTrain = new TrainSet(
    "x52 9033",
    new Locomotive(),
    new PassengerCar(),
);

const updateDOM = () => {
    // Station
    const station = stations[myTrain.stationIndex];
    const stationSection = document.querySelector("section.station");
    stationSection.querySelector(".name").textContent = station.name;
    stationSection.querySelector(".passengers").textContent = `${station.passengers} passengers`;
    stationSection.querySelector(".passenger-pool").innerHTML = new Array(station.passengers).fill(`<div></div>`).join("");

    // Train
    const trainSection = document.querySelector("section.train");
    trainSection.querySelector(".name").textContent = myTrain.name;
    trainSection.querySelector(".cars").innerHTML = "<p>Cars</p>" + myTrain.cars.map(car => `
    <li>
        ${car.name}
        <span${car.passengers === car.capacity ? " class='dim'" : ''}>
        (${car.passengers}/${car.capacity})</span>
    </li>`.trim()).join("");

    trainSection.querySelector(".train-car-pools").innerHTML = "";
    myTrain.cars.forEach(car => {
        const carPool = document.createElement("div");
        carPool.innerHTML = new Array(car.passengers).fill(`<div></div>`).join("");
        trainSection.querySelector(".train-car-pools").appendChild(carPool);
    });
};

window.ToggleDoors = () => {
    // Update door status in the DOM
    const doorStatus = document.querySelector(".door-status");
    doorStatus.textContent = doorStatus.textContent === "Open" ? "Closed" : "Open";

    if (doorStatus.textContent === "Closed") return;

    const station = stations.at(myTrain.stationIndex);
    if (myTrain.cars[1].capacity - myTrain.cars[1].passengers > station.passengers) {
        myTrain.cars[1].passengers += station.passengers;
        station.passengers = 0;
    }

    updateDOM();
};

window.NextStation = () => {
    myTrain.stationIndex++;
    updateDOM();
};

updateDOM();
setInterval(updateDOM, 500);