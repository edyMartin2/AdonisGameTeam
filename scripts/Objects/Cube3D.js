const Cube3D = (threeScene) => {
    const geometry = new threeScene.BoxGeometry(1, 1, 1);
    const material = new threeScene.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new threeScene.Mesh(geometry, material);
    return {
        cube
    }
}


export default Cube3D