
import { OrbitControls } from "https://unpkg.com/three@0.112/examples/jsm/controls/OrbitControls.js"
import * as THREE from 'three'

//Objects
import OnlineWord from "./Scenes/OnlineWord.js"
import Word from "./Engine/Word.js"
import FlourObject from "./Objects/FlourObject.js"
import CubeObject from "./Objects/CubeObject.js"
// Physics 
import WordPhysics from './Physics/WordPhysics.js'
import FloorPhysics from './Physics/FloorPhysics.js'
import CubePhysics from './Physics/CubePhysics.js'



// importamos y creamos el primer mundo donde se llevara a cabo la historia
const {
    scene,
    camera,
    renderer
} = OnlineWord(THREE)


// Crear el mundo de física Oimo.js
const world = new OIMO.World(WordPhysics)

// importamos el piso
const flour = FlourObject(THREE, scene);
world.add(FloorPhysics)

// Crear un objeto Three.js para el objeto que cae
const { boxMesh, BoxPhysics } = CubeObject(THREE, scene, CubePhysics)

// Crear un cuerpo rígido Oimo.js para el objeto que cae


// crea un objeto de control para la cámara
// new OrbitControls(camera, renderer.domElement);

// Animar la escena y actualizar la simulación de física en cada cuadro
function animate() {
    var boxBody = world.add(BoxPhysics);
    requestAnimationFrame(animate);
    boxMesh.position.copy(boxBody.getPosition());
    boxMesh.quaternion.copy(boxBody.getQuaternion());
    world.step();
    renderer.render(scene, camera);
}
animate()