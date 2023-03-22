/**
 * @param {THREE} es el objecto de Threejs
 * @returns {camera, scene, render}
 */
export default (THREE) => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 3, 3);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    return {
        camera,
        scene,
        renderer
    }
}