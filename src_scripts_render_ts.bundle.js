"use strict";
(self["webpackChunknear_earth_object_tracker"] = self["webpackChunknear_earth_object_tracker"] || []).push([["src_scripts_render_ts"],{

/***/ "./src/scripts/displayAsteroidInfo.ts":
/*!********************************************!*\
  !*** ./src/scripts/displayAsteroidInfo.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (displayAsteroidInfo);

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
/* harmony import */ var _displayAsteroidInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayAsteroidInfo */ "./src/scripts/displayAsteroidInfo.ts");
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

        (0,_displayAsteroidInfo__WEBPACK_IMPORTED_MODULE_3__["default"])(neo, revertToNormalDisplay);
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
    var earthOrbit = createEarthOrbit(scene, center);
    var lunarEarthOrbit = createLunarEarthOrbit(earthOrbit);
    createEarth(lunarEarthOrbit);
    var moonOrbit = createMoonOrbit(lunarEarthOrbit);
    createMoon(moonOrbit);
    createAsteroids(earthOrbit, data, manager, canvas);
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE5QixHQUFrQyxDQUFDLENBQXZDO0VBSEosQ0FBUDtBQUtELENBdEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmVhci1lYXJ0aC1vYmplY3QtdHJhY2tlci8uL3NyYy9zY3JpcHRzL2Rpc3BsYXlBc3Rlcm9pZEluZm8udHMiLCJ3ZWJwYWNrOi8vbmVhci1lYXJ0aC1vYmplY3QtdHJhY2tlci8uL3NyYy9zY3JpcHRzL3JlbmRlci50cyIsIndlYnBhY2s6Ly9uZWFyLWVhcnRoLW9iamVjdC10cmFja2VyLy4vc3JjL3NjcmlwdHMvdXRpbGl0aWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXN0ZXJvaWRJbmZvIH0gZnJvbSBcIi4vZmV0Y2hEYXRhXCI7XG5cbmNvbnN0IGRpc3BsYXlEaXYxSW5mbyA9IChhc3Rlcm9pZEluZm86IEFzdGVyb2lkSW5mbykgPT4ge1xuICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2MS5jbGFzc0xpc3QuYWRkKFwiZGl2MVwiKTtcblxuICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmFtZURpdi5jbGFzc0xpc3QuYWRkKFwibmFtZURpdlwiKTtcbiAgbmFtZURpdi50ZXh0Q29udGVudCA9IGBOYW1lOiAke2FzdGVyb2lkSW5mby5uYW1lfWA7XG4gIGRpdjEuYXBwZW5kQ2hpbGQobmFtZURpdik7XG5cbiAgY29uc3QgbWFnbml0dWRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFnbml0dWRlRGl2LmNsYXNzTGlzdC5hZGQoXCJtYWduaXR1ZGVEaXZcIik7XG4gIG1hZ25pdHVkZURpdi50ZXh0Q29udGVudCA9IGBBYnNvbHV0ZSBNYWduaXR1ZGU6ICR7YXN0ZXJvaWRJbmZvLmFic29sdXRlTWFnbml0dWRlfWA7XG4gIGRpdjEuYXBwZW5kQ2hpbGQobWFnbml0dWRlRGl2KTtcblxuICBjb25zdCB2ZWxvY2l0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHZlbG9jaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJ2ZWxvY2l0eURpdlwiKTtcbiAgdmVsb2NpdHlEaXYudGV4dENvbnRlbnQgPSBgUmVsYXRpdmUgdmVsb2NpdHk6ICR7YXN0ZXJvaWRJbmZvLnJlbGF0aXZlVmVsb2NpdHl9IGttL3NgO1xuICBkaXYxLmFwcGVuZENoaWxkKHZlbG9jaXR5RGl2KTtcblxuICByZXR1cm4gZGl2MTtcbn07XG5cbmNvbnN0IGRpc3BsYXlEaXYySW5mbyA9IChhc3Rlcm9pZEluZm86IEFzdGVyb2lkSW5mbykgPT4ge1xuICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2Mi5jbGFzc0xpc3QuYWRkKFwiZGl2MlwiKTtcblxuICBjb25zdCBtYXhEaWFtZXRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1heERpYW1ldGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJtYXhEaWFtZXRlckRpdlwiKTtcbiAgbWF4RGlhbWV0ZXJEaXYudGV4dENvbnRlbnQgPSBgTWF4aW11bSBlc3RpbWF0ZWQgZGlhbWV0ZXI6ICR7YXN0ZXJvaWRJbmZvLmVzdGltYXRlZERpYW1ldGVyTWF4fSBrbWA7XG4gIGRpdjIuYXBwZW5kQ2hpbGQobWF4RGlhbWV0ZXJEaXYpO1xuXG4gIGNvbnN0IG1pbkRpYW1ldGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWluRGlhbWV0ZXJEaXYuY2xhc3NMaXN0LmFkZChcIm1pbkRpYW1ldGVyRGl2XCIpO1xuICBtaW5EaWFtZXRlckRpdi50ZXh0Q29udGVudCA9IGBNaW5pbXVtIGVzdGltYXRlZCBkaWFtZXRlcjogJHthc3Rlcm9pZEluZm8uZXN0aW1hdGVkRGlhbWV0ZXJNaW59IGttYDtcbiAgZGl2Mi5hcHBlbmRDaGlsZChtaW5EaWFtZXRlckRpdik7XG5cbiAgcmV0dXJuIGRpdjI7XG59O1xuXG5jb25zdCBkaXNwbGF5RGl2M0luZm8gPSAoXG4gIGFzdGVyb2lkSW5mbzogQXN0ZXJvaWRJbmZvLFxuICByZXZlcnRGdW5jdGlvbjogKCkgPT4gdm9pZFxuKSA9PiB7XG4gIGNvbnN0IGRpdjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYzLmNsYXNzTGlzdC5hZGQoXCJkaXYzXCIpO1xuXG4gIGNvbnN0IGhhemFyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhhemFyZERpdi5jbGFzc0xpc3QuYWRkKFwiaGF6YXJkRGl2XCIpO1xuICBjb25zdCBpY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBjb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBpZiAoYXN0ZXJvaWRJbmZvLnBvdGVudGlhbGx5SGF6YXJkb3VzKSB7XG4gICAgaS5jbGFzc0xpc3QuYWRkKFwiZmFzXCIsIFwiZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIik7XG4gICAgaWNvbkRpdi5hcHBlbmRDaGlsZChpKTtcbiAgICBoYXphcmREaXYuYXBwZW5kQ2hpbGQoaWNvbkRpdik7XG5cbiAgICB0ZXh0RGl2LnRleHRDb250ZW50ID0gXCJBc3Rlcm9pZCBpcyBwb3RlbnRpYWxseSBoYXphcmRvdXMhXCI7XG4gICAgaGF6YXJkRGl2LmFwcGVuZENoaWxkKHRleHREaXYpO1xuXG4gICAgaGF6YXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJoYXphcmRcIik7XG4gIH0gZWxzZSB7XG4gICAgaS5jbGFzc0xpc3QuYWRkKFwiZmFzXCIsIFwiZmEtY2hlY2stY2lyY2xlXCIpO1xuICAgIGljb25EaXYuYXBwZW5kQ2hpbGQoaSk7XG4gICAgaGF6YXJkRGl2LmFwcGVuZENoaWxkKGljb25EaXYpO1xuXG4gICAgdGV4dERpdi50ZXh0Q29udGVudCA9IFwiQXN0ZXJvaWQgaXMgbm90IHBvdGVudGlhbGx5IGhhemFyZG91cyFcIjtcbiAgICBoYXphcmREaXYuYXBwZW5kQ2hpbGQodGV4dERpdik7XG5cbiAgICBoYXphcmREaXYuY2xhc3NMaXN0LmFkZChcIm5vdC1oYXphcmRcIik7XG4gIH1cbiAgZGl2My5hcHBlbmRDaGlsZChoYXphcmREaXYpO1xuXG4gIGNvbnN0IGJhY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiYWNrRGl2LmNsYXNzTGlzdC5hZGQoXCJiYWNrRGl2XCIpO1xuXG4gIGNvbnN0IGJhY2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmFja0kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgYmFja0kuY2xhc3NMaXN0LmFkZChcImZhc1wiLCBcImZhLWFycm93LWFsdC1jaXJjbGUtbGVmdFwiKTtcbiAgYmFja0ljb24uYXBwZW5kQ2hpbGQoYmFja0kpO1xuICBiYWNrRGl2LmFwcGVuZENoaWxkKGJhY2tJY29uKTtcblxuICBjb25zdCBiYWNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0XCIpO1xuICBiYWNrVGV4dC50ZXh0Q29udGVudCA9IFwiQmFjayB0byBFYXJ0aCBWaWV3XCI7XG4gIGJhY2tEaXYuYXBwZW5kQ2hpbGQoYmFja1RleHQpO1xuXG4gIGJhY2tEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJldmVydEZ1bmN0aW9uKTtcblxuICBkaXYzLmFwcGVuZENoaWxkKGJhY2tEaXYpO1xuXG4gIHJldHVybiBkaXYzO1xufTtcblxuY29uc3QgZGlzcGxheURpdjRJbmZvID0gKGFzdGVyb2lkSW5mbzogQXN0ZXJvaWRJbmZvKSA9PiB7XG4gIGNvbnN0IGRpdjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXY0LmNsYXNzTGlzdC5hZGQoXCJkaXY0XCIpO1xuXG4gIGNvbnN0IGNsb3Nlc3RBcHByb2FjaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNsb3Nlc3RBcHByb2FjaERpdi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VzdEFwcHJvYWNoRGl2XCIpO1xuICBjbG9zZXN0QXBwcm9hY2hEaXYudGV4dENvbnRlbnQgPSBgQ2xvc2VzdCBhcHByb2FjaCBkYXRlOiAke2FzdGVyb2lkSW5mby5jbG9zZXN0QXBwcm9hY2hEYXRlfWA7XG4gIGRpdjQuYXBwZW5kQ2hpbGQoY2xvc2VzdEFwcHJvYWNoRGl2KTtcblxuICBjb25zdCBtaXNzRGlzdGFuY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtaXNzRGlzdGFuY2VEaXYuY2xhc3NMaXN0LmFkZChcIm1pc3NEaXN0YW5jZURpdlwiKTtcbiAgbWlzc0Rpc3RhbmNlRGl2LnRleHRDb250ZW50ID0gYE1pc3MgZGlzdGFuY2U6ICR7cGFyc2VGbG9hdChcbiAgICBhc3Rlcm9pZEluZm8ubWlzc0Rpc3RhbmNlXG4gICkudG9GaXhlZCgxKX0ga21gO1xuICBkaXY0LmFwcGVuZENoaWxkKG1pc3NEaXN0YW5jZURpdik7XG5cbiAgY29uc3Qgb3JiaXRpbmdCb2R5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3JiaXRpbmdCb2R5RGl2LmNsYXNzTGlzdC5hZGQoXCJvcmJpdGluZ0JvZHlEaXZcIik7XG4gIG9yYml0aW5nQm9keURpdi50ZXh0Q29udGVudCA9IGBPcmJpdGluZyBib2R5OiAke2FzdGVyb2lkSW5mby5vcmJpdGluZ0JvZHl9YDtcbiAgZGl2NC5hcHBlbmRDaGlsZChvcmJpdGluZ0JvZHlEaXYpO1xuXG4gIHJldHVybiBkaXY0O1xufTtcblxuY29uc3QgZGlzcGxheUFzdGVyb2lkSW5mbyA9IChcbiAgYXN0ZXJvaWRJbmZvOiBBc3Rlcm9pZEluZm8sXG4gIHJldmVydEZ1bmN0aW9uOiAoKSA9PiB2b2lkXG4pID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gIGlmIChjb250YWluZXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluZm9EaXYuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9EaXYpO1xuXG4gICAgY29uc3QgcmV2ZXJ0ID0gKCkgPT4ge1xuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGluZm9EaXYpO1xuICAgICAgcmV2ZXJ0RnVuY3Rpb24oKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGl2MSA9IGRpc3BsYXlEaXYxSW5mbyhhc3Rlcm9pZEluZm8pO1xuICAgIGNvbnN0IGRpdjIgPSBkaXNwbGF5RGl2MkluZm8oYXN0ZXJvaWRJbmZvKTtcbiAgICBjb25zdCBkaXYzID0gZGlzcGxheURpdjNJbmZvKGFzdGVyb2lkSW5mbywgcmV2ZXJ0KTtcbiAgICBjb25zdCBkaXY0ID0gZGlzcGxheURpdjRJbmZvKGFzdGVyb2lkSW5mbyk7XG5cbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKGRpdjEpO1xuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQoZGl2Mik7XG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChkaXYzKTtcbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKGRpdjQpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5QXN0ZXJvaWRJbmZvO1xuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBJbnRlcmFjdGlvbk1hbmFnZXIsIEludGVyYWN0aXZlRXZlbnQgfSBmcm9tIFwidGhyZWUuaW50ZXJhY3RpdmVcIjtcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHNcIjtcbmltcG9ydCB0eXBlIHsgRGF0YVNvcnRlciB9IGZyb20gXCIuL2ZldGNoRGF0YVwiO1xuaW1wb3J0IHsgYmFzZUxvZywgcmFuZG9tUG9zaXRpb24gfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcbmltcG9ydCBkaXNwbGF5QXN0ZXJvaWRJbmZvIGZyb20gXCIuL2Rpc3BsYXlBc3Rlcm9pZEluZm9cIjtcbmltcG9ydCBnYWxheHkgZnJvbSBcIi4uL2Fzc2V0cy9nYWxheHkyLmpwZ1wiO1xuaW1wb3J0IGVhcnRobWFwIGZyb20gXCIuLi9hc3NldHMvZWFydGhtYXAxay5qcGdcIjtcbmltcG9ydCBlYXJ0aGJ1bXAgZnJvbSBcIi4uL2Fzc2V0cy9lYXJ0aGJ1bXAuanBnXCI7XG5pbXBvcnQgZWFydGhjbG91ZCBmcm9tIFwiLi4vYXNzZXRzL2VhcnRoQ2xvdWQucG5nXCI7XG5pbXBvcnQgbW9vbiBmcm9tIFwiLi4vYXNzZXRzL21vb24uanBnXCI7XG5pbXBvcnQgbW9vbmJ1bXAgZnJvbSBcIi4uL2Fzc2V0cy9tb29uYnVtcC5qcGdcIjtcbmltcG9ydCBhc3Rlcm9pZEltZyBmcm9tIFwiLi4vYXNzZXRzL2FzdGVyb2lkLmpwZ1wiO1xuaW1wb3J0IGFzdGVyb2lkQnVtcCBmcm9tIFwiLi4vYXNzZXRzL2FzdGVyb2lkQnVtcC5qcGdcIjtcblxuaW50ZXJmYWNlIEFuaW1hdGlvbnMge1xuICBhbmltYXRlOiBib29sZWFuO1xuICBjbG91ZDogVEhSRUUuT2JqZWN0M0RbXTtcbiAgZWFydGg6IFRIUkVFLk9iamVjdDNEW107XG4gIGFzdGVyb2lkczogVEhSRUUuT2JqZWN0M0RbXTtcbiAgbW9vbjogVEhSRUUuT2JqZWN0M0RbXTtcbiAgbHVuYXJFYXJ0aDogVEhSRUUuT2JqZWN0M0RbXTtcbiAgZWFydGhPcmJpdDogVEhSRUUuT2JqZWN0M0RbXTtcbiAgY2FtZXJhczogVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmFbXTtcbiAgZnVuY3Rpb25zOiAoKCkgPT4gdm9pZClbXTtcbn1cblxuY29uc3QgYW5pbWF0aW9uczogQW5pbWF0aW9ucyA9IHtcbiAgYW5pbWF0ZTogdHJ1ZSxcbiAgY2xvdWQ6IFtdLFxuICBlYXJ0aDogW10sXG4gIGFzdGVyb2lkczogW10sXG4gIG1vb246IFtdLFxuICBsdW5hckVhcnRoOiBbXSxcbiAgZWFydGhPcmJpdDogW10sXG4gIGNhbWVyYXM6IFtdLFxuICBmdW5jdGlvbnM6IFtdLFxufTtcblxuY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcblxuY29uc3QgY3JlYXRlU2NlbmUgPSAocmVuZGVyZXI6IFRIUkVFLldlYkdMUmVuZGVyZXIpID0+IHtcbiAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgY29uc3QgdGV4dHVyZSA9IGxvYWRlci5sb2FkKGdhbGF4eSwgKCkgPT4ge1xuICAgIGlmICh0ZXh0dXJlLmltYWdlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuICAgICAgY29uc3QgcnQgPSBuZXcgVEhSRUUuV2ViR0xDdWJlUmVuZGVyVGFyZ2V0KHRleHR1cmUuaW1hZ2UuaGVpZ2h0KTtcbiAgICAgIHJ0LmZyb21FcXVpcmVjdGFuZ3VsYXJUZXh0dXJlKHJlbmRlcmVyLCB0ZXh0dXJlKTtcbiAgICAgIHNjZW5lLmJhY2tncm91bmQgPSBydC50ZXh0dXJlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzY2VuZTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNhbWVyYSA9IChzY2VuZTogVEhSRUUuU2NlbmUpID0+IHtcbiAgY29uc3QgZm92ID0gNzU7XG4gIGNvbnN0IGFzcGVjdCA9IDI7XG4gIGNvbnN0IG5lYXIgPSAwLjE7XG4gIGNvbnN0IGZhciA9IDI1O1xuXG4gIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShmb3YsIGFzcGVjdCwgbmVhciwgZmFyKTtcbiAgY2FtZXJhLnBvc2l0aW9uLnNldCgwLCAwLCA1KTtcblxuICBzY2VuZS5hZGQoY2FtZXJhKTtcblxuICByZXR1cm4gY2FtZXJhO1xufTtcblxuY29uc3QgY3JlYXRlT3JiaXRDb250cm9scyA9IChcbiAgY2FtZXJhOiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSxcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCxcbiAgY2VudGVyOiBUSFJFRS5WZWN0b3IzXG4pID0+IHtcbiAgY29uc3QgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIGNhbnZhcyk7XG4gIGNvbnRyb2xzLnRhcmdldC5jb3B5KGNlbnRlcikuYWRkKG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAtMSwgMCkpO1xuICBjb250cm9scy51cGRhdGUoKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUxpZ2h0aW5nID0gKHNjZW5lOiBUSFJFRS5TY2VuZSkgPT4ge1xuICBjb25zdCBjb2xvciA9IDB4ZmZmZmZmO1xuICBjb25zdCBpbnRlbnNpdHkgPSAxO1xuICBjb25zdCBsaWdodGluZyA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KGNvbG9yLCBpbnRlbnNpdHkpO1xuICBsaWdodGluZy5wb3NpdGlvbi5zZXQoMiwgMiwgNCk7XG4gIHNjZW5lLmFkZChsaWdodGluZyk7XG5cbiAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodChjb2xvciwgaW50ZW5zaXR5IC8gNSk7XG4gIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpO1xufTtcblxuY29uc3QgcmVzaXplUmVuZGVyZXJUb0Rpc3BsYXlTaXplID0gKHJlbmRlcmVyOiBUSFJFRS5XZWJHTFJlbmRlcmVyKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IHJlbmRlcmVyLmRvbUVsZW1lbnQ7XG4gIGNvbnN0IG5lZWRzUmVzaXplID1cbiAgICBjYW52YXMuY2xpZW50V2lkdGggIT09IGNhbnZhcy53aWR0aCB8fFxuICAgIGNhbnZhcy5jbGllbnRIZWlnaHQgIT09IGNhbnZhcy5oZWlnaHQ7XG5cbiAgaWYgKG5lZWRzUmVzaXplKSB7XG4gICAgcmVuZGVyZXIuc2V0U2l6ZShjYW52YXMuY2xpZW50V2lkdGgsIGNhbnZhcy5jbGllbnRIZWlnaHQsIGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiBuZWVkc1Jlc2l6ZTtcbn07XG5cbmNvbnN0IGFuaW1hdGUgPSAoXG4gIHJlbmRlcmVyOiBUSFJFRS5XZWJHTFJlbmRlcmVyLFxuICBzY2VuZTogVEhSRUUuU2NlbmUsXG4gIGNhbWVyYTogVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEsXG4gIG1hbmFnZXI6IEludGVyYWN0aW9uTWFuYWdlclxuKSA9PiB7XG4gIGNvbnN0IHJlbmRlciA9ICh0aW1lOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB0aW1lSW5TZWNvbmRzID0gdGltZSAqIDAuMDAxO1xuXG4gICAgY29uc3QgY2FudmFzID0gcmVuZGVyZXIuZG9tRWxlbWVudDtcbiAgICBjYW1lcmEuYXNwZWN0ID0gY2FudmFzLmNsaWVudFdpZHRoIC8gY2FudmFzLmNsaWVudEhlaWdodDtcbiAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG4gICAgaWYgKHJlc2l6ZVJlbmRlcmVyVG9EaXNwbGF5U2l6ZShyZW5kZXJlcikpIHtcbiAgICAgIGNhbWVyYS5hc3BlY3QgPSBjYW52YXMuY2xpZW50V2lkdGggLyBjYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICB9XG5cbiAgICBhbmltYXRpb25zLmVhcnRoT3JiaXQuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICBvYmplY3Qucm90YXRpb24ueSA9IHRpbWVJblNlY29uZHMgKiAwLjAwNTtcbiAgICB9KTtcblxuICAgIGFuaW1hdGlvbnMuY2xvdWQuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICBvYmplY3Qucm90YXRpb24ueSA9IHRpbWVJblNlY29uZHMgKiAwLjA1O1xuICAgIH0pO1xuXG4gICAgYW5pbWF0aW9ucy5lYXJ0aC5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgIG9iamVjdC5yb3RhdGlvbi55ID0gdGltZUluU2Vjb25kcyAqIDAuMDI7XG4gICAgfSk7XG5cbiAgICBhbmltYXRpb25zLm1vb24uZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICBvYmplY3Qucm90YXRpb24ueSA9IHRpbWVJblNlY29uZHMgKiAwLjAxO1xuICAgIH0pO1xuXG4gICAgYW5pbWF0aW9ucy5sdW5hckVhcnRoLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgb2JqZWN0LnJvdGF0aW9uLnkgPSB0aW1lSW5TZWNvbmRzICogMC4wMTtcbiAgICB9KTtcblxuICAgIGFuaW1hdGlvbnMuYXN0ZXJvaWRzLmZvckVhY2goKG9iamVjdCwgbmR4KSA9PiB7XG4gICAgICBvYmplY3Qucm90YXRpb24ueSA9IHRpbWVJblNlY29uZHMgKiAwLjEgKyBuZHggKiAwLjA1O1xuICAgICAgb2JqZWN0LnJvdGF0aW9uLnggPSB0aW1lSW5TZWNvbmRzICogMC4xICsgbmR4ICogMC4wMTtcbiAgICAgIG9iamVjdC5yb3RhdGlvbi56ID0gdGltZUluU2Vjb25kcyAqIDAuMSAtIG5keCAqIDAuMDU7XG4gICAgfSk7XG5cbiAgICBhbmltYXRpb25zLmZ1bmN0aW9ucy5mb3JFYWNoKChmdW5jKSA9PiB7XG4gICAgICBmdW5jKCk7XG4gICAgfSk7XG5cbiAgICBtYW5hZ2VyLnVwZGF0ZSgpO1xuXG4gICAgaWYgKGFuaW1hdGlvbnMuY2FtZXJhcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYW5pbWF0aW9ucy5jYW1lcmFzWzBdLmFzcGVjdCA9IGNhbnZhcy5jbGllbnRXaWR0aCAvIGNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgICBhbmltYXRpb25zLmNhbWVyYXNbMF0udXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBhbmltYXRpb25zLmNhbWVyYXNbMF0pO1xuICAgIH1cblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgfTtcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xufTtcblxuY29uc3QgY3JlYXRlRWFydGhPcmJpdCA9IChzY2VuZTogVEhSRUUuU2NlbmUsIGNlbnRlcjogVEhSRUUuVmVjdG9yMykgPT4ge1xuICBjb25zdCBlYXJ0aE9yYml0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gIGVhcnRoT3JiaXQucG9zaXRpb24uc2V0KGNlbnRlci54LCBjZW50ZXIueSwgY2VudGVyLnopO1xuICBjb25zdCBteUF4aXMgPSBuZXcgVEhSRUUuVmVjdG9yMygxLCAtMSwgMCk7XG4gIGVhcnRoT3JiaXQucm90YXRlT25BeGlzKG15QXhpcywgVEhSRUUuTWF0aFV0aWxzLmRlZ1RvUmFkKDIzLjUpKTtcbiAgc2NlbmUuYWRkKGVhcnRoT3JiaXQpO1xuICBhbmltYXRpb25zLmVhcnRoT3JiaXQucHVzaChlYXJ0aE9yYml0KTtcbiAgcmV0dXJuIGVhcnRoT3JiaXQ7XG59O1xuXG5jb25zdCBjcmVhdGVMdW5hckVhcnRoT3JiaXQgPSAoZWFydGhPcmJpdDogVEhSRUUuT2JqZWN0M0QpID0+IHtcbiAgY29uc3QgbHVuYXJFYXJ0aE9yYml0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gIGVhcnRoT3JiaXQuYWRkKGx1bmFyRWFydGhPcmJpdCk7XG4gIGFuaW1hdGlvbnMubHVuYXJFYXJ0aC5wdXNoKGx1bmFyRWFydGhPcmJpdCk7XG4gIHJldHVybiBsdW5hckVhcnRoT3JiaXQ7XG59O1xuXG5jb25zdCBjcmVhdGVFYXJ0aCA9IChiYXNlOiBUSFJFRS5PYmplY3QzRCkgPT4ge1xuICBjb25zdCBlYXJ0aCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuXG4gIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDEpO1xuICBjb25zdCBjbG91ZEdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDEuMDA5KTtcblxuICBjb25zdCB0ZXh0dXJlID0gbG9hZGVyLmxvYWQoZWFydGhtYXApO1xuICBjb25zdCBidW1wVGV4dHVyZSA9IGxvYWRlci5sb2FkKGVhcnRoYnVtcCk7XG4gIGNvbnN0IGNsb3VkVGV4dHVyZSA9IGxvYWRlci5sb2FkKGVhcnRoY2xvdWQpO1xuXG4gIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtcbiAgICBtYXA6IHRleHR1cmUsXG4gICAgYnVtcE1hcDogYnVtcFRleHR1cmUsXG4gICAgYnVtcFNjYWxlOiAwLjYsXG4gIH0pO1xuICBjb25zdCBjbG91ZE1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtcbiAgICBtYXA6IGNsb3VkVGV4dHVyZSxcbiAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICBvcGFjaXR5OiAwLjUsXG4gIH0pO1xuXG4gIGNvbnN0IGdyb3VuZCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gIGNvbnN0IGNsb3VkID0gbmV3IFRIUkVFLk1lc2goY2xvdWRHZW9tZXRyeSwgY2xvdWRNYXRlcmlhbCk7XG5cbiAgZWFydGguYWRkKGdyb3VuZCk7XG4gIGVhcnRoLmFkZChjbG91ZCk7XG4gIGFuaW1hdGlvbnMuZWFydGgucHVzaChncm91bmQpO1xuICBhbmltYXRpb25zLmNsb3VkLnB1c2goY2xvdWQpO1xuXG4gIGNvbnN0IG15QXhpcyA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDEpO1xuICBlYXJ0aC5yb3RhdGVPbkF4aXMobXlBeGlzLCBUSFJFRS5NYXRoVXRpbHMuZGVnVG9SYWQoMjMuNSkpO1xuXG4gIGJhc2UuYWRkKGVhcnRoKTtcblxuICByZXR1cm4gZWFydGg7XG59O1xuXG5jb25zdCBjcmVhdGVNb29uT3JiaXQgPSAoZWFydGhPcmJpdDogVEhSRUUuT2JqZWN0M0QpID0+IHtcbiAgY29uc3QgbW9vbk9yYml0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gIG1vb25PcmJpdC5wb3NpdGlvbi5zZXQoNCwgMCwgMCk7XG4gIGVhcnRoT3JiaXQuYWRkKG1vb25PcmJpdCk7XG4gIHJldHVybiBtb29uT3JiaXQ7XG59O1xuXG5jb25zdCBjcmVhdGVNb29uID0gKG1vb25PcmJpdDogVEhSRUUuT2JqZWN0M0QpID0+IHtcbiAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMC40Myk7XG5cbiAgY29uc3QgbW9vblRleHR1cmUgPSBsb2FkZXIubG9hZChtb29uKTtcbiAgY29uc3QgYnVtcFRleHR1cmUgPSBsb2FkZXIubG9hZChtb29uYnVtcCk7XG4gIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtcbiAgICBtYXA6IG1vb25UZXh0dXJlLFxuICAgIGJ1bXBNYXA6IGJ1bXBUZXh0dXJlLFxuICAgIGJ1bXBTY2FsZTogMC4yLFxuICB9KTtcblxuICBjb25zdCBtb29uTWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG5cbiAgbW9vbk9yYml0LmFkZChtb29uTWVzaCk7XG4gIGFuaW1hdGlvbnMubW9vbi5wdXNoKG1vb25NZXNoKTtcbn07XG5cbmNvbnN0IHNoYXBlQXN0ZXJvaWRzID0gKHBvc2l0aW9uOiBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUpID0+IHtcbiAgY29uc3QgYXJyTGlrZSA9IHBvc2l0aW9uLmFycmF5O1xuICBsZXQgY2hlY2sgPSAwO1xuICBjb25zdCBwb3NpdGlvblN0b3JlOiBudW1iZXJbXVtdID0gW1tdXTtcbiAgY29uc3QgcG9zaXRpb25BcnIgPSBBcnJheS5mcm9tKGFyckxpa2UpO1xuICBwb3NpdGlvbkFyci5mb3JFYWNoKChudW1iZXIpID0+IHtcbiAgICBpZiAoY2hlY2sgPiAyKSB7XG4gICAgICBjaGVjayA9IDE7XG4gICAgICBwb3NpdGlvblN0b3JlW3Bvc2l0aW9uU3RvcmUubGVuZ3RoXSA9IFtudW1iZXJdO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb3NpdGlvblN0b3JlW3Bvc2l0aW9uU3RvcmUubGVuZ3RoIC0gMV0ucHVzaChudW1iZXIpO1xuICAgICAgY2hlY2sgKz0gMTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHVuaXF1ZVZhbHVlczogbnVtYmVyW11bXSA9IFtdO1xuICBwb3NpdGlvblN0b3JlLmZvckVhY2goKGFycikgPT4ge1xuICAgIGlmICh1bmlxdWVWYWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB1bmlxdWVWYWx1ZXMucHVzaChhcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsID0gdHJ1ZTtcbiAgICAgIHVuaXF1ZVZhbHVlcy5mb3JFYWNoKChhcnIyKSA9PiB7XG4gICAgICAgIGlmIChhcnJbMF0gPT09IGFycjJbMF0gJiYgYXJyWzFdID09PSBhcnIyWzFdICYmIGFyclsyXSA9PT0gYXJyMlsyXSkge1xuICAgICAgICAgIHZhbCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgdW5pcXVlVmFsdWVzLnB1c2goYXJyKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHByZXZlbnRNdXQ6IG51bWJlcltdW10gPSBbXTtcbiAgdW5pcXVlVmFsdWVzLmZvckVhY2goKGFycikgPT4ge1xuICAgIGNvbnN0IHggPSAoYXJyWzBdICsgLTAuMjUgKyBNYXRoLnJhbmRvbSgpICogMC41KS50b0ZpeGVkKDEpO1xuICAgIGNvbnN0IHkgPSAoYXJyWzFdICsgLTAuMjUgKyBNYXRoLnJhbmRvbSgpICogMC41KS50b0ZpeGVkKDEpO1xuICAgIGNvbnN0IHogPSAoYXJyWzJdICsgLTAuMjUgKyBNYXRoLnJhbmRvbSgpICogMC41KS50b0ZpeGVkKDEpO1xuXG4gICAgcG9zaXRpb25TdG9yZS5mb3JFYWNoKChhcnIyLCBuZHgpID0+IHtcbiAgICAgIGlmIChhcnJbMF0gPT09IGFycjJbMF0gJiYgYXJyWzFdID09PSBhcnIyWzFdICYmIGFyclsyXSA9PT0gYXJyMlsyXSkge1xuICAgICAgICBwcmV2ZW50TXV0W25keF0gPSBbcGFyc2VGbG9hdCh4KSwgcGFyc2VGbG9hdCh5KSwgcGFyc2VGbG9hdCh6KV07XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IGZpbmFsQXJyOiBudW1iZXJbXSA9IFtdO1xuXG4gIHByZXZlbnRNdXQuZm9yRWFjaCgoYXJyKSA9PiB7XG4gICAgY29uc3QgW3gsIHksIHpdID0gYXJyO1xuICAgIGZpbmFsQXJyLnB1c2goeCk7XG4gICAgZmluYWxBcnIucHVzaCh5KTtcbiAgICBmaW5hbEFyci5wdXNoKHopO1xuICB9KTtcblxuICBwb3NpdGlvbi5zZXQoZmluYWxBcnIpO1xufTtcblxuY29uc3QgY3JlYXRlQXN0ZXJvaWRzID0gKFxuICBlYXJ0aE9yYml0OiBUSFJFRS5PYmplY3QzRCxcbiAgZGF0YTogRGF0YVNvcnRlcixcbiAgbWFuYWdlcjogSW50ZXJhY3Rpb25NYW5hZ2VyLFxuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50XG4pID0+IHtcbiAgY29uc3QgbmVvcyA9IGRhdGEubmVvQXJyO1xuXG4gIGNvbnN0IHRleHR1cmUgPSBsb2FkZXIubG9hZChhc3Rlcm9pZEltZyk7XG4gIGNvbnN0IHRleHR1cmUyID0gbG9hZGVyLmxvYWQoYXN0ZXJvaWRCdW1wKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5lb3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBuZW8gPSBuZW9zW2ldO1xuICAgIGNvbnN0IGRpYW1ldGVyID0gYmFzZUxvZyhkYXRhLmF2ZXJhZ2VEaWFtZXRlcihpKSAqIDEwMDAsIDIpO1xuXG4gICAgY29uc3QgYXN0ZXJvaWRPcmJpdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIGVhcnRoT3JiaXQuYWRkKGFzdGVyb2lkT3JiaXQpO1xuICAgIGNvbnN0IHsgbWlzc0Rpc3RhbmNlOiBkaXN0YW5jZVN0ciwgaWQgfSA9IG5lbztcbiAgICBjb25zdCBkaXN0YW5jZSA9IHBhcnNlRmxvYXQoZGlzdGFuY2VTdHIpO1xuXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuSWNvc2FoZWRyb25HZW9tZXRyeShkaWFtZXRlciwgMSk7XG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe1xuICAgICAgbWFwOiB0ZXh0dXJlLFxuICAgICAgc3BlY3VsYXI6IFwid2hpdGVcIixcbiAgICAgIGJ1bXBNYXA6IHRleHR1cmUyLFxuICAgICAgYnVtcFNjYWxlOiAwLjEsXG4gICAgfSk7XG4gICAgY29uc3QgYXN0ZXJvaWQgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgIGNvbnN0IHJhbmRvbSA9IHJhbmRvbVBvc2l0aW9uKGlkLCBiYXNlTG9nKGRpc3RhbmNlIC8gMTAsIDEzKSk7XG4gICAgYXN0ZXJvaWRPcmJpdC5wb3NpdGlvbi5zZXQocmFuZG9tLngsIHJhbmRvbS55LCByYW5kb20ueik7XG4gICAgaWYgKFxuICAgICAgYXN0ZXJvaWQuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbiBpbnN0YW5jZW9mIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZVxuICAgICkge1xuICAgICAgc2hhcGVBc3Rlcm9pZHMoYXN0ZXJvaWQuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbik7XG4gICAgfVxuICAgIGFzdGVyb2lkT3JiaXQuc2NhbGUuc2V0KDAuMDA5LCAwLjAwOSwgMC4wMDkpO1xuICAgIGFzdGVyb2lkT3JiaXQuYWRkKGFzdGVyb2lkKTtcblxuICAgIGNvbnN0IHRlbXBWID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoMjUsIDIsIDAuMSwgMTAwKTtcblxuICAgIGFzdGVyb2lkLnVwZGF0ZVdvcmxkTWF0cml4KHRydWUsIGZhbHNlKTtcbiAgICBhc3Rlcm9pZC5nZXRXb3JsZFBvc2l0aW9uKHRlbXBWKTtcbiAgICBjYW1lcmEucG9zaXRpb24uc2V0KHRlbXBWLnggLSAxMDAsIHRlbXBWLnksIHRlbXBWLnopO1xuICAgIGNhbWVyYS5zY2FsZS5zZXQoMTAwLCAxMDAsIDEwMCk7XG4gICAgY2FtZXJhLmxvb2tBdCh0ZW1wVik7XG4gICAgY3JlYXRlT3JiaXRDb250cm9scyhjYW1lcmEsIGNhbnZhcywgdGVtcFYpO1xuICAgIGFuaW1hdGlvbnMuZnVuY3Rpb25zLnB1c2goKCkgPT4ge1xuICAgICAgYXN0ZXJvaWQuZ2V0V29ybGRQb3NpdGlvbih0ZW1wVik7XG4gICAgICBjYW1lcmEubG9va0F0KHRlbXBWKTtcbiAgICB9KTtcblxuICAgIGFzdGVyb2lkT3JiaXQuYWRkKGNhbWVyYSk7XG4gICAgYW5pbWF0aW9ucy5hc3Rlcm9pZHMucHVzaChhc3Rlcm9pZCk7XG5cbiAgICBjb25zdCByZXZlcnRUb05vcm1hbERpc3BsYXkgPSAoKSA9PiB7XG4gICAgICAvLyBjYW52YXMuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYWxsXCI7XG4gICAgICBhbmltYXRpb25zLmNhbWVyYXMgPSBbXTtcbiAgICB9O1xuXG4gICAgYXN0ZXJvaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIEludGVyYWN0aXZlRXZlbnQpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgYW5pbWF0aW9ucy5jYW1lcmFzID0gW107XG4gICAgICAgIGFuaW1hdGlvbnMuY2FtZXJhcy5wdXNoKGNhbWVyYSk7XG4gICAgICAgIC8vIGNhbnZhcy5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICAgIGRpc3BsYXlBc3Rlcm9pZEluZm8obmVvLCByZXZlcnRUb05vcm1hbERpc3BsYXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGFzdGVyb2lkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgSW50ZXJhY3RpdmVFdmVudCkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBhc3Rlcm9pZC5tYXRlcmlhbC5lbWlzc2l2ZS5zZXRIZXgoMHhmZmZmZmYpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGFzdGVyb2lkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBJbnRlcmFjdGl2ZUV2ZW50KSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGFzdGVyb2lkLm1hdGVyaWFsLmVtaXNzaXZlLnNldEhleCgweDAwMDAwMCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtYW5hZ2VyLmFkZChhc3Rlcm9pZCk7XG4gIH1cbn07XG5cbmNvbnN0IGluaXQgPSAoZGF0YTogRGF0YVNvcnRlcikgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NcIik7XG4gIGNvbnN0IGNlbnRlciA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApO1xuXG4gIGlmIChjYW52YXMgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBjYW52YXMgfSk7XG4gICAgY29uc3Qgc2NlbmUgPSBjcmVhdGVTY2VuZShyZW5kZXJlcik7XG4gICAgY29uc3QgY2FtZXJhID0gY3JlYXRlQ2FtZXJhKHNjZW5lKTtcbiAgICBjb25zdCBtYW5hZ2VyID0gbmV3IEludGVyYWN0aW9uTWFuYWdlcihyZW5kZXJlciwgY2FtZXJhLCBjYW52YXMsIGZhbHNlKTtcbiAgICBjcmVhdGVPcmJpdENvbnRyb2xzKGNhbWVyYSwgY2FudmFzLCBjZW50ZXIpO1xuICAgIGNyZWF0ZUxpZ2h0aW5nKHNjZW5lKTtcbiAgICBjb25zdCBlYXJ0aE9yYml0ID0gY3JlYXRlRWFydGhPcmJpdChzY2VuZSwgY2VudGVyKTtcbiAgICBjb25zdCBsdW5hckVhcnRoT3JiaXQgPSBjcmVhdGVMdW5hckVhcnRoT3JiaXQoZWFydGhPcmJpdCk7XG4gICAgY3JlYXRlRWFydGgobHVuYXJFYXJ0aE9yYml0KTtcbiAgICBjb25zdCBtb29uT3JiaXQgPSBjcmVhdGVNb29uT3JiaXQobHVuYXJFYXJ0aE9yYml0KTtcbiAgICBjcmVhdGVNb29uKG1vb25PcmJpdCk7XG4gICAgY3JlYXRlQXN0ZXJvaWRzKGVhcnRoT3JiaXQsIGRhdGEsIG1hbmFnZXIsIGNhbnZhcyk7XG4gICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgIGFuaW1hdGUocmVuZGVyZXIsIHNjZW5lLCBjYW1lcmEsIG1hbmFnZXIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuIiwiY29uc3QgYmFzZUxvZyA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gTWF0aC5sb2coeCkgLyBNYXRoLmxvZyh5KTtcblxuY29uc3QgcHNldWRvUmFuZG9tID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgbnVtYmVyID0gcGFyc2VGbG9hdChpZCk7XG4gIGNvbnN0IHN1bSA9IGlkXG4gICAgLnNwbGl0KFwiXCIpXG4gICAgLm1hcCgobnVtKSA9PiBwYXJzZUZsb2F0KG51bSkpXG4gICAgLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyLCAwKTtcbiAgY29uc3QgdmFsdWUgPSAobnVtYmVyIC0gc3VtKSAvIChudW1iZXIgKyBzdW0pO1xuICBjb25zdCB2YWx1ZUFyciA9IHZhbHVlXG4gICAgLnRvU3RyaW5nKClcbiAgICAuc3BsaXQoXCJcIilcbiAgICAuZmlsdGVyKChzdHIpID0+IHtcbiAgICAgIGlmIChzdHIgIT09IFwiLlwiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgdmFsdWVBcnJbdmFsdWVBcnIubGVuZ3RoIC0gMV0gPSBcIjBcIjtcbiAgdmFsdWVBcnJbdmFsdWVBcnIubGVuZ3RoIC0gMl0gPSBcIi5cIjtcbiAgY29uc3QgbnVtID0gcGFyc2VGbG9hdCh2YWx1ZUFyci5yZXZlcnNlKCkuam9pbihcIlwiKSk7XG4gIHJldHVybiBudW07XG59O1xuXG5jb25zdCByYW5kb21Qb3NpdGlvbiA9IChpZDogc3RyaW5nLCBkaXN0YW5jZTogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHZhbHVlMSA9IHBzZXVkb1JhbmRvbShgJHtpZH0xMjM0NWApICogZGlzdGFuY2U7XG4gIGNvbnN0IHZhbHVlMiA9XG4gICAgcHNldWRvUmFuZG9tKGlkICsgaWQpICogKHBzZXVkb1JhbmRvbShgJHtpZH01MzI0MWApID4gMC41ID8gLTEgOiAxKTtcbiAgY29uc3QgaW50ZXJtZWRpYXRlID0gdmFsdWUxICoqIDIgKyB2YWx1ZTIgKiogMjtcbiAgY29uc3QgdmFsdWUzID0gKGRpc3RhbmNlICoqIDIgLSBpbnRlcm1lZGlhdGUpICoqIDAuNTtcblxuICBjb25zdCByYW5kb20gPSBwc2V1ZG9SYW5kb20oaWQgKyBpZCkgKiAyO1xuXG4gIGlmIChyYW5kb20gPiAxKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHZhbHVlMSAqIChwc2V1ZG9SYW5kb20oYCR7aWR9ODc2MDVgKSA+IDAuNSA/IDEgOiAtMSksXG4gICAgICB5OiB2YWx1ZTIsXG4gICAgICB6OiB2YWx1ZTMgKiAocHNldWRvUmFuZG9tKGlkICsgaWQpID4gMC41ID8gMSA6IC0xKSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiB2YWx1ZTMgKiAocHNldWRvUmFuZG9tKGAke2lkfTIxMzk4YCkgPiAwLjUgPyAxIDogLTEpLFxuICAgIHk6IHZhbHVlMixcbiAgICB6OiB2YWx1ZTEgKiAocHNldWRvUmFuZG9tKGlkICsgaWQpID4gMC41ID8gMSA6IC0xKSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IGJhc2VMb2csIHJhbmRvbVBvc2l0aW9uIH07XG4iXSwibmFtZXMiOlsiZGlzcGxheURpdjFJbmZvIiwiYXN0ZXJvaWRJbmZvIiwiZGl2MSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIm5hbWVEaXYiLCJ0ZXh0Q29udGVudCIsIm5hbWUiLCJhcHBlbmRDaGlsZCIsIm1hZ25pdHVkZURpdiIsImFic29sdXRlTWFnbml0dWRlIiwidmVsb2NpdHlEaXYiLCJyZWxhdGl2ZVZlbG9jaXR5IiwiZGlzcGxheURpdjJJbmZvIiwiZGl2MiIsIm1heERpYW1ldGVyRGl2IiwiZXN0aW1hdGVkRGlhbWV0ZXJNYXgiLCJtaW5EaWFtZXRlckRpdiIsImVzdGltYXRlZERpYW1ldGVyTWluIiwiZGlzcGxheURpdjNJbmZvIiwicmV2ZXJ0RnVuY3Rpb24iLCJkaXYzIiwiaGF6YXJkRGl2IiwiaWNvbkRpdiIsImkiLCJ0ZXh0RGl2IiwicG90ZW50aWFsbHlIYXphcmRvdXMiLCJiYWNrRGl2IiwiYmFja0ljb24iLCJiYWNrSSIsImJhY2tUZXh0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BsYXlEaXY0SW5mbyIsImRpdjQiLCJjbG9zZXN0QXBwcm9hY2hEaXYiLCJjbG9zZXN0QXBwcm9hY2hEYXRlIiwibWlzc0Rpc3RhbmNlRGl2IiwicGFyc2VGbG9hdCIsIm1pc3NEaXN0YW5jZSIsInRvRml4ZWQiLCJvcmJpdGluZ0JvZHlEaXYiLCJvcmJpdGluZ0JvZHkiLCJkaXNwbGF5QXN0ZXJvaWRJbmZvIiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsIkhUTUxFbGVtZW50IiwiaW5mb0RpdiIsInJldmVydCIsInJlbW92ZUNoaWxkIiwiVEhSRUUiLCJJbnRlcmFjdGlvbk1hbmFnZXIiLCJJbnRlcmFjdGl2ZUV2ZW50IiwiT3JiaXRDb250cm9scyIsImJhc2VMb2ciLCJyYW5kb21Qb3NpdGlvbiIsImdhbGF4eSIsImVhcnRobWFwIiwiZWFydGhidW1wIiwiZWFydGhjbG91ZCIsIm1vb24iLCJtb29uYnVtcCIsImFzdGVyb2lkSW1nIiwiYXN0ZXJvaWRCdW1wIiwiYW5pbWF0aW9ucyIsImFuaW1hdGUiLCJjbG91ZCIsImVhcnRoIiwiYXN0ZXJvaWRzIiwibHVuYXJFYXJ0aCIsImVhcnRoT3JiaXQiLCJjYW1lcmFzIiwiZnVuY3Rpb25zIiwibG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsImNyZWF0ZVNjZW5lIiwicmVuZGVyZXIiLCJzY2VuZSIsIlNjZW5lIiwidGV4dHVyZSIsImxvYWQiLCJpbWFnZSIsIkhUTUxJbWFnZUVsZW1lbnQiLCJydCIsIldlYkdMQ3ViZVJlbmRlclRhcmdldCIsImhlaWdodCIsImZyb21FcXVpcmVjdGFuZ3VsYXJUZXh0dXJlIiwiYmFja2dyb3VuZCIsImNyZWF0ZUNhbWVyYSIsImZvdiIsImFzcGVjdCIsIm5lYXIiLCJmYXIiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInBvc2l0aW9uIiwic2V0IiwiY3JlYXRlT3JiaXRDb250cm9scyIsImNhbnZhcyIsImNlbnRlciIsImNvbnRyb2xzIiwidGFyZ2V0IiwiY29weSIsIlZlY3RvcjMiLCJ1cGRhdGUiLCJjcmVhdGVMaWdodGluZyIsImNvbG9yIiwiaW50ZW5zaXR5IiwibGlnaHRpbmciLCJEaXJlY3Rpb25hbExpZ2h0IiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwicmVzaXplUmVuZGVyZXJUb0Rpc3BsYXlTaXplIiwiZG9tRWxlbWVudCIsIm5lZWRzUmVzaXplIiwiY2xpZW50V2lkdGgiLCJ3aWR0aCIsImNsaWVudEhlaWdodCIsInNldFNpemUiLCJtYW5hZ2VyIiwicmVuZGVyIiwidGltZSIsInRpbWVJblNlY29uZHMiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiZm9yRWFjaCIsIm9iamVjdCIsInJvdGF0aW9uIiwieSIsIm5keCIsIngiLCJ6IiwiZnVuYyIsImxlbmd0aCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNyZWF0ZUVhcnRoT3JiaXQiLCJPYmplY3QzRCIsIm15QXhpcyIsInJvdGF0ZU9uQXhpcyIsIk1hdGhVdGlscyIsImRlZ1RvUmFkIiwicHVzaCIsImNyZWF0ZUx1bmFyRWFydGhPcmJpdCIsImx1bmFyRWFydGhPcmJpdCIsImNyZWF0ZUVhcnRoIiwiYmFzZSIsImdlb21ldHJ5IiwiU3BoZXJlR2VvbWV0cnkiLCJjbG91ZEdlb21ldHJ5IiwiYnVtcFRleHR1cmUiLCJjbG91ZFRleHR1cmUiLCJtYXRlcmlhbCIsIk1lc2hQaG9uZ01hdGVyaWFsIiwibWFwIiwiYnVtcE1hcCIsImJ1bXBTY2FsZSIsImNsb3VkTWF0ZXJpYWwiLCJ0cmFuc3BhcmVudCIsIm9wYWNpdHkiLCJncm91bmQiLCJNZXNoIiwiY3JlYXRlTW9vbk9yYml0IiwibW9vbk9yYml0IiwiY3JlYXRlTW9vbiIsIm1vb25UZXh0dXJlIiwibW9vbk1lc2giLCJzaGFwZUFzdGVyb2lkcyIsImFyckxpa2UiLCJhcnJheSIsImNoZWNrIiwicG9zaXRpb25TdG9yZSIsInBvc2l0aW9uQXJyIiwiQXJyYXkiLCJmcm9tIiwibnVtYmVyIiwidW5pcXVlVmFsdWVzIiwiYXJyIiwidmFsIiwiYXJyMiIsInByZXZlbnRNdXQiLCJNYXRoIiwicmFuZG9tIiwiZmluYWxBcnIiLCJjcmVhdGVBc3Rlcm9pZHMiLCJkYXRhIiwibmVvcyIsIm5lb0FyciIsInRleHR1cmUyIiwibmVvIiwiZGlhbWV0ZXIiLCJhdmVyYWdlRGlhbWV0ZXIiLCJhc3Rlcm9pZE9yYml0IiwiZGlzdGFuY2VTdHIiLCJpZCIsImRpc3RhbmNlIiwiSWNvc2FoZWRyb25HZW9tZXRyeSIsInNwZWN1bGFyIiwiYXN0ZXJvaWQiLCJhdHRyaWJ1dGVzIiwiQnVmZmVyQXR0cmlidXRlIiwic2NhbGUiLCJ0ZW1wViIsInVwZGF0ZVdvcmxkTWF0cml4IiwiZ2V0V29ybGRQb3NpdGlvbiIsImxvb2tBdCIsInJldmVydFRvTm9ybWFsRGlzcGxheSIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJlbWlzc2l2ZSIsInNldEhleCIsImJvZHkiLCJzdHlsZSIsImN1cnNvciIsImluaXQiLCJIVE1MQ2FudmFzRWxlbWVudCIsIldlYkdMUmVuZGVyZXIiLCJsb2ciLCJwc2V1ZG9SYW5kb20iLCJzdW0iLCJzcGxpdCIsIm51bSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ2YWx1ZSIsInZhbHVlQXJyIiwidG9TdHJpbmciLCJmaWx0ZXIiLCJzdHIiLCJyZXZlcnNlIiwiam9pbiIsInZhbHVlMSIsInZhbHVlMiIsImludGVybWVkaWF0ZSIsInZhbHVlMyJdLCJzb3VyY2VSb290IjoiIn0=