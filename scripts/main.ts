// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";


const map = `
        #####
        #####
        #####
P       #####
        #####
        #####
        #####
         ||| 
        #####
        # S #
P       D   D
        #   #
        # S #
        #   #
        D   D
P       # S #
        #####
`;

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");
if (!ctx) throw new Error("Could not get 2d context");

const tileSize = 50;
const widestRowWidth = Math.max(...map.split("\n").map((row) => row.length));
canvas.width = tileSize * (widestRowWidth + 2);
canvas.height = tileSize * map.split("\n").length;

ctx.fillStyle = "black";

const mapArray = map.split("\n").map((row) => row.split(""));
mapArray.forEach((row, y) => {
    row.forEach((cell, x) => {
        x++;

        if (cell === "#") {
            ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
        }

        if (cell === "P") {
            ctx.fillStyle = "red";
            ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            ctx.fillStyle = "black";
        }
    });
});




// // Scene
// const scene = new THREE.Scene();
// scene.background = new THREE.Color(0x111111);

// // Renderer
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Camera
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
// camera.position.set(0, 10, 0);
// camera.lookAt(0, 0, 0);
// // Orbit controls
// const controls = new OrbitControls(camera, renderer.domElement);

// // Sun
// const sun = new THREE.PointLight(0xffffff, 10000);
// sun.position.set(0, 80, 0);
// scene.add(sun);

// // Ground
// const ground = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), new THREE.MeshToonMaterial({ color: 0x47a03d }));
// ground.position.set(0, -1, 0);
// ground.rotation.x = -Math.PI / 2; // Face up
// scene.add(ground);

// const trainColor = 0x666666;

// // Train
// const floor = new THREE.Mesh(new THREE.BoxGeometry(4, 0.5, 8), new THREE.MeshToonMaterial({ color: trainColor }));
// floor.position.set(0, 0.25, 0);
// scene.add(floor);


// // Camera ball
// const cameraBall = new THREE.Mesh(new THREE.SphereGeometry(0.1), new THREE.MeshToonMaterial({ color: 0x0000ff }));
// cameraBall.position.set(0, 1, 0);
// scene.add(cameraBall);


// // Stats
// const stats = new Stats(); // Imported in the HTML file
// stats.showPanel(0);
// document.body.appendChild(stats.dom);

// const animate = () => {
//     stats.begin();

//     // Draw ball the the cameras focal point
//     cameraBall.position.copy(camera.position);
//     cameraBall.position.add(camera.getWorldDirection(new THREE.Vector3()).multiplyScalar(10));

//     stats.end();
//     renderer.render(scene, camera);
// };
// renderer.setAnimationLoop(animate);