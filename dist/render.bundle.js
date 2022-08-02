/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/render.ts":
/*!*******************************!*\
  !*** ./src/scripts/render.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
/* harmony import */ var _assets_galaxy_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/galaxy.png */ "./src/assets/galaxy.png");




var createScene = function createScene(renderer) {
  var scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();
  var loader = new three__WEBPACK_IMPORTED_MODULE_2__.TextureLoader();
  var texture = loader.load(_assets_galaxy_png__WEBPACK_IMPORTED_MODULE_1__, function () {
    if (texture.image instanceof HTMLImageElement) {
      var rt = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLCubeRenderTarget(texture.image.height);
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
  var camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;
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
  var lighting = new three__WEBPACK_IMPORTED_MODULE_2__.DirectionalLight(color, intensity);
  lighting.position.set(-1, 2, 4);
  scene.add(lighting);
  var ambientLight = new three__WEBPACK_IMPORTED_MODULE_2__.AmbientLight(color, intensity / 5);
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

    renderer.render(scene, camera);
    window.requestAnimationFrame(render);
  };

  window.requestAnimationFrame(render);
};

var init = function init() {
  var canvas = document.querySelector("#c");

  if (canvas instanceof HTMLCanvasElement) {
    var renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer({
      canvas: canvas
    });
    var scene = createScene(renderer);
    var camera = createCamera(scene);
    createOrbitControls(camera, canvas);
    createLighting(scene);
    renderer.render(scene, camera);
    animate(renderer, scene, camera);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (init);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBLDhDQUE4Qzs7V0FFOUM7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxtQ0FBbUM7V0FDcEU7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWxEQTtVQUNBO1VBQ0E7VUFDQSwrSUFBK0ksd0RBQXdEO1VBQ3ZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmVhci1lYXJ0aC1vYmplY3QtdHJhY2tlci8uL3NyYy9zY3JpcHRzL3JlbmRlci50cyIsIndlYnBhY2s6Ly9uZWFyLWVhcnRoLW9iamVjdC10cmFja2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25lYXItZWFydGgtb2JqZWN0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9uZWFyLWVhcnRoLW9iamVjdC10cmFja2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uZWFyLWVhcnRoLW9iamVjdC10cmFja2VyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbmVhci1lYXJ0aC1vYmplY3QtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25lYXItZWFydGgtb2JqZWN0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZWFyLWVhcnRoLW9iamVjdC10cmFja2VyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL25lYXItZWFydGgtb2JqZWN0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbmVhci1lYXJ0aC1vYmplY3QtdHJhY2tlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL25lYXItZWFydGgtb2JqZWN0LXRyYWNrZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL25lYXItZWFydGgtb2JqZWN0LXRyYWNrZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9sc1wiO1xuaW1wb3J0IGdhbGF4eSBmcm9tIFwiLi4vYXNzZXRzL2dhbGF4eS5wbmdcIjtcblxuY29uc3QgY3JlYXRlU2NlbmUgPSAocmVuZGVyZXI6IFRIUkVFLldlYkdMUmVuZGVyZXIpID0+IHtcbiAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcbiAgY29uc3QgdGV4dHVyZSA9IGxvYWRlci5sb2FkKGdhbGF4eSwgKCkgPT4ge1xuICAgIGlmICh0ZXh0dXJlLmltYWdlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuICAgICAgY29uc3QgcnQgPSBuZXcgVEhSRUUuV2ViR0xDdWJlUmVuZGVyVGFyZ2V0KHRleHR1cmUuaW1hZ2UuaGVpZ2h0KTtcbiAgICAgIHJ0LmZyb21FcXVpcmVjdGFuZ3VsYXJUZXh0dXJlKHJlbmRlcmVyLCB0ZXh0dXJlKTtcbiAgICAgIHNjZW5lLmJhY2tncm91bmQgPSBydC50ZXh0dXJlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzY2VuZTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNhbWVyYSA9IChzY2VuZTogVEhSRUUuU2NlbmUpID0+IHtcbiAgY29uc3QgZm92ID0gNzU7XG4gIGNvbnN0IGFzcGVjdCA9IDI7XG4gIGNvbnN0IG5lYXIgPSAwLjE7XG4gIGNvbnN0IGZhciA9IDEwMDtcblxuICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoZm92LCBhc3BlY3QsIG5lYXIsIGZhcik7XG4gIGNhbWVyYS5wb3NpdGlvbi56ID0gMjtcblxuICBzY2VuZS5hZGQoY2FtZXJhKTtcblxuICByZXR1cm4gY2FtZXJhO1xufTtcblxuY29uc3QgY3JlYXRlT3JiaXRDb250cm9scyA9IChcbiAgY2FtZXJhOiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSxcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudFxuKSA9PiB7XG4gIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCBjYW52YXMpO1xuICBjb250cm9scy50YXJnZXQuc2V0KDAsIDAsIDApO1xuICBjb250cm9scy51cGRhdGUoKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUxpZ2h0aW5nID0gKHNjZW5lOiBUSFJFRS5TY2VuZSkgPT4ge1xuICBjb25zdCBjb2xvciA9IDB4ZmZmZmZmO1xuICBjb25zdCBpbnRlbnNpdHkgPSAxO1xuICBjb25zdCBsaWdodGluZyA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KGNvbG9yLCBpbnRlbnNpdHkpO1xuICBsaWdodGluZy5wb3NpdGlvbi5zZXQoLTEsIDIsIDQpO1xuICBzY2VuZS5hZGQobGlnaHRpbmcpO1xuXG4gIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoY29sb3IsIGludGVuc2l0eSAvIDUpO1xuICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcbn07XG5cbmNvbnN0IHJlc2l6ZVJlbmRlcmVyVG9EaXNwbGF5U2l6ZSA9IChyZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlcikgPT4ge1xuICBjb25zdCBjYW52YXMgPSByZW5kZXJlci5kb21FbGVtZW50O1xuICBjb25zdCBuZWVkc1Jlc2l6ZSA9XG4gICAgY2FudmFzLmNsaWVudFdpZHRoICE9PSBjYW52YXMud2lkdGggfHxcbiAgICBjYW52YXMuY2xpZW50SGVpZ2h0ICE9PSBjYW52YXMuaGVpZ2h0O1xuXG4gIGlmIChuZWVkc1Jlc2l6ZSkge1xuICAgIHJlbmRlcmVyLnNldFNpemUoY2FudmFzLmNsaWVudFdpZHRoLCBjYW52YXMuY2xpZW50SGVpZ2h0LCBmYWxzZSk7XG4gIH1cblxuICByZXR1cm4gbmVlZHNSZXNpemU7XG59O1xuXG5jb25zdCBhbmltYXRlID0gKFxuICByZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlcixcbiAgc2NlbmU6IFRIUkVFLlNjZW5lLFxuICBjYW1lcmE6IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhXG4pID0+IHtcbiAgY29uc3QgcmVuZGVyID0gKHRpbWU6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHRpbWVJblNlY29uZHMgPSB0aW1lICogMC4wMDE7XG5cbiAgICBjb25zdCBjYW52YXMgPSByZW5kZXJlci5kb21FbGVtZW50O1xuICAgIGNhbWVyYS5hc3BlY3QgPSBjYW52YXMuY2xpZW50V2lkdGggLyBjYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cbiAgICBpZiAocmVzaXplUmVuZGVyZXJUb0Rpc3BsYXlTaXplKHJlbmRlcmVyKSkge1xuICAgICAgY2FtZXJhLmFzcGVjdCA9IGNhbnZhcy5jbGllbnRXaWR0aCAvIGNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgIH1cblxuICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgfTtcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xufTtcblxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjXCIpO1xuXG4gIGlmIChjYW52YXMgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBjYW52YXMgfSk7XG4gICAgY29uc3Qgc2NlbmUgPSBjcmVhdGVTY2VuZShyZW5kZXJlcik7XG4gICAgY29uc3QgY2FtZXJhID0gY3JlYXRlQ2FtZXJhKHNjZW5lKTtcbiAgICBjcmVhdGVPcmJpdENvbnRyb2xzKGNhbWVyYSwgY2FudmFzKTtcbiAgICBjcmVhdGVMaWdodGluZyhzY2VuZSk7XG4gICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgIGFuaW1hdGUocmVuZGVyZXIsIHNjZW5lLCBjYW1lcmEpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IGZ1bmN0aW9uKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSk7IH0pKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwicmVuZGVyXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gZnVuY3Rpb24oY2h1bmtJZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwOyB9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IGZ1bmN0aW9uKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKGZ1bmN0aW9uKGlkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwOyB9KSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtuZWFyX2VhcnRoX29iamVjdF90cmFja2VyXCJdID0gc2VsZltcIndlYnBhY2tDaHVua25lYXJfZWFydGhfb2JqZWN0X3RyYWNrZXJcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3RocmVlX2V4YW1wbGVzX2pzbV9jb250cm9sc19PcmJpdENvbnRyb2xzX2pzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL3JlbmRlci50c1wiKTsgfSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwiZ2FsYXh5IiwiY3JlYXRlU2NlbmUiLCJyZW5kZXJlciIsInNjZW5lIiwiU2NlbmUiLCJsb2FkZXIiLCJUZXh0dXJlTG9hZGVyIiwidGV4dHVyZSIsImxvYWQiLCJpbWFnZSIsIkhUTUxJbWFnZUVsZW1lbnQiLCJydCIsIldlYkdMQ3ViZVJlbmRlclRhcmdldCIsImhlaWdodCIsImZyb21FcXVpcmVjdGFuZ3VsYXJUZXh0dXJlIiwiYmFja2dyb3VuZCIsImNyZWF0ZUNhbWVyYSIsImZvdiIsImFzcGVjdCIsIm5lYXIiLCJmYXIiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInBvc2l0aW9uIiwieiIsImFkZCIsImNyZWF0ZU9yYml0Q29udHJvbHMiLCJjYW52YXMiLCJjb250cm9scyIsInRhcmdldCIsInNldCIsInVwZGF0ZSIsImNyZWF0ZUxpZ2h0aW5nIiwiY29sb3IiLCJpbnRlbnNpdHkiLCJsaWdodGluZyIsIkRpcmVjdGlvbmFsTGlnaHQiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJyZXNpemVSZW5kZXJlclRvRGlzcGxheVNpemUiLCJkb21FbGVtZW50IiwibmVlZHNSZXNpemUiLCJjbGllbnRXaWR0aCIsIndpZHRoIiwiY2xpZW50SGVpZ2h0Iiwic2V0U2l6ZSIsImFuaW1hdGUiLCJyZW5kZXIiLCJ0aW1lIiwidGltZUluU2Vjb25kcyIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbml0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiSFRNTENhbnZhc0VsZW1lbnQiLCJXZWJHTFJlbmRlcmVyIl0sInNvdXJjZVJvb3QiOiIifQ==