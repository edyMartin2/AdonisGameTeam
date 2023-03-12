const SceneOne = (threeScene) => {
    const scene = new threeScene.Scene();
    const camera = new threeScene.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new threeScene.WebGLRenderer();
    return {
        camera,
        scene,
        renderer
    }
}

export default SceneOne