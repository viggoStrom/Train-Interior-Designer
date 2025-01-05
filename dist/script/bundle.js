/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/main.js":
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar _require = __webpack_require__(/*! ./train-set.js */ \"./scripts/train-set.js\"),\n  TrainSet = _require.TrainSet;\nvar _require2 = __webpack_require__(/*! ./train-station.js */ \"./scripts/train-station.js\"),\n  TrainStation = _require2.TrainStation;\nvar _require3 = __webpack_require__(/*! ./train-cars/locomotive.js */ \"./scripts/train-cars/locomotive.js\"),\n  Locomotive = _require3.Locomotive;\nvar _require4 = __webpack_require__(/*! ./train-cars/passenger-car.js */ \"./scripts/train-cars/passenger-car.js\"),\n  PassengerCar = _require4.PassengerCar;\nvar x52PassengerTrain = new TrainSet(\"Passenger Train x52\", [new Locomotive(), new PassengerCar(), new PassengerCar(), new PassengerCar()]);\nvar hebyStation = new TrainStation(\"Heby\");\ndocument.querySelector(\"section.stations\").appendChild(hebyStation.DOM);\ndocument.querySelector(\"section.trains\").appendChild(x52PassengerTrain.DOM);\ndocument.addEventListener(\"click\", function () {\n  x52PassengerTrain.destination = hebyStation;\n});\n\n// Main loop\nvar _frame = function frame() {\n  // Update the DOM\n  x52PassengerTrain.DOM.replaceWith(x52PassengerTrain.generateDOM());\n  hebyStation.DOM.replaceWith(hebyStation.generateDOM());\n  window.requestAnimationFrame(_frame);\n};\nwindow.requestAnimationFrame(_frame);\n\n//# sourceURL=webpack://train-interior-designer/./scripts/main.js?");

/***/ }),

/***/ "./scripts/train-car.js":
/*!******************************!*\
  !*** ./scripts/train-car.js ***!
  \******************************/
/***/ ((module) => {

eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar TrainCar = /*#__PURE__*/_createClass(\n// In units of train cars, so yes, a train cars is 1 train car long...\n\nfunction TrainCar() {\n  _classCallCheck(this, TrainCar);\n  _defineProperty(this, \"displayName\", \"Train Car\");\n  _defineProperty(this, \"capacity\", 0);\n  // How many passengers can be carried\n  _defineProperty(this, \"length\", 1);\n});\nmodule.exports = {\n  TrainCar: TrainCar\n};\n\n//# sourceURL=webpack://train-interior-designer/./scripts/train-car.js?");

/***/ }),

/***/ "./scripts/train-cars/locomotive.js":
/*!******************************************!*\
  !*** ./scripts/train-cars/locomotive.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar _require = __webpack_require__(/*! ../train-car.js */ \"./scripts/train-car.js\"),\n  TrainCar = _require.TrainCar;\nvar Locomotive = /*#__PURE__*/function (_TrainCar) {\n  function Locomotive() {\n    var _this;\n    _classCallCheck(this, Locomotive);\n    _this = _callSuper(this, Locomotive);\n    _defineProperty(_this, \"displayName\", \"Locomotive\");\n    return _this;\n  }\n  _inherits(Locomotive, _TrainCar);\n  return _createClass(Locomotive);\n}(TrainCar);\nmodule.exports = {\n  Locomotive: Locomotive\n};\n\n//# sourceURL=webpack://train-interior-designer/./scripts/train-cars/locomotive.js?");

/***/ }),

/***/ "./scripts/train-cars/passenger-car.js":
/*!*********************************************!*\
  !*** ./scripts/train-cars/passenger-car.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar _require = __webpack_require__(/*! ../train-car.js */ \"./scripts/train-car.js\"),\n  TrainCar = _require.TrainCar;\nvar PassengerCar = /*#__PURE__*/function (_TrainCar) {\n  function PassengerCar() {\n    var _this;\n    _classCallCheck(this, PassengerCar);\n    _this = _callSuper(this, PassengerCar);\n    _defineProperty(_this, \"displayName\", \"Passenger Car\");\n    _defineProperty(_this, \"capacity\", 5);\n    return _this;\n  }\n  _inherits(PassengerCar, _TrainCar);\n  return _createClass(PassengerCar);\n}(TrainCar);\nmodule.exports = {\n  PassengerCar: PassengerCar\n};\n\n//# sourceURL=webpack://train-interior-designer/./scripts/train-cars/passenger-car.js?");

/***/ }),

