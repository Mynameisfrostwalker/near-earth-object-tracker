"use strict";
(self["webpackChunknear_earth_object_tracker"] = self["webpackChunknear_earth_object_tracker"] || []).push([["src_scripts_render_ts"],{

/***/ "./src/scripts/render.ts":
/*!*******************************!*\
  !*** ./src/scripts/render.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_interactive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three.interactive */ "./node_modules/three.interactive/build/three.interactive.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./src/scripts/utilities.ts");
/* harmony import */ var _assets_galaxy2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/galaxy2.jpg */ "./src/assets/galaxy2.jpg");
/* harmony import */ var _assets_earthmap1k_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/earthmap1k.jpg */ "./src/assets/earthmap1k.jpg");
/* harmony import */ var _assets_earthbump_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/earthbump.jpg */ "./src/assets/earthbump.jpg");
/* harmony import */ var _assets_earthCloud_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/earthCloud.png */ "./src/assets/earthCloud.png");
/* harmony import */ var _assets_moon_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/moon.jpg */ "./src/assets/moon.jpg");
/* harmony import */ var _assets_moonbump_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/moonbump.jpg */ "./src/assets/moonbump.jpg");
/* harmony import */ var _assets_asteroid_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/asteroid.jpg */ "./src/assets/asteroid.jpg");
/* harmony import */ var _assets_asteroidBump_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/asteroidBump.jpg */ "./src/assets/asteroidBump.jpg");
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

