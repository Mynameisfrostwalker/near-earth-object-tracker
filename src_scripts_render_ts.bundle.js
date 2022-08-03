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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZW5kZXIudHMiLCJ3ZWJwYWNrOi8vbmVhci1lYXJ0aC1vYmplY3QtdHJhY2tlci8uL3NyYy9zY3JpcHRzL3V0aWxpdGllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHNcIjtcbmltcG9ydCB0eXBlIHsgRGF0YVNvcnRlciB9IGZyb20gXCIuL2ZldGNoRGF0YVwiO1xuaW1wb3J0IHsgYmFzZUxvZywgcmFuZG9tUG9zaXRpb24gfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcbmltcG9ydCBnYWxheHkgZnJvbSBcIi4uL2Fzc2V0cy9nYWxheHkyLmpwZ1wiO1xuaW1wb3J0IGVhcnRobWFwIGZyb20gXCIuLi9hc3NldHMvZWFydGhtYXAxay5qcGdcIjtcbmltcG9ydCBlYXJ0aGJ1bXAgZnJvbSBcIi4uL2Fzc2V0cy9lYXJ0aGJ1bXAuanBnXCI7XG5pbXBvcnQgZWFydGhjbG91ZCBmcm9tIFwiLi4vYXNzZXRzL2VhcnRoQ2xvdWQucG5nXCI7XG5pbXBvcnQgbW9vbiBmcm9tIFwiLi4vYXNzZXRzL21vb24uanBnXCI7XG5pbXBvcnQgbW9vbmJ1bXAgZnJvbSBcIi4uL2Fzc2V0cy9tb29uYnVtcC5qcGdcIjtcbmltcG9ydCBhc3Rlcm9pZEltZyBmcm9tIFwiLi4vYXNzZXRzL2FzdGVyb2lkLmpwZ1wiO1xuXG5jb25zdCBvYmplY3RzOiBUSFJFRS5NZXNoW10gPSBbXTtcbmNvbnN0IGFzdGVyb2lkczogVEhSRUUuTWVzaFtdID0gW107XG5cbmNvbnN0IGNyZWF0ZVNjZW5lID0gKHJlbmRlcmVyOiBUSFJFRS5XZWJHTFJlbmRlcmVyKSA9PiB7XG4gIGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gIGNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XG4gIGNvbnN0IHRleHR1cmUgPSBsb2FkZXIubG9hZChnYWxheHksICgpID0+IHtcbiAgICBpZiAodGV4dHVyZS5pbWFnZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHJ0ID0gbmV3IFRIUkVFLldlYkdMQ3ViZVJlbmRlclRhcmdldCh0ZXh0dXJlLmltYWdlLmhlaWdodCk7XG4gICAgICBydC5mcm9tRXF1aXJlY3Rhbmd1bGFyVGV4dHVyZShyZW5kZXJlciwgdGV4dHVyZSk7XG4gICAgICBzY2VuZS5iYWNrZ3JvdW5kID0gcnQudGV4dHVyZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc2NlbmU7XG59O1xuXG5jb25zdCBjcmVhdGVDYW1lcmEgPSAoc2NlbmU6IFRIUkVFLlNjZW5lKSA9PiB7XG4gIGNvbnN0IGZvdiA9IDc1O1xuICBjb25zdCBhc3BlY3QgPSAyO1xuICBjb25zdCBuZWFyID0gMC4xO1xuICBjb25zdCBmYXIgPSAyNTtcblxuICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoZm92LCBhc3BlY3QsIG5lYXIsIGZhcik7XG4gIGNhbWVyYS5wb3NpdGlvbi5zZXQoMCwgMCwgNSk7XG5cbiAgc2NlbmUuYWRkKGNhbWVyYSk7XG5cbiAgcmV0dXJuIGNhbWVyYTtcbn07XG5cbmNvbnN0IGNyZWF0ZU9yYml0Q29udHJvbHMgPSAoXG4gIGNhbWVyYTogVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEsXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXG4gIGNlbnRlcjogVEhSRUUuVmVjdG9yM1xuKSA9PiB7XG4gIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCBjYW52YXMpO1xuICBjb250cm9scy50YXJnZXQuY29weShjZW50ZXIpLmFkZChuZXcgVEhSRUUuVmVjdG9yMygtMSwgLTEsIDApKTtcbiAgY29udHJvbHMudXBkYXRlKCk7XG59O1xuXG5jb25zdCBjcmVhdGVMaWdodGluZyA9IChzY2VuZTogVEhSRUUuU2NlbmUpID0+IHtcbiAgY29uc3QgY29sb3IgPSAweGZmZmZmZjtcbiAgY29uc3QgaW50ZW5zaXR5ID0gMTtcbiAgY29uc3QgbGlnaHRpbmcgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodChjb2xvciwgaW50ZW5zaXR5KTtcbiAgbGlnaHRpbmcucG9zaXRpb24uc2V0KDIsIDIsIDQpO1xuICBzY2VuZS5hZGQobGlnaHRpbmcpO1xuXG4gIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoY29sb3IsIGludGVuc2l0eSAvIDUpO1xuICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcbn07XG5cbmNvbnN0IHJlc2l6ZVJlbmRlcmVyVG9EaXNwbGF5U2l6ZSA9IChyZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlcikgPT4ge1xuICBjb25zdCBjYW52YXMgPSByZW5kZXJlci5kb21FbGVtZW50O1xuICBjb25zdCBuZWVkc1Jlc2l6ZSA9XG4gICAgY2FudmFzLmNsaWVudFdpZHRoICE9PSBjYW52YXMud2lkdGggfHxcbiAgICBjYW52YXMuY2xpZW50SGVpZ2h0ICE9PSBjYW52YXMuaGVpZ2h0O1xuXG4gIGlmIChuZWVkc1Jlc2l6ZSkge1xuICAgIHJlbmRlcmVyLnNldFNpemUoY2FudmFzLmNsaWVudFdpZHRoLCBjYW52YXMuY2xpZW50SGVpZ2h0LCBmYWxzZSk7XG4gIH1cblxuICByZXR1cm4gbmVlZHNSZXNpemU7XG59O1xuXG5jb25zdCBhbmltYXRlID0gKFxuICByZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlcixcbiAgc2NlbmU6IFRIUkVFLlNjZW5lLFxuICBjYW1lcmE6IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhXG4pID0+IHtcbiAgY29uc3QgcmVuZGVyID0gKHRpbWU6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHRpbWVJblNlY29uZHMgPSB0aW1lICogMC4wMDE7XG5cbiAgICBjb25zdCBjYW52YXMgPSByZW5kZXJlci5kb21FbGVtZW50O1xuICAgIGNhbWVyYS5hc3BlY3QgPSBjYW52YXMuY2xpZW50V2lkdGggLyBjYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cbiAgICBpZiAocmVzaXplUmVuZGVyZXJUb0Rpc3BsYXlTaXplKHJlbmRlcmVyKSkge1xuICAgICAgY2FtZXJhLmFzcGVjdCA9IGNhbnZhcy5jbGllbnRXaWR0aCAvIGNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgIH1cblxuICAgIG9iamVjdHMuZm9yRWFjaCgob2JqZWN0LCBuZHgpID0+IHtcbiAgICAgIG9iamVjdC5yb3RhdGlvbi55ID0gdGltZUluU2Vjb25kcyAqIDAuMDIgKyAwLjAyICogbmR4O1xuICAgIH0pO1xuXG4gICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICB9O1xuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG59O1xuXG5jb25zdCBjcmVhdGVFYXJ0aE9yYml0ID0gKHNjZW5lOiBUSFJFRS5TY2VuZSwgY2VudGVyOiBUSFJFRS5WZWN0b3IzKSA9PiB7XG4gIGNvbnN0IGVhcnRoT3JiaXQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgZWFydGhPcmJpdC5wb3NpdGlvbi5zZXQoY2VudGVyLngsIGNlbnRlci55LCBjZW50ZXIueik7XG4gIGNvbnN0IG15QXhpcyA9IG5ldyBUSFJFRS5WZWN0b3IzKDEsIC0xLCAwKTtcbiAgZWFydGhPcmJpdC5yb3RhdGVPbkF4aXMobXlBeGlzLCBUSFJFRS5NYXRoVXRpbHMuZGVnVG9SYWQoMjMuNSkpO1xuICBzY2VuZS5hZGQoZWFydGhPcmJpdCk7XG4gIHJldHVybiBlYXJ0aE9yYml0O1xufTtcblxuY29uc3QgY3JlYXRlRWFydGggPSAoYmFzZTogVEhSRUUuT2JqZWN0M0QpID0+IHtcbiAgY29uc3QgZWFydGggPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcblxuICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxKTtcbiAgY29uc3QgY2xvdWRHZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxLjAwOSk7XG5cbiAgY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcbiAgY29uc3QgdGV4dHVyZSA9IGxvYWRlci5sb2FkKGVhcnRobWFwKTtcbiAgY29uc3QgYnVtcFRleHR1cmUgPSBsb2FkZXIubG9hZChlYXJ0aGJ1bXApO1xuICBjb25zdCBjbG91ZFRleHR1cmUgPSBsb2FkZXIubG9hZChlYXJ0aGNsb3VkKTtcblxuICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XG4gICAgbWFwOiB0ZXh0dXJlLFxuICAgIGJ1bXBNYXA6IGJ1bXBUZXh0dXJlLFxuICAgIGJ1bXBTY2FsZTogMC42LFxuICB9KTtcbiAgY29uc3QgY2xvdWRNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XG4gICAgbWFwOiBjbG91ZFRleHR1cmUsXG4gICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgb3BhY2l0eTogMC41LFxuICB9KTtcblxuICBjb25zdCBncm91bmQgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICBjb25zdCBjbG91ZCA9IG5ldyBUSFJFRS5NZXNoKGNsb3VkR2VvbWV0cnksIGNsb3VkTWF0ZXJpYWwpO1xuXG4gIGVhcnRoLmFkZChncm91bmQpO1xuICBlYXJ0aC5hZGQoY2xvdWQpO1xuICBvYmplY3RzLnB1c2goZ3JvdW5kKTtcbiAgb2JqZWN0cy5wdXNoKGNsb3VkKTtcblxuICBjb25zdCBteUF4aXMgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAxKTtcbiAgZWFydGgucm90YXRlT25BeGlzKG15QXhpcywgVEhSRUUuTWF0aFV0aWxzLmRlZ1RvUmFkKDIzLjUpKTtcblxuICBiYXNlLmFkZChlYXJ0aCk7XG5cbiAgcmV0dXJuIGVhcnRoO1xufTtcblxuY29uc3QgY3JlYXRlTW9vbk9yYml0ID0gKGVhcnRoT3JiaXQ6IFRIUkVFLk9iamVjdDNEKSA9PiB7XG4gIGNvbnN0IG1vb25PcmJpdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICBtb29uT3JiaXQucG9zaXRpb24uc2V0KDIgKiogMC41LCAyICoqIDAuNSwgMCk7XG4gIGVhcnRoT3JiaXQuYWRkKG1vb25PcmJpdCk7XG4gIHJldHVybiBtb29uT3JiaXQ7XG59O1xuXG5jb25zdCBjcmVhdGVNb29uID0gKG1vb25PcmJpdDogVEhSRUUuT2JqZWN0M0QpID0+IHtcbiAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMC40Myk7XG5cbiAgY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcbiAgY29uc3QgbW9vblRleHR1cmUgPSBsb2FkZXIubG9hZChtb29uKTtcbiAgY29uc3QgYnVtcFRleHR1cmUgPSBsb2FkZXIubG9hZChtb29uYnVtcCk7XG4gIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtcbiAgICBtYXA6IG1vb25UZXh0dXJlLFxuICAgIGJ1bXBNYXA6IGJ1bXBUZXh0dXJlLFxuICAgIGJ1bXBTY2FsZTogMC4yLFxuICB9KTtcblxuICBjb25zdCBtb29uTWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG5cbiAgbW9vbk9yYml0LmFkZChtb29uTWVzaCk7XG4gIG9iamVjdHMucHVzaChtb29uTWVzaCk7XG59O1xuXG5jb25zdCBzaGFwZUFzdGVyb2lkcyA9IChwb3NpdGlvbjogVEhSRUUuQnVmZmVyQXR0cmlidXRlKSA9PiB7XG4gIGNvbnN0IGFyckxpa2UgPSBwb3NpdGlvbi5hcnJheTtcbiAgbGV0IGNoZWNrID0gMDtcbiAgY29uc3QgcG9zaXRpb25TdG9yZTogbnVtYmVyW11bXSA9IFtbXV07XG4gIGNvbnN0IHBvc2l0aW9uQXJyID0gQXJyYXkuZnJvbShhcnJMaWtlKTtcbiAgcG9zaXRpb25BcnIuZm9yRWFjaCgobnVtYmVyKSA9PiB7XG4gICAgaWYgKGNoZWNrID4gMikge1xuICAgICAgY2hlY2sgPSAxO1xuICAgICAgcG9zaXRpb25TdG9yZVtwb3NpdGlvblN0b3JlLmxlbmd0aF0gPSBbbnVtYmVyXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9zaXRpb25TdG9yZVtwb3NpdGlvblN0b3JlLmxlbmd0aCAtIDFdLnB1c2gobnVtYmVyKTtcbiAgICAgIGNoZWNrICs9IDE7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCB1bmlxdWVWYWx1ZXM6IG51bWJlcltdW10gPSBbXTtcbiAgcG9zaXRpb25TdG9yZS5mb3JFYWNoKChhcnIpID0+IHtcbiAgICBpZiAodW5pcXVlVmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdW5pcXVlVmFsdWVzLnB1c2goYXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbCA9IHRydWU7XG4gICAgICB1bmlxdWVWYWx1ZXMuZm9yRWFjaCgoYXJyMikgPT4ge1xuICAgICAgICBpZiAoYXJyWzBdID09PSBhcnIyWzBdICYmIGFyclsxXSA9PT0gYXJyMlsxXSAmJiBhcnJbMl0gPT09IGFycjJbMl0pIHtcbiAgICAgICAgICB2YWwgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIHVuaXF1ZVZhbHVlcy5wdXNoKGFycik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBwcmV2ZW50TXV0OiBudW1iZXJbXVtdID0gW107XG4gIHVuaXF1ZVZhbHVlcy5mb3JFYWNoKChhcnIpID0+IHtcbiAgICBjb25zdCB4ID0gKGFyclswXSArIC0wLjI1ICsgTWF0aC5yYW5kb20oKSAqIDAuNSkudG9GaXhlZCgxKTtcbiAgICBjb25zdCB5ID0gKGFyclsxXSArIC0wLjI1ICsgTWF0aC5yYW5kb20oKSAqIDAuNSkudG9GaXhlZCgxKTtcbiAgICBjb25zdCB6ID0gKGFyclsyXSArIC0wLjI1ICsgTWF0aC5yYW5kb20oKSAqIDAuNSkudG9GaXhlZCgxKTtcblxuICAgIHBvc2l0aW9uU3RvcmUuZm9yRWFjaCgoYXJyMiwgbmR4KSA9PiB7XG4gICAgICBpZiAoYXJyWzBdID09PSBhcnIyWzBdICYmIGFyclsxXSA9PT0gYXJyMlsxXSAmJiBhcnJbMl0gPT09IGFycjJbMl0pIHtcbiAgICAgICAgcHJldmVudE11dFtuZHhdID0gW3BhcnNlRmxvYXQoeCksIHBhcnNlRmxvYXQoeSksIHBhcnNlRmxvYXQoeildO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBmaW5hbEFycjogbnVtYmVyW10gPSBbXTtcblxuICBwcmV2ZW50TXV0LmZvckVhY2goKGFycikgPT4ge1xuICAgIGNvbnN0IFt4LCB5LCB6XSA9IGFycjtcbiAgICBmaW5hbEFyci5wdXNoKHgpO1xuICAgIGZpbmFsQXJyLnB1c2goeSk7XG4gICAgZmluYWxBcnIucHVzaCh6KTtcbiAgfSk7XG5cbiAgcG9zaXRpb24uc2V0KGZpbmFsQXJyKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUFzdGVyb2lkcyA9IChlYXJ0aE9yYml0OiBUSFJFRS5PYmplY3QzRCwgZGF0YTogRGF0YVNvcnRlcikgPT4ge1xuICBjb25zdCBuZW9zID0gZGF0YS5uZW9BcnI7XG5cbiAgY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcbiAgY29uc3QgdGV4dHVyZSA9IGxvYWRlci5sb2FkKGFzdGVyb2lkSW1nKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5lb3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBuZW8gPSBuZW9zW2ldO1xuXG4gICAgY29uc3QgYXN0ZXJvaWRPcmJpdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIGVhcnRoT3JiaXQuYWRkKGFzdGVyb2lkT3JiaXQpO1xuICAgIGNvbnN0IHtcbiAgICAgIGVzdGltYXRlZERpYW1ldGVyTWF4OiBtYXgsXG4gICAgICBlc3RpbWF0ZWREaWFtZXRlck1pbjogbWluLFxuICAgICAgbWlzc0Rpc3RhbmNlOiBkaXN0YW5jZVN0cixcbiAgICAgIGlkLFxuICAgIH0gPSBuZW87XG4gICAgY29uc3QgZGlzdGFuY2UgPSBwYXJzZUZsb2F0KGRpc3RhbmNlU3RyKTtcblxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLk9jdGFoZWRyb25HZW9tZXRyeSgxLCAxKTtcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XG4gICAgICBtYXA6IHRleHR1cmUsXG4gICAgICBlbWlzc2l2ZTogXCJibGFja1wiLFxuICAgICAgZW1pc3NpdmVJbnRlbnNpdHk6IDEsXG4gICAgICBzcGVjdWxhcjogXCJ3aGl0ZVwiLFxuICAgIH0pO1xuICAgIGNvbnN0IGFzdGVyb2lkID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICBjb25zdCByYW5kb20gPSByYW5kb21Qb3NpdGlvbihpZCwgYmFzZUxvZyhkaXN0YW5jZSAvIDEwLCAxMykpO1xuICAgIGFzdGVyb2lkLnBvc2l0aW9uLnNldChyYW5kb20ueCwgcmFuZG9tLnksIHJhbmRvbS56KTtcbiAgICBpZiAoXG4gICAgICBhc3Rlcm9pZC5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uIGluc3RhbmNlb2YgVEhSRUUuQnVmZmVyQXR0cmlidXRlXG4gICAgKSB7XG4gICAgICBzaGFwZUFzdGVyb2lkcyhhc3Rlcm9pZC5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uKTtcbiAgICB9XG4gICAgYXN0ZXJvaWQuc2NhbGUuc2V0KDAuMDUsIDAuMDUsIDAuMDUpO1xuICAgIGFzdGVyb2lkT3JiaXQuYWRkKGFzdGVyb2lkKTtcbiAgfVxufTtcblxuY29uc3QgaW5pdCA9IChkYXRhOiBEYXRhU29ydGVyKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY1wiKTtcbiAgY29uc3QgY2VudGVyID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCk7XG5cbiAgaWYgKGNhbnZhcyBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGNhbnZhcyB9KTtcbiAgICBjb25zdCBzY2VuZSA9IGNyZWF0ZVNjZW5lKHJlbmRlcmVyKTtcbiAgICBjb25zdCBjYW1lcmEgPSBjcmVhdGVDYW1lcmEoc2NlbmUpO1xuICAgIGNyZWF0ZU9yYml0Q29udHJvbHMoY2FtZXJhLCBjYW52YXMsIGNlbnRlcik7XG4gICAgY3JlYXRlTGlnaHRpbmcoc2NlbmUpO1xuICAgIGNvbnN0IGVhcnRoT3JiaXQgPSBjcmVhdGVFYXJ0aE9yYml0KHNjZW5lLCBjZW50ZXIpO1xuICAgIGNyZWF0ZUVhcnRoKGVhcnRoT3JiaXQpO1xuICAgIGNvbnN0IG1vb25PcmJpdCA9IGNyZWF0ZU1vb25PcmJpdChlYXJ0aE9yYml0KTtcbiAgICBjcmVhdGVNb29uKG1vb25PcmJpdCk7XG4gICAgY3JlYXRlQXN0ZXJvaWRzKGVhcnRoT3JiaXQsIGRhdGEpO1xuICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICBhbmltYXRlKHJlbmRlcmVyLCBzY2VuZSwgY2FtZXJhKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcbiIsImNvbnN0IGJhc2VMb2cgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IE1hdGgubG9nKHgpIC8gTWF0aC5sb2coeSk7XG5cbmNvbnN0IHBzZXVkb1JhbmRvbSA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IG51bWJlciA9IHBhcnNlRmxvYXQoaWQpO1xuICBjb25zdCBzdW0gPSBpZFxuICAgIC5zcGxpdChcIlwiKVxuICAgIC5tYXAoKG51bSkgPT4gcGFyc2VGbG9hdChudW0pKVxuICAgIC5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgY3VyciwgMCk7XG4gIGNvbnN0IHZhbHVlID0gKG51bWJlciAtIHN1bSkgLyAobnVtYmVyICsgc3VtKTtcbiAgY29uc3QgdmFsdWVBcnIgPSB2YWx1ZVxuICAgIC50b1N0cmluZygpXG4gICAgLnNwbGl0KFwiXCIpXG4gICAgLmZpbHRlcigoc3RyKSA9PiB7XG4gICAgICBpZiAoc3RyICE9PSBcIi5cIikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gIHZhbHVlQXJyW3ZhbHVlQXJyLmxlbmd0aCAtIDFdID0gXCIwXCI7XG4gIHZhbHVlQXJyW3ZhbHVlQXJyLmxlbmd0aCAtIDJdID0gXCIuXCI7XG4gIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQodmFsdWVBcnIucmV2ZXJzZSgpLmpvaW4oXCJcIikpO1xuICByZXR1cm4gbnVtO1xufTtcblxuY29uc3QgcmFuZG9tUG9zaXRpb24gPSAoaWQ6IHN0cmluZywgZGlzdGFuY2U6IG51bWJlcikgPT4ge1xuICBjb25zdCB2YWx1ZTEgPSBwc2V1ZG9SYW5kb20oYCR7aWR9MTIzNDVgKSAqIGRpc3RhbmNlO1xuICBjb25zdCB2YWx1ZTIgPVxuICAgIHBzZXVkb1JhbmRvbShpZCArIGlkKSAqIChwc2V1ZG9SYW5kb20oYCR7aWR9NTMyNDFgKSA+IDAuNSA/IC0xIDogMSk7XG4gIGNvbnN0IGludGVybWVkaWF0ZSA9IHZhbHVlMSAqKiAyICsgdmFsdWUyICoqIDI7XG4gIGNvbnN0IHZhbHVlMyA9IChkaXN0YW5jZSAqKiAyIC0gaW50ZXJtZWRpYXRlKSAqKiAwLjU7XG5cbiAgY29uc3QgcmFuZG9tID0gcHNldWRvUmFuZG9tKGlkICsgaWQpICogMjtcblxuICBpZiAocmFuZG9tID4gMSkge1xuICAgIHJldHVybiB7XG4gICAgICB4OiB2YWx1ZTEgKiAocHNldWRvUmFuZG9tKGAke2lkfTg3NjA1YCkgPiAwLjUgPyAxIDogLTEpLFxuICAgICAgeTogdmFsdWUyLFxuICAgICAgejogdmFsdWUzICogKHBzZXVkb1JhbmRvbShpZCArIGlkKSA+IDAuNSA/IDEgOiAtMSksXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogdmFsdWUzICogKHBzZXVkb1JhbmRvbShgJHtpZH0yMTM5OGApID4gMC41ID8gMSA6IC0xKSxcbiAgICB5OiB2YWx1ZTIsXG4gICAgejogdmFsdWUxICogKHBzZXVkb1JhbmRvbShpZCArIGlkKSA+IDAuNSA/IDEgOiAtMSksXG4gIH07XG59O1xuXG5leHBvcnQgeyBiYXNlTG9nLCByYW5kb21Qb3NpdGlvbiB9O1xuIl0sIm5hbWVzIjpbIlRIUkVFIiwiT3JiaXRDb250cm9scyIsImJhc2VMb2ciLCJyYW5kb21Qb3NpdGlvbiIsImdhbGF4eSIsImVhcnRobWFwIiwiZWFydGhidW1wIiwiZWFydGhjbG91ZCIsIm1vb24iLCJtb29uYnVtcCIsImFzdGVyb2lkSW1nIiwib2JqZWN0cyIsImFzdGVyb2lkcyIsImNyZWF0ZVNjZW5lIiwicmVuZGVyZXIiLCJzY2VuZSIsIlNjZW5lIiwibG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsInRleHR1cmUiLCJsb2FkIiwiaW1hZ2UiLCJIVE1MSW1hZ2VFbGVtZW50IiwicnQiLCJXZWJHTEN1YmVSZW5kZXJUYXJnZXQiLCJoZWlnaHQiLCJmcm9tRXF1aXJlY3Rhbmd1bGFyVGV4dHVyZSIsImJhY2tncm91bmQiLCJjcmVhdGVDYW1lcmEiLCJmb3YiLCJhc3BlY3QiLCJuZWFyIiwiZmFyIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJwb3NpdGlvbiIsInNldCIsImFkZCIsImNyZWF0ZU9yYml0Q29udHJvbHMiLCJjYW52YXMiLCJjZW50ZXIiLCJjb250cm9scyIsInRhcmdldCIsImNvcHkiLCJWZWN0b3IzIiwidXBkYXRlIiwiY3JlYXRlTGlnaHRpbmciLCJjb2xvciIsImludGVuc2l0eSIsImxpZ2h0aW5nIiwiRGlyZWN0aW9uYWxMaWdodCIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsInJlc2l6ZVJlbmRlcmVyVG9EaXNwbGF5U2l6ZSIsImRvbUVsZW1lbnQiLCJuZWVkc1Jlc2l6ZSIsImNsaWVudFdpZHRoIiwid2lkdGgiLCJjbGllbnRIZWlnaHQiLCJzZXRTaXplIiwiYW5pbWF0ZSIsInJlbmRlciIsInRpbWUiLCJ0aW1lSW5TZWNvbmRzIiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImZvckVhY2giLCJvYmplY3QiLCJuZHgiLCJyb3RhdGlvbiIsInkiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjcmVhdGVFYXJ0aE9yYml0IiwiZWFydGhPcmJpdCIsIk9iamVjdDNEIiwieCIsInoiLCJteUF4aXMiLCJyb3RhdGVPbkF4aXMiLCJNYXRoVXRpbHMiLCJkZWdUb1JhZCIsImNyZWF0ZUVhcnRoIiwiYmFzZSIsImVhcnRoIiwiZ2VvbWV0cnkiLCJTcGhlcmVHZW9tZXRyeSIsImNsb3VkR2VvbWV0cnkiLCJidW1wVGV4dHVyZSIsImNsb3VkVGV4dHVyZSIsIm1hdGVyaWFsIiwiTWVzaFBob25nTWF0ZXJpYWwiLCJtYXAiLCJidW1wTWFwIiwiYnVtcFNjYWxlIiwiY2xvdWRNYXRlcmlhbCIsInRyYW5zcGFyZW50Iiwib3BhY2l0eSIsImdyb3VuZCIsIk1lc2giLCJjbG91ZCIsInB1c2giLCJjcmVhdGVNb29uT3JiaXQiLCJtb29uT3JiaXQiLCJjcmVhdGVNb29uIiwibW9vblRleHR1cmUiLCJtb29uTWVzaCIsInNoYXBlQXN0ZXJvaWRzIiwiYXJyTGlrZSIsImFycmF5IiwiY2hlY2siLCJwb3NpdGlvblN0b3JlIiwicG9zaXRpb25BcnIiLCJBcnJheSIsImZyb20iLCJudW1iZXIiLCJsZW5ndGgiLCJ1bmlxdWVWYWx1ZXMiLCJhcnIiLCJ2YWwiLCJhcnIyIiwicHJldmVudE11dCIsIk1hdGgiLCJyYW5kb20iLCJ0b0ZpeGVkIiwicGFyc2VGbG9hdCIsImZpbmFsQXJyIiwiY3JlYXRlQXN0ZXJvaWRzIiwiZGF0YSIsIm5lb3MiLCJuZW9BcnIiLCJpIiwibmVvIiwiYXN0ZXJvaWRPcmJpdCIsIm1heCIsImVzdGltYXRlZERpYW1ldGVyTWF4IiwibWluIiwiZXN0aW1hdGVkRGlhbWV0ZXJNaW4iLCJkaXN0YW5jZVN0ciIsIm1pc3NEaXN0YW5jZSIsImlkIiwiZGlzdGFuY2UiLCJPY3RhaGVkcm9uR2VvbWV0cnkiLCJlbWlzc2l2ZSIsImVtaXNzaXZlSW50ZW5zaXR5Iiwic3BlY3VsYXIiLCJhc3Rlcm9pZCIsImF0dHJpYnV0ZXMiLCJCdWZmZXJBdHRyaWJ1dGUiLCJzY2FsZSIsImluaXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJIVE1MQ2FudmFzRWxlbWVudCIsIldlYkdMUmVuZGVyZXIiLCJsb2ciLCJwc2V1ZG9SYW5kb20iLCJzdW0iLCJzcGxpdCIsIm51bSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ2YWx1ZSIsInZhbHVlQXJyIiwidG9TdHJpbmciLCJmaWx0ZXIiLCJzdHIiLCJyZXZlcnNlIiwiam9pbiIsInZhbHVlMSIsInZhbHVlMiIsImludGVybWVkaWF0ZSIsInZhbHVlMyJdLCJzb3VyY2VSb290IjoiIn0=