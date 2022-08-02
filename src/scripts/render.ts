import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import galaxy from "../assets/galaxy.png";

const createScene = (renderer: THREE.WebGLRenderer) => {
  const scene = new THREE.Scene();
  const loader = new THREE.TextureLoader();
  const texture = loader.load(galaxy, () => {
    if (texture.image instanceof HTMLImageElement) {
      const rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
      rt.fromEquirectangularTexture(renderer, texture);
      scene.background = rt.texture;
    }
  });
  return scene;
};

const createCamera = (scene: THREE.Scene) => {
  const fov = 75;
  const aspect = 2;
  const near = 0.1;
  const far = 100;

  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;

  scene.add(camera);

  return camera;
};

const createOrbitControls = (
  camera: THREE.PerspectiveCamera,
  canvas: HTMLCanvasElement
) => {
  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 0, 0);
  controls.update();
};

const createLighting = (scene: THREE.Scene) => {
  const color = 0xffffff;
  const intensity = 1;
  const lighting = new THREE.DirectionalLight(color, intensity);
  lighting.position.set(-1, 2, 4);
  scene.add(lighting);

  const ambientLight = new THREE.AmbientLight(color, intensity / 5);
  scene.add(ambientLight);
};

const resizeRendererToDisplaySize = (renderer: THREE.WebGLRenderer) => {
  const canvas = renderer.domElement;
  const needsResize =
    canvas.clientWidth !== canvas.width ||
    canvas.clientHeight !== canvas.height;

  if (needsResize) {
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
  }

  return needsResize;
};

const animate = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const render = (time: number) => {
    const timeInSeconds = time * 0.001;

    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();

    if (resizeRendererToDisplaySize(renderer)) {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);

    window.requestAnimationFrame(render);
  };
  window.requestAnimationFrame(render);
};

const init = () => {
  const canvas = document.querySelector("#c");

  if (canvas instanceof HTMLCanvasElement) {
    const renderer = new THREE.WebGLRenderer({ canvas });
    const scene = createScene(renderer);
    const camera = createCamera(scene);
    createOrbitControls(camera, canvas);
    createLighting(scene);
    renderer.render(scene, camera);
    animate(renderer, scene, camera);
  }
};

export default init;
