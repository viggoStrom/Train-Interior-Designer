"use strict";
class Carriage {
    defaultLayout = `
    #####
    # S #
    D   D
    #   #
    # S #
    #   #
    D   D
    # S #
    #####
    `;
    map = [];
    constructor(layout = this.defaultLayout) {
        const explodedLayout = layout.trim().split("\n").map((row) => { row.trim(); return row.split(""); });
        explodedLayout.forEach((row, y) => {
            row.forEach((cell, x) => {
                if (cell === "#") {
                    return this.map.push({ x, y, type: "wall" });
                }
                if (cell === "S") {
                    return this.map.push({ x, y, type: "seat" });
                }
                if (cell === "D") {
                    return this.map.push({ x, y, type: "door" });
                }
                if (cell === " ") {
                    return this.map.push({ x, y, type: "floor" });
                }
                else {
                    throw new Error(`Invalid cell type: ${cell}`);
                }
            });
        });
    }
}
class Locomotive extends Carriage {
    constructor(layout) {
        const defaultLayout = `
        #####
        #####
        #####
        #####
        #####
        #####
        #####
        #####
        `;
        super(layout || defaultLayout);
        this.defaultLayout = defaultLayout;
    }
}
class Station {
    dimensions = { x: 10, y: 20 };
    map = [];
    constructor(dimensions) {
        if (dimensions)
            this.dimensions = dimensions;
        for (let y = 0; y < this.dimensions.y; y++) {
            for (let x = 0; x < this.dimensions.x; x++) {
                if (x === 0 || x === this.dimensions.x - 1 || y === 0 || y === this.dimensions.y - 1) {
                    this.map.push({ x, y, type: "floor" });
                }
            }
        }
    }
}
const carriage = new Carriage();
const locomotive = new Locomotive();
const station = new Station();
const canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);
const canvasContext = canvas.getContext("bitmaprenderer");
if (!canvasContext)
    throw Error("canvas context undefined");
const view = new OffscreenCanvas(800, 600);
const ctx = view.getContext("2d");
if (!ctx)
    throw Error("ctx missing");
ctx.fillRect(50, 50, 50, 50);
const render = () => {
    canvasContext.transferFromImageBitmap(view.transferToImageBitmap());
};
render();
