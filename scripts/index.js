import * as THREE from 'three';
import SceneOne from './Scenes/SceneOne.js';
import Cube from './Objects/Cube3D.js';

const { camera, scene, renderer } = SceneOne(THREE)
const { cube } = Cube(THREE)


renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
scene.add( cube );
camera.position.z = 5;


function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
}
animate();
