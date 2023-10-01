/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/handlers/index.js":
/*!*******************************!*\
  !*** ./src/handlers/index.js ***!
  \*******************************/
/***/ ((module) => {

/**
 * Main file to handle events
 */

/**
 * handle the event triggered by adgoyi pixel
 */
const handle = async function (name, event) {
    console.log('handler called');
    console.log(name);
    console.log(event);
};

module.exports = {
    handle: handle,
};


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/**
 * Main entry point of the application
 */

const handlers = __webpack_require__(/*! ./handlers */ "./src/handlers/index.js");

if (window) {
    const AdyogiGtmSuiteListener = {
        handlers: handlers,
    };
    if (window.AdyogiGtmSuiteListener) {
        console.log('Going to instantiate `AdyogiGtmSuiteListener`. Adyogi Listener is predfined: Overwrite existing');
        console.log(window.AdyogiGtmSuiteListener);
    }
    window.AdyogiGtmSuiteListener = AdyogiGtmSuiteListener;
}
})();

/******/ })()
;