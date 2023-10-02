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

const READY_STATE_COMPLETE = 'complete';

(function (w, d) {
    if (d.readyState === READY_STATE_COMPLETE) {
        console.log('Adyogi GTM Suite: Document loaded successfully');
        // if agdl is not defined, we can't do anything
        if (!w.agdl) {
            console.error('Adyogi GTM Suite: agdl is not defined');
            return;
        }
        while (true) {
            while (w.agdl.queue.length > 0) {
                const event = w.agdl.queue.shift();
                console.log('removed event from queue and processing it');
                console.log(event);
            }
        }
    }
})(window, document);
})();

/******/ })()
;