export default (THREE, scene, world) => {
    // Crear un objeto Three.js para el piso
    var floorGeometry = new THREE.BoxGeometry(10, 0.5, 10);
    var floorMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
    floorMesh.position.set(0, 1, 2);

    scene.add(floorMesh);
} 