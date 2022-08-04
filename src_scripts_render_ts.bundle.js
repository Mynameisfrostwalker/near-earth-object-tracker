"use strict";
(self["webpackChunknear_earth_object_tracker"] = self["webpackChunknear_earth_object_tracker"] || []).push([["src_scripts_render_ts"],{

/***/ "./src/scripts/display.ts":
/*!********************************!*\
  !*** ./src/scripts/display.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayAsteroidInfo": function() { return /* binding */ displayAsteroidInfo; },
/* harmony export */   "initialDisplay": function() { return /* binding */ initialDisplay; }
/* harmony export */ });
/* harmony import */ var _assets_space_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/space.mp3 */ "./src/assets/space.mp3");
/* harmony import */ var _assets_space_ogg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/space.ogg */ "./src/assets/space.ogg");



var createAudio = function createAudio() {
  var audio = document.createElement("audio");
  audio.classList.add("space");
  audio.setAttribute("autoplay", "true");
  audio.setAttribute("loop", "true");
  var source = document.createElement("source");
  source.src = _assets_space_mp3__WEBPACK_IMPORTED_MODULE_0__;
  source.type = "audio/mpeg";
  audio.appendChild(source);
  var source2 = document.createElement("source");
  source2.src = _assets_space_ogg__WEBPACK_IMPORTED_MODULE_1__;
  source2.type = "audio/ogg";
  audio.appendChild(source2);
  return audio;
};

var initialDisplay = function initialDisplay() {
  var container = document.querySelector(".container");

  if (container instanceof HTMLElement) {
    var soundDiv = document.createElement("div");
    soundDiv.classList.add("soundDiv");
    var sound = false;
    var microDiv = document.createElement("div");
    microDiv.classList.add("microDiv");
    var i = document.createElement("i");
    i.classList.add("fas", "fa-microphone-slash");
    microDiv.appendChild(i);
    var audio = createAudio();
    microDiv.appendChild(audio);
    soundDiv.appendChild(microDiv);
    microDiv.addEventListener("click", function () {
      if (!sound) {
        sound = true;
        audio.play().then(function () {
          var microDiv2 = document.querySelector(".microDiv");
          var soundDiv2 = document.querySelector(".soundDiv");
          var audio2 = document.querySelector("audio");

          if (microDiv2 && soundDiv2 && audio2) {
            microDiv2.replaceChildren();
            var i2 = document.createElement("i");
            i2.classList.add("fas", "fa-microphone");
            microDiv2.appendChild(i2);
            microDiv2.appendChild(audio2);
            soundDiv2.appendChild(microDiv2);
          }
        }).catch(function () {
          console.log("Audio failed to play!");
        });
      } else {
        sound = false;
        var audio2 = document.querySelector("audio");
        var microDiv2 = document.querySelector(".microDiv");
        var soundDiv2 = document.querySelector(".soundDiv");

        if (microDiv2 && soundDiv2 && audio2) {
          audio2.pause();
          microDiv2.replaceChildren();
          var i2 = document.createElement("i");
          i2.classList.add("fas", "fa-microphone-slash");
          microDiv2.appendChild(i2);
          microDiv2.appendChild(audio2);
          soundDiv2.appendChild(microDiv2);
        }
      }
    });
    container.appendChild(soundDiv);
  }
};

var displayDiv1Info = function displayDiv1Info(asteroidInfo) {
  var div1 = document.createElement("div");
  div1.classList.add("div1");
  var nameDiv = document.createElement("div");
  nameDiv.classList.add("nameDiv");
  nameDiv.textContent = "Name: ".concat(asteroidInfo.name);
  div1.appendChild(nameDiv);
  var magnitudeDiv = document.createElement("div");
  magnitudeDiv.classList.add("magnitudeDiv");
  magnitudeDiv.textContent = "Absolute Magnitude: ".concat(asteroidInfo.absoluteMagnitude);
  div1.appendChild(magnitudeDiv);
  var velocityDiv = document.createElement("div");
  velocityDiv.classList.add("velocityDiv");
  velocityDiv.textContent = "Relative velocity: ".concat(asteroidInfo.relativeVelocity, " km/s");
  div1.appendChild(velocityDiv);
  return div1;
};

var displayDiv2Info = function displayDiv2Info(asteroidInfo) {
  var div2 = document.createElement("div");
  div2.classList.add("div2");
  var maxDiameterDiv = document.createElement("div");
  maxDiameterDiv.classList.add("maxDiameterDiv");
  maxDiameterDiv.textContent = "Maximum estimated diameter: ".concat(asteroidInfo.estimatedDiameterMax, " km");
  div2.appendChild(maxDiameterDiv);
  var minDiameterDiv = document.createElement("div");
  minDiameterDiv.classList.add("minDiameterDiv");
  minDiameterDiv.textContent = "Minimum estimated diameter: ".concat(asteroidInfo.estimatedDiameterMin, " km");
  div2.appendChild(minDiameterDiv);
  return div2;
};

var displayDiv3Info = function displayDiv3Info(asteroidInfo, revertFunction) {
  var div3 = document.createElement("div");
  div3.classList.add("div3");
  var hazardDiv = document.createElement("div");
  hazardDiv.classList.add("hazardDiv");
  var iconDiv = document.createElement("div");
  var i = document.createElement("i");
  var textDiv = document.createElement("div");

  if (asteroidInfo.potentiallyHazardous) {
    i.classList.add("fas", "fa-exclamation-triangle");
    iconDiv.appendChild(i);
    hazardDiv.appendChild(iconDiv);
    textDiv.textContent = "Asteroid is potentially hazardous!";
    hazardDiv.appendChild(textDiv);
    hazardDiv.classList.add("hazard");
  } else {
    i.classList.add("fas", "fa-check-circle");
    iconDiv.appendChild(i);
    hazardDiv.appendChild(iconDiv);
    textDiv.textContent = "Asteroid is not potentially hazardous!";
    hazardDiv.appendChild(textDiv);
    hazardDiv.classList.add("not-hazard");
  }

  div3.appendChild(hazardDiv);
  var backDiv = document.createElement("div");
  backDiv.classList.add("backDiv");
  var backIcon = document.createElement("div");
  var backI = document.createElement("i");
  backI.classList.add("fas", "fa-arrow-alt-circle-left");
  backIcon.appendChild(backI);
  backDiv.appendChild(backIcon);
  var backText = document.createElement("text");
  backText.textContent = "Back to Earth View";
  backDiv.appendChild(backText);
  backDiv.addEventListener("click", revertFunction);
  div3.appendChild(backDiv);
  return div3;
};

var displayDiv4Info = function displayDiv4Info(asteroidInfo) {
  var div4 = document.createElement("div");
  div4.classList.add("div4");
  var closestApproachDiv = document.createElement("div");
  closestApproachDiv.classList.add("closestApproachDiv");
  closestApproachDiv.textContent = "Closest approach date: ".concat(asteroidInfo.closestApproachDate);
  div4.appendChild(closestApproachDiv);
  var missDistanceDiv = document.createElement("div");
  missDistanceDiv.classList.add("missDistanceDiv");
  missDistanceDiv.textContent = "Miss distance: ".concat(parseFloat(asteroidInfo.missDistance).toFixed(1), " km");
  div4.appendChild(missDistanceDiv);
  var orbitingBodyDiv = document.createElement("div");
  orbitingBodyDiv.classList.add("orbitingBodyDiv");
  orbitingBodyDiv.textContent = "Orbiting body: ".concat(asteroidInfo.orbitingBody);
  div4.appendChild(orbitingBodyDiv);
  return div4;
};

var displayAsteroidInfo = function displayAsteroidInfo(asteroidInfo, revertFunction) {
  var container = document.querySelector(".container");

  if (container instanceof HTMLElement) {
    var infoDiv = document.createElement("div");
    infoDiv.classList.add("info");
    container.appendChild(infoDiv);

    var revert = function revert() {
      container.removeChild(infoDiv);
      revertFunction();
    };

    var div1 = displayDiv1Info(asteroidInfo);
    var div2 = displayDiv2Info(asteroidInfo);
    var div3 = displayDiv3Info(asteroidInfo, revert);
    var div4 = displayDiv4Info(asteroidInfo);
    infoDiv.appendChild(div1);
    infoDiv.appendChild(div2);
    infoDiv.appendChild(div3);
    infoDiv.appendChild(div4);
  }
};



/***/ }),

/***/ "./src/scripts/render.ts":
/*!*******************************!*\
  !*** ./src/scripts/render.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_interactive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three.interactive */ "./node_modules/three.interactive/build/three.interactive.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./src/scripts/utilities.ts");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display */ "./src/scripts/display.ts");
/* harmony import */ var _assets_galaxy2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/galaxy2.jpg */ "./src/assets/galaxy2.jpg");
/* harmony import */ var _assets_earthmap1k_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/earthmap1k.jpg */ "./src/assets/earthmap1k.jpg");
/* harmony import */ var _assets_earthbump_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/earthbump.jpg */ "./src/assets/earthbump.jpg");
/* harmony import */ var _assets_earthCloud_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/earthCloud.png */ "./src/assets/earthCloud.png");
/* harmony import */ var _assets_moon_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/moon.jpg */ "./src/assets/moon.jpg");
/* harmony import */ var _assets_moonbump_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/moonbump.jpg */ "./src/assets/moonbump.jpg");
/* harmony import */ var _assets_asteroid_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/asteroid.jpg */ "./src/assets/asteroid.jpg");
/* harmony import */ var _assets_asteroidBump_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/asteroidBump.jpg */ "./src/assets/asteroidBump.jpg");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var animations = {
  animate: true,
  cloud: [],
  earth: [],
  asteroids: [],
  moon: [],
  lunarEarth: [],
  earthOrbit: [],
  cameras: [],
  functions: []
};
var loader = new three__WEBPACK_IMPORTED_MODULE_12__.TextureLoader();

var createScene = function createScene(renderer) {
  var scene = new three__WEBPACK_IMPORTED_MODULE_12__.Scene();
  var texture = loader.load(_assets_galaxy2_jpg__WEBPACK_IMPORTED_MODULE_4__, function () {
    if (texture.image instanceof HTMLImageElement) {
      var rt = new three__WEBPACK_IMPORTED_MODULE_12__.WebGLCubeRenderTarget(texture.image.height);
      rt.fromEquirectangularTexture(renderer, texture);
      scene.background = rt.texture;
    }
  });
  return scene;
};

var createCamera = function createCamera(scene) {
  var fov = 75;
  var aspect = 2;
  var near = 0.1;
  var far = 25;
  var camera = new three__WEBPACK_IMPORTED_MODULE_12__.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 5);
  scene.add(camera);
  return camera;
};

var createOrbitControls = function createOrbitControls(camera, canvas, center) {
  var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__.OrbitControls(camera, canvas);
  controls.target.copy(center).add(new three__WEBPACK_IMPORTED_MODULE_12__.Vector3(-1, -1, 0));
  controls.update();
};

