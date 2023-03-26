const CubeObject = (THREE, scene, CubePhysics, world, env, camera) => {
    var move = 0
    let pysics = CubePhysics
    var boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    var boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0034 });
    var word_add = world.add(pysics);
    let boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(0, 0, 0)
    //GamePad(boxMesh)
    scene.add(boxMesh);

    var x0 = 0
    var x1 = 0
    var x2 = 0
    var x3 = 0
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
            case ' ':
                word_add.linearVelocity.set(0, 5, env.velocity);
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

    // const x = (e)=>{
    //     console.log(e.gamepad)
    //     // requestAnimationFrame(x(e))
    // }


    window.addEventListener(
        "gamepadconnected",
        (e) => {

            const update = () => {

                for (const gamepad of navigator.getGamepads()) {
                    if (!gamepad) continue;
                    x0 = gamepad.axes[0]
                    x1 = gamepad.axes[1]

                    x2 = gamepad.axes[2]
                    x3 = gamepad.axes[3]
                    word_add.linearVelocity.set(x0, 0, x1);
                    console.log(gamepad)
                    // camera.position.set(x0,0,x1)
                    // camera.position.set(x2 * 10, 4, x3 * 10)
                    // console.log('--->',camera.position, x0, x1)
                    // gamepad.hapticActuators.pulse(1.0, 200);



                    if (gamepad.buttons[7].touched) {
                        word_add.linearVelocity.set(0, 1, 0);
                        gamepad.vibrationActuator.playEffect("dual-rumble", {
                            startDelay: 0,
                            duration: 100,
                            weakMagnitude: 1.0,
                            strongMagnitude: 1.0,
                        });
                    }
                }
                requestAnimationFrame(update)
            }
            update()
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


    return {
        boxMesh: boxMesh,
        word_add: word_add
    }
}

export default CubeObject;
