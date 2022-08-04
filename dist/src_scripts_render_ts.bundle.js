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
var loader = new three__WEBPACK_IMPORTED_MODULE_11__.TextureLoader();

var createScene = function createScene(renderer) {
  var scene = new three__WEBPACK_IMPORTED_MODULE_11__.Scene();
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

var createAsteroids = function createAsteroids(earthOrbit, data, manager, canvas) {
  var neos = data.neoArr;
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
    var geometry = new three__WEBPACK_IMPORTED_MODULE_11__.IcosahedronGeometry(diameter);
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
    var camera = new three__WEBPACK_IMPORTED_MODULE_11__.PerspectiveCamera(25, 2, 0.1, 100);
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
    asteroid.addEventListener("click", function (e) {
      if (e instanceof three_interactive__WEBPACK_IMPORTED_MODULE_0__.InteractiveEvent) {
        e.stopPropagation();
        animations.cameras = [];
        animations.cameras.push(camera);
        manager.remove(asteroid);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXJCO0VBQ0EsSUFBTUUsTUFBTSxZQUFJLFNBQUEzQyxRQUFRLEVBQUksQ0FBSixDQUFSLEdBQWdCMEMsWUFBcEIsRUFBcUMsR0FBckMsQ0FBWjtFQUVBLElBQU0zRCxNQUFNLEdBQUcyQyxZQUFZLENBQUMzQixFQUFFLEdBQUdBLEVBQU4sQ0FBWixHQUF3QixDQUF2Qzs7RUFFQSxJQUFJaEIsTUFBTSxHQUFHLENBQWIsRUFBZ0I7SUFDZCxPQUFPO01BQ0xwRCxDQUFDLEVBQUU2RyxNQUFNLElBQUlkLFlBQVksV0FBSTNCLEVBQUosV0FBWixHQUE2QixHQUE3QixHQUFtQyxDQUFuQyxHQUF1QyxDQUFDLENBQTVDLENBREo7TUFFTHRFLENBQUMsRUFBRWdILE1BRkU7TUFHTDdHLENBQUMsRUFBRStHLE1BQU0sSUFBSWpCLFlBQVksQ0FBQzNCLEVBQUUsR0FBR0EsRUFBTixDQUFaLEdBQXdCLEdBQXhCLEdBQThCLENBQTlCLEdBQWtDLENBQUMsQ0FBdkM7SUFISixDQUFQO0VBS0Q7O0VBRUQsT0FBTztJQUNMcEUsQ0FBQyxFQUFFZ0gsTUFBTSxJQUFJakIsWUFBWSxXQUFJM0IsRUFBSixXQUFaLEdBQTZCLEdBQTdCLEdBQW1DLENBQW5DLEdBQXVDLENBQUMsQ0FBNUMsQ0FESjtJQUVMdEUsQ0FBQyxFQUFFZ0gsTUFGRTtJQUdMN0csQ0FBQyxFQUFFNEcsTUFBTSxJQUFJZCxZQUFZLENBQUMzQixFQUFFLEdBQUdBLEVBQU4sQ0FBWixHQUF3QixHQUF4QixHQUE4QixDQUE5QixHQUFrQyxDQUFDLENBQXZDO0VBSEosQ0FBUDtBQUtELENBdEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmVhci1lYXJ0aC1vYmplY3QtdHJhY2tlci8uL3NyYy9zY3JpcHRzL3JlbmRlci50cyIsIndlYnBhY2s6Ly9uZWFyLWVhcnRoLW9iamVjdC10cmFja2VyLy4vc3JjL3NjcmlwdHMvdXRpbGl0aWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgSW50ZXJhY3Rpb25NYW5hZ2VyLCBJbnRlcmFjdGl2ZUV2ZW50IH0gZnJvbSBcInRocmVlLmludGVyYWN0aXZlXCI7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzXCI7XG5pbXBvcnQgdHlwZSB7IERhdGFTb3J0ZXIgfSBmcm9tIFwiLi9mZXRjaERhdGFcIjtcbmltcG9ydCB7IGJhc2VMb2csIHJhbmRvbVBvc2l0aW9uIH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5pbXBvcnQgZ2FsYXh5IGZyb20gXCIuLi9hc3NldHMvZ2FsYXh5Mi5qcGdcIjtcbmltcG9ydCBlYXJ0aG1hcCBmcm9tIFwiLi4vYXNzZXRzL2VhcnRobWFwMWsuanBnXCI7XG5pbXBvcnQgZWFydGhidW1wIGZyb20gXCIuLi9hc3NldHMvZWFydGhidW1wLmpwZ1wiO1xuaW1wb3J0IGVhcnRoY2xvdWQgZnJvbSBcIi4uL2Fzc2V0cy9lYXJ0aENsb3VkLnBuZ1wiO1xuaW1wb3J0IG1vb24gZnJvbSBcIi4uL2Fzc2V0cy9tb29uLmpwZ1wiO1xuaW1wb3J0IG1vb25idW1wIGZyb20gXCIuLi9hc3NldHMvbW9vbmJ1bXAuanBnXCI7XG5pbXBvcnQgYXN0ZXJvaWRJbWcgZnJvbSBcIi4uL2Fzc2V0cy9hc3Rlcm9pZC5qcGdcIjtcbmltcG9ydCBhc3Rlcm9pZEJ1bXAgZnJvbSBcIi4uL2Fzc2V0cy9hc3Rlcm9pZEJ1bXAuanBnXCI7XG5cbmludGVyZmFjZSBBbmltYXRpb25zIHtcbiAgYW5pbWF0ZTogYm9vbGVhbjtcbiAgY2xvdWQ6IFRIUkVFLk9iamVjdDNEW107XG4gIGVhcnRoOiBUSFJFRS5PYmplY3QzRFtdO1xuICBhc3Rlcm9pZHM6IFRIUkVFLk9iamVjdDNEW107XG4gIG1vb246IFRIUkVFLk9iamVjdDNEW107XG4gIGx1bmFyRWFydGg6IFRIUkVFLk9iamVjdDNEW107XG4gIGVhcnRoT3JiaXQ6IFRIUkVFLk9iamVjdDNEW107XG4gIGNhbWVyYXM6IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhW107XG4gIGZ1bmN0aW9uczogKCgpID0+IHZvaWQpW107XG59XG5cbmNvbnN0IGFuaW1hdGlvbnM6IEFuaW1hdGlvbnMgPSB7XG4gIGFuaW1hdGU6IHRydWUsXG4gIGNsb3VkOiBbXSxcbiAgZWFydGg6IFtdLFxuICBhc3Rlcm9pZHM6IFtdLFxuICBtb29uOiBbXSxcbiAgbHVuYXJFYXJ0aDogW10sXG4gIGVhcnRoT3JiaXQ6IFtdLFxuICBjYW1lcmFzOiBbXSxcbiAgZnVuY3Rpb25zOiBbXSxcbn07XG5cbmNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XG5cbmNvbnN0IGNyZWF0ZVNjZW5lID0gKHJlbmRlcmVyOiBUSFJFRS5XZWJHTFJlbmRlcmVyKSA9PiB7XG4gIGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gIGNvbnN0IHRleHR1cmUgPSBsb2FkZXIubG9hZChnYWxheHksICgpID0+IHtcbiAgICBpZiAodGV4dHVyZS5pbWFnZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHJ0ID0gbmV3IFRIUkVFLldlYkdMQ3ViZVJlbmRlclRhcmdldCh0ZXh0dXJlLmltYWdlLmhlaWdodCk7XG4gICAgICBydC5mcm9tRXF1aXJlY3Rhbmd1bGFyVGV4dHVyZShyZW5kZXJlciwgdGV4dHVyZSk7XG4gICAgICBzY2VuZS5iYWNrZ3JvdW5kID0gcnQudGV4dHVyZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc2NlbmU7XG59O1xuXG5jb25zdCBjcmVhdGVDYW1lcmEgPSAoc2NlbmU6IFRIUkVFLlNjZW5lKSA9PiB7XG4gIGNvbnN0IGZvdiA9IDc1O1xuICBjb25zdCBhc3BlY3QgPSAyO1xuICBjb25zdCBuZWFyID0gMC4xO1xuICBjb25zdCBmYXIgPSAyNTtcblxuICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoZm92LCBhc3BlY3QsIG5lYXIsIGZhcik7XG4gIGNhbWVyYS5wb3NpdGlvbi5zZXQoMCwgMCwgNSk7XG5cbiAgc2NlbmUuYWRkKGNhbWVyYSk7XG5cbiAgcmV0dXJuIGNhbWVyYTtcbn07XG5cbmNvbnN0IGNyZWF0ZU9yYml0Q29udHJvbHMgPSAoXG4gIGNhbWVyYTogVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEsXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXG4gIGNlbnRlcjogVEhSRUUuVmVjdG9yM1xuKSA9PiB7XG4gIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCBjYW52YXMpO1xuICBjb250cm9scy50YXJnZXQuY29weShjZW50ZXIpLmFkZChuZXcgVEhSRUUuVmVjdG9yMygtMSwgLTEsIDApKTtcbiAgY29udHJvbHMudXBkYXRlKCk7XG59O1xuXG5jb25zdCBjcmVhdGVMaWdodGluZyA9IChzY2VuZTogVEhSRUUuU2NlbmUpID0+IHtcbiAgY29uc3QgY29sb3IgPSAweGZmZmZmZjtcbiAgY29uc3QgaW50ZW5zaXR5ID0gMTtcbiAgY29uc3QgbGlnaHRpbmcgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodChjb2xvciwgaW50ZW5zaXR5KTtcbiAgbGlnaHRpbmcucG9zaXRpb24uc2V0KDIsIDIsIDQpO1xuICBzY2VuZS5hZGQobGlnaHRpbmcpO1xuXG4gIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoY29sb3IsIGludGVuc2l0eSAvIDUpO1xuICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcbn07XG5cbmNvbnN0IHJlc2l6ZVJlbmRlcmVyVG9EaXNwbGF5U2l6ZSA9IChyZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlcikgPT4ge1xuICBjb25zdCBjYW52YXMgPSByZW5kZXJlci5kb21FbGVtZW50O1xuICBjb25zdCBuZWVkc1Jlc2l6ZSA9XG4gICAgY2FudmFzLmNsaWVudFdpZHRoICE9PSBjYW52YXMud2lkdGggfHxcbiAgICBjYW52YXMuY2xpZW50SGVpZ2h0ICE9PSBjYW52YXMuaGVpZ2h0O1xuXG4gIGlmIChuZWVkc1Jlc2l6ZSkge1xuICAgIHJlbmRlcmVyLnNldFNpemUoY2FudmFzLmNsaWVudFdpZHRoLCBjYW52YXMuY2xpZW50SGVpZ2h0LCBmYWxzZSk7XG4gIH1cblxuICByZXR1cm4gbmVlZHNSZXNpemU7XG59O1xuXG5jb25zdCBhbmltYXRlID0gKFxuICByZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlcixcbiAgc2NlbmU6IFRIUkVFLlNjZW5lLFxuICBjYW1lcmE6IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhLFxuICBtYW5hZ2VyOiBJbnRlcmFjdGlvbk1hbmFnZXJcbikgPT4ge1xuICBjb25zdCByZW5kZXIgPSAodGltZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdGltZUluU2Vjb25kcyA9IHRpbWUgKiAwLjAwMTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IHJlbmRlcmVyLmRvbUVsZW1lbnQ7XG4gICAgY2FtZXJhLmFzcGVjdCA9IGNhbnZhcy5jbGllbnRXaWR0aCAvIGNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICAgIGlmIChyZXNpemVSZW5kZXJlclRvRGlzcGxheVNpemUocmVuZGVyZXIpKSB7XG4gICAgICBjYW1lcmEuYXNwZWN0ID0gY2FudmFzLmNsaWVudFdpZHRoIC8gY2FudmFzLmNsaWVudEhlaWdodDtcbiAgICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgfVxuXG4gICAgYW5pbWF0aW9ucy5lYXJ0aE9yYml0LmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgb2JqZWN0LnJvdGF0aW9uLnkgPSB0aW1lSW5TZWNvbmRzICogMC4wMDU7XG4gICAgfSk7XG5cbiAgICBhbmltYXRpb25zLmNsb3VkLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgb2JqZWN0LnJvdGF0aW9uLnkgPSB0aW1lSW5TZWNvbmRzICogMC4wNTtcbiAgICB9KTtcblxuICAgIGFuaW1hdGlvbnMuZWFydGguZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICBvYmplY3Qucm90YXRpb24ueSA9IHRpbWVJblNlY29uZHMgKiAwLjAyO1xuICAgIH0pO1xuXG4gICAgYW5pbWF0aW9ucy5tb29uLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgb2JqZWN0LnJvdGF0aW9uLnkgPSB0aW1lSW5TZWNvbmRzICogMC4wMTtcbiAgICB9KTtcblxuICAgIGFuaW1hdGlvbnMubHVuYXJFYXJ0aC5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgIG9iamVjdC5yb3RhdGlvbi55ID0gdGltZUluU2Vjb25kcyAqIDAuMDE7XG4gICAgfSk7XG5cbiAgICBhbmltYXRpb25zLmFzdGVyb2lkcy5mb3JFYWNoKChvYmplY3QsIG5keCkgPT4ge1xuICAgICAgb2JqZWN0LnJvdGF0aW9uLnkgPSB0aW1lSW5TZWNvbmRzICogMC4xICsgbmR4ICogMC4wNTtcbiAgICAgIG9iamVjdC5yb3RhdGlvbi54ID0gdGltZUluU2Vjb25kcyAqIDAuMSArIG5keCAqIDAuMDE7XG4gICAgICBvYmplY3Qucm90YXRpb24ueiA9IHRpbWVJblNlY29uZHMgKiAwLjEgLSBuZHggKiAwLjA1O1xuICAgIH0pO1xuXG4gICAgYW5pbWF0aW9ucy5mdW5jdGlvbnMuZm9yRWFjaCgoZnVuYykgPT4ge1xuICAgICAgZnVuYygpO1xuICAgIH0pO1xuXG4gICAgbWFuYWdlci51cGRhdGUoKTtcblxuICAgIGlmIChhbmltYXRpb25zLmNhbWVyYXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFuaW1hdGlvbnMuY2FtZXJhc1swXS5hc3BlY3QgPSBjYW52YXMuY2xpZW50V2lkdGggLyBjYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgICAgYW5pbWF0aW9ucy5jYW1lcmFzWzBdLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgYW5pbWF0aW9ucy5jYW1lcmFzWzBdKTtcbiAgICB9XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gIH07XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUVhcnRoT3JiaXQgPSAoc2NlbmU6IFRIUkVFLlNjZW5lLCBjZW50ZXI6IFRIUkVFLlZlY3RvcjMpID0+IHtcbiAgY29uc3QgZWFydGhPcmJpdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICBlYXJ0aE9yYml0LnBvc2l0aW9uLnNldChjZW50ZXIueCwgY2VudGVyLnksIGNlbnRlci56KTtcbiAgY29uc3QgbXlBeGlzID0gbmV3IFRIUkVFLlZlY3RvcjMoMSwgLTEsIDApO1xuICBlYXJ0aE9yYml0LnJvdGF0ZU9uQXhpcyhteUF4aXMsIFRIUkVFLk1hdGhVdGlscy5kZWdUb1JhZCgyMy41KSk7XG4gIHNjZW5lLmFkZChlYXJ0aE9yYml0KTtcbiAgYW5pbWF0aW9ucy5lYXJ0aE9yYml0LnB1c2goZWFydGhPcmJpdCk7XG4gIHJldHVybiBlYXJ0aE9yYml0O1xufTtcblxuY29uc3QgY3JlYXRlTHVuYXJFYXJ0aE9yYml0ID0gKGVhcnRoT3JiaXQ6IFRIUkVFLk9iamVjdDNEKSA9PiB7XG4gIGNvbnN0IGx1bmFyRWFydGhPcmJpdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICBlYXJ0aE9yYml0LmFkZChsdW5hckVhcnRoT3JiaXQpO1xuICBhbmltYXRpb25zLmx1bmFyRWFydGgucHVzaChsdW5hckVhcnRoT3JiaXQpO1xuICByZXR1cm4gbHVuYXJFYXJ0aE9yYml0O1xufTtcblxuY29uc3QgY3JlYXRlRWFydGggPSAoYmFzZTogVEhSRUUuT2JqZWN0M0QpID0+IHtcbiAgY29uc3QgZWFydGggPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcblxuICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxKTtcbiAgY29uc3QgY2xvdWRHZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxLjAwOSk7XG5cbiAgY29uc3QgdGV4dHVyZSA9IGxvYWRlci5sb2FkKGVhcnRobWFwKTtcbiAgY29uc3QgYnVtcFRleHR1cmUgPSBsb2FkZXIubG9hZChlYXJ0aGJ1bXApO1xuICBjb25zdCBjbG91ZFRleHR1cmUgPSBsb2FkZXIubG9hZChlYXJ0aGNsb3VkKTtcblxuICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XG4gICAgbWFwOiB0ZXh0dXJlLFxuICAgIGJ1bXBNYXA6IGJ1bXBUZXh0dXJlLFxuICAgIGJ1bXBTY2FsZTogMC42LFxuICB9KTtcbiAgY29uc3QgY2xvdWRNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XG4gICAgbWFwOiBjbG91ZFRleHR1cmUsXG4gICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgb3BhY2l0eTogMC41LFxuICB9KTtcblxuICBjb25zdCBncm91bmQgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICBjb25zdCBjbG91ZCA9IG5ldyBUSFJFRS5NZXNoKGNsb3VkR2VvbWV0cnksIGNsb3VkTWF0ZXJpYWwpO1xuXG4gIGVhcnRoLmFkZChncm91bmQpO1xuICBlYXJ0aC5hZGQoY2xvdWQpO1xuICBhbmltYXRpb25zLmVhcnRoLnB1c2goZ3JvdW5kKTtcbiAgYW5pbWF0aW9ucy5jbG91ZC5wdXNoKGNsb3VkKTtcblxuICBjb25zdCBteUF4aXMgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAxKTtcbiAgZWFydGgucm90YXRlT25BeGlzKG15QXhpcywgVEhSRUUuTWF0aFV0aWxzLmRlZ1RvUmFkKDIzLjUpKTtcblxuICBiYXNlLmFkZChlYXJ0aCk7XG5cbiAgcmV0dXJuIGVhcnRoO1xufTtcblxuY29uc3QgY3JlYXRlTW9vbk9yYml0ID0gKGVhcnRoT3JiaXQ6IFRIUkVFLk9iamVjdDNEKSA9PiB7XG4gIGNvbnN0IG1vb25PcmJpdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICBtb29uT3JiaXQucG9zaXRpb24uc2V0KDQsIDAsIDApO1xuICBlYXJ0aE9yYml0LmFkZChtb29uT3JiaXQpO1xuICByZXR1cm4gbW9vbk9yYml0O1xufTtcblxuY29uc3QgY3JlYXRlTW9vbiA9IChtb29uT3JiaXQ6IFRIUkVFLk9iamVjdDNEKSA9PiB7XG4gIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDAuNDMpO1xuXG4gIGNvbnN0IG1vb25UZXh0dXJlID0gbG9hZGVyLmxvYWQobW9vbik7XG4gIGNvbnN0IGJ1bXBUZXh0dXJlID0gbG9hZGVyLmxvYWQobW9vbmJ1bXApO1xuICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XG4gICAgbWFwOiBtb29uVGV4dHVyZSxcbiAgICBidW1wTWFwOiBidW1wVGV4dHVyZSxcbiAgICBidW1wU2NhbGU6IDAuMixcbiAgfSk7XG5cbiAgY29uc3QgbW9vbk1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuXG4gIG1vb25PcmJpdC5hZGQobW9vbk1lc2gpO1xuICBhbmltYXRpb25zLm1vb24ucHVzaChtb29uTWVzaCk7XG59O1xuXG5jb25zdCBzaGFwZUFzdGVyb2lkcyA9IChwb3NpdGlvbjogVEhSRUUuQnVmZmVyQXR0cmlidXRlKSA9PiB7XG4gIGNvbnN0IGFyckxpa2UgPSBwb3NpdGlvbi5hcnJheTtcbiAgbGV0IGNoZWNrID0gMDtcbiAgY29uc3QgcG9zaXRpb25TdG9yZTogbnVtYmVyW11bXSA9IFtbXV07XG4gIGNvbnN0IHBvc2l0aW9uQXJyID0gQXJyYXkuZnJvbShhcnJMaWtlKTtcbiAgcG9zaXRpb25BcnIuZm9yRWFjaCgobnVtYmVyKSA9PiB7XG4gICAgaWYgKGNoZWNrID4gMikge1xuICAgICAgY2hlY2sgPSAxO1xuICAgICAgcG9zaXRpb25TdG9yZVtwb3NpdGlvblN0b3JlLmxlbmd0aF0gPSBbbnVtYmVyXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9zaXRpb25TdG9yZVtwb3NpdGlvblN0b3JlLmxlbmd0aCAtIDFdLnB1c2gobnVtYmVyKTtcbiAgICAgIGNoZWNrICs9IDE7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCB1bmlxdWVWYWx1ZXM6IG51bWJlcltdW10gPSBbXTtcbiAgcG9zaXRpb25TdG9yZS5mb3JFYWNoKChhcnIpID0+IHtcbiAgICBpZiAodW5pcXVlVmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdW5pcXVlVmFsdWVzLnB1c2goYXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbCA9IHRydWU7XG4gICAgICB1bmlxdWVWYWx1ZXMuZm9yRWFjaCgoYXJyMikgPT4ge1xuICAgICAgICBpZiAoYXJyWzBdID09PSBhcnIyWzBdICYmIGFyclsxXSA9PT0gYXJyMlsxXSAmJiBhcnJbMl0gPT09IGFycjJbMl0pIHtcbiAgICAgICAgICB2YWwgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIHVuaXF1ZVZhbHVlcy5wdXNoKGFycik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBwcmV2ZW50TXV0OiBudW1iZXJbXVtdID0gW107XG4gIHVuaXF1ZVZhbHVlcy5mb3JFYWNoKChhcnIpID0+IHtcbiAgICBjb25zdCB4ID0gKGFyclswXSArIC0wLjI1ICsgTWF0aC5yYW5kb20oKSAqIDAuNSkudG9GaXhlZCgxKTtcbiAgICBjb25zdCB5ID0gKGFyclsxXSArIC0wLjI1ICsgTWF0aC5yYW5kb20oKSAqIDAuNSkudG9GaXhlZCgxKTtcbiAgICBjb25zdCB6ID0gKGFyclsyXSArIC0wLjI1ICsgTWF0aC5yYW5kb20oKSAqIDAuNSkudG9GaXhlZCgxKTtcblxuICAgIHBvc2l0aW9uU3RvcmUuZm9yRWFjaCgoYXJyMiwgbmR4KSA9PiB7XG4gICAgICBpZiAoYXJyWzBdID09PSBhcnIyWzBdICYmIGFyclsxXSA9PT0gYXJyMlsxXSAmJiBhcnJbMl0gPT09IGFycjJbMl0pIHtcbiAgICAgICAgcHJldmVudE11dFtuZHhdID0gW3BhcnNlRmxvYXQoeCksIHBhcnNlRmxvYXQoeSksIHBhcnNlRmxvYXQoeildO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBmaW5hbEFycjogbnVtYmVyW10gPSBbXTtcblxuICBwcmV2ZW50TXV0LmZvckVhY2goKGFycikgPT4ge1xuICAgIGNvbnN0IFt4LCB5LCB6XSA9IGFycjtcbiAgICBmaW5hbEFyci5wdXNoKHgpO1xuICAgIGZpbmFsQXJyLnB1c2goeSk7XG4gICAgZmluYWxBcnIucHVzaCh6KTtcbiAgfSk7XG5cbiAgcG9zaXRpb24uc2V0KGZpbmFsQXJyKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUFzdGVyb2lkcyA9IChcbiAgZWFydGhPcmJpdDogVEhSRUUuT2JqZWN0M0QsXG4gIGRhdGE6IERhdGFTb3J0ZXIsXG4gIG1hbmFnZXI6IEludGVyYWN0aW9uTWFuYWdlcixcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudFxuKSA9PiB7XG4gIGNvbnN0IG5lb3MgPSBkYXRhLm5lb0FycjtcblxuICBjb25zdCB0ZXh0dXJlID0gbG9hZGVyLmxvYWQoYXN0ZXJvaWRJbWcpO1xuICBjb25zdCB0ZXh0dXJlMiA9IGxvYWRlci5sb2FkKGFzdGVyb2lkQnVtcCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZW9zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgbmVvID0gbmVvc1tpXTtcbiAgICBjb25zdCBkaWFtZXRlciA9IGJhc2VMb2coZGF0YS5hdmVyYWdlRGlhbWV0ZXIoaSkgKiAxMDAwLCAyKTtcblxuICAgIGNvbnN0IGFzdGVyb2lkT3JiaXQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICBlYXJ0aE9yYml0LmFkZChhc3Rlcm9pZE9yYml0KTtcbiAgICBjb25zdCB7IG1pc3NEaXN0YW5jZTogZGlzdGFuY2VTdHIsIGlkIH0gPSBuZW87XG4gICAgY29uc3QgZGlzdGFuY2UgPSBwYXJzZUZsb2F0KGRpc3RhbmNlU3RyKTtcblxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkljb3NhaGVkcm9uR2VvbWV0cnkoZGlhbWV0ZXIpO1xuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtcbiAgICAgIG1hcDogdGV4dHVyZSxcbiAgICAgIHNwZWN1bGFyOiBcIndoaXRlXCIsXG4gICAgICBidW1wTWFwOiB0ZXh0dXJlMixcbiAgICAgIGJ1bXBTY2FsZTogMC4xLFxuICAgIH0pO1xuICAgIGNvbnN0IGFzdGVyb2lkID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICBjb25zdCByYW5kb20gPSByYW5kb21Qb3NpdGlvbihpZCwgYmFzZUxvZyhkaXN0YW5jZSAvIDEwLCAxMykpO1xuICAgIGFzdGVyb2lkT3JiaXQucG9zaXRpb24uc2V0KHJhbmRvbS54LCByYW5kb20ueSwgcmFuZG9tLnopO1xuICAgIGlmIChcbiAgICAgIGFzdGVyb2lkLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24gaW5zdGFuY2VvZiBUSFJFRS5CdWZmZXJBdHRyaWJ1dGVcbiAgICApIHtcbiAgICAgIHNoYXBlQXN0ZXJvaWRzKGFzdGVyb2lkLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24pO1xuICAgIH1cbiAgICBhc3Rlcm9pZE9yYml0LnNjYWxlLnNldCgwLjAwOSwgMC4wMDksIDAuMDA5KTtcbiAgICBhc3Rlcm9pZE9yYml0LmFkZChhc3Rlcm9pZCk7XG5cbiAgICBjb25zdCB0ZW1wViA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDI1LCAyLCAwLjEsIDEwMCk7XG5cbiAgICBhc3Rlcm9pZC51cGRhdGVXb3JsZE1hdHJpeCh0cnVlLCBmYWxzZSk7XG4gICAgYXN0ZXJvaWQuZ2V0V29ybGRQb3NpdGlvbih0ZW1wVik7XG4gICAgY2FtZXJhLnBvc2l0aW9uLnNldCh0ZW1wVi54IC0gMTAwLCB0ZW1wVi55LCB0ZW1wVi56KTtcbiAgICBjYW1lcmEuc2NhbGUuc2V0KDEwMCwgMTAwLCAxMDApO1xuICAgIGNhbWVyYS5sb29rQXQodGVtcFYpO1xuICAgIGNyZWF0ZU9yYml0Q29udHJvbHMoY2FtZXJhLCBjYW52YXMsIHRlbXBWKTtcbiAgICBhbmltYXRpb25zLmZ1bmN0aW9ucy5wdXNoKCgpID0+IHtcbiAgICAgIGFzdGVyb2lkLmdldFdvcmxkUG9zaXRpb24odGVtcFYpO1xuICAgICAgY2FtZXJhLmxvb2tBdCh0ZW1wVik7XG4gICAgfSk7XG5cbiAgICBhc3Rlcm9pZE9yYml0LmFkZChjYW1lcmEpO1xuICAgIGFuaW1hdGlvbnMuYXN0ZXJvaWRzLnB1c2goYXN0ZXJvaWQpO1xuXG4gICAgYXN0ZXJvaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIEludGVyYWN0aXZlRXZlbnQpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgYW5pbWF0aW9ucy5jYW1lcmFzID0gW107XG4gICAgICAgIGFuaW1hdGlvbnMuY2FtZXJhcy5wdXNoKGNhbWVyYSk7XG4gICAgICAgIG1hbmFnZXIucmVtb3ZlKGFzdGVyb2lkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhc3Rlcm9pZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIEludGVyYWN0aXZlRXZlbnQpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgYXN0ZXJvaWQubWF0ZXJpYWwuZW1pc3NpdmUuc2V0SGV4KDB4ZmZmZmZmKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhc3Rlcm9pZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgSW50ZXJhY3RpdmVFdmVudCkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBhc3Rlcm9pZC5tYXRlcmlhbC5lbWlzc2l2ZS5zZXRIZXgoMHgwMDAwMDApO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbWFuYWdlci5hZGQoYXN0ZXJvaWQpO1xuICB9XG59O1xuXG5jb25zdCBpbml0ID0gKGRhdGE6IERhdGFTb3J0ZXIpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjXCIpO1xuICBjb25zdCBjZW50ZXIgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKTtcblxuICBpZiAoY2FudmFzIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgY2FudmFzIH0pO1xuICAgIGNvbnN0IHNjZW5lID0gY3JlYXRlU2NlbmUocmVuZGVyZXIpO1xuICAgIGNvbnN0IGNhbWVyYSA9IGNyZWF0ZUNhbWVyYShzY2VuZSk7XG4gICAgY29uc3QgbWFuYWdlciA9IG5ldyBJbnRlcmFjdGlvbk1hbmFnZXIocmVuZGVyZXIsIGNhbWVyYSwgY2FudmFzLCBmYWxzZSk7XG4gICAgY3JlYXRlT3JiaXRDb250cm9scyhjYW1lcmEsIGNhbnZhcywgY2VudGVyKTtcbiAgICBjcmVhdGVMaWdodGluZyhzY2VuZSk7XG4gICAgY29uc3QgZWFydGhPcmJpdCA9IGNyZWF0ZUVhcnRoT3JiaXQoc2NlbmUsIGNlbnRlcik7XG4gICAgY29uc3QgbHVuYXJFYXJ0aE9yYml0ID0gY3JlYXRlTHVuYXJFYXJ0aE9yYml0KGVhcnRoT3JiaXQpO1xuICAgIGNyZWF0ZUVhcnRoKGx1bmFyRWFydGhPcmJpdCk7XG4gICAgY29uc3QgbW9vbk9yYml0ID0gY3JlYXRlTW9vbk9yYml0KGx1bmFyRWFydGhPcmJpdCk7XG4gICAgY3JlYXRlTW9vbihtb29uT3JiaXQpO1xuICAgIGNyZWF0ZUFzdGVyb2lkcyhlYXJ0aE9yYml0LCBkYXRhLCBtYW5hZ2VyLCBjYW52YXMpO1xuICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICBhbmltYXRlKHJlbmRlcmVyLCBzY2VuZSwgY2FtZXJhLCBtYW5hZ2VyKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcbiIsImNvbnN0IGJhc2VMb2cgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IE1hdGgubG9nKHgpIC8gTWF0aC5sb2coeSk7XG5cbmNvbnN0IHBzZXVkb1JhbmRvbSA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IG51bWJlciA9IHBhcnNlRmxvYXQoaWQpO1xuICBjb25zdCBzdW0gPSBpZFxuICAgIC5zcGxpdChcIlwiKVxuICAgIC5tYXAoKG51bSkgPT4gcGFyc2VGbG9hdChudW0pKVxuICAgIC5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgY3VyciwgMCk7XG4gIGNvbnN0IHZhbHVlID0gKG51bWJlciAtIHN1bSkgLyAobnVtYmVyICsgc3VtKTtcbiAgY29uc3QgdmFsdWVBcnIgPSB2YWx1ZVxuICAgIC50b1N0cmluZygpXG4gICAgLnNwbGl0KFwiXCIpXG4gICAgLmZpbHRlcigoc3RyKSA9PiB7XG4gICAgICBpZiAoc3RyICE9PSBcIi5cIikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gIHZhbHVlQXJyW3ZhbHVlQXJyLmxlbmd0aCAtIDFdID0gXCIwXCI7XG4gIHZhbHVlQXJyW3ZhbHVlQXJyLmxlbmd0aCAtIDJdID0gXCIuXCI7XG4gIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQodmFsdWVBcnIucmV2ZXJzZSgpLmpvaW4oXCJcIikpO1xuICByZXR1cm4gbnVtO1xufTtcblxuY29uc3QgcmFuZG9tUG9zaXRpb24gPSAoaWQ6IHN0cmluZywgZGlzdGFuY2U6IG51bWJlcikgPT4ge1xuICBjb25zdCB2YWx1ZTEgPSBwc2V1ZG9SYW5kb20oYCR7aWR9MTIzNDVgKSAqIGRpc3RhbmNlO1xuICBjb25zdCB2YWx1ZTIgPVxuICAgIHBzZXVkb1JhbmRvbShpZCArIGlkKSAqIChwc2V1ZG9SYW5kb20oYCR7aWR9NTMyNDFgKSA+IDAuNSA/IC0xIDogMSk7XG4gIGNvbnN0IGludGVybWVkaWF0ZSA9IHZhbHVlMSAqKiAyICsgdmFsdWUyICoqIDI7XG4gIGNvbnN0IHZhbHVlMyA9IChkaXN0YW5jZSAqKiAyIC0gaW50ZXJtZWRpYXRlKSAqKiAwLjU7XG5cbiAgY29uc3QgcmFuZG9tID0gcHNldWRvUmFuZG9tKGlkICsgaWQpICogMjtcblxuICBpZiAocmFuZG9tID4gMSkge1xuICAgIHJldHVybiB7XG4gICAgICB4OiB2YWx1ZTEgKiAocHNldWRvUmFuZG9tKGAke2lkfTg3NjA1YCkgPiAwLjUgPyAxIDogLTEpLFxuICAgICAgeTogdmFsdWUyLFxuICAgICAgejogdmFsdWUzICogKHBzZXVkb1JhbmRvbShpZCArIGlkKSA+IDAuNSA/IDEgOiAtMSksXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogdmFsdWUzICogKHBzZXVkb1JhbmRvbShgJHtpZH0yMTM5OGApID4gMC41ID8gMSA6IC0xKSxcbiAgICB5OiB2YWx1ZTIsXG4gICAgejogdmFsdWUxICogKHBzZXVkb1JhbmRvbShpZCArIGlkKSA+IDAuNSA/IDEgOiAtMSksXG4gIH07XG59O1xuXG5leHBvcnQgeyBiYXNlTG9nLCByYW5kb21Qb3NpdGlvbiB9O1xuIl0sIm5hbWVzIjpbIlRIUkVFIiwiSW50ZXJhY3Rpb25NYW5hZ2VyIiwiSW50ZXJhY3RpdmVFdmVudCIsIk9yYml0Q29udHJvbHMiLCJiYXNlTG9nIiwicmFuZG9tUG9zaXRpb24iLCJnYWxheHkiLCJlYXJ0aG1hcCIsImVhcnRoYnVtcCIsImVhcnRoY2xvdWQiLCJtb29uIiwibW9vbmJ1bXAiLCJhc3Rlcm9pZEltZyIsImFzdGVyb2lkQnVtcCIsImFuaW1hdGlvbnMiLCJhbmltYXRlIiwiY2xvdWQiLCJlYXJ0aCIsImFzdGVyb2lkcyIsImx1bmFyRWFydGgiLCJlYXJ0aE9yYml0IiwiY2FtZXJhcyIsImZ1bmN0aW9ucyIsImxvYWRlciIsIlRleHR1cmVMb2FkZXIiLCJjcmVhdGVTY2VuZSIsInJlbmRlcmVyIiwic2NlbmUiLCJTY2VuZSIsInRleHR1cmUiLCJsb2FkIiwiaW1hZ2UiLCJIVE1MSW1hZ2VFbGVtZW50IiwicnQiLCJXZWJHTEN1YmVSZW5kZXJUYXJnZXQiLCJoZWlnaHQiLCJmcm9tRXF1aXJlY3Rhbmd1bGFyVGV4dHVyZSIsImJhY2tncm91bmQiLCJjcmVhdGVDYW1lcmEiLCJmb3YiLCJhc3BlY3QiLCJuZWFyIiwiZmFyIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJwb3NpdGlvbiIsInNldCIsImFkZCIsImNyZWF0ZU9yYml0Q29udHJvbHMiLCJjYW52YXMiLCJjZW50ZXIiLCJjb250cm9scyIsInRhcmdldCIsImNvcHkiLCJWZWN0b3IzIiwidXBkYXRlIiwiY3JlYXRlTGlnaHRpbmciLCJjb2xvciIsImludGVuc2l0eSIsImxpZ2h0aW5nIiwiRGlyZWN0aW9uYWxMaWdodCIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsInJlc2l6ZVJlbmRlcmVyVG9EaXNwbGF5U2l6ZSIsImRvbUVsZW1lbnQiLCJuZWVkc1Jlc2l6ZSIsImNsaWVudFdpZHRoIiwid2lkdGgiLCJjbGllbnRIZWlnaHQiLCJzZXRTaXplIiwibWFuYWdlciIsInJlbmRlciIsInRpbWUiLCJ0aW1lSW5TZWNvbmRzIiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImZvckVhY2giLCJvYmplY3QiLCJyb3RhdGlvbiIsInkiLCJuZHgiLCJ4IiwieiIsImZ1bmMiLCJsZW5ndGgiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjcmVhdGVFYXJ0aE9yYml0IiwiT2JqZWN0M0QiLCJteUF4aXMiLCJyb3RhdGVPbkF4aXMiLCJNYXRoVXRpbHMiLCJkZWdUb1JhZCIsInB1c2giLCJjcmVhdGVMdW5hckVhcnRoT3JiaXQiLCJsdW5hckVhcnRoT3JiaXQiLCJjcmVhdGVFYXJ0aCIsImJhc2UiLCJnZW9tZXRyeSIsIlNwaGVyZUdlb21ldHJ5IiwiY2xvdWRHZW9tZXRyeSIsImJ1bXBUZXh0dXJlIiwiY2xvdWRUZXh0dXJlIiwibWF0ZXJpYWwiLCJNZXNoUGhvbmdNYXRlcmlhbCIsIm1hcCIsImJ1bXBNYXAiLCJidW1wU2NhbGUiLCJjbG91ZE1hdGVyaWFsIiwidHJhbnNwYXJlbnQiLCJvcGFjaXR5IiwiZ3JvdW5kIiwiTWVzaCIsImNyZWF0ZU1vb25PcmJpdCIsIm1vb25PcmJpdCIsImNyZWF0ZU1vb24iLCJtb29uVGV4dHVyZSIsIm1vb25NZXNoIiwic2hhcGVBc3Rlcm9pZHMiLCJhcnJMaWtlIiwiYXJyYXkiLCJjaGVjayIsInBvc2l0aW9uU3RvcmUiLCJwb3NpdGlvbkFyciIsIkFycmF5IiwiZnJvbSIsIm51bWJlciIsInVuaXF1ZVZhbHVlcyIsImFyciIsInZhbCIsImFycjIiLCJwcmV2ZW50TXV0IiwiTWF0aCIsInJhbmRvbSIsInRvRml4ZWQiLCJwYXJzZUZsb2F0IiwiZmluYWxBcnIiLCJjcmVhdGVBc3Rlcm9pZHMiLCJkYXRhIiwibmVvcyIsIm5lb0FyciIsInRleHR1cmUyIiwiaSIsIm5lbyIsImRpYW1ldGVyIiwiYXZlcmFnZURpYW1ldGVyIiwiYXN0ZXJvaWRPcmJpdCIsImRpc3RhbmNlU3RyIiwibWlzc0Rpc3RhbmNlIiwiaWQiLCJkaXN0YW5jZSIsIkljb3NhaGVkcm9uR2VvbWV0cnkiLCJzcGVjdWxhciIsImFzdGVyb2lkIiwiYXR0cmlidXRlcyIsIkJ1ZmZlckF0dHJpYnV0ZSIsInNjYWxlIiwidGVtcFYiLCJ1cGRhdGVXb3JsZE1hdHJpeCIsImdldFdvcmxkUG9zaXRpb24iLCJsb29rQXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInJlbW92ZSIsImVtaXNzaXZlIiwic2V0SGV4IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJjdXJzb3IiLCJpbml0IiwicXVlcnlTZWxlY3RvciIsIkhUTUxDYW52YXNFbGVtZW50IiwiV2ViR0xSZW5kZXJlciIsImxvZyIsInBzZXVkb1JhbmRvbSIsInN1bSIsInNwbGl0IiwibnVtIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsInZhbHVlIiwidmFsdWVBcnIiLCJ0b1N0cmluZyIsImZpbHRlciIsInN0ciIsInJldmVyc2UiLCJqb2luIiwidmFsdWUxIiwidmFsdWUyIiwiaW50ZXJtZWRpYXRlIiwidmFsdWUzIl0sInNvdXJjZVJvb3QiOiIifQ==