var createLighting = function createLighting(scene) {
  var color = 0xffffff;
  var intensity = 1;
  var lighting = new three__WEBPACK_IMPORTED_MODULE_12__.DirectionalLight(color, intensity);
  lighting.position.set(2, 2, 4);
  scene.add(lighting);
  var ambientLight = new three__WEBPACK_IMPORTED_MODULE_12__.AmbientLight(color, intensity / 5);
  scene.add(ambientLight);
};

var resizeRendererToDisplaySize = function resizeRendererToDisplaySize(renderer) {
  var canvas = renderer.domElement;
  var needsResize = canvas.clientWidth !== canvas.width || canvas.clientHeight !== canvas.height;

  if (needsResize) {
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
  }

  return needsResize;
};

var animate = function animate(renderer, scene, camera, manager) {
  var render = function render(time) {
    var timeInSeconds = time * 0.001;
    var canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();

    if (resizeRendererToDisplaySize(renderer)) {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    animations.earthOrbit.forEach(function (object) {
      object.rotation.y = timeInSeconds * 0.005;
    });
    animations.cloud.forEach(function (object) {
      object.rotation.y = timeInSeconds * 0.05;
    });
    animations.earth.forEach(function (object) {
      object.rotation.y = timeInSeconds * 0.02;
    });
    animations.moon.forEach(function (object) {
      object.rotation.y = timeInSeconds * 0.01;
    });
    animations.lunarEarth.forEach(function (object) {
      object.rotation.y = timeInSeconds * 0.01;
    });
    animations.asteroids.forEach(function (object, ndx) {
      object.rotation.y = timeInSeconds * 0.1 + ndx * 0.05;
      object.rotation.x = timeInSeconds * 0.1 + ndx * 0.01;
      object.rotation.z = timeInSeconds * 0.1 - ndx * 0.05;
    });
    animations.functions.forEach(function (func) {
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

var createEarthOrbit = function createEarthOrbit(scene, center) {
  var earthOrbit = new three__WEBPACK_IMPORTED_MODULE_12__.Object3D();
  earthOrbit.position.set(center.x, center.y, center.z);
  var myAxis = new three__WEBPACK_IMPORTED_MODULE_12__.Vector3(1, -1, 0);
  earthOrbit.rotateOnAxis(myAxis, three__WEBPACK_IMPORTED_MODULE_12__.MathUtils.degToRad(23.5));
  scene.add(earthOrbit);
  animations.earthOrbit.push(earthOrbit);
  return earthOrbit;
};

var createLunarEarthOrbit = function createLunarEarthOrbit(earthOrbit) {
  var lunarEarthOrbit = new three__WEBPACK_IMPORTED_MODULE_12__.Object3D();
  earthOrbit.add(lunarEarthOrbit);
  animations.lunarEarth.push(lunarEarthOrbit);
  return lunarEarthOrbit;
};

var createEarth = function createEarth(base) {
  var earth = new three__WEBPACK_IMPORTED_MODULE_12__.Object3D();
  var geometry = new three__WEBPACK_IMPORTED_MODULE_12__.SphereGeometry(1);
  var cloudGeometry = new three__WEBPACK_IMPORTED_MODULE_12__.SphereGeometry(1.009);
  var texture = loader.load(_assets_earthmap1k_jpg__WEBPACK_IMPORTED_MODULE_5__);
  var bumpTexture = loader.load(_assets_earthbump_jpg__WEBPACK_IMPORTED_MODULE_6__);
  var cloudTexture = loader.load(_assets_earthCloud_png__WEBPACK_IMPORTED_MODULE_7__);
  var material = new three__WEBPACK_IMPORTED_MODULE_12__.MeshPhongMaterial({
    map: texture,
    bumpMap: bumpTexture,
    bumpScale: 0.6
  });
  var cloudMaterial = new three__WEBPACK_IMPORTED_MODULE_12__.MeshPhongMaterial({
    map: cloudTexture,
    transparent: true,
    opacity: 0.5
  });
  var ground = new three__WEBPACK_IMPORTED_MODULE_12__.Mesh(geometry, material);
  var cloud = new three__WEBPACK_IMPORTED_MODULE_12__.Mesh(cloudGeometry, cloudMaterial);
  earth.add(ground);
  earth.add(cloud);
  animations.earth.push(ground);
  animations.cloud.push(cloud);
  var myAxis = new three__WEBPACK_IMPORTED_MODULE_12__.Vector3(0, 0, 1);
  earth.rotateOnAxis(myAxis, three__WEBPACK_IMPORTED_MODULE_12__.MathUtils.degToRad(23.5));
  base.add(earth);
  return earth;
};

var createMoonOrbit = function createMoonOrbit(earthOrbit) {
  var moonOrbit = new three__WEBPACK_IMPORTED_MODULE_12__.Object3D();
  moonOrbit.position.set(4, 0, 0);
  earthOrbit.add(moonOrbit);
  return moonOrbit;
};

var createMoon = function createMoon(moonOrbit) {
  var geometry = new three__WEBPACK_IMPORTED_MODULE_12__.SphereGeometry(0.43);
  var moonTexture = loader.load(_assets_moon_jpg__WEBPACK_IMPORTED_MODULE_8__);
  var bumpTexture = loader.load(_assets_moonbump_jpg__WEBPACK_IMPORTED_MODULE_9__);
  var material = new three__WEBPACK_IMPORTED_MODULE_12__.MeshPhongMaterial({
    map: moonTexture,
    bumpMap: bumpTexture,
    bumpScale: 0.2
  });
  var moonMesh = new three__WEBPACK_IMPORTED_MODULE_12__.Mesh(geometry, material);
  moonOrbit.add(moonMesh);
  animations.moon.push(moonMesh);
};

var shapeAsteroids = function shapeAsteroids(position) {
  var arrLike = position.array;
  var check = 0;
  var positionStore = [[]];
  var positionArr = Array.from(arrLike);
  positionArr.forEach(function (number) {
    if (check > 2) {
      check = 1;
      positionStore[positionStore.length] = [number];
    } else {
      positionStore[positionStore.length - 1].push(number);
      check += 1;
    }
  });
  var uniqueValues = [];
  positionStore.forEach(function (arr) {
    if (uniqueValues.length === 0) {
      uniqueValues.push(arr);
    } else {
      var val = true;
      uniqueValues.forEach(function (arr2) {
        if (arr[0] === arr2[0] && arr[1] === arr2[1] && arr[2] === arr2[2]) {
          val = false;
        }
      });

      if (val) {
        uniqueValues.push(arr);
      }
    }
  });
  var preventMut = [];
  uniqueValues.forEach(function (arr) {
    var x = (arr[0] + -0.25 + Math.random() * 0.5).toFixed(1);
    var y = (arr[1] + -0.25 + Math.random() * 0.5).toFixed(1);
    var z = (arr[2] + -0.25 + Math.random() * 0.5).toFixed(1);
    positionStore.forEach(function (arr2, ndx) {
      if (arr[0] === arr2[0] && arr[1] === arr2[1] && arr[2] === arr2[2]) {
        preventMut[ndx] = [parseFloat(x), parseFloat(y), parseFloat(z)];
      }
    });
  });
  var finalArr = [];
  preventMut.forEach(function (arr) {
    var _arr2 = _slicedToArray(arr, 3),
        x = _arr2[0],
        y = _arr2[1],
        z = _arr2[2];

    finalArr.push(x);
    finalArr.push(y);
    finalArr.push(z);
  });
  position.set(finalArr);
};

var createAsteroids = function createAsteroids(earthOrbit, data, manager, canvas) {
  var neos = data.neoArr;
  var texture = loader.load(_assets_asteroid_jpg__WEBPACK_IMPORTED_MODULE_10__);
  var texture2 = loader.load(_assets_asteroidBump_jpg__WEBPACK_IMPORTED_MODULE_11__);

  var _loop = function _loop(i) {
    var neo = neos[i];
    var diameter = (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.baseLog)(data.averageDiameter(i) * 1000, 2);
    var asteroidOrbit = new three__WEBPACK_IMPORTED_MODULE_12__.Object3D();
    earthOrbit.add(asteroidOrbit);
    var distanceStr = neo.missDistance,
        id = neo.id;
    var distance = parseFloat(distanceStr);
    var geometry = new three__WEBPACK_IMPORTED_MODULE_12__.IcosahedronGeometry(diameter, 1);
    var material = new three__WEBPACK_IMPORTED_MODULE_12__.MeshPhongMaterial({
      map: texture,
      specular: "white",
      bumpMap: texture2,
      bumpScale: 0.1
    });
    var asteroid = new three__WEBPACK_IMPORTED_MODULE_12__.Mesh(geometry, material);
    var random = (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.randomPosition)(id, (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.baseLog)(distance / 10, 13));
    asteroidOrbit.position.set(random.x, random.y, random.z);

    if (asteroid.geometry.attributes.position instanceof three__WEBPACK_IMPORTED_MODULE_12__.BufferAttribute) {
      shapeAsteroids(asteroid.geometry.attributes.position);
    }

    asteroidOrbit.scale.set(0.009, 0.009, 0.009);
    asteroidOrbit.add(asteroid);
    var tempV = new three__WEBPACK_IMPORTED_MODULE_12__.Vector3();
    var camera = new three__WEBPACK_IMPORTED_MODULE_12__.PerspectiveCamera(25, 2, 0.1, 100);
    asteroid.updateWorldMatrix(true, false);
    asteroid.getWorldPosition(tempV);
    camera.position.set(tempV.x - 100, tempV.y, tempV.z);
    camera.scale.set(100, 100, 100);
    camera.lookAt(tempV);
    createOrbitControls(camera, canvas, tempV);
    animations.functions.push(function () {
      asteroid.getWorldPosition(tempV);
      camera.lookAt(tempV);
    });
    asteroidOrbit.add(camera);
    animations.asteroids.push(asteroid);

    var revertToNormalDisplay = function revertToNormalDisplay() {
      // canvas.style.pointerEvents = "all";
      animations.cameras = [];
    };

    asteroid.addEventListener("click", function (e) {
      if (e instanceof three_interactive__WEBPACK_IMPORTED_MODULE_0__.InteractiveEvent) {
        e.stopPropagation();
        animations.cameras = [];
        animations.cameras.push(camera); // canvas.style.pointerEvents = "none";

        (0,_display__WEBPACK_IMPORTED_MODULE_3__.displayAsteroidInfo)(neo, revertToNormalDisplay);
      }
    });
    asteroid.addEventListener("mouseover", function (e) {
      if (e instanceof three_interactive__WEBPACK_IMPORTED_MODULE_0__.InteractiveEvent) {
        e.stopPropagation();
        asteroid.material.emissive.setHex(0xffffff);
        document.body.style.cursor = "pointer";
      }
    });
    asteroid.addEventListener("mouseout", function (e) {
      if (e instanceof three_interactive__WEBPACK_IMPORTED_MODULE_0__.InteractiveEvent) {
        e.stopPropagation();
        asteroid.material.emissive.setHex(0x000000);
        document.body.style.cursor = "default";
      }
    });
    manager.add(asteroid);
  };

  for (var i = 0; i < neos.length; i += 1) {
    _loop(i);
  }
};

var init = function init(data) {
  var canvas = document.querySelector("#c");
  var center = new three__WEBPACK_IMPORTED_MODULE_12__.Vector3(0, 0, 0);

  if (canvas instanceof HTMLCanvasElement) {
    var renderer = new three__WEBPACK_IMPORTED_MODULE_12__.WebGLRenderer({
      canvas: canvas
    });
    var scene = createScene(renderer);
    var camera = createCamera(scene);
    var manager = new three_interactive__WEBPACK_IMPORTED_MODULE_0__.InteractionManager(renderer, camera, canvas, false);
    createOrbitControls(camera, canvas, center);
    createLighting(scene);

    if (data) {
      var earthOrbit = createEarthOrbit(scene, center);
      var lunarEarthOrbit = createLunarEarthOrbit(earthOrbit);
      createEarth(lunarEarthOrbit);
      var moonOrbit = createMoonOrbit(lunarEarthOrbit);
      createMoon(moonOrbit);
      createAsteroids(earthOrbit, data, manager, canvas);
    }

    renderer.render(scene, camera);
    animate(renderer, scene, camera, manager);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),

/***/ "./src/scripts/utilities.ts":
/*!**********************************!*\
  !*** ./src/scripts/utilities.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baseLog": function() { return /* binding */ baseLog; },
/* harmony export */   "randomPosition": function() { return /* binding */ randomPosition; }
/* harmony export */ });
var baseLog = function baseLog(x, y) {
  return Math.log(x) / Math.log(y);
};

var pseudoRandom = function pseudoRandom(id) {
  var number = parseFloat(id);
  var sum = id.split("").map(function (num) {
    return parseFloat(num);
  }).reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  var value = (number - sum) / (number + sum);
  var valueArr = value.toString().split("").filter(function (str) {
    if (str !== ".") {
      return true;
    }

    return false;
  });
  valueArr[valueArr.length - 1] = "0";
  valueArr[valueArr.length - 2] = ".";
  var num = parseFloat(valueArr.reverse().join(""));
  return num;
};

var randomPosition = function randomPosition(id, distance) {
  var value1 = pseudoRandom("".concat(id, "12345")) * distance;
  var value2 = pseudoRandom(id + id) * (pseudoRandom("".concat(id, "53241")) > 0.5 ? -1 : 1);
  var intermediate = Math.pow(value1, 2) + Math.pow(value2, 2);
  var value3 = Math.pow(Math.pow(distance, 2) - intermediate, 0.5);
  var random = pseudoRandom(id + id) * 2;

  if (random > 1) {
    return {
      x: value1 * (pseudoRandom("".concat(id, "87605")) > 0.5 ? 1 : -1),
      y: value2,
      z: value3 * (pseudoRandom(id + id) > 0.5 ? 1 : -1)
    };
  }

  return {
    x: value3 * (pseudoRandom("".concat(id, "21398")) > 0.5 ? 1 : -1),
    y: value2,
    z: value1 * (pseudoRandom(id + id) > 0.5 ? 1 : -1)
  };
};



/***/ }),

/***/ "./src/assets/asteroid.jpg":
/*!*********************************!*\
  !*** ./src/assets/asteroid.jpg ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a8ba4fbcc1ff5859227c.jpg";

/***/ }),

