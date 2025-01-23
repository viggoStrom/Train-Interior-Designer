/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/main.ts":
/*!*************************!*\
  !*** ./scripts/main.ts ***!
  \*************************/
/***/ (() => {

eval("\nclass Carriage {\n    defaultLayout = `\r\n    #####\r\n    # S #\r\n    D   D\r\n    #   #\r\n    # S #\r\n    #   #\r\n    D   D\r\n    # S #\r\n    #####\r\n    `;\n    map = [];\n    constructor(layout = this.defaultLayout) {\n        const explodedLayout = layout.trim().split(\"\\n\").map((row) => { row.trim(); return row.split(\"\"); });\n        explodedLayout.forEach((row, y) => {\n            row.forEach((cell, x) => {\n                if (cell === \"#\") {\n                    return this.map.push({ x, y, type: \"wall\" });\n                }\n                if (cell === \"S\") {\n                    return this.map.push({ x, y, type: \"seat\" });\n                }\n                if (cell === \"D\") {\n                    return this.map.push({ x, y, type: \"door\" });\n                }\n                if (cell === \" \") {\n                    return this.map.push({ x, y, type: \"floor\" });\n                }\n                else {\n                    throw new Error(`Invalid cell type: ${cell}`);\n                }\n            });\n        });\n    }\n}\nclass Locomotive extends Carriage {\n    constructor(layout) {\n        const defaultLayout = `\r\n        #####\r\n        #####\r\n        #####\r\n        #####\r\n        #####\r\n        #####\r\n        #####\r\n        #####\r\n        `;\n        super(layout || defaultLayout);\n        this.defaultLayout = defaultLayout;\n    }\n}\nclass Station {\n    dimensions = { x: 10, y: 20 };\n    map = [];\n    constructor(dimensions) {\n        if (dimensions)\n            this.dimensions = dimensions;\n        for (let y = 0; y < this.dimensions.y; y++) {\n            for (let x = 0; x < this.dimensions.x; x++) {\n                if (x === 0 || x === this.dimensions.x - 1 || y === 0 || y === this.dimensions.y - 1) {\n                    this.map.push({ x, y, type: \"floor\" });\n                }\n            }\n        }\n    }\n}\nconst carriage = new Carriage();\nconst locomotive = new Locomotive();\nconst station = new Station();\nconst canvas = document.createElement(\"canvas\");\ncanvas.width = 800;\ncanvas.height = 600;\ndocument.body.appendChild(canvas);\nconst canvasContext = canvas.getContext(\"bitmaprenderer\");\nif (!canvasContext)\n    throw Error(\"canvas context undefined\");\nconst view = new OffscreenCanvas(800, 600);\nconst ctx = view.getContext(\"2d\");\nif (!ctx)\n    throw Error(\"ctx missing\");\nctx.fillRect(50, 50, 50, 50);\nconst render = () => {\n    canvasContext.transferFromImageBitmap(view.transferToImageBitmap());\n};\nrender();\n\n\n//# sourceURL=webpack://train-interior-designer/./scripts/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/main.ts"]();
/******/ 	
/******/ })()
;