
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

const CubeObject = (THREE, scene, CubePhysics, world, camera) => {
    var move = 0
    let pysics = CubePhysics
    var boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    var boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0034 });
    var word_add = world.add(pysics);
    let boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(0,0,0)
    //GamePad(boxMesh)
    scene.add(boxMesh);
    
    
    document.addEventListener('keydown', (event) => {
        var action = event.key;
        move += 10
        console.log(action)
        switch (action) {
            case 'ArrowRight':
                word_add.linearVelocity.set(0.5, 3,0);
                break;
            case 'ArrowLeft':
                word_add.linearVelocity.set(-0.5, 3,0);
                break
            case 'ArrowUp':
                word_add.linearVelocity.set(0, 3,0.5);
                break
            case 'ArrowDown':
                word_add.linearVelocity.set(0, 3,-0.5);
                break
            
        }
    })

    return { 
        boxMesh :boxMesh, 
        word_add : word_add
    }
}

export default CubeObject;
