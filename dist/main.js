/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/background.png */ "./src/img/background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,600&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  --background-color: #add0ec;\n  --accent-color: #082f49;\n  --hover-color: #0369a1;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  color: var(--accent-color);\n  background-color: var(--background-color);\n}\n\nheader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 35px 80px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#logo {\n  font-size: 2rem;\n  user-select: none;\n}\n\nnav a {\n  position: relative;\n  font-size: 1.1rem;\n  text-decoration: none;\n  color: var(--accent-color);\n  font-weight: 500;\n  margin-left: 40px;\n}\n\nnav a::after {\n  content: '';\n  position: absolute;\n  bottom: -3px;\n  left: 0;\n  height: 3px;\n  width: 100%;\n  background: var(--accent-color);\n  transform-origin: right;\n  transform: scaleX(0);\n  transition: transform .3s;\n}\n\nnav a:hover::after {\n  transform: scaleX(1);\n}\n\n#content {\n  width: 100%;\n}\n\n.hero {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100dvh;\n  width: 100%;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.hero h1 {\n  position: relative;\n  top: -50px;\n  font-weight: 600;\n}\n\n.menu {\n  display: flex;\n  flex-direction: column;\n  gap: 100px;\n  padding: 18dvh 10dvw 5dvh 10dvw;\n}\n\n.meal-type {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto 1fr;\n  grid-auto-rows: 1fr;\n  gap: 50px;\n}\n\n.separator {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  grid-column: 1 / 3;\n  font-size: 1.2rem;\n  user-select: none;\n}\n\n.separator::before,\n.separator::after {\n  content: '';\n  position: relative;\n  background: var(--accent-color);\n  top: 0px;\n  left: 10px;\n  height: 3px;\n  width: 30dvw;\n  transition: transform .3s;\n  transform-origin: left;\n}\n\n.separator::before {\n  left: -10px;\n  transform-origin: right;\n}\n\n.meal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  align-self: start;\n  font-size: 1rem;\n}\n\n.meal img {\n  border-radius: 4px;\n  width: min(300px, 25dvw);\n  aspect-ratio: 0.75;\n  transition: .5s;\n}\n\n.meal img:hover {\n  transform: scale(1.01);\n}\n\n.contact {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n  padding: 18dvh 10dvw 5dvh 10dvw;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 20dvh;\n  width: 100%;\n  background: var(--accent-color);\n  color: var(--background-color);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,2BAA2B;EAC3B,uBAAuB;EACvB,sBAAsB;EACtB,sBAAsB;EACtB,kCAAkC;EAClC,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,0BAA0B;EAC1B,yCAAyC;AAC3C;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,qBAAqB;EACrB,0BAA0B;EAC1B,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,OAAO;EACP,WAAW;EACX,WAAW;EACX,+BAA+B;EAC/B,uBAAuB;EACvB,oBAAoB;EACpB,yBAAyB;AAC3B;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;EACX,6DAAiD;EACjD,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,4BAA4B;EAC5B,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;;EAEE,WAAW;EACX,kBAAkB;EAClB,+BAA+B;EAC/B,QAAQ;EACR,UAAU;EACV,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,wBAAwB;EACxB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,WAAW;EACX,+BAA+B;EAC/B,8BAA8B;AAChC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,600&display=swap');\n\n* {\n  --background-color: #add0ec;\n  --accent-color: #082f49;\n  --hover-color: #0369a1;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  color: var(--accent-color);\n  background-color: var(--background-color);\n}\n\nheader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 35px 80px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#logo {\n  font-size: 2rem;\n  user-select: none;\n}\n\nnav a {\n  position: relative;\n  font-size: 1.1rem;\n  text-decoration: none;\n  color: var(--accent-color);\n  font-weight: 500;\n  margin-left: 40px;\n}\n\nnav a::after {\n  content: '';\n  position: absolute;\n  bottom: -3px;\n  left: 0;\n  height: 3px;\n  width: 100%;\n  background: var(--accent-color);\n  transform-origin: right;\n  transform: scaleX(0);\n  transition: transform .3s;\n}\n\nnav a:hover::after {\n  transform: scaleX(1);\n}\n\n#content {\n  width: 100%;\n}\n\n.hero {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100dvh;\n  width: 100%;\n  background: url('./img/background.png') no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.hero h1 {\n  position: relative;\n  top: -50px;\n  font-weight: 600;\n}\n\n.menu {\n  display: flex;\n  flex-direction: column;\n  gap: 100px;\n  padding: 18dvh 10dvw 5dvh 10dvw;\n}\n\n.meal-type {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto 1fr;\n  grid-auto-rows: 1fr;\n  gap: 50px;\n}\n\n.separator {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  grid-column: 1 / 3;\n  font-size: 1.2rem;\n  user-select: none;\n}\n\n.separator::before,\n.separator::after {\n  content: '';\n  position: relative;\n  background: var(--accent-color);\n  top: 0px;\n  left: 10px;\n  height: 3px;\n  width: 30dvw;\n  transition: transform .3s;\n  transform-origin: left;\n}\n\n.separator::before {\n  left: -10px;\n  transform-origin: right;\n}\n\n.meal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  align-self: start;\n  font-size: 1rem;\n}\n\n.meal img {\n  border-radius: 4px;\n  width: min(300px, 25dvw);\n  aspect-ratio: 0.75;\n  transition: .5s;\n}\n\n.meal img:hover {\n  transform: scale(1.01);\n}\n\n.contact {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n  padding: 18dvh 10dvw 5dvh 10dvw;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 20dvh;\n  width: 100%;\n  background: var(--accent-color);\n  color: var(--background-color);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "23903f4d3c1f6a87bce9.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDWTtBQUNBO0FBQ007O0FBRXZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhDQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4Q0FBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsb0RBQU87QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsOENBQUksSSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9iYWNrZ3JvdW5kLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MSw2MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjYWRkMGVjO1xcbiAgLS1hY2NlbnQtY29sb3I6ICMwODJmNDk7XFxuICAtLWhvdmVyLWNvbG9yOiAjMDM2OWExO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMzVweCA4MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNsb2dvIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5uYXYgYSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbn1cXG5cXG5uYXYgYTo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0zcHg7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcztcXG59XFxuXFxubmF2IGE6aG92ZXI6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhlcm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDEwMGR2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4uaGVybyBoMSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC01MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm1lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwMHB4O1xcbiAgcGFkZGluZzogMThkdmggMTBkdncgNWR2aCAxMGR2dztcXG59XFxuXFxuLm1lYWwtdHlwZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxuICBnYXA6IDUwcHg7XFxufVxcblxcbi5zZXBhcmF0b3Ige1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5zZXBhcmF0b3I6OmJlZm9yZSxcXG4uc2VwYXJhdG9yOjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICB0b3A6IDBweDtcXG4gIGxlZnQ6IDEwcHg7XFxuICBoZWlnaHQ6IDNweDtcXG4gIHdpZHRoOiAzMGR2dztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3M7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbn1cXG5cXG4uc2VwYXJhdG9yOjpiZWZvcmUge1xcbiAgbGVmdDogLTEwcHg7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXG59XFxuXFxuLm1lYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLm1lYWwgaW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHdpZHRoOiBtaW4oMzAwcHgsIDI1ZHZ3KTtcXG4gIGFzcGVjdC1yYXRpbzogMC43NTtcXG4gIHRyYW5zaXRpb246IC41cztcXG59XFxuXFxuLm1lYWwgaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxufVxcblxcbi5jb250YWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG4gIHBhZGRpbmc6IDE4ZHZoIDEwZHZ3IDVkdmggMTBkdnc7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAyMGR2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixPQUFPO0VBQ1AsV0FBVztFQUNYLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDZEQUFpRDtFQUNqRCxzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDViwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0IsOEJBQThCO0FBQ2hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsNjAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjYWRkMGVjO1xcbiAgLS1hY2NlbnQtY29sb3I6ICMwODJmNDk7XFxuICAtLWhvdmVyLWNvbG9yOiAjMDM2OWExO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMzVweCA4MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNsb2dvIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5uYXYgYSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbn1cXG5cXG5uYXYgYTo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0zcHg7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcztcXG59XFxuXFxubmF2IGE6aG92ZXI6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhlcm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDEwMGR2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogdXJsKCcuL2ltZy9iYWNrZ3JvdW5kLnBuZycpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5oZXJvIGgxIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTUwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTAwcHg7XFxuICBwYWRkaW5nOiAxOGR2aCAxMGR2dyA1ZHZoIDEwZHZ3O1xcbn1cXG5cXG4ubWVhbC10eXBlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLnNlcGFyYXRvciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnNlcGFyYXRvcjo6YmVmb3JlLFxcbi5zZXBhcmF0b3I6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIHRvcDogMHB4O1xcbiAgbGVmdDogMTBweDtcXG4gIGhlaWdodDogM3B4O1xcbiAgd2lkdGg6IDMwZHZ3O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcztcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxufVxcblxcbi5zZXBhcmF0b3I6OmJlZm9yZSB7XFxuICBsZWZ0OiAtMTBweDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcbn1cXG5cXG4ubWVhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ubWVhbCBpbWcge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgd2lkdGg6IG1pbigzMDBweCwgMjVkdncpO1xcbiAgYXNwZWN0LXJhdGlvOiAwLjc1O1xcbiAgdHJhbnNpdGlvbjogLjVzO1xcbn1cXG5cXG4ubWVhbCBpbWc6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG59XFxuXFxuLmNvbnRhY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1MHB4O1xcbiAgcGFkZGluZzogMThkdmggMTBkdncgNWR2aCAxMGR2dztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDIwZHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNvbnRhY3QgPSAoKSA9PiB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXG4gIHRtcC5jbGFzc0xpc3QuYWRkKCdzZXBhcmF0b3InKTtcbiAgdG1wLnRleHRDb250ZW50ID0gXCJDT05UQUNUXCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG1wKTtcblxuICB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0bXAudGV4dENvbnRlbnQgPSBcIlBob25lc1wiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRtcCk7XG4gIHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdG1wLnRleHRDb250ZW50ID0gXCIrMDAgKE8pMSAyMyA0NSA2NyA4OVwiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRtcCk7XG4gIHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdG1wLnRleHRDb250ZW50ID0gXCIrMDAgKE8pOSA4NyA2NSA0MyAyMVwiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRtcCk7XG5cbiAgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgdG1wLnRleHRDb250ZW50ID0gXCJNYWlsXCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG1wKTtcbiAgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICB0bXAuaHJlZiA9IFwibWFpbHRvOm9kaW5AYXNnYXJkLmNvbVwiO1xuICB0bXAudGV4dENvbnRlbnQgPSBcIm9kaW5AYXNnYXJkLmNvbVwiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRtcCk7XG5cbiAgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgdG1wLnRleHRDb250ZW50ID0gXCJBZGRyZXNzXCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG1wKTtcbiAgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0bXAudGV4dENvbnRlbnQgPSBcIlNvbWV3aGVyZSBpbiBBc2dhcmRcIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0bXApO1xuXG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuXG5leHBvcnQgeyBjb250YWN0IH07IiwiY29uc3QgaG9tZSA9ICgpID0+IHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZW0nKTtcbiAgbGV0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICBlbS50ZXh0Q29udGVudCA9IFwiR2V0IGEgdGFzdGUgb2YgQXNnYXJkLi5cIjtcbiAgaDEuYXBwZW5kQ2hpbGQoZW0pO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoMSk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCB7IGhvbWUgfTsiLCJpbXBvcnQgYmxhY2tlbmVkU2FsbW9uIGZyb20gJy4vaW1nL2JsYWNrZW5lZC1zYWxtb24ucG5nJztcbmltcG9ydCBob25leVJvYXN0IGZyb20gJy4vaW1nL2hvbmV5LXJvYXN0LnBuZyc7XG5pbXBvcnQgbGVtb25TYWxtb24gZnJvbSAnLi9pbWcvbGVtb24tc2FsbW9uLnBuZyc7XG5pbXBvcnQgY2lkZXJQb3JrIGZyb20gJy4vaW1nL2NpZGVyLXBvcmsucG5nJztcblxuY29uc3QgbWVudSA9ICgpID0+IHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IG1lYWxUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBzZXBhcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBsZXQgbWVhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgbWVhbEltZyA9IG5ldyBJbWFnZSgpO1xuICBsZXQgbWVhbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBsZXQgZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdlbScpO1xuICBsZXQgbWVhbERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgbWVhbFR5cGUuY2xhc3NMaXN0LmFkZCgnbWVhbC10eXBlJyk7XG5cbiAgc2VwYXJhdG9yLmNsYXNzTGlzdC5hZGQoJ3NlcGFyYXRvcicpO1xuICBzZXBhcmF0b3IudGV4dENvbnRlbnQgPSBcIlNBTEFEU1wiO1xuICBtZWFsVHlwZS5hcHBlbmRDaGlsZChzZXBhcmF0b3IpO1xuXG4gIG1lYWwuY2xhc3NMaXN0LmFkZCgnbWVhbCcpO1xuICBtZWFsSW1nLmNsYXNzTGlzdC5hZGQoJ21lYWwtaW1nJyk7XG4gIG1lYWxJbWcuc3JjID0gYmxhY2tlbmVkU2FsbW9uO1xuICBtZWFsSW1nLmFsdCA9IFwiYmxhY2tlbmVkLXNhbG1vbi1pbWFnZVwiO1xuICBtZWFsTmFtZS5jbGFzc0xpc3QuYWRkKCdtZWFsLW5hbWUnKTtcbiAgbWVhbE5hbWUudGV4dENvbnRlbnQgPSBcIkJsYWNrZW5lZCBTYWxtb24gV2l0aCBHcmVlbiBHb2RkZXNzIEF2b2NhZG8gU2FsYWRcIjtcbiAgbWVhbERlc2MuY2xhc3NMaXN0LmFkZCgnbWVhbC1kZXNjcmlwdGlvbicpO1xuICBlbS50ZXh0Q29udGVudCA9IFwiU2FsbW9uIGlzIGxpa2UgdGhlIGdvZGZhdGhlciBvZiBmaXNoLiBJdHMgYmlnIG1lYXR5IGZpbGxldHMgY2FuIHN0YW5kIHVwIHRvIGp1c3QgYWJvdXQgYW55IGZsYXZvdXIgeW91IHRocm93IGF0IGl0LiBJdHMgb2lseSBmbGVzaCBjYW4gd2l0aHN0YW5kIHRoZSBoZWF0IG9mIGNoaWxsaSBhbmQgc3BpY2UgYW5kLCBsaWtlIG1vc3QgZmlzaCwgaXQgaXMgaW5jcmVkaWJseSBoZWFsdGh5LiBUaGUgYmxhY2tlbmluZyBtZXRob2Qgb2YgdGhpcyByZWNpcGUgY3JlYXRlcyBhIHdvbmRlcmZ1bCBkZWVwIGFuZCBzbW9reSBjcnVzdCBvbiB0aGUgdG9wIG9mIHRoZSBmaWxsZXRzIGFuZCwgd2hlbiBjb21iaW5lZCB3aXRoIGEgY29vbGluZyBjcmVhbXkgYXZvY2FkbyBzYWxhZCwgaXQgcmVhbGx5IGlzIGEgZGVsaWNpb3VzIGxpdHRsZSBkaW5uZXIuXCI7XG4gIG1lYWxEZXNjLmFwcGVuZENoaWxkKGVtKTtcbiAgbWVhbC5hcHBlbmQobWVhbEltZywgbWVhbE5hbWUsIG1lYWxEZXNjKTtcbiAgbWVhbFR5cGUuYXBwZW5kQ2hpbGQobWVhbCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVhbFR5cGUpO1xuXG4gIG1lYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVhbC5jbGFzc0xpc3QuYWRkKCdtZWFsJyk7XG4gIG1lYWxJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgbWVhbEltZy5jbGFzc0xpc3QuYWRkKCdtZWFsLWltZycpO1xuICBtZWFsSW1nLnNyYyA9IGhvbmV5Um9hc3Q7XG4gIG1lYWxJbWcuYWx0ID0gXCJob25leS1yb2FzdC1pbWFnZVwiO1xuICBtZWFsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIG1lYWxOYW1lLmNsYXNzTGlzdC5hZGQoJ21lYWwtbmFtZScpO1xuICBtZWFsTmFtZS50ZXh0Q29udGVudCA9IFwiSG9uZXkgUm9hc3QgUG90YXRvIFNhbGFkIHdpdGggR3JlZW4gQW5jaG92eSBEcmVzc2luZyAmIFNoYXZlZCBPbmlvblwiO1xuICBtZWFsRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWVhbERlc2MuY2xhc3NMaXN0LmFkZCgnbWVhbC1kZXNjcmlwdGlvbicpO1xuICBlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2VtJyk7XG4gIGVtLnRleHRDb250ZW50ID0gXCJBIHBvdGF0byBzYWxhZCB3aXRoIGEgZGlmZmVyZW5jZSBhbmQgYSBmYXIgY3J5IGZyb20gdGhlIG1heW8gbGFkZW4gb25lcyBtb3N0IG9mIHVzIGdyZXcgdXAgd2l0aC4gU2VlayBvdXQgamFycyBvciB0dWJzIG9mIGNyaXNweSBzaGFsbG90cyBpbiBtb3N0IHN1cGVyIG1hcmtldHMgb3Igc2hhbGxvdyBmcnkgdGhpbmx5IHNsaWNlZCBvbmVzIHVudGlsIGNyaXNwIGFuZCBnb2xkZW4gYmVmb3JlIGRyYWluaW5nIG9uIGtpdGNoZW4gcGFwZXIuIFRoZXkgYXJlIGEgd29uZGVyZnVsIGNyaXNweSBhZGRpdGlvbiB0byB0aGlzIHNlcmlvdXNseSBhZGRpY3RpdmUgcG90YXRvIHNhbGFkLiBUaGUgZHJlc3NpbmcgaGVyZSBpcyBvcGVuIHRvIGludGVycHJldGF0aW9uLCByZWR1Y2UgdGhlIGFtb3VudCBvZiBhbmNob3ZpZXMgaWYgdGhleSBhcmUgcGFydGljdWxhcmx5IHNhbHR5IG9yIG9taXQgZW50aXJlbHkgaWYgdGhleeKAmXJlIG5vdCB5b3VyIHRoaW5nLlwiO1xuICBtZWFsRGVzYy5hcHBlbmRDaGlsZChlbSk7XG4gIG1lYWwuYXBwZW5kKG1lYWxJbWcsIG1lYWxOYW1lLCBtZWFsRGVzYyk7XG4gIG1lYWxUeXBlLmFwcGVuZENoaWxkKG1lYWwpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1lYWxUeXBlKTtcblxuICBtZWFsVHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZWFsVHlwZS5jbGFzc0xpc3QuYWRkKCdtZWFsLXR5cGUnKTtcblxuICBzZXBhcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBzZXBhcmF0b3IuY2xhc3NMaXN0LmFkZCgnc2VwYXJhdG9yJyk7XG4gIHNlcGFyYXRvci50ZXh0Q29udGVudCA9IFwiTUFJTlwiO1xuICBtZWFsVHlwZS5hcHBlbmRDaGlsZChzZXBhcmF0b3IpO1xuXG4gIG1lYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVhbC5jbGFzc0xpc3QuYWRkKCdtZWFsJyk7XG4gIG1lYWxJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgbWVhbEltZy5jbGFzc0xpc3QuYWRkKCdtZWFsLWltZycpO1xuICBtZWFsSW1nLnNyYyA9IGxlbW9uU2FsbW9uO1xuICBtZWFsSW1nLmFsdCA9IFwibGVtb24tc2FsbW9uLWltYWdlXCI7XG4gIG1lYWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgbWVhbE5hbWUuY2xhc3NMaXN0LmFkZCgnbWVhbC1uYW1lJyk7XG4gIG1lYWxOYW1lLnRleHRDb250ZW50ID0gXCJXb29kIEZpcmVkIEZlbm5lbCBTYWxtb24sIFJvYXN0ZWQgVmVnICYgTGVtb24gQWlvbGlcIjtcbiAgbWVhbERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1lYWxEZXNjLmNsYXNzTGlzdC5hZGQoJ21lYWwtZGVzY3JpcHRpb24nKTtcbiAgZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdlbScpO1xuICBlbS50ZXh0Q29udGVudCA9IFwiU2Vla2luZyBvdXQgZ29vZCBxdWFsaXR5IGZpc2ggZnJvbSB5b3VyIGxvY2FsIGZpc2htb25nZXJzIGlzIHNvIHdvcnRod2hpbGUsIGFuZCByb2FzdGVkIGluIHRoZSBvdmVuIHdpdGggdGhpcyBmZW5uZWwgc2FsdCwgaXQgaXMgc2ltcGx5IGRlbGljaW91cyEgQW55IGxlZnRvdmVycyBvZiB0aGUgYWlvbGkgaGVyZSB3aWxsIGtlZXAgd2VsbCBpbiBhIGphciBpbiB0aGUgZnJpZGdlIGZvciB1cCB0byAyIGRheXMuXCI7XG4gIG1lYWxEZXNjLmFwcGVuZENoaWxkKGVtKTtcbiAgbWVhbC5hcHBlbmQobWVhbEltZywgbWVhbE5hbWUsIG1lYWxEZXNjKTtcbiAgbWVhbFR5cGUuYXBwZW5kQ2hpbGQobWVhbCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVhbFR5cGUpO1xuXG4gIG1lYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVhbC5jbGFzc0xpc3QuYWRkKCdtZWFsJyk7XG4gIG1lYWxJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgbWVhbEltZy5jbGFzc0xpc3QuYWRkKCdtZWFsLWltZycpO1xuICBtZWFsSW1nLnNyYyA9IGNpZGVyUG9yaztcbiAgbWVhbEltZy5hbHQgPSBcImNpZGVyLXBvcmstaW1hZ2VcIjtcbiAgbWVhbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBtZWFsTmFtZS5jbGFzc0xpc3QuYWRkKCdtZWFsLW5hbWUnKTtcbiAgbWVhbE5hbWUudGV4dENvbnRlbnQgPSBcIkNyZWFteSBNdXN0YXJkICYgQ2lkZXIgUG9yayBDaG9wc1wiO1xuICBtZWFsRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWVhbERlc2MuY2xhc3NMaXN0LmFkZCgnbWVhbC1kZXNjcmlwdGlvbicpO1xuICBlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2VtJyk7XG4gIGVtLnRleHRDb250ZW50ID0gXCJUaGlzIGNyZWFteSBzYXVjZSBtYWtlcyB0aGVzZSBjaG9wcyBhbGwgdGhlIG1vcmUgZGVsaWNpb3VzIVwiO1xuICBtZWFsRGVzYy5hcHBlbmRDaGlsZChlbSk7XG4gIG1lYWwuYXBwZW5kKG1lYWxJbWcsIG1lYWxOYW1lLCBtZWFsRGVzYyk7XG4gIG1lYWxUeXBlLmFwcGVuZENoaWxkKG1lYWwpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1lYWxUeXBlKTtcblxuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IHsgbWVudSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBob21lIH0gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCB7IG1lbnUgfSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHsgY29udGFjdCB9IGZyb20gJy4vY29udGFjdC5qcyc7XG5cbmNvbnN0IGFIb21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbmNvbnN0IGFNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbmNvbnN0IGFDb250YWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiBkaXNwbGF5KGUpIHtcbiAgc3dpdGNoIChlLnRhcmdldC5pZCkge1xuICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChob21lKCkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWVudSc6XG4gICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUoKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjb250YWN0JzpcbiAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdCgpKTtcbiAgICAgIGJyZWFrO1xuICB9XG59O1xuXG5hSG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gZGlzcGxheShlKSk7XG5hTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gZGlzcGxheShlKSk7XG5hQ29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gZGlzcGxheShlKSk7XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSgpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=