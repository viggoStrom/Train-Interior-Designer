import * as THREE from "three";

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);
scene.add(new THREE.AmbientLight(0xffffff, 0.5));

// Camera
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight, false);
document.body.appendChild(renderer.domElement);

// Box
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshToonMaterial({ color: 0x11ff11, normalMap: new THREE.TextureLoader().load("https://threejsfundamentals.org/threejs/resources/images/wall.jpg") });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Lines on the box
const edges = new THREE.EdgesGeometry(geometry);
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 3 }));
cube.add(line);

const animate = () => {
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);