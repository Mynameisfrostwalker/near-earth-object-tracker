"use strict";
(self["webpackChunknear_earth_object_tracker"] = self["webpackChunknear_earth_object_tracker"] || []).push([["src_scripts_fetchData_ts"],{

/***/ "./src/scripts/fetchData.ts":
/*!**********************************!*\
  !*** ./src/scripts/fetchData.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/subDays/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var fetchData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(start, end) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date=".concat(start, "&end_date=").concat(end, "&api_key=WfcurFXV3fuaxJ147f3BykLubflihVNoKuibPVfy"), {
              mode: "cors"
            });

          case 3:
            response = _context.sent;

            if (!response.ok) {
              _context.next = 9;
              break;
            }

            _context.next = 7;
            return response.json();

          case 7:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 9:
            console.log("Response Error!");
            _context.next = 17;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);

            if (!(typeof _context.t0 === "string")) {
              _context.next = 17;
              break;
            }

            console.log("Network Error");
            throw new Error(_context.t0);

          case 17:
            return _context.abrupt("return", undefined);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function fetchData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var DataSorter = /*#__PURE__*/function () {
  function DataSorter(data) {
    _classCallCheck(this, DataSorter);

    _defineProperty(this, "neoArr", []);

    this.elementCount = data.element_count;
    this.neoArr = [];
    var neos = data.near_earth_objects;
    var keys = Object.keys(neos);

    for (var i = 0; i < keys.length; i += 1) {
      if (keys[i] in neos) {
        var neo = neos[keys[i]];

        for (var j = 0; j < neo.length; j += 1) {
          var _neo$j = neo[j],
              id = _neo$j.id,
              name = _neo$j.name,
              absoluteMagnitude = _neo$j.absolute_magnitude_h,
              isPotentiallyHazardous = _neo$j.is_potentially_hazardous_asteroid;
          var _neo$j$estimated_diam = neo[j].estimated_diameter.kilometers,
              max = _neo$j$estimated_diam.estimated_diameter_max,
              min = _neo$j$estimated_diam.estimated_diameter_min;
          var _neo$j$close_approach = neo[j].close_approach_data[0],
              closestApproachDate = _neo$j$close_approach.close_approach_date_full,
              kms = _neo$j$close_approach.relative_velocity.kilometers_per_second,
              orbitingBody = _neo$j$close_approach.orbiting_body;
          var distance = neo[j].close_approach_data[0].miss_distance.kilometers;
          var neoObj = {
            id: id,
            name: name,
            absoluteMagnitude: absoluteMagnitude,
            estimatedDiameterMax: max,
            estimatedDiameterMin: min,
            potentiallyHazardous: isPotentiallyHazardous,
            closestApproachDate: closestApproachDate,
            relativeVelocity: kms,
            missDistance: distance,
            orbitingBody: orbitingBody
          };
          this.neoArr.push(neoObj);
        }
      }
    }
  }

  _createClass(DataSorter, [{
    key: "averageDiameter",
    value: function averageDiameter(num) {
      return (this.neoArr[num].estimatedDiameterMax + this.neoArr[num].estimatedDiameterMin) / 2;
    }
  }]);

  return DataSorter;
}();

var retrieveInformation = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var today, aWeekAgo, data, information;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            today = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(), "yyyy-MM-dd");
            aWeekAgo = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(), 7), "yyyy-MM-dd");
            _context2.next = 4;
            return fetchData(aWeekAgo, today);

          case 4:
            data = _context2.sent;

            if (!data) {
              _context2.next = 8;
              break;
            }

            information = new DataSorter(data);
            return _context2.abrupt("return", information);

          case 8:
            return _context2.abrupt("return", undefined);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function retrieveInformation() {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (retrieveInformation);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0VBQUE7QUFBQSxHQUF6Qjs7QUFZQSwrREFBZUEsbUJBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZWFyLWVhcnRoLW9iamVjdC10cmFja2VyLy4vc3JjL3NjcmlwdHMvZmV0Y2hEYXRhLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdCwgc3ViRGF5cyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5pbnRlcmZhY2UgTkVPIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBhYnNvbHV0ZV9tYWduaXR1ZGVfaDogbnVtYmVyO1xuICBlc3RpbWF0ZWRfZGlhbWV0ZXI6IHtcbiAgICBraWxvbWV0ZXJzOiB7XG4gICAgICBlc3RpbWF0ZWRfZGlhbWV0ZXJfbWluOiBudW1iZXI7XG4gICAgICBlc3RpbWF0ZWRfZGlhbWV0ZXJfbWF4OiBudW1iZXI7XG4gICAgfTtcbiAgfTtcbiAgaXNfcG90ZW50aWFsbHlfaGF6YXJkb3VzX2FzdGVyb2lkOiBib29sZWFuO1xuICBjbG9zZV9hcHByb2FjaF9kYXRhOiB7XG4gICAgY2xvc2VfYXBwcm9hY2hfZGF0ZV9mdWxsOiBzdHJpbmc7XG4gICAgcmVsYXRpdmVfdmVsb2NpdHk6IHtcbiAgICAgIGtpbG9tZXRlcnNfcGVyX3NlY29uZDogc3RyaW5nO1xuICAgIH07XG4gICAgbWlzc19kaXN0YW5jZToge1xuICAgICAga2lsb21ldGVyczogc3RyaW5nO1xuICAgIH07XG4gICAgb3JiaXRpbmdfYm9keTogc3RyaW5nO1xuICB9W107XG59XG5cbmludGVyZmFjZSBBc3Rlcm9pZEluZm8ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGFic29sdXRlTWFnbml0dWRlOiBudW1iZXI7XG4gIGVzdGltYXRlZERpYW1ldGVyTWF4OiBudW1iZXI7XG4gIGVzdGltYXRlZERpYW1ldGVyTWluOiBudW1iZXI7XG4gIHBvdGVudGlhbGx5SGF6YXJkb3VzOiBib29sZWFuO1xuICBjbG9zZXN0QXBwcm9hY2hEYXRlOiBzdHJpbmc7XG4gIHJlbGF0aXZlVmVsb2NpdHk6IHN0cmluZztcbiAgbWlzc0Rpc3RhbmNlOiBzdHJpbmc7XG4gIG9yYml0aW5nQm9keTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgTkVPUyB7XG4gIFtpbmRleDogc3RyaW5nXTogTkVPW107XG59XG5cbmludGVyZmFjZSBEYXRhIHtcbiAgZWxlbWVudF9jb3VudDogbnVtYmVyO1xuICBuZWFyX2VhcnRoX29iamVjdHM6IE5FT1M7XG4gIGxpbmtzOiB7XG4gICAgcHJldjogc3RyaW5nO1xuICAgIG5leHQ6IHN0cmluZztcbiAgICBzZWxmOiBzdHJpbmc7XG4gIH07XG59XG5cbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jIChcbiAgc3RhcnQ6IHN0cmluZyxcbiAgZW5kOiBzdHJpbmdcbik6IFByb21pc2U8RGF0YSB8IHVuZGVmaW5lZD4gPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkubmFzYS5nb3YvbmVvL3Jlc3QvdjEvZmVlZD9zdGFydF9kYXRlPSR7c3RhcnR9JmVuZF9kYXRlPSR7ZW5kfSZhcGlfa2V5PVdmY3VyRlhWM2Z1YXhKMTQ3ZjNCeWtMdWJmbGloVk5vS3VpYlBWZnlgLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnN0IGRhdGEgPSAoYXdhaXQgcmVzcG9uc2UuanNvbigpKSBhcyBEYXRhO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiUmVzcG9uc2UgRXJyb3IhXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmICh0eXBlb2YgZXJyb3IgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTmV0d29yayBFcnJvclwiKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5jbGFzcyBEYXRhU29ydGVyIHtcbiAgZWxlbWVudENvdW50OiBudW1iZXI7XG5cbiAgbmVvQXJyOiBBc3Rlcm9pZEluZm9bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IERhdGEpIHtcbiAgICB0aGlzLmVsZW1lbnRDb3VudCA9IGRhdGEuZWxlbWVudF9jb3VudDtcbiAgICB0aGlzLm5lb0FyciA9IFtdO1xuXG4gICAgY29uc3QgbmVvcyA9IGRhdGEubmVhcl9lYXJ0aF9vYmplY3RzO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhuZW9zKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGtleXNbaV0gaW4gbmVvcykge1xuICAgICAgICBjb25zdCBuZW8gPSBuZW9zW2tleXNbaV1dO1xuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmVvLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgYWJzb2x1dGVfbWFnbml0dWRlX2g6IGFic29sdXRlTWFnbml0dWRlLFxuICAgICAgICAgICAgaXNfcG90ZW50aWFsbHlfaGF6YXJkb3VzX2FzdGVyb2lkOiBpc1BvdGVudGlhbGx5SGF6YXJkb3VzLFxuICAgICAgICAgIH0gPSBuZW9bal07XG4gICAgICAgICAgY29uc3QgeyBlc3RpbWF0ZWRfZGlhbWV0ZXJfbWF4OiBtYXgsIGVzdGltYXRlZF9kaWFtZXRlcl9taW46IG1pbiB9ID1cbiAgICAgICAgICAgIG5lb1tqXS5lc3RpbWF0ZWRfZGlhbWV0ZXIua2lsb21ldGVycztcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBjbG9zZV9hcHByb2FjaF9kYXRlX2Z1bGw6IGNsb3Nlc3RBcHByb2FjaERhdGUsXG4gICAgICAgICAgICByZWxhdGl2ZV92ZWxvY2l0eTogeyBraWxvbWV0ZXJzX3Blcl9zZWNvbmQ6IGttcyB9LFxuICAgICAgICAgICAgb3JiaXRpbmdfYm9keTogb3JiaXRpbmdCb2R5LFxuICAgICAgICAgIH0gPSBuZW9bal0uY2xvc2VfYXBwcm9hY2hfZGF0YVswXTtcbiAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9XG4gICAgICAgICAgICBuZW9bal0uY2xvc2VfYXBwcm9hY2hfZGF0YVswXS5taXNzX2Rpc3RhbmNlLmtpbG9tZXRlcnM7XG5cbiAgICAgICAgICBjb25zdCBuZW9PYmo6IEFzdGVyb2lkSW5mbyA9IHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGFic29sdXRlTWFnbml0dWRlLFxuICAgICAgICAgICAgZXN0aW1hdGVkRGlhbWV0ZXJNYXg6IG1heCxcbiAgICAgICAgICAgIGVzdGltYXRlZERpYW1ldGVyTWluOiBtaW4sXG4gICAgICAgICAgICBwb3RlbnRpYWxseUhhemFyZG91czogaXNQb3RlbnRpYWxseUhhemFyZG91cyxcbiAgICAgICAgICAgIGNsb3Nlc3RBcHByb2FjaERhdGUsXG4gICAgICAgICAgICByZWxhdGl2ZVZlbG9jaXR5OiBrbXMsXG4gICAgICAgICAgICBtaXNzRGlzdGFuY2U6IGRpc3RhbmNlLFxuICAgICAgICAgICAgb3JiaXRpbmdCb2R5LFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICB0aGlzLm5lb0Fyci5wdXNoKG5lb09iaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhdmVyYWdlRGlhbWV0ZXIobnVtOiBudW1iZXIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMubmVvQXJyW251bV0uZXN0aW1hdGVkRGlhbWV0ZXJNYXggK1xuICAgICAgICB0aGlzLm5lb0FycltudW1dLmVzdGltYXRlZERpYW1ldGVyTWluKSAvXG4gICAgICAyXG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCByZXRyaWV2ZUluZm9ybWF0aW9uID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB0b2RheSA9IGZvcm1hdChuZXcgRGF0ZSgpLCBcInl5eXktTU0tZGRcIik7XG4gIGNvbnN0IGFXZWVrQWdvID0gZm9ybWF0KHN1YkRheXMobmV3IERhdGUoKSwgNyksIFwieXl5eS1NTS1kZFwiKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRGF0YShhV2Vla0FnbywgdG9kYXkpO1xuICBpZiAoZGF0YSkge1xuICAgIGNvbnN0IGluZm9ybWF0aW9uID0gbmV3IERhdGFTb3J0ZXIoZGF0YSk7XG4gICAgcmV0dXJuIGluZm9ybWF0aW9uO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgdHlwZSB7IERhdGFTb3J0ZXIsIEFzdGVyb2lkSW5mbyB9O1xuZXhwb3J0IGRlZmF1bHQgcmV0cmlldmVJbmZvcm1hdGlvbjtcbiJdLCJuYW1lcyI6WyJmb3JtYXQiLCJzdWJEYXlzIiwiZmV0Y2hEYXRhIiwic3RhcnQiLCJlbmQiLCJmZXRjaCIsIm1vZGUiLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiRXJyb3IiLCJ1bmRlZmluZWQiLCJEYXRhU29ydGVyIiwiZWxlbWVudENvdW50IiwiZWxlbWVudF9jb3VudCIsIm5lb0FyciIsIm5lb3MiLCJuZWFyX2VhcnRoX29iamVjdHMiLCJrZXlzIiwiT2JqZWN0IiwiaSIsImxlbmd0aCIsIm5lbyIsImoiLCJpZCIsIm5hbWUiLCJhYnNvbHV0ZU1hZ25pdHVkZSIsImFic29sdXRlX21hZ25pdHVkZV9oIiwiaXNQb3RlbnRpYWxseUhhemFyZG91cyIsImlzX3BvdGVudGlhbGx5X2hhemFyZG91c19hc3Rlcm9pZCIsImVzdGltYXRlZF9kaWFtZXRlciIsImtpbG9tZXRlcnMiLCJtYXgiLCJlc3RpbWF0ZWRfZGlhbWV0ZXJfbWF4IiwibWluIiwiZXN0aW1hdGVkX2RpYW1ldGVyX21pbiIsImNsb3NlX2FwcHJvYWNoX2RhdGEiLCJjbG9zZXN0QXBwcm9hY2hEYXRlIiwiY2xvc2VfYXBwcm9hY2hfZGF0ZV9mdWxsIiwia21zIiwicmVsYXRpdmVfdmVsb2NpdHkiLCJraWxvbWV0ZXJzX3Blcl9zZWNvbmQiLCJvcmJpdGluZ0JvZHkiLCJvcmJpdGluZ19ib2R5IiwiZGlzdGFuY2UiLCJtaXNzX2Rpc3RhbmNlIiwibmVvT2JqIiwiZXN0aW1hdGVkRGlhbWV0ZXJNYXgiLCJlc3RpbWF0ZWREaWFtZXRlck1pbiIsInBvdGVudGlhbGx5SGF6YXJkb3VzIiwicmVsYXRpdmVWZWxvY2l0eSIsIm1pc3NEaXN0YW5jZSIsInB1c2giLCJudW0iLCJyZXRyaWV2ZUluZm9ybWF0aW9uIiwidG9kYXkiLCJEYXRlIiwiYVdlZWtBZ28iLCJpbmZvcm1hdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=