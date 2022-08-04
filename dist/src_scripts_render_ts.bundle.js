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
/* harmony export */   "errorDisplay": function() { return /* binding */ errorDisplay; },
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

var errorDisplay = function errorDisplay() {
  var container = document.querySelector(".container");

  if (container instanceof HTMLElement) {
    var errorDiv = document.createElement("div");
    errorDiv.classList.add("error");
    errorDiv.textContent = "Error loading data!";
    container.appendChild(errorDiv);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmlwdHNfcmVuZGVyX3RzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBRUEsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtFQUN4QixJQUFNQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFkO0VBQ0FGLEtBQUssQ0FBQ0csU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsT0FBcEI7RUFDQUosS0FBSyxDQUFDSyxZQUFOLENBQW1CLFVBQW5CLEVBQStCLE1BQS9CO0VBQ0FMLEtBQUssQ0FBQ0ssWUFBTixDQUFtQixNQUFuQixFQUEyQixNQUEzQjtFQUNBLElBQU1DLE1BQU0sR0FBR0wsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7RUFDQUksTUFBTSxDQUFDQyxHQUFQLEdBQWFWLDhDQUFiO0VBQ0FTLE1BQU0sQ0FBQ0UsSUFBUCxHQUFjLFlBQWQ7RUFDQVIsS0FBSyxDQUFDUyxXQUFOLENBQWtCSCxNQUFsQjtFQUNBLElBQU1JLE9BQU8sR0FBR1QsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWhCO0VBQ0FRLE9BQU8sQ0FBQ0gsR0FBUixHQUFjVCw4Q0FBZDtFQUNBWSxPQUFPLENBQUNGLElBQVIsR0FBZSxXQUFmO0VBQ0FSLEtBQUssQ0FBQ1MsV0FBTixDQUFrQkMsT0FBbEI7RUFDQSxPQUFPVixLQUFQO0FBQ0QsQ0FkRDs7QUFnQkEsSUFBTVcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0VBQzNCLElBQU1DLFNBQVMsR0FBR1gsUUFBUSxDQUFDWSxhQUFULENBQXVCLFlBQXZCLENBQWxCOztFQUNBLElBQUlELFNBQVMsWUFBWUUsV0FBekIsRUFBc0M7SUFDcEMsSUFBTUMsUUFBUSxHQUFHZCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBakI7SUFDQWEsUUFBUSxDQUFDWixTQUFULENBQW1CQyxHQUFuQixDQUF1QixVQUF2QjtJQUVBLElBQUlZLEtBQUssR0FBRyxLQUFaO0lBQ0EsSUFBTUMsUUFBUSxHQUFHaEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWpCO0lBQ0FlLFFBQVEsQ0FBQ2QsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsVUFBdkI7SUFDQSxJQUFNYyxDQUFDLEdBQUdqQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBVjtJQUNBZ0IsQ0FBQyxDQUFDZixTQUFGLENBQVlDLEdBQVosQ0FBZ0IsS0FBaEIsRUFBdUIscUJBQXZCO0lBQ0FhLFFBQVEsQ0FBQ1IsV0FBVCxDQUFxQlMsQ0FBckI7SUFDQSxJQUFNbEIsS0FBSyxHQUFHRCxXQUFXLEVBQXpCO0lBQ0FrQixRQUFRLENBQUNSLFdBQVQsQ0FBcUJULEtBQXJCO0lBQ0FlLFFBQVEsQ0FBQ04sV0FBVCxDQUFxQlEsUUFBckI7SUFFQUEsUUFBUSxDQUFDRSxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxZQUFNO01BQ3ZDLElBQUksQ0FBQ0gsS0FBTCxFQUFZO1FBQ1ZBLEtBQUssR0FBRyxJQUFSO1FBQ0FoQixLQUFLLENBQ0ZvQixJQURILEdBRUdDLElBRkgsQ0FFUSxZQUFNO1VBQ1YsSUFBTUMsU0FBUyxHQUFHckIsUUFBUSxDQUFDWSxhQUFULENBQXVCLFdBQXZCLENBQWxCO1VBQ0EsSUFBTVUsU0FBUyxHQUFHdEIsUUFBUSxDQUFDWSxhQUFULENBQXVCLFdBQXZCLENBQWxCO1VBQ0EsSUFBTVcsTUFBTSxHQUFHdkIsUUFBUSxDQUFDWSxhQUFULENBQXVCLE9BQXZCLENBQWY7O1VBQ0EsSUFBSVMsU0FBUyxJQUFJQyxTQUFiLElBQTBCQyxNQUE5QixFQUFzQztZQUNwQ0YsU0FBUyxDQUFDRyxlQUFWO1lBQ0EsSUFBTUMsRUFBRSxHQUFHekIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQVg7WUFDQXdCLEVBQUUsQ0FBQ3ZCLFNBQUgsQ0FBYUMsR0FBYixDQUFpQixLQUFqQixFQUF3QixlQUF4QjtZQUNBa0IsU0FBUyxDQUFDYixXQUFWLENBQXNCaUIsRUFBdEI7WUFDQUosU0FBUyxDQUFDYixXQUFWLENBQXNCZSxNQUF0QjtZQUNBRCxTQUFTLENBQUNkLFdBQVYsQ0FBc0JhLFNBQXRCO1VBQ0Q7UUFDRixDQWRILEVBZUdLLEtBZkgsQ0FlUyxZQUFNO1VBQ1hDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO1FBQ0QsQ0FqQkg7TUFrQkQsQ0FwQkQsTUFvQk87UUFDTGIsS0FBSyxHQUFHLEtBQVI7UUFDQSxJQUFNUSxNQUFNLEdBQUd2QixRQUFRLENBQUNZLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZjtRQUNBLElBQU1TLFNBQVMsR0FBR3JCLFFBQVEsQ0FBQ1ksYUFBVCxDQUF1QixXQUF2QixDQUFsQjtRQUNBLElBQU1VLFNBQVMsR0FBR3RCLFFBQVEsQ0FBQ1ksYUFBVCxDQUF1QixXQUF2QixDQUFsQjs7UUFDQSxJQUFJUyxTQUFTLElBQUlDLFNBQWIsSUFBMEJDLE1BQTlCLEVBQXNDO1VBQ3BDQSxNQUFNLENBQUNNLEtBQVA7VUFDQVIsU0FBUyxDQUFDRyxlQUFWO1VBQ0EsSUFBTUMsRUFBRSxHQUFHekIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQVg7VUFDQXdCLEVBQUUsQ0FBQ3ZCLFNBQUgsQ0FBYUMsR0FBYixDQUFpQixLQUFqQixFQUF3QixxQkFBeEI7VUFDQWtCLFNBQVMsQ0FBQ2IsV0FBVixDQUFzQmlCLEVBQXRCO1VBQ0FKLFNBQVMsQ0FBQ2IsV0FBVixDQUFzQmUsTUFBdEI7VUFDQUQsU0FBUyxDQUFDZCxXQUFWLENBQXNCYSxTQUF0QjtRQUNEO01BQ0Y7SUFDRixDQXBDRDtJQXNDQVYsU0FBUyxDQUFDSCxXQUFWLENBQXNCTSxRQUF0QjtFQUNEO0FBQ0YsQ0F4REQ7O0FBMERBLElBQU1nQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLFlBQUQsRUFBZ0M7RUFDdEQsSUFBTUMsSUFBSSxHQUFHaEMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWI7RUFDQStCLElBQUksQ0FBQzlCLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixNQUFuQjtFQUVBLElBQU04QixPQUFPLEdBQUdqQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7RUFDQWdDLE9BQU8sQ0FBQy9CLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLFNBQXRCO0VBQ0E4QixPQUFPLENBQUNDLFdBQVIsbUJBQStCSCxZQUFZLENBQUNJLElBQTVDO0VBQ0FILElBQUksQ0FBQ3hCLFdBQUwsQ0FBaUJ5QixPQUFqQjtFQUVBLElBQU1HLFlBQVksR0FBR3BDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFyQjtFQUNBbUMsWUFBWSxDQUFDbEMsU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsY0FBM0I7RUFDQWlDLFlBQVksQ0FBQ0YsV0FBYixpQ0FBa0RILFlBQVksQ0FBQ00saUJBQS9EO0VBQ0FMLElBQUksQ0FBQ3hCLFdBQUwsQ0FBaUI0QixZQUFqQjtFQUVBLElBQU1FLFdBQVcsR0FBR3RDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFwQjtFQUNBcUMsV0FBVyxDQUFDcEMsU0FBWixDQUFzQkMsR0FBdEIsQ0FBMEIsYUFBMUI7RUFDQW1DLFdBQVcsQ0FBQ0osV0FBWixnQ0FBZ0RILFlBQVksQ0FBQ1EsZ0JBQTdEO0VBQ0FQLElBQUksQ0FBQ3hCLFdBQUwsQ0FBaUI4QixXQUFqQjtFQUVBLE9BQU9OLElBQVA7QUFDRCxDQXBCRDs7QUFzQkEsSUFBTVEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDVCxZQUFELEVBQWdDO0VBQ3RELElBQU1VLElBQUksR0FBR3pDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFiO0VBQ0F3QyxJQUFJLENBQUN2QyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsTUFBbkI7RUFFQSxJQUFNdUMsY0FBYyxHQUFHMUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXZCO0VBQ0F5QyxjQUFjLENBQUN4QyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixnQkFBN0I7RUFDQXVDLGNBQWMsQ0FBQ1IsV0FBZix5Q0FBNERILFlBQVksQ0FBQ1ksb0JBQXpFO0VBQ0FGLElBQUksQ0FBQ2pDLFdBQUwsQ0FBaUJrQyxjQUFqQjtFQUVBLElBQU1FLGNBQWMsR0FBRzVDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUF2QjtFQUNBMkMsY0FBYyxDQUFDMUMsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsZ0JBQTdCO0VBQ0F5QyxjQUFjLENBQUNWLFdBQWYseUNBQTRESCxZQUFZLENBQUNjLG9CQUF6RTtFQUNBSixJQUFJLENBQUNqQyxXQUFMLENBQWlCb0MsY0FBakI7RUFFQSxPQUFPSCxJQUFQO0FBQ0QsQ0FmRDs7QUFpQkEsSUFBTUssZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUN0QmYsWUFEc0IsRUFFdEJnQixjQUZzQixFQUduQjtFQUNILElBQU1DLElBQUksR0FBR2hELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFiO0VBQ0ErQyxJQUFJLENBQUM5QyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsTUFBbkI7RUFFQSxJQUFNOEMsU0FBUyxHQUFHakQsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWxCO0VBQ0FnRCxTQUFTLENBQUMvQyxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixXQUF4QjtFQUNBLElBQU0rQyxPQUFPLEdBQUdsRCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7RUFDQSxJQUFNZ0IsQ0FBQyxHQUFHakIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQVY7RUFDQSxJQUFNa0QsT0FBTyxHQUFHbkQsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWhCOztFQUVBLElBQUk4QixZQUFZLENBQUNxQixvQkFBakIsRUFBdUM7SUFDckNuQyxDQUFDLENBQUNmLFNBQUYsQ0FBWUMsR0FBWixDQUFnQixLQUFoQixFQUF1Qix5QkFBdkI7SUFDQStDLE9BQU8sQ0FBQzFDLFdBQVIsQ0FBb0JTLENBQXBCO0lBQ0FnQyxTQUFTLENBQUN6QyxXQUFWLENBQXNCMEMsT0FBdEI7SUFFQUMsT0FBTyxDQUFDakIsV0FBUixHQUFzQixvQ0FBdEI7SUFDQWUsU0FBUyxDQUFDekMsV0FBVixDQUFzQjJDLE9BQXRCO0lBRUFGLFNBQVMsQ0FBQy9DLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFFBQXhCO0VBQ0QsQ0FURCxNQVNPO0lBQ0xjLENBQUMsQ0FBQ2YsU0FBRixDQUFZQyxHQUFaLENBQWdCLEtBQWhCLEVBQXVCLGlCQUF2QjtJQUNBK0MsT0FBTyxDQUFDMUMsV0FBUixDQUFvQlMsQ0FBcEI7SUFDQWdDLFNBQVMsQ0FBQ3pDLFdBQVYsQ0FBc0IwQyxPQUF0QjtJQUVBQyxPQUFPLENBQUNqQixXQUFSLEdBQXNCLHdDQUF0QjtJQUNBZSxTQUFTLENBQUN6QyxXQUFWLENBQXNCMkMsT0FBdEI7SUFFQUYsU0FBUyxDQUFDL0MsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsWUFBeEI7RUFDRDs7RUFDRDZDLElBQUksQ0FBQ3hDLFdBQUwsQ0FBaUJ5QyxTQUFqQjtFQUVBLElBQU1JLE9BQU8sR0FBR3JELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFoQjtFQUNBb0QsT0FBTyxDQUFDbkQsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsU0FBdEI7RUFFQSxJQUFNbUQsUUFBUSxHQUFHdEQsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWpCO0VBQ0EsSUFBTXNELEtBQUssR0FBR3ZELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFkO0VBQ0FzRCxLQUFLLENBQUNyRCxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixLQUFwQixFQUEyQiwwQkFBM0I7RUFDQW1ELFFBQVEsQ0FBQzlDLFdBQVQsQ0FBcUIrQyxLQUFyQjtFQUNBRixPQUFPLENBQUM3QyxXQUFSLENBQW9COEMsUUFBcEI7RUFFQSxJQUFNRSxRQUFRLEdBQUd4RCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBakI7RUFDQXVELFFBQVEsQ0FBQ3RCLFdBQVQsR0FBdUIsb0JBQXZCO0VBQ0FtQixPQUFPLENBQUM3QyxXQUFSLENBQW9CZ0QsUUFBcEI7RUFFQUgsT0FBTyxDQUFDbkMsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0M2QixjQUFsQztFQUVBQyxJQUFJLENBQUN4QyxXQUFMLENBQWlCNkMsT0FBakI7RUFFQSxPQUFPTCxJQUFQO0FBQ0QsQ0FwREQ7O0FBc0RBLElBQU1TLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQzFCLFlBQUQsRUFBZ0M7RUFDdEQsSUFBTTJCLElBQUksR0FBRzFELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFiO0VBQ0F5RCxJQUFJLENBQUN4RCxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsTUFBbkI7RUFFQSxJQUFNd0Qsa0JBQWtCLEdBQUczRCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBM0I7RUFDQTBELGtCQUFrQixDQUFDekQsU0FBbkIsQ0FBNkJDLEdBQTdCLENBQWlDLG9CQUFqQztFQUNBd0Qsa0JBQWtCLENBQUN6QixXQUFuQixvQ0FBMkRILFlBQVksQ0FBQzZCLG1CQUF4RTtFQUNBRixJQUFJLENBQUNsRCxXQUFMLENBQWlCbUQsa0JBQWpCO0VBRUEsSUFBTUUsZUFBZSxHQUFHN0QsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXhCO0VBQ0E0RCxlQUFlLENBQUMzRCxTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIsaUJBQTlCO0VBQ0EwRCxlQUFlLENBQUMzQixXQUFoQiw0QkFBZ0Q0QixVQUFVLENBQ3hEL0IsWUFBWSxDQUFDZ0MsWUFEMkMsQ0FBVixDQUU5Q0MsT0FGOEMsQ0FFdEMsQ0FGc0MsQ0FBaEQ7RUFHQU4sSUFBSSxDQUFDbEQsV0FBTCxDQUFpQnFELGVBQWpCO0VBRUEsSUFBTUksZUFBZSxHQUFHakUsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXhCO0VBQ0FnRSxlQUFlLENBQUMvRCxTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIsaUJBQTlCO0VBQ0E4RCxlQUFlLENBQUMvQixXQUFoQiw0QkFBZ0RILFlBQVksQ0FBQ21DLFlBQTdEO0VBQ0FSLElBQUksQ0FBQ2xELFdBQUwsQ0FBaUJ5RCxlQUFqQjtFQUVBLE9BQU9QLElBQVA7QUFDRCxDQXRCRDs7QUF3QkEsSUFBTVMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUMxQnBDLFlBRDBCLEVBRTFCZ0IsY0FGMEIsRUFHdkI7RUFDSCxJQUFNcEMsU0FBUyxHQUFHWCxRQUFRLENBQUNZLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBbEI7O0VBQ0EsSUFBSUQsU0FBUyxZQUFZRSxXQUF6QixFQUFzQztJQUNwQyxJQUFNdUQsT0FBTyxHQUFHcEUsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWhCO0lBQ0FtRSxPQUFPLENBQUNsRSxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixNQUF0QjtJQUNBUSxTQUFTLENBQUNILFdBQVYsQ0FBc0I0RCxPQUF0Qjs7SUFFQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO01BQ25CMUQsU0FBUyxDQUFDMkQsV0FBVixDQUFzQkYsT0FBdEI7TUFDQXJCLGNBQWM7SUFDZixDQUhEOztJQUtBLElBQU1mLElBQUksR0FBR0YsZUFBZSxDQUFDQyxZQUFELENBQTVCO0lBQ0EsSUFBTVUsSUFBSSxHQUFHRCxlQUFlLENBQUNULFlBQUQsQ0FBNUI7SUFDQSxJQUFNaUIsSUFBSSxHQUFHRixlQUFlLENBQUNmLFlBQUQsRUFBZXNDLE1BQWYsQ0FBNUI7SUFDQSxJQUFNWCxJQUFJLEdBQUdELGVBQWUsQ0FBQzFCLFlBQUQsQ0FBNUI7SUFFQXFDLE9BQU8sQ0FBQzVELFdBQVIsQ0FBb0J3QixJQUFwQjtJQUNBb0MsT0FBTyxDQUFDNUQsV0FBUixDQUFvQmlDLElBQXBCO0lBQ0EyQixPQUFPLENBQUM1RCxXQUFSLENBQW9Cd0MsSUFBcEI7SUFDQW9CLE9BQU8sQ0FBQzVELFdBQVIsQ0FBb0JrRCxJQUFwQjtFQUNEO0FBQ0YsQ0F6QkQ7O0FBMkJBLElBQU1hLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07RUFDekIsSUFBTTVELFNBQVMsR0FBR1gsUUFBUSxDQUFDWSxhQUFULENBQXVCLFlBQXZCLENBQWxCOztFQUNBLElBQUlELFNBQVMsWUFBWUUsV0FBekIsRUFBc0M7SUFDcEMsSUFBTTJELFFBQVEsR0FBR3hFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFqQjtJQUNBdUUsUUFBUSxDQUFDdEUsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsT0FBdkI7SUFDQXFFLFFBQVEsQ0FBQ3RDLFdBQVQsR0FBdUIscUJBQXZCO0lBQ0F2QixTQUFTLENBQUNILFdBQVYsQ0FBc0JnRSxRQUF0QjtFQUNEO0FBQ0YsQ0FSRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5TkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFjQSxJQUFNZSxVQUFzQixHQUFHO0VBQzdCQyxPQUFPLEVBQUUsSUFEb0I7RUFFN0JDLEtBQUssRUFBRSxFQUZzQjtFQUc3QkMsS0FBSyxFQUFFLEVBSHNCO0VBSTdCQyxTQUFTLEVBQUUsRUFKa0I7RUFLN0JSLElBQUksRUFBRSxFQUx1QjtFQU03QlMsVUFBVSxFQUFFLEVBTmlCO0VBTzdCQyxVQUFVLEVBQUUsRUFQaUI7RUFRN0JDLE9BQU8sRUFBRSxFQVJvQjtFQVM3QkMsU0FBUyxFQUFFO0FBVGtCLENBQS9CO0FBWUEsSUFBTUMsTUFBTSxHQUFHLElBQUl2QixpREFBSixFQUFmOztBQUVBLElBQU15QixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxRQUFELEVBQW1DO0VBQ3JELElBQU1DLEtBQUssR0FBRyxJQUFJM0IseUNBQUosRUFBZDtFQUNBLElBQU02QixPQUFPLEdBQUdOLE1BQU0sQ0FBQ08sSUFBUCxDQUFZeEIsZ0RBQVosRUFBb0IsWUFBTTtJQUN4QyxJQUFJdUIsT0FBTyxDQUFDRSxLQUFSLFlBQXlCQyxnQkFBN0IsRUFBK0M7TUFDN0MsSUFBTUMsRUFBRSxHQUFHLElBQUlqQyx5REFBSixDQUFnQzZCLE9BQU8sQ0FBQ0UsS0FBUixDQUFjSSxNQUE5QyxDQUFYO01BQ0FGLEVBQUUsQ0FBQ0csMEJBQUgsQ0FBOEJWLFFBQTlCLEVBQXdDRyxPQUF4QztNQUNBRixLQUFLLENBQUNVLFVBQU4sR0FBbUJKLEVBQUUsQ0FBQ0osT0FBdEI7SUFDRDtFQUNGLENBTmUsQ0FBaEI7RUFPQSxPQUFPRixLQUFQO0FBQ0QsQ0FWRDs7QUFZQSxJQUFNVyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDWCxLQUFELEVBQXdCO0VBQzNDLElBQU1ZLEdBQUcsR0FBRyxFQUFaO0VBQ0EsSUFBTUMsTUFBTSxHQUFHLENBQWY7RUFDQSxJQUFNQyxJQUFJLEdBQUcsR0FBYjtFQUNBLElBQU1DLEdBQUcsR0FBRyxFQUFaO0VBRUEsSUFBTUMsTUFBTSxHQUFHLElBQUkzQyxxREFBSixDQUE0QnVDLEdBQTVCLEVBQWlDQyxNQUFqQyxFQUF5Q0MsSUFBekMsRUFBK0NDLEdBQS9DLENBQWY7RUFDQUMsTUFBTSxDQUFDRSxRQUFQLENBQWdCQyxHQUFoQixDQUFvQixDQUFwQixFQUF1QixDQUF2QixFQUEwQixDQUExQjtFQUVBbkIsS0FBSyxDQUFDakcsR0FBTixDQUFVaUgsTUFBVjtFQUVBLE9BQU9BLE1BQVA7QUFDRCxDQVpEOztBQWNBLElBQU1JLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FDMUJKLE1BRDBCLEVBRTFCSyxNQUYwQixFQUcxQkMsTUFIMEIsRUFJdkI7RUFDSCxJQUFNQyxRQUFRLEdBQUcsSUFBSS9DLG9GQUFKLENBQWtCd0MsTUFBbEIsRUFBMEJLLE1BQTFCLENBQWpCO0VBQ0FFLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkMsSUFBaEIsQ0FBcUJILE1BQXJCLEVBQTZCdkgsR0FBN0IsQ0FBaUMsSUFBSXNFLDJDQUFKLENBQWtCLENBQUMsQ0FBbkIsRUFBc0IsQ0FBQyxDQUF2QixFQUEwQixDQUExQixDQUFqQztFQUNBa0QsUUFBUSxDQUFDSSxNQUFUO0FBQ0QsQ0FSRDs7QUFVQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUM1QixLQUFELEVBQXdCO0VBQzdDLElBQU02QixLQUFLLEdBQUcsUUFBZDtFQUNBLElBQU1DLFNBQVMsR0FBRyxDQUFsQjtFQUNBLElBQU1DLFFBQVEsR0FBRyxJQUFJMUQsb0RBQUosQ0FBMkJ3RCxLQUEzQixFQUFrQ0MsU0FBbEMsQ0FBakI7RUFDQUMsUUFBUSxDQUFDYixRQUFULENBQWtCQyxHQUFsQixDQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QjtFQUNBbkIsS0FBSyxDQUFDakcsR0FBTixDQUFVZ0ksUUFBVjtFQUVBLElBQU1FLFlBQVksR0FBRyxJQUFJNUQsZ0RBQUosQ0FBdUJ3RCxLQUF2QixFQUE4QkMsU0FBUyxHQUFHLENBQTFDLENBQXJCO0VBQ0E5QixLQUFLLENBQUNqRyxHQUFOLENBQVVrSSxZQUFWO0FBQ0QsQ0FURDs7QUFXQSxJQUFNRSwyQkFBMkIsR0FBRyxTQUE5QkEsMkJBQThCLENBQUNwQyxRQUFELEVBQW1DO0VBQ3JFLElBQU1zQixNQUFNLEdBQUd0QixRQUFRLENBQUNxQyxVQUF4QjtFQUNBLElBQU1DLFdBQVcsR0FDZmhCLE1BQU0sQ0FBQ2lCLFdBQVAsS0FBdUJqQixNQUFNLENBQUNrQixLQUE5QixJQUNBbEIsTUFBTSxDQUFDbUIsWUFBUCxLQUF3Qm5CLE1BQU0sQ0FBQ2IsTUFGakM7O0VBSUEsSUFBSTZCLFdBQUosRUFBaUI7SUFDZnRDLFFBQVEsQ0FBQzBDLE9BQVQsQ0FBaUJwQixNQUFNLENBQUNpQixXQUF4QixFQUFxQ2pCLE1BQU0sQ0FBQ21CLFlBQTVDLEVBQTBELEtBQTFEO0VBQ0Q7O0VBRUQsT0FBT0gsV0FBUDtBQUNELENBWEQ7O0FBYUEsSUFBTWpELE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQ2RXLFFBRGMsRUFFZEMsS0FGYyxFQUdkZ0IsTUFIYyxFQUlkMEIsT0FKYyxFQUtYO0VBQ0gsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsSUFBRCxFQUFrQjtJQUMvQixJQUFNQyxhQUFhLEdBQUdELElBQUksR0FBRyxLQUE3QjtJQUVBLElBQU12QixNQUFNLEdBQUd0QixRQUFRLENBQUNxQyxVQUF4QjtJQUNBcEIsTUFBTSxDQUFDSCxNQUFQLEdBQWdCUSxNQUFNLENBQUNpQixXQUFQLEdBQXFCakIsTUFBTSxDQUFDbUIsWUFBNUM7SUFDQXhCLE1BQU0sQ0FBQzhCLHNCQUFQOztJQUVBLElBQUlYLDJCQUEyQixDQUFDcEMsUUFBRCxDQUEvQixFQUEyQztNQUN6Q2lCLE1BQU0sQ0FBQ0gsTUFBUCxHQUFnQlEsTUFBTSxDQUFDaUIsV0FBUCxHQUFxQmpCLE1BQU0sQ0FBQ21CLFlBQTVDO01BQ0F4QixNQUFNLENBQUM4QixzQkFBUDtJQUNEOztJQUVEM0QsVUFBVSxDQUFDTSxVQUFYLENBQXNCc0QsT0FBdEIsQ0FBOEIsVUFBQ0MsTUFBRCxFQUFZO01BQ3hDQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLENBQWhCLEdBQW9CTCxhQUFhLEdBQUcsS0FBcEM7SUFDRCxDQUZEO0lBSUExRCxVQUFVLENBQUNFLEtBQVgsQ0FBaUIwRCxPQUFqQixDQUF5QixVQUFDQyxNQUFELEVBQVk7TUFDbkNBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsQ0FBaEIsR0FBb0JMLGFBQWEsR0FBRyxJQUFwQztJQUNELENBRkQ7SUFJQTFELFVBQVUsQ0FBQ0csS0FBWCxDQUFpQnlELE9BQWpCLENBQXlCLFVBQUNDLE1BQUQsRUFBWTtNQUNuQ0EsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxDQUFoQixHQUFvQkwsYUFBYSxHQUFHLElBQXBDO0lBQ0QsQ0FGRDtJQUlBMUQsVUFBVSxDQUFDSixJQUFYLENBQWdCZ0UsT0FBaEIsQ0FBd0IsVUFBQ0MsTUFBRCxFQUFZO01BQ2xDQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLENBQWhCLEdBQW9CTCxhQUFhLEdBQUcsSUFBcEM7SUFDRCxDQUZEO0lBSUExRCxVQUFVLENBQUNLLFVBQVgsQ0FBc0J1RCxPQUF0QixDQUE4QixVQUFDQyxNQUFELEVBQVk7TUFDeENBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsQ0FBaEIsR0FBb0JMLGFBQWEsR0FBRyxJQUFwQztJQUNELENBRkQ7SUFJQTFELFVBQVUsQ0FBQ0ksU0FBWCxDQUFxQndELE9BQXJCLENBQTZCLFVBQUNDLE1BQUQsRUFBU0csR0FBVCxFQUFpQjtNQUM1Q0gsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxDQUFoQixHQUFvQkwsYUFBYSxHQUFHLEdBQWhCLEdBQXNCTSxHQUFHLEdBQUcsSUFBaEQ7TUFDQUgsTUFBTSxDQUFDQyxRQUFQLENBQWdCRyxDQUFoQixHQUFvQlAsYUFBYSxHQUFHLEdBQWhCLEdBQXNCTSxHQUFHLEdBQUcsSUFBaEQ7TUFDQUgsTUFBTSxDQUFDQyxRQUFQLENBQWdCSSxDQUFoQixHQUFvQlIsYUFBYSxHQUFHLEdBQWhCLEdBQXNCTSxHQUFHLEdBQUcsSUFBaEQ7SUFDRCxDQUpEO0lBTUFoRSxVQUFVLENBQUNRLFNBQVgsQ0FBcUJvRCxPQUFyQixDQUE2QixVQUFDTyxJQUFELEVBQVU7TUFDckNBLElBQUk7SUFDTCxDQUZEO0lBSUFaLE9BQU8sQ0FBQ2YsTUFBUjs7SUFFQSxJQUFJeEMsVUFBVSxDQUFDTyxPQUFYLENBQW1CNkQsTUFBbkIsS0FBOEIsQ0FBbEMsRUFBcUM7TUFDbkN4RCxRQUFRLENBQUM0QyxNQUFULENBQWdCM0MsS0FBaEIsRUFBdUJnQixNQUF2QjtJQUNELENBRkQsTUFFTztNQUNMN0IsVUFBVSxDQUFDTyxPQUFYLENBQW1CLENBQW5CLEVBQXNCbUIsTUFBdEIsR0FBK0JRLE1BQU0sQ0FBQ2lCLFdBQVAsR0FBcUJqQixNQUFNLENBQUNtQixZQUEzRDtNQUNBckQsVUFBVSxDQUFDTyxPQUFYLENBQW1CLENBQW5CLEVBQXNCb0Qsc0JBQXRCO01BQ0EvQyxRQUFRLENBQUM0QyxNQUFULENBQWdCM0MsS0FBaEIsRUFBdUJiLFVBQVUsQ0FBQ08sT0FBWCxDQUFtQixDQUFuQixDQUF2QjtJQUNEOztJQUVEOEQsTUFBTSxDQUFDQyxxQkFBUCxDQUE2QmQsTUFBN0I7RUFDRCxDQXJERDs7RUFzREFhLE1BQU0sQ0FBQ0MscUJBQVAsQ0FBNkJkLE1BQTdCO0FBQ0QsQ0E3REQ7O0FBK0RBLElBQU1lLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQzFELEtBQUQsRUFBcUJzQixNQUFyQixFQUErQztFQUN0RSxJQUFNN0IsVUFBVSxHQUFHLElBQUlwQiw0Q0FBSixFQUFuQjtFQUNBb0IsVUFBVSxDQUFDeUIsUUFBWCxDQUFvQkMsR0FBcEIsQ0FBd0JHLE1BQU0sQ0FBQzhCLENBQS9CLEVBQWtDOUIsTUFBTSxDQUFDNEIsQ0FBekMsRUFBNEM1QixNQUFNLENBQUMrQixDQUFuRDtFQUNBLElBQU1PLE1BQU0sR0FBRyxJQUFJdkYsMkNBQUosQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBQyxDQUF0QixFQUF5QixDQUF6QixDQUFmO0VBQ0FvQixVQUFVLENBQUNvRSxZQUFYLENBQXdCRCxNQUF4QixFQUFnQ3ZGLHNEQUFBLENBQXlCLElBQXpCLENBQWhDO0VBQ0EyQixLQUFLLENBQUNqRyxHQUFOLENBQVUwRixVQUFWO0VBQ0FOLFVBQVUsQ0FBQ00sVUFBWCxDQUFzQnVFLElBQXRCLENBQTJCdkUsVUFBM0I7RUFDQSxPQUFPQSxVQUFQO0FBQ0QsQ0FSRDs7QUFVQSxJQUFNd0UscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDeEUsVUFBRCxFQUFnQztFQUM1RCxJQUFNeUUsZUFBZSxHQUFHLElBQUk3Riw0Q0FBSixFQUF4QjtFQUNBb0IsVUFBVSxDQUFDMUYsR0FBWCxDQUFlbUssZUFBZjtFQUNBL0UsVUFBVSxDQUFDSyxVQUFYLENBQXNCd0UsSUFBdEIsQ0FBMkJFLGVBQTNCO0VBQ0EsT0FBT0EsZUFBUDtBQUNELENBTEQ7O0FBT0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUEwQjtFQUM1QyxJQUFNOUUsS0FBSyxHQUFHLElBQUlqQiw0Q0FBSixFQUFkO0VBRUEsSUFBTWdHLFFBQVEsR0FBRyxJQUFJaEcsa0RBQUosQ0FBeUIsQ0FBekIsQ0FBakI7RUFDQSxJQUFNa0csYUFBYSxHQUFHLElBQUlsRyxrREFBSixDQUF5QixLQUF6QixDQUF0QjtFQUVBLElBQU02QixPQUFPLEdBQUdOLE1BQU0sQ0FBQ08sSUFBUCxDQUFZdkIsbURBQVosQ0FBaEI7RUFDQSxJQUFNNEYsV0FBVyxHQUFHNUUsTUFBTSxDQUFDTyxJQUFQLENBQVl0QixrREFBWixDQUFwQjtFQUNBLElBQU00RixZQUFZLEdBQUc3RSxNQUFNLENBQUNPLElBQVAsQ0FBWXJCLG1EQUFaLENBQXJCO0VBRUEsSUFBTTRGLFFBQVEsR0FBRyxJQUFJckcscURBQUosQ0FBNEI7SUFDM0N1RyxHQUFHLEVBQUUxRSxPQURzQztJQUUzQzJFLE9BQU8sRUFBRUwsV0FGa0M7SUFHM0NNLFNBQVMsRUFBRTtFQUhnQyxDQUE1QixDQUFqQjtFQUtBLElBQU1DLGFBQWEsR0FBRyxJQUFJMUcscURBQUosQ0FBNEI7SUFDaER1RyxHQUFHLEVBQUVILFlBRDJDO0lBRWhETyxXQUFXLEVBQUUsSUFGbUM7SUFHaERDLE9BQU8sRUFBRTtFQUh1QyxDQUE1QixDQUF0QjtFQU1BLElBQU1DLE1BQU0sR0FBRyxJQUFJN0csd0NBQUosQ0FBZWdHLFFBQWYsRUFBeUJLLFFBQXpCLENBQWY7RUFDQSxJQUFNckYsS0FBSyxHQUFHLElBQUloQix3Q0FBSixDQUFla0csYUFBZixFQUE4QlEsYUFBOUIsQ0FBZDtFQUVBekYsS0FBSyxDQUFDdkYsR0FBTixDQUFVbUwsTUFBVjtFQUNBNUYsS0FBSyxDQUFDdkYsR0FBTixDQUFVc0YsS0FBVjtFQUNBRixVQUFVLENBQUNHLEtBQVgsQ0FBaUIwRSxJQUFqQixDQUFzQmtCLE1BQXRCO0VBQ0EvRixVQUFVLENBQUNFLEtBQVgsQ0FBaUIyRSxJQUFqQixDQUFzQjNFLEtBQXRCO0VBRUEsSUFBTXVFLE1BQU0sR0FBRyxJQUFJdkYsMkNBQUosQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsQ0FBZjtFQUNBaUIsS0FBSyxDQUFDdUUsWUFBTixDQUFtQkQsTUFBbkIsRUFBMkJ2RixzREFBQSxDQUF5QixJQUF6QixDQUEzQjtFQUVBK0YsSUFBSSxDQUFDckssR0FBTCxDQUFTdUYsS0FBVDtFQUVBLE9BQU9BLEtBQVA7QUFDRCxDQW5DRDs7QUFxQ0EsSUFBTThGLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQzNGLFVBQUQsRUFBZ0M7RUFDdEQsSUFBTTRGLFNBQVMsR0FBRyxJQUFJaEgsNENBQUosRUFBbEI7RUFDQWdILFNBQVMsQ0FBQ25FLFFBQVYsQ0FBbUJDLEdBQW5CLENBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCLENBQTdCO0VBQ0ExQixVQUFVLENBQUMxRixHQUFYLENBQWVzTCxTQUFmO0VBQ0EsT0FBT0EsU0FBUDtBQUNELENBTEQ7O0FBT0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0QsU0FBRCxFQUErQjtFQUNoRCxJQUFNaEIsUUFBUSxHQUFHLElBQUloRyxrREFBSixDQUF5QixJQUF6QixDQUFqQjtFQUVBLElBQU1rSCxXQUFXLEdBQUczRixNQUFNLENBQUNPLElBQVAsQ0FBWXBCLDZDQUFaLENBQXBCO0VBQ0EsSUFBTXlGLFdBQVcsR0FBRzVFLE1BQU0sQ0FBQ08sSUFBUCxDQUFZbkIsaURBQVosQ0FBcEI7RUFDQSxJQUFNMEYsUUFBUSxHQUFHLElBQUlyRyxxREFBSixDQUE0QjtJQUMzQ3VHLEdBQUcsRUFBRVcsV0FEc0M7SUFFM0NWLE9BQU8sRUFBRUwsV0FGa0M7SUFHM0NNLFNBQVMsRUFBRTtFQUhnQyxDQUE1QixDQUFqQjtFQU1BLElBQU1VLFFBQVEsR0FBRyxJQUFJbkgsd0NBQUosQ0FBZWdHLFFBQWYsRUFBeUJLLFFBQXpCLENBQWpCO0VBRUFXLFNBQVMsQ0FBQ3RMLEdBQVYsQ0FBY3lMLFFBQWQ7RUFDQXJHLFVBQVUsQ0FBQ0osSUFBWCxDQUFnQmlGLElBQWhCLENBQXFCd0IsUUFBckI7QUFDRCxDQWZEOztBQWlCQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUN2RSxRQUFELEVBQXFDO0VBQzFELElBQU13RSxPQUFPLEdBQUd4RSxRQUFRLENBQUN5RSxLQUF6QjtFQUNBLElBQUlDLEtBQUssR0FBRyxDQUFaO0VBQ0EsSUFBTUMsYUFBeUIsR0FBRyxDQUFDLEVBQUQsQ0FBbEM7RUFDQSxJQUFNQyxXQUFXLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXTixPQUFYLENBQXBCO0VBQ0FJLFdBQVcsQ0FBQy9DLE9BQVosQ0FBb0IsVUFBQ2tELE1BQUQsRUFBWTtJQUM5QixJQUFJTCxLQUFLLEdBQUcsQ0FBWixFQUFlO01BQ2JBLEtBQUssR0FBRyxDQUFSO01BQ0FDLGFBQWEsQ0FBQ0EsYUFBYSxDQUFDdEMsTUFBZixDQUFiLEdBQXNDLENBQUMwQyxNQUFELENBQXRDO0lBQ0QsQ0FIRCxNQUdPO01BQ0xKLGFBQWEsQ0FBQ0EsYUFBYSxDQUFDdEMsTUFBZCxHQUF1QixDQUF4QixDQUFiLENBQXdDUyxJQUF4QyxDQUE2Q2lDLE1BQTdDO01BQ0FMLEtBQUssSUFBSSxDQUFUO0lBQ0Q7RUFDRixDQVJEO0VBVUEsSUFBTU0sWUFBd0IsR0FBRyxFQUFqQztFQUNBTCxhQUFhLENBQUM5QyxPQUFkLENBQXNCLFVBQUNvRCxHQUFELEVBQVM7SUFDN0IsSUFBSUQsWUFBWSxDQUFDM0MsTUFBYixLQUF3QixDQUE1QixFQUErQjtNQUM3QjJDLFlBQVksQ0FBQ2xDLElBQWIsQ0FBa0JtQyxHQUFsQjtJQUNELENBRkQsTUFFTztNQUNMLElBQUlDLEdBQUcsR0FBRyxJQUFWO01BQ0FGLFlBQVksQ0FBQ25ELE9BQWIsQ0FBcUIsVUFBQ3NELElBQUQsRUFBVTtRQUM3QixJQUFJRixHQUFHLENBQUMsQ0FBRCxDQUFILEtBQVdFLElBQUksQ0FBQyxDQUFELENBQWYsSUFBc0JGLEdBQUcsQ0FBQyxDQUFELENBQUgsS0FBV0UsSUFBSSxDQUFDLENBQUQsQ0FBckMsSUFBNENGLEdBQUcsQ0FBQyxDQUFELENBQUgsS0FBV0UsSUFBSSxDQUFDLENBQUQsQ0FBL0QsRUFBb0U7VUFDbEVELEdBQUcsR0FBRyxLQUFOO1FBQ0Q7TUFDRixDQUpEOztNQUtBLElBQUlBLEdBQUosRUFBUztRQUNQRixZQUFZLENBQUNsQyxJQUFiLENBQWtCbUMsR0FBbEI7TUFDRDtJQUNGO0VBQ0YsQ0FkRDtFQWdCQSxJQUFNRyxVQUFzQixHQUFHLEVBQS9CO0VBQ0FKLFlBQVksQ0FBQ25ELE9BQWIsQ0FBcUIsVUFBQ29ELEdBQUQsRUFBUztJQUM1QixJQUFNL0MsQ0FBQyxHQUFHLENBQUMrQyxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBQyxJQUFWLEdBQWlCSSxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBbEMsRUFBdUM1SSxPQUF2QyxDQUErQyxDQUEvQyxDQUFWO0lBQ0EsSUFBTXNGLENBQUMsR0FBRyxDQUFDaUQsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLENBQUMsSUFBVixHQUFpQkksSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQWxDLEVBQXVDNUksT0FBdkMsQ0FBK0MsQ0FBL0MsQ0FBVjtJQUNBLElBQU15RixDQUFDLEdBQUcsQ0FBQzhDLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxDQUFDLElBQVYsR0FBaUJJLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFsQyxFQUF1QzVJLE9BQXZDLENBQStDLENBQS9DLENBQVY7SUFFQWlJLGFBQWEsQ0FBQzlDLE9BQWQsQ0FBc0IsVUFBQ3NELElBQUQsRUFBT2xELEdBQVAsRUFBZTtNQUNuQyxJQUFJZ0QsR0FBRyxDQUFDLENBQUQsQ0FBSCxLQUFXRSxJQUFJLENBQUMsQ0FBRCxDQUFmLElBQXNCRixHQUFHLENBQUMsQ0FBRCxDQUFILEtBQVdFLElBQUksQ0FBQyxDQUFELENBQXJDLElBQTRDRixHQUFHLENBQUMsQ0FBRCxDQUFILEtBQVdFLElBQUksQ0FBQyxDQUFELENBQS9ELEVBQW9FO1FBQ2xFQyxVQUFVLENBQUNuRCxHQUFELENBQVYsR0FBa0IsQ0FBQ3pGLFVBQVUsQ0FBQzBGLENBQUQsQ0FBWCxFQUFnQjFGLFVBQVUsQ0FBQ3dGLENBQUQsQ0FBMUIsRUFBK0J4RixVQUFVLENBQUMyRixDQUFELENBQXpDLENBQWxCO01BQ0Q7SUFDRixDQUpEO0VBS0QsQ0FWRDtFQVlBLElBQU1vRCxRQUFrQixHQUFHLEVBQTNCO0VBRUFILFVBQVUsQ0FBQ3ZELE9BQVgsQ0FBbUIsVUFBQ29ELEdBQUQsRUFBUztJQUMxQiwyQkFBa0JBLEdBQWxCO0lBQUEsSUFBTy9DLENBQVA7SUFBQSxJQUFVRixDQUFWO0lBQUEsSUFBYUcsQ0FBYjs7SUFDQW9ELFFBQVEsQ0FBQ3pDLElBQVQsQ0FBY1osQ0FBZDtJQUNBcUQsUUFBUSxDQUFDekMsSUFBVCxDQUFjZCxDQUFkO0lBQ0F1RCxRQUFRLENBQUN6QyxJQUFULENBQWNYLENBQWQ7RUFDRCxDQUxEO0VBT0FuQyxRQUFRLENBQUNDLEdBQVQsQ0FBYXNGLFFBQWI7QUFDRCxDQXZERDs7QUF5REEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUN0QmpILFVBRHNCLEVBRXRCa0gsSUFGc0IsRUFHdEJqRSxPQUhzQixFQUl0QnJCLE1BSnNCLEVBS25CO0VBQ0gsSUFBTXVGLElBQUksR0FBR0QsSUFBSSxDQUFDRSxNQUFsQjtFQUVBLElBQU0zRyxPQUFPLEdBQUdOLE1BQU0sQ0FBQ08sSUFBUCxDQUFZbEIsa0RBQVosQ0FBaEI7RUFDQSxJQUFNNkgsUUFBUSxHQUFHbEgsTUFBTSxDQUFDTyxJQUFQLENBQVlqQixzREFBWixDQUFqQjs7RUFKRywyQkFNTXJFLENBTk47SUFPRCxJQUFNa00sR0FBRyxHQUFHSCxJQUFJLENBQUMvTCxDQUFELENBQWhCO0lBQ0EsSUFBTW1NLFFBQVEsR0FBR3ZJLG1EQUFPLENBQUNrSSxJQUFJLENBQUNNLGVBQUwsQ0FBcUJwTSxDQUFyQixJQUEwQixJQUEzQixFQUFpQyxDQUFqQyxDQUF4QjtJQUVBLElBQU1xTSxhQUFhLEdBQUcsSUFBSTdJLDRDQUFKLEVBQXRCO0lBQ0FvQixVQUFVLENBQUMxRixHQUFYLENBQWVtTixhQUFmO0lBQ0EsSUFBc0JDLFdBQXRCLEdBQTBDSixHQUExQyxDQUFRcEosWUFBUjtJQUFBLElBQW1DeUosRUFBbkMsR0FBMENMLEdBQTFDLENBQW1DSyxFQUFuQztJQUNBLElBQU1DLFFBQVEsR0FBRzNKLFVBQVUsQ0FBQ3lKLFdBQUQsQ0FBM0I7SUFFQSxJQUFNOUMsUUFBUSxHQUFHLElBQUloRyx1REFBSixDQUE4QjJJLFFBQTlCLEVBQXdDLENBQXhDLENBQWpCO0lBQ0EsSUFBTXRDLFFBQVEsR0FBRyxJQUFJckcscURBQUosQ0FBNEI7TUFDM0N1RyxHQUFHLEVBQUUxRSxPQURzQztNQUUzQ3FILFFBQVEsRUFBRSxPQUZpQztNQUczQzFDLE9BQU8sRUFBRWlDLFFBSGtDO01BSTNDaEMsU0FBUyxFQUFFO0lBSmdDLENBQTVCLENBQWpCO0lBTUEsSUFBTTBDLFFBQVEsR0FBRyxJQUFJbkosd0NBQUosQ0FBZWdHLFFBQWYsRUFBeUJLLFFBQXpCLENBQWpCO0lBQ0EsSUFBTThCLE1BQU0sR0FBRzlILDBEQUFjLENBQUMwSSxFQUFELEVBQUszSSxtREFBTyxDQUFDNEksUUFBUSxHQUFHLEVBQVosRUFBZ0IsRUFBaEIsQ0FBWixDQUE3QjtJQUNBSCxhQUFhLENBQUNoRyxRQUFkLENBQXVCQyxHQUF2QixDQUEyQnFGLE1BQU0sQ0FBQ3BELENBQWxDLEVBQXFDb0QsTUFBTSxDQUFDdEQsQ0FBNUMsRUFBK0NzRCxNQUFNLENBQUNuRCxDQUF0RDs7SUFDQSxJQUNFbUUsUUFBUSxDQUFDbkQsUUFBVCxDQUFrQm9ELFVBQWxCLENBQTZCdkcsUUFBN0IsWUFBaUQ3QyxtREFEbkQsRUFFRTtNQUNBb0gsY0FBYyxDQUFDK0IsUUFBUSxDQUFDbkQsUUFBVCxDQUFrQm9ELFVBQWxCLENBQTZCdkcsUUFBOUIsQ0FBZDtJQUNEOztJQUNEZ0csYUFBYSxDQUFDUyxLQUFkLENBQW9CeEcsR0FBcEIsQ0FBd0IsS0FBeEIsRUFBK0IsS0FBL0IsRUFBc0MsS0FBdEM7SUFDQStGLGFBQWEsQ0FBQ25OLEdBQWQsQ0FBa0J5TixRQUFsQjtJQUVBLElBQU1JLEtBQUssR0FBRyxJQUFJdkosMkNBQUosRUFBZDtJQUNBLElBQU0yQyxNQUFNLEdBQUcsSUFBSTNDLHFEQUFKLENBQTRCLEVBQTVCLEVBQWdDLENBQWhDLEVBQW1DLEdBQW5DLEVBQXdDLEdBQXhDLENBQWY7SUFFQW1KLFFBQVEsQ0FBQ0ssaUJBQVQsQ0FBMkIsSUFBM0IsRUFBaUMsS0FBakM7SUFDQUwsUUFBUSxDQUFDTSxnQkFBVCxDQUEwQkYsS0FBMUI7SUFDQTVHLE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQkMsR0FBaEIsQ0FBb0J5RyxLQUFLLENBQUN4RSxDQUFOLEdBQVUsR0FBOUIsRUFBbUN3RSxLQUFLLENBQUMxRSxDQUF6QyxFQUE0QzBFLEtBQUssQ0FBQ3ZFLENBQWxEO0lBQ0FyQyxNQUFNLENBQUMyRyxLQUFQLENBQWF4RyxHQUFiLENBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLEVBQTJCLEdBQTNCO0lBQ0FILE1BQU0sQ0FBQytHLE1BQVAsQ0FBY0gsS0FBZDtJQUNBeEcsbUJBQW1CLENBQUNKLE1BQUQsRUFBU0ssTUFBVCxFQUFpQnVHLEtBQWpCLENBQW5CO0lBQ0F6SSxVQUFVLENBQUNRLFNBQVgsQ0FBcUJxRSxJQUFyQixDQUEwQixZQUFNO01BQzlCd0QsUUFBUSxDQUFDTSxnQkFBVCxDQUEwQkYsS0FBMUI7TUFDQTVHLE1BQU0sQ0FBQytHLE1BQVAsQ0FBY0gsS0FBZDtJQUNELENBSEQ7SUFLQVYsYUFBYSxDQUFDbk4sR0FBZCxDQUFrQmlILE1BQWxCO0lBQ0E3QixVQUFVLENBQUNJLFNBQVgsQ0FBcUJ5RSxJQUFyQixDQUEwQndELFFBQTFCOztJQUVBLElBQU1RLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtNQUNsQztNQUNBN0ksVUFBVSxDQUFDTyxPQUFYLEdBQXFCLEVBQXJCO0lBQ0QsQ0FIRDs7SUFLQThILFFBQVEsQ0FBQzFNLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQUNtTixDQUFELEVBQU87TUFDeEMsSUFBSUEsQ0FBQyxZQUFZMUosK0RBQWpCLEVBQW1DO1FBQ2pDMEosQ0FBQyxDQUFDQyxlQUFGO1FBQ0EvSSxVQUFVLENBQUNPLE9BQVgsR0FBcUIsRUFBckI7UUFDQVAsVUFBVSxDQUFDTyxPQUFYLENBQW1Cc0UsSUFBbkIsQ0FBd0JoRCxNQUF4QixFQUhpQyxDQUlqQzs7UUFDQWpELDZEQUFtQixDQUFDZ0osR0FBRCxFQUFNaUIscUJBQU4sQ0FBbkI7TUFDRDtJQUNGLENBUkQ7SUFTQVIsUUFBUSxDQUFDMU0sZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsVUFBQ21OLENBQUQsRUFBTztNQUM1QyxJQUFJQSxDQUFDLFlBQVkxSiwrREFBakIsRUFBbUM7UUFDakMwSixDQUFDLENBQUNDLGVBQUY7UUFDQVYsUUFBUSxDQUFDOUMsUUFBVCxDQUFrQnlELFFBQWxCLENBQTJCQyxNQUEzQixDQUFrQyxRQUFsQztRQUNBeE8sUUFBUSxDQUFDeU8sSUFBVCxDQUFjQyxLQUFkLENBQW9CQyxNQUFwQixHQUE2QixTQUE3QjtNQUNEO0lBQ0YsQ0FORDtJQU9BZixRQUFRLENBQUMxTSxnQkFBVCxDQUEwQixVQUExQixFQUFzQyxVQUFDbU4sQ0FBRCxFQUFPO01BQzNDLElBQUlBLENBQUMsWUFBWTFKLCtEQUFqQixFQUFtQztRQUNqQzBKLENBQUMsQ0FBQ0MsZUFBRjtRQUNBVixRQUFRLENBQUM5QyxRQUFULENBQWtCeUQsUUFBbEIsQ0FBMkJDLE1BQTNCLENBQWtDLFFBQWxDO1FBQ0F4TyxRQUFRLENBQUN5TyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLE1BQXBCLEdBQTZCLFNBQTdCO01BQ0Q7SUFDRixDQU5EO0lBUUE3RixPQUFPLENBQUMzSSxHQUFSLENBQVl5TixRQUFaO0VBL0VDOztFQU1ILEtBQUssSUFBSTNNLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcrTCxJQUFJLENBQUNyRCxNQUF6QixFQUFpQzFJLENBQUMsSUFBSSxDQUF0QyxFQUF5QztJQUFBLE1BQWhDQSxDQUFnQztFQTBFeEM7QUFDRixDQXRGRDs7QUF3RkEsSUFBTTJOLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUM3QixJQUFELEVBQTZCO0VBQ3hDLElBQU10RixNQUFNLEdBQUd6SCxRQUFRLENBQUNZLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBZjtFQUNBLElBQU04RyxNQUFNLEdBQUcsSUFBSWpELDJDQUFKLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLENBQXhCLENBQWY7O0VBRUEsSUFBSWdELE1BQU0sWUFBWW9ILGlCQUF0QixFQUF5QztJQUN2QyxJQUFNMUksUUFBUSxHQUFHLElBQUkxQixpREFBSixDQUF3QjtNQUFFZ0QsTUFBTSxFQUFOQTtJQUFGLENBQXhCLENBQWpCO0lBQ0EsSUFBTXJCLEtBQUssR0FBR0YsV0FBVyxDQUFDQyxRQUFELENBQXpCO0lBQ0EsSUFBTWlCLE1BQU0sR0FBR0wsWUFBWSxDQUFDWCxLQUFELENBQTNCO0lBQ0EsSUFBTTBDLE9BQU8sR0FBRyxJQUFJcEUsaUVBQUosQ0FBdUJ5QixRQUF2QixFQUFpQ2lCLE1BQWpDLEVBQXlDSyxNQUF6QyxFQUFpRCxLQUFqRCxDQUFoQjtJQUNBRCxtQkFBbUIsQ0FBQ0osTUFBRCxFQUFTSyxNQUFULEVBQWlCQyxNQUFqQixDQUFuQjtJQUNBTSxjQUFjLENBQUM1QixLQUFELENBQWQ7O0lBQ0EsSUFBSTJHLElBQUosRUFBVTtNQUNSLElBQU1sSCxVQUFVLEdBQUdpRSxnQkFBZ0IsQ0FBQzFELEtBQUQsRUFBUXNCLE1BQVIsQ0FBbkM7TUFDQSxJQUFNNEMsZUFBZSxHQUFHRCxxQkFBcUIsQ0FBQ3hFLFVBQUQsQ0FBN0M7TUFDQTBFLFdBQVcsQ0FBQ0QsZUFBRCxDQUFYO01BQ0EsSUFBTW1CLFNBQVMsR0FBR0QsZUFBZSxDQUFDbEIsZUFBRCxDQUFqQztNQUNBb0IsVUFBVSxDQUFDRCxTQUFELENBQVY7TUFDQXFCLGVBQWUsQ0FBQ2pILFVBQUQsRUFBYWtILElBQWIsRUFBbUJqRSxPQUFuQixFQUE0QnJCLE1BQTVCLENBQWY7SUFDRDs7SUFDRHRCLFFBQVEsQ0FBQzRDLE1BQVQsQ0FBZ0IzQyxLQUFoQixFQUF1QmdCLE1BQXZCO0lBQ0E1QixPQUFPLENBQUNXLFFBQUQsRUFBV0MsS0FBWCxFQUFrQmdCLE1BQWxCLEVBQTBCMEIsT0FBMUIsQ0FBUDtFQUNEO0FBQ0YsQ0F0QkQ7O0FBd0JBLCtEQUFlOEYsSUFBZjs7Ozs7Ozs7Ozs7Ozs7O0FDM1pBLElBQU0vSixPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDMkUsQ0FBRCxFQUFZRixDQUFaO0VBQUEsT0FBMEJxRCxJQUFJLENBQUMvSyxHQUFMLENBQVM0SCxDQUFULElBQWNtRCxJQUFJLENBQUMvSyxHQUFMLENBQVMwSCxDQUFULENBQXhDO0FBQUEsQ0FBaEI7O0FBRUEsSUFBTXlGLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUN2QixFQUFELEVBQWdCO0VBQ25DLElBQU1uQixNQUFNLEdBQUd2SSxVQUFVLENBQUMwSixFQUFELENBQXpCO0VBQ0EsSUFBTXdCLEdBQUcsR0FBR3hCLEVBQUUsQ0FDWHlCLEtBRFMsQ0FDSCxFQURHLEVBRVRqRSxHQUZTLENBRUwsVUFBQ2tFLEdBQUQ7SUFBQSxPQUFTcEwsVUFBVSxDQUFDb0wsR0FBRCxDQUFuQjtFQUFBLENBRkssRUFHVEMsTUFIUyxDQUdGLFVBQUNDLEdBQUQsRUFBTUMsSUFBTjtJQUFBLE9BQWVELEdBQUcsR0FBR0MsSUFBckI7RUFBQSxDQUhFLEVBR3lCLENBSHpCLENBQVo7RUFJQSxJQUFNQyxLQUFLLEdBQUcsQ0FBQ2pELE1BQU0sR0FBRzJDLEdBQVYsS0FBa0IzQyxNQUFNLEdBQUcyQyxHQUEzQixDQUFkO0VBQ0EsSUFBTU8sUUFBUSxHQUFHRCxLQUFLLENBQ25CRSxRQURjLEdBRWRQLEtBRmMsQ0FFUixFQUZRLEVBR2RRLE1BSGMsQ0FHUCxVQUFDQyxHQUFELEVBQVM7SUFDZixJQUFJQSxHQUFHLEtBQUssR0FBWixFQUFpQjtNQUNmLE9BQU8sSUFBUDtJQUNEOztJQUVELE9BQU8sS0FBUDtFQUNELENBVGMsQ0FBakI7RUFXQUgsUUFBUSxDQUFDQSxRQUFRLENBQUM1RixNQUFULEdBQWtCLENBQW5CLENBQVIsR0FBZ0MsR0FBaEM7RUFDQTRGLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDNUYsTUFBVCxHQUFrQixDQUFuQixDQUFSLEdBQWdDLEdBQWhDO0VBQ0EsSUFBTXVGLEdBQUcsR0FBR3BMLFVBQVUsQ0FBQ3lMLFFBQVEsQ0FBQ0ksT0FBVCxHQUFtQkMsSUFBbkIsQ0FBd0IsRUFBeEIsQ0FBRCxDQUF0QjtFQUNBLE9BQU9WLEdBQVA7QUFDRCxDQXRCRDs7QUF3QkEsSUFBTXBLLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQzBJLEVBQUQsRUFBYUMsUUFBYixFQUFrQztFQUN2RCxJQUFNb0MsTUFBTSxHQUFHZCxZQUFZLFdBQUl2QixFQUFKLFdBQVosR0FBNkJDLFFBQTVDO0VBQ0EsSUFBTXFDLE1BQU0sR0FDVmYsWUFBWSxDQUFDdkIsRUFBRSxHQUFHQSxFQUFOLENBQVosSUFBeUJ1QixZQUFZLFdBQUl2QixFQUFKLFdBQVosR0FBNkIsR0FBN0IsR0FBbUMsQ0FBQyxDQUFwQyxHQUF3QyxDQUFqRSxDQURGO0VBRUEsSUFBTXVDLFlBQVksR0FBRyxTQUFBRixNQUFNLEVBQUksQ0FBSixDQUFOLFlBQWNDLE1BQWQsRUFBd0IsQ0FBeEIsQ0FBckI7RUFDQSxJQUFNRSxNQUFNLFlBQUksU0FBQXZDLFFBQVEsRUFBSSxDQUFKLENBQVIsR0FBZ0JzQyxZQUFwQixFQUFxQyxHQUFyQyxDQUFaO0VBRUEsSUFBTW5ELE1BQU0sR0FBR21DLFlBQVksQ0FBQ3ZCLEVBQUUsR0FBR0EsRUFBTixDQUFaLEdBQXdCLENBQXZDOztFQUVBLElBQUlaLE1BQU0sR0FBRyxDQUFiLEVBQWdCO0lBQ2QsT0FBTztNQUNMcEQsQ0FBQyxFQUFFcUcsTUFBTSxJQUFJZCxZQUFZLFdBQUl2QixFQUFKLFdBQVosR0FBNkIsR0FBN0IsR0FBbUMsQ0FBbkMsR0FBdUMsQ0FBQyxDQUE1QyxDQURKO01BRUxsRSxDQUFDLEVBQUV3RyxNQUZFO01BR0xyRyxDQUFDLEVBQUV1RyxNQUFNLElBQUlqQixZQUFZLENBQUN2QixFQUFFLEdBQUdBLEVBQU4sQ0FBWixHQUF3QixHQUF4QixHQUE4QixDQUE5QixHQUFrQyxDQUFDLENBQXZDO0lBSEosQ0FBUDtFQUtEOztFQUVELE9BQU87SUFDTGhFLENBQUMsRUFBRXdHLE1BQU0sSUFBSWpCLFlBQVksV0FBSXZCLEVBQUosV0FBWixHQUE2QixHQUE3QixHQUFtQyxDQUFuQyxHQUF1QyxDQUFDLENBQTVDLENBREo7SUFFTGxFLENBQUMsRUFBRXdHLE1BRkU7SUFHTHJHLENBQUMsRUFBRW9HLE1BQU0sSUFBSWQsWUFBWSxDQUFDdkIsRUFBRSxHQUFHQSxFQUFOLENBQVosR0FBd0IsR0FBeEIsR0FBOEIsQ0FBOUIsR0FBa0MsQ0FBQyxDQUF2QztFQUhKLENBQVA7QUFLRCxDQXRCRCIsInNvdXJjZXMiOlsid2VicGFjazovL25lYXItZWFydGgtb2JqZWN0LXRyYWNrZXIvLi9zcmMvc2NyaXB0cy9kaXNwbGF5LnRzIiwid2VicGFjazovL25lYXItZWFydGgtb2JqZWN0LXRyYWNrZXIvLi9zcmMvc2NyaXB0cy9yZW5kZXIudHMiLCJ3ZWJwYWNrOi8vbmVhci1lYXJ0aC1vYmplY3QtdHJhY2tlci8uL3NyYy9zY3JpcHRzL3V0aWxpdGllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFzdGVyb2lkSW5mbyB9IGZyb20gXCIuL2ZldGNoRGF0YVwiO1xuaW1wb3J0IHNwYWNlbXAzIGZyb20gXCIuLi9hc3NldHMvc3BhY2UubXAzXCI7XG5pbXBvcnQgc3BhY2VvZ2cgZnJvbSBcIi4uL2Fzc2V0cy9zcGFjZS5vZ2dcIjtcblxuY29uc3QgY3JlYXRlQXVkaW8gPSAoKSA9PiB7XG4gIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpO1xuICBhdWRpby5jbGFzc0xpc3QuYWRkKFwic3BhY2VcIik7XG4gIGF1ZGlvLnNldEF0dHJpYnV0ZShcImF1dG9wbGF5XCIsIFwidHJ1ZVwiKTtcbiAgYXVkaW8uc2V0QXR0cmlidXRlKFwibG9vcFwiLCBcInRydWVcIik7XG4gIGNvbnN0IHNvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzb3VyY2VcIik7XG4gIHNvdXJjZS5zcmMgPSBzcGFjZW1wMztcbiAgc291cmNlLnR5cGUgPSBcImF1ZGlvL21wZWdcIjtcbiAgYXVkaW8uYXBwZW5kQ2hpbGQoc291cmNlKTtcbiAgY29uc3Qgc291cmNlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzb3VyY2VcIik7XG4gIHNvdXJjZTIuc3JjID0gc3BhY2VvZ2c7XG4gIHNvdXJjZTIudHlwZSA9IFwiYXVkaW8vb2dnXCI7XG4gIGF1ZGlvLmFwcGVuZENoaWxkKHNvdXJjZTIpO1xuICByZXR1cm4gYXVkaW87XG59O1xuXG5jb25zdCBpbml0aWFsRGlzcGxheSA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gIGlmIChjb250YWluZXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHNvdW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzb3VuZERpdi5jbGFzc0xpc3QuYWRkKFwic291bmREaXZcIik7XG5cbiAgICBsZXQgc291bmQgPSBmYWxzZTtcbiAgICBjb25zdCBtaWNyb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWljcm9EaXYuY2xhc3NMaXN0LmFkZChcIm1pY3JvRGl2XCIpO1xuICAgIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBpLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS1taWNyb3Bob25lLXNsYXNoXCIpO1xuICAgIG1pY3JvRGl2LmFwcGVuZENoaWxkKGkpO1xuICAgIGNvbnN0IGF1ZGlvID0gY3JlYXRlQXVkaW8oKTtcbiAgICBtaWNyb0Rpdi5hcHBlbmRDaGlsZChhdWRpbyk7XG4gICAgc291bmREaXYuYXBwZW5kQ2hpbGQobWljcm9EaXYpO1xuXG4gICAgbWljcm9EaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmICghc291bmQpIHtcbiAgICAgICAgc291bmQgPSB0cnVlO1xuICAgICAgICBhdWRpb1xuICAgICAgICAgIC5wbGF5KClcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtaWNyb0RpdjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pY3JvRGl2XCIpO1xuICAgICAgICAgICAgY29uc3Qgc291bmREaXYyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3VuZERpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhdWRpb1wiKTtcbiAgICAgICAgICAgIGlmIChtaWNyb0RpdjIgJiYgc291bmREaXYyICYmIGF1ZGlvMikge1xuICAgICAgICAgICAgICBtaWNyb0RpdjIucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICAgICAgICAgIGNvbnN0IGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICAgICAgICAgIGkyLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS1taWNyb3Bob25lXCIpO1xuICAgICAgICAgICAgICBtaWNyb0RpdjIuYXBwZW5kQ2hpbGQoaTIpO1xuICAgICAgICAgICAgICBtaWNyb0RpdjIuYXBwZW5kQ2hpbGQoYXVkaW8yKTtcbiAgICAgICAgICAgICAgc291bmREaXYyLmFwcGVuZENoaWxkKG1pY3JvRGl2Mik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdWRpbyBmYWlsZWQgdG8gcGxheSFcIik7XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzb3VuZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBhdWRpbzIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXVkaW9cIik7XG4gICAgICAgIGNvbnN0IG1pY3JvRGl2MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWljcm9EaXZcIik7XG4gICAgICAgIGNvbnN0IHNvdW5kRGl2MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc291bmREaXZcIik7XG4gICAgICAgIGlmIChtaWNyb0RpdjIgJiYgc291bmREaXYyICYmIGF1ZGlvMikge1xuICAgICAgICAgIGF1ZGlvMi5wYXVzZSgpO1xuICAgICAgICAgIG1pY3JvRGl2Mi5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgICBjb25zdCBpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgICAgIGkyLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS1taWNyb3Bob25lLXNsYXNoXCIpO1xuICAgICAgICAgIG1pY3JvRGl2Mi5hcHBlbmRDaGlsZChpMik7XG4gICAgICAgICAgbWljcm9EaXYyLmFwcGVuZENoaWxkKGF1ZGlvMik7XG4gICAgICAgICAgc291bmREaXYyLmFwcGVuZENoaWxkKG1pY3JvRGl2Mik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzb3VuZERpdik7XG4gIH1cbn07XG5cbmNvbnN0IGRpc3BsYXlEaXYxSW5mbyA9IChhc3Rlcm9pZEluZm86IEFzdGVyb2lkSW5mbykgPT4ge1xuICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2MS5jbGFzc0xpc3QuYWRkKFwiZGl2MVwiKTtcblxuICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmFtZURpdi5jbGFzc0xpc3QuYWRkKFwibmFtZURpdlwiKTtcbiAgbmFtZURpdi50ZXh0Q29udGVudCA9IGBOYW1lOiAke2FzdGVyb2lkSW5mby5uYW1lfWA7XG4gIGRpdjEuYXBwZW5kQ2hpbGQobmFtZURpdik7XG5cbiAgY29uc3QgbWFnbml0dWRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFnbml0dWRlRGl2LmNsYXNzTGlzdC5hZGQoXCJtYWduaXR1ZGVEaXZcIik7XG4gIG1hZ25pdHVkZURpdi50ZXh0Q29udGVudCA9IGBBYnNvbHV0ZSBNYWduaXR1ZGU6ICR7YXN0ZXJvaWRJbmZvLmFic29sdXRlTWFnbml0dWRlfWA7XG4gIGRpdjEuYXBwZW5kQ2hpbGQobWFnbml0dWRlRGl2KTtcblxuICBjb25zdCB2ZWxvY2l0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHZlbG9jaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJ2ZWxvY2l0eURpdlwiKTtcbiAgdmVsb2NpdHlEaXYudGV4dENvbnRlbnQgPSBgUmVsYXRpdmUgdmVsb2NpdHk6ICR7YXN0ZXJvaWRJbmZvLnJlbGF0aXZlVmVsb2NpdHl9IGttL3NgO1xuICBkaXYxLmFwcGVuZENoaWxkKHZlbG9jaXR5RGl2KTtcblxuICByZXR1cm4gZGl2MTtcbn07XG5cbmNvbnN0IGRpc3BsYXlEaXYySW5mbyA9IChhc3Rlcm9pZEluZm86IEFzdGVyb2lkSW5mbykgPT4ge1xuICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2Mi5jbGFzc0xpc3QuYWRkKFwiZGl2MlwiKTtcblxuICBjb25zdCBtYXhEaWFtZXRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1heERpYW1ldGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJtYXhEaWFtZXRlckRpdlwiKTtcbiAgbWF4RGlhbWV0ZXJEaXYudGV4dENvbnRlbnQgPSBgTWF4aW11bSBlc3RpbWF0ZWQgZGlhbWV0ZXI6ICR7YXN0ZXJvaWRJbmZvLmVzdGltYXRlZERpYW1ldGVyTWF4fSBrbWA7XG4gIGRpdjIuYXBwZW5kQ2hpbGQobWF4RGlhbWV0ZXJEaXYpO1xuXG4gIGNvbnN0IG1pbkRpYW1ldGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWluRGlhbWV0ZXJEaXYuY2xhc3NMaXN0LmFkZChcIm1pbkRpYW1ldGVyRGl2XCIpO1xuICBtaW5EaWFtZXRlckRpdi50ZXh0Q29udGVudCA9IGBNaW5pbXVtIGVzdGltYXRlZCBkaWFtZXRlcjogJHthc3Rlcm9pZEluZm8uZXN0aW1hdGVkRGlhbWV0ZXJNaW59IGttYDtcbiAgZGl2Mi5hcHBlbmRDaGlsZChtaW5EaWFtZXRlckRpdik7XG5cbiAgcmV0dXJuIGRpdjI7XG59O1xuXG5jb25zdCBkaXNwbGF5RGl2M0luZm8gPSAoXG4gIGFzdGVyb2lkSW5mbzogQXN0ZXJvaWRJbmZvLFxuICByZXZlcnRGdW5jdGlvbjogKCkgPT4gdm9pZFxuKSA9PiB7XG4gIGNvbnN0IGRpdjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYzLmNsYXNzTGlzdC5hZGQoXCJkaXYzXCIpO1xuXG4gIGNvbnN0IGhhemFyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhhemFyZERpdi5jbGFzc0xpc3QuYWRkKFwiaGF6YXJkRGl2XCIpO1xuICBjb25zdCBpY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBjb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBpZiAoYXN0ZXJvaWRJbmZvLnBvdGVudGlhbGx5SGF6YXJkb3VzKSB7XG4gICAgaS5jbGFzc0xpc3QuYWRkKFwiZmFzXCIsIFwiZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIik7XG4gICAgaWNvbkRpdi5hcHBlbmRDaGlsZChpKTtcbiAgICBoYXphcmREaXYuYXBwZW5kQ2hpbGQoaWNvbkRpdik7XG5cbiAgICB0ZXh0RGl2LnRleHRDb250ZW50ID0gXCJBc3Rlcm9pZCBpcyBwb3RlbnRpYWxseSBoYXphcmRvdXMhXCI7XG4gICAgaGF6YXJkRGl2LmFwcGVuZENoaWxkKHRleHREaXYpO1xuXG4gICAgaGF6YXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJoYXphcmRcIik7XG4gIH0gZWxzZSB7XG4gICAgaS5jbGFzc0xpc3QuYWRkKFwiZmFzXCIsIFwiZmEtY2hlY2stY2lyY2xlXCIpO1xuICAgIGljb25EaXYuYXBwZW5kQ2hpbGQoaSk7XG4gICAgaGF6YXJkRGl2LmFwcGVuZENoaWxkKGljb25EaXYpO1xuXG4gICAgdGV4dERpdi50ZXh0Q29udGVudCA9IFwiQXN0ZXJvaWQgaXMgbm90IHBvdGVudGlhbGx5IGhhemFyZG91cyFcIjtcbiAgICBoYXphcmREaXYuYXBwZW5kQ2hpbGQodGV4dERpdik7XG5cbiAgICBoYXphcmREaXYuY2xhc3NMaXN0LmFkZChcIm5vdC1oYXphcmRcIik7XG4gIH1cbiAgZGl2My5hcHBlbmRDaGlsZChoYXphcmREaXYpO1xuXG4gIGNvbnN0IGJhY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiYWNrRGl2LmNsYXNzTGlzdC5hZGQoXCJiYWNrRGl2XCIpO1xuXG4gIGNvbnN0IGJhY2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmFja0kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgYmFja0kuY2xhc3NMaXN0LmFkZChcImZhc1wiLCBcImZhLWFycm93LWFsdC1jaXJjbGUtbGVmdFwiKTtcbiAgYmFja0ljb24uYXBwZW5kQ2hpbGQoYmFja0kpO1xuICBiYWNrRGl2LmFwcGVuZENoaWxkKGJhY2tJY29uKTtcblxuICBjb25zdCBiYWNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0XCIpO1xuICBiYWNrVGV4dC50ZXh0Q29udGVudCA9IFwiQmFjayB0byBFYXJ0aCBWaWV3XCI7XG4gIGJhY2tEaXYuYXBwZW5kQ2hpbGQoYmFja1RleHQpO1xuXG4gIGJhY2tEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJldmVydEZ1bmN0aW9uKTtcblxuICBkaXYzLmFwcGVuZENoaWxkKGJhY2tEaXYpO1xuXG4gIHJldHVybiBkaXYzO1xufTtcblxuY29uc3QgZGlzcGxheURpdjRJbmZvID0gKGFzdGVyb2lkSW5mbzogQXN0ZXJvaWRJbmZvKSA9PiB7XG4gIGNvbnN0IGRpdjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXY0LmNsYXNzTGlzdC5hZGQoXCJkaXY0XCIpO1xuXG4gIGNvbnN0IGNsb3Nlc3RBcHByb2FjaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNsb3Nlc3RBcHByb2FjaERpdi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VzdEFwcHJvYWNoRGl2XCIpO1xuICBjbG9zZXN0QXBwcm9hY2hEaXYudGV4dENvbnRlbnQgPSBgQ2xvc2VzdCBhcHByb2FjaCBkYXRlOiAke2FzdGVyb2lkSW5mby5jbG9zZXN0QXBwcm9hY2hEYXRlfWA7XG4gIGRpdjQuYXBwZW5kQ2hpbGQoY2xvc2VzdEFwcHJvYWNoRGl2KTtcblxuICBjb25zdCBtaXNzRGlzdGFuY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtaXNzRGlzdGFuY2VEaXYuY2xhc3NMaXN0LmFkZChcIm1pc3NEaXN0YW5jZURpdlwiKTtcbiAgbWlzc0Rpc3RhbmNlRGl2LnRleHRDb250ZW50ID0gYE1pc3MgZGlzdGFuY2U6ICR7cGFyc2VGbG9hdChcbiAgICBhc3Rlcm9pZEluZm8ubWlzc0Rpc3RhbmNlXG4gICkudG9GaXhlZCgxKX0ga21gO1xuICBkaXY0LmFwcGVuZENoaWxkKG1pc3NEaXN0YW5jZURpdik7XG5cbiAgY29uc3Qgb3JiaXRpbmdCb2R5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3JiaXRpbmdCb2R5RGl2LmNsYXNzTGlzdC5hZGQoXCJvcmJpdGluZ0JvZHlEaXZcIik7XG4gIG9yYml0aW5nQm9keURpdi50ZXh0Q29udGVudCA9IGBPcmJpdGluZyBib2R5OiAke2FzdGVyb2lkSW5mby5vcmJpdGluZ0JvZHl9YDtcbiAgZGl2NC5hcHBlbmRDaGlsZChvcmJpdGluZ0JvZHlEaXYpO1xuXG4gIHJldHVybiBkaXY0O1xufTtcblxuY29uc3QgZGlzcGxheUFzdGVyb2lkSW5mbyA9IChcbiAgYXN0ZXJvaWRJbmZvOiBBc3Rlcm9pZEluZm8sXG4gIHJldmVydEZ1bmN0aW9uOiAoKSA9PiB2b2lkXG4pID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gIGlmIChjb250YWluZXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluZm9EaXYuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9EaXYpO1xuXG4gICAgY29uc3QgcmV2ZXJ0ID0gKCkgPT4ge1xuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGluZm9EaXYpO1xuICAgICAgcmV2ZXJ0RnVuY3Rpb24oKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGl2MSA9IGRpc3BsYXlEaXYxSW5mbyhhc3Rlcm9pZEluZm8pO1xuICAgIGNvbnN0IGRpdjIgPSBkaXNwbGF5RGl2MkluZm8oYXN0ZXJvaWRJbmZvKTtcbiAgICBjb25zdCBkaXYzID0gZGlzcGxheURpdjNJbmZvKGFzdGVyb2lkSW5mbywgcmV2ZXJ0KTtcbiAgICBjb25zdCBkaXY0ID0gZGlzcGxheURpdjRJbmZvKGFzdGVyb2lkSW5mbyk7XG5cbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKGRpdjEpO1xuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQoZGl2Mik7XG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChkaXYzKTtcbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKGRpdjQpO1xuICB9XG59O1xuXG5jb25zdCBlcnJvckRpc3BsYXkgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICBpZiAoY29udGFpbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZXJyb3JEaXYuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuICAgIGVycm9yRGl2LnRleHRDb250ZW50ID0gXCJFcnJvciBsb2FkaW5nIGRhdGEhXCI7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVycm9yRGl2KTtcbiAgfVxufTtcblxuZXhwb3J0IHsgZGlzcGxheUFzdGVyb2lkSW5mbywgaW5pdGlhbERpc3BsYXksIGVycm9yRGlzcGxheSB9O1xuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBJbnRlcmFjdGlvbk1hbmFnZXIsIEludGVyYWN0aXZlRXZlbnQgfSBmcm9tIFwidGhyZWUuaW50ZXJhY3RpdmVcIjtcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHNcIjtcbmltcG9ydCB0eXBlIHsgRGF0YVNvcnRlciB9IGZyb20gXCIuL2ZldGNoRGF0YVwiO1xuaW1wb3J0IHsgYmFzZUxvZywgcmFuZG9tUG9zaXRpb24gfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcbmltcG9ydCB7IGRpc3BsYXlBc3Rlcm9pZEluZm8gfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgZ2FsYXh5IGZyb20gXCIuLi9hc3NldHMvZ2FsYXh5Mi5qcGdcIjtcbmltcG9ydCBlYXJ0aG1hcCBmcm9tIFwiLi4vYXNzZXRzL2VhcnRobWFwMWsuanBnXCI7XG5pbXBvcnQgZWFydGhidW1wIGZyb20gXCIuLi9hc3NldHMvZWFydGhidW1wLmpwZ1wiO1xuaW1wb3J0IGVhcnRoY2xvdWQgZnJvbSBcIi4uL2Fzc2V0cy9lYXJ0aENsb3VkLnBuZ1wiO1xuaW1wb3J0IG1vb24gZnJvbSBcIi4uL2Fzc2V0cy9tb29uLmpwZ1wiO1xuaW1wb3J0IG1vb25idW1wIGZyb20gXCIuLi9hc3NldHMvbW9vbmJ1bXAuanBnXCI7XG5pbXBvcnQgYXN0ZXJvaWRJbWcgZnJvbSBcIi4uL2Fzc2V0cy9hc3Rlcm9pZC5qcGdcIjtcbmltcG9ydCBhc3Rlcm9pZEJ1bXAgZnJvbSBcIi4uL2Fzc2V0cy9hc3Rlcm9pZEJ1bXAuanBnXCI7XG5cbmludGVyZmFjZSBBbmltYXRpb25zIHtcbiAgYW5pbWF0ZTogYm9vbGVhbjtcbiAgY2xvdWQ6IFRIUkVFLk9iamVjdDNEW107XG4gIGVhcnRoOiBUSFJFRS5PYmplY3QzRFtdO1xuICBhc3Rlcm9pZHM6IFRIUkVFLk9iamVjdDNEW107XG4gIG1vb246IFRIUkVFLk9iamVjdDNEW107XG4gIGx1bmFyRWFydGg6IFRIUkVFLk9iamVjdDNEW107XG4gIGVhcnRoT3JiaXQ6IFRIUkVFLk9iamVjdDNEW107XG4gIGNhbWVyYXM6IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhW107XG4gIGZ1bmN0aW9uczogKCgpID0+IHZvaWQpW107XG59XG5cbmNvbnN0IGFuaW1hdGlvbnM6IEFuaW1hdGlvbnMgPSB7XG4gIGFuaW1hdGU6IHRydWUsXG4gIGNsb3VkOiBbXSxcbiAgZWFydGg6IFtdLFxuICBhc3Rlcm9pZHM6IFtdLFxuICBtb29uOiBbXSxcbiAgbHVuYXJFYXJ0aDogW10sXG4gIGVhcnRoT3JiaXQ6IFtdLFxuICBjYW1lcmFzOiBbXSxcbiAgZnVuY3Rpb25zOiBbXSxcbn07XG5cbmNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XG5cbmNvbnN0IGNyZWF0ZVNjZW5lID0gKHJlbmRlcmVyOiBUSFJFRS5XZWJHTFJlbmRlcmVyKSA9PiB7XG4gIGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gIGNvbnN0IHRleHR1cmUgPSBsb2FkZXIubG9hZChnYWxheHksICgpID0+IHtcbiAgICBpZiAodGV4dHVyZS5pbWFnZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHJ0ID0gbmV3IFRIUkVFLldlYkdMQ3ViZVJlbmRlclRhcmdldCh0ZXh0dXJlLmltYWdlLmhlaWdodCk7XG4gICAgICBydC5mcm9tRXF1aXJlY3Rhbmd1bGFyVGV4dHVyZShyZW5kZXJlciwgdGV4dHVyZSk7XG4gICAgICBzY2VuZS5iYWNrZ3JvdW5kID0gcnQudGV4dHVyZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc2NlbmU7XG59O1xuXG5jb25zdCBjcmVhdGVDYW1lcmEgPSAoc2NlbmU6IFRIUkVFLlNjZW5lKSA9PiB7XG4gIGNvbnN0IGZvdiA9IDc1O1xuICBjb25zdCBhc3BlY3QgPSAyO1xuICBjb25zdCBuZWFyID0gMC4xO1xuICBjb25zdCBmYXIgPSAyNTtcblxuICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoZm92LCBhc3BlY3QsIG5lYXIsIGZhcik7XG4gIGNhbWVyYS5wb3NpdGlvbi5zZXQoMCwgMCwgNSk7XG5cbiAgc2NlbmUuYWRkKGNhbWVyYSk7XG5cbiAgcmV0dXJuIGNhbWVyYTtcbn07XG5cbmNvbnN0IGNyZWF0ZU9yYml0Q29udHJvbHMgPSAoXG4gIGNhbWVyYTogVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEsXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXG4gIGNlbnRlcjogVEhSRUUuVmVjdG9yM1xuKSA9PiB7XG4gIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCBjYW52YXMpO1xuICBjb250cm9scy50YXJnZXQuY29weShjZW50ZXIpLmFkZChuZXcgVEhSRUUuVmVjdG9yMygtMSwgLTEsIDApKTtcbiAgY29udHJvbHMudXBkYXRlKCk7XG59O1xuXG5jb25zdCBjcmVhdGVMaWdodGluZyA9IChzY2VuZTogVEhSRUUuU2NlbmUpID0+IHtcbiAgY29uc3QgY29sb3IgPSAweGZmZmZmZjtcbiAgY29uc3QgaW50ZW5zaXR5ID0gMTtcbiAgY29uc3QgbGlnaHRpbmcgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodChjb2xvciwgaW50ZW5zaXR5KTtcbiAgbGlnaHRpbmcucG9zaXRpb24uc2V0KDIsIDIsIDQpO1xuICBzY2VuZS5hZGQobGlnaHRpbmcpO1xuXG4gIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoY29sb3IsIGludGVuc2l0eSAvIDUpO1xuICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcbn07XG5cbmNvbnN0IHJlc2l6ZVJlbmRlcmVyVG9EaXNwbGF5U2l6ZSA9IChyZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlcikgPT4ge1xuICBjb25zdCBjYW52YXMgPSByZW5kZXJlci5kb21FbGVtZW50O1xuICBjb25zdCBuZWVkc1Jlc2l6ZSA9XG4gICAgY2FudmFzLmNsaWVudFdpZHRoICE9PSBjYW52YXMud2lkdGggfHxcbiAgICBjYW52YXMuY2xpZW50SGVpZ2h0ICE9PSBjYW52YXMuaGVpZ2h0O1xuXG4gIGlmIChuZWVkc1Jlc2l6ZSkge1xuICAgIHJlbmRlcmVyLnNldFNpemUoY2FudmFzLmNsaWVudFdpZHRoLCBjYW52YXMuY2xpZW50SGVpZ2h0LCBmYWxzZSk7XG4gIH1cblxuICByZXR1cm4gbmVlZHNSZXNpemU7XG59O1xuXG5jb25zdCBhbmltYXRlID0gKFxuICByZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlcixcbiAgc2NlbmU6IFRIUkVFLlNjZW5lLFxuICBjYW1lcmE6IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhLFxuICBtYW5hZ2VyOiBJbnRlcmFjdGlvbk1hbmFnZXJcbikgPT4ge1xuICBjb25zdCByZW5kZXIgPSAodGltZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdGltZUluU2Vjb25kcyA9IHRpbWUgKiAwLjAwMTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IHJlbmRlcmVyLmRvbUVsZW1lbnQ7XG4gICAgY2FtZXJhLmFzcGVjdCA9IGNhbnZhcy5jbGllbnRXaWR0aCAvIGNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICAgIGlmIChyZXNpemVSZW5kZXJlclRvRGlzcGxheVNpemUocmVuZGVyZXIpKSB7XG4gICAgICBjYW1lcmEuYXNwZWN0ID0gY2FudmFzLmNsaWVudFdpZHRoIC8gY2FudmFzLmNsaWVudEhlaWdodDtcbiAgICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgfVxuXG4gICAgYW5pbWF0aW9ucy5lYXJ0aE9yYml0LmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgb2JqZWN0LnJvdGF0aW9uLnkgPSB0aW1lSW5TZWNvbmRzICogMC4wMDU7XG4gICAgfSk7XG5cbiAgICBhbmltYXRpb25zLmNsb3VkLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgb2JqZWN0LnJvdGF0aW9uLnkgPSB0aW1lSW5TZWNvbmRzICogMC4wNTtcbiAgICB9KTtcblxuICAgIGFuaW1hdGlvbnMuZWFydGguZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICBvYmplY3Qucm90YXRpb24ueSA9IHRpbWVJblNlY29uZHMgKiAwLjAyO1xuICAgIH0pO1xuXG4gICAgYW5pbWF0aW9ucy5tb29uLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgb2JqZWN0LnJvdGF0aW9uLnkgPSB0aW1lSW5TZWNvbmRzICogMC4wMTtcbiAgICB9KTtcblxuICAgIGFuaW1hdGlvbnMubHVuYXJFYXJ0aC5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgIG9iamVjdC5yb3RhdGlvbi55ID0gdGltZUluU2Vjb25kcyAqIDAuMDE7XG4gICAgfSk7XG5cbiAgICBhbmltYXRpb25zLmFzdGVyb2lkcy5mb3JFYWNoKChvYmplY3QsIG5keCkgPT4ge1xuICAgICAgb2JqZWN0LnJvdGF0aW9uLnkgPSB0aW1lSW5TZWNvbmRzICogMC4xICsgbmR4ICogMC4wNTtcbiAgICAgIG9iamVjdC5yb3RhdGlvbi54ID0gdGltZUluU2Vjb25kcyAqIDAuMSArIG5keCAqIDAuMDE7XG4gICAgICBvYmplY3Qucm90YXRpb24ueiA9IHRpbWVJblNlY29uZHMgKiAwLjEgLSBuZHggKiAwLjA1O1xuICAgIH0pO1xuXG4gICAgYW5pbWF0aW9ucy5mdW5jdGlvbnMuZm9yRWFjaCgoZnVuYykgPT4ge1xuICAgICAgZnVuYygpO1xuICAgIH0pO1xuXG4gICAgbWFuYWdlci51cGRhdGUoKTtcblxuICAgIGlmIChhbmltYXRpb25zLmNhbWVyYXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFuaW1hdGlvbnMuY2FtZXJhc1swXS5hc3BlY3QgPSBjYW52YXMuY2xpZW50V2lkdGggLyBjYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgICAgYW5pbWF0aW9ucy5jYW1lcmFzWzBdLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgYW5pbWF0aW9ucy5jYW1lcmFzWzBdKTtcbiAgICB9XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gIH07XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUVhcnRoT3JiaXQgPSAoc2NlbmU6IFRIUkVFLlNjZW5lLCBjZW50ZXI6IFRIUkVFLlZlY3RvcjMpID0+IHtcbiAgY29uc3QgZWFydGhPcmJpdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICBlYXJ0aE9yYml0LnBvc2l0aW9uLnNldChjZW50ZXIueCwgY2VudGVyLnksIGNlbnRlci56KTtcbiAgY29uc3QgbXlBeGlzID0gbmV3IFRIUkVFLlZlY3RvcjMoMSwgLTEsIDApO1xuICBlYXJ0aE9yYml0LnJvdGF0ZU9uQXhpcyhteUF4aXMsIFRIUkVFLk1hdGhVdGlscy5kZWdUb1JhZCgyMy41KSk7XG4gIHNjZW5lLmFkZChlYXJ0aE9yYml0KTtcbiAgYW5pbWF0aW9ucy5lYXJ0aE9yYml0LnB1c2goZWFydGhPcmJpdCk7XG4gIHJldHVybiBlYXJ0aE9yYml0O1xufTtcblxuY29uc3QgY3JlYXRlTHVuYXJFYXJ0aE9yYml0ID0gKGVhcnRoT3JiaXQ6IFRIUkVFLk9iamVjdDNEKSA9PiB7XG4gIGNvbnN0IGx1bmFyRWFydGhPcmJpdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICBlYXJ0aE9yYml0LmFkZChsdW5hckVhcnRoT3JiaXQpO1xuICBhbmltYXRpb25zLmx1bmFyRWFydGgucHVzaChsdW5hckVhcnRoT3JiaXQpO1xuICByZXR1cm4gbHVuYXJFYXJ0aE9yYml0O1xufTtcblxuY29uc3QgY3JlYXRlRWFydGggPSAoYmFzZTogVEhSRUUuT2JqZWN0M0QpID0+IHtcbiAgY29uc3QgZWFydGggPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcblxuICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxKTtcbiAgY29uc3QgY2xvdWRHZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxLjAwOSk7XG5cbiAgY29uc3QgdGV4dHVyZSA9IGxvYWRlci5sb2FkKGVhcnRobWFwKTtcbiAgY29uc3QgYnVtcFRleHR1cmUgPSBsb2FkZXIubG9hZChlYXJ0aGJ1bXApO1xuICBjb25zdCBjbG91ZFRleHR1cmUgPSBsb2FkZXIubG9hZChlYXJ0aGNsb3VkKTtcblxuICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XG4gICAgbWFwOiB0ZXh0dXJlLFxuICAgIGJ1bXBNYXA6IGJ1bXBUZXh0dXJlLFxuICAgIGJ1bXBTY2FsZTogMC42LFxuICB9KTtcbiAgY29uc3QgY2xvdWRNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XG4gICAgbWFwOiBjbG91ZFRleHR1cmUsXG4gICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgb3BhY2l0eTogMC41LFxuICB9KTtcblxuICBjb25zdCBncm91bmQgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICBjb25zdCBjbG91ZCA9IG5ldyBUSFJFRS5NZXNoKGNsb3VkR2VvbWV0cnksIGNsb3VkTWF0ZXJpYWwpO1xuXG4gIGVhcnRoLmFkZChncm91bmQpO1xuICBlYXJ0aC5hZGQoY2xvdWQpO1xuICBhbmltYXRpb25zLmVhcnRoLnB1c2goZ3JvdW5kKTtcbiAgYW5pbWF0aW9ucy5jbG91ZC5wdXNoKGNsb3VkKTtcblxuICBjb25zdCBteUF4aXMgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAxKTtcbiAgZWFydGgucm90YXRlT25BeGlzKG15QXhpcywgVEhSRUUuTWF0aFV0aWxzLmRlZ1RvUmFkKDIzLjUpKTtcblxuICBiYXNlLmFkZChlYXJ0aCk7XG5cbiAgcmV0dXJuIGVhcnRoO1xufTtcblxuY29uc3QgY3JlYXRlTW9vbk9yYml0ID0gKGVhcnRoT3JiaXQ6IFRIUkVFLk9iamVjdDNEKSA9PiB7XG4gIGNvbnN0IG1vb25PcmJpdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICBtb29uT3JiaXQucG9zaXRpb24uc2V0KDQsIDAsIDApO1xuICBlYXJ0aE9yYml0LmFkZChtb29uT3JiaXQpO1xuICByZXR1cm4gbW9vbk9yYml0O1xufTtcblxuY29uc3QgY3JlYXRlTW9vbiA9IChtb29uT3JiaXQ6IFRIUkVFLk9iamVjdDNEKSA9PiB7XG4gIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDAuNDMpO1xuXG4gIGNvbnN0IG1vb25UZXh0dXJlID0gbG9hZGVyLmxvYWQobW9vbik7XG4gIGNvbnN0IGJ1bXBUZXh0dXJlID0gbG9hZGVyLmxvYWQobW9vbmJ1bXApO1xuICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XG4gICAgbWFwOiBtb29uVGV4dHVyZSxcbiAgICBidW1wTWFwOiBidW1wVGV4dHVyZSxcbiAgICBidW1wU2NhbGU6IDAuMixcbiAgfSk7XG5cbiAgY29uc3QgbW9vbk1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuXG4gIG1vb25PcmJpdC5hZGQobW9vbk1lc2gpO1xuICBhbmltYXRpb25zLm1vb24ucHVzaChtb29uTWVzaCk7XG59O1xuXG5jb25zdCBzaGFwZUFzdGVyb2lkcyA9IChwb3NpdGlvbjogVEhSRUUuQnVmZmVyQXR0cmlidXRlKSA9PiB7XG4gIGNvbnN0IGFyckxpa2UgPSBwb3NpdGlvbi5hcnJheTtcbiAgbGV0IGNoZWNrID0gMDtcbiAgY29uc3QgcG9zaXRpb25TdG9yZTogbnVtYmVyW11bXSA9IFtbXV07XG4gIGNvbnN0IHBvc2l0aW9uQXJyID0gQXJyYXkuZnJvbShhcnJMaWtlKTtcbiAgcG9zaXRpb25BcnIuZm9yRWFjaCgobnVtYmVyKSA9PiB7XG4gICAgaWYgKGNoZWNrID4gMikge1xuICAgICAgY2hlY2sgPSAxO1xuICAgICAgcG9zaXRpb25TdG9yZVtwb3NpdGlvblN0b3JlLmxlbmd0aF0gPSBbbnVtYmVyXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9zaXRpb25TdG9yZVtwb3NpdGlvblN0b3JlLmxlbmd0aCAtIDFdLnB1c2gobnVtYmVyKTtcbiAgICAgIGNoZWNrICs9IDE7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCB1bmlxdWVWYWx1ZXM6IG51bWJlcltdW10gPSBbXTtcbiAgcG9zaXRpb25TdG9yZS5mb3JFYWNoKChhcnIpID0+IHtcbiAgICBpZiAodW5pcXVlVmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdW5pcXVlVmFsdWVzLnB1c2goYXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbCA9IHRydWU7XG4gICAgICB1bmlxdWVWYWx1ZXMuZm9yRWFjaCgoYXJyMikgPT4ge1xuICAgICAgICBpZiAoYXJyWzBdID09PSBhcnIyWzBdICYmIGFyclsxXSA9PT0gYXJyMlsxXSAmJiBhcnJbMl0gPT09IGFycjJbMl0pIHtcbiAgICAgICAgICB2YWwgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIHVuaXF1ZVZhbHVlcy5wdXNoKGFycik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBwcmV2ZW50TXV0OiBudW1iZXJbXVtdID0gW107XG4gIHVuaXF1ZVZhbHVlcy5mb3JFYWNoKChhcnIpID0+IHtcbiAgICBjb25zdCB4ID0gKGFyclswXSArIC0wLjI1ICsgTWF0aC5yYW5kb20oKSAqIDAuNSkudG9GaXhlZCgxKTtcbiAgICBjb25zdCB5ID0gKGFyclsxXSArIC0wLjI1ICsgTWF0aC5yYW5kb20oKSAqIDAuNSkudG9GaXhlZCgxKTtcbiAgICBjb25zdCB6ID0gKGFyclsyXSArIC0wLjI1ICsgTWF0aC5yYW5kb20oKSAqIDAuNSkudG9GaXhlZCgxKTtcblxuICAgIHBvc2l0aW9uU3RvcmUuZm9yRWFjaCgoYXJyMiwgbmR4KSA9PiB7XG4gICAgICBpZiAoYXJyWzBdID09PSBhcnIyWzBdICYmIGFyclsxXSA9PT0gYXJyMlsxXSAmJiBhcnJbMl0gPT09IGFycjJbMl0pIHtcbiAgICAgICAgcHJldmVudE11dFtuZHhdID0gW3BhcnNlRmxvYXQoeCksIHBhcnNlRmxvYXQoeSksIHBhcnNlRmxvYXQoeildO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBmaW5hbEFycjogbnVtYmVyW10gPSBbXTtcblxuICBwcmV2ZW50TXV0LmZvckVhY2goKGFycikgPT4ge1xuICAgIGNvbnN0IFt4LCB5LCB6XSA9IGFycjtcbiAgICBmaW5hbEFyci5wdXNoKHgpO1xuICAgIGZpbmFsQXJyLnB1c2goeSk7XG4gICAgZmluYWxBcnIucHVzaCh6KTtcbiAgfSk7XG5cbiAgcG9zaXRpb24uc2V0KGZpbmFsQXJyKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUFzdGVyb2lkcyA9IChcbiAgZWFydGhPcmJpdDogVEhSRUUuT2JqZWN0M0QsXG4gIGRhdGE6IERhdGFTb3J0ZXIsXG4gIG1hbmFnZXI6IEludGVyYWN0aW9uTWFuYWdlcixcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudFxuKSA9PiB7XG4gIGNvbnN0IG5lb3MgPSBkYXRhLm5lb0FycjtcblxuICBjb25zdCB0ZXh0dXJlID0gbG9hZGVyLmxvYWQoYXN0ZXJvaWRJbWcpO1xuICBjb25zdCB0ZXh0dXJlMiA9IGxvYWRlci5sb2FkKGFzdGVyb2lkQnVtcCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZW9zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgbmVvID0gbmVvc1tpXTtcbiAgICBjb25zdCBkaWFtZXRlciA9IGJhc2VMb2coZGF0YS5hdmVyYWdlRGlhbWV0ZXIoaSkgKiAxMDAwLCAyKTtcblxuICAgIGNvbnN0IGFzdGVyb2lkT3JiaXQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICBlYXJ0aE9yYml0LmFkZChhc3Rlcm9pZE9yYml0KTtcbiAgICBjb25zdCB7IG1pc3NEaXN0YW5jZTogZGlzdGFuY2VTdHIsIGlkIH0gPSBuZW87XG4gICAgY29uc3QgZGlzdGFuY2UgPSBwYXJzZUZsb2F0KGRpc3RhbmNlU3RyKTtcblxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkljb3NhaGVkcm9uR2VvbWV0cnkoZGlhbWV0ZXIsIDEpO1xuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtcbiAgICAgIG1hcDogdGV4dHVyZSxcbiAgICAgIHNwZWN1bGFyOiBcIndoaXRlXCIsXG4gICAgICBidW1wTWFwOiB0ZXh0dXJlMixcbiAgICAgIGJ1bXBTY2FsZTogMC4xLFxuICAgIH0pO1xuICAgIGNvbnN0IGFzdGVyb2lkID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICBjb25zdCByYW5kb20gPSByYW5kb21Qb3NpdGlvbihpZCwgYmFzZUxvZyhkaXN0YW5jZSAvIDEwLCAxMykpO1xuICAgIGFzdGVyb2lkT3JiaXQucG9zaXRpb24uc2V0KHJhbmRvbS54LCByYW5kb20ueSwgcmFuZG9tLnopO1xuICAgIGlmIChcbiAgICAgIGFzdGVyb2lkLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24gaW5zdGFuY2VvZiBUSFJFRS5CdWZmZXJBdHRyaWJ1dGVcbiAgICApIHtcbiAgICAgIHNoYXBlQXN0ZXJvaWRzKGFzdGVyb2lkLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24pO1xuICAgIH1cbiAgICBhc3Rlcm9pZE9yYml0LnNjYWxlLnNldCgwLjAwOSwgMC4wMDksIDAuMDA5KTtcbiAgICBhc3Rlcm9pZE9yYml0LmFkZChhc3Rlcm9pZCk7XG5cbiAgICBjb25zdCB0ZW1wViA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDI1LCAyLCAwLjEsIDEwMCk7XG5cbiAgICBhc3Rlcm9pZC51cGRhdGVXb3JsZE1hdHJpeCh0cnVlLCBmYWxzZSk7XG4gICAgYXN0ZXJvaWQuZ2V0V29ybGRQb3NpdGlvbih0ZW1wVik7XG4gICAgY2FtZXJhLnBvc2l0aW9uLnNldCh0ZW1wVi54IC0gMTAwLCB0ZW1wVi55LCB0ZW1wVi56KTtcbiAgICBjYW1lcmEuc2NhbGUuc2V0KDEwMCwgMTAwLCAxMDApO1xuICAgIGNhbWVyYS5sb29rQXQodGVtcFYpO1xuICAgIGNyZWF0ZU9yYml0Q29udHJvbHMoY2FtZXJhLCBjYW52YXMsIHRlbXBWKTtcbiAgICBhbmltYXRpb25zLmZ1bmN0aW9ucy5wdXNoKCgpID0+IHtcbiAgICAgIGFzdGVyb2lkLmdldFdvcmxkUG9zaXRpb24odGVtcFYpO1xuICAgICAgY2FtZXJhLmxvb2tBdCh0ZW1wVik7XG4gICAgfSk7XG5cbiAgICBhc3Rlcm9pZE9yYml0LmFkZChjYW1lcmEpO1xuICAgIGFuaW1hdGlvbnMuYXN0ZXJvaWRzLnB1c2goYXN0ZXJvaWQpO1xuXG4gICAgY29uc3QgcmV2ZXJ0VG9Ob3JtYWxEaXNwbGF5ID0gKCkgPT4ge1xuICAgICAgLy8gY2FudmFzLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImFsbFwiO1xuICAgICAgYW5pbWF0aW9ucy5jYW1lcmFzID0gW107XG4gICAgfTtcblxuICAgIGFzdGVyb2lkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBJbnRlcmFjdGl2ZUV2ZW50KSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGFuaW1hdGlvbnMuY2FtZXJhcyA9IFtdO1xuICAgICAgICBhbmltYXRpb25zLmNhbWVyYXMucHVzaChjYW1lcmEpO1xuICAgICAgICAvLyBjYW52YXMuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgICBkaXNwbGF5QXN0ZXJvaWRJbmZvKG5lbywgcmV2ZXJ0VG9Ob3JtYWxEaXNwbGF5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhc3Rlcm9pZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIEludGVyYWN0aXZlRXZlbnQpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgYXN0ZXJvaWQubWF0ZXJpYWwuZW1pc3NpdmUuc2V0SGV4KDB4ZmZmZmZmKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhc3Rlcm9pZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgSW50ZXJhY3RpdmVFdmVudCkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBhc3Rlcm9pZC5tYXRlcmlhbC5lbWlzc2l2ZS5zZXRIZXgoMHgwMDAwMDApO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbWFuYWdlci5hZGQoYXN0ZXJvaWQpO1xuICB9XG59O1xuXG5jb25zdCBpbml0ID0gKGRhdGE6IERhdGFTb3J0ZXIgfCBudWxsKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY1wiKTtcbiAgY29uc3QgY2VudGVyID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCk7XG5cbiAgaWYgKGNhbnZhcyBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGNhbnZhcyB9KTtcbiAgICBjb25zdCBzY2VuZSA9IGNyZWF0ZVNjZW5lKHJlbmRlcmVyKTtcbiAgICBjb25zdCBjYW1lcmEgPSBjcmVhdGVDYW1lcmEoc2NlbmUpO1xuICAgIGNvbnN0IG1hbmFnZXIgPSBuZXcgSW50ZXJhY3Rpb25NYW5hZ2VyKHJlbmRlcmVyLCBjYW1lcmEsIGNhbnZhcywgZmFsc2UpO1xuICAgIGNyZWF0ZU9yYml0Q29udHJvbHMoY2FtZXJhLCBjYW52YXMsIGNlbnRlcik7XG4gICAgY3JlYXRlTGlnaHRpbmcoc2NlbmUpO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBjb25zdCBlYXJ0aE9yYml0ID0gY3JlYXRlRWFydGhPcmJpdChzY2VuZSwgY2VudGVyKTtcbiAgICAgIGNvbnN0IGx1bmFyRWFydGhPcmJpdCA9IGNyZWF0ZUx1bmFyRWFydGhPcmJpdChlYXJ0aE9yYml0KTtcbiAgICAgIGNyZWF0ZUVhcnRoKGx1bmFyRWFydGhPcmJpdCk7XG4gICAgICBjb25zdCBtb29uT3JiaXQgPSBjcmVhdGVNb29uT3JiaXQobHVuYXJFYXJ0aE9yYml0KTtcbiAgICAgIGNyZWF0ZU1vb24obW9vbk9yYml0KTtcbiAgICAgIGNyZWF0ZUFzdGVyb2lkcyhlYXJ0aE9yYml0LCBkYXRhLCBtYW5hZ2VyLCBjYW52YXMpO1xuICAgIH1cbiAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gICAgYW5pbWF0ZShyZW5kZXJlciwgc2NlbmUsIGNhbWVyYSwgbWFuYWdlcik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG4iLCJjb25zdCBiYXNlTG9nID0gKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiBNYXRoLmxvZyh4KSAvIE1hdGgubG9nKHkpO1xuXG5jb25zdCBwc2V1ZG9SYW5kb20gPSAoaWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBudW1iZXIgPSBwYXJzZUZsb2F0KGlkKTtcbiAgY29uc3Qgc3VtID0gaWRcbiAgICAuc3BsaXQoXCJcIilcbiAgICAubWFwKChudW0pID0+IHBhcnNlRmxvYXQobnVtKSlcbiAgICAucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYyArIGN1cnIsIDApO1xuICBjb25zdCB2YWx1ZSA9IChudW1iZXIgLSBzdW0pIC8gKG51bWJlciArIHN1bSk7XG4gIGNvbnN0IHZhbHVlQXJyID0gdmFsdWVcbiAgICAudG9TdHJpbmcoKVxuICAgIC5zcGxpdChcIlwiKVxuICAgIC5maWx0ZXIoKHN0cikgPT4ge1xuICAgICAgaWYgKHN0ciAhPT0gXCIuXCIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICB2YWx1ZUFyclt2YWx1ZUFyci5sZW5ndGggLSAxXSA9IFwiMFwiO1xuICB2YWx1ZUFyclt2YWx1ZUFyci5sZW5ndGggLSAyXSA9IFwiLlwiO1xuICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KHZhbHVlQXJyLnJldmVyc2UoKS5qb2luKFwiXCIpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cbmNvbnN0IHJhbmRvbVBvc2l0aW9uID0gKGlkOiBzdHJpbmcsIGRpc3RhbmNlOiBudW1iZXIpID0+IHtcbiAgY29uc3QgdmFsdWUxID0gcHNldWRvUmFuZG9tKGAke2lkfTEyMzQ1YCkgKiBkaXN0YW5jZTtcbiAgY29uc3QgdmFsdWUyID1cbiAgICBwc2V1ZG9SYW5kb20oaWQgKyBpZCkgKiAocHNldWRvUmFuZG9tKGAke2lkfTUzMjQxYCkgPiAwLjUgPyAtMSA6IDEpO1xuICBjb25zdCBpbnRlcm1lZGlhdGUgPSB2YWx1ZTEgKiogMiArIHZhbHVlMiAqKiAyO1xuICBjb25zdCB2YWx1ZTMgPSAoZGlzdGFuY2UgKiogMiAtIGludGVybWVkaWF0ZSkgKiogMC41O1xuXG4gIGNvbnN0IHJhbmRvbSA9IHBzZXVkb1JhbmRvbShpZCArIGlkKSAqIDI7XG5cbiAgaWYgKHJhbmRvbSA+IDEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogdmFsdWUxICogKHBzZXVkb1JhbmRvbShgJHtpZH04NzYwNWApID4gMC41ID8gMSA6IC0xKSxcbiAgICAgIHk6IHZhbHVlMixcbiAgICAgIHo6IHZhbHVlMyAqIChwc2V1ZG9SYW5kb20oaWQgKyBpZCkgPiAwLjUgPyAxIDogLTEpLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IHZhbHVlMyAqIChwc2V1ZG9SYW5kb20oYCR7aWR9MjEzOThgKSA+IDAuNSA/IDEgOiAtMSksXG4gICAgeTogdmFsdWUyLFxuICAgIHo6IHZhbHVlMSAqIChwc2V1ZG9SYW5kb20oaWQgKyBpZCkgPiAwLjUgPyAxIDogLTEpLFxuICB9O1xufTtcblxuZXhwb3J0IHsgYmFzZUxvZywgcmFuZG9tUG9zaXRpb24gfTtcbiJdLCJuYW1lcyI6WyJzcGFjZW1wMyIsInNwYWNlb2dnIiwiY3JlYXRlQXVkaW8iLCJhdWRpbyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsInNvdXJjZSIsInNyYyIsInR5cGUiLCJhcHBlbmRDaGlsZCIsInNvdXJjZTIiLCJpbml0aWFsRGlzcGxheSIsImNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJIVE1MRWxlbWVudCIsInNvdW5kRGl2Iiwic291bmQiLCJtaWNyb0RpdiIsImkiLCJhZGRFdmVudExpc3RlbmVyIiwicGxheSIsInRoZW4iLCJtaWNyb0RpdjIiLCJzb3VuZERpdjIiLCJhdWRpbzIiLCJyZXBsYWNlQ2hpbGRyZW4iLCJpMiIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsInBhdXNlIiwiZGlzcGxheURpdjFJbmZvIiwiYXN0ZXJvaWRJbmZvIiwiZGl2MSIsIm5hbWVEaXYiLCJ0ZXh0Q29udGVudCIsIm5hbWUiLCJtYWduaXR1ZGVEaXYiLCJhYnNvbHV0ZU1hZ25pdHVkZSIsInZlbG9jaXR5RGl2IiwicmVsYXRpdmVWZWxvY2l0eSIsImRpc3BsYXlEaXYySW5mbyIsImRpdjIiLCJtYXhEaWFtZXRlckRpdiIsImVzdGltYXRlZERpYW1ldGVyTWF4IiwibWluRGlhbWV0ZXJEaXYiLCJlc3RpbWF0ZWREaWFtZXRlck1pbiIsImRpc3BsYXlEaXYzSW5mbyIsInJldmVydEZ1bmN0aW9uIiwiZGl2MyIsImhhemFyZERpdiIsImljb25EaXYiLCJ0ZXh0RGl2IiwicG90ZW50aWFsbHlIYXphcmRvdXMiLCJiYWNrRGl2IiwiYmFja0ljb24iLCJiYWNrSSIsImJhY2tUZXh0IiwiZGlzcGxheURpdjRJbmZvIiwiZGl2NCIsImNsb3Nlc3RBcHByb2FjaERpdiIsImNsb3Nlc3RBcHByb2FjaERhdGUiLCJtaXNzRGlzdGFuY2VEaXYiLCJwYXJzZUZsb2F0IiwibWlzc0Rpc3RhbmNlIiwidG9GaXhlZCIsIm9yYml0aW5nQm9keURpdiIsIm9yYml0aW5nQm9keSIsImRpc3BsYXlBc3Rlcm9pZEluZm8iLCJpbmZvRGl2IiwicmV2ZXJ0IiwicmVtb3ZlQ2hpbGQiLCJlcnJvckRpc3BsYXkiLCJlcnJvckRpdiIsIlRIUkVFIiwiSW50ZXJhY3Rpb25NYW5hZ2VyIiwiSW50ZXJhY3RpdmVFdmVudCIsIk9yYml0Q29udHJvbHMiLCJiYXNlTG9nIiwicmFuZG9tUG9zaXRpb24iLCJnYWxheHkiLCJlYXJ0aG1hcCIsImVhcnRoYnVtcCIsImVhcnRoY2xvdWQiLCJtb29uIiwibW9vbmJ1bXAiLCJhc3Rlcm9pZEltZyIsImFzdGVyb2lkQnVtcCIsImFuaW1hdGlvbnMiLCJhbmltYXRlIiwiY2xvdWQiLCJlYXJ0aCIsImFzdGVyb2lkcyIsImx1bmFyRWFydGgiLCJlYXJ0aE9yYml0IiwiY2FtZXJhcyIsImZ1bmN0aW9ucyIsImxvYWRlciIsIlRleHR1cmVMb2FkZXIiLCJjcmVhdGVTY2VuZSIsInJlbmRlcmVyIiwic2NlbmUiLCJTY2VuZSIsInRleHR1cmUiLCJsb2FkIiwiaW1hZ2UiLCJIVE1MSW1hZ2VFbGVtZW50IiwicnQiLCJXZWJHTEN1YmVSZW5kZXJUYXJnZXQiLCJoZWlnaHQiLCJmcm9tRXF1aXJlY3Rhbmd1bGFyVGV4dHVyZSIsImJhY2tncm91bmQiLCJjcmVhdGVDYW1lcmEiLCJmb3YiLCJhc3BlY3QiLCJuZWFyIiwiZmFyIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJwb3NpdGlvbiIsInNldCIsImNyZWF0ZU9yYml0Q29udHJvbHMiLCJjYW52YXMiLCJjZW50ZXIiLCJjb250cm9scyIsInRhcmdldCIsImNvcHkiLCJWZWN0b3IzIiwidXBkYXRlIiwiY3JlYXRlTGlnaHRpbmciLCJjb2xvciIsImludGVuc2l0eSIsImxpZ2h0aW5nIiwiRGlyZWN0aW9uYWxMaWdodCIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsInJlc2l6ZVJlbmRlcmVyVG9EaXNwbGF5U2l6ZSIsImRvbUVsZW1lbnQiLCJuZWVkc1Jlc2l6ZSIsImNsaWVudFdpZHRoIiwid2lkdGgiLCJjbGllbnRIZWlnaHQiLCJzZXRTaXplIiwibWFuYWdlciIsInJlbmRlciIsInRpbWUiLCJ0aW1lSW5TZWNvbmRzIiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImZvckVhY2giLCJvYmplY3QiLCJyb3RhdGlvbiIsInkiLCJuZHgiLCJ4IiwieiIsImZ1bmMiLCJsZW5ndGgiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjcmVhdGVFYXJ0aE9yYml0IiwiT2JqZWN0M0QiLCJteUF4aXMiLCJyb3RhdGVPbkF4aXMiLCJNYXRoVXRpbHMiLCJkZWdUb1JhZCIsInB1c2giLCJjcmVhdGVMdW5hckVhcnRoT3JiaXQiLCJsdW5hckVhcnRoT3JiaXQiLCJjcmVhdGVFYXJ0aCIsImJhc2UiLCJnZW9tZXRyeSIsIlNwaGVyZUdlb21ldHJ5IiwiY2xvdWRHZW9tZXRyeSIsImJ1bXBUZXh0dXJlIiwiY2xvdWRUZXh0dXJlIiwibWF0ZXJpYWwiLCJNZXNoUGhvbmdNYXRlcmlhbCIsIm1hcCIsImJ1bXBNYXAiLCJidW1wU2NhbGUiLCJjbG91ZE1hdGVyaWFsIiwidHJhbnNwYXJlbnQiLCJvcGFjaXR5IiwiZ3JvdW5kIiwiTWVzaCIsImNyZWF0ZU1vb25PcmJpdCIsIm1vb25PcmJpdCIsImNyZWF0ZU1vb24iLCJtb29uVGV4dHVyZSIsIm1vb25NZXNoIiwic2hhcGVBc3Rlcm9pZHMiLCJhcnJMaWtlIiwiYXJyYXkiLCJjaGVjayIsInBvc2l0aW9uU3RvcmUiLCJwb3NpdGlvbkFyciIsIkFycmF5IiwiZnJvbSIsIm51bWJlciIsInVuaXF1ZVZhbHVlcyIsImFyciIsInZhbCIsImFycjIiLCJwcmV2ZW50TXV0IiwiTWF0aCIsInJhbmRvbSIsImZpbmFsQXJyIiwiY3JlYXRlQXN0ZXJvaWRzIiwiZGF0YSIsIm5lb3MiLCJuZW9BcnIiLCJ0ZXh0dXJlMiIsIm5lbyIsImRpYW1ldGVyIiwiYXZlcmFnZURpYW1ldGVyIiwiYXN0ZXJvaWRPcmJpdCIsImRpc3RhbmNlU3RyIiwiaWQiLCJkaXN0YW5jZSIsIkljb3NhaGVkcm9uR2VvbWV0cnkiLCJzcGVjdWxhciIsImFzdGVyb2lkIiwiYXR0cmlidXRlcyIsIkJ1ZmZlckF0dHJpYnV0ZSIsInNjYWxlIiwidGVtcFYiLCJ1cGRhdGVXb3JsZE1hdHJpeCIsImdldFdvcmxkUG9zaXRpb24iLCJsb29rQXQiLCJyZXZlcnRUb05vcm1hbERpc3BsYXkiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiZW1pc3NpdmUiLCJzZXRIZXgiLCJib2R5Iiwic3R5bGUiLCJjdXJzb3IiLCJpbml0IiwiSFRNTENhbnZhc0VsZW1lbnQiLCJXZWJHTFJlbmRlcmVyIiwicHNldWRvUmFuZG9tIiwic3VtIiwic3BsaXQiLCJudW0iLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwidmFsdWUiLCJ2YWx1ZUFyciIsInRvU3RyaW5nIiwiZmlsdGVyIiwic3RyIiwicmV2ZXJzZSIsImpvaW4iLCJ2YWx1ZTEiLCJ2YWx1ZTIiLCJpbnRlcm1lZGlhdGUiLCJ2YWx1ZTMiXSwic291cmNlUm9vdCI6IiJ9