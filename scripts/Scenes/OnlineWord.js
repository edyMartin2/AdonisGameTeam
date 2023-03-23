/**
 * @param {THREE} es el objecto de Threejs
 * @returns {camera, scene, render}
 */
export default (THREE) => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0.07248039867463675, 5.187222277305211,3.518569349434932);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    return {
        camera,
        scene,
        renderer
    }
}