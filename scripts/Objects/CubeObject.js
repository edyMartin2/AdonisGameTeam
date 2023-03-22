
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
        
        switch (action) {
            case 'ArrowRight':
                pysics.pos = [10,10,0]
                word_add.linearVelocity.set(0.5, 3,0);
                console.log('hola', word_add.position)
                camera.position.set(word_add.position.x,3,word_add.position.z)
                break;
            
        }
    })

    return { 
        boxMesh :boxMesh, 
        word_add : word_add
    }
}

export default CubeObject;