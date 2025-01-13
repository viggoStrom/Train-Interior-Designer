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

eval("\n// import * as THREE from \"three\";\n// import { OrbitControls } from \"three/examples/jsm/controls/OrbitControls.js\";\nconst map = `\r\n        #####\r\n        #####\r\n        #####\r\nP       #####\r\n        #####\r\n        #####\r\n        #####\r\n         ||| \r\n        #####\r\n        # S #\r\nP       D   D\r\n        #   #\r\n        # S #\r\n        #   #\r\n        D   D\r\nP       # S #\r\n        #####\r\n`;\nconst canvas = document.createElement(\"canvas\");\ndocument.body.appendChild(canvas);\nconst ctx = canvas.getContext(\"2d\");\nif (!ctx)\n    throw new Error(\"Could not get 2d context\");\nconst tileSize = 50;\nconst widestRowWidth = Math.max(...map.split(\"\\n\").map((row) => row.length));\ncanvas.width = tileSize * (widestRowWidth + 2);\ncanvas.height = tileSize * map.split(\"\\n\").length;\nctx.fillStyle = \"black\";\nconst mapArray = map.split(\"\\n\").map((row) => row.split(\"\"));\nmapArray.forEach((row, y) => {\n    row.forEach((cell, x) => {\n        x++;\n        if (cell === \"#\") {\n            ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);\n        }\n        if (cell === \"P\") {\n            ctx.fillStyle = \"red\";\n            ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);\n            ctx.fillStyle = \"black\";\n        }\n    });\n});\n// // Scene\n// const scene = new THREE.Scene();\n// scene.background = new THREE.Color(0x111111);\n// // Renderer\n// const renderer = new THREE.WebGLRenderer({ antialias: true });\n// renderer.setSize(window.innerWidth, window.innerHeight);\n// document.body.appendChild(renderer.domElement);\n// // Camera\n// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);\n// camera.position.set(0, 10, 0);\n// camera.lookAt(0, 0, 0);\n// // Orbit controls\n// const controls = new OrbitControls(camera, renderer.domElement);\n// // Sun\n// const sun = new THREE.PointLight(0xffffff, 10000);\n// sun.position.set(0, 80, 0);\n// scene.add(sun);\n// // Ground\n// const ground = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), new THREE.MeshToonMaterial({ color: 0x47a03d }));\n// ground.position.set(0, -1, 0);\n// ground.rotation.x = -Math.PI / 2; // Face up\n// scene.add(ground);\n// const trainColor = 0x666666;\n// // Train\n// const floor = new THREE.Mesh(new THREE.BoxGeometry(4, 0.5, 8), new THREE.MeshToonMaterial({ color: trainColor }));\n// floor.position.set(0, 0.25, 0);\n// scene.add(floor);\n// // Camera ball\n// const cameraBall = new THREE.Mesh(new THREE.SphereGeometry(0.1), new THREE.MeshToonMaterial({ color: 0x0000ff }));\n// cameraBall.position.set(0, 1, 0);\n// scene.add(cameraBall);\n// // Stats\n// const stats = new Stats(); // Imported in the HTML file\n// stats.showPanel(0);\n// document.body.appendChild(stats.dom);\n// const animate = () => {\n//     stats.begin();\n//     // Draw ball the the cameras focal point\n//     cameraBall.position.copy(camera.position);\n//     cameraBall.position.add(camera.getWorldDirection(new THREE.Vector3()).multiplyScalar(10));\n//     stats.end();\n//     renderer.render(scene, camera);\n// };\n// renderer.setAnimationLoop(animate);\n\n\n//# sourceURL=webpack://train-interior-designer/./scripts/main.ts?");

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