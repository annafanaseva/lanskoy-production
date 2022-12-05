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

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lanskoy-production/./src/scss/styles.scss?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/scss/styles.scss\");\n\r\n\r\n// observer\r\n\r\nconst observer = new IntersectionObserver((entries) => {\r\n  entries.forEach(entry => {\r\n    if (entry.isIntersecting) {\r\n      entry.target.classList.add('show');\r\n    } else {\r\n      entry.target.classList.remove('show');\r\n    }\r\n  })\r\n});\r\n\r\ndocument.querySelectorAll('.hidden').forEach((el) => observer.observe(el));\r\ndocument.querySelectorAll('.hidden-top').forEach((el) => observer.observe(el));\r\n\r\n// slider\r\n\r\nconst buttonsWrapper = document.querySelector(\".swiper-map\");\r\nconst slides = document.querySelector(\".swiper-wrapper-inner\");\r\n\r\nbuttonsWrapper.addEventListener(\"click\", e => {\r\n  if (e.target.nodeName === \"BUTTON\") {\r\n    Array.from(buttonsWrapper.children).forEach(item =>\r\n      item.classList.remove(\"active\")\r\n    );\r\n    if (e.target.classList.contains(\"first\")) {\r\n      slides.style.transform = \"translateX(-0%)\";\r\n      e.target.classList.add(\"active\");\r\n    } else if (e.target.classList.contains(\"second\")) {\r\n      slides.style.transform = \"translateX(-33.33333333333333%)\";\r\n      e.target.classList.add(\"active\");\r\n    } else if (e.target.classList.contains('third')) {\r\n      slides.style.transform = 'translatex(-66.6666666667%)';\r\n      e.target.classList.add('active');\r\n    }\r\n  }\r\n});\n\n//# sourceURL=webpack://lanskoy-production/./src/js/main.js?");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;