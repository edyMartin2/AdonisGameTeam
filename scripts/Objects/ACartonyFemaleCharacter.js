const Jump = () => {
}

const physical = (gltf) => {
    document.addEventListener('keyup', (event) => {
        const keyCode = event.keyCode;

        if (keyCode === 80) {
            let position = gltf.scene.position.y
            setInterval(()=>{
                if (position > 0){
                    console.log("mayor a cero", position , position > 0);
                    position -= 0.003
                    gltf.scene.position.y = position
                } else{
                    clearInterval(this)
                }
            }, 10)
        }
    });
}

const axisEvents = (gltf) => {
    document.addEventListener('keydown', (event) => {
        const keyCode = event.keyCode;

        // Mover el modelo hacia la izquierda
        if (keyCode === 37) {
            gltf.scene.position.x -= 0.1;
        }

        // Mover el modelo hacia arriba
        if (keyCode === 38) {
            gltf.scene.position.z += 0.1;
        }

        // Mover el modelo hacia la derecha
        if (keyCode === 39) {
            gltf.scene.position.x += 0.1;
        }

        // Mover el modelo hacia abajo
        if (keyCode === 40) {
            gltf.scene.position.z -= 0.1;
        }

        if (keyCode === 80) {
            gltf.scene.position.y += 0.2

        }
    });
}


const OnChargeObject = (object, scene) => {
    scene.add(object.scene)
    axisEvents(object)
    physical(object)
}


const ACartonyFemaleCharacter = (loader, scene) => {
    loader.load('http://localhost:3000/public/a-cartoony-female-character.glb', (gltf) => { OnChargeObject(gltf, scene) });
}


export default ACartonyFemaleCharacter