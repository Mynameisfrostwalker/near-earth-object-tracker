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











var objects = [];
var asteroids = [];

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

    objects.forEach(function (object, ndx) {
      object.rotation.y = timeInSeconds * 0.02 + 0.02 * ndx;
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
  return earthOrbit;
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
  objects.push(ground);
  objects.push(cloud);
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
  objects.push(moonMesh);
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
  var neos = data.near_earth_objects;
  var keys = Object.keys(neos);
  var loader = new three__WEBPACK_IMPORTED_MODULE_9__.TextureLoader();
  var texture = loader.load(_assets_asteroid_jpg__WEBPACK_IMPORTED_MODULE_8__);

  for (var i = 0; i < keys.length; i += 1) {
    if (keys[i] in neos) {
      var neo = neos[keys[i]];

      for (var j = 0; j < neo.length; j += 1) {
        var asteroidOrbit = new three__WEBPACK_IMPORTED_MODULE_9__.Object3D();
        earthOrbit.add(asteroidOrbit);
        var _neo$j$estimated_diam = neo[j].estimated_diameter.kilometers,
            max = _neo$j$estimated_diam.estimated_diameter_max,
            min = _neo$j$estimated_diam.estimated_diameter_min;
        var distance = parseFloat(neo[j].close_approach_data[0].miss_distance.kilometers);
        var id = neo[j].id;
        var diameter = (max + min) / 2;
        var geometry = new three__WEBPACK_IMPORTED_MODULE_9__.OctahedronGeometry(1, 1);
        var material = new three__WEBPACK_IMPORTED_MODULE_9__.MeshPhongMaterial({
          map: texture,
          emissive: "black",
          emissiveIntensity: 2
        });
        var asteroid = new three__WEBPACK_IMPORTED_MODULE_9__.Mesh(geometry, material);
        var random = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.randomPosition)(id, (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.baseLog)(distance / 10, 13));
        asteroid.position.set(random.x, random.y, random.z);

        if (asteroid.geometry.attributes.position instanceof three__WEBPACK_IMPORTED_MODULE_9__.BufferAttribute) {
          shapeAsteroids(asteroid.geometry.attributes.position);
        }

        asteroid.scale.set(0.05, 0.05, 0.05);
        asteroidOrbit.add(asteroid);
      }
    }
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
    createEarth(earthOrbit);
    var moonOrbit = createMoonOrbit(earthOrbit);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBSEosQ0FBUDtFQUtEOztFQUVELE9BQU87SUFDTHRFLENBQUMsRUFBRXNHLE1BQU0sSUFBSWpCLFlBQVksV0FBSWYsRUFBSixXQUFaLEdBQTZCLEdBQTdCLEdBQW1DLENBQW5DLEdBQXVDLENBQUMsQ0FBNUMsQ0FESjtJQUVMNUUsQ0FBQyxFQUFFMEcsTUFGRTtJQUdMbkcsQ0FBQyxFQUFFa0csTUFBTSxJQUFJZCxZQUFZLENBQUNmLEVBQUUsR0FBR0EsRUFBTixDQUFaLEdBQXdCLEdBQXhCLEdBQThCLENBQTlCLEdBQWtDLENBQUMsQ0FBdkM7RUFISixDQUFQO0FBS0QsQ0F0QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZWFyLWVhcnRoLW9iamVjdC10cmFja2VyLy4vc3JjL3NjcmlwdHMvcmVuZGVyLnRzIiwid2VicGFjazovL25lYXItZWFydGgtb2JqZWN0LXRyYWNrZXIvLi9zcmMvc2NyaXB0cy91dGlsaXRpZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzXCI7XG5pbXBvcnQgdHlwZSB7IERhdGEgfSBmcm9tIFwiLi9mZXRjaERhdGFcIjtcbmltcG9ydCB7IGJhc2VMb2csIHJhbmRvbVBvc2l0aW9uIH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5pbXBvcnQgZ2FsYXh5IGZyb20gXCIuLi9hc3NldHMvZ2FsYXh5Mi5qcGdcIjtcbmltcG9ydCBlYXJ0aG1hcCBmcm9tIFwiLi4vYXNzZXRzL2VhcnRobWFwMWsuanBnXCI7XG5pbXBvcnQgZWFydGhidW1wIGZyb20gXCIuLi9hc3NldHMvZWFydGhidW1wLmpwZ1wiO1xuaW1wb3J0IGVhcnRoY2xvdWQgZnJvbSBcIi4uL2Fzc2V0cy9lYXJ0aENsb3VkLnBuZ1wiO1xuaW1wb3J0IG1vb24gZnJvbSBcIi4uL2Fzc2V0cy9tb29uLmpwZ1wiO1xuaW1wb3J0IG1vb25idW1wIGZyb20gXCIuLi9hc3NldHMvbW9vbmJ1bXAuanBnXCI7XG5pbXBvcnQgYXN0ZXJvaWRJbWcgZnJvbSBcIi4uL2Fzc2V0cy9hc3Rlcm9pZC5qcGdcIjtcblxuY29uc3Qgb2JqZWN0czogVEhSRUUuTWVzaFtdID0gW107XG5jb25zdCBhc3Rlcm9pZHM6IFRIUkVFLk1lc2hbXSA9IFtdO1xuXG5jb25zdCBjcmVhdGVTY2VuZSA9IChyZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlcikgPT4ge1xuICBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICBjb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xuICBjb25zdCB0ZXh0dXJlID0gbG9hZGVyLmxvYWQoZ2FsYXh5LCAoKSA9PiB7XG4gICAgaWYgKHRleHR1cmUuaW1hZ2UgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgICBjb25zdCBydCA9IG5ldyBUSFJFRS5XZWJHTEN1YmVSZW5kZXJUYXJnZXQodGV4dHVyZS5pbWFnZS5oZWlnaHQpO1xuICAgICAgcnQuZnJvbUVxdWlyZWN0YW5ndWxhclRleHR1cmUocmVuZGVyZXIsIHRleHR1cmUpO1xuICAgICAgc2NlbmUuYmFja2dyb3VuZCA9IHJ0LnRleHR1cmU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHNjZW5lO1xufTtcblxuY29uc3QgY3JlYXRlQ2FtZXJhID0gKHNjZW5lOiBUSFJFRS5TY2VuZSkgPT4ge1xuICBjb25zdCBmb3YgPSA3NTtcbiAgY29uc3QgYXNwZWN0ID0gMjtcbiAgY29uc3QgbmVhciA9IDAuMTtcbiAgY29uc3QgZmFyID0gMjU7XG5cbiAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKGZvdiwgYXNwZWN0LCBuZWFyLCBmYXIpO1xuICBjYW1lcmEucG9zaXRpb24uc2V0KDAsIDAsIDUpO1xuXG4gIHNjZW5lLmFkZChjYW1lcmEpO1xuXG4gIHJldHVybiBjYW1lcmE7XG59O1xuXG5jb25zdCBjcmVhdGVPcmJpdENvbnRyb2xzID0gKFxuICBjYW1lcmE6IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhLFxuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuICBjZW50ZXI6IFRIUkVFLlZlY3RvcjNcbikgPT4ge1xuICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgY2FudmFzKTtcbiAgY29udHJvbHMudGFyZ2V0LmNvcHkoY2VudGVyKS5hZGQobmV3IFRIUkVFLlZlY3RvcjMoLTEsIC0xLCAwKSk7XG4gIGNvbnRyb2xzLnVwZGF0ZSgpO1xufTtcblxuY29uc3QgY3JlYXRlTGlnaHRpbmcgPSAoc2NlbmU6IFRIUkVFLlNjZW5lKSA9PiB7XG4gIGNvbnN0IGNvbG9yID0gMHhmZmZmZmY7XG4gIGNvbnN0IGludGVuc2l0eSA9IDE7XG4gIGNvbnN0IGxpZ2h0aW5nID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoY29sb3IsIGludGVuc2l0eSk7XG4gIGxpZ2h0aW5nLnBvc2l0aW9uLnNldCgyLCAyLCA0KTtcbiAgc2NlbmUuYWRkKGxpZ2h0aW5nKTtcblxuICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KGNvbG9yLCBpbnRlbnNpdHkgLyA1KTtcbiAgc2NlbmUuYWRkKGFtYmllbnRMaWdodCk7XG59O1xuXG5jb25zdCByZXNpemVSZW5kZXJlclRvRGlzcGxheVNpemUgPSAocmVuZGVyZXI6IFRIUkVFLldlYkdMUmVuZGVyZXIpID0+IHtcbiAgY29uc3QgY2FudmFzID0gcmVuZGVyZXIuZG9tRWxlbWVudDtcbiAgY29uc3QgbmVlZHNSZXNpemUgPVxuICAgIGNhbnZhcy5jbGllbnRXaWR0aCAhPT0gY2FudmFzLndpZHRoIHx8XG4gICAgY2FudmFzLmNsaWVudEhlaWdodCAhPT0gY2FudmFzLmhlaWdodDtcblxuICBpZiAobmVlZHNSZXNpemUpIHtcbiAgICByZW5kZXJlci5zZXRTaXplKGNhbnZhcy5jbGllbnRXaWR0aCwgY2FudmFzLmNsaWVudEhlaWdodCwgZmFsc2UpO1xuICB9XG5cbiAgcmV0dXJuIG5lZWRzUmVzaXplO1xufTtcblxuY29uc3QgYW5pbWF0ZSA9IChcbiAgcmVuZGVyZXI6IFRIUkVFLldlYkdMUmVuZGVyZXIsXG4gIHNjZW5lOiBUSFJFRS5TY2VuZSxcbiAgY2FtZXJhOiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYVxuKSA9PiB7XG4gIGNvbnN0IHJlbmRlciA9ICh0aW1lOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB0aW1lSW5TZWNvbmRzID0gdGltZSAqIDAuMDAxO1xuXG4gICAgY29uc3QgY2FudmFzID0gcmVuZGVyZXIuZG9tRWxlbWVudDtcbiAgICBjYW1lcmEuYXNwZWN0ID0gY2FudmFzLmNsaWVudFdpZHRoIC8gY2FudmFzLmNsaWVudEhlaWdodDtcbiAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG4gICAgaWYgKHJlc2l6ZVJlbmRlcmVyVG9EaXNwbGF5U2l6ZShyZW5kZXJlcikpIHtcbiAgICAgIGNhbWVyYS5hc3BlY3QgPSBjYW52YXMuY2xpZW50V2lkdGggLyBjYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICB9XG5cbiAgICBvYmplY3RzLmZvckVhY2goKG9iamVjdCwgbmR4KSA9PiB7XG4gICAgICBvYmplY3Qucm90YXRpb24ueSA9IHRpbWVJblNlY29uZHMgKiAwLjAyICsgMC4wMiAqIG5keDtcbiAgICB9KTtcblxuICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgfTtcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xufTtcblxuY29uc3QgY3JlYXRlRWFydGhPcmJpdCA9IChzY2VuZTogVEhSRUUuU2NlbmUsIGNlbnRlcjogVEhSRUUuVmVjdG9yMykgPT4ge1xuICBjb25zdCBlYXJ0aE9yYml0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gIGVhcnRoT3JiaXQucG9zaXRpb24uc2V0KGNlbnRlci54LCBjZW50ZXIueSwgY2VudGVyLnopO1xuICBjb25zdCBteUF4aXMgPSBuZXcgVEhSRUUuVmVjdG9yMygxLCAtMSwgMCk7XG4gIGVhcnRoT3JiaXQucm90YXRlT25BeGlzKG15QXhpcywgVEhSRUUuTWF0aFV0aWxzLmRlZ1RvUmFkKDIzLjUpKTtcbiAgc2NlbmUuYWRkKGVhcnRoT3JiaXQpO1xuICByZXR1cm4gZWFydGhPcmJpdDtcbn07XG5cbmNvbnN0IGNyZWF0ZUVhcnRoID0gKGJhc2U6IFRIUkVFLk9iamVjdDNEKSA9PiB7XG4gIGNvbnN0IGVhcnRoID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG5cbiAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMSk7XG4gIGNvbnN0IGNsb3VkR2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMS4wMDkpO1xuXG4gIGNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XG4gIGNvbnN0IHRleHR1cmUgPSBsb2FkZXIubG9hZChlYXJ0aG1hcCk7XG4gIGNvbnN0IGJ1bXBUZXh0dXJlID0gbG9hZGVyLmxvYWQoZWFydGhidW1wKTtcbiAgY29uc3QgY2xvdWRUZXh0dXJlID0gbG9hZGVyLmxvYWQoZWFydGhjbG91ZCk7XG5cbiAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe1xuICAgIG1hcDogdGV4dHVyZSxcbiAgICBidW1wTWFwOiBidW1wVGV4dHVyZSxcbiAgICBidW1wU2NhbGU6IDAuNixcbiAgfSk7XG4gIGNvbnN0IGNsb3VkTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe1xuICAgIG1hcDogY2xvdWRUZXh0dXJlLFxuICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgIG9wYWNpdHk6IDAuNSxcbiAgfSk7XG5cbiAgY29uc3QgZ3JvdW5kID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgY29uc3QgY2xvdWQgPSBuZXcgVEhSRUUuTWVzaChjbG91ZEdlb21ldHJ5LCBjbG91ZE1hdGVyaWFsKTtcblxuICBlYXJ0aC5hZGQoZ3JvdW5kKTtcbiAgZWFydGguYWRkKGNsb3VkKTtcbiAgb2JqZWN0cy5wdXNoKGdyb3VuZCk7XG4gIG9iamVjdHMucHVzaChjbG91ZCk7XG5cbiAgY29uc3QgbXlBeGlzID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMSk7XG4gIGVhcnRoLnJvdGF0ZU9uQXhpcyhteUF4aXMsIFRIUkVFLk1hdGhVdGlscy5kZWdUb1JhZCgyMy41KSk7XG5cbiAgYmFzZS5hZGQoZWFydGgpO1xuXG4gIHJldHVybiBlYXJ0aDtcbn07XG5cbmNvbnN0IGNyZWF0ZU1vb25PcmJpdCA9IChlYXJ0aE9yYml0OiBUSFJFRS5PYmplY3QzRCkgPT4ge1xuICBjb25zdCBtb29uT3JiaXQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgbW9vbk9yYml0LnBvc2l0aW9uLnNldCgyICoqIDAuNSwgMiAqKiAwLjUsIDApO1xuICBlYXJ0aE9yYml0LmFkZChtb29uT3JiaXQpO1xuICByZXR1cm4gbW9vbk9yYml0O1xufTtcblxuY29uc3QgY3JlYXRlTW9vbiA9IChtb29uT3JiaXQ6IFRIUkVFLk9iamVjdDNEKSA9PiB7XG4gIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDAuNDMpO1xuXG4gIGNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XG4gIGNvbnN0IG1vb25UZXh0dXJlID0gbG9hZGVyLmxvYWQobW9vbik7XG4gIGNvbnN0IGJ1bXBUZXh0dXJlID0gbG9hZGVyLmxvYWQobW9vbmJ1bXApO1xuICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XG4gICAgbWFwOiBtb29uVGV4dHVyZSxcbiAgICBidW1wTWFwOiBidW1wVGV4dHVyZSxcbiAgICBidW1wU2NhbGU6IDAuMixcbiAgfSk7XG5cbiAgY29uc3QgbW9vbk1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuXG4gIG1vb25PcmJpdC5hZGQobW9vbk1lc2gpO1xuICBvYmplY3RzLnB1c2gobW9vbk1lc2gpO1xufTtcblxuY29uc3Qgc2hhcGVBc3Rlcm9pZHMgPSAocG9zaXRpb246IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSkgPT4ge1xuICBjb25zdCBhcnJMaWtlID0gcG9zaXRpb24uYXJyYXk7XG4gIGxldCBjaGVjayA9IDA7XG4gIGNvbnN0IHBvc2l0aW9uU3RvcmU6IG51bWJlcltdW10gPSBbW11dO1xuICBjb25zdCBwb3NpdGlvbkFyciA9IEFycmF5LmZyb20oYXJyTGlrZSk7XG4gIHBvc2l0aW9uQXJyLmZvckVhY2goKG51bWJlcikgPT4ge1xuICAgIGlmIChjaGVjayA+IDIpIHtcbiAgICAgIGNoZWNrID0gMTtcbiAgICAgIHBvc2l0aW9uU3RvcmVbcG9zaXRpb25TdG9yZS5sZW5ndGhdID0gW251bWJlcl07XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvc2l0aW9uU3RvcmVbcG9zaXRpb25TdG9yZS5sZW5ndGggLSAxXS5wdXNoKG51bWJlcik7XG4gICAgICBjaGVjayArPSAxO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgdW5pcXVlVmFsdWVzOiBudW1iZXJbXVtdID0gW107XG4gIHBvc2l0aW9uU3RvcmUuZm9yRWFjaCgoYXJyKSA9PiB7XG4gICAgaWYgKHVuaXF1ZVZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHVuaXF1ZVZhbHVlcy5wdXNoKGFycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWwgPSB0cnVlO1xuICAgICAgdW5pcXVlVmFsdWVzLmZvckVhY2goKGFycjIpID0+IHtcbiAgICAgICAgaWYgKGFyclswXSA9PT0gYXJyMlswXSAmJiBhcnJbMV0gPT09IGFycjJbMV0gJiYgYXJyWzJdID09PSBhcnIyWzJdKSB7XG4gICAgICAgICAgdmFsID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICB1bmlxdWVWYWx1ZXMucHVzaChhcnIpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgcHJldmVudE11dDogbnVtYmVyW11bXSA9IFtdO1xuICB1bmlxdWVWYWx1ZXMuZm9yRWFjaCgoYXJyKSA9PiB7XG4gICAgY29uc3QgeCA9IChhcnJbMF0gKyAtMC4yNSArIE1hdGgucmFuZG9tKCkgKiAwLjUpLnRvRml4ZWQoMSk7XG4gICAgY29uc3QgeSA9IChhcnJbMV0gKyAtMC4yNSArIE1hdGgucmFuZG9tKCkgKiAwLjUpLnRvRml4ZWQoMSk7XG4gICAgY29uc3QgeiA9IChhcnJbMl0gKyAtMC4yNSArIE1hdGgucmFuZG9tKCkgKiAwLjUpLnRvRml4ZWQoMSk7XG5cbiAgICBwb3NpdGlvblN0b3JlLmZvckVhY2goKGFycjIsIG5keCkgPT4ge1xuICAgICAgaWYgKGFyclswXSA9PT0gYXJyMlswXSAmJiBhcnJbMV0gPT09IGFycjJbMV0gJiYgYXJyWzJdID09PSBhcnIyWzJdKSB7XG4gICAgICAgIHByZXZlbnRNdXRbbmR4XSA9IFtwYXJzZUZsb2F0KHgpLCBwYXJzZUZsb2F0KHkpLCBwYXJzZUZsb2F0KHopXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgZmluYWxBcnI6IG51bWJlcltdID0gW107XG5cbiAgcHJldmVudE11dC5mb3JFYWNoKChhcnIpID0+IHtcbiAgICBjb25zdCBbeCwgeSwgel0gPSBhcnI7XG4gICAgZmluYWxBcnIucHVzaCh4KTtcbiAgICBmaW5hbEFyci5wdXNoKHkpO1xuICAgIGZpbmFsQXJyLnB1c2goeik7XG4gIH0pO1xuXG4gIHBvc2l0aW9uLnNldChmaW5hbEFycik7XG59O1xuXG5jb25zdCBjcmVhdGVBc3Rlcm9pZHMgPSAoZWFydGhPcmJpdDogVEhSRUUuT2JqZWN0M0QsIGRhdGE6IERhdGEpID0+IHtcbiAgY29uc3QgbmVvcyA9IGRhdGEubmVhcl9lYXJ0aF9vYmplY3RzO1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMobmVvcyk7XG5cbiAgY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcbiAgY29uc3QgdGV4dHVyZSA9IGxvYWRlci5sb2FkKGFzdGVyb2lkSW1nKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoa2V5c1tpXSBpbiBuZW9zKSB7XG4gICAgICBjb25zdCBuZW8gPSBuZW9zW2tleXNbaV1dO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5lby5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBhc3Rlcm9pZE9yYml0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgICAgIGVhcnRoT3JiaXQuYWRkKGFzdGVyb2lkT3JiaXQpO1xuXG4gICAgICAgIGNvbnN0IHsgZXN0aW1hdGVkX2RpYW1ldGVyX21heDogbWF4LCBlc3RpbWF0ZWRfZGlhbWV0ZXJfbWluOiBtaW4gfSA9XG4gICAgICAgICAgbmVvW2pdLmVzdGltYXRlZF9kaWFtZXRlci5raWxvbWV0ZXJzO1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHBhcnNlRmxvYXQoXG4gICAgICAgICAgbmVvW2pdLmNsb3NlX2FwcHJvYWNoX2RhdGFbMF0ubWlzc19kaXN0YW5jZS5raWxvbWV0ZXJzXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IG5lb1tqXTtcblxuICAgICAgICBjb25zdCBkaWFtZXRlciA9IChtYXggKyBtaW4pIC8gMjtcbiAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuT2N0YWhlZHJvbkdlb21ldHJ5KDEsIDEpO1xuICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XG4gICAgICAgICAgbWFwOiB0ZXh0dXJlLFxuICAgICAgICAgIGVtaXNzaXZlOiBcImJsYWNrXCIsXG4gICAgICAgICAgZW1pc3NpdmVJbnRlbnNpdHk6IDIsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBhc3Rlcm9pZCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICAgIGNvbnN0IHJhbmRvbSA9IHJhbmRvbVBvc2l0aW9uKGlkLCBiYXNlTG9nKGRpc3RhbmNlIC8gMTAsIDEzKSk7XG4gICAgICAgIGFzdGVyb2lkLnBvc2l0aW9uLnNldChyYW5kb20ueCwgcmFuZG9tLnksIHJhbmRvbS56KTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGFzdGVyb2lkLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24gaW5zdGFuY2VvZiBUSFJFRS5CdWZmZXJBdHRyaWJ1dGVcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2hhcGVBc3Rlcm9pZHMoYXN0ZXJvaWQuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgYXN0ZXJvaWQuc2NhbGUuc2V0KDAuMDUsIDAuMDUsIDAuMDUpO1xuICAgICAgICBhc3Rlcm9pZE9yYml0LmFkZChhc3Rlcm9pZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBpbml0ID0gKGRhdGE6IERhdGEpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjXCIpO1xuICBjb25zdCBjZW50ZXIgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKTtcblxuICBpZiAoY2FudmFzIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgY2FudmFzIH0pO1xuICAgIGNvbnN0IHNjZW5lID0gY3JlYXRlU2NlbmUocmVuZGVyZXIpO1xuICAgIGNvbnN0IGNhbWVyYSA9IGNyZWF0ZUNhbWVyYShzY2VuZSk7XG4gICAgY3JlYXRlT3JiaXRDb250cm9scyhjYW1lcmEsIGNhbnZhcywgY2VudGVyKTtcbiAgICBjcmVhdGVMaWdodGluZyhzY2VuZSk7XG4gICAgY29uc3QgZWFydGhPcmJpdCA9IGNyZWF0ZUVhcnRoT3JiaXQoc2NlbmUsIGNlbnRlcik7XG4gICAgY3JlYXRlRWFydGgoZWFydGhPcmJpdCk7XG4gICAgY29uc3QgbW9vbk9yYml0ID0gY3JlYXRlTW9vbk9yYml0KGVhcnRoT3JiaXQpO1xuICAgIGNyZWF0ZU1vb24obW9vbk9yYml0KTtcbiAgICBjcmVhdGVBc3Rlcm9pZHMoZWFydGhPcmJpdCwgZGF0YSk7XG4gICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgIGFuaW1hdGUocmVuZGVyZXIsIHNjZW5lLCBjYW1lcmEpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuIiwiY29uc3QgYmFzZUxvZyA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gTWF0aC5sb2coeCkgLyBNYXRoLmxvZyh5KTtcblxuY29uc3QgcHNldWRvUmFuZG9tID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgbnVtYmVyID0gcGFyc2VGbG9hdChpZCk7XG4gIGNvbnN0IHN1bSA9IGlkXG4gICAgLnNwbGl0KFwiXCIpXG4gICAgLm1hcCgobnVtKSA9PiBwYXJzZUZsb2F0KG51bSkpXG4gICAgLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyLCAwKTtcbiAgY29uc3QgdmFsdWUgPSAobnVtYmVyIC0gc3VtKSAvIChudW1iZXIgKyBzdW0pO1xuICBjb25zdCB2YWx1ZUFyciA9IHZhbHVlXG4gICAgLnRvU3RyaW5nKClcbiAgICAuc3BsaXQoXCJcIilcbiAgICAuZmlsdGVyKChzdHIpID0+IHtcbiAgICAgIGlmIChzdHIgIT09IFwiLlwiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgdmFsdWVBcnJbdmFsdWVBcnIubGVuZ3RoIC0gMV0gPSBcIjBcIjtcbiAgdmFsdWVBcnJbdmFsdWVBcnIubGVuZ3RoIC0gMl0gPSBcIi5cIjtcbiAgY29uc3QgbnVtID0gcGFyc2VGbG9hdCh2YWx1ZUFyci5yZXZlcnNlKCkuam9pbihcIlwiKSk7XG4gIHJldHVybiBudW07XG59O1xuXG5jb25zdCByYW5kb21Qb3NpdGlvbiA9IChpZDogc3RyaW5nLCBkaXN0YW5jZTogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHZhbHVlMSA9IHBzZXVkb1JhbmRvbShgJHtpZH0xMjM0NWApICogZGlzdGFuY2U7XG4gIGNvbnN0IHZhbHVlMiA9XG4gICAgcHNldWRvUmFuZG9tKGlkICsgaWQpICogKHBzZXVkb1JhbmRvbShgJHtpZH01MzI0MWApID4gMC41ID8gLTEgOiAxKTtcbiAgY29uc3QgaW50ZXJtZWRpYXRlID0gdmFsdWUxICoqIDIgKyB2YWx1ZTIgKiogMjtcbiAgY29uc3QgdmFsdWUzID0gKGRpc3RhbmNlICoqIDIgLSBpbnRlcm1lZGlhdGUpICoqIDAuNTtcblxuICBjb25zdCByYW5kb20gPSBwc2V1ZG9SYW5kb20oaWQgKyBpZCkgKiAyO1xuXG4gIGlmIChyYW5kb20gPiAxKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHZhbHVlMSAqIChwc2V1ZG9SYW5kb20oYCR7aWR9ODc2MDVgKSA+IDAuNSA/IDEgOiAtMSksXG4gICAgICB5OiB2YWx1ZTIsXG4gICAgICB6OiB2YWx1ZTMgKiAocHNldWRvUmFuZG9tKGlkICsgaWQpID4gMC41ID8gMSA6IC0xKSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiB2YWx1ZTMgKiAocHNldWRvUmFuZG9tKGAke2lkfTIxMzk4YCkgPiAwLjUgPyAxIDogLTEpLFxuICAgIHk6IHZhbHVlMixcbiAgICB6OiB2YWx1ZTEgKiAocHNldWRvUmFuZG9tKGlkICsgaWQpID4gMC41ID8gMSA6IC0xKSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IGJhc2VMb2csIHJhbmRvbVBvc2l0aW9uIH07XG4iXSwibmFtZXMiOlsiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwiYmFzZUxvZyIsInJhbmRvbVBvc2l0aW9uIiwiZ2FsYXh5IiwiZWFydGhtYXAiLCJlYXJ0aGJ1bXAiLCJlYXJ0aGNsb3VkIiwibW9vbiIsIm1vb25idW1wIiwiYXN0ZXJvaWRJbWciLCJvYmplY3RzIiwiYXN0ZXJvaWRzIiwiY3JlYXRlU2NlbmUiLCJyZW5kZXJlciIsInNjZW5lIiwiU2NlbmUiLCJsb2FkZXIiLCJUZXh0dXJlTG9hZGVyIiwidGV4dHVyZSIsImxvYWQiLCJpbWFnZSIsIkhUTUxJbWFnZUVsZW1lbnQiLCJydCIsIldlYkdMQ3ViZVJlbmRlclRhcmdldCIsImhlaWdodCIsImZyb21FcXVpcmVjdGFuZ3VsYXJUZXh0dXJlIiwiYmFja2dyb3VuZCIsImNyZWF0ZUNhbWVyYSIsImZvdiIsImFzcGVjdCIsIm5lYXIiLCJmYXIiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInBvc2l0aW9uIiwic2V0IiwiYWRkIiwiY3JlYXRlT3JiaXRDb250cm9scyIsImNhbnZhcyIsImNlbnRlciIsImNvbnRyb2xzIiwidGFyZ2V0IiwiY29weSIsIlZlY3RvcjMiLCJ1cGRhdGUiLCJjcmVhdGVMaWdodGluZyIsImNvbG9yIiwiaW50ZW5zaXR5IiwibGlnaHRpbmciLCJEaXJlY3Rpb25hbExpZ2h0IiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwicmVzaXplUmVuZGVyZXJUb0Rpc3BsYXlTaXplIiwiZG9tRWxlbWVudCIsIm5lZWRzUmVzaXplIiwiY2xpZW50V2lkdGgiLCJ3aWR0aCIsImNsaWVudEhlaWdodCIsInNldFNpemUiLCJhbmltYXRlIiwicmVuZGVyIiwidGltZSIsInRpbWVJblNlY29uZHMiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiZm9yRWFjaCIsIm9iamVjdCIsIm5keCIsInJvdGF0aW9uIiwieSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNyZWF0ZUVhcnRoT3JiaXQiLCJlYXJ0aE9yYml0IiwiT2JqZWN0M0QiLCJ4IiwieiIsIm15QXhpcyIsInJvdGF0ZU9uQXhpcyIsIk1hdGhVdGlscyIsImRlZ1RvUmFkIiwiY3JlYXRlRWFydGgiLCJiYXNlIiwiZWFydGgiLCJnZW9tZXRyeSIsIlNwaGVyZUdlb21ldHJ5IiwiY2xvdWRHZW9tZXRyeSIsImJ1bXBUZXh0dXJlIiwiY2xvdWRUZXh0dXJlIiwibWF0ZXJpYWwiLCJNZXNoUGhvbmdNYXRlcmlhbCIsIm1hcCIsImJ1bXBNYXAiLCJidW1wU2NhbGUiLCJjbG91ZE1hdGVyaWFsIiwidHJhbnNwYXJlbnQiLCJvcGFjaXR5IiwiZ3JvdW5kIiwiTWVzaCIsImNsb3VkIiwicHVzaCIsImNyZWF0ZU1vb25PcmJpdCIsIm1vb25PcmJpdCIsImNyZWF0ZU1vb24iLCJtb29uVGV4dHVyZSIsIm1vb25NZXNoIiwic2hhcGVBc3Rlcm9pZHMiLCJhcnJMaWtlIiwiYXJyYXkiLCJjaGVjayIsInBvc2l0aW9uU3RvcmUiLCJwb3NpdGlvbkFyciIsIkFycmF5IiwiZnJvbSIsIm51bWJlciIsImxlbmd0aCIsInVuaXF1ZVZhbHVlcyIsImFyciIsInZhbCIsImFycjIiLCJwcmV2ZW50TXV0IiwiTWF0aCIsInJhbmRvbSIsInRvRml4ZWQiLCJwYXJzZUZsb2F0IiwiZmluYWxBcnIiLCJjcmVhdGVBc3Rlcm9pZHMiLCJkYXRhIiwibmVvcyIsIm5lYXJfZWFydGhfb2JqZWN0cyIsImtleXMiLCJPYmplY3QiLCJpIiwibmVvIiwiaiIsImFzdGVyb2lkT3JiaXQiLCJlc3RpbWF0ZWRfZGlhbWV0ZXIiLCJraWxvbWV0ZXJzIiwibWF4IiwiZXN0aW1hdGVkX2RpYW1ldGVyX21heCIsIm1pbiIsImVzdGltYXRlZF9kaWFtZXRlcl9taW4iLCJkaXN0YW5jZSIsImNsb3NlX2FwcHJvYWNoX2RhdGEiLCJtaXNzX2Rpc3RhbmNlIiwiaWQiLCJkaWFtZXRlciIsIk9jdGFoZWRyb25HZW9tZXRyeSIsImVtaXNzaXZlIiwiZW1pc3NpdmVJbnRlbnNpdHkiLCJhc3Rlcm9pZCIsImF0dHJpYnV0ZXMiLCJCdWZmZXJBdHRyaWJ1dGUiLCJzY2FsZSIsImluaXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJIVE1MQ2FudmFzRWxlbWVudCIsIldlYkdMUmVuZGVyZXIiLCJsb2ciLCJwc2V1ZG9SYW5kb20iLCJzdW0iLCJzcGxpdCIsIm51bSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ2YWx1ZSIsInZhbHVlQXJyIiwidG9TdHJpbmciLCJmaWx0ZXIiLCJzdHIiLCJyZXZlcnNlIiwiam9pbiIsInZhbHVlMSIsInZhbHVlMiIsImludGVybWVkaWF0ZSIsInZhbHVlMyJdLCJzb3VyY2VSb290IjoiIn0=