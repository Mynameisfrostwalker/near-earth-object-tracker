/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/*!********************************************!*\
  !*** ./src/scripts/displayAsteroidInfo.ts ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (displayAsteroidInfo);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksR0FBR0QsZUFBZSxDQUFDakMsWUFBRCxDQUE1QjtJQUVBK0MsT0FBTyxDQUFDdEMsV0FBUixDQUFvQlIsSUFBcEI7SUFDQThDLE9BQU8sQ0FBQ3RDLFdBQVIsQ0FBb0JNLElBQXBCO0lBQ0FnQyxPQUFPLENBQUN0QyxXQUFSLENBQW9CYSxJQUFwQjtJQUNBeUIsT0FBTyxDQUFDdEMsV0FBUixDQUFvQnlCLElBQXBCO0VBQ0Q7QUFDRixDQXpCRDs7QUEyQkEsK0RBQWVTLG1CQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZWFyLWVhcnRoLW9iamVjdC10cmFja2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25lYXItZWFydGgtb2JqZWN0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZWFyLWVhcnRoLW9iamVjdC10cmFja2VyLy4vc3JjL3NjcmlwdHMvZGlzcGxheUFzdGVyb2lkSW5mby50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHlwZSB7IEFzdGVyb2lkSW5mbyB9IGZyb20gXCIuL2ZldGNoRGF0YVwiO1xuXG5jb25zdCBkaXNwbGF5RGl2MUluZm8gPSAoYXN0ZXJvaWRJbmZvOiBBc3Rlcm9pZEluZm8pID0+IHtcbiAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdjEuY2xhc3NMaXN0LmFkZChcImRpdjFcIik7XG5cbiAgY29uc3QgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hbWVEaXYuY2xhc3NMaXN0LmFkZChcIm5hbWVEaXZcIik7XG4gIG5hbWVEaXYudGV4dENvbnRlbnQgPSBgTmFtZTogJHthc3Rlcm9pZEluZm8ubmFtZX1gO1xuICBkaXYxLmFwcGVuZENoaWxkKG5hbWVEaXYpO1xuXG4gIGNvbnN0IG1hZ25pdHVkZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1hZ25pdHVkZURpdi5jbGFzc0xpc3QuYWRkKFwibWFnbml0dWRlRGl2XCIpO1xuICBtYWduaXR1ZGVEaXYudGV4dENvbnRlbnQgPSBgQWJzb2x1dGUgTWFnbml0dWRlOiAke2FzdGVyb2lkSW5mby5hYnNvbHV0ZU1hZ25pdHVkZX1gO1xuICBkaXYxLmFwcGVuZENoaWxkKG1hZ25pdHVkZURpdik7XG5cbiAgY29uc3QgdmVsb2NpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB2ZWxvY2l0eURpdi5jbGFzc0xpc3QuYWRkKFwidmVsb2NpdHlEaXZcIik7XG4gIHZlbG9jaXR5RGl2LnRleHRDb250ZW50ID0gYFJlbGF0aXZlIHZlbG9jaXR5OiAke2FzdGVyb2lkSW5mby5yZWxhdGl2ZVZlbG9jaXR5fSBrbS9zYDtcbiAgZGl2MS5hcHBlbmRDaGlsZCh2ZWxvY2l0eURpdik7XG5cbiAgcmV0dXJuIGRpdjE7XG59O1xuXG5jb25zdCBkaXNwbGF5RGl2MkluZm8gPSAoYXN0ZXJvaWRJbmZvOiBBc3Rlcm9pZEluZm8pID0+IHtcbiAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdjIuY2xhc3NMaXN0LmFkZChcImRpdjJcIik7XG5cbiAgY29uc3QgbWF4RGlhbWV0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYXhEaWFtZXRlckRpdi5jbGFzc0xpc3QuYWRkKFwibWF4RGlhbWV0ZXJEaXZcIik7XG4gIG1heERpYW1ldGVyRGl2LnRleHRDb250ZW50ID0gYE1heGltdW0gZXN0aW1hdGVkIGRpYW1ldGVyOiAke2FzdGVyb2lkSW5mby5lc3RpbWF0ZWREaWFtZXRlck1heH0ga21gO1xuICBkaXYyLmFwcGVuZENoaWxkKG1heERpYW1ldGVyRGl2KTtcblxuICBjb25zdCBtaW5EaWFtZXRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1pbkRpYW1ldGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJtaW5EaWFtZXRlckRpdlwiKTtcbiAgbWluRGlhbWV0ZXJEaXYudGV4dENvbnRlbnQgPSBgTWluaW11bSBlc3RpbWF0ZWQgZGlhbWV0ZXI6ICR7YXN0ZXJvaWRJbmZvLmVzdGltYXRlZERpYW1ldGVyTWlufSBrbWA7XG4gIGRpdjIuYXBwZW5kQ2hpbGQobWluRGlhbWV0ZXJEaXYpO1xuXG4gIHJldHVybiBkaXYyO1xufTtcblxuY29uc3QgZGlzcGxheURpdjNJbmZvID0gKFxuICBhc3Rlcm9pZEluZm86IEFzdGVyb2lkSW5mbyxcbiAgcmV2ZXJ0RnVuY3Rpb246ICgpID0+IHZvaWRcbikgPT4ge1xuICBjb25zdCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2My5jbGFzc0xpc3QuYWRkKFwiZGl2M1wiKTtcblxuICBjb25zdCBoYXphcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoYXphcmREaXYuY2xhc3NMaXN0LmFkZChcImhhemFyZERpdlwiKTtcbiAgY29uc3QgaWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgaWYgKGFzdGVyb2lkSW5mby5wb3RlbnRpYWxseUhhemFyZG91cykge1xuICAgIGkuY2xhc3NMaXN0LmFkZChcImZhc1wiLCBcImZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCIpO1xuICAgIGljb25EaXYuYXBwZW5kQ2hpbGQoaSk7XG4gICAgaGF6YXJkRGl2LmFwcGVuZENoaWxkKGljb25EaXYpO1xuXG4gICAgdGV4dERpdi50ZXh0Q29udGVudCA9IFwiQXN0ZXJvaWQgaXMgcG90ZW50aWFsbHkgaGF6YXJkb3VzIVwiO1xuICAgIGhhemFyZERpdi5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcblxuICAgIGhhemFyZERpdi5jbGFzc0xpc3QuYWRkKFwiaGF6YXJkXCIpO1xuICB9IGVsc2Uge1xuICAgIGkuY2xhc3NMaXN0LmFkZChcImZhc1wiLCBcImZhLWNoZWNrLWNpcmNsZVwiKTtcbiAgICBpY29uRGl2LmFwcGVuZENoaWxkKGkpO1xuICAgIGhhemFyZERpdi5hcHBlbmRDaGlsZChpY29uRGl2KTtcblxuICAgIHRleHREaXYudGV4dENvbnRlbnQgPSBcIkFzdGVyb2lkIGlzIG5vdCBwb3RlbnRpYWxseSBoYXphcmRvdXMhXCI7XG4gICAgaGF6YXJkRGl2LmFwcGVuZENoaWxkKHRleHREaXYpO1xuXG4gICAgaGF6YXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJub3QtaGF6YXJkXCIpO1xuICB9XG4gIGRpdjMuYXBwZW5kQ2hpbGQoaGF6YXJkRGl2KTtcblxuICBjb25zdCBiYWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmFja0Rpdi5jbGFzc0xpc3QuYWRkKFwiYmFja0RpdlwiKTtcblxuICBjb25zdCBiYWNrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJhY2tJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGJhY2tJLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS1hcnJvdy1hbHQtY2lyY2xlLWxlZnRcIik7XG4gIGJhY2tJY29uLmFwcGVuZENoaWxkKGJhY2tJKTtcbiAgYmFja0Rpdi5hcHBlbmRDaGlsZChiYWNrSWNvbik7XG5cbiAgY29uc3QgYmFja1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dFwiKTtcbiAgYmFja1RleHQudGV4dENvbnRlbnQgPSBcIkJhY2sgdG8gRWFydGggVmlld1wiO1xuICBiYWNrRGl2LmFwcGVuZENoaWxkKGJhY2tUZXh0KTtcblxuICBiYWNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXZlcnRGdW5jdGlvbik7XG5cbiAgZGl2My5hcHBlbmRDaGlsZChiYWNrRGl2KTtcblxuICByZXR1cm4gZGl2Mztcbn07XG5cbmNvbnN0IGRpc3BsYXlEaXY0SW5mbyA9IChhc3Rlcm9pZEluZm86IEFzdGVyb2lkSW5mbykgPT4ge1xuICBjb25zdCBkaXY0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2NC5jbGFzc0xpc3QuYWRkKFwiZGl2NFwiKTtcblxuICBjb25zdCBjbG9zZXN0QXBwcm9hY2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjbG9zZXN0QXBwcm9hY2hEaXYuY2xhc3NMaXN0LmFkZChcImNsb3Nlc3RBcHByb2FjaERpdlwiKTtcbiAgY2xvc2VzdEFwcHJvYWNoRGl2LnRleHRDb250ZW50ID0gYENsb3Nlc3QgYXBwcm9hY2ggZGF0ZTogJHthc3Rlcm9pZEluZm8uY2xvc2VzdEFwcHJvYWNoRGF0ZX1gO1xuICBkaXY0LmFwcGVuZENoaWxkKGNsb3Nlc3RBcHByb2FjaERpdik7XG5cbiAgY29uc3QgbWlzc0Rpc3RhbmNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWlzc0Rpc3RhbmNlRGl2LmNsYXNzTGlzdC5hZGQoXCJtaXNzRGlzdGFuY2VEaXZcIik7XG4gIG1pc3NEaXN0YW5jZURpdi50ZXh0Q29udGVudCA9IGBNaXNzIGRpc3RhbmNlOiAke3BhcnNlRmxvYXQoXG4gICAgYXN0ZXJvaWRJbmZvLm1pc3NEaXN0YW5jZVxuICApLnRvRml4ZWQoMSl9IGttYDtcbiAgZGl2NC5hcHBlbmRDaGlsZChtaXNzRGlzdGFuY2VEaXYpO1xuXG4gIGNvbnN0IG9yYml0aW5nQm9keURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG9yYml0aW5nQm9keURpdi5jbGFzc0xpc3QuYWRkKFwib3JiaXRpbmdCb2R5RGl2XCIpO1xuICBvcmJpdGluZ0JvZHlEaXYudGV4dENvbnRlbnQgPSBgT3JiaXRpbmcgYm9keTogJHthc3Rlcm9pZEluZm8ub3JiaXRpbmdCb2R5fWA7XG4gIGRpdjQuYXBwZW5kQ2hpbGQob3JiaXRpbmdCb2R5RGl2KTtcblxuICByZXR1cm4gZGl2NDtcbn07XG5cbmNvbnN0IGRpc3BsYXlBc3Rlcm9pZEluZm8gPSAoXG4gIGFzdGVyb2lkSW5mbzogQXN0ZXJvaWRJbmZvLFxuICByZXZlcnRGdW5jdGlvbjogKCkgPT4gdm9pZFxuKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICBpZiAoY29udGFpbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbmZvRGl2LmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvRGl2KTtcblxuICAgIGNvbnN0IHJldmVydCA9ICgpID0+IHtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChpbmZvRGl2KTtcbiAgICAgIHJldmVydEZ1bmN0aW9uKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRpdjEgPSBkaXNwbGF5RGl2MUluZm8oYXN0ZXJvaWRJbmZvKTtcbiAgICBjb25zdCBkaXYyID0gZGlzcGxheURpdjJJbmZvKGFzdGVyb2lkSW5mbyk7XG4gICAgY29uc3QgZGl2MyA9IGRpc3BsYXlEaXYzSW5mbyhhc3Rlcm9pZEluZm8sIHJldmVydCk7XG4gICAgY29uc3QgZGl2NCA9IGRpc3BsYXlEaXY0SW5mbyhhc3Rlcm9pZEluZm8pO1xuXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChkaXYxKTtcbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKGRpdjIpO1xuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQoZGl2Myk7XG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChkaXY0KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUFzdGVyb2lkSW5mbztcbiJdLCJuYW1lcyI6WyJkaXNwbGF5RGl2MUluZm8iLCJhc3Rlcm9pZEluZm8iLCJkaXYxIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibmFtZURpdiIsInRleHRDb250ZW50IiwibmFtZSIsImFwcGVuZENoaWxkIiwibWFnbml0dWRlRGl2IiwiYWJzb2x1dGVNYWduaXR1ZGUiLCJ2ZWxvY2l0eURpdiIsInJlbGF0aXZlVmVsb2NpdHkiLCJkaXNwbGF5RGl2MkluZm8iLCJkaXYyIiwibWF4RGlhbWV0ZXJEaXYiLCJlc3RpbWF0ZWREaWFtZXRlck1heCIsIm1pbkRpYW1ldGVyRGl2IiwiZXN0aW1hdGVkRGlhbWV0ZXJNaW4iLCJkaXNwbGF5RGl2M0luZm8iLCJyZXZlcnRGdW5jdGlvbiIsImRpdjMiLCJoYXphcmREaXYiLCJpY29uRGl2IiwiaSIsInRleHREaXYiLCJwb3RlbnRpYWxseUhhemFyZG91cyIsImJhY2tEaXYiLCJiYWNrSWNvbiIsImJhY2tJIiwiYmFja1RleHQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcGxheURpdjRJbmZvIiwiZGl2NCIsImNsb3Nlc3RBcHByb2FjaERpdiIsImNsb3Nlc3RBcHByb2FjaERhdGUiLCJtaXNzRGlzdGFuY2VEaXYiLCJwYXJzZUZsb2F0IiwibWlzc0Rpc3RhbmNlIiwidG9GaXhlZCIsIm9yYml0aW5nQm9keURpdiIsIm9yYml0aW5nQm9keSIsImRpc3BsYXlBc3Rlcm9pZEluZm8iLCJjb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiSFRNTEVsZW1lbnQiLCJpbmZvRGl2IiwicmV2ZXJ0IiwicmVtb3ZlQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9