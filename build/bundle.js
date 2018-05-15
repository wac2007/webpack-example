/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/webpack.svg":
/*!********************************!*\
  !*** ./src/assets/webpack.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOTE2IDE1MjQiPjx0aXRsZT5sb2dvLW9uLXdoaXRlLWJnPC90aXRsZT48cGF0aCBmaWxsPSIjRkZGIiBkPSJNODA4IDMzNmwzODcgMjE4Ljl2NDM3LjlsLTM4NyAyMTguOS0zODctMjE4LjlWNTU0Ljl6Ii8+PHBhdGggZmlsbD0iIzhFRDZGQiIgZD0iTTExMjUuOSA5NzcuN2wtMzA1LjEgMTcyLjZ2LTEzNC40bDE5MC4xLTEwNC42IDExNSA2Ni40em0yMC45LTE4LjlWNTk3LjlsLTExMS42IDY0LjV2MjMybDExMS42IDY0LjR6bS02NTcuOSAxOC45TDc5NCAxMTUwLjN2LTEzNC40TDYwMy44IDkxMS4zbC0xMTQuOSA2Ni40ek00NjggOTU4LjhWNTk3LjlsMTExLjYgNjQuNXYyMzJMNDY4IDk1OC44em0xMy4xLTM4NC4zbDMxMi45LTE3N3YxMjkuOUw1OTMuNSA2MzcuN2wtMS42LjktMTEwLjgtNjQuMXptNjUyLjYgMGwtMzEyLjktMTc3djEyOS45bDIwMC41IDExMC4yIDEuNi45IDExMC44LTY0eiIvPjxwYXRoIGZpbGw9IiMxQzc4QzAiIGQ9Ik03OTQgOTg1LjNMNjA2LjQgODgyLjFWNjc3LjhMNzk0IDc4Ni4xdjE5OS4yem0yNi44IDBsMTg3LjYtMTAzLjFWNjc3LjhMODIwLjggNzg2LjF2MTk5LjJ6bS0xMy40LTIwN3pNNjE5LjEgNjU0LjJsMTg4LjMtMTAzLjUgMTg4LjMgMTAzLjUtMTg4LjMgMTA4LjctMTg4LjMtMTA4Ljd6Ii8+PHBhdGggZmlsbD0iIzFBMUMxQyIgZD0iTTE1ODUuMyA5MTIuM2g4Mi41bDg0LjEtMjgwLjJoLTgwLjRsLTQ5LjggMTk4LjgtNTMuMS0xOTguOEgxNDk5bC01My42IDE5OC44LTQ5LjMtMTk4LjhoLTgwLjRsODMuNiAyODAuMmg4Mi41bDUyLTE3OS41IDUxLjUgMTc5LjV6TTE3NTYuMiA3NzNjMCA4NC4xIDU3LjMgMTQ2LjMgMTQ3LjQgMTQ2LjMgNjkuNyAwIDEwNy4yLTQxLjggMTE3LjktNjEuNmwtNDguOC0zN2MtOCAxMS44LTMwIDM0LjMtNjguMSAzNC4zLTQxLjMgMC03MS4zLTI2LjgtNzIuOS02NC4zSDIwMjljLjUtNS40LjUtMTAuNy41LTE2LjEgMC05MS42LTQ5LjMtMTQ5LjUtMTM2LjEtMTQ5LjUtNzkuOSAwLTEzNy4yIDYzLjItMTM3LjIgMTQ3Ljl6bTc3LjctMzAuNmMzLjItMzIuMSAyNS43LTU2LjggNjAuNi01Ni44IDMzLjggMCA1OC40IDIyLjUgNjAgNTYuOGgtMTIwLjZ6bTIyMy41IDE2OS45aDY5Ljd2LTI4LjljNy41IDkuMSAzNS40IDM1LjkgODMuMSAzNS45IDgwLjQgMCAxMzcuMi02MC41IDEzNy4yLTE0Ni44IDAtODYuOC01Mi41LTE0Ny4zLTEzMi45LTE0Ny4zLTQ4LjIgMC03Ni4xIDI2LjgtODMuMSAzNi40VjUyNC45aC03My45djM4Ny40em03MS44LTEzOS4zYzAtNTIuNSAzMS4xLTgyLjUgNzEuOC04Mi41IDQyLjkgMCA3MS44IDMzLjggNzEuOCA4Mi41IDAgNDkuOC0zMCA4MC45LTcxLjggODAuOS00NSAwLTcxLjgtMzYuNS03MS44LTgwLjl6bTI0NyAyMzkuNWg3My45Vjg4My4zYzcgOS4xIDM0LjggMzUuOSA4My4xIDM1LjkgODAuNCAwIDEzMi45LTYwLjUgMTMyLjktMTQ3LjMgMC04NS43LTU2LjgtMTQ2LjgtMTM3LjItMTQ2LjgtNDcuNyAwLTc1LjYgMjYuOC04My4xIDM2LjRWNjMyaC02OS43djM4MC41em03MS44LTI0MS4xYzAtNDQuNSAyNi44LTgwLjkgNzEuOC04MC45IDQxLjggMCA3MS44IDMxLjEgNzEuOCA4MC45IDAgNDguOC0yOC45IDgyLjUtNzEuOCA4Mi41LTQwLjcgMC03MS44LTMwLTcxLjgtODIuNXptMjMxLjUgNTQuMWMwIDU4LjkgNDguMiA5My44IDEwNSA5My44IDMyLjIgMCA1My42LTkuNiA2OC4xLTI1LjJsNC44IDE4LjJoNjUuNFY3MzQuOWMwLTYyLjctMjYuOC0xMDkuOC0xMTYuOC0xMDkuOC00Mi45IDAtODUuMiAxNi4xLTExMC40IDMzLjJsMjcuOSA1MC40YzIwLjktMTAuNyA0Ni42LTE5LjggNzQuNS0xOS44IDMyLjcgMCA1MC45IDE2LjYgNTAuOSA0MS4zdjE4LjJjLTEwLjItNy0zMi4yLTE1LjUtNjAuNi0xNS41LTY1LjQtLjEtMTA4LjggMzcuNC0xMDguOCA5Mi42em03My45LTIuMmMwLTIzIDE5LjgtMzkuMSA0OC4yLTM5LjFzNDguOCAxNC41IDQ4LjggMzkuMWMwIDIzLjYtMjAuNCAzOC42LTQ4LjIgMzguNnMtNDguOC0xNS41LTQ4LjgtMzguNnptMzQ4LjkgMzAuNmMtNDYuNiAwLTc5LjgtMzMuOC03OS44LTgxLjQgMC00NSAyOS41LTgyIDc3LjItODIgMzEuNiAwIDUzLjEgMTUuNSA2NS40IDI2LjhsMjAuOS02Mi4yYy0xOC4yLTEzLjktNDcuMi0zMC04OC40LTMwLTg1LjIgMC0xNDkgNjIuNy0xNDkgMTQ3LjlzNjIuMiAxNDYuMyAxNDkuNSAxNDYuM2M0MC43IDAgNzEuMy0xNy4xIDg3LjMtMzBsLTE5LjgtNjAuNWMtMTIuNCAxMC4xLTM0LjkgMjUuMS02My4zIDI1LjF6bTExMC45IDU4LjRoNzMuOVY3NjcuNmw5My44IDE0NC43aDg2LjhMMzM2MS42IDc1OWw5OC42LTEyN2gtODMuMWwtOTAgMTE3Ljl2LTIyNWgtNzMuOXYzODcuNHoiLz48L3N2Zz4="

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_webpack_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/webpack.svg */ "./src/assets/webpack.svg");
/* harmony import */ var _assets_webpack_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_webpack_svg__WEBPACK_IMPORTED_MODULE_0__);
// Importando a imagem e salvando no SVG


// Pegando a div de ID = 'app'
const appRoot = document.getElementById('app');

// Criando uma nova imagem
const img = new Image(100, 100);
img.src = _assets_webpack_svg__WEBPACK_IMPORTED_MODULE_0___default.a;

// Inserindo dentro da div 
appRoot.appendChild(img);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map