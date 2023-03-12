
import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import ACartonyFemaleCharacter from './Objects/ACartonyFemaleCharacter.js';




// promt 1

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// promp 2

var geometry = new THREE.BoxGeometry(10, 0.1, 10);
var material = new THREE.MeshBasicMaterial( { color: 0x9b9b9b } );

// promp 3 
var floor = new THREE.Mesh(geometry, material);
scene.add(floor);


// promp 4 

camera.position.set(0, 1, 3);
camera.lookAt(0, 0, 0);

var light = new THREE.AmbientLight(0xffffff)
scene.add(light)

// promp 5


// var sphereGeometry = new THREE.SphereGeometry( 1, 32, 32 );
// var sphereMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
// var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
// sphere.position.set(0, 1, 2);
// scene.add(sphere);
// http://localhost:3000/public/a-cartoony-female-character.glb


const loader = new GLTFLoader();

let carton = ACartonyFemaleCharacter(loader, scene)
// scene.add(carton)
// loader.load( 'http://localhost:3000/public/a-cartoony-female-character2.glb', function ( gltf ) {

// 	scene.add( gltf.scene );

// }, undefined, function ( error ) {

// 	console.error( error );

// } );




function animate() {
    requestAnimationFrame( animate );
    
    // Lógica de movimiento del personaje
    // Por ejemplo, mueve el personaje hacia la derecha
    // floor.position.z += 0.1;
    // sphere.position.y += 0.2;
    
    
    
    renderer.render( scene, camera );
}
animate();
