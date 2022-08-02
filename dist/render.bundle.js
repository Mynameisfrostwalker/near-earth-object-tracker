/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/render.ts":
/*!*******************************!*\
  !*** ./src/scripts/render.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
/* harmony import */ var _assets_galaxy_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/galaxy.png */ "./src/assets/galaxy.png");
/* harmony import */ var _assets_earthmap1k_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/earthmap1k.jpg */ "./src/assets/earthmap1k.jpg");
/* harmony import */ var _assets_earthbump_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/earthbump.jpg */ "./src/assets/earthbump.jpg");
/* harmony import */ var _assets_earthCloud_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/earthCloud.png */ "./src/assets/earthCloud.png");
/* harmony import */ var _assets_moon_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/moon.jpg */ "./src/assets/moon.jpg");
/* harmony import */ var _assets_moonbump_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/moonbump.jpg */ "./src/assets/moonbump.jpg");








var objects = [];

var createScene = function createScene(renderer) {
  var scene = new three__WEBPACK_IMPORTED_MODULE_7__.Scene();
  var loader = new three__WEBPACK_IMPORTED_MODULE_7__.TextureLoader();
  var texture = loader.load(_assets_galaxy_png__WEBPACK_IMPORTED_MODULE_1__, function () {
    if (texture.image instanceof HTMLImageElement) {
      var rt = new three__WEBPACK_IMPORTED_MODULE_7__.WebGLCubeRenderTarget(texture.image.height);
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
  var far = 100;
  var camera = new three__WEBPACK_IMPORTED_MODULE_7__.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 5);
  scene.add(camera);
  return camera;
};

var createOrbitControls = function createOrbitControls(camera, canvas, center) {
  var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__.OrbitControls(camera, canvas);
  controls.target.copy(center).add(new three__WEBPACK_IMPORTED_MODULE_7__.Vector3(-1, -1, 0));
  controls.update();
};

var createLighting = function createLighting(scene) {
  var color = 0xffffff;
  var intensity = 1;
  var lighting = new three__WEBPACK_IMPORTED_MODULE_7__.DirectionalLight(color, intensity);
  lighting.position.set(2, 2, 4);
  scene.add(lighting);
  var ambientLight = new three__WEBPACK_IMPORTED_MODULE_7__.AmbientLight(color, intensity / 5);
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
  var earthOrbit = new three__WEBPACK_IMPORTED_MODULE_7__.Object3D();
  earthOrbit.position.set(center.x, center.y, center.z);
  var myAxis = new three__WEBPACK_IMPORTED_MODULE_7__.Vector3(1, -1, 0);
  earthOrbit.rotateOnAxis(myAxis, three__WEBPACK_IMPORTED_MODULE_7__.MathUtils.degToRad(23.5));
  scene.add(earthOrbit);
  return earthOrbit;
};

var createEarth = function createEarth(base) {
  var earth = new three__WEBPACK_IMPORTED_MODULE_7__.Object3D();
  var geometry = new three__WEBPACK_IMPORTED_MODULE_7__.SphereGeometry(1);
  var cloudGeometry = new three__WEBPACK_IMPORTED_MODULE_7__.SphereGeometry(1.009);
  var loader = new three__WEBPACK_IMPORTED_MODULE_7__.TextureLoader();
  var texture = loader.load(_assets_earthmap1k_jpg__WEBPACK_IMPORTED_MODULE_2__);
  var bumpTexture = loader.load(_assets_earthbump_jpg__WEBPACK_IMPORTED_MODULE_3__);
  var cloudTexture = loader.load(_assets_earthCloud_png__WEBPACK_IMPORTED_MODULE_4__);
  var material = new three__WEBPACK_IMPORTED_MODULE_7__.MeshPhongMaterial({
    map: texture,
    bumpMap: bumpTexture,
    bumpScale: 0.6
  });
  var cloudMaterial = new three__WEBPACK_IMPORTED_MODULE_7__.MeshPhongMaterial({
    map: cloudTexture,
    transparent: true,
    opacity: 0.5
  });
  var ground = new three__WEBPACK_IMPORTED_MODULE_7__.Mesh(geometry, material);
  var cloud = new three__WEBPACK_IMPORTED_MODULE_7__.Mesh(cloudGeometry, cloudMaterial);
  earth.add(ground);
  earth.add(cloud);
  objects.push(ground);
  objects.push(cloud);
  var myAxis = new three__WEBPACK_IMPORTED_MODULE_7__.Vector3(0, 0, 1);
  earth.rotateOnAxis(myAxis, three__WEBPACK_IMPORTED_MODULE_7__.MathUtils.degToRad(23.5));
  base.add(earth);
  return earth;
};

var createMoonOrbit = function createMoonOrbit(earthOrbit) {
  var moonOrbit = new three__WEBPACK_IMPORTED_MODULE_7__.Object3D();
  moonOrbit.position.x = 2;
  earthOrbit.add(moonOrbit);
  return moonOrbit;
};

var createMoon = function createMoon(moonOrbit) {
  var geometry = new three__WEBPACK_IMPORTED_MODULE_7__.SphereGeometry(0.43);
  var loader = new three__WEBPACK_IMPORTED_MODULE_7__.TextureLoader();
  var moonTexture = loader.load(_assets_moon_jpg__WEBPACK_IMPORTED_MODULE_5__);
  var bumpTexture = loader.load(_assets_moonbump_jpg__WEBPACK_IMPORTED_MODULE_6__);
  var material = new three__WEBPACK_IMPORTED_MODULE_7__.MeshPhongMaterial({
    map: moonTexture,
    bumpMap: bumpTexture,
    bumpScale: 0.2
  });
  var moonMesh = new three__WEBPACK_IMPORTED_MODULE_7__.Mesh(geometry, material);
  moonOrbit.add(moonMesh);
  objects.push(moonMesh);
};

var init = function init() {
  var canvas = document.querySelector("#c");
  var center = new three__WEBPACK_IMPORTED_MODULE_7__.Vector3(1, 1, 0);

  if (canvas instanceof HTMLCanvasElement) {
    var renderer = new three__WEBPACK_IMPORTED_MODULE_7__.WebGLRenderer({
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
    renderer.render(scene, camera);
    animate(renderer, scene, camera);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (init);

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

/***/ "./src/assets/galaxy.png":
/*!*******************************!*\
  !*** ./src/assets/galaxy.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6376a942e1ef27fea433.png";

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

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"render": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknear_earth_object_tracker"] = self["webpackChunknear_earth_object_tracker"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_three_examples_jsm_controls_OrbitControls_js"], function() { return __webpack_require__("./src/scripts/render.ts"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBLDhDQUE4Qzs7V0FFOUM7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxtQ0FBbUM7V0FDcEU7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWxEQTtVQUNBO1VBQ0E7VUFDQSwrSUFBK0ksd0RBQXdEO1VBQ3ZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmVhci1lYXJ0aC1vYmplY3QtdHJhY2tlci8uL3NyYy9zY3JpcHRzL3JlbmRlci50cyIsIndlYnBhY2s6Ly9uZWFyLWVhcnRoLW9iamVjdC10cmFja2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25lYXItZWFydGgtb2JqZWN0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9uZWFyLWVhcnRoLW9iamVjdC10cmFja2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uZWFyLWVhcnRoLW9iamVjdC10cmFja2VyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbmVhci1lYXJ0aC1vYmplY3QtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25lYXItZWFydGgtb2JqZWN0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZWFyLWVhcnRoLW9iamVjdC10cmFja2VyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL25lYXItZWFydGgtb2JqZWN0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbmVhci1lYXJ0aC1vYmplY3QtdHJhY2tlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL25lYXItZWFydGgtb2JqZWN0LXRyYWNrZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL25lYXItZWFydGgtb2JqZWN0LXRyYWNrZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9sc1wiO1xuaW1wb3J0IHsgR1VJIH0gZnJvbSBcImxpbC1ndWlcIjtcbmltcG9ydCBnYWxheHkgZnJvbSBcIi4uL2Fzc2V0cy9nYWxheHkucG5nXCI7XG5pbXBvcnQgZWFydGhtYXAgZnJvbSBcIi4uL2Fzc2V0cy9lYXJ0aG1hcDFrLmpwZ1wiO1xuaW1wb3J0IGVhcnRoYnVtcCBmcm9tIFwiLi4vYXNzZXRzL2VhcnRoYnVtcC5qcGdcIjtcbmltcG9ydCBlYXJ0aGNsb3VkIGZyb20gXCIuLi9hc3NldHMvZWFydGhDbG91ZC5wbmdcIjtcbmltcG9ydCBtb29uIGZyb20gXCIuLi9hc3NldHMvbW9vbi5qcGdcIjtcbmltcG9ydCBtb29uYnVtcCBmcm9tIFwiLi4vYXNzZXRzL21vb25idW1wLmpwZ1wiO1xuXG5jb25zdCBvYmplY3RzOiBUSFJFRS5NZXNoW10gPSBbXTtcblxuY29uc3QgY3JlYXRlU2NlbmUgPSAocmVuZGVyZXI6IFRIUkVFLldlYkdMUmVuZGVyZXIpID0+IHtcbiAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcbiAgY29uc3QgdGV4dHVyZSA9IGxvYWRlci5sb2FkKGdhbGF4eSwgKCkgPT4ge1xuICAgIGlmICh0ZXh0dXJlLmltYWdlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuICAgICAgY29uc3QgcnQgPSBuZXcgVEhSRUUuV2ViR0xDdWJlUmVuZGVyVGFyZ2V0KHRleHR1cmUuaW1hZ2UuaGVpZ2h0KTtcbiAgICAgIHJ0LmZyb21FcXVpcmVjdGFuZ3VsYXJUZXh0dXJlKHJlbmRlcmVyLCB0ZXh0dXJlKTtcbiAgICAgIHNjZW5lLmJhY2tncm91bmQgPSBydC50ZXh0dXJlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzY2VuZTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNhbWVyYSA9IChzY2VuZTogVEhSRUUuU2NlbmUpID0+IHtcbiAgY29uc3QgZm92ID0gNzU7XG4gIGNvbnN0IGFzcGVjdCA9IDI7XG4gIGNvbnN0IG5lYXIgPSAwLjE7XG4gIGNvbnN0IGZhciA9IDEwMDtcblxuICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoZm92LCBhc3BlY3QsIG5lYXIsIGZhcik7XG4gIGNhbWVyYS5wb3NpdGlvbi5zZXQoMCwgMCwgNSk7XG5cbiAgc2NlbmUuYWRkKGNhbWVyYSk7XG5cbiAgcmV0dXJuIGNhbWVyYTtcbn07XG5cbmNvbnN0IGNyZWF0ZU9yYml0Q29udHJvbHMgPSAoXG4gIGNhbWVyYTogVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEsXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXG4gIGNlbnRlcjogVEhSRUUuVmVjdG9yM1xuKSA9PiB7XG4gIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCBjYW52YXMpO1xuICBjb250cm9scy50YXJnZXQuY29weShjZW50ZXIpLmFkZChuZXcgVEhSRUUuVmVjdG9yMygtMSwgLTEsIDApKTtcbiAgY29udHJvbHMudXBkYXRlKCk7XG59O1xuXG5jb25zdCBjcmVhdGVMaWdodGluZyA9IChzY2VuZTogVEhSRUUuU2NlbmUpID0+IHtcbiAgY29uc3QgY29sb3IgPSAweGZmZmZmZjtcbiAgY29uc3QgaW50ZW5zaXR5ID0gMTtcbiAgY29uc3QgbGlnaHRpbmcgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodChjb2xvciwgaW50ZW5zaXR5KTtcbiAgbGlnaHRpbmcucG9zaXRpb24uc2V0KDIsIDIsIDQpO1xuICBzY2VuZS5hZGQobGlnaHRpbmcpO1xuXG4gIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoY29sb3IsIGludGVuc2l0eSAvIDUpO1xuICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcbn07XG5cbmNvbnN0IHJlc2l6ZVJlbmRlcmVyVG9EaXNwbGF5U2l6ZSA9IChyZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlcikgPT4ge1xuICBjb25zdCBjYW52YXMgPSByZW5kZXJlci5kb21FbGVtZW50O1xuICBjb25zdCBuZWVkc1Jlc2l6ZSA9XG4gICAgY2FudmFzLmNsaWVudFdpZHRoICE9PSBjYW52YXMud2lkdGggfHxcbiAgICBjYW52YXMuY2xpZW50SGVpZ2h0ICE9PSBjYW52YXMuaGVpZ2h0O1xuXG4gIGlmIChuZWVkc1Jlc2l6ZSkge1xuICAgIHJlbmRlcmVyLnNldFNpemUoY2FudmFzLmNsaWVudFdpZHRoLCBjYW52YXMuY2xpZW50SGVpZ2h0LCBmYWxzZSk7XG4gIH1cblxuICByZXR1cm4gbmVlZHNSZXNpemU7XG59O1xuXG5jb25zdCBhbmltYXRlID0gKFxuICByZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlcixcbiAgc2NlbmU6IFRIUkVFLlNjZW5lLFxuICBjYW1lcmE6IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhXG4pID0+IHtcbiAgY29uc3QgcmVuZGVyID0gKHRpbWU6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHRpbWVJblNlY29uZHMgPSB0aW1lICogMC4wMDE7XG5cbiAgICBjb25zdCBjYW52YXMgPSByZW5kZXJlci5kb21FbGVtZW50O1xuICAgIGNhbWVyYS5hc3BlY3QgPSBjYW52YXMuY2xpZW50V2lkdGggLyBjYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cbiAgICBpZiAocmVzaXplUmVuZGVyZXJUb0Rpc3BsYXlTaXplKHJlbmRlcmVyKSkge1xuICAgICAgY2FtZXJhLmFzcGVjdCA9IGNhbnZhcy5jbGllbnRXaWR0aCAvIGNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgIH1cblxuICAgIG9iamVjdHMuZm9yRWFjaCgob2JqZWN0LCBuZHgpID0+IHtcbiAgICAgIG9iamVjdC5yb3RhdGlvbi55ID0gdGltZUluU2Vjb25kcyAqIDAuMDIgKyAwLjAyICogbmR4O1xuICAgIH0pO1xuXG4gICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICB9O1xuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG59O1xuXG5jb25zdCBjcmVhdGVFYXJ0aE9yYml0ID0gKHNjZW5lOiBUSFJFRS5TY2VuZSwgY2VudGVyOiBUSFJFRS5WZWN0b3IzKSA9PiB7XG4gIGNvbnN0IGVhcnRoT3JiaXQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgZWFydGhPcmJpdC5wb3NpdGlvbi5zZXQoY2VudGVyLngsIGNlbnRlci55LCBjZW50ZXIueik7XG4gIGNvbnN0IG15QXhpcyA9IG5ldyBUSFJFRS5WZWN0b3IzKDEsIC0xLCAwKTtcbiAgZWFydGhPcmJpdC5yb3RhdGVPbkF4aXMobXlBeGlzLCBUSFJFRS5NYXRoVXRpbHMuZGVnVG9SYWQoMjMuNSkpO1xuICBzY2VuZS5hZGQoZWFydGhPcmJpdCk7XG4gIHJldHVybiBlYXJ0aE9yYml0O1xufTtcblxuY29uc3QgY3JlYXRlRWFydGggPSAoYmFzZTogVEhSRUUuT2JqZWN0M0QpID0+IHtcbiAgY29uc3QgZWFydGggPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcblxuICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxKTtcbiAgY29uc3QgY2xvdWRHZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxLjAwOSk7XG5cbiAgY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcbiAgY29uc3QgdGV4dHVyZSA9IGxvYWRlci5sb2FkKGVhcnRobWFwKTtcbiAgY29uc3QgYnVtcFRleHR1cmUgPSBsb2FkZXIubG9hZChlYXJ0aGJ1bXApO1xuICBjb25zdCBjbG91ZFRleHR1cmUgPSBsb2FkZXIubG9hZChlYXJ0aGNsb3VkKTtcblxuICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XG4gICAgbWFwOiB0ZXh0dXJlLFxuICAgIGJ1bXBNYXA6IGJ1bXBUZXh0dXJlLFxuICAgIGJ1bXBTY2FsZTogMC42LFxuICB9KTtcbiAgY29uc3QgY2xvdWRNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XG4gICAgbWFwOiBjbG91ZFRleHR1cmUsXG4gICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgb3BhY2l0eTogMC41LFxuICB9KTtcblxuICBjb25zdCBncm91bmQgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICBjb25zdCBjbG91ZCA9IG5ldyBUSFJFRS5NZXNoKGNsb3VkR2VvbWV0cnksIGNsb3VkTWF0ZXJpYWwpO1xuXG4gIGVhcnRoLmFkZChncm91bmQpO1xuICBlYXJ0aC5hZGQoY2xvdWQpO1xuICBvYmplY3RzLnB1c2goZ3JvdW5kKTtcbiAgb2JqZWN0cy5wdXNoKGNsb3VkKTtcblxuICBjb25zdCBteUF4aXMgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAxKTtcbiAgZWFydGgucm90YXRlT25BeGlzKG15QXhpcywgVEhSRUUuTWF0aFV0aWxzLmRlZ1RvUmFkKDIzLjUpKTtcblxuICBiYXNlLmFkZChlYXJ0aCk7XG5cbiAgcmV0dXJuIGVhcnRoO1xufTtcblxuY29uc3QgY3JlYXRlTW9vbk9yYml0ID0gKGVhcnRoT3JiaXQ6IFRIUkVFLk9iamVjdDNEKSA9PiB7XG4gIGNvbnN0IG1vb25PcmJpdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICBtb29uT3JiaXQucG9zaXRpb24ueCA9IDI7XG4gIGVhcnRoT3JiaXQuYWRkKG1vb25PcmJpdCk7XG4gIHJldHVybiBtb29uT3JiaXQ7XG59O1xuXG5jb25zdCBjcmVhdGVNb29uID0gKG1vb25PcmJpdDogVEhSRUUuT2JqZWN0M0QpID0+IHtcbiAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMC40Myk7XG5cbiAgY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcbiAgY29uc3QgbW9vblRleHR1cmUgPSBsb2FkZXIubG9hZChtb29uKTtcbiAgY29uc3QgYnVtcFRleHR1cmUgPSBsb2FkZXIubG9hZChtb29uYnVtcCk7XG4gIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtcbiAgICBtYXA6IG1vb25UZXh0dXJlLFxuICAgIGJ1bXBNYXA6IGJ1bXBUZXh0dXJlLFxuICAgIGJ1bXBTY2FsZTogMC4yLFxuICB9KTtcblxuICBjb25zdCBtb29uTWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG5cbiAgbW9vbk9yYml0LmFkZChtb29uTWVzaCk7XG4gIG9iamVjdHMucHVzaChtb29uTWVzaCk7XG59O1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NcIik7XG4gIGNvbnN0IGNlbnRlciA9IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDApO1xuXG4gIGlmIChjYW52YXMgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBjYW52YXMgfSk7XG4gICAgY29uc3Qgc2NlbmUgPSBjcmVhdGVTY2VuZShyZW5kZXJlcik7XG4gICAgY29uc3QgY2FtZXJhID0gY3JlYXRlQ2FtZXJhKHNjZW5lKTtcbiAgICBjcmVhdGVPcmJpdENvbnRyb2xzKGNhbWVyYSwgY2FudmFzLCBjZW50ZXIpO1xuICAgIGNyZWF0ZUxpZ2h0aW5nKHNjZW5lKTtcbiAgICBjb25zdCBlYXJ0aE9yYml0ID0gY3JlYXRlRWFydGhPcmJpdChzY2VuZSwgY2VudGVyKTtcbiAgICBjcmVhdGVFYXJ0aChlYXJ0aE9yYml0KTtcbiAgICBjb25zdCBtb29uT3JiaXQgPSBjcmVhdGVNb29uT3JiaXQoZWFydGhPcmJpdCk7XG4gICAgY3JlYXRlTW9vbihtb29uT3JiaXQpO1xuICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICBhbmltYXRlKHJlbmRlcmVyLCBzY2VuZSwgY2FtZXJhKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSBmdW5jdGlvbihyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpIHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pOyB9KSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInJlbmRlclwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IGZ1bmN0aW9uKGNodW5rSWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMDsgfTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZShmdW5jdGlvbihpZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMDsgfSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rbmVhcl9lYXJ0aF9vYmplY3RfdHJhY2tlclwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtuZWFyX2VhcnRoX29iamVjdF90cmFja2VyXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc190aHJlZV9leGFtcGxlc19qc21fY29udHJvbHNfT3JiaXRDb250cm9sc19qc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9yZW5kZXIudHNcIik7IH0pXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIlRIUkVFIiwiT3JiaXRDb250cm9scyIsImdhbGF4eSIsImVhcnRobWFwIiwiZWFydGhidW1wIiwiZWFydGhjbG91ZCIsIm1vb24iLCJtb29uYnVtcCIsIm9iamVjdHMiLCJjcmVhdGVTY2VuZSIsInJlbmRlcmVyIiwic2NlbmUiLCJTY2VuZSIsImxvYWRlciIsIlRleHR1cmVMb2FkZXIiLCJ0ZXh0dXJlIiwibG9hZCIsImltYWdlIiwiSFRNTEltYWdlRWxlbWVudCIsInJ0IiwiV2ViR0xDdWJlUmVuZGVyVGFyZ2V0IiwiaGVpZ2h0IiwiZnJvbUVxdWlyZWN0YW5ndWxhclRleHR1cmUiLCJiYWNrZ3JvdW5kIiwiY3JlYXRlQ2FtZXJhIiwiZm92IiwiYXNwZWN0IiwibmVhciIsImZhciIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwicG9zaXRpb24iLCJzZXQiLCJhZGQiLCJjcmVhdGVPcmJpdENvbnRyb2xzIiwiY2FudmFzIiwiY2VudGVyIiwiY29udHJvbHMiLCJ0YXJnZXQiLCJjb3B5IiwiVmVjdG9yMyIsInVwZGF0ZSIsImNyZWF0ZUxpZ2h0aW5nIiwiY29sb3IiLCJpbnRlbnNpdHkiLCJsaWdodGluZyIsIkRpcmVjdGlvbmFsTGlnaHQiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJyZXNpemVSZW5kZXJlclRvRGlzcGxheVNpemUiLCJkb21FbGVtZW50IiwibmVlZHNSZXNpemUiLCJjbGllbnRXaWR0aCIsIndpZHRoIiwiY2xpZW50SGVpZ2h0Iiwic2V0U2l6ZSIsImFuaW1hdGUiLCJyZW5kZXIiLCJ0aW1lIiwidGltZUluU2Vjb25kcyIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJmb3JFYWNoIiwib2JqZWN0IiwibmR4Iiwicm90YXRpb24iLCJ5Iiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY3JlYXRlRWFydGhPcmJpdCIsImVhcnRoT3JiaXQiLCJPYmplY3QzRCIsIngiLCJ6IiwibXlBeGlzIiwicm90YXRlT25BeGlzIiwiTWF0aFV0aWxzIiwiZGVnVG9SYWQiLCJjcmVhdGVFYXJ0aCIsImJhc2UiLCJlYXJ0aCIsImdlb21ldHJ5IiwiU3BoZXJlR2VvbWV0cnkiLCJjbG91ZEdlb21ldHJ5IiwiYnVtcFRleHR1cmUiLCJjbG91ZFRleHR1cmUiLCJtYXRlcmlhbCIsIk1lc2hQaG9uZ01hdGVyaWFsIiwibWFwIiwiYnVtcE1hcCIsImJ1bXBTY2FsZSIsImNsb3VkTWF0ZXJpYWwiLCJ0cmFuc3BhcmVudCIsIm9wYWNpdHkiLCJncm91bmQiLCJNZXNoIiwiY2xvdWQiLCJwdXNoIiwiY3JlYXRlTW9vbk9yYml0IiwibW9vbk9yYml0IiwiY3JlYXRlTW9vbiIsIm1vb25UZXh0dXJlIiwibW9vbk1lc2giLCJpbml0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiSFRNTENhbnZhc0VsZW1lbnQiLCJXZWJHTFJlbmRlcmVyIl0sInNvdXJjZVJvb3QiOiIifQ==