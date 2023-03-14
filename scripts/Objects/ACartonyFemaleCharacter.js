import properties from "../Engine/Properties.js";

const fps = properties.fps
const gravity_constant = properties.gravity
const velocity = properties.velocity

var jump_object;

const Jump = (gltf) => {
    let time_impulse = 0
    jump_object = setInterval(() => {

        gltf.scene.position.y += properties.impulse + time_impulse;
        console.log('subida', gltf.scene.position.y)
        time_impulse += 0.000981
    }, fps)
}

const physical = (gltf) => {
    var time = 0
    let position = gltf.scene.position.y
    setInterval(() => {
        if (position > 0) {
            time = time + 0.0981
            //console.log("mayor a cero", position, position > 0)
            position -= gravity_constant * time
            gltf.scene.position.y = position
        } else {
            clearInterval(this)
        }
    }, fps)
}

/*
const Jump = (gltf) => {
    jump_object = setInterval(() => {
        gltf.scene.position.y += properties.impulse;
        console.log('subida', gltf.scene.position.y)
    }, fps)
}
*/

/**
 * Se manda a llamar para setear los controles
 * @param {*} gltf objecto 3D
 */
const axisEvents = (gltf) => {

    document.addEventListener('keydown', (event) => {
        const keyCode = event.keyCode;
        keyDownAxis(keyCode, gltf)
    });

    document.addEventListener('keyup', (event) => {
        const keyCode = event.keyCode;
        keyUpAxis(keyCode, gltf)
    })
}

/**
 * Cuando el comando del control se suelta
 * @param {*} keyCode event key 
 * @param {*} gltf objeto 3D
 */
const keyUpAxis = (keyCode, gltf) => {
    switch (keyCode) {
        case 80:
            console.log("Boton salto se deja de precionar")
            clearInterval(jump_object)
            //physical(gltf)
            break;
    }
}

/**
 * Cuando el comando del control aprieta
 * @param {*} keyCode event key 
 * @param {*} gltf objeto 3D
 */
const keyDownAxis = (keyCode, gltf) => {

    switch (keyCode) {
        case 37:
            gltf.scene.position.x -= velocity;
            break;
        case 38:
            gltf.scene.position.z += velocity;
            break;
        case 39:
            gltf.scene.position.x += velocity;
            break;
        case 40:
            gltf.scene.position.z -= velocity;
            break;
        case 80:
            Jump(gltf)
            break
    }
}

/**
 * Se manda a llamar cuando el objeto 3D esta totalmente cargado
 * @param {*} object 3D Object
 * @param {*} scene scena donde se agrega el personaje
 */
const OnChargeObject = (object, scene) => {
    scene.add(object.scene)
    axisEvents(object)

}

const ACartonyFemaleCharacter = (loader, scene) => {
    loader.load('http://localhost:3000/public/a-cartoony-female-character.glb', (gltf) => { OnChargeObject(gltf, scene) });
}


export default ACartonyFemaleCharacter