/***/ "./src/assets/asteroidBump.jpg":
/*!*************************************!*\
  !*** ./src/assets/asteroidBump.jpg ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8d6f2004c595a5cd7b08.jpg";

/***/ }),

/***/ "./src/assets/earthCloud.png":
/*!***********************************!*\
  !*** ./src/assets/earthCloud.png ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "67a542cb789140671d24.png";

/***/ }),

/***/ "./src/assets/earthbump.jpg":
/*!**********************************!*\
  !*** ./src/assets/earthbump.jpg ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7453136fa7d1cf314e8a.jpg";

/***/ }),

/***/ "./src/assets/earthmap1k.jpg":
/*!***********************************!*\
  !*** ./src/assets/earthmap1k.jpg ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d48938a2d283cc04c3d2.jpg";

/***/ }),

/***/ "./src/assets/galaxy2.jpg":
/*!********************************!*\
  !*** ./src/assets/galaxy2.jpg ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c80e1b765a3ce7c489c8.jpg";

/***/ }),

/***/ "./src/assets/moon.jpg":
/*!*****************************!*\
  !*** ./src/assets/moon.jpg ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a2edaf8548e78714814b.jpg";

/***/ }),

/***/ "./src/assets/moonbump.jpg":
/*!*********************************!*\
  !*** ./src/assets/moonbump.jpg ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1dd7bdd6651f9a39743c.jpg";

/***/ }),

/***/ "./src/assets/space.mp3":
/*!******************************!*\
  !*** ./src/assets/space.mp3 ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "77dfc30deceec60cb766.mp3";

/***/ }),

