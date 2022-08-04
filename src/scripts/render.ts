import * as THREE from "three";
import { InteractionManager, InteractiveEvent } from "three.interactive";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import type { DataSorter } from "./fetchData";
import { baseLog, randomPosition } from "./utilities";
import galaxy from "../assets/galaxy2.jpg";
import earthmap from "../assets/earthmap1k.jpg";
import earthbump from "../assets/earthbump.jpg";
import earthcloud from "../assets/earthCloud.png";
import moon from "../assets/moon.jpg";
import moonbump from "../assets/moonbump.jpg";
import asteroidImg from "../assets/asteroid.jpg";
import asteroidBump from "../assets/asteroidBump.jpg";

interface Animations {
  animate: boolean;
  cloud: THREE.Object3D[];
  earth: THREE.Object3D[];
  asteroids: THREE.Object3D[];
  moon: THREE.Object3D[];
  lunarEarth: THREE.Object3D[];
  earthOrbit: THREE.Object3D[];
  cameras: THREE.PerspectiveCamera[];
  functions: (() => void)[];
}

const animations: Animations = {
  animate: true,
  cloud: [],
  earth: [],
  asteroids: [],
  moon: [],
  lunarEarth: [],
  earthOrbit: [],
  cameras: [],
  functions: [],
};

const loader = new THREE.TextureLoader();

const createScene = (renderer: THREE.WebGLRenderer) => {
  const scene = new THREE.Scene();
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
  const far = 25;

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
  camera: THREE.PerspectiveCamera,
  manager: InteractionManager
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

    animations.earthOrbit.forEach((object) => {
      object.rotation.y = timeInSeconds * 0.005;
    });

    animations.cloud.forEach((object) => {
      object.rotation.y = timeInSeconds * 0.05;
    });

    animations.earth.forEach((object) => {
      object.rotation.y = timeInSeconds * 0.02;
    });

    animations.moon.forEach((object) => {
      object.rotation.y = timeInSeconds * 0.01;
    });

    animations.lunarEarth.forEach((object) => {
      object.rotation.y = timeInSeconds * 0.01;
    });

    animations.asteroids.forEach((object, ndx) => {
      object.rotation.y = timeInSeconds * 0.1 + ndx * 0.05;
      object.rotation.x = timeInSeconds * 0.1 + ndx * 0.01;
      object.rotation.z = timeInSeconds * 0.1 - ndx * 0.05;
    });

    animations.functions.forEach((func) => {
      func();
    });

    manager.update();

    if (animations.cameras.length === 0) {
      renderer.render(scene, camera);
    } else {
      animations.cameras[0].aspect = canvas.clientWidth / canvas.clientHeight;
      animations.cameras[0].updateProjectionMatrix();
      renderer.render(scene, animations.cameras[0]);
    }

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
  animations.earthOrbit.push(earthOrbit);
  return earthOrbit;
};

const createLunarEarthOrbit = (earthOrbit: THREE.Object3D) => {
  const lunarEarthOrbit = new THREE.Object3D();
  earthOrbit.add(lunarEarthOrbit);
  animations.lunarEarth.push(lunarEarthOrbit);
  return lunarEarthOrbit;
};

const createEarth = (base: THREE.Object3D) => {
  const earth = new THREE.Object3D();

  const geometry = new THREE.SphereGeometry(1);
  const cloudGeometry = new THREE.SphereGeometry(1.009);

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
  animations.earth.push(ground);
  animations.cloud.push(cloud);

  const myAxis = new THREE.Vector3(0, 0, 1);
  earth.rotateOnAxis(myAxis, THREE.MathUtils.degToRad(23.5));

  base.add(earth);

  return earth;
};

const createMoonOrbit = (earthOrbit: THREE.Object3D) => {
  const moonOrbit = new THREE.Object3D();
  moonOrbit.position.set(4, 0, 0);
  earthOrbit.add(moonOrbit);
  return moonOrbit;
};

const createMoon = (moonOrbit: THREE.Object3D) => {
  const geometry = new THREE.SphereGeometry(0.43);

  const moonTexture = loader.load(moon);
  const bumpTexture = loader.load(moonbump);
  const material = new THREE.MeshPhongMaterial({
    map: moonTexture,
    bumpMap: bumpTexture,
    bumpScale: 0.2,
  });

  const moonMesh = new THREE.Mesh(geometry, material);

  moonOrbit.add(moonMesh);
  animations.moon.push(moonMesh);
};

