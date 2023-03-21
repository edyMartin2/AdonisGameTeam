
const GamePad = (object) => {
    var y = 0
    document.addEventListener('keydown', (event) => {
        var action = event.key;
        switch (action) {
            case 'ArrowRight':
                y += 1
                console.log('entramos', y)
                object.position.set(y, y, y)
                
                break;
        }
    })
}

const CubeObject = (THREE, scene, CubePhysics) => {
    var move = 0
    var boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    var boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0034 });
    let boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(3,14,14)
    //GamePad(boxMesh)
    scene.add(boxMesh);
    

    let pysics = CubePhysics
    document.addEventListener('keydown', (event) => {
        var action = event.key;
        move ++
        console.log('hola', move)
        switch (action) {
            case 'ArrowRight':
                pysics.pos = [move,move,move]
                break;
        }
    })

    return { 
        boxMesh :boxMesh, 
        BoxPhysics : pysics
    }
}

export default CubeObject;