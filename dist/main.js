/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
const contact = () => {
  let content = document.createElement('div');
  let tmp = document.createElement('h3');

  tmp.classList.add('separator');
  tmp.textContent = "CONTACT";
  content.appendChild(tmp);

  tmp = document.createElement('h2');
  tmp.textContent = "Phones";
  content.appendChild(tmp);
  tmp = document.createElement('p');
  tmp.textContent = "+00 (O)1 23 45 67 89";
  content.appendChild(tmp);
  tmp = document.createElement('p');
  tmp.textContent = "+00 (O)9 87 65 43 21";
  content.appendChild(tmp);

  tmp = document.createElement('h2');
  tmp.textContent = "Mail";
  content.appendChild(tmp);
  tmp = document.createElement('a');
  tmp.href = "mailto:odin@asgard.com";
  tmp.textContent = "odin@asgard.com";
  content.appendChild(tmp);

  tmp = document.createElement('h2');
  tmp.textContent = "Address";
  content.appendChild(tmp);
  tmp = document.createElement('p');
  tmp.textContent = "Somewhere in Asgard";
  content.appendChild(tmp);

  content.classList.add('contact');

  return content;
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
const home = () => {
  let content = document.createElement('div');
  let em = document.createElement('em');
  let h1 = document.createElement('h1');

  em.textContent = "Get a taste of Asgard..";
  h1.appendChild(em);
  content.classList.add('hero');
  content.appendChild(h1);

  return content;
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _img_blackened_salmon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/blackened-salmon.png */ "./src/img/blackened-salmon.png");
/* harmony import */ var _img_honey_roast_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/honey-roast.png */ "./src/img/honey-roast.png");
/* harmony import */ var _img_lemon_salmon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/lemon-salmon.png */ "./src/img/lemon-salmon.png");
/* harmony import */ var _img_cider_pork_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/cider-pork.png */ "./src/img/cider-pork.png");





const menu = () => {
  let content = document.createElement('div');
  let mealType = document.createElement('div');
  let separator = document.createElement('h3');
  let meal = document.createElement('div');
  let mealImg = new Image();
  let mealName = document.createElement('h3');
  let em = document.createElement('em');
  let mealDesc = document.createElement('p');

  mealType.classList.add('meal-type');

  separator.classList.add('separator');
  separator.textContent = "SALADS";
  mealType.appendChild(separator);

  meal.classList.add('meal');
  mealImg.classList.add('meal-img');
  mealImg.src = _img_blackened_salmon_png__WEBPACK_IMPORTED_MODULE_0__;
  mealImg.alt = "blackened-salmon-image";
  mealName.classList.add('meal-name');
  mealName.textContent = "Blackened Salmon With Green Goddess Avocado Salad";
  mealDesc.classList.add('meal-description');
  em.textContent = "Salmon is like the godfather of fish. Its big meaty fillets can stand up to just about any flavour you throw at it. Its oily flesh can withstand the heat of chilli and spice and, like most fish, it is incredibly healthy. The blackening method of this recipe creates a wonderful deep and smoky crust on the top of the fillets and, when combined with a cooling creamy avocado salad, it really is a delicious little dinner.";
  mealDesc.appendChild(em);
  meal.append(mealImg, mealName, mealDesc);
  mealType.appendChild(meal);
  content.appendChild(mealType);

  meal = document.createElement('div');
  meal.classList.add('meal');
  mealImg = new Image();
  mealImg.classList.add('meal-img');
  mealImg.src = _img_honey_roast_png__WEBPACK_IMPORTED_MODULE_1__;
  mealImg.alt = "honey-roast-image";
  mealName = document.createElement('h3');
  mealName.classList.add('meal-name');
  mealName.textContent = "Honey Roast Potato Salad with Green Anchovy Dressing & Shaved Onion";
  mealDesc = document.createElement('p');
  mealDesc.classList.add('meal-description');
  em = document.createElement('em');
  em.textContent = "A potato salad with a difference and a far cry from the mayo laden ones most of us grew up with. Seek out jars or tubs of crispy shallots in most super markets or shallow fry thinly sliced ones until crisp and golden before draining on kitchen paper. They are a wonderful crispy addition to this seriously addictive potato salad. The dressing here is open to interpretation, reduce the amount of anchovies if they are particularly salty or omit entirely if they’re not your thing.";
  mealDesc.appendChild(em);
  meal.append(mealImg, mealName, mealDesc);
  mealType.appendChild(meal);
  content.appendChild(mealType);

  mealType = document.createElement('div');
  mealType.classList.add('meal-type');

  separator = document.createElement('h3');
  separator.classList.add('separator');
  separator.textContent = "MAIN";
  mealType.appendChild(separator);

  meal = document.createElement('div');
  meal.classList.add('meal');
  mealImg = new Image();
  mealImg.classList.add('meal-img');
  mealImg.src = _img_lemon_salmon_png__WEBPACK_IMPORTED_MODULE_2__;
  mealImg.alt = "lemon-salmon-image";
  mealName = document.createElement('h3');
  mealName.classList.add('meal-name');
  mealName.textContent = "Wood Fired Fennel Salmon, Roasted Veg & Lemon Aioli";
  mealDesc = document.createElement('p');
  mealDesc.classList.add('meal-description');
  em = document.createElement('em');
  em.textContent = "Seeking out good quality fish from your local fishmongers is so worthwhile, and roasted in the oven with this fennel salt, it is simply delicious! Any leftovers of the aioli here will keep well in a jar in the fridge for up to 2 days.";
  mealDesc.appendChild(em);
  meal.append(mealImg, mealName, mealDesc);
  mealType.appendChild(meal);
  content.appendChild(mealType);

  meal = document.createElement('div');
  meal.classList.add('meal');
  mealImg = new Image();
  mealImg.classList.add('meal-img');
  mealImg.src = _img_cider_pork_png__WEBPACK_IMPORTED_MODULE_3__;
  mealImg.alt = "cider-pork-image";
  mealName = document.createElement('h3');
  mealName.classList.add('meal-name');
  mealName.textContent = "Creamy Mustard & Cider Pork Chops";
  mealDesc = document.createElement('p');
  mealDesc.classList.add('meal-description');
  em = document.createElement('em');
  em.textContent = "This creamy sauce makes these chops all the more delicious!";
  mealDesc.appendChild(em);
  meal.append(mealImg, mealName, mealDesc);
  mealType.appendChild(meal);
  content.appendChild(mealType);

  content.classList.add('menu');

  return content;
}



