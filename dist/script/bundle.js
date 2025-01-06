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

eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nvar _require = __webpack_require__(/*! ./utils/html-from-string */ \"./scripts/utils/html-from-string.js\"),\n  htmlFromString = _require.htmlFromString;\n\n//\n// Cars\n//\nvar TrainCar = /*#__PURE__*/_createClass(\n// Should not be instantiated directly\nfunction TrainCar() {\n  _classCallCheck(this, TrainCar);\n  this.name = \"MISSING NAME\";\n  this.capacity = 0;\n  this.passengers = 0;\n});\nvar Locomotive = /*#__PURE__*/function (_TrainCar) {\n  function Locomotive() {\n    var _this;\n    _classCallCheck(this, Locomotive);\n    _this = _callSuper(this, Locomotive);\n    _this.name = \"Locomotive\";\n    return _this;\n  }\n  _inherits(Locomotive, _TrainCar);\n  return _createClass(Locomotive);\n}(TrainCar);\nvar PassengerCar = /*#__PURE__*/function (_TrainCar2) {\n  function PassengerCar() {\n    var _this2;\n    _classCallCheck(this, PassengerCar);\n    _this2 = _callSuper(this, PassengerCar);\n    _this2.name = \"Passenger Car\";\n    _this2.capacity = 10;\n    _this2.passengers = 0;\n    return _this2;\n  }\n  _inherits(PassengerCar, _TrainCar2);\n  return _createClass(PassengerCar);\n}(TrainCar); //\n// Train\n//\nvar TrainSet = /*#__PURE__*/_createClass(function TrainSet(name) {\n  _classCallCheck(this, TrainSet);\n  this.name = name;\n  for (var _len = arguments.length, cars = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    cars[_key - 1] = arguments[_key];\n  }\n  this.cars = cars;\n  this.stationIndex = 0;\n}); //\n// Station\n//\nvar Station = /*#__PURE__*/_createClass(function Station(_ref) {\n  var name = _ref.name,\n    distance = _ref.distance,\n    _ref$passengers = _ref.passengers,\n    passengers = _ref$passengers === void 0 ? 0 : _ref$passengers;\n  _classCallCheck(this, Station);\n  this.name = \"\".concat(name, \" Station\");\n  this.distance = distance;\n  this.passengers = passengers;\n});\nvar stations = [new Station({\n  name: \"Heby\",\n  passengers: 5\n}), new Station({\n  name: \"Uppsala\",\n  passengers: 10\n}), new Station({\n  name: \"Stockholm\",\n  passengers: 20\n}), new Station({\n  name: \"Södertälje\",\n  passengers: 15\n}), new Station({\n  name: \"Malmö\",\n  passengers: 25\n}), new Station({\n  name: \"Ystad\",\n  passengers: 5\n}), new Station({\n  name: \"Simrishamn\",\n  passengers: 5\n}), new Station({\n  name: \"Kristianstad\",\n  passengers: 5\n}), new Station({\n  name: \"Hässleholm\",\n  passengers: 5\n}), new Station({\n  name: \"Alvesta\",\n  passengers: 5\n}), new Station({\n  name: \"Växjö\",\n  passengers: 5\n}), new Station({\n  name: \"Nässjö\",\n  passengers: 5\n}), new Station({\n  name: \"Tranås\",\n  passengers: 5\n}), new Station({\n  name: \"Mjölby\",\n  passengers: 5\n}), new Station({\n  name: \"Linköping\",\n  passengers: 5\n}), new Station({\n  name: \"Norrköping\",\n  passengers: 5\n}), new Station({\n  name: \"Katrineholm\",\n  passengers: 5\n}), new Station({\n  name: \"Flen\",\n  passengers: 5\n}), new Station({\n  name: \"Eskilstuna\",\n  passengers: 5\n}), new Station({\n  name: \"Arboga\",\n  passengers: 5\n}), new Station({\n  name: \"Köping\",\n  passengers: 5\n}), new Station({\n  name: \"Västerås\",\n  passengers: 5\n}), new Station({\n  name: \"Örebro\",\n  passengers: 5\n}), new Station({\n  name: \"Karlstad\",\n  passengers: 5\n}), new Station({\n  name: \"Kristinehamn\",\n  passengers: 5\n}), new Station({\n  name: \"Hagfors\",\n  passengers: 5\n}), new Station({\n  name: \"Mora\",\n  passengers: 5\n}), new Station({\n  name: \"Falun\",\n  passengers: 5\n}), new Station({\n  name: \"Borlänge\",\n  passengers: 5\n}), new Station({\n  name: \"Gävle\",\n  passengers: 5\n}), new Station({\n  name: \"Söderhamn\",\n  passengers: 5\n}), new Station({\n  name: \"Hudiksvall\",\n  passengers: 5\n}), new Station({\n  name: \"Sundsvall\",\n  passengers: 5\n}), new Station({\n  name: \"Härnösand\",\n  passengers: 5\n}), new Station({\n  name: \"Örnsköldsvik\",\n  passengers: 5\n}), new Station({\n  name: \"Umeå\",\n  passengers: 5\n}), new Station({\n  name: \"Skellefteå\",\n  passengers: 5\n}), new Station({\n  name: \"Piteå\",\n  passengers: 5\n}), new Station({\n  name: \"Luleå\",\n  passengers: 5\n}), new Station({\n  name: \"Boden\",\n  passengers: 5\n}), new Station({\n  name: \"Kiruna\",\n  passengers: 5\n}), new Station({\n  name: \"Gällivare\",\n  passengers: 5\n}), new Station({\n  name: \"Arvidsjaur\",\n  passengers: 5\n}), new Station({\n  name: \"Östersund\",\n  passengers: 5\n}), new Station({\n  name: \"Sveg\",\n  passengers: 5\n}), new Station({\n  name: \"Storlien\",\n  passengers: 5\n}), new Station({\n  name: \"Åre\",\n  passengers: 5\n}), new Station({\n  name: \"Duved\",\n  passengers: 5\n}), new Station({\n  name: \"Östersund\",\n  passengers: 5\n}), new Station({\n  name: \"Bräcke\",\n  passengers: 5\n}), new Station({\n  name: \"Krokom\",\n  passengers: 5\n}), new Station({\n  name: \"Ås\",\n  passengers: 5\n}), new Station({\n  name: \"Östersund\",\n  passengers: 5\n})];\nstations.map(function (station) {\n  var base = station.passengers;\n  station.passengers = Math.floor(base + Math.random() * -base / 2);\n});\nvar myTrain = new TrainSet(\"x52 9033\", new Locomotive(), new PassengerCar());\nvar updateDOM = function updateDOM() {\n  // Station\n  var station = stations[myTrain.stationIndex];\n  var stationSection = document.querySelector(\"section.station\");\n  stationSection.querySelector(\".name\").textContent = station.name;\n  stationSection.querySelector(\".passengers\").textContent = \"\".concat(station.passengers, \" passengers\");\n  stationSection.querySelector(\".passenger-pool\").innerHTML = new Array(station.passengers).fill(0).map(function () {\n    return \"\\n        <div></div>\\n    \".trim();\n  }).join(\"\");\n\n  // Train\n  var trainSection = document.querySelector(\"section.train\");\n  trainSection.querySelector(\".name\").textContent = myTrain.name;\n  trainSection.querySelector(\".cars\").innerHTML = \"<p>Cars</p>\" + myTrain.cars.map(function (car) {\n    return \"\\n    <li>\\n        \".concat(car.name, \"\\n        <span\").concat(car.passengers === car.capacity ? \" class='dim'\" : '', \">\\n        (\").concat(car.passengers, \"/\").concat(car.capacity, \")</span>\\n    </li>\").trim();\n  }).join(\"\");\n};\nwindow.PickUp = function () {\n  var station = stations[myTrain.stationIndex];\n  var car = myTrain.cars[1];\n  if (car.passengers < car.capacity && station.passengers > 0) {\n    car.passengers++;\n    station.passengers--;\n  }\n  updateDOM();\n};\nwindow.DropOff = function () {\n  var station = stations[myTrain.stationIndex];\n  var car = myTrain.cars[1];\n  if (car.passengers > 0) {\n    car.passengers--;\n    station.passengers++;\n  }\n  updateDOM();\n};\nwindow.NextStation = function () {\n  myTrain.stationIndex++;\n  updateDOM();\n};\nupdateDOM();\nsetInterval(updateDOM, 500);\n\n//# sourceURL=webpack://train-interior-designer/./scripts/main.js?");

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