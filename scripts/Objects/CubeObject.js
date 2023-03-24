function gameLoop() {
    const gp = navigator.getGamepads()[0];

    if (gp.buttons[0].value > 0 || gp.buttons[0].pressed) {
        b--;
    } else if (gp.buttons[1].value > 0 || gp.buttons[1].pressed) {
        a++;
    } else if (gp.buttons[2].value > 0 || gp.buttons[2].pressed) {
        b++;
    } else if (gp.buttons[3].value > 0 || gp.buttons[3].pressed) {
        a--;
    }

    ball.style.left = `${a * 2}px`; // ball is a UI widget
    ball.style.top = `${b * 2}px`;

    requestAnimationFrame(gameLoop);
}

const CubeObject = (THREE, scene, CubePhysics, world, env) => {
    var move = 0
    let pysics = CubePhysics
    var boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    var boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0034 });
    var word_add = world.add(pysics);
    let boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(0, 0, 0)
    //GamePad(boxMesh)
    scene.add(boxMesh);


    document.addEventListener('keydown', (event) => {
        var action = event.key;
        console.log(event)
        move += 10
        switch (action) {
            case 'ArrowRight':
                word_add.linearVelocity.set(env.velocity, 0, 0);
                break;
            case 'ArrowLeft':

                word_add.linearVelocity.set(- env.velocity, 0, 0);
                break
            case 'ArrowUp':
                word_add.linearVelocity.set(0, 0, - env.velocity);

                break
            case 'ArrowDown':
                word_add.linearVelocity.set(0, 0, env.velocity);
                break

        }

        // camera.position.set(word_add.position.x,3,parseFloat(word_add.position.z)+2.5)
    })



    const gamepads = {};

    function gamepadHandler(event, connecting) {
        const gamepad = event.gamepad;
        // Note:
        // gamepad === navigator.getGamepads()[gamepad.index]
        if (connecting) {
            console.log("Hola mundo", event)
            gamepads[gamepad.index] = gamepad;
        } else {
            delete gamepads[gamepad.index];
        }
    }

    window.addEventListener(
        "gamepadconnected",
        (e) => {
            gamepadHandler(e, true);
        },
        false
    );
    window.addEventListener(
        "gamepaddisconnected",
        (e) => {
            gamepadHandler(e, false);
        },
        false
    );

    console.log('---->', gamepads)
    gameLoop()

    return {
        boxMesh: boxMesh,
        word_add: word_add
    }
}

export default CubeObject;