const shapeAsteroids = (position: THREE.BufferAttribute) => {
  const arrLike = position.array;
  let check = 0;
  const positionStore: number[][] = [[]];
  const positionArr = Array.from(arrLike);
  positionArr.forEach((number) => {
    if (check > 2) {
      check = 1;
      positionStore[positionStore.length] = [number];
    } else {
      positionStore[positionStore.length - 1].push(number);
      check += 1;
    }
  });

  const uniqueValues: number[][] = [];
  positionStore.forEach((arr) => {
    if (uniqueValues.length === 0) {
      uniqueValues.push(arr);
    } else {
      let val = true;
      uniqueValues.forEach((arr2) => {
        if (arr[0] === arr2[0] && arr[1] === arr2[1] && arr[2] === arr2[2]) {
          val = false;
        }
      });
      if (val) {
        uniqueValues.push(arr);
      }
    }
  });

  const preventMut: number[][] = [];
  uniqueValues.forEach((arr) => {
    const x = (arr[0] + -0.25 + Math.random() * 0.5).toFixed(1);
    const y = (arr[1] + -0.25 + Math.random() * 0.5).toFixed(1);
    const z = (arr[2] + -0.25 + Math.random() * 0.5).toFixed(1);

    positionStore.forEach((arr2, ndx) => {
      if (arr[0] === arr2[0] && arr[1] === arr2[1] && arr[2] === arr2[2]) {
        preventMut[ndx] = [parseFloat(x), parseFloat(y), parseFloat(z)];
      }
    });
  });

  const finalArr: number[] = [];

  preventMut.forEach((arr) => {
    const [x, y, z] = arr;
    finalArr.push(x);
    finalArr.push(y);
    finalArr.push(z);
  });

  position.set(finalArr);
};

const createAsteroids = (
  earthOrbit: THREE.Object3D,
  data: DataSorter,
  manager: InteractionManager,
  canvas: HTMLCanvasElement
) => {
  const neos = data.neoArr;

  const texture = loader.load(asteroidImg);
  const texture2 = loader.load(asteroidBump);

  for (let i = 0; i < neos.length; i += 1) {
    const neo = neos[i];
    const diameter = baseLog(data.averageDiameter(i) * 1000, 2);

    const asteroidOrbit = new THREE.Object3D();
    earthOrbit.add(asteroidOrbit);
    const { missDistance: distanceStr, id } = neo;
    const distance = parseFloat(distanceStr);

    const geometry = new THREE.IcosahedronGeometry(diameter);
    const material = new THREE.MeshPhongMaterial({
      map: texture,
      specular: "white",
      bumpMap: texture2,
      bumpScale: 0.1,
    });
    const asteroid = new THREE.Mesh(geometry, material);
    const random = randomPosition(id, baseLog(distance / 10, 13));
    asteroidOrbit.position.set(random.x, random.y, random.z);
    if (
      asteroid.geometry.attributes.position instanceof THREE.BufferAttribute
    ) {
      shapeAsteroids(asteroid.geometry.attributes.position);
    }
    asteroidOrbit.scale.set(0.009, 0.009, 0.009);
    asteroidOrbit.add(asteroid);

    const tempV = new THREE.Vector3();
    const camera = new THREE.PerspectiveCamera(25, 2, 0.1, 100);

    asteroid.updateWorldMatrix(true, false);
    asteroid.getWorldPosition(tempV);
    camera.position.set(tempV.x - 100, tempV.y, tempV.z);
    camera.scale.set(100, 100, 100);
    camera.lookAt(tempV);
    createOrbitControls(camera, canvas, tempV);
    animations.functions.push(() => {
      asteroid.getWorldPosition(tempV);
      camera.lookAt(tempV);
    });

    asteroidOrbit.add(camera);
    animations.asteroids.push(asteroid);

    asteroid.addEventListener("click", (e) => {
      if (e instanceof InteractiveEvent) {
        e.stopPropagation();
        animations.cameras = [];
        animations.cameras.push(camera);
        manager.remove(asteroid);
      }
    });
    asteroid.addEventListener("mouseover", (e) => {
      if (e instanceof InteractiveEvent) {
        e.stopPropagation();
        asteroid.material.emissive.setHex(0xffffff);
        document.body.style.cursor = "pointer";
      }
    });
    asteroid.addEventListener("mouseout", (e) => {
      if (e instanceof InteractiveEvent) {
        e.stopPropagation();
        asteroid.material.emissive.setHex(0x000000);
        document.body.style.cursor = "default";
      }
    });

    manager.add(asteroid);
  }
};

const init = (data: DataSorter) => {
  const canvas = document.querySelector("#c");
  const center = new THREE.Vector3(0, 0, 0);

  if (canvas instanceof HTMLCanvasElement) {
    const renderer = new THREE.WebGLRenderer({ canvas });
    const scene = createScene(renderer);
    const camera = createCamera(scene);
    const manager = new InteractionManager(renderer, camera, canvas, false);
    createOrbitControls(camera, canvas, center);
    createLighting(scene);
    const earthOrbit = createEarthOrbit(scene, center);
    const lunarEarthOrbit = createLunarEarthOrbit(earthOrbit);
    createEarth(lunarEarthOrbit);
    const moonOrbit = createMoonOrbit(lunarEarthOrbit);
    createMoon(moonOrbit);
    createAsteroids(earthOrbit, data, manager, canvas);
    renderer.render(scene, camera);
    animate(renderer, scene, camera, manager);
  }
};

export default init;