var createScene = function createScene(renderer) {
  var scene = new three__WEBPACK_IMPORTED_MODULE_11__.Scene();
  var loader = new three__WEBPACK_IMPORTED_MODULE_11__.TextureLoader();
  var texture = loader.load(_assets_galaxy2_jpg__WEBPACK_IMPORTED_MODULE_3__, function () {
    if (texture.image instanceof HTMLImageElement) {
      var rt = new three__WEBPACK_IMPORTED_MODULE_11__.WebGLCubeRenderTarget(texture.image.height);
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
  var camera = new three__WEBPACK_IMPORTED_MODULE_11__.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 5);
  scene.add(camera);
  return camera;
};

var createOrbitControls = function createOrbitControls(camera, canvas, center) {
  var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__.OrbitControls(camera, canvas);
  controls.target.copy(center).add(new three__WEBPACK_IMPORTED_MODULE_11__.Vector3(-1, -1, 0));
  controls.update();
};

var createLighting = function createLighting(scene) {
  var color = 0xffffff;
  var intensity = 1;
  var lighting = new three__WEBPACK_IMPORTED_MODULE_11__.DirectionalLight(color, intensity);
  lighting.position.set(2, 2, 4);
  scene.add(lighting);
  var ambientLight = new three__WEBPACK_IMPORTED_MODULE_11__.AmbientLight(color, intensity / 5);
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
      object.rotation.y = timeInSeconds * 0.02;
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
  var earthOrbit = new three__WEBPACK_IMPORTED_MODULE_11__.Object3D();
  earthOrbit.position.set(center.x, center.y, center.z);
  var myAxis = new three__WEBPACK_IMPORTED_MODULE_11__.Vector3(1, -1, 0);
  earthOrbit.rotateOnAxis(myAxis, three__WEBPACK_IMPORTED_MODULE_11__.MathUtils.degToRad(23.5));
  scene.add(earthOrbit);
  animations.earthOrbit.push(earthOrbit);
  return earthOrbit;
};

var createLunarEarthOrbit = function createLunarEarthOrbit(earthOrbit) {
  var lunarEarthOrbit = new three__WEBPACK_IMPORTED_MODULE_11__.Object3D();
  earthOrbit.add(lunarEarthOrbit);
  animations.lunarEarth.push(lunarEarthOrbit);
  return lunarEarthOrbit;
};

var createEarth = function createEarth(base) {
  var earth = new three__WEBPACK_IMPORTED_MODULE_11__.Object3D();
  var geometry = new three__WEBPACK_IMPORTED_MODULE_11__.SphereGeometry(1);
  var cloudGeometry = new three__WEBPACK_IMPORTED_MODULE_11__.SphereGeometry(1.009);
  var loader = new three__WEBPACK_IMPORTED_MODULE_11__.TextureLoader();
  var texture = loader.load(_assets_earthmap1k_jpg__WEBPACK_IMPORTED_MODULE_4__);
  var bumpTexture = loader.load(_assets_earthbump_jpg__WEBPACK_IMPORTED_MODULE_5__);
  var cloudTexture = loader.load(_assets_earthCloud_png__WEBPACK_IMPORTED_MODULE_6__);
  var material = new three__WEBPACK_IMPORTED_MODULE_11__.MeshPhongMaterial({
    map: texture,
    bumpMap: bumpTexture,
    bumpScale: 0.6
  });
  var cloudMaterial = new three__WEBPACK_IMPORTED_MODULE_11__.MeshPhongMaterial({
    map: cloudTexture,
    transparent: true,
    opacity: 0.5
  });
  var ground = new three__WEBPACK_IMPORTED_MODULE_11__.Mesh(geometry, material);
  var cloud = new three__WEBPACK_IMPORTED_MODULE_11__.Mesh(cloudGeometry, cloudMaterial);
  earth.add(ground);
  earth.add(cloud);
  animations.earth.push(ground);
  animations.cloud.push(cloud);
  var myAxis = new three__WEBPACK_IMPORTED_MODULE_11__.Vector3(0, 0, 1);
  earth.rotateOnAxis(myAxis, three__WEBPACK_IMPORTED_MODULE_11__.MathUtils.degToRad(23.5));
  base.add(earth);
  return earth;
};

var createMoonOrbit = function createMoonOrbit(earthOrbit) {
  var moonOrbit = new three__WEBPACK_IMPORTED_MODULE_11__.Object3D();
  moonOrbit.position.set(4, 0, 0);
  earthOrbit.add(moonOrbit);
  return moonOrbit;
};

var createMoon = function createMoon(moonOrbit) {
  var geometry = new three__WEBPACK_IMPORTED_MODULE_11__.SphereGeometry(0.43);
  var loader = new three__WEBPACK_IMPORTED_MODULE_11__.TextureLoader();
  var moonTexture = loader.load(_assets_moon_jpg__WEBPACK_IMPORTED_MODULE_7__);
  var bumpTexture = loader.load(_assets_moonbump_jpg__WEBPACK_IMPORTED_MODULE_8__);
  var material = new three__WEBPACK_IMPORTED_MODULE_11__.MeshPhongMaterial({
    map: moonTexture,
    bumpMap: bumpTexture,
    bumpScale: 0.2
  });
  var moonMesh = new three__WEBPACK_IMPORTED_MODULE_11__.Mesh(geometry, material);
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

var createAsteroids = function createAsteroids(earthOrbit, data, manager) {
  var neos = data.neoArr;
  var loader = new three__WEBPACK_IMPORTED_MODULE_11__.TextureLoader();
  var texture = loader.load(_assets_asteroid_jpg__WEBPACK_IMPORTED_MODULE_9__);
  var texture2 = loader.load(_assets_asteroidBump_jpg__WEBPACK_IMPORTED_MODULE_10__);

  var _loop = function _loop(i) {
    var neo = neos[i];
    var diameter = (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.baseLog)(data.averageDiameter(i) * 1000, 2);
    var asteroidOrbit = new three__WEBPACK_IMPORTED_MODULE_11__.Object3D();
    earthOrbit.add(asteroidOrbit);
    var distanceStr = neo.missDistance,
        id = neo.id;
    var distance = parseFloat(distanceStr);
    var geometry = new three__WEBPACK_IMPORTED_MODULE_11__.OctahedronGeometry(diameter, 1);
    var material = new three__WEBPACK_IMPORTED_MODULE_11__.MeshPhongMaterial({
      map: texture,
      specular: "white",
      bumpMap: texture2,
      bumpScale: 0.1
    });
    var asteroid = new three__WEBPACK_IMPORTED_MODULE_11__.Mesh(geometry, material);
    var random = (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.randomPosition)(id, (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.baseLog)(distance / 10, 13));
    asteroidOrbit.position.set(random.x, random.y, random.z);

    if (asteroid.geometry.attributes.position instanceof three__WEBPACK_IMPORTED_MODULE_11__.BufferAttribute) {
      shapeAsteroids(asteroid.geometry.attributes.position);
    }

    asteroidOrbit.scale.set(0.009, 0.009, 0.009);
    asteroidOrbit.add(asteroid);
    var tempV = new three__WEBPACK_IMPORTED_MODULE_11__.Vector3();
    var camera = new three__WEBPACK_IMPORTED_MODULE_11__.PerspectiveCamera(25, 2, 0.1, 10);
    asteroid.updateWorldMatrix(true, false);
    asteroid.getWorldPosition(tempV);
    camera.position.set(tempV.x - 100, tempV.y, tempV.z);
    camera.scale.set(100, 100, 100);
    camera.lookAt(tempV);
    animations.functions.push(function () {
      asteroid.getWorldPosition(tempV);
      camera.lookAt(tempV);
    });
    asteroidOrbit.add(camera);
    animations.asteroids.push(asteroid);
    manager.add(asteroid);
    asteroid.addEventListener("click", function (event) {
      animations.animate = false;
      animations.cameras = [];
      animations.cameras.push(camera);
    });
    asteroid.addEventListener("mouseover", function (event) {
      asteroid.material.emissive.setHex(0xffffff);
      document.body.style.cursor = "pointer";
    });
    asteroid.addEventListener("mouseout", function (event) {
      asteroid.material.emissive.setHex(0x000000);
      document.body.style.cursor = "default";
    });
  };

  for (var i = 0; i < neos.length; i += 1) {
    _loop(i);
  }
};

var init = function init(data) {
  var canvas = document.querySelector("#c");
  var center = new three__WEBPACK_IMPORTED_MODULE_11__.Vector3(0, 0, 0);

  if (canvas instanceof HTMLCanvasElement) {
    var renderer = new three__WEBPACK_IMPORTED_MODULE_11__.WebGLRenderer({
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
    createAsteroids(earthOrbit, data, manager);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF2Qzs7RUFFQSxJQUFJaEIsTUFBTSxHQUFHLENBQWIsRUFBZ0I7SUFDZCxPQUFPO01BQ0xwRCxDQUFDLEVBQUUyRyxNQUFNLElBQUlkLFlBQVksV0FBSXpCLEVBQUosV0FBWixHQUE2QixHQUE3QixHQUFtQyxDQUFuQyxHQUF1QyxDQUFDLENBQTVDLENBREo7TUFFTHRFLENBQUMsRUFBRThHLE1BRkU7TUFHTDNHLENBQUMsRUFBRTZHLE1BQU0sSUFBSWpCLFlBQVksQ0FBQ3pCLEVBQUUsR0FBR0EsRUFBTixDQUFaLEdBQXdCLEdBQXhCLEdBQThCLENBQTlCLEdBQWtDLENBQUMsQ0FBdkM7SUFISixDQUFQO0VBS0Q7O0VBRUQsT0FBTztJQUNMcEUsQ0FBQyxFQUFFOEcsTUFBTSxJQUFJakIsWUFBWSxXQUFJekIsRUFBSixXQUFaLEdBQTZCLEdBQTdCLEdBQW1DLENBQW5DLEdBQXVDLENBQUMsQ0FBNUMsQ0FESjtJQUVMdEUsQ0FBQyxFQUFFOEcsTUFGRTtJQUdMM0csQ0FBQyxFQUFFMEcsTUFBTSxJQUFJZCxZQUFZLENBQUN6QixFQUFFLEdBQUdBLEVBQU4sQ0FBWixHQUF3QixHQUF4QixHQUE4QixDQUE5QixHQUFrQyxDQUFDLENBQXZDO0VBSEosQ0FBUDtBQUtELENBdEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmVhci1lYXJ0aC1vYmplY3QtdHJhY2tlci8uL3NyYy9zY3JpcHRzL3JlbmRlci50cyIsIndlYnBhY2s6Ly9uZWFyLWVhcnRoLW9iamVjdC10cmFja2VyLy4vc3JjL3NjcmlwdHMvdXRpbGl0aWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgSW50ZXJhY3Rpb25NYW5hZ2VyIH0gZnJvbSBcInRocmVlLmludGVyYWN0aXZlXCI7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzXCI7XG5pbXBvcnQgdHlwZSB7IERhdGFTb3J0ZXIgfSBmcm9tIFwiLi9mZXRjaERhdGFcIjtcbmltcG9ydCB7IGJhc2VMb2csIHJhbmRvbVBvc2l0aW9uIH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5pbXBvcnQgZ2FsYXh5IGZyb20gXCIuLi9hc3NldHMvZ2FsYXh5Mi5qcGdcIjtcbmltcG9ydCBlYXJ0aG1hcCBmcm9tIFwiLi4vYXNzZXRzL2VhcnRobWFwMWsuanBnXCI7XG5pbXBvcnQgZWFydGhidW1wIGZyb20gXCIuLi9hc3NldHMvZWFydGhidW1wLmpwZ1wiO1xuaW1wb3J0IGVhcnRoY2xvdWQgZnJvbSBcIi4uL2Fzc2V0cy9lYXJ0aENsb3VkLnBuZ1wiO1xuaW1wb3J0IG1vb24gZnJvbSBcIi4uL2Fzc2V0cy9tb29uLmpwZ1wiO1xuaW1wb3J0IG1vb25idW1wIGZyb20gXCIuLi9hc3NldHMvbW9vbmJ1bXAuanBnXCI7XG5pbXBvcnQgYXN0ZXJvaWRJbWcgZnJvbSBcIi4uL2Fzc2V0cy9hc3Rlcm9pZC5qcGdcIjtcbmltcG9ydCBhc3Rlcm9pZEJ1bXAgZnJvbSBcIi4uL2Fzc2V0cy9hc3Rlcm9pZEJ1bXAuanBnXCI7XG5cbmludGVyZmFjZSBBbmltYXRpb25zIHtcbiAgYW5pbWF0ZTogYm9vbGVhbjtcbiAgY2xvdWQ6IFRIUkVFLk9iamVjdDNEW107XG4gIGVhcnRoOiBUSFJFRS5PYmplY3QzRFtdO1xuICBhc3Rlcm9pZHM6IFRIUkVFLk9iamVjdDNEW107XG4gIG1vb246IFRIUkVFLk9iamVjdDNEW107XG4gIGx1bmFyRWFydGg6IFRIUkVFLk9iamVjdDNEW107XG4gIGVhcnRoT3JiaXQ6IFRIUkVFLk9iamVjdDNEW107XG4gIGNhbWVyYXM6IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhW107XG4gIGZ1bmN0aW9uczogKCgpID0+IHZvaWQpW107XG59XG5cbmNvbnN0IGFuaW1hdGlvbnM6IEFuaW1hdGlvbnMgPSB7XG4gIGFuaW1hdGU6IHRydWUsXG4gIGNsb3VkOiBbXSxcbiAgZWFydGg6IFtdLFxuICBhc3Rlcm9pZHM6IFtdLFxuICBtb29uOiBbXSxcbiAgbHVuYXJFYXJ0aDogW10sXG4gIGVhcnRoT3JiaXQ6IFtdLFxuICBjYW1lcmFzOiBbXSxcbiAgZnVuY3Rpb25zOiBbXSxcbn07XG5cbmNvbnN0IGNyZWF0ZVNjZW5lID0gKHJlbmRlcmVyOiBUSFJFRS5XZWJHTFJlbmRlcmVyKSA9PiB7XG4gIGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gIGNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XG4gIGNvbnN0IHRleHR1cmUgPSBsb2FkZXIubG9hZChnYWxheHksICgpID0+IHtcbiAgICBpZiAodGV4dHVyZS5pbWFnZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHJ0ID0gbmV3IFRIUkVFLldlYkdMQ3ViZVJlbmRlclRhcmdldCh0ZXh0dXJlLmltYWdlLmhlaWdodCk7XG4gICAgICBydC5mcm9tRXF1aXJlY3Rhbmd1bGFyVGV4dHVyZShyZW5kZXJlciwgdGV4dHVyZSk7XG4gICAgICBzY2VuZS5iYWNrZ3JvdW5kID0gcnQudGV4dHVyZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc2NlbmU7XG59O1xuXG5jb25zdCBjcmVhdGVDYW1lcmEgPSAoc2NlbmU6IFRIUkVFLlNjZW5lKSA9PiB7XG4gIGNvbnN0IGZvdiA9IDc1O1xuICBjb25zdCBhc3BlY3QgPSAyO1xuICBjb25zdCBuZWFyID0gMC4xO1xuICBjb25zdCBmYXIgPSAyNTtcblxuICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoZm92LCBhc3BlY3QsIG5lYXIsIGZhcik7XG4gIGNhbWVyYS5wb3NpdGlvbi5zZXQoMCwgMCwgNSk7XG5cbiAgc2NlbmUuYWRkKGNhbWVyYSk7XG5cbiAgcmV0dXJuIGNhbWVyYTtcbn07XG5cbmNvbnN0IGNyZWF0ZU9yYml0Q29udHJvbHMgPSAoXG4gIGNhbWVyYTogVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEsXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXG4gIGNlbnRlcjogVEhSRUUuVmVjdG9yM1xuKSA9PiB7XG4gIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCBjYW52YXMpO1xuICBjb250cm9scy50YXJnZXQuY29weShjZW50ZXIpLmFkZChuZXcgVEhSRUUuVmVjdG9yMygtMSwgLTEsIDApKTtcbiAgY29udHJvbHMudXBkYXRlKCk7XG59O1xuXG5jb25zdCBjcmVhdGVMaWdodGluZyA9IChzY2VuZTogVEhSRUUuU2NlbmUpID0+IHtcbiAgY29uc3QgY29sb3IgPSAweGZmZmZmZjtcbiAgY29uc3QgaW50ZW5zaXR5ID0gMTtcbiAgY29uc3QgbGlnaHRpbmcgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodChjb2xvciwgaW50ZW5zaXR5KTtcbiAgbGlnaHRpbmcucG9zaXRpb24uc2V0KDIsIDIsIDQpO1xuICBzY2VuZS5hZGQobGlnaHRpbmcpO1xuXG4gIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoY29sb3IsIGludGVuc2l0eSAvIDUpO1xuICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcbn07XG5cbmNvbnN0IHJlc2l6ZVJlbmRlcmVyVG9EaXNwbGF5U2l6ZSA9IChyZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlcikgPT4ge1xuICBjb25zdCBjYW52YXMgPSByZW5kZXJlci5kb21FbGVtZW50O1xuICBjb25zdCBuZWVkc1Jlc2l6ZSA9XG4gICAgY2FudmFzLmNsaWVudFdpZHRoICE9PSBjYW52YXMud2lkdGggfHxcbiAgICBjYW52YXMuY2xpZW50SGVpZ2h0ICE9PSBjYW52YXMuaGVpZ2h0O1xuXG4gIGlmIChuZWVkc1Jlc2l6ZSkge1xuICAgIHJlbmRlcmVyLnNldFNpemUoY2FudmFzLmNsaWVudFdpZHRoLCBjYW52YXMuY2xpZW50SGVpZ2h0LCBmYWxzZSk7XG4gIH1cblxuICByZXR1cm4gbmVlZHNSZXNpemU7XG59O1xuXG5jb25zdCBhbmltYXRlID0gKFxuICByZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlcixcbiAgc2NlbmU6IFRIUkVFLlNjZW5lLFxuICBjYW1lcmE6IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhLFxuICBtYW5hZ2VyOiBJbnRlcmFjdGlvbk1hbmFnZXJcbikgPT4ge1xuICBjb25zdCByZW5kZXIgPSAodGltZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdGltZUluU2Vjb25kcyA9IHRpbWUgKiAwLjAwMTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IHJlbmRlcmVyLmRvbUVsZW1lbnQ7XG4gICAgY2FtZXJhLmFzcGVjdCA9IGNhbnZhcy5jbGllbnRXaWR0aCAvIGNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICAgIGlmIChyZXNpemVSZW5kZXJlclRvRGlzcGxheVNpemUocmVuZGVyZXIpKSB7XG4gICAgICBjYW1lcmEuYXNwZWN0ID0gY2FudmFzLmNsaWVudFdpZHRoIC8gY2FudmFzLmNsaWVudEhlaWdodDtcbiAgICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgfVxuXG4gICAgYW5pbWF0aW9ucy5lYXJ0aE9yYml0LmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgb2JqZWN0LnJvdGF0aW9uLnkgPSB0aW1lSW5TZWNvbmRzICogMC4wMDU7XG4gICAgfSk7XG5cbiAgICBhbmltYXRpb25zLmNsb3VkLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgb2JqZWN0LnJvdGF0aW9uLnkgPSB0aW1lSW5TZWNvbmRzICogMC4wNTtcbiAgICB9KTtcblxuICAgIGFuaW1hdGlvbnMuZWFydGguZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICBvYmplY3Qucm90YXRpb24ueSA9IHRpbWVJblNlY29uZHMgKiAwLjAyO1xuICAgIH0pO1xuXG4gICAgYW5pbWF0aW9ucy5tb29uLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgb2JqZWN0LnJvdGF0aW9uLnkgPSB0aW1lSW5TZWNvbmRzICogMC4wMjtcbiAgICB9KTtcblxuICAgIGFuaW1hdGlvbnMubHVuYXJFYXJ0aC5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgIG9iamVjdC5yb3RhdGlvbi55ID0gdGltZUluU2Vjb25kcyAqIDAuMDE7XG4gICAgfSk7XG5cbiAgICBhbmltYXRpb25zLmFzdGVyb2lkcy5mb3JFYWNoKChvYmplY3QsIG5keCkgPT4ge1xuICAgICAgb2JqZWN0LnJvdGF0aW9uLnkgPSB0aW1lSW5TZWNvbmRzICogMC4xICsgbmR4ICogMC4wNTtcbiAgICAgIG9iamVjdC5yb3RhdGlvbi54ID0gdGltZUluU2Vjb25kcyAqIDAuMSArIG5keCAqIDAuMDE7XG4gICAgICBvYmplY3Qucm90YXRpb24ueiA9IHRpbWVJblNlY29uZHMgKiAwLjEgLSBuZHggKiAwLjA1O1xuICAgIH0pO1xuXG4gICAgYW5pbWF0aW9ucy5mdW5jdGlvbnMuZm9yRWFjaCgoZnVuYykgPT4ge1xuICAgICAgZnVuYygpO1xuICAgIH0pO1xuXG4gICAgbWFuYWdlci51cGRhdGUoKTtcblxuICAgIGlmIChhbmltYXRpb25zLmNhbWVyYXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFuaW1hdGlvbnMuY2FtZXJhc1swXS5hc3BlY3QgPSBjYW52YXMuY2xpZW50V2lkdGggLyBjYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgICAgYW5pbWF0aW9ucy5jYW1lcmFzWzBdLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgYW5pbWF0aW9ucy5jYW1lcmFzWzBdKTtcbiAgICB9XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gIH07XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUVhcnRoT3JiaXQgPSAoc2NlbmU6IFRIUkVFLlNjZW5lLCBjZW50ZXI6IFRIUkVFLlZlY3RvcjMpID0+IHtcbiAgY29uc3QgZWFydGhPcmJpdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICBlYXJ0aE9yYml0LnBvc2l0aW9uLnNldChjZW50ZXIueCwgY2VudGVyLnksIGNlbnRlci56KTtcbiAgY29uc3QgbXlBeGlzID0gbmV3IFRIUkVFLlZlY3RvcjMoMSwgLTEsIDApO1xuICBlYXJ0aE9yYml0LnJvdGF0ZU9uQXhpcyhteUF4aXMsIFRIUkVFLk1hdGhVdGlscy5kZWdUb1JhZCgyMy41KSk7XG4gIHNjZW5lLmFkZChlYXJ0aE9yYml0KTtcbiAgYW5pbWF0aW9ucy5lYXJ0aE9yYml0LnB1c2goZWFydGhPcmJpdCk7XG4gIHJldHVybiBlYXJ0aE9yYml0O1xufTtcblxuY29uc3QgY3JlYXRlTHVuYXJFYXJ0aE9yYml0ID0gKGVhcnRoT3JiaXQ6IFRIUkVFLk9iamVjdDNEKSA9PiB7XG4gIGNvbnN0IGx1bmFyRWFydGhPcmJpdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICBlYXJ0aE9yYml0LmFkZChsdW5hckVhcnRoT3JiaXQpO1xuICBhbmltYXRpb25zLmx1bmFyRWFydGgucHVzaChsdW5hckVhcnRoT3JiaXQpO1xuICByZXR1cm4gbHVuYXJFYXJ0aE9yYml0O1xufTtcblxuY29uc3QgY3JlYXRlRWFydGggPSAoYmFzZTogVEhSRUUuT2JqZWN0M0QpID0+IHtcbiAgY29uc3QgZWFydGggPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcblxuICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxKTtcbiAgY29uc3QgY2xvdWRHZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxLjAwOSk7XG5cbiAgY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcbiAgY29uc3QgdGV4dHVyZSA9IGxvYWRlci5sb2FkKGVhcnRobWFwKTtcbiAgY29uc3QgYnVtcFRleHR1cmUgPSBsb2FkZXIubG9hZChlYXJ0aGJ1bXApO1xuICBjb25zdCBjbG91ZFRleHR1cmUgPSBsb2FkZXIubG9hZChlYXJ0aGNsb3VkKTtcblxuICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XG4gICAgbWFwOiB0ZXh0dXJlLFxuICAgIGJ1bXBNYXA6IGJ1bXBUZXh0dXJlLFxuICAgIGJ1bXBTY2FsZTogMC42LFxuICB9KTtcbiAgY29uc3QgY2xvdWRNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XG4gICAgbWFwOiBjbG91ZFRleHR1cmUsXG4gICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgb3BhY2l0eTogMC41LFxuICB9KTtcblxuICBjb25zdCBncm91bmQgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICBjb25zdCBjbG91ZCA9IG5ldyBUSFJFRS5NZXNoKGNsb3VkR2VvbWV0cnksIGNsb3VkTWF0ZXJpYWwpO1xuXG4gIGVhcnRoLmFkZChncm91bmQpO1xuICBlYXJ0aC5hZGQoY2xvdWQpO1xuICBhbmltYXRpb25zLmVhcnRoLnB1c2goZ3JvdW5kKTtcbiAgYW5pbWF0aW9ucy5jbG91ZC5wdXNoKGNsb3VkKTtcblxuICBjb25zdCBteUF4aXMgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAxKTtcbiAgZWFydGgucm90YXRlT25BeGlzKG15QXhpcywgVEhSRUUuTWF0aFV0aWxzLmRlZ1RvUmFkKDIzLjUpKTtcblxuICBiYXNlLmFkZChlYXJ0aCk7XG5cbiAgcmV0dXJuIGVhcnRoO1xufTtcblxuY29uc3QgY3JlYXRlTW9vbk9yYml0ID0gKGVhcnRoT3JiaXQ6IFRIUkVFLk9iamVjdDNEKSA9PiB7XG4gIGNvbnN0IG1vb25PcmJpdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICBtb29uT3JiaXQucG9zaXRpb24uc2V0KDQsIDAsIDApO1xuICBlYXJ0aE9yYml0LmFkZChtb29uT3JiaXQpO1xuICByZXR1cm4gbW9vbk9yYml0O1xufTtcblxuY29uc3QgY3JlYXRlTW9vbiA9IChtb29uT3JiaXQ6IFRIUkVFLk9iamVjdDNEKSA9PiB7XG4gIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDAuNDMpO1xuXG4gIGNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XG4gIGNvbnN0IG1vb25UZXh0dXJlID0gbG9hZGVyLmxvYWQobW9vbik7XG4gIGNvbnN0IGJ1bXBUZXh0dXJlID0gbG9hZGVyLmxvYWQobW9vbmJ1bXApO1xuICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XG4gICAgbWFwOiBtb29uVGV4dHVyZSxcbiAgICBidW1wTWFwOiBidW1wVGV4dHVyZSxcbiAgICBidW1wU2NhbGU6IDAuMixcbiAgfSk7XG5cbiAgY29uc3QgbW9vbk1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuXG4gIG1vb25PcmJpdC5hZGQobW9vbk1lc2gpO1xuICBhbmltYXRpb25zLm1vb24ucHVzaChtb29uTWVzaCk7XG59O1xuXG5jb25zdCBzaGFwZUFzdGVyb2lkcyA9IChwb3NpdGlvbjogVEhSRUUuQnVmZmVyQXR0cmlidXRlKSA9PiB7XG4gIGNvbnN0IGFyckxpa2UgPSBwb3NpdGlvbi5hcnJheTtcbiAgbGV0IGNoZWNrID0gMDtcbiAgY29uc3QgcG9zaXRpb25TdG9yZTogbnVtYmVyW11bXSA9IFtbXV07XG4gIGNvbnN0IHBvc2l0aW9uQXJyID0gQXJyYXkuZnJvbShhcnJMaWtlKTtcbiAgcG9zaXRpb25BcnIuZm9yRWFjaCgobnVtYmVyKSA9PiB7XG4gICAgaWYgKGNoZWNrID4gMikge1xuICAgICAgY2hlY2sgPSAxO1xuICAgICAgcG9zaXRpb25TdG9yZVtwb3NpdGlvblN0b3JlLmxlbmd0aF0gPSBbbnVtYmVyXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9zaXRpb25TdG9yZVtwb3NpdGlvblN0b3JlLmxlbmd0aCAtIDFdLnB1c2gobnVtYmVyKTtcbiAgICAgIGNoZWNrICs9IDE7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCB1bmlxdWVWYWx1ZXM6IG51bWJlcltdW10gPSBbXTtcbiAgcG9zaXRpb25TdG9yZS5mb3JFYWNoKChhcnIpID0+IHtcbiAgICBpZiAodW5pcXVlVmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdW5pcXVlVmFsdWVzLnB1c2goYXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbCA9IHRydWU7XG4gICAgICB1bmlxdWVWYWx1ZXMuZm9yRWFjaCgoYXJyMikgPT4ge1xuICAgICAgICBpZiAoYXJyWzBdID09PSBhcnIyWzBdICYmIGFyclsxXSA9PT0gYXJyMlsxXSAmJiBhcnJbMl0gPT09IGFycjJbMl0pIHtcbiAgICAgICAgICB2YWwgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIHVuaXF1ZVZhbHVlcy5wdXNoKGFycik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBwcmV2ZW50TXV0OiBudW1iZXJbXVtdID0gW107XG4gIHVuaXF1ZVZhbHVlcy5mb3JFYWNoKChhcnIpID0+IHtcbiAgICBjb25zdCB4ID0gKGFyclswXSArIC0wLjI1ICsgTWF0aC5yYW5kb20oKSAqIDAuNSkudG9GaXhlZCgxKTtcbiAgICBjb25zdCB5ID0gKGFyclsxXSArIC0wLjI1ICsgTWF0aC5yYW5kb20oKSAqIDAuNSkudG9GaXhlZCgxKTtcbiAgICBjb25zdCB6ID0gKGFyclsyXSArIC0wLjI1ICsgTWF0aC5yYW5kb20oKSAqIDAuNSkudG9GaXhlZCgxKTtcblxuICAgIHBvc2l0aW9uU3RvcmUuZm9yRWFjaCgoYXJyMiwgbmR4KSA9PiB7XG4gICAgICBpZiAoYXJyWzBdID09PSBhcnIyWzBdICYmIGFyclsxXSA9PT0gYXJyMlsxXSAmJiBhcnJbMl0gPT09IGFycjJbMl0pIHtcbiAgICAgICAgcHJldmVudE11dFtuZHhdID0gW3BhcnNlRmxvYXQoeCksIHBhcnNlRmxvYXQoeSksIHBhcnNlRmxvYXQoeildO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBmaW5hbEFycjogbnVtYmVyW10gPSBbXTtcblxuICBwcmV2ZW50TXV0LmZvckVhY2goKGFycikgPT4ge1xuICAgIGNvbnN0IFt4LCB5LCB6XSA9IGFycjtcbiAgICBmaW5hbEFyci5wdXNoKHgpO1xuICAgIGZpbmFsQXJyLnB1c2goeSk7XG4gICAgZmluYWxBcnIucHVzaCh6KTtcbiAgfSk7XG5cbiAgcG9zaXRpb24uc2V0KGZpbmFsQXJyKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUFzdGVyb2lkcyA9IChcbiAgZWFydGhPcmJpdDogVEhSRUUuT2JqZWN0M0QsXG4gIGRhdGE6IERhdGFTb3J0ZXIsXG4gIG1hbmFnZXI6IEludGVyYWN0aW9uTWFuYWdlclxuKSA9PiB7XG4gIGNvbnN0IG5lb3MgPSBkYXRhLm5lb0FycjtcblxuICBjb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xuICBjb25zdCB0ZXh0dXJlID0gbG9hZGVyLmxvYWQoYXN0ZXJvaWRJbWcpO1xuICBjb25zdCB0ZXh0dXJlMiA9IGxvYWRlci5sb2FkKGFzdGVyb2lkQnVtcCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZW9zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgbmVvID0gbmVvc1tpXTtcbiAgICBjb25zdCBkaWFtZXRlciA9IGJhc2VMb2coZGF0YS5hdmVyYWdlRGlhbWV0ZXIoaSkgKiAxMDAwLCAyKTtcblxuICAgIGNvbnN0IGFzdGVyb2lkT3JiaXQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICBlYXJ0aE9yYml0LmFkZChhc3Rlcm9pZE9yYml0KTtcbiAgICBjb25zdCB7IG1pc3NEaXN0YW5jZTogZGlzdGFuY2VTdHIsIGlkIH0gPSBuZW87XG4gICAgY29uc3QgZGlzdGFuY2UgPSBwYXJzZUZsb2F0KGRpc3RhbmNlU3RyKTtcblxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLk9jdGFoZWRyb25HZW9tZXRyeShkaWFtZXRlciwgMSk7XG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe1xuICAgICAgbWFwOiB0ZXh0dXJlLFxuICAgICAgc3BlY3VsYXI6IFwid2hpdGVcIixcbiAgICAgIGJ1bXBNYXA6IHRleHR1cmUyLFxuICAgICAgYnVtcFNjYWxlOiAwLjEsXG4gICAgfSk7XG4gICAgY29uc3QgYXN0ZXJvaWQgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgIGNvbnN0IHJhbmRvbSA9IHJhbmRvbVBvc2l0aW9uKGlkLCBiYXNlTG9nKGRpc3RhbmNlIC8gMTAsIDEzKSk7XG4gICAgYXN0ZXJvaWRPcmJpdC5wb3NpdGlvbi5zZXQocmFuZG9tLngsIHJhbmRvbS55LCByYW5kb20ueik7XG4gICAgaWYgKFxuICAgICAgYXN0ZXJvaWQuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbiBpbnN0YW5jZW9mIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZVxuICAgICkge1xuICAgICAgc2hhcGVBc3Rlcm9pZHMoYXN0ZXJvaWQuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbik7XG4gICAgfVxuICAgIGFzdGVyb2lkT3JiaXQuc2NhbGUuc2V0KDAuMDA5LCAwLjAwOSwgMC4wMDkpO1xuICAgIGFzdGVyb2lkT3JiaXQuYWRkKGFzdGVyb2lkKTtcblxuICAgIGNvbnN0IHRlbXBWID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoMjUsIDIsIDAuMSwgMTApO1xuXG4gICAgYXN0ZXJvaWQudXBkYXRlV29ybGRNYXRyaXgodHJ1ZSwgZmFsc2UpO1xuICAgIGFzdGVyb2lkLmdldFdvcmxkUG9zaXRpb24odGVtcFYpO1xuICAgIGNhbWVyYS5wb3NpdGlvbi5zZXQodGVtcFYueCAtIDEwMCwgdGVtcFYueSwgdGVtcFYueik7XG4gICAgY2FtZXJhLnNjYWxlLnNldCgxMDAsIDEwMCwgMTAwKTtcbiAgICBjYW1lcmEubG9va0F0KHRlbXBWKTtcbiAgICBhbmltYXRpb25zLmZ1bmN0aW9ucy5wdXNoKCgpID0+IHtcbiAgICAgIGFzdGVyb2lkLmdldFdvcmxkUG9zaXRpb24odGVtcFYpO1xuICAgICAgY2FtZXJhLmxvb2tBdCh0ZW1wVik7XG4gICAgfSk7XG5cbiAgICBhc3Rlcm9pZE9yYml0LmFkZChjYW1lcmEpO1xuICAgIGFuaW1hdGlvbnMuYXN0ZXJvaWRzLnB1c2goYXN0ZXJvaWQpO1xuXG4gICAgbWFuYWdlci5hZGQoYXN0ZXJvaWQpO1xuICAgIGFzdGVyb2lkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGFuaW1hdGlvbnMuYW5pbWF0ZSA9IGZhbHNlO1xuICAgICAgYW5pbWF0aW9ucy5jYW1lcmFzID0gW107XG4gICAgICBhbmltYXRpb25zLmNhbWVyYXMucHVzaChjYW1lcmEpO1xuICAgIH0pO1xuICAgIGFzdGVyb2lkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBhc3Rlcm9pZC5tYXRlcmlhbC5lbWlzc2l2ZS5zZXRIZXgoMHhmZmZmZmYpO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIH0pO1xuICAgIGFzdGVyb2lkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGFzdGVyb2lkLm1hdGVyaWFsLmVtaXNzaXZlLnNldEhleCgweDAwMDAwMCk7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBpbml0ID0gKGRhdGE6IERhdGFTb3J0ZXIpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjXCIpO1xuICBjb25zdCBjZW50ZXIgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKTtcblxuICBpZiAoY2FudmFzIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgY2FudmFzIH0pO1xuICAgIGNvbnN0IHNjZW5lID0gY3JlYXRlU2NlbmUocmVuZGVyZXIpO1xuICAgIGNvbnN0IGNhbWVyYSA9IGNyZWF0ZUNhbWVyYShzY2VuZSk7XG4gICAgY29uc3QgbWFuYWdlciA9IG5ldyBJbnRlcmFjdGlvbk1hbmFnZXIocmVuZGVyZXIsIGNhbWVyYSwgY2FudmFzLCBmYWxzZSk7XG4gICAgY3JlYXRlT3JiaXRDb250cm9scyhjYW1lcmEsIGNhbnZhcywgY2VudGVyKTtcbiAgICBjcmVhdGVMaWdodGluZyhzY2VuZSk7XG4gICAgY29uc3QgZWFydGhPcmJpdCA9IGNyZWF0ZUVhcnRoT3JiaXQoc2NlbmUsIGNlbnRlcik7XG4gICAgY29uc3QgbHVuYXJFYXJ0aE9yYml0ID0gY3JlYXRlTHVuYXJFYXJ0aE9yYml0KGVhcnRoT3JiaXQpO1xuICAgIGNyZWF0ZUVhcnRoKGx1bmFyRWFydGhPcmJpdCk7XG4gICAgY29uc3QgbW9vbk9yYml0ID0gY3JlYXRlTW9vbk9yYml0KGx1bmFyRWFydGhPcmJpdCk7XG4gICAgY3JlYXRlTW9vbihtb29uT3JiaXQpO1xuICAgIGNyZWF0ZUFzdGVyb2lkcyhlYXJ0aE9yYml0LCBkYXRhLCBtYW5hZ2VyKTtcbiAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gICAgYW5pbWF0ZShyZW5kZXJlciwgc2NlbmUsIGNhbWVyYSwgbWFuYWdlcik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG4iLCJjb25zdCBiYXNlTG9nID0gKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiBNYXRoLmxvZyh4KSAvIE1hdGgubG9nKHkpO1xuXG5jb25zdCBwc2V1ZG9SYW5kb20gPSAoaWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBudW1iZXIgPSBwYXJzZUZsb2F0KGlkKTtcbiAgY29uc3Qgc3VtID0gaWRcbiAgICAuc3BsaXQoXCJcIilcbiAgICAubWFwKChudW0pID0+IHBhcnNlRmxvYXQobnVtKSlcbiAgICAucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYyArIGN1cnIsIDApO1xuICBjb25zdCB2YWx1ZSA9IChudW1iZXIgLSBzdW0pIC8gKG51bWJlciArIHN1bSk7XG4gIGNvbnN0IHZhbHVlQXJyID0gdmFsdWVcbiAgICAudG9TdHJpbmcoKVxuICAgIC5zcGxpdChcIlwiKVxuICAgIC5maWx0ZXIoKHN0cikgPT4ge1xuICAgICAgaWYgKHN0ciAhPT0gXCIuXCIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICB2YWx1ZUFyclt2YWx1ZUFyci5sZW5ndGggLSAxXSA9IFwiMFwiO1xuICB2YWx1ZUFyclt2YWx1ZUFyci5sZW5ndGggLSAyXSA9IFwiLlwiO1xuICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KHZhbHVlQXJyLnJldmVyc2UoKS5qb2luKFwiXCIpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cbmNvbnN0IHJhbmRvbVBvc2l0aW9uID0gKGlkOiBzdHJpbmcsIGRpc3RhbmNlOiBudW1iZXIpID0+IHtcbiAgY29uc3QgdmFsdWUxID0gcHNldWRvUmFuZG9tKGAke2lkfTEyMzQ1YCkgKiBkaXN0YW5jZTtcbiAgY29uc3QgdmFsdWUyID1cbiAgICBwc2V1ZG9SYW5kb20oaWQgKyBpZCkgKiAocHNldWRvUmFuZG9tKGAke2lkfTUzMjQxYCkgPiAwLjUgPyAtMSA6IDEpO1xuICBjb25zdCBpbnRlcm1lZGlhdGUgPSB2YWx1ZTEgKiogMiArIHZhbHVlMiAqKiAyO1xuICBjb25zdCB2YWx1ZTMgPSAoZGlzdGFuY2UgKiogMiAtIGludGVybWVkaWF0ZSkgKiogMC41O1xuXG4gIGNvbnN0IHJhbmRvbSA9IHBzZXVkb1JhbmRvbShpZCArIGlkKSAqIDI7XG5cbiAgaWYgKHJhbmRvbSA+IDEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogdmFsdWUxICogKHBzZXVkb1JhbmRvbShgJHtpZH04NzYwNWApID4gMC41ID8gMSA6IC0xKSxcbiAgICAgIHk6IHZhbHVlMixcbiAgICAgIHo6IHZhbHVlMyAqIChwc2V1ZG9SYW5kb20oaWQgKyBpZCkgPiAwLjUgPyAxIDogLTEpLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IHZhbHVlMyAqIChwc2V1ZG9SYW5kb20oYCR7aWR9MjEzOThgKSA+IDAuNSA/IDEgOiAtMSksXG4gICAgeTogdmFsdWUyLFxuICAgIHo6IHZhbHVlMSAqIChwc2V1ZG9SYW5kb20oaWQgKyBpZCkgPiAwLjUgPyAxIDogLTEpLFxuICB9O1xufTtcblxuZXhwb3J0IHsgYmFzZUxvZywgcmFuZG9tUG9zaXRpb24gfTtcbiJdLCJuYW1lcyI6WyJUSFJFRSIsIkludGVyYWN0aW9uTWFuYWdlciIsIk9yYml0Q29udHJvbHMiLCJiYXNlTG9nIiwicmFuZG9tUG9zaXRpb24iLCJnYWxheHkiLCJlYXJ0aG1hcCIsImVhcnRoYnVtcCIsImVhcnRoY2xvdWQiLCJtb29uIiwibW9vbmJ1bXAiLCJhc3Rlcm9pZEltZyIsImFzdGVyb2lkQnVtcCIsImFuaW1hdGlvbnMiLCJhbmltYXRlIiwiY2xvdWQiLCJlYXJ0aCIsImFzdGVyb2lkcyIsImx1bmFyRWFydGgiLCJlYXJ0aE9yYml0IiwiY2FtZXJhcyIsImZ1bmN0aW9ucyIsImNyZWF0ZVNjZW5lIiwicmVuZGVyZXIiLCJzY2VuZSIsIlNjZW5lIiwibG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsInRleHR1cmUiLCJsb2FkIiwiaW1hZ2UiLCJIVE1MSW1hZ2VFbGVtZW50IiwicnQiLCJXZWJHTEN1YmVSZW5kZXJUYXJnZXQiLCJoZWlnaHQiLCJmcm9tRXF1aXJlY3Rhbmd1bGFyVGV4dHVyZSIsImJhY2tncm91bmQiLCJjcmVhdGVDYW1lcmEiLCJmb3YiLCJhc3BlY3QiLCJuZWFyIiwiZmFyIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJwb3NpdGlvbiIsInNldCIsImFkZCIsImNyZWF0ZU9yYml0Q29udHJvbHMiLCJjYW52YXMiLCJjZW50ZXIiLCJjb250cm9scyIsInRhcmdldCIsImNvcHkiLCJWZWN0b3IzIiwidXBkYXRlIiwiY3JlYXRlTGlnaHRpbmciLCJjb2xvciIsImludGVuc2l0eSIsImxpZ2h0aW5nIiwiRGlyZWN0aW9uYWxMaWdodCIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsInJlc2l6ZVJlbmRlcmVyVG9EaXNwbGF5U2l6ZSIsImRvbUVsZW1lbnQiLCJuZWVkc1Jlc2l6ZSIsImNsaWVudFdpZHRoIiwid2lkdGgiLCJjbGllbnRIZWlnaHQiLCJzZXRTaXplIiwibWFuYWdlciIsInJlbmRlciIsInRpbWUiLCJ0aW1lSW5TZWNvbmRzIiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImZvckVhY2giLCJvYmplY3QiLCJyb3RhdGlvbiIsInkiLCJuZHgiLCJ4IiwieiIsImZ1bmMiLCJsZW5ndGgiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjcmVhdGVFYXJ0aE9yYml0IiwiT2JqZWN0M0QiLCJteUF4aXMiLCJyb3RhdGVPbkF4aXMiLCJNYXRoVXRpbHMiLCJkZWdUb1JhZCIsInB1c2giLCJjcmVhdGVMdW5hckVhcnRoT3JiaXQiLCJsdW5hckVhcnRoT3JiaXQiLCJjcmVhdGVFYXJ0aCIsImJhc2UiLCJnZW9tZXRyeSIsIlNwaGVyZUdlb21ldHJ5IiwiY2xvdWRHZW9tZXRyeSIsImJ1bXBUZXh0dXJlIiwiY2xvdWRUZXh0dXJlIiwibWF0ZXJpYWwiLCJNZXNoUGhvbmdNYXRlcmlhbCIsIm1hcCIsImJ1bXBNYXAiLCJidW1wU2NhbGUiLCJjbG91ZE1hdGVyaWFsIiwidHJhbnNwYXJlbnQiLCJvcGFjaXR5IiwiZ3JvdW5kIiwiTWVzaCIsImNyZWF0ZU1vb25PcmJpdCIsIm1vb25PcmJpdCIsImNyZWF0ZU1vb24iLCJtb29uVGV4dHVyZSIsIm1vb25NZXNoIiwic2hhcGVBc3Rlcm9pZHMiLCJhcnJMaWtlIiwiYXJyYXkiLCJjaGVjayIsInBvc2l0aW9uU3RvcmUiLCJwb3NpdGlvbkFyciIsIkFycmF5IiwiZnJvbSIsIm51bWJlciIsInVuaXF1ZVZhbHVlcyIsImFyciIsInZhbCIsImFycjIiLCJwcmV2ZW50TXV0IiwiTWF0aCIsInJhbmRvbSIsInRvRml4ZWQiLCJwYXJzZUZsb2F0IiwiZmluYWxBcnIiLCJjcmVhdGVBc3Rlcm9pZHMiLCJkYXRhIiwibmVvcyIsIm5lb0FyciIsInRleHR1cmUyIiwiaSIsIm5lbyIsImRpYW1ldGVyIiwiYXZlcmFnZURpYW1ldGVyIiwiYXN0ZXJvaWRPcmJpdCIsImRpc3RhbmNlU3RyIiwibWlzc0Rpc3RhbmNlIiwiaWQiLCJkaXN0YW5jZSIsIk9jdGFoZWRyb25HZW9tZXRyeSIsInNwZWN1bGFyIiwiYXN0ZXJvaWQiLCJhdHRyaWJ1dGVzIiwiQnVmZmVyQXR0cmlidXRlIiwic2NhbGUiLCJ0ZW1wViIsInVwZGF0ZVdvcmxkTWF0cml4IiwiZ2V0V29ybGRQb3NpdGlvbiIsImxvb2tBdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImVtaXNzaXZlIiwic2V0SGV4IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJjdXJzb3IiLCJpbml0IiwicXVlcnlTZWxlY3RvciIsIkhUTUxDYW52YXNFbGVtZW50IiwiV2ViR0xSZW5kZXJlciIsImxvZyIsInBzZXVkb1JhbmRvbSIsInN1bSIsInNwbGl0IiwibnVtIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsInZhbHVlIiwidmFsdWVBcnIiLCJ0b1N0cmluZyIsImZpbHRlciIsInN0ciIsInJldmVyc2UiLCJqb2luIiwidmFsdWUxIiwidmFsdWUyIiwiaW50ZXJtZWRpYXRlIiwidmFsdWUzIl0sInNvdXJjZVJvb3QiOiIifQ==