/***/ "./scripts/train-set.js":
/*!******************************!*\
  !*** ./scripts/train-set.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar _require = __webpack_require__(/*! ./utils/html-from-string.js */ \"./scripts/utils/html-from-string.js\"),\n  htmlFromString = _require.htmlFromString;\nvar TrainSet = /*#__PURE__*/function () {\n  // How many cars can be pulled at the nominal speed\n\n  function TrainSet(displayName, cars) {\n    var _this = this;\n    _classCallCheck(this, TrainSet);\n    _defineProperty(this, \"displayName\", \"Train Set\");\n    _defineProperty(this, \"cars\", []);\n    _defineProperty(this, \"length\", function () {\n      return _this.cars.length;\n    });\n    _defineProperty(this, \"destination\", null);\n    // Station \n    _defineProperty(this, \"origin\", null);\n    // Station\n    _defineProperty(this, \"departureTime\", null);\n    _defineProperty(this, \"arrivalTime\", null);\n    _defineProperty(this, \"speed\", 0);\n    // km/h\n    _defineProperty(this, \"acceleration\", 0);\n    _defineProperty(this, \"nominalPower\", 0);\n    _defineProperty(this, \"DOM\", this.generateDOM());\n    this.displayName = displayName || this.displayName;\n    this.cars = cars;\n  }\n  return _createClass(TrainSet, [{\n    key: \"arrive\",\n    value: function arrive(station) {\n      station.trains.push(this);\n    }\n  }, {\n    key: \"generateDOM\",\n    value: function generateDOM() {\n      var _this$origin, _this$destination;\n      var trainSetContainer = htmlFromString(\"\\n            <div class=\\\"train-set\\\">\\n                <div class=\\\"header\\\">\\n                    <p class=\\\"train-name\\\">\".concat(this.displayName, \"</p>\\n                    <p>\").concat(((_this$origin = this.origin) === null || _this$origin === void 0 ? void 0 : _this$origin.displayName) || \"from\", \" - \").concat(((_this$destination = this.destination) === null || _this$destination === void 0 ? void 0 : _this$destination.displayName) || \"to\", \"</p>\\n                </div>\\n        \\n                <div class=\\\"schedule\\\">\\n                    <p>Speed \").concat(this.speed, \" km/h</p>\\n                    <p>\").concat(this.departureTime || \"--:--\", \" - \").concat(this.arrivalTime || \"--:--\", \"</p>\\n                </div>\\n        \\n                <div class=\\\"train-cars\\\">\\n                    <p class=\\\"note\\\">Nominal power</p>\\n                    <ol class=\\\"list\\\"></ol>\\n                </div>\\n            </div>\"));\n      var trainSetList = trainSetContainer.querySelector(\".list\");\n\n      // Add the cars to display them\n      this.cars.forEach(function (car) {\n        var carContainer = htmlFromString(\"<li>\".concat(car.displayName, \"</li>\"));\n        trainSetList.appendChild(carContainer);\n      });\n      return trainSetContainer;\n    }\n  }]);\n}();\nmodule.exports = {\n  TrainSet: TrainSet\n};\n\n//# sourceURL=webpack://train-interior-designer/./scripts/train-set.js?");

/***/ }),

/***/ "./scripts/train-station.js":
/*!**********************************!*\
  !*** ./scripts/train-station.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar _require = __webpack_require__(/*! ./utils/html-from-string.js */ \"./scripts/utils/html-from-string.js\"),\n  htmlFromString = _require.htmlFromString;\nvar TrainStation = /*#__PURE__*/function () {\n  // Number of passengers at this station waiting for a train\n\n  function TrainStation(displayName) {\n    _classCallCheck(this, TrainStation);\n    _defineProperty(this, \"displayName\", \"MISSING NAME\");\n    _defineProperty(this, \"trains\", []);\n    // Trains at this station\n    _defineProperty(this, \"platforms\", 2);\n    // Maximum number of trains that can be at this station\n    _defineProperty(this, \"length\", 5);\n    // Maximum number of cars that can be at this station\n    _defineProperty(this, \"capacity\", 20);\n    // Maximum number of passengers that can be at this station\n    _defineProperty(this, \"passengers\", 0);\n    _defineProperty(this, \"DOM\", this.generateDOM());\n    this.displayName = displayName || this.displayName;\n    this.displayName += \" Station\";\n  }\n  return _createClass(TrainStation, [{\n    key: \"generateDOM\",\n    value: function generateDOM() {\n      var note = this.trains.length > this.platforms ? \"Station full\" : \"\";\n      var stationContainer = htmlFromString(\"\\n            <div class=\\\"train-station\\\">\\n                <div class=\\\"header\\\">\\n                    <p class=\\\"station-name\\\">\".concat(this.displayName, \"</p>\\n                    <p class=\\\"passengers\\\">\").concat(this.passengers, \" passengers</p>\\n                </div>\\n        \\n                <div class=\\\"platforms\\\">\\n                    <p class=\\\"note\\\">\").concat(note, \"</p>\\n                    <ol class=\\\"list\\\"></ol>\\n                </div>\\n            </div>\"));\n      var stationList = stationContainer.querySelector(\".list\");\n      for (var index = 0; index < this.platforms; index++) {\n        var _this$trains$at;\n        stationList.appendChild(htmlFromString(\"<li>\".concat(((_this$trains$at = this.trains.at(index)) === null || _this$trains$at === void 0 ? void 0 : _this$trains$at.displayName) || \"\", \"</li>\")));\n      }\n      if (this.trains.length > this.platforms) {\n        stationList.appendChild(htmlFromString(\"<li>...and \".concat(this.trains.length - this.platforms, \" more waiting</li>\")));\n      }\n      return stationContainer;\n    }\n  }]);\n}();\nmodule.exports = {\n  TrainStation: TrainStation\n};\n\n//# sourceURL=webpack://train-interior-designer/./scripts/train-station.js?");

/***/ }),

/***/ "./scripts/utils/html-from-string.js":
/*!*******************************************!*\
  !*** ./scripts/utils/html-from-string.js ***!
  \*******************************************/
/***/ ((module) => {

eval("\n\nvar htmlFromString = function htmlFromString(string) {\n  var launderer = document.createElement(\"div\");\n  launderer.innerHTML = string.trim();\n  return launderer.firstElementChild;\n};\nmodule.exports = {\n  htmlFromString: htmlFromString\n};\n\n//# sourceURL=webpack://train-interior-designer/./scripts/utils/html-from-string.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/main.js");
/******/ 	
/******/ })()
;