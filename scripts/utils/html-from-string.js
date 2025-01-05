"use strict";

const htmlFromString = (string) => {
    const launderer = document.createElement("div");
    launderer.innerHTML = string.trim();
    return launderer.firstElementChild;
};

module.exports = { htmlFromString };