/***/ }),

/***/ "./src/img/blackened-salmon.png":
/*!**************************************!*\
  !*** ./src/img/blackened-salmon.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4be2e0a005eb495783e.png";

/***/ }),

/***/ "./src/img/cider-pork.png":
/*!********************************!*\
  !*** ./src/img/cider-pork.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "374c59fe47aba712e4f9.png";

/***/ }),

/***/ "./src/img/honey-roast.png":
/*!*********************************!*\
  !*** ./src/img/honey-roast.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "200c496641ed845c3e0a.png";

/***/ }),

/***/ "./src/img/lemon-salmon.png":
/*!**********************************!*\
  !*** ./src/img/lemon-salmon.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f642711a2fc8422d08e.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





const aHome = document.getElementById('home');
const aMenu = document.getElementById('menu');
const aContact = document.getElementById('contact');
const content = document.getElementById('content');

function display(e) {
  switch (e.target.id) {
    case 'home':
      content.removeChild(content.firstChild);
      content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__.home)());
      break;
    case 'menu':
      content.removeChild(content.firstChild);
      content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menu)());
      break;
    case 'contact':
      content.removeChild(content.firstChild);
      content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.contact)());
      break;
  }
};

aHome.addEventListener('click', e => display(e));
aMenu.addEventListener('click', e => display(e));
aContact.addEventListener('click', e => display(e));

content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__.home)());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1h5RDtBQUNWO0FBQ0U7QUFDSjs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLHNEQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpREFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrREFBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0RBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25HQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ1k7QUFDQTtBQUNNOztBQUV2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4Q0FBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOENBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG9EQUFPO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDhDQUFJLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgY29udGFjdCA9ICgpID0+IHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5cbiAgdG1wLmNsYXNzTGlzdC5hZGQoJ3NlcGFyYXRvcicpO1xuICB0bXAudGV4dENvbnRlbnQgPSBcIkNPTlRBQ1RcIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0bXApO1xuXG4gIHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHRtcC50ZXh0Q29udGVudCA9IFwiUGhvbmVzXCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG1wKTtcbiAgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0bXAudGV4dENvbnRlbnQgPSBcIiswMCAoTykxIDIzIDQ1IDY3IDg5XCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG1wKTtcbiAgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0bXAudGV4dENvbnRlbnQgPSBcIiswMCAoTyk5IDg3IDY1IDQzIDIxXCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG1wKTtcblxuICB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0bXAudGV4dENvbnRlbnQgPSBcIk1haWxcIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0bXApO1xuICB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIHRtcC5ocmVmID0gXCJtYWlsdG86b2RpbkBhc2dhcmQuY29tXCI7XG4gIHRtcC50ZXh0Q29udGVudCA9IFwib2RpbkBhc2dhcmQuY29tXCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG1wKTtcblxuICB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0bXAudGV4dENvbnRlbnQgPSBcIkFkZHJlc3NcIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0bXApO1xuICB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRtcC50ZXh0Q29udGVudCA9IFwiU29tZXdoZXJlIGluIEFzZ2FyZFwiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRtcCk7XG5cbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCB7IGNvbnRhY3QgfTsiLCJjb25zdCBob21lID0gKCkgPT4ge1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdlbScpO1xuICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gIGVtLnRleHRDb250ZW50ID0gXCJHZXQgYSB0YXN0ZSBvZiBBc2dhcmQuLlwiO1xuICBoMS5hcHBlbmRDaGlsZChlbSk7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGgxKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IHsgaG9tZSB9OyIsImltcG9ydCBibGFja2VuZWRTYWxtb24gZnJvbSAnLi9pbWcvYmxhY2tlbmVkLXNhbG1vbi5wbmcnO1xuaW1wb3J0IGhvbmV5Um9hc3QgZnJvbSAnLi9pbWcvaG9uZXktcm9hc3QucG5nJztcbmltcG9ydCBsZW1vblNhbG1vbiBmcm9tICcuL2ltZy9sZW1vbi1zYWxtb24ucG5nJztcbmltcG9ydCBjaWRlclBvcmsgZnJvbSAnLi9pbWcvY2lkZXItcG9yay5wbmcnO1xuXG5jb25zdCBtZW51ID0gKCkgPT4ge1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgbWVhbFR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IHNlcGFyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGxldCBtZWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBtZWFsSW1nID0gbmV3IEltYWdlKCk7XG4gIGxldCBtZWFsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGxldCBlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2VtJyk7XG4gIGxldCBtZWFsRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBtZWFsVHlwZS5jbGFzc0xpc3QuYWRkKCdtZWFsLXR5cGUnKTtcblxuICBzZXBhcmF0b3IuY2xhc3NMaXN0LmFkZCgnc2VwYXJhdG9yJyk7XG4gIHNlcGFyYXRvci50ZXh0Q29udGVudCA9IFwiU0FMQURTXCI7XG4gIG1lYWxUeXBlLmFwcGVuZENoaWxkKHNlcGFyYXRvcik7XG5cbiAgbWVhbC5jbGFzc0xpc3QuYWRkKCdtZWFsJyk7XG4gIG1lYWxJbWcuY2xhc3NMaXN0LmFkZCgnbWVhbC1pbWcnKTtcbiAgbWVhbEltZy5zcmMgPSBibGFja2VuZWRTYWxtb247XG4gIG1lYWxJbWcuYWx0ID0gXCJibGFja2VuZWQtc2FsbW9uLWltYWdlXCI7XG4gIG1lYWxOYW1lLmNsYXNzTGlzdC5hZGQoJ21lYWwtbmFtZScpO1xuICBtZWFsTmFtZS50ZXh0Q29udGVudCA9IFwiQmxhY2tlbmVkIFNhbG1vbiBXaXRoIEdyZWVuIEdvZGRlc3MgQXZvY2FkbyBTYWxhZFwiO1xuICBtZWFsRGVzYy5jbGFzc0xpc3QuYWRkKCdtZWFsLWRlc2NyaXB0aW9uJyk7XG4gIGVtLnRleHRDb250ZW50ID0gXCJTYWxtb24gaXMgbGlrZSB0aGUgZ29kZmF0aGVyIG9mIGZpc2guIEl0cyBiaWcgbWVhdHkgZmlsbGV0cyBjYW4gc3RhbmQgdXAgdG8ganVzdCBhYm91dCBhbnkgZmxhdm91ciB5b3UgdGhyb3cgYXQgaXQuIEl0cyBvaWx5IGZsZXNoIGNhbiB3aXRoc3RhbmQgdGhlIGhlYXQgb2YgY2hpbGxpIGFuZCBzcGljZSBhbmQsIGxpa2UgbW9zdCBmaXNoLCBpdCBpcyBpbmNyZWRpYmx5IGhlYWx0aHkuIFRoZSBibGFja2VuaW5nIG1ldGhvZCBvZiB0aGlzIHJlY2lwZSBjcmVhdGVzIGEgd29uZGVyZnVsIGRlZXAgYW5kIHNtb2t5IGNydXN0IG9uIHRoZSB0b3Agb2YgdGhlIGZpbGxldHMgYW5kLCB3aGVuIGNvbWJpbmVkIHdpdGggYSBjb29saW5nIGNyZWFteSBhdm9jYWRvIHNhbGFkLCBpdCByZWFsbHkgaXMgYSBkZWxpY2lvdXMgbGl0dGxlIGRpbm5lci5cIjtcbiAgbWVhbERlc2MuYXBwZW5kQ2hpbGQoZW0pO1xuICBtZWFsLmFwcGVuZChtZWFsSW1nLCBtZWFsTmFtZSwgbWVhbERlc2MpO1xuICBtZWFsVHlwZS5hcHBlbmRDaGlsZChtZWFsKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZWFsVHlwZSk7XG5cbiAgbWVhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZWFsLmNsYXNzTGlzdC5hZGQoJ21lYWwnKTtcbiAgbWVhbEltZyA9IG5ldyBJbWFnZSgpO1xuICBtZWFsSW1nLmNsYXNzTGlzdC5hZGQoJ21lYWwtaW1nJyk7XG4gIG1lYWxJbWcuc3JjID0gaG9uZXlSb2FzdDtcbiAgbWVhbEltZy5hbHQgPSBcImhvbmV5LXJvYXN0LWltYWdlXCI7XG4gIG1lYWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgbWVhbE5hbWUuY2xhc3NMaXN0LmFkZCgnbWVhbC1uYW1lJyk7XG4gIG1lYWxOYW1lLnRleHRDb250ZW50ID0gXCJIb25leSBSb2FzdCBQb3RhdG8gU2FsYWQgd2l0aCBHcmVlbiBBbmNob3Z5IERyZXNzaW5nICYgU2hhdmVkIE9uaW9uXCI7XG4gIG1lYWxEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtZWFsRGVzYy5jbGFzc0xpc3QuYWRkKCdtZWFsLWRlc2NyaXB0aW9uJyk7XG4gIGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZW0nKTtcbiAgZW0udGV4dENvbnRlbnQgPSBcIkEgcG90YXRvIHNhbGFkIHdpdGggYSBkaWZmZXJlbmNlIGFuZCBhIGZhciBjcnkgZnJvbSB0aGUgbWF5byBsYWRlbiBvbmVzIG1vc3Qgb2YgdXMgZ3JldyB1cCB3aXRoLiBTZWVrIG91dCBqYXJzIG9yIHR1YnMgb2YgY3Jpc3B5IHNoYWxsb3RzIGluIG1vc3Qgc3VwZXIgbWFya2V0cyBvciBzaGFsbG93IGZyeSB0aGlubHkgc2xpY2VkIG9uZXMgdW50aWwgY3Jpc3AgYW5kIGdvbGRlbiBiZWZvcmUgZHJhaW5pbmcgb24ga2l0Y2hlbiBwYXBlci4gVGhleSBhcmUgYSB3b25kZXJmdWwgY3Jpc3B5IGFkZGl0aW9uIHRvIHRoaXMgc2VyaW91c2x5IGFkZGljdGl2ZSBwb3RhdG8gc2FsYWQuIFRoZSBkcmVzc2luZyBoZXJlIGlzIG9wZW4gdG8gaW50ZXJwcmV0YXRpb24sIHJlZHVjZSB0aGUgYW1vdW50IG9mIGFuY2hvdmllcyBpZiB0aGV5IGFyZSBwYXJ0aWN1bGFybHkgc2FsdHkgb3Igb21pdCBlbnRpcmVseSBpZiB0aGV54oCZcmUgbm90IHlvdXIgdGhpbmcuXCI7XG4gIG1lYWxEZXNjLmFwcGVuZENoaWxkKGVtKTtcbiAgbWVhbC5hcHBlbmQobWVhbEltZywgbWVhbE5hbWUsIG1lYWxEZXNjKTtcbiAgbWVhbFR5cGUuYXBwZW5kQ2hpbGQobWVhbCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVhbFR5cGUpO1xuXG4gIG1lYWxUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lYWxUeXBlLmNsYXNzTGlzdC5hZGQoJ21lYWwtdHlwZScpO1xuXG4gIHNlcGFyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHNlcGFyYXRvci5jbGFzc0xpc3QuYWRkKCdzZXBhcmF0b3InKTtcbiAgc2VwYXJhdG9yLnRleHRDb250ZW50ID0gXCJNQUlOXCI7XG4gIG1lYWxUeXBlLmFwcGVuZENoaWxkKHNlcGFyYXRvcik7XG5cbiAgbWVhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZWFsLmNsYXNzTGlzdC5hZGQoJ21lYWwnKTtcbiAgbWVhbEltZyA9IG5ldyBJbWFnZSgpO1xuICBtZWFsSW1nLmNsYXNzTGlzdC5hZGQoJ21lYWwtaW1nJyk7XG4gIG1lYWxJbWcuc3JjID0gbGVtb25TYWxtb247XG4gIG1lYWxJbWcuYWx0ID0gXCJsZW1vbi1zYWxtb24taW1hZ2VcIjtcbiAgbWVhbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBtZWFsTmFtZS5jbGFzc0xpc3QuYWRkKCdtZWFsLW5hbWUnKTtcbiAgbWVhbE5hbWUudGV4dENvbnRlbnQgPSBcIldvb2QgRmlyZWQgRmVubmVsIFNhbG1vbiwgUm9hc3RlZCBWZWcgJiBMZW1vbiBBaW9saVwiO1xuICBtZWFsRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWVhbERlc2MuY2xhc3NMaXN0LmFkZCgnbWVhbC1kZXNjcmlwdGlvbicpO1xuICBlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2VtJyk7XG4gIGVtLnRleHRDb250ZW50ID0gXCJTZWVraW5nIG91dCBnb29kIHF1YWxpdHkgZmlzaCBmcm9tIHlvdXIgbG9jYWwgZmlzaG1vbmdlcnMgaXMgc28gd29ydGh3aGlsZSwgYW5kIHJvYXN0ZWQgaW4gdGhlIG92ZW4gd2l0aCB0aGlzIGZlbm5lbCBzYWx0LCBpdCBpcyBzaW1wbHkgZGVsaWNpb3VzISBBbnkgbGVmdG92ZXJzIG9mIHRoZSBhaW9saSBoZXJlIHdpbGwga2VlcCB3ZWxsIGluIGEgamFyIGluIHRoZSBmcmlkZ2UgZm9yIHVwIHRvIDIgZGF5cy5cIjtcbiAgbWVhbERlc2MuYXBwZW5kQ2hpbGQoZW0pO1xuICBtZWFsLmFwcGVuZChtZWFsSW1nLCBtZWFsTmFtZSwgbWVhbERlc2MpO1xuICBtZWFsVHlwZS5hcHBlbmRDaGlsZChtZWFsKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZWFsVHlwZSk7XG5cbiAgbWVhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZWFsLmNsYXNzTGlzdC5hZGQoJ21lYWwnKTtcbiAgbWVhbEltZyA9IG5ldyBJbWFnZSgpO1xuICBtZWFsSW1nLmNsYXNzTGlzdC5hZGQoJ21lYWwtaW1nJyk7XG4gIG1lYWxJbWcuc3JjID0gY2lkZXJQb3JrO1xuICBtZWFsSW1nLmFsdCA9IFwiY2lkZXItcG9yay1pbWFnZVwiO1xuICBtZWFsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIG1lYWxOYW1lLmNsYXNzTGlzdC5hZGQoJ21lYWwtbmFtZScpO1xuICBtZWFsTmFtZS50ZXh0Q29udGVudCA9IFwiQ3JlYW15IE11c3RhcmQgJiBDaWRlciBQb3JrIENob3BzXCI7XG4gIG1lYWxEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtZWFsRGVzYy5jbGFzc0xpc3QuYWRkKCdtZWFsLWRlc2NyaXB0aW9uJyk7XG4gIGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZW0nKTtcbiAgZW0udGV4dENvbnRlbnQgPSBcIlRoaXMgY3JlYW15IHNhdWNlIG1ha2VzIHRoZXNlIGNob3BzIGFsbCB0aGUgbW9yZSBkZWxpY2lvdXMhXCI7XG4gIG1lYWxEZXNjLmFwcGVuZENoaWxkKGVtKTtcbiAgbWVhbC5hcHBlbmQobWVhbEltZywgbWVhbE5hbWUsIG1lYWxEZXNjKTtcbiAgbWVhbFR5cGUuYXBwZW5kQ2hpbGQobWVhbCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVhbFR5cGUpO1xuXG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuXG5leHBvcnQgeyBtZW51IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgaG9tZSB9IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCB7IGNvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5jb25zdCBhSG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG5jb25zdCBhTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG5jb25zdCBhQ29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jyk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuZnVuY3Rpb24gZGlzcGxheShlKSB7XG4gIHN3aXRjaCAoZS50YXJnZXQuaWQpIHtcbiAgICBjYXNlICdob21lJzpcbiAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSgpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21lbnUnOlxuICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KCkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY29udGFjdCc6XG4gICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3QoKSk7XG4gICAgICBicmVhaztcbiAgfVxufTtcblxuYUhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGRpc3BsYXkoZSkpO1xuYU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGRpc3BsYXkoZSkpO1xuYUNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGRpc3BsYXkoZSkpO1xuXG5jb250ZW50LmFwcGVuZENoaWxkKGhvbWUoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9