/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/scripts/ee-popup.js":
/*!***************************************!*\
  !*** ./resources/scripts/ee-popup.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EePopup\": () => (/* binding */ EePopup)\n/* harmony export */ });\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar EePopup = /*#__PURE__*/function () {\n  function EePopup() {\n    _classCallCheck(this, EePopup);\n\n    this.popupIsOpen = false;\n    this.container$ = document.querySelector('#eePopup');\n    this.closeBtn$ = this.container$.querySelector('#eePopupCloseBtn');\n    this.titleContainer$ = this.container$.querySelector('#eePopupTitle');\n    this.contentContainer$ = this.container$.querySelector('#eePopupContent');\n    this.openClass = 'ee-popup--active';\n    this.closingClass = 'ee-popup--closing';\n    this.closeBtnClickHandler = this.close.bind(this);\n    this.containerTransitionEndHandler = this.onCloseTransitionEnd.bind(this);\n  }\n\n  _createClass(EePopup, [{\n    key: \"open\",\n    value: function open(title, content) {\n      var _this = this;\n\n      if (this.popupIsOpen) {\n        return;\n      }\n\n      this.popupIsOpen = true;\n      this.container$.style.display = 'flex';\n      setTimeout(function () {\n        return _this.container$.classList.add(_this.openClass);\n      }, 0);\n      this.appendTitle(title);\n      this.appendContent(content);\n      this.closeBtn$.addEventListener('click', this.closeBtnClickHandler);\n    }\n  }, {\n    key: \"appendTitle\",\n    value: function appendTitle(title) {\n      this.titleContainer$.innerHTML = title;\n    }\n  }, {\n    key: \"appendContent\",\n    value: function appendContent(content) {\n      this.contentContainer$.innerHTML = content;\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      if (!this.popupIsOpen) {\n        return;\n      }\n\n      this.popupIsOpen = false;\n      this.closeBtn$.removeEventListener('click', this.closeBtnClickHandler);\n      this.container$.classList.add(this.closingClass);\n      this.container$.addEventListener('transitionend', this.containerTransitionEndHandler);\n    }\n  }, {\n    key: \"onCloseTransitionEnd\",\n    value: function onCloseTransitionEnd() {\n      if (this.popupIsOpen) {\n        return;\n      }\n\n      this.container$.removeEventListener('transitionend', this.containerTransitionEndHandler);\n      this.container$.style.display = 'none';\n      this.contentContainer$.innerHTML = '';\n      this.container$.classList.remove(this.closingClass);\n      this.container$.classList.remove(this.openClass);\n    }\n  }]);\n\n  return EePopup;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZXhhbS8uL3Jlc291cmNlcy9zY3JpcHRzL2VlLXBvcHVwLmpzPzgxNTIiXSwibmFtZXMiOlsiRWVQb3B1cCIsInBvcHVwSXNPcGVuIiwiY29udGFpbmVyJCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsb3NlQnRuJCIsInRpdGxlQ29udGFpbmVyJCIsImNvbnRlbnRDb250YWluZXIkIiwib3BlbkNsYXNzIiwiY2xvc2luZ0NsYXNzIiwiY2xvc2VCdG5DbGlja0hhbmRsZXIiLCJjbG9zZSIsImJpbmQiLCJjb250YWluZXJUcmFuc2l0aW9uRW5kSGFuZGxlciIsIm9uQ2xvc2VUcmFuc2l0aW9uRW5kIiwidGl0bGUiLCJjb250ZW50Iiwic3R5bGUiLCJkaXNwbGF5Iiwic2V0VGltZW91dCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZFRpdGxlIiwiYXBwZW5kQ29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbm5lckhUTUwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQWE7Ozs7Ozs7O0FBRU4sSUFBTUEsT0FBYjtBQUNFLHFCQUFjO0FBQUE7O0FBQ1osU0FBS0MsV0FBTCxHQUFtQixLQUFuQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0JDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFsQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsS0FBS0gsVUFBTCxDQUFnQkUsYUFBaEIsQ0FBOEIsa0JBQTlCLENBQWpCO0FBQ0EsU0FBS0UsZUFBTCxHQUF1QixLQUFLSixVQUFMLENBQWdCRSxhQUFoQixDQUE4QixlQUE5QixDQUF2QjtBQUNBLFNBQUtHLGlCQUFMLEdBQXlCLEtBQUtMLFVBQUwsQ0FBZ0JFLGFBQWhCLENBQThCLGlCQUE5QixDQUF6QjtBQUNBLFNBQUtJLFNBQUwsR0FBaUIsa0JBQWpCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixtQkFBcEI7QUFDQSxTQUFLQyxvQkFBTCxHQUE0QixLQUFLQyxLQUFMLENBQVdDLElBQVgsQ0FBZ0IsSUFBaEIsQ0FBNUI7QUFDQSxTQUFLQyw2QkFBTCxHQUFxQyxLQUFLQyxvQkFBTCxDQUEwQkYsSUFBMUIsQ0FBK0IsSUFBL0IsQ0FBckM7QUFDRDs7QUFYSDtBQUFBO0FBQUEsV0FhRSxjQUFLRyxLQUFMLEVBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsVUFBSSxLQUFLZixXQUFULEVBQXNCO0FBQ3BCO0FBQ0Q7O0FBQ0QsV0FBS0EsV0FBTCxHQUFtQixJQUFuQjtBQUNBLFdBQUtDLFVBQUwsQ0FBZ0JlLEtBQWhCLENBQXNCQyxPQUF0QixHQUFnQyxNQUFoQztBQUNBQyxnQkFBVSxDQUFDO0FBQUEsZUFBTSxLQUFJLENBQUNqQixVQUFMLENBQWdCa0IsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLEtBQUksQ0FBQ2IsU0FBbkMsQ0FBTjtBQUFBLE9BQUQsRUFBc0QsQ0FBdEQsQ0FBVjtBQUNBLFdBQUtjLFdBQUwsQ0FBaUJQLEtBQWpCO0FBQ0EsV0FBS1EsYUFBTCxDQUFtQlAsT0FBbkI7QUFDQSxXQUFLWCxTQUFMLENBQWVtQixnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxLQUFLZCxvQkFBOUM7QUFDRDtBQXZCSDtBQUFBO0FBQUEsV0F5QkUscUJBQVlLLEtBQVosRUFBbUI7QUFDakIsV0FBS1QsZUFBTCxDQUFxQm1CLFNBQXJCLEdBQWlDVixLQUFqQztBQUNEO0FBM0JIO0FBQUE7QUFBQSxXQTZCRSx1QkFBY0MsT0FBZCxFQUF1QjtBQUNyQixXQUFLVCxpQkFBTCxDQUF1QmtCLFNBQXZCLEdBQW1DVCxPQUFuQztBQUNEO0FBL0JIO0FBQUE7QUFBQSxXQWlDRSxpQkFBUTtBQUNOLFVBQUksQ0FBQyxLQUFLZixXQUFWLEVBQXVCO0FBQ3JCO0FBQ0Q7O0FBQ0QsV0FBS0EsV0FBTCxHQUFtQixLQUFuQjtBQUNBLFdBQUtJLFNBQUwsQ0FBZXFCLG1CQUFmLENBQW1DLE9BQW5DLEVBQTRDLEtBQUtoQixvQkFBakQ7QUFDQSxXQUFLUixVQUFMLENBQWdCa0IsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLEtBQUtaLFlBQW5DO0FBQ0EsV0FBS1AsVUFBTCxDQUFnQnNCLGdCQUFoQixDQUFpQyxlQUFqQyxFQUFrRCxLQUFLWCw2QkFBdkQ7QUFDRDtBQXpDSDtBQUFBO0FBQUEsV0EyQ0UsZ0NBQXVCO0FBQ3JCLFVBQUksS0FBS1osV0FBVCxFQUFzQjtBQUNwQjtBQUNEOztBQUNELFdBQUtDLFVBQUwsQ0FBZ0J3QixtQkFBaEIsQ0FBb0MsZUFBcEMsRUFBcUQsS0FBS2IsNkJBQTFEO0FBQ0EsV0FBS1gsVUFBTCxDQUFnQmUsS0FBaEIsQ0FBc0JDLE9BQXRCLEdBQWdDLE1BQWhDO0FBQ0EsV0FBS1gsaUJBQUwsQ0FBdUJrQixTQUF2QixHQUFtQyxFQUFuQztBQUNBLFdBQUt2QixVQUFMLENBQWdCa0IsU0FBaEIsQ0FBMEJPLE1BQTFCLENBQWlDLEtBQUtsQixZQUF0QztBQUNBLFdBQUtQLFVBQUwsQ0FBZ0JrQixTQUFoQixDQUEwQk8sTUFBMUIsQ0FBaUMsS0FBS25CLFNBQXRDO0FBQ0Q7QUFwREg7O0FBQUE7QUFBQSIsImZpbGUiOiIuL3Jlc291cmNlcy9zY3JpcHRzL2VlLXBvcHVwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgY2xhc3MgRWVQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucG9wdXBJc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmNvbnRhaW5lciQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWVQb3B1cCcpO1xuICAgIHRoaXMuY2xvc2VCdG4kID0gdGhpcy5jb250YWluZXIkLnF1ZXJ5U2VsZWN0b3IoJyNlZVBvcHVwQ2xvc2VCdG4nKTtcbiAgICB0aGlzLnRpdGxlQ29udGFpbmVyJCA9IHRoaXMuY29udGFpbmVyJC5xdWVyeVNlbGVjdG9yKCcjZWVQb3B1cFRpdGxlJyk7XG4gICAgdGhpcy5jb250ZW50Q29udGFpbmVyJCA9IHRoaXMuY29udGFpbmVyJC5xdWVyeVNlbGVjdG9yKCcjZWVQb3B1cENvbnRlbnQnKTtcbiAgICB0aGlzLm9wZW5DbGFzcyA9ICdlZS1wb3B1cC0tYWN0aXZlJztcbiAgICB0aGlzLmNsb3NpbmdDbGFzcyA9ICdlZS1wb3B1cC0tY2xvc2luZyc7XG4gICAgdGhpcy5jbG9zZUJ0bkNsaWNrSGFuZGxlciA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNvbnRhaW5lclRyYW5zaXRpb25FbmRIYW5kbGVyID0gdGhpcy5vbkNsb3NlVHJhbnNpdGlvbkVuZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb3Blbih0aXRsZSwgY29udGVudCkge1xuICAgIGlmICh0aGlzLnBvcHVwSXNPcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucG9wdXBJc09wZW4gPSB0cnVlO1xuICAgIHRoaXMuY29udGFpbmVyJC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jb250YWluZXIkLmNsYXNzTGlzdC5hZGQodGhpcy5vcGVuQ2xhc3MpLCAwKTtcbiAgICB0aGlzLmFwcGVuZFRpdGxlKHRpdGxlKTtcbiAgICB0aGlzLmFwcGVuZENvbnRlbnQoY29udGVudCk7XG4gICAgdGhpcy5jbG9zZUJ0biQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlQnRuQ2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIGFwcGVuZFRpdGxlKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZUNvbnRhaW5lciQuaW5uZXJIVE1MID0gdGl0bGU7XG4gIH1cblxuICBhcHBlbmRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLmNvbnRlbnRDb250YWluZXIkLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBpZiAoIXRoaXMucG9wdXBJc09wZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wb3B1cElzT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2VCdG4kLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZUJ0bkNsaWNrSGFuZGxlcik7XG4gICAgdGhpcy5jb250YWluZXIkLmNsYXNzTGlzdC5hZGQodGhpcy5jbG9zaW5nQ2xhc3MpO1xuICAgIHRoaXMuY29udGFpbmVyJC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5jb250YWluZXJUcmFuc2l0aW9uRW5kSGFuZGxlcik7XG4gIH1cblxuICBvbkNsb3NlVHJhbnNpdGlvbkVuZCgpIHtcbiAgICBpZiAodGhpcy5wb3B1cElzT3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNvbnRhaW5lciQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuY29udGFpbmVyVHJhbnNpdGlvbkVuZEhhbmRsZXIpO1xuICAgIHRoaXMuY29udGFpbmVyJC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMuY29udGVudENvbnRhaW5lciQuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5jb250YWluZXIkLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbG9zaW5nQ2xhc3MpO1xuICAgIHRoaXMuY29udGFpbmVyJC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMub3BlbkNsYXNzKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/scripts/ee-popup.js\n");

/***/ }),

/***/ "./resources/scripts/main.js":
/*!***********************************!*\
  !*** ./resources/scripts/main.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _products_description_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-description-service */ \"./resources/scripts/products-description-service.js\");\n/* harmony import */ var _ee_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ee-popup */ \"./resources/scripts/ee-popup.js\");\n\n\nvar service = new _products_description_service__WEBPACK_IMPORTED_MODULE_0__.ProductionDescriptionService();\nvar popup = new _ee_popup__WEBPACK_IMPORTED_MODULE_1__.EePopup();\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var productsWrapper$ = document.querySelector('#eeProducts');\n  productsWrapper$.addEventListener('click', function (event) {\n    var productId = event.target.getAttribute('data-product-id');\n\n    if (!productId && typeof productId !== 'number') {\n      return;\n    }\n\n    event.preventDefault();\n    var serviceResult = service.getDescriptionByProductId(productId);\n    serviceResult.then(function (_ref) {\n      var title = _ref.title,\n          description = _ref.description;\n      return popup.open(title, description);\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZXhhbS8uL3Jlc291cmNlcy9zY3JpcHRzL21haW4uanM/NDJkMiJdLCJuYW1lcyI6WyJzZXJ2aWNlIiwiUHJvZHVjdGlvbkRlc2NyaXB0aW9uU2VydmljZSIsInBvcHVwIiwiRWVQb3B1cCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb2R1Y3RzV3JhcHBlciQiLCJxdWVyeVNlbGVjdG9yIiwiZXZlbnQiLCJwcm9kdWN0SWQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJwcmV2ZW50RGVmYXVsdCIsInNlcnZpY2VSZXN1bHQiLCJnZXREZXNjcmlwdGlvbkJ5UHJvZHVjdElkIiwidGhlbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJvcGVuIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLElBQUlDLHVGQUFKLEVBQWhCO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLElBQUlDLDhDQUFKLEVBQWQ7QUFFQUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFDRSxZQUFNO0FBQ0osTUFBTUMsZ0JBQWdCLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixhQUF2QixDQUF6QjtBQUNBRCxrQkFBZ0IsQ0FBQ0QsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQ0UsVUFBQ0csS0FBRCxFQUFXO0FBQ1QsUUFBTUMsU0FBUyxHQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsWUFBYixDQUEwQixpQkFBMUIsQ0FBbEI7O0FBRUEsUUFBSSxDQUFDRixTQUFELElBQWMsT0FBT0EsU0FBUCxLQUFxQixRQUF2QyxFQUFpRDtBQUMvQztBQUNEOztBQUVERCxTQUFLLENBQUNJLGNBQU47QUFDQSxRQUFNQyxhQUFhLEdBQUdiLE9BQU8sQ0FBQ2MseUJBQVIsQ0FBa0NMLFNBQWxDLENBQXRCO0FBQ0FJLGlCQUFhLENBQUNFLElBQWQsQ0FBbUI7QUFBQSxVQUFFQyxLQUFGLFFBQUVBLEtBQUY7QUFBQSxVQUFTQyxXQUFULFFBQVNBLFdBQVQ7QUFBQSxhQUEwQmYsS0FBSyxDQUFDZ0IsSUFBTixDQUFXRixLQUFYLEVBQWtCQyxXQUFsQixDQUExQjtBQUFBLEtBQW5CO0FBQ0QsR0FYSDtBQWFELENBaEJIIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL3NjcmlwdHMvbWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJvZHVjdGlvbkRlc2NyaXB0aW9uU2VydmljZX0gZnJvbSBcIi4vcHJvZHVjdHMtZGVzY3JpcHRpb24tc2VydmljZVwiO1xuaW1wb3J0IHtFZVBvcHVwfSBmcm9tIFwiLi9lZS1wb3B1cFwiO1xuXG5jb25zdCBzZXJ2aWNlID0gbmV3IFByb2R1Y3Rpb25EZXNjcmlwdGlvblNlcnZpY2UoKTtcbmNvbnN0IHBvcHVwID0gbmV3IEVlUG9wdXAoKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixcbiAgKCkgPT4ge1xuICAgIGNvbnN0IHByb2R1Y3RzV3JhcHBlciQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWVQcm9kdWN0cycpO1xuICAgIHByb2R1Y3RzV3JhcHBlciQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1pZCcpO1xuXG4gICAgICAgIGlmICghcHJvZHVjdElkICYmIHR5cGVvZiBwcm9kdWN0SWQgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VydmljZVJlc3VsdCA9IHNlcnZpY2UuZ2V0RGVzY3JpcHRpb25CeVByb2R1Y3RJZChwcm9kdWN0SWQpO1xuICAgICAgICBzZXJ2aWNlUmVzdWx0LnRoZW4oKHt0aXRsZSwgZGVzY3JpcHRpb259KSA9PiBwb3B1cC5vcGVuKHRpdGxlLCBkZXNjcmlwdGlvbikpO1xuICAgICAgfVxuICAgIClcbiAgfVxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/scripts/main.js\n");

