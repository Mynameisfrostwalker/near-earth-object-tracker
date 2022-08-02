/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/render.ts":
/*!*******************************!*\
  !*** ./src/scripts/render.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
/* harmony import */ var _assets_galaxy_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/galaxy.png */ "./src/assets/galaxy.png");
/* harmony import */ var _assets_earthmap1k_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/earthmap1k.jpg */ "./src/assets/earthmap1k.jpg");
/* harmony import */ var _assets_earthbump_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/earthbump.jpg */ "./src/assets/earthbump.jpg");
/* harmony import */ var _assets_earthCloud_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/earthCloud.png */ "./src/assets/earthCloud.png");






var objects = [];

var createScene = function createScene(renderer) {
  var scene = new three__WEBPACK_IMPORTED_MODULE_5__.Scene();
  var loader = new three__WEBPACK_IMPORTED_MODULE_5__.TextureLoader();
  var texture = loader.load(_assets_galaxy_png__WEBPACK_IMPORTED_MODULE_1__, function () {
    if (texture.image instanceof HTMLImageElement) {
      var rt = new three__WEBPACK_IMPORTED_MODULE_5__.WebGLCubeRenderTarget(texture.image.height);
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
  var camera = new three__WEBPACK_IMPORTED_MODULE_5__.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 5;
  scene.add(camera);
  return camera;
};

var createOrbitControls = function createOrbitControls(camera, canvas) {
  var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__.OrbitControls(camera, canvas);
  controls.target.set(0, 0, 0);
  controls.update();
};

var createLighting = function createLighting(scene) {
  var color = 0xffffff;
  var intensity = 1;
  var lighting = new three__WEBPACK_IMPORTED_MODULE_5__.DirectionalLight(color, intensity);
  lighting.position.set(2, 2, 4);
  scene.add(lighting);
  var ambientLight = new three__WEBPACK_IMPORTED_MODULE_5__.AmbientLight(color, intensity / 5);
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

var createEarthOrbit = function createEarthOrbit(scene) {
  var earthOrbit = new three__WEBPACK_IMPORTED_MODULE_5__.Object3D();
  scene.add(earthOrbit);
  return earthOrbit;
};

var createEarth = function createEarth(base) {
  var earth = new three__WEBPACK_IMPORTED_MODULE_5__.Object3D();
  var geometry = new three__WEBPACK_IMPORTED_MODULE_5__.SphereGeometry(1);
  var cloudGeometry = new three__WEBPACK_IMPORTED_MODULE_5__.SphereGeometry(1.009);
  var loader = new three__WEBPACK_IMPORTED_MODULE_5__.TextureLoader();
  var texture = loader.load(_assets_earthmap1k_jpg__WEBPACK_IMPORTED_MODULE_2__);
  var bumpTexture = loader.load(_assets_earthbump_jpg__WEBPACK_IMPORTED_MODULE_3__);
  var cloudTexture = loader.load(_assets_earthCloud_png__WEBPACK_IMPORTED_MODULE_4__);
  var material = new three__WEBPACK_IMPORTED_MODULE_5__.MeshPhongMaterial({
    map: texture,
    bumpMap: bumpTexture,
    bumpScale: 0.3
  });
  var cloudMaterial = new three__WEBPACK_IMPORTED_MODULE_5__.MeshPhongMaterial({
    map: cloudTexture,
    transparent: true,
    opacity: 0.5
  });
  var ground = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh(geometry, material);
  var cloud = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh(cloudGeometry, cloudMaterial);
  earth.add(ground);
  earth.add(cloud);
  objects.push(ground);
  objects.push(cloud);
  var myAxis = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(0, 0, 1);
  earth.rotateOnAxis(myAxis, three__WEBPACK_IMPORTED_MODULE_5__.MathUtils.degToRad(23.5));
  base.add(earth);
  return earth;
};

var createMoonOrbit = function createMoonOrbit(earthOrbit) {
  var moonOrbit = new three__WEBPACK_IMPORTED_MODULE_5__.Object3D();
  earthOrbit.add(earthOrbit);
  return moonOrbit;
};

var init = function init() {
  var canvas = document.querySelector("#c");

  if (canvas instanceof HTMLCanvasElement) {
    var renderer = new three__WEBPACK_IMPORTED_MODULE_5__.WebGLRenderer({
      canvas: canvas
    });
    var scene = createScene(renderer);
    var camera = createCamera(scene);
    createOrbitControls(camera, canvas);
    createLighting(scene);
    var earthOrbit = createEarthOrbit(scene);
    createEarth(earthOrbit);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBLDhDQUE4Qzs7V0FFOUM7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxtQ0FBbUM7V0FDcEU7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWxEQTtVQUNBO1VBQ0E7VUFDQSwrSUFBK0ksd0RBQXdEO1VBQ3ZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmVhci1lYXJ0aC1vYmplY3QtdHJhY2tlci8uL3NyYy9zY3JpcHRzL3JlbmRlci50cyIsIndlYnBhY2s6Ly9uZWFyLWVhcnRoLW9iamVjdC10cmFja2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25lYXItZWFydGgtb2JqZWN0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9uZWFyLWVhcnRoLW9iamVjdC10cmFja2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uZWFyLWVhcnRoLW9iamVjdC10cmFja2VyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbmVhci1lYXJ0aC1vYmplY3QtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25lYXItZWFydGgtb2JqZWN0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZWFyLWVhcnRoLW9iamVjdC10cmFja2VyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL25lYXItZWFydGgtb2JqZWN0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbmVhci1lYXJ0aC1vYmplY3QtdHJhY2tlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL25lYXItZWFydGgtb2JqZWN0LXRyYWNrZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL25lYXItZWFydGgtb2JqZWN0LXRyYWNrZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9sc1wiO1xuaW1wb3J0IGdhbGF4eSBmcm9tIFwiLi4vYXNzZXRzL2dhbGF4eS5wbmdcIjtcbmltcG9ydCBlYXJ0aG1hcCBmcm9tIFwiLi4vYXNzZXRzL2VhcnRobWFwMWsuanBnXCI7XG5pbXBvcnQgZWFydGhidW1wIGZyb20gXCIuLi9hc3NldHMvZWFydGhidW1wLmpwZ1wiO1xuaW1wb3J0IGVhcnRoY2xvdWQgZnJvbSBcIi4uL2Fzc2V0cy9lYXJ0aENsb3VkLnBuZ1wiO1xuXG5jb25zdCBvYmplY3RzOiBUSFJFRS5NZXNoW10gPSBbXTtcblxuY29uc3QgY3JlYXRlU2NlbmUgPSAocmVuZGVyZXI6IFRIUkVFLldlYkdMUmVuZGVyZXIpID0+IHtcbiAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcbiAgY29uc3QgdGV4dHVyZSA9IGxvYWRlci5sb2FkKGdhbGF4eSwgKCkgPT4ge1xuICAgIGlmICh0ZXh0dXJlLmltYWdlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuICAgICAgY29uc3QgcnQgPSBuZXcgVEhSRUUuV2ViR0xDdWJlUmVuZGVyVGFyZ2V0KHRleHR1cmUuaW1hZ2UuaGVpZ2h0KTtcbiAgICAgIHJ0LmZyb21FcXVpcmVjdGFuZ3VsYXJUZXh0dXJlKHJlbmRlcmVyLCB0ZXh0dXJlKTtcbiAgICAgIHNjZW5lLmJhY2tncm91bmQgPSBydC50ZXh0dXJlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzY2VuZTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNhbWVyYSA9IChzY2VuZTogVEhSRUUuU2NlbmUpID0+IHtcbiAgY29uc3QgZm92ID0gNzU7XG4gIGNvbnN0IGFzcGVjdCA9IDI7XG4gIGNvbnN0IG5lYXIgPSAwLjE7XG4gIGNvbnN0IGZhciA9IDEwMDtcblxuICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoZm92LCBhc3BlY3QsIG5lYXIsIGZhcik7XG4gIGNhbWVyYS5wb3NpdGlvbi56ID0gNTtcblxuICBzY2VuZS5hZGQoY2FtZXJhKTtcblxuICByZXR1cm4gY2FtZXJhO1xufTtcblxuY29uc3QgY3JlYXRlT3JiaXRDb250cm9scyA9IChcbiAgY2FtZXJhOiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSxcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudFxuKSA9PiB7XG4gIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCBjYW52YXMpO1xuICBjb250cm9scy50YXJnZXQuc2V0KDAsIDAsIDApO1xuICBjb250cm9scy51cGRhdGUoKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUxpZ2h0aW5nID0gKHNjZW5lOiBUSFJFRS5TY2VuZSkgPT4ge1xuICBjb25zdCBjb2xvciA9IDB4ZmZmZmZmO1xuICBjb25zdCBpbnRlbnNpdHkgPSAxO1xuICBjb25zdCBsaWdodGluZyA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KGNvbG9yLCBpbnRlbnNpdHkpO1xuICBsaWdodGluZy5wb3NpdGlvbi5zZXQoMiwgMiwgNCk7XG4gIHNjZW5lLmFkZChsaWdodGluZyk7XG5cbiAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodChjb2xvciwgaW50ZW5zaXR5IC8gNSk7XG4gIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpO1xufTtcblxuY29uc3QgcmVzaXplUmVuZGVyZXJUb0Rpc3BsYXlTaXplID0gKHJlbmRlcmVyOiBUSFJFRS5XZWJHTFJlbmRlcmVyKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IHJlbmRlcmVyLmRvbUVsZW1lbnQ7XG4gIGNvbnN0IG5lZWRzUmVzaXplID1cbiAgICBjYW52YXMuY2xpZW50V2lkdGggIT09IGNhbnZhcy53aWR0aCB8fFxuICAgIGNhbnZhcy5jbGllbnRIZWlnaHQgIT09IGNhbnZhcy5oZWlnaHQ7XG5cbiAgaWYgKG5lZWRzUmVzaXplKSB7XG4gICAgcmVuZGVyZXIuc2V0U2l6ZShjYW52YXMuY2xpZW50V2lkdGgsIGNhbnZhcy5jbGllbnRIZWlnaHQsIGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiBuZWVkc1Jlc2l6ZTtcbn07XG5cbmNvbnN0IGFuaW1hdGUgPSAoXG4gIHJlbmRlcmVyOiBUSFJFRS5XZWJHTFJlbmRlcmVyLFxuICBzY2VuZTogVEhSRUUuU2NlbmUsXG4gIGNhbWVyYTogVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmFcbikgPT4ge1xuICBjb25zdCByZW5kZXIgPSAodGltZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdGltZUluU2Vjb25kcyA9IHRpbWUgKiAwLjAwMTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IHJlbmRlcmVyLmRvbUVsZW1lbnQ7XG4gICAgY2FtZXJhLmFzcGVjdCA9IGNhbnZhcy5jbGllbnRXaWR0aCAvIGNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICAgIGlmIChyZXNpemVSZW5kZXJlclRvRGlzcGxheVNpemUocmVuZGVyZXIpKSB7XG4gICAgICBjYW1lcmEuYXNwZWN0ID0gY2FudmFzLmNsaWVudFdpZHRoIC8gY2FudmFzLmNsaWVudEhlaWdodDtcbiAgICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgfVxuXG4gICAgb2JqZWN0cy5mb3JFYWNoKChvYmplY3QsIG5keCkgPT4ge1xuICAgICAgb2JqZWN0LnJvdGF0aW9uLnkgPSB0aW1lSW5TZWNvbmRzICogMC4wMiArIDAuMDIgKiBuZHg7XG4gICAgfSk7XG5cbiAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gIH07XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUVhcnRoT3JiaXQgPSAoc2NlbmU6IFRIUkVFLlNjZW5lKSA9PiB7XG4gIGNvbnN0IGVhcnRoT3JiaXQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgc2NlbmUuYWRkKGVhcnRoT3JiaXQpO1xuICByZXR1cm4gZWFydGhPcmJpdDtcbn07XG5cbmNvbnN0IGNyZWF0ZUVhcnRoID0gKGJhc2U6IFRIUkVFLk9iamVjdDNEKSA9PiB7XG4gIGNvbnN0IGVhcnRoID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG5cbiAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMSk7XG4gIGNvbnN0IGNsb3VkR2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMS4wMDkpO1xuXG4gIGNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XG4gIGNvbnN0IHRleHR1cmUgPSBsb2FkZXIubG9hZChlYXJ0aG1hcCk7XG4gIGNvbnN0IGJ1bXBUZXh0dXJlID0gbG9hZGVyLmxvYWQoZWFydGhidW1wKTtcbiAgY29uc3QgY2xvdWRUZXh0dXJlID0gbG9hZGVyLmxvYWQoZWFydGhjbG91ZCk7XG5cbiAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe1xuICAgIG1hcDogdGV4dHVyZSxcbiAgICBidW1wTWFwOiBidW1wVGV4dHVyZSxcbiAgICBidW1wU2NhbGU6IDAuMyxcbiAgfSk7XG4gIGNvbnN0IGNsb3VkTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe1xuICAgIG1hcDogY2xvdWRUZXh0dXJlLFxuICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgIG9wYWNpdHk6IDAuNSxcbiAgfSk7XG5cbiAgY29uc3QgZ3JvdW5kID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgY29uc3QgY2xvdWQgPSBuZXcgVEhSRUUuTWVzaChjbG91ZEdlb21ldHJ5LCBjbG91ZE1hdGVyaWFsKTtcblxuICBlYXJ0aC5hZGQoZ3JvdW5kKTtcbiAgZWFydGguYWRkKGNsb3VkKTtcbiAgb2JqZWN0cy5wdXNoKGdyb3VuZCk7XG4gIG9iamVjdHMucHVzaChjbG91ZCk7XG5cbiAgY29uc3QgbXlBeGlzID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMSk7XG4gIGVhcnRoLnJvdGF0ZU9uQXhpcyhteUF4aXMsIFRIUkVFLk1hdGhVdGlscy5kZWdUb1JhZCgyMy41KSk7XG5cbiAgYmFzZS5hZGQoZWFydGgpO1xuXG4gIHJldHVybiBlYXJ0aDtcbn07XG5cbmNvbnN0IGNyZWF0ZU1vb25PcmJpdCA9IChlYXJ0aE9yYml0OiBUSFJFRS5PYmplY3QzRCkgPT4ge1xuICBjb25zdCBtb29uT3JiaXQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgZWFydGhPcmJpdC5hZGQoZWFydGhPcmJpdCk7XG4gIHJldHVybiBtb29uT3JiaXQ7XG59O1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NcIik7XG5cbiAgaWYgKGNhbnZhcyBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGNhbnZhcyB9KTtcbiAgICBjb25zdCBzY2VuZSA9IGNyZWF0ZVNjZW5lKHJlbmRlcmVyKTtcbiAgICBjb25zdCBjYW1lcmEgPSBjcmVhdGVDYW1lcmEoc2NlbmUpO1xuICAgIGNyZWF0ZU9yYml0Q29udHJvbHMoY2FtZXJhLCBjYW52YXMpO1xuICAgIGNyZWF0ZUxpZ2h0aW5nKHNjZW5lKTtcbiAgICBjb25zdCBlYXJ0aE9yYml0ID0gY3JlYXRlRWFydGhPcmJpdChzY2VuZSk7XG4gICAgY3JlYXRlRWFydGgoZWFydGhPcmJpdCk7XG4gICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgIGFuaW1hdGUocmVuZGVyZXIsIHNjZW5lLCBjYW1lcmEpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IGZ1bmN0aW9uKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSk7IH0pKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwicmVuZGVyXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gZnVuY3Rpb24oY2h1bmtJZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwOyB9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IGZ1bmN0aW9uKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKGZ1bmN0aW9uKGlkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwOyB9KSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtuZWFyX2VhcnRoX29iamVjdF90cmFja2VyXCJdID0gc2VsZltcIndlYnBhY2tDaHVua25lYXJfZWFydGhfb2JqZWN0X3RyYWNrZXJcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3RocmVlX2V4YW1wbGVzX2pzbV9jb250cm9sc19PcmJpdENvbnRyb2xzX2pzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL3JlbmRlci50c1wiKTsgfSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwiZ2FsYXh5IiwiZWFydGhtYXAiLCJlYXJ0aGJ1bXAiLCJlYXJ0aGNsb3VkIiwib2JqZWN0cyIsImNyZWF0ZVNjZW5lIiwicmVuZGVyZXIiLCJzY2VuZSIsIlNjZW5lIiwibG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsInRleHR1cmUiLCJsb2FkIiwiaW1hZ2UiLCJIVE1MSW1hZ2VFbGVtZW50IiwicnQiLCJXZWJHTEN1YmVSZW5kZXJUYXJnZXQiLCJoZWlnaHQiLCJmcm9tRXF1aXJlY3Rhbmd1bGFyVGV4dHVyZSIsImJhY2tncm91bmQiLCJjcmVhdGVDYW1lcmEiLCJmb3YiLCJhc3BlY3QiLCJuZWFyIiwiZmFyIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJhZGQiLCJjcmVhdGVPcmJpdENvbnRyb2xzIiwiY2FudmFzIiwiY29udHJvbHMiLCJ0YXJnZXQiLCJzZXQiLCJ1cGRhdGUiLCJjcmVhdGVMaWdodGluZyIsImNvbG9yIiwiaW50ZW5zaXR5IiwibGlnaHRpbmciLCJEaXJlY3Rpb25hbExpZ2h0IiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwicmVzaXplUmVuZGVyZXJUb0Rpc3BsYXlTaXplIiwiZG9tRWxlbWVudCIsIm5lZWRzUmVzaXplIiwiY2xpZW50V2lkdGgiLCJ3aWR0aCIsImNsaWVudEhlaWdodCIsInNldFNpemUiLCJhbmltYXRlIiwicmVuZGVyIiwidGltZSIsInRpbWVJblNlY29uZHMiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiZm9yRWFjaCIsIm9iamVjdCIsIm5keCIsInJvdGF0aW9uIiwieSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNyZWF0ZUVhcnRoT3JiaXQiLCJlYXJ0aE9yYml0IiwiT2JqZWN0M0QiLCJjcmVhdGVFYXJ0aCIsImJhc2UiLCJlYXJ0aCIsImdlb21ldHJ5IiwiU3BoZXJlR2VvbWV0cnkiLCJjbG91ZEdlb21ldHJ5IiwiYnVtcFRleHR1cmUiLCJjbG91ZFRleHR1cmUiLCJtYXRlcmlhbCIsIk1lc2hQaG9uZ01hdGVyaWFsIiwibWFwIiwiYnVtcE1hcCIsImJ1bXBTY2FsZSIsImNsb3VkTWF0ZXJpYWwiLCJ0cmFuc3BhcmVudCIsIm9wYWNpdHkiLCJncm91bmQiLCJNZXNoIiwiY2xvdWQiLCJwdXNoIiwibXlBeGlzIiwiVmVjdG9yMyIsInJvdGF0ZU9uQXhpcyIsIk1hdGhVdGlscyIsImRlZ1RvUmFkIiwiY3JlYXRlTW9vbk9yYml0IiwibW9vbk9yYml0IiwiaW5pdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkhUTUxDYW52YXNFbGVtZW50IiwiV2ViR0xSZW5kZXJlciJdLCJzb3VyY2VSb290IjoiIn0=