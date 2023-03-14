
import { OrbitControls } from "https://unpkg.com/three@0.112/examples/jsm/controls/OrbitControls.js";
import * as THREE from 'three';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 3, 3);
camera.lookAt(0, 0, 0);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


var light = new THREE.AmbientLight(0xffffff)
scene.add(light)

// Crear el mundo de física Oimo.js
var world = new OIMO.World({
    timestep: 1 / 60,
    iterations: 8,
    broadphase: 2,
    worldscale: 1,
    random: true,
    info: false
});

// Crear un objeto Three.js para el piso
var floorGeometry = new THREE.BoxGeometry(100, 100, 100);
var floorMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
var floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
floorMesh.position.set(0, 1, 2);
scene.add(floorMesh);


// Crear un cuerpo rígido Oimo.js para el piso
var floorBody = world.add({
    type: 'box',
    size: [20, 0.1, 20],
    pos: [0, -0.05, 0], // Colocar el piso justo debajo del origen (0, 0, 0)
    move: false, // El piso no se mueve, por lo que no necesita moverse en la simulación de física
    density: 1,
    friction: 0.2,
    restitution: 0.2
});

// Crear un objeto Three.js para el objeto que cae
var boxGeometry = new THREE.BoxGeometry(1, 1, 1);
var boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0034 });
var boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(boxMesh);
boxMesh.position.set(1, 1, 1)
// Crear un cuerpo rígido Oimo.js para el objeto que cae
var boxBody = world.add({
    type: 'box',
    size: [1, 1, 1],
    pos: [0, 10, 0], // Colocar el objeto 10 unidades por encima del piso
    move: true, // El objeto debe moverse en la simulación de física
    density: 1,
    friction: 0.2,
    restitution: 0.2
});
// crea un objeto de control para la cámara
var controls = new OrbitControls(camera, renderer.domElement);



// Animar la escena y actualizar la simulación de física en cada cuadro
function animate() {
    requestAnimationFrame(animate);
    boxMesh.position.copy(boxBody.getPosition());
    boxMesh.quaternion.copy(boxBody.getQuaternion());
    world.step();
    renderer.render(scene, camera);
}
animate()