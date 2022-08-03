"use strict";
(self["webpackChunknear_earth_object_tracker"] = self["webpackChunknear_earth_object_tracker"] || []).push([["src_scripts_render_ts"],{

/***/ "./src/scripts/render.ts":
/*!*******************************!*\
  !*** ./src/scripts/render.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/scripts/utilities.ts");
/* harmony import */ var _assets_galaxy2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/galaxy2.jpg */ "./src/assets/galaxy2.jpg");
/* harmony import */ var _assets_earthmap1k_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/earthmap1k.jpg */ "./src/assets/earthmap1k.jpg");
/* harmony import */ var _assets_earthbump_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/earthbump.jpg */ "./src/assets/earthbump.jpg");
/* harmony import */ var _assets_earthCloud_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/earthCloud.png */ "./src/assets/earthCloud.png");
/* harmony import */ var _assets_moon_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/moon.jpg */ "./src/assets/moon.jpg");
/* harmony import */ var _assets_moonbump_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/moonbump.jpg */ "./src/assets/moonbump.jpg");
/* harmony import */ var _assets_asteroid_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/asteroid.jpg */ "./src/assets/asteroid.jpg");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var animations = {
  cloud: [],
  earth: [],
  asteroids: [],
  moon: [],
  lunarEarth: [],
  earthOrbit: []
};
var cameras = [];

