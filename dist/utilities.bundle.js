/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/scripts/utilities.ts ***!
  \**********************************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxFQUFFRixNQUFNLElBQUl4QixZQUFZLENBQUNDLEVBQUUsR0FBR0EsRUFBTixDQUFaLEdBQXdCLEdBQXhCLEdBQThCLENBQTlCLEdBQWtDLENBQUMsQ0FBdkM7SUFISixDQUFQO0VBS0Q7O0VBRUQsT0FBTztJQUNMTCxDQUFDLEVBQUU0QixNQUFNLElBQUl4QixZQUFZLFdBQUlDLEVBQUosV0FBWixHQUE2QixHQUE3QixHQUFtQyxDQUFuQyxHQUF1QyxDQUFDLENBQTVDLENBREo7SUFFTEosQ0FBQyxFQUFFeUIsTUFGRTtJQUdMSSxDQUFDLEVBQUVMLE1BQU0sSUFBSXJCLFlBQVksQ0FBQ0MsRUFBRSxHQUFHQSxFQUFOLENBQVosR0FBd0IsR0FBeEIsR0FBOEIsQ0FBOUIsR0FBa0MsQ0FBQyxDQUF2QztFQUhKLENBQVA7QUFLRCxDQXRCRCIsInNvdXJjZXMiOlsid2VicGFjazovL25lYXItZWFydGgtb2JqZWN0LXRyYWNrZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmVhci1lYXJ0aC1vYmplY3QtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbmVhci1lYXJ0aC1vYmplY3QtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25lYXItZWFydGgtb2JqZWN0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZWFyLWVhcnRoLW9iamVjdC10cmFja2VyLy4vc3JjL3NjcmlwdHMvdXRpbGl0aWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGJhc2VMb2cgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IE1hdGgubG9nKHgpIC8gTWF0aC5sb2coeSk7XG5cbmNvbnN0IHBzZXVkb1JhbmRvbSA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IG51bWJlciA9IHBhcnNlRmxvYXQoaWQpO1xuICBjb25zdCBzdW0gPSBpZFxuICAgIC5zcGxpdChcIlwiKVxuICAgIC5tYXAoKG51bSkgPT4gcGFyc2VGbG9hdChudW0pKVxuICAgIC5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgY3VyciwgMCk7XG4gIGNvbnN0IHZhbHVlID0gKG51bWJlciAtIHN1bSkgLyAobnVtYmVyICsgc3VtKTtcbiAgY29uc3QgdmFsdWVBcnIgPSB2YWx1ZVxuICAgIC50b1N0cmluZygpXG4gICAgLnNwbGl0KFwiXCIpXG4gICAgLmZpbHRlcigoc3RyKSA9PiB7XG4gICAgICBpZiAoc3RyICE9PSBcIi5cIikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gIHZhbHVlQXJyW3ZhbHVlQXJyLmxlbmd0aCAtIDFdID0gXCIwXCI7XG4gIHZhbHVlQXJyW3ZhbHVlQXJyLmxlbmd0aCAtIDJdID0gXCIuXCI7XG4gIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQodmFsdWVBcnIucmV2ZXJzZSgpLmpvaW4oXCJcIikpO1xuICByZXR1cm4gbnVtO1xufTtcblxuY29uc3QgcmFuZG9tUG9zaXRpb24gPSAoaWQ6IHN0cmluZywgZGlzdGFuY2U6IG51bWJlcikgPT4ge1xuICBjb25zdCB2YWx1ZTEgPSBwc2V1ZG9SYW5kb20oYCR7aWR9MTIzNDVgKSAqIGRpc3RhbmNlO1xuICBjb25zdCB2YWx1ZTIgPVxuICAgIHBzZXVkb1JhbmRvbShpZCArIGlkKSAqIChwc2V1ZG9SYW5kb20oYCR7aWR9NTMyNDFgKSA+IDAuNSA/IC0xIDogMSk7XG4gIGNvbnN0IGludGVybWVkaWF0ZSA9IHZhbHVlMSAqKiAyICsgdmFsdWUyICoqIDI7XG4gIGNvbnN0IHZhbHVlMyA9IChkaXN0YW5jZSAqKiAyIC0gaW50ZXJtZWRpYXRlKSAqKiAwLjU7XG5cbiAgY29uc3QgcmFuZG9tID0gcHNldWRvUmFuZG9tKGlkICsgaWQpICogMjtcblxuICBpZiAocmFuZG9tID4gMSkge1xuICAgIHJldHVybiB7XG4gICAgICB4OiB2YWx1ZTEgKiAocHNldWRvUmFuZG9tKGAke2lkfTg3NjA1YCkgPiAwLjUgPyAxIDogLTEpLFxuICAgICAgeTogdmFsdWUyLFxuICAgICAgejogdmFsdWUzICogKHBzZXVkb1JhbmRvbShpZCArIGlkKSA+IDAuNSA/IDEgOiAtMSksXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogdmFsdWUzICogKHBzZXVkb1JhbmRvbShgJHtpZH0yMTM5OGApID4gMC41ID8gMSA6IC0xKSxcbiAgICB5OiB2YWx1ZTIsXG4gICAgejogdmFsdWUxICogKHBzZXVkb1JhbmRvbShpZCArIGlkKSA+IDAuNSA/IDEgOiAtMSksXG4gIH07XG59O1xuXG5leHBvcnQgeyBiYXNlTG9nLCByYW5kb21Qb3NpdGlvbiB9O1xuIl0sIm5hbWVzIjpbImJhc2VMb2ciLCJ4IiwieSIsIk1hdGgiLCJsb2ciLCJwc2V1ZG9SYW5kb20iLCJpZCIsIm51bWJlciIsInBhcnNlRmxvYXQiLCJzdW0iLCJzcGxpdCIsIm1hcCIsIm51bSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ2YWx1ZSIsInZhbHVlQXJyIiwidG9TdHJpbmciLCJmaWx0ZXIiLCJzdHIiLCJsZW5ndGgiLCJyZXZlcnNlIiwiam9pbiIsInJhbmRvbVBvc2l0aW9uIiwiZGlzdGFuY2UiLCJ2YWx1ZTEiLCJ2YWx1ZTIiLCJpbnRlcm1lZGlhdGUiLCJ2YWx1ZTMiLCJyYW5kb20iLCJ6Il0sInNvdXJjZVJvb3QiOiIifQ==