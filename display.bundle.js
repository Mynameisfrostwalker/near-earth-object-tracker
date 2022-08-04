/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!********************************!*\
  !*** ./src/scripts/display.ts ***!
  \********************************/
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


}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxJQUFNZixJQUFJLEdBQUdGLGVBQWUsQ0FBQ0MsWUFBRCxDQUE1QjtJQUNBLElBQU1VLElBQUksR0FBR0QsZUFBZSxDQUFDVCxZQUFELENBQTVCO0lBQ0EsSUFBTWlCLElBQUksR0FBR0YsZUFBZSxDQUFDZixZQUFELEVBQWVzQyxNQUFmLENBQTVCO0lBQ0EsSUFBTVgsSUFBSSxHQUFHRCxlQUFlLENBQUMxQixZQUFELENBQTVCO0lBRUFxQyxPQUFPLENBQUM1RCxXQUFSLENBQW9Cd0IsSUFBcEI7SUFDQW9DLE9BQU8sQ0FBQzVELFdBQVIsQ0FBb0JpQyxJQUFwQjtJQUNBMkIsT0FBTyxDQUFDNUQsV0FBUixDQUFvQndDLElBQXBCO0lBQ0FvQixPQUFPLENBQUM1RCxXQUFSLENBQW9Ca0QsSUFBcEI7RUFDRDtBQUNGLENBekJEOztBQTJCQSxJQUFNYSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0VBQ3pCLElBQU01RCxTQUFTLEdBQUdYLFFBQVEsQ0FBQ1ksYUFBVCxDQUF1QixZQUF2QixDQUFsQjs7RUFDQSxJQUFJRCxTQUFTLFlBQVlFLFdBQXpCLEVBQXNDO0lBQ3BDLElBQU0yRCxRQUFRLEdBQUd4RSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBakI7SUFDQXVFLFFBQVEsQ0FBQ3RFLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLE9BQXZCO0lBQ0FxRSxRQUFRLENBQUN0QyxXQUFULEdBQXVCLHFCQUF2QjtJQUNBdkIsU0FBUyxDQUFDSCxXQUFWLENBQXNCZ0UsUUFBdEI7RUFDRDtBQUNGLENBUkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZWFyLWVhcnRoLW9iamVjdC10cmFja2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25lYXItZWFydGgtb2JqZWN0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25lYXItZWFydGgtb2JqZWN0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9uZWFyLWVhcnRoLW9iamVjdC10cmFja2VyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbmVhci1lYXJ0aC1vYmplY3QtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25lYXItZWFydGgtb2JqZWN0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbmVhci1lYXJ0aC1vYmplY3QtdHJhY2tlci8uL3NyYy9zY3JpcHRzL2Rpc3BsYXkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB0eXBlIHsgQXN0ZXJvaWRJbmZvIH0gZnJvbSBcIi4vZmV0Y2hEYXRhXCI7XG5pbXBvcnQgc3BhY2VtcDMgZnJvbSBcIi4uL2Fzc2V0cy9zcGFjZS5tcDNcIjtcbmltcG9ydCBzcGFjZW9nZyBmcm9tIFwiLi4vYXNzZXRzL3NwYWNlLm9nZ1wiO1xuXG5jb25zdCBjcmVhdGVBdWRpbyA9ICgpID0+IHtcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXVkaW9cIik7XG4gIGF1ZGlvLmNsYXNzTGlzdC5hZGQoXCJzcGFjZVwiKTtcbiAgYXVkaW8uc2V0QXR0cmlidXRlKFwiYXV0b3BsYXlcIiwgXCJ0cnVlXCIpO1xuICBhdWRpby5zZXRBdHRyaWJ1dGUoXCJsb29wXCIsIFwidHJ1ZVwiKTtcbiAgY29uc3Qgc291cmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNvdXJjZVwiKTtcbiAgc291cmNlLnNyYyA9IHNwYWNlbXAzO1xuICBzb3VyY2UudHlwZSA9IFwiYXVkaW8vbXBlZ1wiO1xuICBhdWRpby5hcHBlbmRDaGlsZChzb3VyY2UpO1xuICBjb25zdCBzb3VyY2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNvdXJjZVwiKTtcbiAgc291cmNlMi5zcmMgPSBzcGFjZW9nZztcbiAgc291cmNlMi50eXBlID0gXCJhdWRpby9vZ2dcIjtcbiAgYXVkaW8uYXBwZW5kQ2hpbGQoc291cmNlMik7XG4gIHJldHVybiBhdWRpbztcbn07XG5cbmNvbnN0IGluaXRpYWxEaXNwbGF5ID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgaWYgKGNvbnRhaW5lciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3Qgc291bmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNvdW5kRGl2LmNsYXNzTGlzdC5hZGQoXCJzb3VuZERpdlwiKTtcblxuICAgIGxldCBzb3VuZCA9IGZhbHNlO1xuICAgIGNvbnN0IG1pY3JvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtaWNyb0Rpdi5jbGFzc0xpc3QuYWRkKFwibWljcm9EaXZcIik7XG4gICAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGkuY2xhc3NMaXN0LmFkZChcImZhc1wiLCBcImZhLW1pY3JvcGhvbmUtc2xhc2hcIik7XG4gICAgbWljcm9EaXYuYXBwZW5kQ2hpbGQoaSk7XG4gICAgY29uc3QgYXVkaW8gPSBjcmVhdGVBdWRpbygpO1xuICAgIG1pY3JvRGl2LmFwcGVuZENoaWxkKGF1ZGlvKTtcbiAgICBzb3VuZERpdi5hcHBlbmRDaGlsZChtaWNyb0Rpdik7XG5cbiAgICBtaWNyb0Rpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKCFzb3VuZCkge1xuICAgICAgICBzb3VuZCA9IHRydWU7XG4gICAgICAgIGF1ZGlvXG4gICAgICAgICAgLnBsYXkoKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1pY3JvRGl2MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWljcm9EaXZcIik7XG4gICAgICAgICAgICBjb25zdCBzb3VuZERpdjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvdW5kRGl2XCIpO1xuICAgICAgICAgICAgY29uc3QgYXVkaW8yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImF1ZGlvXCIpO1xuICAgICAgICAgICAgaWYgKG1pY3JvRGl2MiAmJiBzb3VuZERpdjIgJiYgYXVkaW8yKSB7XG4gICAgICAgICAgICAgIG1pY3JvRGl2Mi5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgICAgY29uc3QgaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgICAgICAgICAgaTIuY2xhc3NMaXN0LmFkZChcImZhc1wiLCBcImZhLW1pY3JvcGhvbmVcIik7XG4gICAgICAgICAgICAgIG1pY3JvRGl2Mi5hcHBlbmRDaGlsZChpMik7XG4gICAgICAgICAgICAgIG1pY3JvRGl2Mi5hcHBlbmRDaGlsZChhdWRpbzIpO1xuICAgICAgICAgICAgICBzb3VuZERpdjIuYXBwZW5kQ2hpbGQobWljcm9EaXYyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1ZGlvIGZhaWxlZCB0byBwbGF5IVwiKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvdW5kID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGF1ZGlvMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhdWRpb1wiKTtcbiAgICAgICAgY29uc3QgbWljcm9EaXYyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taWNyb0RpdlwiKTtcbiAgICAgICAgY29uc3Qgc291bmREaXYyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3VuZERpdlwiKTtcbiAgICAgICAgaWYgKG1pY3JvRGl2MiAmJiBzb3VuZERpdjIgJiYgYXVkaW8yKSB7XG4gICAgICAgICAgYXVkaW8yLnBhdXNlKCk7XG4gICAgICAgICAgbWljcm9EaXYyLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICAgIGNvbnN0IGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICAgICAgaTIuY2xhc3NMaXN0LmFkZChcImZhc1wiLCBcImZhLW1pY3JvcGhvbmUtc2xhc2hcIik7XG4gICAgICAgICAgbWljcm9EaXYyLmFwcGVuZENoaWxkKGkyKTtcbiAgICAgICAgICBtaWNyb0RpdjIuYXBwZW5kQ2hpbGQoYXVkaW8yKTtcbiAgICAgICAgICBzb3VuZERpdjIuYXBwZW5kQ2hpbGQobWljcm9EaXYyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNvdW5kRGl2KTtcbiAgfVxufTtcblxuY29uc3QgZGlzcGxheURpdjFJbmZvID0gKGFzdGVyb2lkSW5mbzogQXN0ZXJvaWRJbmZvKSA9PiB7XG4gIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYxLmNsYXNzTGlzdC5hZGQoXCJkaXYxXCIpO1xuXG4gIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJuYW1lRGl2XCIpO1xuICBuYW1lRGl2LnRleHRDb250ZW50ID0gYE5hbWU6ICR7YXN0ZXJvaWRJbmZvLm5hbWV9YDtcbiAgZGl2MS5hcHBlbmRDaGlsZChuYW1lRGl2KTtcblxuICBjb25zdCBtYWduaXR1ZGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWduaXR1ZGVEaXYuY2xhc3NMaXN0LmFkZChcIm1hZ25pdHVkZURpdlwiKTtcbiAgbWFnbml0dWRlRGl2LnRleHRDb250ZW50ID0gYEFic29sdXRlIE1hZ25pdHVkZTogJHthc3Rlcm9pZEluZm8uYWJzb2x1dGVNYWduaXR1ZGV9YDtcbiAgZGl2MS5hcHBlbmRDaGlsZChtYWduaXR1ZGVEaXYpO1xuXG4gIGNvbnN0IHZlbG9jaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdmVsb2NpdHlEaXYuY2xhc3NMaXN0LmFkZChcInZlbG9jaXR5RGl2XCIpO1xuICB2ZWxvY2l0eURpdi50ZXh0Q29udGVudCA9IGBSZWxhdGl2ZSB2ZWxvY2l0eTogJHthc3Rlcm9pZEluZm8ucmVsYXRpdmVWZWxvY2l0eX0ga20vc2A7XG4gIGRpdjEuYXBwZW5kQ2hpbGQodmVsb2NpdHlEaXYpO1xuXG4gIHJldHVybiBkaXYxO1xufTtcblxuY29uc3QgZGlzcGxheURpdjJJbmZvID0gKGFzdGVyb2lkSW5mbzogQXN0ZXJvaWRJbmZvKSA9PiB7XG4gIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYyLmNsYXNzTGlzdC5hZGQoXCJkaXYyXCIpO1xuXG4gIGNvbnN0IG1heERpYW1ldGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWF4RGlhbWV0ZXJEaXYuY2xhc3NMaXN0LmFkZChcIm1heERpYW1ldGVyRGl2XCIpO1xuICBtYXhEaWFtZXRlckRpdi50ZXh0Q29udGVudCA9IGBNYXhpbXVtIGVzdGltYXRlZCBkaWFtZXRlcjogJHthc3Rlcm9pZEluZm8uZXN0aW1hdGVkRGlhbWV0ZXJNYXh9IGttYDtcbiAgZGl2Mi5hcHBlbmRDaGlsZChtYXhEaWFtZXRlckRpdik7XG5cbiAgY29uc3QgbWluRGlhbWV0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtaW5EaWFtZXRlckRpdi5jbGFzc0xpc3QuYWRkKFwibWluRGlhbWV0ZXJEaXZcIik7XG4gIG1pbkRpYW1ldGVyRGl2LnRleHRDb250ZW50ID0gYE1pbmltdW0gZXN0aW1hdGVkIGRpYW1ldGVyOiAke2FzdGVyb2lkSW5mby5lc3RpbWF0ZWREaWFtZXRlck1pbn0ga21gO1xuICBkaXYyLmFwcGVuZENoaWxkKG1pbkRpYW1ldGVyRGl2KTtcblxuICByZXR1cm4gZGl2Mjtcbn07XG5cbmNvbnN0IGRpc3BsYXlEaXYzSW5mbyA9IChcbiAgYXN0ZXJvaWRJbmZvOiBBc3Rlcm9pZEluZm8sXG4gIHJldmVydEZ1bmN0aW9uOiAoKSA9PiB2b2lkXG4pID0+IHtcbiAgY29uc3QgZGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdjMuY2xhc3NMaXN0LmFkZChcImRpdjNcIik7XG5cbiAgY29uc3QgaGF6YXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGF6YXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJoYXphcmREaXZcIik7XG4gIGNvbnN0IGljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGlmIChhc3Rlcm9pZEluZm8ucG90ZW50aWFsbHlIYXphcmRvdXMpIHtcbiAgICBpLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS1leGNsYW1hdGlvbi10cmlhbmdsZVwiKTtcbiAgICBpY29uRGl2LmFwcGVuZENoaWxkKGkpO1xuICAgIGhhemFyZERpdi5hcHBlbmRDaGlsZChpY29uRGl2KTtcblxuICAgIHRleHREaXYudGV4dENvbnRlbnQgPSBcIkFzdGVyb2lkIGlzIHBvdGVudGlhbGx5IGhhemFyZG91cyFcIjtcbiAgICBoYXphcmREaXYuYXBwZW5kQ2hpbGQodGV4dERpdik7XG5cbiAgICBoYXphcmREaXYuY2xhc3NMaXN0LmFkZChcImhhemFyZFwiKTtcbiAgfSBlbHNlIHtcbiAgICBpLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS1jaGVjay1jaXJjbGVcIik7XG4gICAgaWNvbkRpdi5hcHBlbmRDaGlsZChpKTtcbiAgICBoYXphcmREaXYuYXBwZW5kQ2hpbGQoaWNvbkRpdik7XG5cbiAgICB0ZXh0RGl2LnRleHRDb250ZW50ID0gXCJBc3Rlcm9pZCBpcyBub3QgcG90ZW50aWFsbHkgaGF6YXJkb3VzIVwiO1xuICAgIGhhemFyZERpdi5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcblxuICAgIGhhemFyZERpdi5jbGFzc0xpc3QuYWRkKFwibm90LWhhemFyZFwiKTtcbiAgfVxuICBkaXYzLmFwcGVuZENoaWxkKGhhemFyZERpdik7XG5cbiAgY29uc3QgYmFja0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJhY2tEaXYuY2xhc3NMaXN0LmFkZChcImJhY2tEaXZcIik7XG5cbiAgY29uc3QgYmFja0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBiYWNrSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBiYWNrSS5jbGFzc0xpc3QuYWRkKFwiZmFzXCIsIFwiZmEtYXJyb3ctYWx0LWNpcmNsZS1sZWZ0XCIpO1xuICBiYWNrSWNvbi5hcHBlbmRDaGlsZChiYWNrSSk7XG4gIGJhY2tEaXYuYXBwZW5kQ2hpbGQoYmFja0ljb24pO1xuXG4gIGNvbnN0IGJhY2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRcIik7XG4gIGJhY2tUZXh0LnRleHRDb250ZW50ID0gXCJCYWNrIHRvIEVhcnRoIFZpZXdcIjtcbiAgYmFja0Rpdi5hcHBlbmRDaGlsZChiYWNrVGV4dCk7XG5cbiAgYmFja0Rpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmV2ZXJ0RnVuY3Rpb24pO1xuXG4gIGRpdjMuYXBwZW5kQ2hpbGQoYmFja0Rpdik7XG5cbiAgcmV0dXJuIGRpdjM7XG59O1xuXG5jb25zdCBkaXNwbGF5RGl2NEluZm8gPSAoYXN0ZXJvaWRJbmZvOiBBc3Rlcm9pZEluZm8pID0+IHtcbiAgY29uc3QgZGl2NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdjQuY2xhc3NMaXN0LmFkZChcImRpdjRcIik7XG5cbiAgY29uc3QgY2xvc2VzdEFwcHJvYWNoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2xvc2VzdEFwcHJvYWNoRGl2LmNsYXNzTGlzdC5hZGQoXCJjbG9zZXN0QXBwcm9hY2hEaXZcIik7XG4gIGNsb3Nlc3RBcHByb2FjaERpdi50ZXh0Q29udGVudCA9IGBDbG9zZXN0IGFwcHJvYWNoIGRhdGU6ICR7YXN0ZXJvaWRJbmZvLmNsb3Nlc3RBcHByb2FjaERhdGV9YDtcbiAgZGl2NC5hcHBlbmRDaGlsZChjbG9zZXN0QXBwcm9hY2hEaXYpO1xuXG4gIGNvbnN0IG1pc3NEaXN0YW5jZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1pc3NEaXN0YW5jZURpdi5jbGFzc0xpc3QuYWRkKFwibWlzc0Rpc3RhbmNlRGl2XCIpO1xuICBtaXNzRGlzdGFuY2VEaXYudGV4dENvbnRlbnQgPSBgTWlzcyBkaXN0YW5jZTogJHtwYXJzZUZsb2F0KFxuICAgIGFzdGVyb2lkSW5mby5taXNzRGlzdGFuY2VcbiAgKS50b0ZpeGVkKDEpfSBrbWA7XG4gIGRpdjQuYXBwZW5kQ2hpbGQobWlzc0Rpc3RhbmNlRGl2KTtcblxuICBjb25zdCBvcmJpdGluZ0JvZHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvcmJpdGluZ0JvZHlEaXYuY2xhc3NMaXN0LmFkZChcIm9yYml0aW5nQm9keURpdlwiKTtcbiAgb3JiaXRpbmdCb2R5RGl2LnRleHRDb250ZW50ID0gYE9yYml0aW5nIGJvZHk6ICR7YXN0ZXJvaWRJbmZvLm9yYml0aW5nQm9keX1gO1xuICBkaXY0LmFwcGVuZENoaWxkKG9yYml0aW5nQm9keURpdik7XG5cbiAgcmV0dXJuIGRpdjQ7XG59O1xuXG5jb25zdCBkaXNwbGF5QXN0ZXJvaWRJbmZvID0gKFxuICBhc3Rlcm9pZEluZm86IEFzdGVyb2lkSW5mbyxcbiAgcmV2ZXJ0RnVuY3Rpb246ICgpID0+IHZvaWRcbikgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgaWYgKGNvbnRhaW5lciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0Rpdik7XG5cbiAgICBjb25zdCByZXZlcnQgPSAoKSA9PiB7XG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoaW5mb0Rpdik7XG4gICAgICByZXZlcnRGdW5jdGlvbigpO1xuICAgIH07XG5cbiAgICBjb25zdCBkaXYxID0gZGlzcGxheURpdjFJbmZvKGFzdGVyb2lkSW5mbyk7XG4gICAgY29uc3QgZGl2MiA9IGRpc3BsYXlEaXYySW5mbyhhc3Rlcm9pZEluZm8pO1xuICAgIGNvbnN0IGRpdjMgPSBkaXNwbGF5RGl2M0luZm8oYXN0ZXJvaWRJbmZvLCByZXZlcnQpO1xuICAgIGNvbnN0IGRpdjQgPSBkaXNwbGF5RGl2NEluZm8oYXN0ZXJvaWRJbmZvKTtcblxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQoZGl2MSk7XG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChkaXYyKTtcbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKGRpdjMpO1xuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQoZGl2NCk7XG4gIH1cbn07XG5cbmNvbnN0IGVycm9yRGlzcGxheSA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gIGlmIChjb250YWluZXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlcnJvckRpdi5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG4gICAgZXJyb3JEaXYudGV4dENvbnRlbnQgPSBcIkVycm9yIGxvYWRpbmcgZGF0YSFcIjtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3JEaXYpO1xuICB9XG59O1xuXG5leHBvcnQgeyBkaXNwbGF5QXN0ZXJvaWRJbmZvLCBpbml0aWFsRGlzcGxheSwgZXJyb3JEaXNwbGF5IH07XG4iXSwibmFtZXMiOlsic3BhY2VtcDMiLCJzcGFjZW9nZyIsImNyZWF0ZUF1ZGlvIiwiYXVkaW8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJzb3VyY2UiLCJzcmMiLCJ0eXBlIiwiYXBwZW5kQ2hpbGQiLCJzb3VyY2UyIiwiaW5pdGlhbERpc3BsYXkiLCJjb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiSFRNTEVsZW1lbnQiLCJzb3VuZERpdiIsInNvdW5kIiwibWljcm9EaXYiLCJpIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXkiLCJ0aGVuIiwibWljcm9EaXYyIiwic291bmREaXYyIiwiYXVkaW8yIiwicmVwbGFjZUNoaWxkcmVuIiwiaTIiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJwYXVzZSIsImRpc3BsYXlEaXYxSW5mbyIsImFzdGVyb2lkSW5mbyIsImRpdjEiLCJuYW1lRGl2IiwidGV4dENvbnRlbnQiLCJuYW1lIiwibWFnbml0dWRlRGl2IiwiYWJzb2x1dGVNYWduaXR1ZGUiLCJ2ZWxvY2l0eURpdiIsInJlbGF0aXZlVmVsb2NpdHkiLCJkaXNwbGF5RGl2MkluZm8iLCJkaXYyIiwibWF4RGlhbWV0ZXJEaXYiLCJlc3RpbWF0ZWREaWFtZXRlck1heCIsIm1pbkRpYW1ldGVyRGl2IiwiZXN0aW1hdGVkRGlhbWV0ZXJNaW4iLCJkaXNwbGF5RGl2M0luZm8iLCJyZXZlcnRGdW5jdGlvbiIsImRpdjMiLCJoYXphcmREaXYiLCJpY29uRGl2IiwidGV4dERpdiIsInBvdGVudGlhbGx5SGF6YXJkb3VzIiwiYmFja0RpdiIsImJhY2tJY29uIiwiYmFja0kiLCJiYWNrVGV4dCIsImRpc3BsYXlEaXY0SW5mbyIsImRpdjQiLCJjbG9zZXN0QXBwcm9hY2hEaXYiLCJjbG9zZXN0QXBwcm9hY2hEYXRlIiwibWlzc0Rpc3RhbmNlRGl2IiwicGFyc2VGbG9hdCIsIm1pc3NEaXN0YW5jZSIsInRvRml4ZWQiLCJvcmJpdGluZ0JvZHlEaXYiLCJvcmJpdGluZ0JvZHkiLCJkaXNwbGF5QXN0ZXJvaWRJbmZvIiwiaW5mb0RpdiIsInJldmVydCIsInJlbW92ZUNoaWxkIiwiZXJyb3JEaXNwbGF5IiwiZXJyb3JEaXYiXSwic291cmNlUm9vdCI6IiJ9