var createScene = function createScene(renderer) {
  var scene = new three__WEBPACK_IMPORTED_MODULE_9__.Scene();
  var loader = new three__WEBPACK_IMPORTED_MODULE_9__.TextureLoader();
  var texture = loader.load(_assets_galaxy2_jpg__WEBPACK_IMPORTED_MODULE_2__, function () {
    if (texture.image instanceof HTMLImageElement) {
      var rt = new three__WEBPACK_IMPORTED_MODULE_9__.WebGLCubeRenderTarget(texture.image.height);
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
  var camera = new three__WEBPACK_IMPORTED_MODULE_9__.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 5);
  scene.add(camera);
  return camera;
};

var createOrbitControls = function createOrbitControls(camera, canvas, center) {
  var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__.OrbitControls(camera, canvas);
  controls.target.copy(center).add(new three__WEBPACK_IMPORTED_MODULE_9__.Vector3(-1, -1, 0));
  controls.update();
};

var createLighting = function createLighting(scene) {
  var color = 0xffffff;
  var intensity = 1;
  var lighting = new three__WEBPACK_IMPORTED_MODULE_9__.DirectionalLight(color, intensity);
  lighting.position.set(2, 2, 4);
  scene.add(lighting);
  var ambientLight = new three__WEBPACK_IMPORTED_MODULE_9__.AmbientLight(color, intensity / 5);
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

var animate = function animate(renderer, scene, camera) {
  var render = function render(time) {
    var timeInSeconds = time * 0.001;
    var canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();

    if (resizeRendererToDisplaySize(renderer)) {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

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
    animations.earthOrbit.forEach(function (object) {
      object.rotation.y = timeInSeconds * 0.005;
    });
    animations.asteroids.forEach(function (object, ndx) {
      object.rotation.y = timeInSeconds * 0.1 + ndx * 0.05;
      object.rotation.x = timeInSeconds * 0.1 + ndx * 0.01;
      object.rotation.z = timeInSeconds * 0.1 - ndx * 0.05;
    });
    renderer.render(scene, camera);
    window.requestAnimationFrame(render);
  };

  window.requestAnimationFrame(render);
};

var createEarthOrbit = function createEarthOrbit(scene, center) {
  var earthOrbit = new three__WEBPACK_IMPORTED_MODULE_9__.Object3D();
  earthOrbit.position.set(center.x, center.y, center.z);
  var myAxis = new three__WEBPACK_IMPORTED_MODULE_9__.Vector3(1, -1, 0);
  earthOrbit.rotateOnAxis(myAxis, three__WEBPACK_IMPORTED_MODULE_9__.MathUtils.degToRad(23.5));
  scene.add(earthOrbit);
  animations.earthOrbit.push(earthOrbit);
  return earthOrbit;
};

var createLunarEarthOrbit = function createLunarEarthOrbit(earthOrbit) {
  var lunarEarthOrbit = new three__WEBPACK_IMPORTED_MODULE_9__.Object3D();
  earthOrbit.add(lunarEarthOrbit);
  animations.lunarEarth.push(lunarEarthOrbit);
  return lunarEarthOrbit;
};

var createEarth = function createEarth(base) {
  var earth = new three__WEBPACK_IMPORTED_MODULE_9__.Object3D();
  var geometry = new three__WEBPACK_IMPORTED_MODULE_9__.SphereGeometry(1);
  var cloudGeometry = new three__WEBPACK_IMPORTED_MODULE_9__.SphereGeometry(1.009);
  var loader = new three__WEBPACK_IMPORTED_MODULE_9__.TextureLoader();
  var texture = loader.load(_assets_earthmap1k_jpg__WEBPACK_IMPORTED_MODULE_3__);
  var bumpTexture = loader.load(_assets_earthbump_jpg__WEBPACK_IMPORTED_MODULE_4__);
  var cloudTexture = loader.load(_assets_earthCloud_png__WEBPACK_IMPORTED_MODULE_5__);
  var material = new three__WEBPACK_IMPORTED_MODULE_9__.MeshPhongMaterial({
    map: texture,
    bumpMap: bumpTexture,
    bumpScale: 0.6
  });
  var cloudMaterial = new three__WEBPACK_IMPORTED_MODULE_9__.MeshPhongMaterial({
    map: cloudTexture,
    transparent: true,
    opacity: 0.5
  });
  var ground = new three__WEBPACK_IMPORTED_MODULE_9__.Mesh(geometry, material);
  var cloud = new three__WEBPACK_IMPORTED_MODULE_9__.Mesh(cloudGeometry, cloudMaterial);
  earth.add(ground);
  earth.add(cloud);
  animations.earth.push(ground);
  animations.cloud.push(cloud);
  var myAxis = new three__WEBPACK_IMPORTED_MODULE_9__.Vector3(0, 0, 1);
  earth.rotateOnAxis(myAxis, three__WEBPACK_IMPORTED_MODULE_9__.MathUtils.degToRad(23.5));
  base.add(earth);
  return earth;
};

var createMoonOrbit = function createMoonOrbit(earthOrbit) {
  var moonOrbit = new three__WEBPACK_IMPORTED_MODULE_9__.Object3D();
  moonOrbit.position.set(Math.pow(2, 0.5), Math.pow(2, 0.5), 0);
  earthOrbit.add(moonOrbit);
  return moonOrbit;
};

var createMoon = function createMoon(moonOrbit) {
  var geometry = new three__WEBPACK_IMPORTED_MODULE_9__.SphereGeometry(0.43);
  var loader = new three__WEBPACK_IMPORTED_MODULE_9__.TextureLoader();
  var moonTexture = loader.load(_assets_moon_jpg__WEBPACK_IMPORTED_MODULE_6__);
  var bumpTexture = loader.load(_assets_moonbump_jpg__WEBPACK_IMPORTED_MODULE_7__);
  var material = new three__WEBPACK_IMPORTED_MODULE_9__.MeshPhongMaterial({
    map: moonTexture,
    bumpMap: bumpTexture,
    bumpScale: 0.2
  });
  var moonMesh = new three__WEBPACK_IMPORTED_MODULE_9__.Mesh(geometry, material);
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

var createAsteroids = function createAsteroids(earthOrbit, data) {
  var neos = data.neoArr;
  var loader = new three__WEBPACK_IMPORTED_MODULE_9__.TextureLoader();
  var texture = loader.load(_assets_asteroid_jpg__WEBPACK_IMPORTED_MODULE_8__);

  for (var i = 0; i < neos.length; i += 1) {
    var neo = neos[i];
    var asteroidOrbit = new three__WEBPACK_IMPORTED_MODULE_9__.Object3D();
    earthOrbit.add(asteroidOrbit);
    var max = neo.estimatedDiameterMax,
        min = neo.estimatedDiameterMin,
        distanceStr = neo.missDistance,
        id = neo.id;
    var distance = parseFloat(distanceStr);
    var geometry = new three__WEBPACK_IMPORTED_MODULE_9__.OctahedronGeometry(1, 1);
    var material = new three__WEBPACK_IMPORTED_MODULE_9__.MeshPhongMaterial({
      map: texture,
      emissive: "black",
      emissiveIntensity: 1,
      specular: "white"
    });
    var asteroid = new three__WEBPACK_IMPORTED_MODULE_9__.Mesh(geometry, material);
    var random = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.randomPosition)(id, (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.baseLog)(distance / 10, 13));
    asteroid.position.set(random.x, random.y, random.z);

    if (asteroid.geometry.attributes.position instanceof three__WEBPACK_IMPORTED_MODULE_9__.BufferAttribute) {
      shapeAsteroids(asteroid.geometry.attributes.position);
    }

    asteroid.scale.set(0.05, 0.05, 0.05);
    asteroidOrbit.add(asteroid);
    animations.asteroids.push(asteroid);
  }
};

var init = function init(data) {
  var canvas = document.querySelector("#c");
  var center = new three__WEBPACK_IMPORTED_MODULE_9__.Vector3(0, 0, 0);

  if (canvas instanceof HTMLCanvasElement) {
    var renderer = new three__WEBPACK_IMPORTED_MODULE_9__.WebGLRenderer({
      canvas: canvas
    });
    var scene = createScene(renderer);
    var camera = createCamera(scene);
    createOrbitControls(camera, canvas, center);
    createLighting(scene);
    var earthOrbit = createEarthOrbit(scene, center);
    var lunarEarthOrbit = createLunarEarthOrbit(earthOrbit);
    createEarth(lunarEarthOrbit);
    var moonOrbit = createMoonOrbit(lunarEarthOrbit);
    createMoon(moonOrbit);
    createAsteroids(earthOrbit, data);
    renderer.render(scene, camera);
    animate(renderer, scene, camera);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTVDLENBREo7TUFFTHRFLENBQUMsRUFBRXFHLE1BRkU7TUFHTGxHLENBQUMsRUFBRW9HLE1BQU0sSUFBSWpCLFlBQVksQ0FBQ2hCLEVBQUUsR0FBR0EsRUFBTixDQUFaLEdBQXdCLEdBQXhCLEdBQThCLENBQTlCLEdBQWtDLENBQUMsQ0FBdkM7SUFISixDQUFQO0VBS0Q7O0VBRUQsT0FBTztJQUNMcEUsQ0FBQyxFQUFFcUcsTUFBTSxJQUFJakIsWUFBWSxXQUFJaEIsRUFBSixXQUFaLEdBQTZCLEdBQTdCLEdBQW1DLENBQW5DLEdBQXVDLENBQUMsQ0FBNUMsQ0FESjtJQUVMdEUsQ0FBQyxFQUFFcUcsTUFGRTtJQUdMbEcsQ0FBQyxFQUFFaUcsTUFBTSxJQUFJZCxZQUFZLENBQUNoQixFQUFFLEdBQUdBLEVBQU4sQ0FBWixHQUF3QixHQUF4QixHQUE4QixDQUE5QixHQUFrQyxDQUFDLENBQXZDO0VBSEosQ0FBUDtBQUtELENBdEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmVhci1lYXJ0aC1vYmplY3QtdHJhY2tlci8uL3NyYy9zY3JpcHRzL3JlbmRlci50cyIsIndlYnBhY2s6Ly9uZWFyLWVhcnRoLW9iamVjdC10cmFja2VyLy4vc3JjL3NjcmlwdHMvdXRpbGl0aWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9sc1wiO1xuaW1wb3J0IHR5cGUgeyBEYXRhU29ydGVyIH0gZnJvbSBcIi4vZmV0Y2hEYXRhXCI7XG5pbXBvcnQgeyBiYXNlTG9nLCByYW5kb21Qb3NpdGlvbiB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuaW1wb3J0IGdhbGF4eSBmcm9tIFwiLi4vYXNzZXRzL2dhbGF4eTIuanBnXCI7XG5pbXBvcnQgZWFydGhtYXAgZnJvbSBcIi4uL2Fzc2V0cy9lYXJ0aG1hcDFrLmpwZ1wiO1xuaW1wb3J0IGVhcnRoYnVtcCBmcm9tIFwiLi4vYXNzZXRzL2VhcnRoYnVtcC5qcGdcIjtcbmltcG9ydCBlYXJ0aGNsb3VkIGZyb20gXCIuLi9hc3NldHMvZWFydGhDbG91ZC5wbmdcIjtcbmltcG9ydCBtb29uIGZyb20gXCIuLi9hc3NldHMvbW9vbi5qcGdcIjtcbmltcG9ydCBtb29uYnVtcCBmcm9tIFwiLi4vYXNzZXRzL21vb25idW1wLmpwZ1wiO1xuaW1wb3J0IGFzdGVyb2lkSW1nIGZyb20gXCIuLi9hc3NldHMvYXN0ZXJvaWQuanBnXCI7XG5cbmludGVyZmFjZSBBbmltYXRpb25zIHtcbiAgY2xvdWQ6IFRIUkVFLk9iamVjdDNEW107XG4gIGVhcnRoOiBUSFJFRS5PYmplY3QzRFtdO1xuICBhc3Rlcm9pZHM6IFRIUkVFLk9iamVjdDNEW107XG4gIG1vb246IFRIUkVFLk9iamVjdDNEW107XG4gIGx1bmFyRWFydGg6IFRIUkVFLk9iamVjdDNEW107XG4gIGVhcnRoT3JiaXQ6IFRIUkVFLk9iamVjdDNEW107XG59XG5cbmNvbnN0IGFuaW1hdGlvbnM6IEFuaW1hdGlvbnMgPSB7XG4gIGNsb3VkOiBbXSxcbiAgZWFydGg6IFtdLFxuICBhc3Rlcm9pZHM6IFtdLFxuICBtb29uOiBbXSxcbiAgbHVuYXJFYXJ0aDogW10sXG4gIGVhcnRoT3JiaXQ6IFtdLFxufTtcblxuY29uc3QgY2FtZXJhczogVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmFbXSA9IFtdO1xuXG5jb25zdCBjcmVhdGVTY2VuZSA9IChyZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlcikgPT4ge1xuICBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICBjb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xuICBjb25zdCB0ZXh0dXJlID0gbG9hZGVyLmxvYWQoZ2FsYXh5LCAoKSA9PiB7XG4gICAgaWYgKHRleHR1cmUuaW1hZ2UgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgICBjb25zdCBydCA9IG5ldyBUSFJFRS5XZWJHTEN1YmVSZW5kZXJUYXJnZXQodGV4dHVyZS5pbWFnZS5oZWlnaHQpO1xuICAgICAgcnQuZnJvbUVxdWlyZWN0YW5ndWxhclRleHR1cmUocmVuZGVyZXIsIHRleHR1cmUpO1xuICAgICAgc2NlbmUuYmFja2dyb3VuZCA9IHJ0LnRleHR1cmU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHNjZW5lO1xufTtcblxuY29uc3QgY3JlYXRlQ2FtZXJhID0gKHNjZW5lOiBUSFJFRS5TY2VuZSkgPT4ge1xuICBjb25zdCBmb3YgPSA3NTtcbiAgY29uc3QgYXNwZWN0ID0gMjtcbiAgY29uc3QgbmVhciA9IDAuMTtcbiAgY29uc3QgZmFyID0gMjU7XG5cbiAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKGZvdiwgYXNwZWN0LCBuZWFyLCBmYXIpO1xuICBjYW1lcmEucG9zaXRpb24uc2V0KDAsIDAsIDUpO1xuXG4gIHNjZW5lLmFkZChjYW1lcmEpO1xuXG4gIHJldHVybiBjYW1lcmE7XG59O1xuXG5jb25zdCBjcmVhdGVPcmJpdENvbnRyb2xzID0gKFxuICBjYW1lcmE6IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhLFxuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuICBjZW50ZXI6IFRIUkVFLlZlY3RvcjNcbikgPT4ge1xuICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgY2FudmFzKTtcbiAgY29udHJvbHMudGFyZ2V0LmNvcHkoY2VudGVyKS5hZGQobmV3IFRIUkVFLlZlY3RvcjMoLTEsIC0xLCAwKSk7XG4gIGNvbnRyb2xzLnVwZGF0ZSgpO1xufTtcblxuY29uc3QgY3JlYXRlTGlnaHRpbmcgPSAoc2NlbmU6IFRIUkVFLlNjZW5lKSA9PiB7XG4gIGNvbnN0IGNvbG9yID0gMHhmZmZmZmY7XG4gIGNvbnN0IGludGVuc2l0eSA9IDE7XG4gIGNvbnN0IGxpZ2h0aW5nID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoY29sb3IsIGludGVuc2l0eSk7XG4gIGxpZ2h0aW5nLnBvc2l0aW9uLnNldCgyLCAyLCA0KTtcbiAgc2NlbmUuYWRkKGxpZ2h0aW5nKTtcblxuICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KGNvbG9yLCBpbnRlbnNpdHkgLyA1KTtcbiAgc2NlbmUuYWRkKGFtYmllbnRMaWdodCk7XG59O1xuXG5jb25zdCByZXNpemVSZW5kZXJlclRvRGlzcGxheVNpemUgPSAocmVuZGVyZXI6IFRIUkVFLldlYkdMUmVuZGVyZXIpID0+IHtcbiAgY29uc3QgY2FudmFzID0gcmVuZGVyZXIuZG9tRWxlbWVudDtcbiAgY29uc3QgbmVlZHNSZXNpemUgPVxuICAgIGNhbnZhcy5jbGllbnRXaWR0aCAhPT0gY2FudmFzLndpZHRoIHx8XG4gICAgY2FudmFzLmNsaWVudEhlaWdodCAhPT0gY2FudmFzLmhlaWdodDtcblxuICBpZiAobmVlZHNSZXNpemUpIHtcbiAgICByZW5kZXJlci5zZXRTaXplKGNhbnZhcy5jbGllbnRXaWR0aCwgY2FudmFzLmNsaWVudEhlaWdodCwgZmFsc2UpO1xuICB9XG5cbiAgcmV0dXJuIG5lZWRzUmVzaXplO1xufTtcblxuY29uc3QgYW5pbWF0ZSA9IChcbiAgcmVuZGVyZXI6IFRIUkVFLldlYkdMUmVuZGVyZXIsXG4gIHNjZW5lOiBUSFJFRS5TY2VuZSxcbiAgY2FtZXJhOiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYVxuKSA9PiB7XG4gIGNvbnN0IHJlbmRlciA9ICh0aW1lOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB0aW1lSW5TZWNvbmRzID0gdGltZSAqIDAuMDAxO1xuXG4gICAgY29uc3QgY2FudmFzID0gcmVuZGVyZXIuZG9tRWxlbWVudDtcbiAgICBjYW1lcmEuYXNwZWN0ID0gY2FudmFzLmNsaWVudFdpZHRoIC8gY2FudmFzLmNsaWVudEhlaWdodDtcbiAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG4gICAgaWYgKHJlc2l6ZVJlbmRlcmVyVG9EaXNwbGF5U2l6ZShyZW5kZXJlcikpIHtcbiAgICAgIGNhbWVyYS5hc3BlY3QgPSBjYW52YXMuY2xpZW50V2lkdGggLyBjYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICB9XG5cbiAgICBhbmltYXRpb25zLmNsb3VkLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgb2JqZWN0LnJvdGF0aW9uLnkgPSB0aW1lSW5TZWNvbmRzICogMC4wNTtcbiAgICB9KTtcblxuICAgIGFuaW1hdGlvbnMuZWFydGguZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICBvYmplY3Qucm90YXRpb24ueSA9IHRpbWVJblNlY29uZHMgKiAwLjAyO1xuICAgIH0pO1xuXG4gICAgYW5pbWF0aW9ucy5tb29uLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgb2JqZWN0LnJvdGF0aW9uLnkgPSB0aW1lSW5TZWNvbmRzICogMC4wMjtcbiAgICB9KTtcblxuICAgIGFuaW1hdGlvbnMubHVuYXJFYXJ0aC5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgIG9iamVjdC5yb3RhdGlvbi55ID0gdGltZUluU2Vjb25kcyAqIDAuMDE7XG4gICAgfSk7XG5cbiAgICBhbmltYXRpb25zLmVhcnRoT3JiaXQuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICBvYmplY3Qucm90YXRpb24ueSA9IHRpbWVJblNlY29uZHMgKiAwLjAwNTtcbiAgICB9KTtcblxuICAgIGFuaW1hdGlvbnMuYXN0ZXJvaWRzLmZvckVhY2goKG9iamVjdCwgbmR4KSA9PiB7XG4gICAgICBvYmplY3Qucm90YXRpb24ueSA9IHRpbWVJblNlY29uZHMgKiAwLjEgKyBuZHggKiAwLjA1O1xuICAgICAgb2JqZWN0LnJvdGF0aW9uLnggPSB0aW1lSW5TZWNvbmRzICogMC4xICsgbmR4ICogMC4wMTtcbiAgICAgIG9iamVjdC5yb3RhdGlvbi56ID0gdGltZUluU2Vjb25kcyAqIDAuMSAtIG5keCAqIDAuMDU7XG4gICAgfSk7XG5cbiAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gIH07XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUVhcnRoT3JiaXQgPSAoc2NlbmU6IFRIUkVFLlNjZW5lLCBjZW50ZXI6IFRIUkVFLlZlY3RvcjMpID0+IHtcbiAgY29uc3QgZWFydGhPcmJpdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICBlYXJ0aE9yYml0LnBvc2l0aW9uLnNldChjZW50ZXIueCwgY2VudGVyLnksIGNlbnRlci56KTtcbiAgY29uc3QgbXlBeGlzID0gbmV3IFRIUkVFLlZlY3RvcjMoMSwgLTEsIDApO1xuICBlYXJ0aE9yYml0LnJvdGF0ZU9uQXhpcyhteUF4aXMsIFRIUkVFLk1hdGhVdGlscy5kZWdUb1JhZCgyMy41KSk7XG4gIHNjZW5lLmFkZChlYXJ0aE9yYml0KTtcbiAgYW5pbWF0aW9ucy5lYXJ0aE9yYml0LnB1c2goZWFydGhPcmJpdCk7XG4gIHJldHVybiBlYXJ0aE9yYml0O1xufTtcblxuY29uc3QgY3JlYXRlTHVuYXJFYXJ0aE9yYml0ID0gKGVhcnRoT3JiaXQ6IFRIUkVFLk9iamVjdDNEKSA9PiB7XG4gIGNvbnN0IGx1bmFyRWFydGhPcmJpdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICBlYXJ0aE9yYml0LmFkZChsdW5hckVhcnRoT3JiaXQpO1xuICBhbmltYXRpb25zLmx1bmFyRWFydGgucHVzaChsdW5hckVhcnRoT3JiaXQpO1xuICByZXR1cm4gbHVuYXJFYXJ0aE9yYml0O1xufTtcblxuY29uc3QgY3JlYXRlRWFydGggPSAoYmFzZTogVEhSRUUuT2JqZWN0M0QpID0+IHtcbiAgY29uc3QgZWFydGggPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcblxuICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxKTtcbiAgY29uc3QgY2xvdWRHZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxLjAwOSk7XG5cbiAgY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcbiAgY29uc3QgdGV4dHVyZSA9IGxvYWRlci5sb2FkKGVhcnRobWFwKTtcbiAgY29uc3QgYnVtcFRleHR1cmUgPSBsb2FkZXIubG9hZChlYXJ0aGJ1bXApO1xuICBjb25zdCBjbG91ZFRleHR1cmUgPSBsb2FkZXIubG9hZChlYXJ0aGNsb3VkKTtcblxuICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XG4gICAgbWFwOiB0ZXh0dXJlLFxuICAgIGJ1bXBNYXA6IGJ1bXBUZXh0dXJlLFxuICAgIGJ1bXBTY2FsZTogMC42LFxuICB9KTtcbiAgY29uc3QgY2xvdWRNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XG4gICAgbWFwOiBjbG91ZFRleHR1cmUsXG4gICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgb3BhY2l0eTogMC41LFxuICB9KTtcblxuICBjb25zdCBncm91bmQgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICBjb25zdCBjbG91ZCA9IG5ldyBUSFJFRS5NZXNoKGNsb3VkR2VvbWV0cnksIGNsb3VkTWF0ZXJpYWwpO1xuXG4gIGVhcnRoLmFkZChncm91bmQpO1xuICBlYXJ0aC5hZGQoY2xvdWQpO1xuICBhbmltYXRpb25zLmVhcnRoLnB1c2goZ3JvdW5kKTtcbiAgYW5pbWF0aW9ucy5jbG91ZC5wdXNoKGNsb3VkKTtcblxuICBjb25zdCBteUF4aXMgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAxKTtcbiAgZWFydGgucm90YXRlT25BeGlzKG15QXhpcywgVEhSRUUuTWF0aFV0aWxzLmRlZ1RvUmFkKDIzLjUpKTtcblxuICBiYXNlLmFkZChlYXJ0aCk7XG5cbiAgcmV0dXJuIGVhcnRoO1xufTtcblxuY29uc3QgY3JlYXRlTW9vbk9yYml0ID0gKGVhcnRoT3JiaXQ6IFRIUkVFLk9iamVjdDNEKSA9PiB7XG4gIGNvbnN0IG1vb25PcmJpdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICBtb29uT3JiaXQucG9zaXRpb24uc2V0KDIgKiogMC41LCAyICoqIDAuNSwgMCk7XG4gIGVhcnRoT3JiaXQuYWRkKG1vb25PcmJpdCk7XG4gIHJldHVybiBtb29uT3JiaXQ7XG59O1xuXG5jb25zdCBjcmVhdGVNb29uID0gKG1vb25PcmJpdDogVEhSRUUuT2JqZWN0M0QpID0+IHtcbiAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMC40Myk7XG5cbiAgY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcbiAgY29uc3QgbW9vblRleHR1cmUgPSBsb2FkZXIubG9hZChtb29uKTtcbiAgY29uc3QgYnVtcFRleHR1cmUgPSBsb2FkZXIubG9hZChtb29uYnVtcCk7XG4gIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtcbiAgICBtYXA6IG1vb25UZXh0dXJlLFxuICAgIGJ1bXBNYXA6IGJ1bXBUZXh0dXJlLFxuICAgIGJ1bXBTY2FsZTogMC4yLFxuICB9KTtcblxuICBjb25zdCBtb29uTWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG5cbiAgbW9vbk9yYml0LmFkZChtb29uTWVzaCk7XG4gIGFuaW1hdGlvbnMubW9vbi5wdXNoKG1vb25NZXNoKTtcbn07XG5cbmNvbnN0IHNoYXBlQXN0ZXJvaWRzID0gKHBvc2l0aW9uOiBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUpID0+IHtcbiAgY29uc3QgYXJyTGlrZSA9IHBvc2l0aW9uLmFycmF5O1xuICBsZXQgY2hlY2sgPSAwO1xuICBjb25zdCBwb3NpdGlvblN0b3JlOiBudW1iZXJbXVtdID0gW1tdXTtcbiAgY29uc3QgcG9zaXRpb25BcnIgPSBBcnJheS5mcm9tKGFyckxpa2UpO1xuICBwb3NpdGlvbkFyci5mb3JFYWNoKChudW1iZXIpID0+IHtcbiAgICBpZiAoY2hlY2sgPiAyKSB7XG4gICAgICBjaGVjayA9IDE7XG4gICAgICBwb3NpdGlvblN0b3JlW3Bvc2l0aW9uU3RvcmUubGVuZ3RoXSA9IFtudW1iZXJdO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb3NpdGlvblN0b3JlW3Bvc2l0aW9uU3RvcmUubGVuZ3RoIC0gMV0ucHVzaChudW1iZXIpO1xuICAgICAgY2hlY2sgKz0gMTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHVuaXF1ZVZhbHVlczogbnVtYmVyW11bXSA9IFtdO1xuICBwb3NpdGlvblN0b3JlLmZvckVhY2goKGFycikgPT4ge1xuICAgIGlmICh1bmlxdWVWYWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB1bmlxdWVWYWx1ZXMucHVzaChhcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsID0gdHJ1ZTtcbiAgICAgIHVuaXF1ZVZhbHVlcy5mb3JFYWNoKChhcnIyKSA9PiB7XG4gICAgICAgIGlmIChhcnJbMF0gPT09IGFycjJbMF0gJiYgYXJyWzFdID09PSBhcnIyWzFdICYmIGFyclsyXSA9PT0gYXJyMlsyXSkge1xuICAgICAgICAgIHZhbCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgdW5pcXVlVmFsdWVzLnB1c2goYXJyKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHByZXZlbnRNdXQ6IG51bWJlcltdW10gPSBbXTtcbiAgdW5pcXVlVmFsdWVzLmZvckVhY2goKGFycikgPT4ge1xuICAgIGNvbnN0IHggPSAoYXJyWzBdICsgLTAuMjUgKyBNYXRoLnJhbmRvbSgpICogMC41KS50b0ZpeGVkKDEpO1xuICAgIGNvbnN0IHkgPSAoYXJyWzFdICsgLTAuMjUgKyBNYXRoLnJhbmRvbSgpICogMC41KS50b0ZpeGVkKDEpO1xuICAgIGNvbnN0IHogPSAoYXJyWzJdICsgLTAuMjUgKyBNYXRoLnJhbmRvbSgpICogMC41KS50b0ZpeGVkKDEpO1xuXG4gICAgcG9zaXRpb25TdG9yZS5mb3JFYWNoKChhcnIyLCBuZHgpID0+IHtcbiAgICAgIGlmIChhcnJbMF0gPT09IGFycjJbMF0gJiYgYXJyWzFdID09PSBhcnIyWzFdICYmIGFyclsyXSA9PT0gYXJyMlsyXSkge1xuICAgICAgICBwcmV2ZW50TXV0W25keF0gPSBbcGFyc2VGbG9hdCh4KSwgcGFyc2VGbG9hdCh5KSwgcGFyc2VGbG9hdCh6KV07XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IGZpbmFsQXJyOiBudW1iZXJbXSA9IFtdO1xuXG4gIHByZXZlbnRNdXQuZm9yRWFjaCgoYXJyKSA9PiB7XG4gICAgY29uc3QgW3gsIHksIHpdID0gYXJyO1xuICAgIGZpbmFsQXJyLnB1c2goeCk7XG4gICAgZmluYWxBcnIucHVzaCh5KTtcbiAgICBmaW5hbEFyci5wdXNoKHopO1xuICB9KTtcblxuICBwb3NpdGlvbi5zZXQoZmluYWxBcnIpO1xufTtcblxuY29uc3QgY3JlYXRlQXN0ZXJvaWRzID0gKGVhcnRoT3JiaXQ6IFRIUkVFLk9iamVjdDNELCBkYXRhOiBEYXRhU29ydGVyKSA9PiB7XG4gIGNvbnN0IG5lb3MgPSBkYXRhLm5lb0FycjtcblxuICBjb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xuICBjb25zdCB0ZXh0dXJlID0gbG9hZGVyLmxvYWQoYXN0ZXJvaWRJbWcpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmVvcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IG5lbyA9IG5lb3NbaV07XG5cbiAgICBjb25zdCBhc3Rlcm9pZE9yYml0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgZWFydGhPcmJpdC5hZGQoYXN0ZXJvaWRPcmJpdCk7XG4gICAgY29uc3Qge1xuICAgICAgZXN0aW1hdGVkRGlhbWV0ZXJNYXg6IG1heCxcbiAgICAgIGVzdGltYXRlZERpYW1ldGVyTWluOiBtaW4sXG4gICAgICBtaXNzRGlzdGFuY2U6IGRpc3RhbmNlU3RyLFxuICAgICAgaWQsXG4gICAgfSA9IG5lbztcbiAgICBjb25zdCBkaXN0YW5jZSA9IHBhcnNlRmxvYXQoZGlzdGFuY2VTdHIpO1xuXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuT2N0YWhlZHJvbkdlb21ldHJ5KDEsIDEpO1xuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtcbiAgICAgIG1hcDogdGV4dHVyZSxcbiAgICAgIGVtaXNzaXZlOiBcImJsYWNrXCIsXG4gICAgICBlbWlzc2l2ZUludGVuc2l0eTogMSxcbiAgICAgIHNwZWN1bGFyOiBcIndoaXRlXCIsXG4gICAgfSk7XG4gICAgY29uc3QgYXN0ZXJvaWQgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgIGNvbnN0IHJhbmRvbSA9IHJhbmRvbVBvc2l0aW9uKGlkLCBiYXNlTG9nKGRpc3RhbmNlIC8gMTAsIDEzKSk7XG4gICAgYXN0ZXJvaWQucG9zaXRpb24uc2V0KHJhbmRvbS54LCByYW5kb20ueSwgcmFuZG9tLnopO1xuICAgIGlmIChcbiAgICAgIGFzdGVyb2lkLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24gaW5zdGFuY2VvZiBUSFJFRS5CdWZmZXJBdHRyaWJ1dGVcbiAgICApIHtcbiAgICAgIHNoYXBlQXN0ZXJvaWRzKGFzdGVyb2lkLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24pO1xuICAgIH1cbiAgICBhc3Rlcm9pZC5zY2FsZS5zZXQoMC4wNSwgMC4wNSwgMC4wNSk7XG4gICAgYXN0ZXJvaWRPcmJpdC5hZGQoYXN0ZXJvaWQpO1xuICAgIGFuaW1hdGlvbnMuYXN0ZXJvaWRzLnB1c2goYXN0ZXJvaWQpO1xuICB9XG59O1xuXG5jb25zdCBpbml0ID0gKGRhdGE6IERhdGFTb3J0ZXIpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjXCIpO1xuICBjb25zdCBjZW50ZXIgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKTtcblxuICBpZiAoY2FudmFzIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgY2FudmFzIH0pO1xuICAgIGNvbnN0IHNjZW5lID0gY3JlYXRlU2NlbmUocmVuZGVyZXIpO1xuICAgIGNvbnN0IGNhbWVyYSA9IGNyZWF0ZUNhbWVyYShzY2VuZSk7XG4gICAgY3JlYXRlT3JiaXRDb250cm9scyhjYW1lcmEsIGNhbnZhcywgY2VudGVyKTtcbiAgICBjcmVhdGVMaWdodGluZyhzY2VuZSk7XG4gICAgY29uc3QgZWFydGhPcmJpdCA9IGNyZWF0ZUVhcnRoT3JiaXQoc2NlbmUsIGNlbnRlcik7XG4gICAgY29uc3QgbHVuYXJFYXJ0aE9yYml0ID0gY3JlYXRlTHVuYXJFYXJ0aE9yYml0KGVhcnRoT3JiaXQpO1xuICAgIGNyZWF0ZUVhcnRoKGx1bmFyRWFydGhPcmJpdCk7XG4gICAgY29uc3QgbW9vbk9yYml0ID0gY3JlYXRlTW9vbk9yYml0KGx1bmFyRWFydGhPcmJpdCk7XG4gICAgY3JlYXRlTW9vbihtb29uT3JiaXQpO1xuICAgIGNyZWF0ZUFzdGVyb2lkcyhlYXJ0aE9yYml0LCBkYXRhKTtcbiAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gICAgYW5pbWF0ZShyZW5kZXJlciwgc2NlbmUsIGNhbWVyYSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG4iLCJjb25zdCBiYXNlTG9nID0gKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiBNYXRoLmxvZyh4KSAvIE1hdGgubG9nKHkpO1xuXG5jb25zdCBwc2V1ZG9SYW5kb20gPSAoaWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBudW1iZXIgPSBwYXJzZUZsb2F0KGlkKTtcbiAgY29uc3Qgc3VtID0gaWRcbiAgICAuc3BsaXQoXCJcIilcbiAgICAubWFwKChudW0pID0+IHBhcnNlRmxvYXQobnVtKSlcbiAgICAucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYyArIGN1cnIsIDApO1xuICBjb25zdCB2YWx1ZSA9IChudW1iZXIgLSBzdW0pIC8gKG51bWJlciArIHN1bSk7XG4gIGNvbnN0IHZhbHVlQXJyID0gdmFsdWVcbiAgICAudG9TdHJpbmcoKVxuICAgIC5zcGxpdChcIlwiKVxuICAgIC5maWx0ZXIoKHN0cikgPT4ge1xuICAgICAgaWYgKHN0ciAhPT0gXCIuXCIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICB2YWx1ZUFyclt2YWx1ZUFyci5sZW5ndGggLSAxXSA9IFwiMFwiO1xuICB2YWx1ZUFyclt2YWx1ZUFyci5sZW5ndGggLSAyXSA9IFwiLlwiO1xuICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KHZhbHVlQXJyLnJldmVyc2UoKS5qb2luKFwiXCIpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cbmNvbnN0IHJhbmRvbVBvc2l0aW9uID0gKGlkOiBzdHJpbmcsIGRpc3RhbmNlOiBudW1iZXIpID0+IHtcbiAgY29uc3QgdmFsdWUxID0gcHNldWRvUmFuZG9tKGAke2lkfTEyMzQ1YCkgKiBkaXN0YW5jZTtcbiAgY29uc3QgdmFsdWUyID1cbiAgICBwc2V1ZG9SYW5kb20oaWQgKyBpZCkgKiAocHNldWRvUmFuZG9tKGAke2lkfTUzMjQxYCkgPiAwLjUgPyAtMSA6IDEpO1xuICBjb25zdCBpbnRlcm1lZGlhdGUgPSB2YWx1ZTEgKiogMiArIHZhbHVlMiAqKiAyO1xuICBjb25zdCB2YWx1ZTMgPSAoZGlzdGFuY2UgKiogMiAtIGludGVybWVkaWF0ZSkgKiogMC41O1xuXG4gIGNvbnN0IHJhbmRvbSA9IHBzZXVkb1JhbmRvbShpZCArIGlkKSAqIDI7XG5cbiAgaWYgKHJhbmRvbSA+IDEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogdmFsdWUxICogKHBzZXVkb1JhbmRvbShgJHtpZH04NzYwNWApID4gMC41ID8gMSA6IC0xKSxcbiAgICAgIHk6IHZhbHVlMixcbiAgICAgIHo6IHZhbHVlMyAqIChwc2V1ZG9SYW5kb20oaWQgKyBpZCkgPiAwLjUgPyAxIDogLTEpLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IHZhbHVlMyAqIChwc2V1ZG9SYW5kb20oYCR7aWR9MjEzOThgKSA+IDAuNSA/IDEgOiAtMSksXG4gICAgeTogdmFsdWUyLFxuICAgIHo6IHZhbHVlMSAqIChwc2V1ZG9SYW5kb20oaWQgKyBpZCkgPiAwLjUgPyAxIDogLTEpLFxuICB9O1xufTtcblxuZXhwb3J0IHsgYmFzZUxvZywgcmFuZG9tUG9zaXRpb24gfTtcbiJdLCJuYW1lcyI6WyJUSFJFRSIsIk9yYml0Q29udHJvbHMiLCJiYXNlTG9nIiwicmFuZG9tUG9zaXRpb24iLCJnYWxheHkiLCJlYXJ0aG1hcCIsImVhcnRoYnVtcCIsImVhcnRoY2xvdWQiLCJtb29uIiwibW9vbmJ1bXAiLCJhc3Rlcm9pZEltZyIsImFuaW1hdGlvbnMiLCJjbG91ZCIsImVhcnRoIiwiYXN0ZXJvaWRzIiwibHVuYXJFYXJ0aCIsImVhcnRoT3JiaXQiLCJjYW1lcmFzIiwiY3JlYXRlU2NlbmUiLCJyZW5kZXJlciIsInNjZW5lIiwiU2NlbmUiLCJsb2FkZXIiLCJUZXh0dXJlTG9hZGVyIiwidGV4dHVyZSIsImxvYWQiLCJpbWFnZSIsIkhUTUxJbWFnZUVsZW1lbnQiLCJydCIsIldlYkdMQ3ViZVJlbmRlclRhcmdldCIsImhlaWdodCIsImZyb21FcXVpcmVjdGFuZ3VsYXJUZXh0dXJlIiwiYmFja2dyb3VuZCIsImNyZWF0ZUNhbWVyYSIsImZvdiIsImFzcGVjdCIsIm5lYXIiLCJmYXIiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInBvc2l0aW9uIiwic2V0IiwiYWRkIiwiY3JlYXRlT3JiaXRDb250cm9scyIsImNhbnZhcyIsImNlbnRlciIsImNvbnRyb2xzIiwidGFyZ2V0IiwiY29weSIsIlZlY3RvcjMiLCJ1cGRhdGUiLCJjcmVhdGVMaWdodGluZyIsImNvbG9yIiwiaW50ZW5zaXR5IiwibGlnaHRpbmciLCJEaXJlY3Rpb25hbExpZ2h0IiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwicmVzaXplUmVuZGVyZXJUb0Rpc3BsYXlTaXplIiwiZG9tRWxlbWVudCIsIm5lZWRzUmVzaXplIiwiY2xpZW50V2lkdGgiLCJ3aWR0aCIsImNsaWVudEhlaWdodCIsInNldFNpemUiLCJhbmltYXRlIiwicmVuZGVyIiwidGltZSIsInRpbWVJblNlY29uZHMiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiZm9yRWFjaCIsIm9iamVjdCIsInJvdGF0aW9uIiwieSIsIm5keCIsIngiLCJ6Iiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY3JlYXRlRWFydGhPcmJpdCIsIk9iamVjdDNEIiwibXlBeGlzIiwicm90YXRlT25BeGlzIiwiTWF0aFV0aWxzIiwiZGVnVG9SYWQiLCJwdXNoIiwiY3JlYXRlTHVuYXJFYXJ0aE9yYml0IiwibHVuYXJFYXJ0aE9yYml0IiwiY3JlYXRlRWFydGgiLCJiYXNlIiwiZ2VvbWV0cnkiLCJTcGhlcmVHZW9tZXRyeSIsImNsb3VkR2VvbWV0cnkiLCJidW1wVGV4dHVyZSIsImNsb3VkVGV4dHVyZSIsIm1hdGVyaWFsIiwiTWVzaFBob25nTWF0ZXJpYWwiLCJtYXAiLCJidW1wTWFwIiwiYnVtcFNjYWxlIiwiY2xvdWRNYXRlcmlhbCIsInRyYW5zcGFyZW50Iiwib3BhY2l0eSIsImdyb3VuZCIsIk1lc2giLCJjcmVhdGVNb29uT3JiaXQiLCJtb29uT3JiaXQiLCJjcmVhdGVNb29uIiwibW9vblRleHR1cmUiLCJtb29uTWVzaCIsInNoYXBlQXN0ZXJvaWRzIiwiYXJyTGlrZSIsImFycmF5IiwiY2hlY2siLCJwb3NpdGlvblN0b3JlIiwicG9zaXRpb25BcnIiLCJBcnJheSIsImZyb20iLCJudW1iZXIiLCJsZW5ndGgiLCJ1bmlxdWVWYWx1ZXMiLCJhcnIiLCJ2YWwiLCJhcnIyIiwicHJldmVudE11dCIsIk1hdGgiLCJyYW5kb20iLCJ0b0ZpeGVkIiwicGFyc2VGbG9hdCIsImZpbmFsQXJyIiwiY3JlYXRlQXN0ZXJvaWRzIiwiZGF0YSIsIm5lb3MiLCJuZW9BcnIiLCJpIiwibmVvIiwiYXN0ZXJvaWRPcmJpdCIsIm1heCIsImVzdGltYXRlZERpYW1ldGVyTWF4IiwibWluIiwiZXN0aW1hdGVkRGlhbWV0ZXJNaW4iLCJkaXN0YW5jZVN0ciIsIm1pc3NEaXN0YW5jZSIsImlkIiwiZGlzdGFuY2UiLCJPY3RhaGVkcm9uR2VvbWV0cnkiLCJlbWlzc2l2ZSIsImVtaXNzaXZlSW50ZW5zaXR5Iiwic3BlY3VsYXIiLCJhc3Rlcm9pZCIsImF0dHJpYnV0ZXMiLCJCdWZmZXJBdHRyaWJ1dGUiLCJzY2FsZSIsImluaXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJIVE1MQ2FudmFzRWxlbWVudCIsIldlYkdMUmVuZGVyZXIiLCJsb2ciLCJwc2V1ZG9SYW5kb20iLCJzdW0iLCJzcGxpdCIsIm51bSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ2YWx1ZSIsInZhbHVlQXJyIiwidG9TdHJpbmciLCJmaWx0ZXIiLCJzdHIiLCJyZXZlcnNlIiwiam9pbiIsInZhbHVlMSIsInZhbHVlMiIsImludGVybWVkaWF0ZSIsInZhbHVlMyJdLCJzb3VyY2VSb290IjoiIn0=