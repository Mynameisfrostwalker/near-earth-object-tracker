import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GUI } from "lil-gui";
import galaxy from "../assets/galaxy.png";
import earthmap from "../assets/earthmap1k.jpg";
import earthbump from "../assets/earthbump.jpg";
import earthcloud from "../assets/earthCloud.png";
import moon from "../assets/moon.jpg";
import moonbump from "../assets/moonbump.jpg";

const objects: THREE.Mesh[] = [];

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
  camera.position.set(0, 0, 5);

  scene.add(camera);

  return camera;
};

const createOrbitControls = (
  camera: THREE.PerspectiveCamera,
  canvas: HTMLCanvasElement,
  center: THREE.Vector3
) => {
  const controls = new OrbitControls(camera, canvas);
  controls.target.copy(center).add(new THREE.Vector3(-1, -1, 0));
  controls.update();
};

const createLighting = (scene: THREE.Scene) => {
  const color = 0xffffff;
  const intensity = 1;
  const lighting = new THREE.DirectionalLight(color, intensity);
  lighting.position.set(2, 2, 4);
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

    objects.forEach((object, ndx) => {
      object.rotation.y = timeInSeconds * 0.02 + 0.02 * ndx;
    });

    renderer.render(scene, camera);

    window.requestAnimationFrame(render);
  };
  window.requestAnimationFrame(render);
};

const createEarthOrbit = (scene: THREE.Scene, center: THREE.Vector3) => {
  const earthOrbit = new THREE.Object3D();
  earthOrbit.position.set(center.x, center.y, center.z);
  const myAxis = new THREE.Vector3(1, -1, 0);
  earthOrbit.rotateOnAxis(myAxis, THREE.MathUtils.degToRad(23.5));
  scene.add(earthOrbit);
  return earthOrbit;
};

const createEarth = (base: THREE.Object3D) => {
  const earth = new THREE.Object3D();

  const geometry = new THREE.SphereGeometry(1);
  const cloudGeometry = new THREE.SphereGeometry(1.009);

  const loader = new THREE.TextureLoader();
  const texture = loader.load(earthmap);
  const bumpTexture = loader.load(earthbump);
  const cloudTexture = loader.load(earthcloud);

  const material = new THREE.MeshPhongMaterial({
    map: texture,
    bumpMap: bumpTexture,
    bumpScale: 0.6,
  });
  const cloudMaterial = new THREE.MeshPhongMaterial({
    map: cloudTexture,
    transparent: true,
    opacity: 0.5,
  });

  const ground = new THREE.Mesh(geometry, material);
  const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);

  earth.add(ground);
  earth.add(cloud);
  objects.push(ground);
  objects.push(cloud);

  const myAxis = new THREE.Vector3(0, 0, 1);
  earth.rotateOnAxis(myAxis, THREE.MathUtils.degToRad(23.5));

  base.add(earth);

  return earth;
};

const createMoonOrbit = (earthOrbit: THREE.Object3D) => {
  const moonOrbit = new THREE.Object3D();
  moonOrbit.position.x = 2;
  earthOrbit.add(moonOrbit);
  return moonOrbit;
};

const createMoon = (moonOrbit: THREE.Object3D) => {
  const geometry = new THREE.SphereGeometry(0.43);

  const loader = new THREE.TextureLoader();
  const moonTexture = loader.load(moon);
  const bumpTexture = loader.load(moonbump);
  const material = new THREE.MeshPhongMaterial({
    map: moonTexture,
    bumpMap: bumpTexture,
    bumpScale: 0.2,
  });

  const moonMesh = new THREE.Mesh(geometry, material);

  moonOrbit.add(moonMesh);
  objects.push(moonMesh);
};

const init = () => {
  const canvas = document.querySelector("#c");
  const center = new THREE.Vector3(1, 1, 0);

  if (canvas instanceof HTMLCanvasElement) {
    const renderer = new THREE.WebGLRenderer({ canvas });
    const scene = createScene(renderer);
    const camera = createCamera(scene);
    createOrbitControls(camera, canvas, center);
    createLighting(scene);
    const earthOrbit = createEarthOrbit(scene, center);
    createEarth(earthOrbit);
    const moonOrbit = createMoonOrbit(earthOrbit);
    createMoon(moonOrbit);
    renderer.render(scene, camera);
    animate(renderer, scene, camera);
  }
};

export default init;