/***/ "./src/assets/space.ogg":
/*!******************************!*\
  !*** ./src/assets/space.ogg ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ded3c5b4a005ba89d987.ogg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEMsR0FBd0MsQ0FBakUsQ0FERjtFQUVBLElBQU11QyxZQUFZLEdBQUcsU0FBQUYsTUFBTSxFQUFJLENBQUosQ0FBTixZQUFjQyxNQUFkLEVBQXdCLENBQXhCLENBQXJCO0VBQ0EsSUFBTUUsTUFBTSxZQUFJLFNBQUF2QyxRQUFRLEVBQUksQ0FBSixDQUFSLEdBQWdCc0MsWUFBcEIsRUFBcUMsR0FBckMsQ0FBWjtFQUVBLElBQU1uRCxNQUFNLEdBQUdtQyxZQUFZLENBQUN2QixFQUFFLEdBQUdBLEVBQU4sQ0FBWixHQUF3QixDQUF2Qzs7RUFFQSxJQUFJWixNQUFNLEdBQUcsQ0FBYixFQUFnQjtJQUNkLE9BQU87TUFDTHBELENBQUMsRUFBRXFHLE1BQU0sSUFBSWQsWUFBWSxXQUFJdkIsRUFBSixXQUFaLEdBQTZCLEdBQTdCLEdBQW1DLENBQW5DLEdBQXVDLENBQUMsQ0FBNUMsQ0FESjtNQUVMbEUsQ0FBQyxFQUFFd0csTUFGRTtNQUdMckcsQ0FBQyxFQUFFdUcsTUFBTSxJQUFJakIsWUFBWSxDQUFDdkIsRUFBRSxHQUFHQSxFQUFOLENBQVosR0FBd0IsR0FBeEIsR0FBOEIsQ0FBOUIsR0FBa0MsQ0FBQyxDQUF2QztJQUhKLENBQVA7RUFLRDs7RUFFRCxPQUFPO0lBQ0xoRSxDQUFDLEVBQUV3RyxNQUFNLElBQUlqQixZQUFZLFdBQUl2QixFQUFKLFdBQVosR0FBNkIsR0FBN0IsR0FBbUMsQ0FBbkMsR0FBdUMsQ0FBQyxDQUE1QyxDQURKO0lBRUxsRSxDQUFDLEVBQUV3RyxNQUZFO0lBR0xyRyxDQUFDLEVBQUVvRyxNQUFNLElBQUlkLFlBQVksQ0FBQ3ZCLEVBQUUsR0FBR0EsRUFBTixDQUFaLEdBQXdCLEdBQXhCLEdBQThCLENBQTlCLEdBQWtDLENBQUMsQ0FBdkM7RUFISixDQUFQO0FBS0QsQ0F0QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZWFyLWVhcnRoLW9iamVjdC10cmFja2VyLy4vc3JjL3NjcmlwdHMvZGlzcGxheS50cyIsIndlYnBhY2s6Ly9uZWFyLWVhcnRoLW9iamVjdC10cmFja2VyLy4vc3JjL3NjcmlwdHMvcmVuZGVyLnRzIiwid2VicGFjazovL25lYXItZWFydGgtb2JqZWN0LXRyYWNrZXIvLi9zcmMvc2NyaXB0cy91dGlsaXRpZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBc3Rlcm9pZEluZm8gfSBmcm9tIFwiLi9mZXRjaERhdGFcIjtcbmltcG9ydCBzcGFjZW1wMyBmcm9tIFwiLi4vYXNzZXRzL3NwYWNlLm1wM1wiO1xuaW1wb3J0IHNwYWNlb2dnIGZyb20gXCIuLi9hc3NldHMvc3BhY2Uub2dnXCI7XG5cbmNvbnN0IGNyZWF0ZUF1ZGlvID0gKCkgPT4ge1xuICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKTtcbiAgYXVkaW8uY2xhc3NMaXN0LmFkZChcInNwYWNlXCIpO1xuICBhdWRpby5zZXRBdHRyaWJ1dGUoXCJhdXRvcGxheVwiLCBcInRydWVcIik7XG4gIGF1ZGlvLnNldEF0dHJpYnV0ZShcImxvb3BcIiwgXCJ0cnVlXCIpO1xuICBjb25zdCBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic291cmNlXCIpO1xuICBzb3VyY2Uuc3JjID0gc3BhY2VtcDM7XG4gIHNvdXJjZS50eXBlID0gXCJhdWRpby9tcGVnXCI7XG4gIGF1ZGlvLmFwcGVuZENoaWxkKHNvdXJjZSk7XG4gIGNvbnN0IHNvdXJjZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic291cmNlXCIpO1xuICBzb3VyY2UyLnNyYyA9IHNwYWNlb2dnO1xuICBzb3VyY2UyLnR5cGUgPSBcImF1ZGlvL29nZ1wiO1xuICBhdWRpby5hcHBlbmRDaGlsZChzb3VyY2UyKTtcbiAgcmV0dXJuIGF1ZGlvO1xufTtcblxuY29uc3QgaW5pdGlhbERpc3BsYXkgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICBpZiAoY29udGFpbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBzb3VuZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc291bmREaXYuY2xhc3NMaXN0LmFkZChcInNvdW5kRGl2XCIpO1xuXG4gICAgbGV0IHNvdW5kID0gZmFsc2U7XG4gICAgY29uc3QgbWljcm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1pY3JvRGl2LmNsYXNzTGlzdC5hZGQoXCJtaWNyb0RpdlwiKTtcbiAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgaS5jbGFzc0xpc3QuYWRkKFwiZmFzXCIsIFwiZmEtbWljcm9waG9uZS1zbGFzaFwiKTtcbiAgICBtaWNyb0Rpdi5hcHBlbmRDaGlsZChpKTtcbiAgICBjb25zdCBhdWRpbyA9IGNyZWF0ZUF1ZGlvKCk7XG4gICAgbWljcm9EaXYuYXBwZW5kQ2hpbGQoYXVkaW8pO1xuICAgIHNvdW5kRGl2LmFwcGVuZENoaWxkKG1pY3JvRGl2KTtcblxuICAgIG1pY3JvRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAoIXNvdW5kKSB7XG4gICAgICAgIHNvdW5kID0gdHJ1ZTtcbiAgICAgICAgYXVkaW9cbiAgICAgICAgICAucGxheSgpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWljcm9EaXYyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taWNyb0RpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHNvdW5kRGl2MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc291bmREaXZcIik7XG4gICAgICAgICAgICBjb25zdCBhdWRpbzIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXVkaW9cIik7XG4gICAgICAgICAgICBpZiAobWljcm9EaXYyICYmIHNvdW5kRGl2MiAmJiBhdWRpbzIpIHtcbiAgICAgICAgICAgICAgbWljcm9EaXYyLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICAgICAgICBjb25zdCBpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgICAgICAgICBpMi5jbGFzc0xpc3QuYWRkKFwiZmFzXCIsIFwiZmEtbWljcm9waG9uZVwiKTtcbiAgICAgICAgICAgICAgbWljcm9EaXYyLmFwcGVuZENoaWxkKGkyKTtcbiAgICAgICAgICAgICAgbWljcm9EaXYyLmFwcGVuZENoaWxkKGF1ZGlvMik7XG4gICAgICAgICAgICAgIHNvdW5kRGl2Mi5hcHBlbmRDaGlsZChtaWNyb0RpdjIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXVkaW8gZmFpbGVkIHRvIHBsYXkhXCIpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc291bmQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgYXVkaW8yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImF1ZGlvXCIpO1xuICAgICAgICBjb25zdCBtaWNyb0RpdjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pY3JvRGl2XCIpO1xuICAgICAgICBjb25zdCBzb3VuZERpdjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvdW5kRGl2XCIpO1xuICAgICAgICBpZiAobWljcm9EaXYyICYmIHNvdW5kRGl2MiAmJiBhdWRpbzIpIHtcbiAgICAgICAgICBhdWRpbzIucGF1c2UoKTtcbiAgICAgICAgICBtaWNyb0RpdjIucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICAgICAgY29uc3QgaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgICAgICBpMi5jbGFzc0xpc3QuYWRkKFwiZmFzXCIsIFwiZmEtbWljcm9waG9uZS1zbGFzaFwiKTtcbiAgICAgICAgICBtaWNyb0RpdjIuYXBwZW5kQ2hpbGQoaTIpO1xuICAgICAgICAgIG1pY3JvRGl2Mi5hcHBlbmRDaGlsZChhdWRpbzIpO1xuICAgICAgICAgIHNvdW5kRGl2Mi5hcHBlbmRDaGlsZChtaWNyb0RpdjIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc291bmREaXYpO1xuICB9XG59O1xuXG5jb25zdCBkaXNwbGF5RGl2MUluZm8gPSAoYXN0ZXJvaWRJbmZvOiBBc3Rlcm9pZEluZm8pID0+IHtcbiAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdjEuY2xhc3NMaXN0LmFkZChcImRpdjFcIik7XG5cbiAgY29uc3QgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hbWVEaXYuY2xhc3NMaXN0LmFkZChcIm5hbWVEaXZcIik7XG4gIG5hbWVEaXYudGV4dENvbnRlbnQgPSBgTmFtZTogJHthc3Rlcm9pZEluZm8ubmFtZX1gO1xuICBkaXYxLmFwcGVuZENoaWxkKG5hbWVEaXYpO1xuXG4gIGNvbnN0IG1hZ25pdHVkZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1hZ25pdHVkZURpdi5jbGFzc0xpc3QuYWRkKFwibWFnbml0dWRlRGl2XCIpO1xuICBtYWduaXR1ZGVEaXYudGV4dENvbnRlbnQgPSBgQWJzb2x1dGUgTWFnbml0dWRlOiAke2FzdGVyb2lkSW5mby5hYnNvbHV0ZU1hZ25pdHVkZX1gO1xuICBkaXYxLmFwcGVuZENoaWxkKG1hZ25pdHVkZURpdik7XG5cbiAgY29uc3QgdmVsb2NpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB2ZWxvY2l0eURpdi5jbGFzc0xpc3QuYWRkKFwidmVsb2NpdHlEaXZcIik7XG4gIHZlbG9jaXR5RGl2LnRleHRDb250ZW50ID0gYFJlbGF0aXZlIHZlbG9jaXR5OiAke2FzdGVyb2lkSW5mby5yZWxhdGl2ZVZlbG9jaXR5fSBrbS9zYDtcbiAgZGl2MS5hcHBlbmRDaGlsZCh2ZWxvY2l0eURpdik7XG5cbiAgcmV0dXJuIGRpdjE7XG59O1xuXG5jb25zdCBkaXNwbGF5RGl2MkluZm8gPSAoYXN0ZXJvaWRJbmZvOiBBc3Rlcm9pZEluZm8pID0+IHtcbiAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdjIuY2xhc3NMaXN0LmFkZChcImRpdjJcIik7XG5cbiAgY29uc3QgbWF4RGlhbWV0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYXhEaWFtZXRlckRpdi5jbGFzc0xpc3QuYWRkKFwibWF4RGlhbWV0ZXJEaXZcIik7XG4gIG1heERpYW1ldGVyRGl2LnRleHRDb250ZW50ID0gYE1heGltdW0gZXN0aW1hdGVkIGRpYW1ldGVyOiAke2FzdGVyb2lkSW5mby5lc3RpbWF0ZWREaWFtZXRlck1heH0ga21gO1xuICBkaXYyLmFwcGVuZENoaWxkKG1heERpYW1ldGVyRGl2KTtcblxuICBjb25zdCBtaW5EaWFtZXRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1pbkRpYW1ldGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJtaW5EaWFtZXRlckRpdlwiKTtcbiAgbWluRGlhbWV0ZXJEaXYudGV4dENvbnRlbnQgPSBgTWluaW11bSBlc3RpbWF0ZWQgZGlhbWV0ZXI6ICR7YXN0ZXJvaWRJbmZvLmVzdGltYXRlZERpYW1ldGVyTWlufSBrbWA7XG4gIGRpdjIuYXBwZW5kQ2hpbGQobWluRGlhbWV0ZXJEaXYpO1xuXG4gIHJldHVybiBkaXYyO1xufTtcblxuY29uc3QgZGlzcGxheURpdjNJbmZvID0gKFxuICBhc3Rlcm9pZEluZm86IEFzdGVyb2lkSW5mbyxcbiAgcmV2ZXJ0RnVuY3Rpb246ICgpID0+IHZvaWRcbikgPT4ge1xuICBjb25zdCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2My5jbGFzc0xpc3QuYWRkKFwiZGl2M1wiKTtcblxuICBjb25zdCBoYXphcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoYXphcmREaXYuY2xhc3NMaXN0LmFkZChcImhhemFyZERpdlwiKTtcbiAgY29uc3QgaWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgaWYgKGFzdGVyb2lkSW5mby5wb3RlbnRpYWxseUhhemFyZG91cykge1xuICAgIGkuY2xhc3NMaXN0LmFkZChcImZhc1wiLCBcImZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCIpO1xuICAgIGljb25EaXYuYXBwZW5kQ2hpbGQoaSk7XG4gICAgaGF6YXJkRGl2LmFwcGVuZENoaWxkKGljb25EaXYpO1xuXG4gICAgdGV4dERpdi50ZXh0Q29udGVudCA9IFwiQXN0ZXJvaWQgaXMgcG90ZW50aWFsbHkgaGF6YXJkb3VzIVwiO1xuICAgIGhhemFyZERpdi5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcblxuICAgIGhhemFyZERpdi5jbGFzc0xpc3QuYWRkKFwiaGF6YXJkXCIpO1xuICB9IGVsc2Uge1xuICAgIGkuY2xhc3NMaXN0LmFkZChcImZhc1wiLCBcImZhLWNoZWNrLWNpcmNsZVwiKTtcbiAgICBpY29uRGl2LmFwcGVuZENoaWxkKGkpO1xuICAgIGhhemFyZERpdi5hcHBlbmRDaGlsZChpY29uRGl2KTtcblxuICAgIHRleHREaXYudGV4dENvbnRlbnQgPSBcIkFzdGVyb2lkIGlzIG5vdCBwb3RlbnRpYWxseSBoYXphcmRvdXMhXCI7XG4gICAgaGF6YXJkRGl2LmFwcGVuZENoaWxkKHRleHREaXYpO1xuXG4gICAgaGF6YXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJub3QtaGF6YXJkXCIpO1xuICB9XG4gIGRpdjMuYXBwZW5kQ2hpbGQoaGF6YXJkRGl2KTtcblxuICBjb25zdCBiYWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmFja0Rpdi5jbGFzc0xpc3QuYWRkKFwiYmFja0RpdlwiKTtcblxuICBjb25zdCBiYWNrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJhY2tJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGJhY2tJLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS1hcnJvdy1hbHQtY2lyY2xlLWxlZnRcIik7XG4gIGJhY2tJY29uLmFwcGVuZENoaWxkKGJhY2tJKTtcbiAgYmFja0Rpdi5hcHBlbmRDaGlsZChiYWNrSWNvbik7XG5cbiAgY29uc3QgYmFja1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dFwiKTtcbiAgYmFja1RleHQudGV4dENvbnRlbnQgPSBcIkJhY2sgdG8gRWFydGggVmlld1wiO1xuICBiYWNrRGl2LmFwcGVuZENoaWxkKGJhY2tUZXh0KTtcblxuICBiYWNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXZlcnRGdW5jdGlvbik7XG5cbiAgZGl2My5hcHBlbmRDaGlsZChiYWNrRGl2KTtcblxuICByZXR1cm4gZGl2Mztcbn07XG5cbmNvbnN0IGRpc3BsYXlEaXY0SW5mbyA9IChhc3Rlcm9pZEluZm86IEFzdGVyb2lkSW5mbykgPT4ge1xuICBjb25zdCBkaXY0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2NC5jbGFzc0xpc3QuYWRkKFwiZGl2NFwiKTtcblxuICBjb25zdCBjbG9zZXN0QXBwcm9hY2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjbG9zZXN0QXBwcm9hY2hEaXYuY2xhc3NMaXN0LmFkZChcImNsb3Nlc3RBcHByb2FjaERpdlwiKTtcbiAgY2xvc2VzdEFwcHJvYWNoRGl2LnRleHRDb250ZW50ID0gYENsb3Nlc3QgYXBwcm9hY2ggZGF0ZTogJHthc3Rlcm9pZEluZm8uY2xvc2VzdEFwcHJvYWNoRGF0ZX1gO1xuICBkaXY0LmFwcGVuZENoaWxkKGNsb3Nlc3RBcHByb2FjaERpdik7XG5cbiAgY29uc3QgbWlzc0Rpc3RhbmNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWlzc0Rpc3RhbmNlRGl2LmNsYXNzTGlzdC5hZGQoXCJtaXNzRGlzdGFuY2VEaXZcIik7XG4gIG1pc3NEaXN0YW5jZURpdi50ZXh0Q29udGVudCA9IGBNaXNzIGRpc3RhbmNlOiAke3BhcnNlRmxvYXQoXG4gICAgYXN0ZXJvaWRJbmZvLm1pc3NEaXN0YW5jZVxuICApLnRvRml4ZWQoMSl9IGttYDtcbiAgZGl2NC5hcHBlbmRDaGlsZChtaXNzRGlzdGFuY2VEaXYpO1xuXG4gIGNvbnN0IG9yYml0aW5nQm9keURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG9yYml0aW5nQm9keURpdi5jbGFzc0xpc3QuYWRkKFwib3JiaXRpbmdCb2R5RGl2XCIpO1xuICBvcmJpdGluZ0JvZHlEaXYudGV4dENvbnRlbnQgPSBgT3JiaXRpbmcgYm9keTogJHthc3Rlcm9pZEluZm8ub3JiaXRpbmdCb2R5fWA7XG4gIGRpdjQuYXBwZW5kQ2hpbGQob3JiaXRpbmdCb2R5RGl2KTtcblxuICByZXR1cm4gZGl2NDtcbn07XG5cbmNvbnN0IGRpc3BsYXlBc3Rlcm9pZEluZm8gPSAoXG4gIGFzdGVyb2lkSW5mbzogQXN0ZXJvaWRJbmZvLFxuICByZXZlcnRGdW5jdGlvbjogKCkgPT4gdm9pZFxuKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICBpZiAoY29udGFpbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbmZvRGl2LmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvRGl2KTtcblxuICAgIGNvbnN0IHJldmVydCA9ICgpID0+IHtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChpbmZvRGl2KTtcbiAgICAgIHJldmVydEZ1bmN0aW9uKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRpdjEgPSBkaXNwbGF5RGl2MUluZm8oYXN0ZXJvaWRJbmZvKTtcbiAgICBjb25zdCBkaXYyID0gZGlzcGxheURpdjJJbmZvKGFzdGVyb2lkSW5mbyk7XG4gICAgY29uc3QgZGl2MyA9IGRpc3BsYXlEaXYzSW5mbyhhc3Rlcm9pZEluZm8sIHJldmVydCk7XG4gICAgY29uc3QgZGl2NCA9IGRpc3BsYXlEaXY0SW5mbyhhc3Rlcm9pZEluZm8pO1xuXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChkaXYxKTtcbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKGRpdjIpO1xuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQoZGl2Myk7XG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChkaXY0KTtcbiAgfVxufTtcblxuZXhwb3J0IHsgZGlzcGxheUFzdGVyb2lkSW5mbywgaW5pdGlhbERpc3BsYXkgfTtcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgSW50ZXJhY3Rpb25NYW5hZ2VyLCBJbnRlcmFjdGl2ZUV2ZW50IH0gZnJvbSBcInRocmVlLmludGVyYWN0aXZlXCI7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzXCI7XG5pbXBvcnQgdHlwZSB7IERhdGFTb3J0ZXIgfSBmcm9tIFwiLi9mZXRjaERhdGFcIjtcbmltcG9ydCB7IGJhc2VMb2csIHJhbmRvbVBvc2l0aW9uIH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyBkaXNwbGF5QXN0ZXJvaWRJbmZvIH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IGdhbGF4eSBmcm9tIFwiLi4vYXNzZXRzL2dhbGF4eTIuanBnXCI7XG5pbXBvcnQgZWFydGhtYXAgZnJvbSBcIi4uL2Fzc2V0cy9lYXJ0aG1hcDFrLmpwZ1wiO1xuaW1wb3J0IGVhcnRoYnVtcCBmcm9tIFwiLi4vYXNzZXRzL2VhcnRoYnVtcC5qcGdcIjtcbmltcG9ydCBlYXJ0aGNsb3VkIGZyb20gXCIuLi9hc3NldHMvZWFydGhDbG91ZC5wbmdcIjtcbmltcG9ydCBtb29uIGZyb20gXCIuLi9hc3NldHMvbW9vbi5qcGdcIjtcbmltcG9ydCBtb29uYnVtcCBmcm9tIFwiLi4vYXNzZXRzL21vb25idW1wLmpwZ1wiO1xuaW1wb3J0IGFzdGVyb2lkSW1nIGZyb20gXCIuLi9hc3NldHMvYXN0ZXJvaWQuanBnXCI7XG5pbXBvcnQgYXN0ZXJvaWRCdW1wIGZyb20gXCIuLi9hc3NldHMvYXN0ZXJvaWRCdW1wLmpwZ1wiO1xuXG5pbnRlcmZhY2UgQW5pbWF0aW9ucyB7XG4gIGFuaW1hdGU6IGJvb2xlYW47XG4gIGNsb3VkOiBUSFJFRS5PYmplY3QzRFtdO1xuICBlYXJ0aDogVEhSRUUuT2JqZWN0M0RbXTtcbiAgYXN0ZXJvaWRzOiBUSFJFRS5PYmplY3QzRFtdO1xuICBtb29uOiBUSFJFRS5PYmplY3QzRFtdO1xuICBsdW5hckVhcnRoOiBUSFJFRS5PYmplY3QzRFtdO1xuICBlYXJ0aE9yYml0OiBUSFJFRS5PYmplY3QzRFtdO1xuICBjYW1lcmFzOiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYVtdO1xuICBmdW5jdGlvbnM6ICgoKSA9PiB2b2lkKVtdO1xufVxuXG5jb25zdCBhbmltYXRpb25zOiBBbmltYXRpb25zID0ge1xuICBhbmltYXRlOiB0cnVlLFxuICBjbG91ZDogW10sXG4gIGVhcnRoOiBbXSxcbiAgYXN0ZXJvaWRzOiBbXSxcbiAgbW9vbjogW10sXG4gIGx1bmFyRWFydGg6IFtdLFxuICBlYXJ0aE9yYml0OiBbXSxcbiAgY2FtZXJhczogW10sXG4gIGZ1bmN0aW9uczogW10sXG59O1xuXG5jb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xuXG5jb25zdCBjcmVhdGVTY2VuZSA9IChyZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlcikgPT4ge1xuICBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICBjb25zdCB0ZXh0dXJlID0gbG9hZGVyLmxvYWQoZ2FsYXh5LCAoKSA9PiB7XG4gICAgaWYgKHRleHR1cmUuaW1hZ2UgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgICBjb25zdCBydCA9IG5ldyBUSFJFRS5XZWJHTEN1YmVSZW5kZXJUYXJnZXQodGV4dHVyZS5pbWFnZS5oZWlnaHQpO1xuICAgICAgcnQuZnJvbUVxdWlyZWN0YW5ndWxhclRleHR1cmUocmVuZGVyZXIsIHRleHR1cmUpO1xuICAgICAgc2NlbmUuYmFja2dyb3VuZCA9IHJ0LnRleHR1cmU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHNjZW5lO1xufTtcblxuY29uc3QgY3JlYXRlQ2FtZXJhID0gKHNjZW5lOiBUSFJFRS5TY2VuZSkgPT4ge1xuICBjb25zdCBmb3YgPSA3NTtcbiAgY29uc3QgYXNwZWN0ID0gMjtcbiAgY29uc3QgbmVhciA9IDAuMTtcbiAgY29uc3QgZmFyID0gMjU7XG5cbiAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKGZvdiwgYXNwZWN0LCBuZWFyLCBmYXIpO1xuICBjYW1lcmEucG9zaXRpb24uc2V0KDAsIDAsIDUpO1xuXG4gIHNjZW5lLmFkZChjYW1lcmEpO1xuXG4gIHJldHVybiBjYW1lcmE7XG59O1xuXG5jb25zdCBjcmVhdGVPcmJpdENvbnRyb2xzID0gKFxuICBjYW1lcmE6IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhLFxuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuICBjZW50ZXI6IFRIUkVFLlZlY3RvcjNcbikgPT4ge1xuICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgY2FudmFzKTtcbiAgY29udHJvbHMudGFyZ2V0LmNvcHkoY2VudGVyKS5hZGQobmV3IFRIUkVFLlZlY3RvcjMoLTEsIC0xLCAwKSk7XG4gIGNvbnRyb2xzLnVwZGF0ZSgpO1xufTtcblxuY29uc3QgY3JlYXRlTGlnaHRpbmcgPSAoc2NlbmU6IFRIUkVFLlNjZW5lKSA9PiB7XG4gIGNvbnN0IGNvbG9yID0gMHhmZmZmZmY7XG4gIGNvbnN0IGludGVuc2l0eSA9IDE7XG4gIGNvbnN0IGxpZ2h0aW5nID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoY29sb3IsIGludGVuc2l0eSk7XG4gIGxpZ2h0aW5nLnBvc2l0aW9uLnNldCgyLCAyLCA0KTtcbiAgc2NlbmUuYWRkKGxpZ2h0aW5nKTtcblxuICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KGNvbG9yLCBpbnRlbnNpdHkgLyA1KTtcbiAgc2NlbmUuYWRkKGFtYmllbnRMaWdodCk7XG59O1xuXG5jb25zdCByZXNpemVSZW5kZXJlclRvRGlzcGxheVNpemUgPSAocmVuZGVyZXI6IFRIUkVFLldlYkdMUmVuZGVyZXIpID0+IHtcbiAgY29uc3QgY2FudmFzID0gcmVuZGVyZXIuZG9tRWxlbWVudDtcbiAgY29uc3QgbmVlZHNSZXNpemUgPVxuICAgIGNhbnZhcy5jbGllbnRXaWR0aCAhPT0gY2FudmFzLndpZHRoIHx8XG4gICAgY2FudmFzLmNsaWVudEhlaWdodCAhPT0gY2FudmFzLmhlaWdodDtcblxuICBpZiAobmVlZHNSZXNpemUpIHtcbiAgICByZW5kZXJlci5zZXRTaXplKGNhbnZhcy5jbGllbnRXaWR0aCwgY2FudmFzLmNsaWVudEhlaWdodCwgZmFsc2UpO1xuICB9XG5cbiAgcmV0dXJuIG5lZWRzUmVzaXplO1xufTtcblxuY29uc3QgYW5pbWF0ZSA9IChcbiAgcmVuZGVyZXI6IFRIUkVFLldlYkdMUmVuZGVyZXIsXG4gIHNjZW5lOiBUSFJFRS5TY2VuZSxcbiAgY2FtZXJhOiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSxcbiAgbWFuYWdlcjogSW50ZXJhY3Rpb25NYW5hZ2VyXG4pID0+IHtcbiAgY29uc3QgcmVuZGVyID0gKHRpbWU6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHRpbWVJblNlY29uZHMgPSB0aW1lICogMC4wMDE7XG5cbiAgICBjb25zdCBjYW52YXMgPSByZW5kZXJlci5kb21FbGVtZW50O1xuICAgIGNhbWVyYS5hc3BlY3QgPSBjYW52YXMuY2xpZW50V2lkdGggLyBjYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cbiAgICBpZiAocmVzaXplUmVuZGVyZXJUb0Rpc3BsYXlTaXplKHJlbmRlcmVyKSkge1xuICAgICAgY2FtZXJhLmFzcGVjdCA9IGNhbnZhcy5jbGllbnRXaWR0aCAvIGNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgIH1cblxuICAgIGFuaW1hdGlvbnMuZWFydGhPcmJpdC5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgIG9iamVjdC5yb3RhdGlvbi55ID0gdGltZUluU2Vjb25kcyAqIDAuMDA1O1xuICAgIH0pO1xuXG4gICAgYW5pbWF0aW9ucy5jbG91ZC5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgIG9iamVjdC5yb3RhdGlvbi55ID0gdGltZUluU2Vjb25kcyAqIDAuMDU7XG4gICAgfSk7XG5cbiAgICBhbmltYXRpb25zLmVhcnRoLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgb2JqZWN0LnJvdGF0aW9uLnkgPSB0aW1lSW5TZWNvbmRzICogMC4wMjtcbiAgICB9KTtcblxuICAgIGFuaW1hdGlvbnMubW9vbi5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgIG9iamVjdC5yb3RhdGlvbi55ID0gdGltZUluU2Vjb25kcyAqIDAuMDE7XG4gICAgfSk7XG5cbiAgICBhbmltYXRpb25zLmx1bmFyRWFydGguZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICBvYmplY3Qucm90YXRpb24ueSA9IHRpbWVJblNlY29uZHMgKiAwLjAxO1xuICAgIH0pO1xuXG4gICAgYW5pbWF0aW9ucy5hc3Rlcm9pZHMuZm9yRWFjaCgob2JqZWN0LCBuZHgpID0+IHtcbiAgICAgIG9iamVjdC5yb3RhdGlvbi55ID0gdGltZUluU2Vjb25kcyAqIDAuMSArIG5keCAqIDAuMDU7XG4gICAgICBvYmplY3Qucm90YXRpb24ueCA9IHRpbWVJblNlY29uZHMgKiAwLjEgKyBuZHggKiAwLjAxO1xuICAgICAgb2JqZWN0LnJvdGF0aW9uLnogPSB0aW1lSW5TZWNvbmRzICogMC4xIC0gbmR4ICogMC4wNTtcbiAgICB9KTtcblxuICAgIGFuaW1hdGlvbnMuZnVuY3Rpb25zLmZvckVhY2goKGZ1bmMpID0+IHtcbiAgICAgIGZ1bmMoKTtcbiAgICB9KTtcblxuICAgIG1hbmFnZXIudXBkYXRlKCk7XG5cbiAgICBpZiAoYW5pbWF0aW9ucy5jYW1lcmFzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbmltYXRpb25zLmNhbWVyYXNbMF0uYXNwZWN0ID0gY2FudmFzLmNsaWVudFdpZHRoIC8gY2FudmFzLmNsaWVudEhlaWdodDtcbiAgICAgIGFuaW1hdGlvbnMuY2FtZXJhc1swXS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGFuaW1hdGlvbnMuY2FtZXJhc1swXSk7XG4gICAgfVxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICB9O1xuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG59O1xuXG5jb25zdCBjcmVhdGVFYXJ0aE9yYml0ID0gKHNjZW5lOiBUSFJFRS5TY2VuZSwgY2VudGVyOiBUSFJFRS5WZWN0b3IzKSA9PiB7XG4gIGNvbnN0IGVhcnRoT3JiaXQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgZWFydGhPcmJpdC5wb3NpdGlvbi5zZXQoY2VudGVyLngsIGNlbnRlci55LCBjZW50ZXIueik7XG4gIGNvbnN0IG15QXhpcyA9IG5ldyBUSFJFRS5WZWN0b3IzKDEsIC0xLCAwKTtcbiAgZWFydGhPcmJpdC5yb3RhdGVPbkF4aXMobXlBeGlzLCBUSFJFRS5NYXRoVXRpbHMuZGVnVG9SYWQoMjMuNSkpO1xuICBzY2VuZS5hZGQoZWFydGhPcmJpdCk7XG4gIGFuaW1hdGlvbnMuZWFydGhPcmJpdC5wdXNoKGVhcnRoT3JiaXQpO1xuICByZXR1cm4gZWFydGhPcmJpdDtcbn07XG5cbmNvbnN0IGNyZWF0ZUx1bmFyRWFydGhPcmJpdCA9IChlYXJ0aE9yYml0OiBUSFJFRS5PYmplY3QzRCkgPT4ge1xuICBjb25zdCBsdW5hckVhcnRoT3JiaXQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgZWFydGhPcmJpdC5hZGQobHVuYXJFYXJ0aE9yYml0KTtcbiAgYW5pbWF0aW9ucy5sdW5hckVhcnRoLnB1c2gobHVuYXJFYXJ0aE9yYml0KTtcbiAgcmV0dXJuIGx1bmFyRWFydGhPcmJpdDtcbn07XG5cbmNvbnN0IGNyZWF0ZUVhcnRoID0gKGJhc2U6IFRIUkVFLk9iamVjdDNEKSA9PiB7XG4gIGNvbnN0IGVhcnRoID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG5cbiAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMSk7XG4gIGNvbnN0IGNsb3VkR2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMS4wMDkpO1xuXG4gIGNvbnN0IHRleHR1cmUgPSBsb2FkZXIubG9hZChlYXJ0aG1hcCk7XG4gIGNvbnN0IGJ1bXBUZXh0dXJlID0gbG9hZGVyLmxvYWQoZWFydGhidW1wKTtcbiAgY29uc3QgY2xvdWRUZXh0dXJlID0gbG9hZGVyLmxvYWQoZWFydGhjbG91ZCk7XG5cbiAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe1xuICAgIG1hcDogdGV4dHVyZSxcbiAgICBidW1wTWFwOiBidW1wVGV4dHVyZSxcbiAgICBidW1wU2NhbGU6IDAuNixcbiAgfSk7XG4gIGNvbnN0IGNsb3VkTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe1xuICAgIG1hcDogY2xvdWRUZXh0dXJlLFxuICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgIG9wYWNpdHk6IDAuNSxcbiAgfSk7XG5cbiAgY29uc3QgZ3JvdW5kID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgY29uc3QgY2xvdWQgPSBuZXcgVEhSRUUuTWVzaChjbG91ZEdlb21ldHJ5LCBjbG91ZE1hdGVyaWFsKTtcblxuICBlYXJ0aC5hZGQoZ3JvdW5kKTtcbiAgZWFydGguYWRkKGNsb3VkKTtcbiAgYW5pbWF0aW9ucy5lYXJ0aC5wdXNoKGdyb3VuZCk7XG4gIGFuaW1hdGlvbnMuY2xvdWQucHVzaChjbG91ZCk7XG5cbiAgY29uc3QgbXlBeGlzID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMSk7XG4gIGVhcnRoLnJvdGF0ZU9uQXhpcyhteUF4aXMsIFRIUkVFLk1hdGhVdGlscy5kZWdUb1JhZCgyMy41KSk7XG5cbiAgYmFzZS5hZGQoZWFydGgpO1xuXG4gIHJldHVybiBlYXJ0aDtcbn07XG5cbmNvbnN0IGNyZWF0ZU1vb25PcmJpdCA9IChlYXJ0aE9yYml0OiBUSFJFRS5PYmplY3QzRCkgPT4ge1xuICBjb25zdCBtb29uT3JiaXQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgbW9vbk9yYml0LnBvc2l0aW9uLnNldCg0LCAwLCAwKTtcbiAgZWFydGhPcmJpdC5hZGQobW9vbk9yYml0KTtcbiAgcmV0dXJuIG1vb25PcmJpdDtcbn07XG5cbmNvbnN0IGNyZWF0ZU1vb24gPSAobW9vbk9yYml0OiBUSFJFRS5PYmplY3QzRCkgPT4ge1xuICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgwLjQzKTtcblxuICBjb25zdCBtb29uVGV4dHVyZSA9IGxvYWRlci5sb2FkKG1vb24pO1xuICBjb25zdCBidW1wVGV4dHVyZSA9IGxvYWRlci5sb2FkKG1vb25idW1wKTtcbiAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe1xuICAgIG1hcDogbW9vblRleHR1cmUsXG4gICAgYnVtcE1hcDogYnVtcFRleHR1cmUsXG4gICAgYnVtcFNjYWxlOiAwLjIsXG4gIH0pO1xuXG4gIGNvbnN0IG1vb25NZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcblxuICBtb29uT3JiaXQuYWRkKG1vb25NZXNoKTtcbiAgYW5pbWF0aW9ucy5tb29uLnB1c2gobW9vbk1lc2gpO1xufTtcblxuY29uc3Qgc2hhcGVBc3Rlcm9pZHMgPSAocG9zaXRpb246IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSkgPT4ge1xuICBjb25zdCBhcnJMaWtlID0gcG9zaXRpb24uYXJyYXk7XG4gIGxldCBjaGVjayA9IDA7XG4gIGNvbnN0IHBvc2l0aW9uU3RvcmU6IG51bWJlcltdW10gPSBbW11dO1xuICBjb25zdCBwb3NpdGlvbkFyciA9IEFycmF5LmZyb20oYXJyTGlrZSk7XG4gIHBvc2l0aW9uQXJyLmZvckVhY2goKG51bWJlcikgPT4ge1xuICAgIGlmIChjaGVjayA+IDIpIHtcbiAgICAgIGNoZWNrID0gMTtcbiAgICAgIHBvc2l0aW9uU3RvcmVbcG9zaXRpb25TdG9yZS5sZW5ndGhdID0gW251bWJlcl07XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvc2l0aW9uU3RvcmVbcG9zaXRpb25TdG9yZS5sZW5ndGggLSAxXS5wdXNoKG51bWJlcik7XG4gICAgICBjaGVjayArPSAxO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgdW5pcXVlVmFsdWVzOiBudW1iZXJbXVtdID0gW107XG4gIHBvc2l0aW9uU3RvcmUuZm9yRWFjaCgoYXJyKSA9PiB7XG4gICAgaWYgKHVuaXF1ZVZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHVuaXF1ZVZhbHVlcy5wdXNoKGFycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWwgPSB0cnVlO1xuICAgICAgdW5pcXVlVmFsdWVzLmZvckVhY2goKGFycjIpID0+IHtcbiAgICAgICAgaWYgKGFyclswXSA9PT0gYXJyMlswXSAmJiBhcnJbMV0gPT09IGFycjJbMV0gJiYgYXJyWzJdID09PSBhcnIyWzJdKSB7XG4gICAgICAgICAgdmFsID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICB1bmlxdWVWYWx1ZXMucHVzaChhcnIpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgcHJldmVudE11dDogbnVtYmVyW11bXSA9IFtdO1xuICB1bmlxdWVWYWx1ZXMuZm9yRWFjaCgoYXJyKSA9PiB7XG4gICAgY29uc3QgeCA9IChhcnJbMF0gKyAtMC4yNSArIE1hdGgucmFuZG9tKCkgKiAwLjUpLnRvRml4ZWQoMSk7XG4gICAgY29uc3QgeSA9IChhcnJbMV0gKyAtMC4yNSArIE1hdGgucmFuZG9tKCkgKiAwLjUpLnRvRml4ZWQoMSk7XG4gICAgY29uc3QgeiA9IChhcnJbMl0gKyAtMC4yNSArIE1hdGgucmFuZG9tKCkgKiAwLjUpLnRvRml4ZWQoMSk7XG5cbiAgICBwb3NpdGlvblN0b3JlLmZvckVhY2goKGFycjIsIG5keCkgPT4ge1xuICAgICAgaWYgKGFyclswXSA9PT0gYXJyMlswXSAmJiBhcnJbMV0gPT09IGFycjJbMV0gJiYgYXJyWzJdID09PSBhcnIyWzJdKSB7XG4gICAgICAgIHByZXZlbnRNdXRbbmR4XSA9IFtwYXJzZUZsb2F0KHgpLCBwYXJzZUZsb2F0KHkpLCBwYXJzZUZsb2F0KHopXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgZmluYWxBcnI6IG51bWJlcltdID0gW107XG5cbiAgcHJldmVudE11dC5mb3JFYWNoKChhcnIpID0+IHtcbiAgICBjb25zdCBbeCwgeSwgel0gPSBhcnI7XG4gICAgZmluYWxBcnIucHVzaCh4KTtcbiAgICBmaW5hbEFyci5wdXNoKHkpO1xuICAgIGZpbmFsQXJyLnB1c2goeik7XG4gIH0pO1xuXG4gIHBvc2l0aW9uLnNldChmaW5hbEFycik7XG59O1xuXG5jb25zdCBjcmVhdGVBc3Rlcm9pZHMgPSAoXG4gIGVhcnRoT3JiaXQ6IFRIUkVFLk9iamVjdDNELFxuICBkYXRhOiBEYXRhU29ydGVyLFxuICBtYW5hZ2VyOiBJbnRlcmFjdGlvbk1hbmFnZXIsXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnRcbikgPT4ge1xuICBjb25zdCBuZW9zID0gZGF0YS5uZW9BcnI7XG5cbiAgY29uc3QgdGV4dHVyZSA9IGxvYWRlci5sb2FkKGFzdGVyb2lkSW1nKTtcbiAgY29uc3QgdGV4dHVyZTIgPSBsb2FkZXIubG9hZChhc3Rlcm9pZEJ1bXApO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmVvcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IG5lbyA9IG5lb3NbaV07XG4gICAgY29uc3QgZGlhbWV0ZXIgPSBiYXNlTG9nKGRhdGEuYXZlcmFnZURpYW1ldGVyKGkpICogMTAwMCwgMik7XG5cbiAgICBjb25zdCBhc3Rlcm9pZE9yYml0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgZWFydGhPcmJpdC5hZGQoYXN0ZXJvaWRPcmJpdCk7XG4gICAgY29uc3QgeyBtaXNzRGlzdGFuY2U6IGRpc3RhbmNlU3RyLCBpZCB9ID0gbmVvO1xuICAgIGNvbnN0IGRpc3RhbmNlID0gcGFyc2VGbG9hdChkaXN0YW5jZVN0cik7XG5cbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5JY29zYWhlZHJvbkdlb21ldHJ5KGRpYW1ldGVyLCAxKTtcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XG4gICAgICBtYXA6IHRleHR1cmUsXG4gICAgICBzcGVjdWxhcjogXCJ3aGl0ZVwiLFxuICAgICAgYnVtcE1hcDogdGV4dHVyZTIsXG4gICAgICBidW1wU2NhbGU6IDAuMSxcbiAgICB9KTtcbiAgICBjb25zdCBhc3Rlcm9pZCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgY29uc3QgcmFuZG9tID0gcmFuZG9tUG9zaXRpb24oaWQsIGJhc2VMb2coZGlzdGFuY2UgLyAxMCwgMTMpKTtcbiAgICBhc3Rlcm9pZE9yYml0LnBvc2l0aW9uLnNldChyYW5kb20ueCwgcmFuZG9tLnksIHJhbmRvbS56KTtcbiAgICBpZiAoXG4gICAgICBhc3Rlcm9pZC5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uIGluc3RhbmNlb2YgVEhSRUUuQnVmZmVyQXR0cmlidXRlXG4gICAgKSB7XG4gICAgICBzaGFwZUFzdGVyb2lkcyhhc3Rlcm9pZC5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uKTtcbiAgICB9XG4gICAgYXN0ZXJvaWRPcmJpdC5zY2FsZS5zZXQoMC4wMDksIDAuMDA5LCAwLjAwOSk7XG4gICAgYXN0ZXJvaWRPcmJpdC5hZGQoYXN0ZXJvaWQpO1xuXG4gICAgY29uc3QgdGVtcFYgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSgyNSwgMiwgMC4xLCAxMDApO1xuXG4gICAgYXN0ZXJvaWQudXBkYXRlV29ybGRNYXRyaXgodHJ1ZSwgZmFsc2UpO1xuICAgIGFzdGVyb2lkLmdldFdvcmxkUG9zaXRpb24odGVtcFYpO1xuICAgIGNhbWVyYS5wb3NpdGlvbi5zZXQodGVtcFYueCAtIDEwMCwgdGVtcFYueSwgdGVtcFYueik7XG4gICAgY2FtZXJhLnNjYWxlLnNldCgxMDAsIDEwMCwgMTAwKTtcbiAgICBjYW1lcmEubG9va0F0KHRlbXBWKTtcbiAgICBjcmVhdGVPcmJpdENvbnRyb2xzKGNhbWVyYSwgY2FudmFzLCB0ZW1wVik7XG4gICAgYW5pbWF0aW9ucy5mdW5jdGlvbnMucHVzaCgoKSA9PiB7XG4gICAgICBhc3Rlcm9pZC5nZXRXb3JsZFBvc2l0aW9uKHRlbXBWKTtcbiAgICAgIGNhbWVyYS5sb29rQXQodGVtcFYpO1xuICAgIH0pO1xuXG4gICAgYXN0ZXJvaWRPcmJpdC5hZGQoY2FtZXJhKTtcbiAgICBhbmltYXRpb25zLmFzdGVyb2lkcy5wdXNoKGFzdGVyb2lkKTtcblxuICAgIGNvbnN0IHJldmVydFRvTm9ybWFsRGlzcGxheSA9ICgpID0+IHtcbiAgICAgIC8vIGNhbnZhcy5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhbGxcIjtcbiAgICAgIGFuaW1hdGlvbnMuY2FtZXJhcyA9IFtdO1xuICAgIH07XG5cbiAgICBhc3Rlcm9pZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgSW50ZXJhY3RpdmVFdmVudCkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBhbmltYXRpb25zLmNhbWVyYXMgPSBbXTtcbiAgICAgICAgYW5pbWF0aW9ucy5jYW1lcmFzLnB1c2goY2FtZXJhKTtcbiAgICAgICAgLy8gY2FudmFzLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgICAgZGlzcGxheUFzdGVyb2lkSW5mbyhuZW8sIHJldmVydFRvTm9ybWFsRGlzcGxheSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgYXN0ZXJvaWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBJbnRlcmFjdGl2ZUV2ZW50KSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGFzdGVyb2lkLm1hdGVyaWFsLmVtaXNzaXZlLnNldEhleCgweGZmZmZmZik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICB9XG4gICAgfSk7XG4gICAgYXN0ZXJvaWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIChlKSA9PiB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIEludGVyYWN0aXZlRXZlbnQpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgYXN0ZXJvaWQubWF0ZXJpYWwuZW1pc3NpdmUuc2V0SGV4KDB4MDAwMDAwKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1hbmFnZXIuYWRkKGFzdGVyb2lkKTtcbiAgfVxufTtcblxuY29uc3QgaW5pdCA9IChkYXRhOiBEYXRhU29ydGVyIHwgbnVsbCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NcIik7XG4gIGNvbnN0IGNlbnRlciA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApO1xuXG4gIGlmIChjYW52YXMgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBjYW52YXMgfSk7XG4gICAgY29uc3Qgc2NlbmUgPSBjcmVhdGVTY2VuZShyZW5kZXJlcik7XG4gICAgY29uc3QgY2FtZXJhID0gY3JlYXRlQ2FtZXJhKHNjZW5lKTtcbiAgICBjb25zdCBtYW5hZ2VyID0gbmV3IEludGVyYWN0aW9uTWFuYWdlcihyZW5kZXJlciwgY2FtZXJhLCBjYW52YXMsIGZhbHNlKTtcbiAgICBjcmVhdGVPcmJpdENvbnRyb2xzKGNhbWVyYSwgY2FudmFzLCBjZW50ZXIpO1xuICAgIGNyZWF0ZUxpZ2h0aW5nKHNjZW5lKTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgY29uc3QgZWFydGhPcmJpdCA9IGNyZWF0ZUVhcnRoT3JiaXQoc2NlbmUsIGNlbnRlcik7XG4gICAgICBjb25zdCBsdW5hckVhcnRoT3JiaXQgPSBjcmVhdGVMdW5hckVhcnRoT3JiaXQoZWFydGhPcmJpdCk7XG4gICAgICBjcmVhdGVFYXJ0aChsdW5hckVhcnRoT3JiaXQpO1xuICAgICAgY29uc3QgbW9vbk9yYml0ID0gY3JlYXRlTW9vbk9yYml0KGx1bmFyRWFydGhPcmJpdCk7XG4gICAgICBjcmVhdGVNb29uKG1vb25PcmJpdCk7XG4gICAgICBjcmVhdGVBc3Rlcm9pZHMoZWFydGhPcmJpdCwgZGF0YSwgbWFuYWdlciwgY2FudmFzKTtcbiAgICB9XG4gICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgIGFuaW1hdGUocmVuZGVyZXIsIHNjZW5lLCBjYW1lcmEsIG1hbmFnZXIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuIiwiY29uc3QgYmFzZUxvZyA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gTWF0aC5sb2coeCkgLyBNYXRoLmxvZyh5KTtcblxuY29uc3QgcHNldWRvUmFuZG9tID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgbnVtYmVyID0gcGFyc2VGbG9hdChpZCk7XG4gIGNvbnN0IHN1bSA9IGlkXG4gICAgLnNwbGl0KFwiXCIpXG4gICAgLm1hcCgobnVtKSA9PiBwYXJzZUZsb2F0KG51bSkpXG4gICAgLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyLCAwKTtcbiAgY29uc3QgdmFsdWUgPSAobnVtYmVyIC0gc3VtKSAvIChudW1iZXIgKyBzdW0pO1xuICBjb25zdCB2YWx1ZUFyciA9IHZhbHVlXG4gICAgLnRvU3RyaW5nKClcbiAgICAuc3BsaXQoXCJcIilcbiAgICAuZmlsdGVyKChzdHIpID0+IHtcbiAgICAgIGlmIChzdHIgIT09IFwiLlwiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgdmFsdWVBcnJbdmFsdWVBcnIubGVuZ3RoIC0gMV0gPSBcIjBcIjtcbiAgdmFsdWVBcnJbdmFsdWVBcnIubGVuZ3RoIC0gMl0gPSBcIi5cIjtcbiAgY29uc3QgbnVtID0gcGFyc2VGbG9hdCh2YWx1ZUFyci5yZXZlcnNlKCkuam9pbihcIlwiKSk7XG4gIHJldHVybiBudW07XG59O1xuXG5jb25zdCByYW5kb21Qb3NpdGlvbiA9IChpZDogc3RyaW5nLCBkaXN0YW5jZTogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHZhbHVlMSA9IHBzZXVkb1JhbmRvbShgJHtpZH0xMjM0NWApICogZGlzdGFuY2U7XG4gIGNvbnN0IHZhbHVlMiA9XG4gICAgcHNldWRvUmFuZG9tKGlkICsgaWQpICogKHBzZXVkb1JhbmRvbShgJHtpZH01MzI0MWApID4gMC41ID8gLTEgOiAxKTtcbiAgY29uc3QgaW50ZXJtZWRpYXRlID0gdmFsdWUxICoqIDIgKyB2YWx1ZTIgKiogMjtcbiAgY29uc3QgdmFsdWUzID0gKGRpc3RhbmNlICoqIDIgLSBpbnRlcm1lZGlhdGUpICoqIDAuNTtcblxuICBjb25zdCByYW5kb20gPSBwc2V1ZG9SYW5kb20oaWQgKyBpZCkgKiAyO1xuXG4gIGlmIChyYW5kb20gPiAxKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHZhbHVlMSAqIChwc2V1ZG9SYW5kb20oYCR7aWR9ODc2MDVgKSA+IDAuNSA/IDEgOiAtMSksXG4gICAgICB5OiB2YWx1ZTIsXG4gICAgICB6OiB2YWx1ZTMgKiAocHNldWRvUmFuZG9tKGlkICsgaWQpID4gMC41ID8gMSA6IC0xKSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiB2YWx1ZTMgKiAocHNldWRvUmFuZG9tKGAke2lkfTIxMzk4YCkgPiAwLjUgPyAxIDogLTEpLFxuICAgIHk6IHZhbHVlMixcbiAgICB6OiB2YWx1ZTEgKiAocHNldWRvUmFuZG9tKGlkICsgaWQpID4gMC41ID8gMSA6IC0xKSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IGJhc2VMb2csIHJhbmRvbVBvc2l0aW9uIH07XG4iXSwibmFtZXMiOlsic3BhY2VtcDMiLCJzcGFjZW9nZyIsImNyZWF0ZUF1ZGlvIiwiYXVkaW8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJzb3VyY2UiLCJzcmMiLCJ0eXBlIiwiYXBwZW5kQ2hpbGQiLCJzb3VyY2UyIiwiaW5pdGlhbERpc3BsYXkiLCJjb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiSFRNTEVsZW1lbnQiLCJzb3VuZERpdiIsInNvdW5kIiwibWljcm9EaXYiLCJpIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXkiLCJ0aGVuIiwibWljcm9EaXYyIiwic291bmREaXYyIiwiYXVkaW8yIiwicmVwbGFjZUNoaWxkcmVuIiwiaTIiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJwYXVzZSIsImRpc3BsYXlEaXYxSW5mbyIsImFzdGVyb2lkSW5mbyIsImRpdjEiLCJuYW1lRGl2IiwidGV4dENvbnRlbnQiLCJuYW1lIiwibWFnbml0dWRlRGl2IiwiYWJzb2x1dGVNYWduaXR1ZGUiLCJ2ZWxvY2l0eURpdiIsInJlbGF0aXZlVmVsb2NpdHkiLCJkaXNwbGF5RGl2MkluZm8iLCJkaXYyIiwibWF4RGlhbWV0ZXJEaXYiLCJlc3RpbWF0ZWREaWFtZXRlck1heCIsIm1pbkRpYW1ldGVyRGl2IiwiZXN0aW1hdGVkRGlhbWV0ZXJNaW4iLCJkaXNwbGF5RGl2M0luZm8iLCJyZXZlcnRGdW5jdGlvbiIsImRpdjMiLCJoYXphcmREaXYiLCJpY29uRGl2IiwidGV4dERpdiIsInBvdGVudGlhbGx5SGF6YXJkb3VzIiwiYmFja0RpdiIsImJhY2tJY29uIiwiYmFja0kiLCJiYWNrVGV4dCIsImRpc3BsYXlEaXY0SW5mbyIsImRpdjQiLCJjbG9zZXN0QXBwcm9hY2hEaXYiLCJjbG9zZXN0QXBwcm9hY2hEYXRlIiwibWlzc0Rpc3RhbmNlRGl2IiwicGFyc2VGbG9hdCIsIm1pc3NEaXN0YW5jZSIsInRvRml4ZWQiLCJvcmJpdGluZ0JvZHlEaXYiLCJvcmJpdGluZ0JvZHkiLCJkaXNwbGF5QXN0ZXJvaWRJbmZvIiwiaW5mb0RpdiIsInJldmVydCIsInJlbW92ZUNoaWxkIiwiVEhSRUUiLCJJbnRlcmFjdGlvbk1hbmFnZXIiLCJJbnRlcmFjdGl2ZUV2ZW50IiwiT3JiaXRDb250cm9scyIsImJhc2VMb2ciLCJyYW5kb21Qb3NpdGlvbiIsImdhbGF4eSIsImVhcnRobWFwIiwiZWFydGhidW1wIiwiZWFydGhjbG91ZCIsIm1vb24iLCJtb29uYnVtcCIsImFzdGVyb2lkSW1nIiwiYXN0ZXJvaWRCdW1wIiwiYW5pbWF0aW9ucyIsImFuaW1hdGUiLCJjbG91ZCIsImVhcnRoIiwiYXN0ZXJvaWRzIiwibHVuYXJFYXJ0aCIsImVhcnRoT3JiaXQiLCJjYW1lcmFzIiwiZnVuY3Rpb25zIiwibG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsImNyZWF0ZVNjZW5lIiwicmVuZGVyZXIiLCJzY2VuZSIsIlNjZW5lIiwidGV4dHVyZSIsImxvYWQiLCJpbWFnZSIsIkhUTUxJbWFnZUVsZW1lbnQiLCJydCIsIldlYkdMQ3ViZVJlbmRlclRhcmdldCIsImhlaWdodCIsImZyb21FcXVpcmVjdGFuZ3VsYXJUZXh0dXJlIiwiYmFja2dyb3VuZCIsImNyZWF0ZUNhbWVyYSIsImZvdiIsImFzcGVjdCIsIm5lYXIiLCJmYXIiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInBvc2l0aW9uIiwic2V0IiwiY3JlYXRlT3JiaXRDb250cm9scyIsImNhbnZhcyIsImNlbnRlciIsImNvbnRyb2xzIiwidGFyZ2V0IiwiY29weSIsIlZlY3RvcjMiLCJ1cGRhdGUiLCJjcmVhdGVMaWdodGluZyIsImNvbG9yIiwiaW50ZW5zaXR5IiwibGlnaHRpbmciLCJEaXJlY3Rpb25hbExpZ2h0IiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwicmVzaXplUmVuZGVyZXJUb0Rpc3BsYXlTaXplIiwiZG9tRWxlbWVudCIsIm5lZWRzUmVzaXplIiwiY2xpZW50V2lkdGgiLCJ3aWR0aCIsImNsaWVudEhlaWdodCIsInNldFNpemUiLCJtYW5hZ2VyIiwicmVuZGVyIiwidGltZSIsInRpbWVJblNlY29uZHMiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiZm9yRWFjaCIsIm9iamVjdCIsInJvdGF0aW9uIiwieSIsIm5keCIsIngiLCJ6IiwiZnVuYyIsImxlbmd0aCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNyZWF0ZUVhcnRoT3JiaXQiLCJPYmplY3QzRCIsIm15QXhpcyIsInJvdGF0ZU9uQXhpcyIsIk1hdGhVdGlscyIsImRlZ1RvUmFkIiwicHVzaCIsImNyZWF0ZUx1bmFyRWFydGhPcmJpdCIsImx1bmFyRWFydGhPcmJpdCIsImNyZWF0ZUVhcnRoIiwiYmFzZSIsImdlb21ldHJ5IiwiU3BoZXJlR2VvbWV0cnkiLCJjbG91ZEdlb21ldHJ5IiwiYnVtcFRleHR1cmUiLCJjbG91ZFRleHR1cmUiLCJtYXRlcmlhbCIsIk1lc2hQaG9uZ01hdGVyaWFsIiwibWFwIiwiYnVtcE1hcCIsImJ1bXBTY2FsZSIsImNsb3VkTWF0ZXJpYWwiLCJ0cmFuc3BhcmVudCIsIm9wYWNpdHkiLCJncm91bmQiLCJNZXNoIiwiY3JlYXRlTW9vbk9yYml0IiwibW9vbk9yYml0IiwiY3JlYXRlTW9vbiIsIm1vb25UZXh0dXJlIiwibW9vbk1lc2giLCJzaGFwZUFzdGVyb2lkcyIsImFyckxpa2UiLCJhcnJheSIsImNoZWNrIiwicG9zaXRpb25TdG9yZSIsInBvc2l0aW9uQXJyIiwiQXJyYXkiLCJmcm9tIiwibnVtYmVyIiwidW5pcXVlVmFsdWVzIiwiYXJyIiwidmFsIiwiYXJyMiIsInByZXZlbnRNdXQiLCJNYXRoIiwicmFuZG9tIiwiZmluYWxBcnIiLCJjcmVhdGVBc3Rlcm9pZHMiLCJkYXRhIiwibmVvcyIsIm5lb0FyciIsInRleHR1cmUyIiwibmVvIiwiZGlhbWV0ZXIiLCJhdmVyYWdlRGlhbWV0ZXIiLCJhc3Rlcm9pZE9yYml0IiwiZGlzdGFuY2VTdHIiLCJpZCIsImRpc3RhbmNlIiwiSWNvc2FoZWRyb25HZW9tZXRyeSIsInNwZWN1bGFyIiwiYXN0ZXJvaWQiLCJhdHRyaWJ1dGVzIiwiQnVmZmVyQXR0cmlidXRlIiwic2NhbGUiLCJ0ZW1wViIsInVwZGF0ZVdvcmxkTWF0cml4IiwiZ2V0V29ybGRQb3NpdGlvbiIsImxvb2tBdCIsInJldmVydFRvTm9ybWFsRGlzcGxheSIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJlbWlzc2l2ZSIsInNldEhleCIsImJvZHkiLCJzdHlsZSIsImN1cnNvciIsImluaXQiLCJIVE1MQ2FudmFzRWxlbWVudCIsIldlYkdMUmVuZGVyZXIiLCJwc2V1ZG9SYW5kb20iLCJzdW0iLCJzcGxpdCIsIm51bSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ2YWx1ZSIsInZhbHVlQXJyIiwidG9TdHJpbmciLCJmaWx0ZXIiLCJzdHIiLCJyZXZlcnNlIiwiam9pbiIsInZhbHVlMSIsInZhbHVlMiIsImludGVybWVkaWF0ZSIsInZhbHVlMyJdLCJzb3VyY2VSb290IjoiIn0=