/***/ }),

/***/ "./resources/scripts/products-description-service.js":
/*!***********************************************************!*\
  !*** ./resources/scripts/products-description-service.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductionDescriptionService\": () => (/* binding */ ProductionDescriptionService)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ProductionDescriptionService = /*#__PURE__*/function () {\n  function ProductionDescriptionService() {\n    _classCallCheck(this, ProductionDescriptionService);\n\n    this.cache = [];\n    this.cachePromise = null;\n  }\n\n  _createClass(ProductionDescriptionService, [{\n    key: \"getDescriptionByProductId\",\n    value: function getDescriptionByProductId(id) {\n      var _this = this;\n\n      if (this.cache.length > 0 && this.cache[id]) {\n        console.log('returned from cache');\n        return Promise.resolve(this.cache[id]);\n      }\n\n      if (this.cachePromise) {\n        console.log('promise reaccessed');\n        return this.cachePromise;\n      } // best practice to using wp-rest-api\n      // you can use `/ee-api/${id}` with brand new implementation for the challenge\n      // and you can remove the second `then()` completely because the description return in the first `response`\n\n\n      this.cachePromise = fetch(\"/api/\".concat(id)).then(function (response) {\n        return response.json();\n      }).then(function (results) {\n        _this.cache[id] = results;\n        _this.cachePromise = null;\n        return results;\n      });\n      return this.cachePromise;\n    }\n  }]);\n\n  return ProductionDescriptionService;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZXhhbS8uL3Jlc291cmNlcy9zY3JpcHRzL3Byb2R1Y3RzLWRlc2NyaXB0aW9uLXNlcnZpY2UuanM/YzNhNCJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uRGVzY3JpcHRpb25TZXJ2aWNlIiwiY2FjaGUiLCJjYWNoZVByb21pc2UiLCJpZCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJQcm9taXNlIiwicmVzb2x2ZSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSw0QkFBYjtBQUNFLDBDQUFjO0FBQUE7O0FBQ1osU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLElBQXBCO0FBQ0Q7O0FBSkg7QUFBQTtBQUFBLFdBTUUsbUNBQTBCQyxFQUExQixFQUE4QjtBQUFBOztBQUM1QixVQUFJLEtBQUtGLEtBQUwsQ0FBV0csTUFBWCxHQUFvQixDQUFwQixJQUF5QixLQUFLSCxLQUFMLENBQVdFLEVBQVgsQ0FBN0IsRUFBNkM7QUFDM0NFLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaO0FBRUEsZUFBT0MsT0FBTyxDQUFDQyxPQUFSLENBQWdCLEtBQUtQLEtBQUwsQ0FBV0UsRUFBWCxDQUFoQixDQUFQO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLRCxZQUFULEVBQXVCO0FBQ3JCRyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUVBLGVBQU8sS0FBS0osWUFBWjtBQUNELE9BWDJCLENBYTVCO0FBQ0E7QUFDQTs7O0FBQ0EsV0FBS0EsWUFBTCxHQUFvQk8sS0FBSyxnQkFBU04sRUFBVCxFQUFMLENBQ2pCTyxJQURpQixDQUNaLFVBQUNDLFFBQUQ7QUFBQSxlQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLE9BRFksRUFFakJGLElBRmlCLENBRVosVUFBQ0csT0FBRCxFQUFhO0FBQ2pCLGFBQUksQ0FBQ1osS0FBTCxDQUFXRSxFQUFYLElBQWlCVSxPQUFqQjtBQUVBLGFBQUksQ0FBQ1gsWUFBTCxHQUFvQixJQUFwQjtBQUNBLGVBQU9XLE9BQVA7QUFDRCxPQVBpQixDQUFwQjtBQVNBLGFBQU8sS0FBS1gsWUFBWjtBQUNEO0FBaENIOztBQUFBO0FBQUEiLCJmaWxlIjoiLi9yZXNvdXJjZXMvc2NyaXB0cy9wcm9kdWN0cy1kZXNjcmlwdGlvbi1zZXJ2aWNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFByb2R1Y3Rpb25EZXNjcmlwdGlvblNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhY2hlID0gW107XG4gICAgdGhpcy5jYWNoZVByb21pc2UgPSBudWxsO1xuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb25CeVByb2R1Y3RJZChpZCkge1xuICAgIGlmICh0aGlzLmNhY2hlLmxlbmd0aCA+IDAgJiYgdGhpcy5jYWNoZVtpZF0pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdyZXR1cm5lZCBmcm9tIGNhY2hlJyk7XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5jYWNoZVtpZF0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNhY2hlUHJvbWlzZSkge1xuICAgICAgY29uc29sZS5sb2coJ3Byb21pc2UgcmVhY2Nlc3NlZCcpO1xuXG4gICAgICByZXR1cm4gdGhpcy5jYWNoZVByb21pc2U7XG4gICAgfVxuXG4gICAgLy8gYmVzdCBwcmFjdGljZSB0byB1c2luZyB3cC1yZXN0LWFwaVxuICAgIC8vIHlvdSBjYW4gdXNlIGAvZWUtYXBpLyR7aWR9YCB3aXRoIGJyYW5kIG5ldyBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIGNoYWxsZW5nZVxuICAgIC8vIGFuZCB5b3UgY2FuIHJlbW92ZSB0aGUgc2Vjb25kIGB0aGVuKClgIGNvbXBsZXRlbHkgYmVjYXVzZSB0aGUgZGVzY3JpcHRpb24gcmV0dXJuIGluIHRoZSBmaXJzdCBgcmVzcG9uc2VgXG4gICAgdGhpcy5jYWNoZVByb21pc2UgPSBmZXRjaChgL2FwaS8ke2lkfWApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgIHRoaXMuY2FjaGVbaWRdID0gcmVzdWx0cztcblxuICAgICAgICB0aGlzLmNhY2hlUHJvbWlzZSA9IG51bGw7XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5jYWNoZVByb21pc2U7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/scripts/products-description-service.js\n");

/***/ }),

/***/ "./resources/styles/main.scss":
/*!************************************!*\
  !*** ./resources/styles/main.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZXhhbS8uL3Jlc291cmNlcy9zdHlsZXMvbWFpbi5zY3NzPzViNjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL3N0eWxlcy9tYWluLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/styles/main.scss\n");

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