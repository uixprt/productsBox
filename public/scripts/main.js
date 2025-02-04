/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/scripts/ee-popup.js":
/*!***************************************!*\
  !*** ./resources/scripts/ee-popup.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EePopup": () => (/* binding */ EePopup)
/* harmony export */ });


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EePopup = /*#__PURE__*/function () {
  function EePopup() {
    _classCallCheck(this, EePopup);

    this.popupIsOpen = false;
    this.container$ = document.querySelector('#eePopup');
    this.closeBtn$ = this.container$.querySelector('#eePopupCloseBtn');
    this.titleContainer$ = this.container$.querySelector('#eePopupTitle');
    this.contentContainer$ = this.container$.querySelector('#eePopupContent');
    this.openClass = 'ee-popup--active';
    this.closingClass = 'ee-popup--closing';
    this.closeBtnClickHandler = this.close.bind(this);
    this.containerTransitionEndHandler = this.onCloseTransitionEnd.bind(this);
  }

  _createClass(EePopup, [{
    key: "open",
    value: function open(title, content) {
      var _this = this;

      if (this.popupIsOpen) {
        return;
      }

      this.popupIsOpen = true;
      this.container$.style.display = 'flex';
      setTimeout(function () {
        return _this.container$.classList.add(_this.openClass);
      }, 0);
      this.appendTitle(title);
      this.appendContent(content);
      this.closeBtn$.addEventListener('click', this.closeBtnClickHandler);
    }
  }, {
    key: "appendTitle",
    value: function appendTitle(title) {
      this.titleContainer$.innerHTML = title;
    }
  }, {
    key: "appendContent",
    value: function appendContent(content) {
      this.contentContainer$.innerHTML = content;
    }
  }, {
    key: "close",
    value: function close() {
      if (!this.popupIsOpen) {
        return;
      }

      this.popupIsOpen = false;
      this.closeBtn$.removeEventListener('click', this.closeBtnClickHandler);
      this.container$.classList.add(this.closingClass);
      this.container$.addEventListener('transitionend', this.containerTransitionEndHandler);
    }
  }, {
    key: "onCloseTransitionEnd",
    value: function onCloseTransitionEnd() {
      if (this.popupIsOpen) {
        return;
      }

      this.container$.removeEventListener('transitionend', this.containerTransitionEndHandler);
      this.container$.style.display = 'none';
      this.contentContainer$.innerHTML = '';
      this.container$.classList.remove(this.closingClass);
      this.container$.classList.remove(this.openClass);
    }
  }]);

  return EePopup;
}();

/***/ }),

/***/ "./resources/scripts/main.js":
/*!***********************************!*\
  !*** ./resources/scripts/main.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products_description_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-description-service */ "./resources/scripts/products-description-service.js");
/* harmony import */ var _ee_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ee-popup */ "./resources/scripts/ee-popup.js");


var service = new _products_description_service__WEBPACK_IMPORTED_MODULE_0__.ProductionDescriptionService();
var popup = new _ee_popup__WEBPACK_IMPORTED_MODULE_1__.EePopup();
document.addEventListener('DOMContentLoaded', function () {
  var productsWrapper$ = document.querySelector('#eeProducts');
  productsWrapper$.addEventListener('click', function (event) {
    var productId = event.target.getAttribute('data-product-id');

    if (!productId && typeof productId !== 'number') {
      return;
    }

    event.preventDefault();
    var serviceResult = service.getDescriptionByProductId(productId);
    serviceResult.then(function (_ref) {
      var title = _ref.title,
          description = _ref.description;
      return popup.open(title, description);
    });
  });
});

/***/ }),

/***/ "./resources/scripts/products-description-service.js":
/*!***********************************************************!*\
  !*** ./resources/scripts/products-description-service.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductionDescriptionService": () => (/* binding */ ProductionDescriptionService)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ProductionDescriptionService = /*#__PURE__*/function () {
  function ProductionDescriptionService() {
    _classCallCheck(this, ProductionDescriptionService);

    this.cache = [];
    this.cachePromise = null;
  }

  _createClass(ProductionDescriptionService, [{
    key: "getDescriptionByProductId",
    value: function getDescriptionByProductId(id) {
      var _this = this;

      if (this.cache.length > 0 && this.cache[id]) {
        console.log('returned from cache');
        return Promise.resolve(this.cache[id]);
      }

      if (this.cachePromise) {
        console.log('promise reaccessed');
        return this.cachePromise;
      }

      this.cachePromise = fetch("".concat(main.apiBaseUrl, "/").concat(id)).then(function (response) {
        return response.json();
      }).then(function (results) {
        _this.cache[id] = results;
        _this.cachePromise = null;
        return results;
      });
      return this.cachePromise;
    }
  }]);

  return ProductionDescriptionService;
}();

/***/ }),

/***/ "./resources/styles/main.scss":
/*!************************************!*\
  !*** ./resources/styles/main.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/scripts/main": 0,
/******/ 			"styles/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkelemexam"] = self["webpackChunkelemexam"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["styles/main"], () => (__webpack_require__("./resources/scripts/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["styles/main"], () => (__webpack_require__("./resources/styles/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map