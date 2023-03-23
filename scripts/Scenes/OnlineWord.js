/**
 * @param {THREE} es el objecto de Threejs
 * @returns {camera, scene, render}
 */
export default (THREE) => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 900);
    //camera.zoom(3) 

    camera.position.set(1, 1,1);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    document.body.appendChild(renderer.domElement);

    return {
        camera,
        scene,
        renderer
    }
}