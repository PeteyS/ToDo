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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body,html{\n  padding: 0;\n  margin: 0;\n  height: 100vh;\n  width: 100vw;\n}\n.control{\n  width: 100px;\n  height: 25px;\n}\n.projectShow{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 520px;\n  background-color: rgb(230, 182, 124);\n}\n.todoContainer{\n  display: flex;\n  width: 400px;\n  background-color: white;\n  color: black;\n  margin: 10px;\n}\n.projectContainer{\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  margin: 5px;\n  padding: 5px;\n  width: 90%;\n  font-size:8px;\n  background-color: antiquewhite;\n  border-radius: 5px;\n  color: black;\n}\n.todoName,.todoMessage,.todoDate,.todoDelete,.todoIdentify,.todoEdit,.projectDelete,.projectEdit{\n  margin: 4px;\n}\n.todoDelete,.projectDelete{\n  background-color: transparent;\n  border-radius: 100%;\n  height: 30px;\n  width: 30px;\n  margin-left: auto;\n}\n.todoEdit,.projectEdit{\n  background-color: transparent;\n  border-radius: 100%;\n  height: 29px;\n  width: 29px;\n}\n#projectForm,#todoForm,#form,#blackout{\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n  z-index: 9;\n}\n.formContainer{\n  max-width: 300px;\n  padding: 10px;\n  background-color: white;\n  border-radius: 5px;\n}\n#container{\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\nheader{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 0.5;\n  min-height: 100px;\n  background-color: rgb(240, 213, 179);\n}\n#main{\nflex: 6;\ndisplay: flex;\n}\n#sideBar{\nwidth: 0px;\nz-index: 1;\noverflow-x: hidden;\ntransition: 0.5s;\nmin-width:250px;\nflex: 1 1 0%;\nbackground-color: rgb(230, 182, 124);\nborder-radius: 5px;\n}\n.content{\n  flex: 6; \n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  overflow: scroll;\n  background-color: antiquewhite;\n}\n.add{\n  height: 50px;\n  width: 500px;\n  background-color: beige;\n}\n.show{\n  min-height: 600px;\n  margin-top: 20px;\n  height: 85%;\n  width: 700px;\n  background-color: wheat;\n  display: flex;\n  flex-direction: column;\n}\nfooter{\nflex: 0.5;\n}\n#blackout{\n  height: 100%;\n  width: 100%;\n  position: absoulte;\n  display: none;\n  background-color: black;\n  opacity: 0.5;\n}\n#titleNoteBook{\n  height: 50px;\n  width: 50px;\n}\n#mainTitle{\n  display: flex;\n  transition: 0.5s;\n  margin-left: 250px;\n}\n#menuButtonIcon{\n  height: 50px;\n  width: 50px;\n  border-radius: 30%;\n  cursor: pointer;\n  background-color: lightblue;\n}\n#menuButtonIcon:hover{\n  transform: scale(1.1);\n}\n#menuButtonIcon:active{\n  transform: scale(0.99);\n}\n#menuButton{\n  position: absolute;\n  top: 10px;\n  left: 110px;\n}\n.sideBarItems{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 80px;\n  cursor: pointer;\n}\n.sideBarItems:active{\n  transform:scale(0.99);\n}\n#projectIcon,#todayIcon,#inboxIcon{\n  height: 30px;\n  width: 30px;\n}\n.deleteIcon,.editIcon{\n  background-color: transparent;\n  height: 30px;\n  width: 30px;\n}\n.deleteIcon{\n  height: 27px;\n  width: 27px;\n}\n.formatItems{\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 90%;\n  height: 55%;\n}\n.sideBarIcon{\n  margin-left: 4px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,aAAa;EACb,YAAY;AACd;AACA;EACE,YAAY;EACZ,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,2BAA2B;EAC3B,aAAa;EACb,oCAAoC;AACtC;AACA;EACE,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,YAAY;AACd;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,UAAU;EACV,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,WAAW;AACb;AACA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,iBAAiB;AACnB;AACA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,YAAY;EACZ,WAAW;AACb;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,+BAA+B;EAC/B,UAAU;AACZ;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,iBAAiB;EACjB,oCAAoC;AACtC;AACA;AACA,OAAO;AACP,aAAa;AACb;AACA;AACA,UAAU;AACV,UAAU;AACV,kBAAkB;AAClB,gBAAgB;AAChB,eAAe;AACf,YAAY;AACZ,oCAAoC;AACpC,kBAAkB;AAClB;AACA;EACE,OAAO;EACP,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,gBAAgB;EAChB,8BAA8B;AAChC;AACA;EACE,YAAY;EACZ,YAAY;EACZ,uBAAuB;AACzB;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,sBAAsB;AACxB;AACA;AACA,SAAS;AACT;AACA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,YAAY;AACd;AACA;EACE,YAAY;EACZ,WAAW;AACb;AACA;EACE,aAAa;EACb,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,2BAA2B;AAC7B;AACA;EACE,qBAAqB;AACvB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,YAAY;EACZ,WAAW;AACb;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,WAAW;AACb;AACA;EACE,YAAY;EACZ,WAAW;AACb;AACA;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,UAAU;EACV,WAAW;AACb;AACA;EACE,gBAAgB;AAClB","sourcesContent":["body,html{\n  padding: 0;\n  margin: 0;\n  height: 100vh;\n  width: 100vw;\n}\n.control{\n  width: 100px;\n  height: 25px;\n}\n.projectShow{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 520px;\n  background-color: rgb(230, 182, 124);\n}\n.todoContainer{\n  display: flex;\n  width: 400px;\n  background-color: white;\n  color: black;\n  margin: 10px;\n}\n.projectContainer{\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  margin: 5px;\n  padding: 5px;\n  width: 90%;\n  font-size:8px;\n  background-color: antiquewhite;\n  border-radius: 5px;\n  color: black;\n}\n.todoName,.todoMessage,.todoDate,.todoDelete,.todoIdentify,.todoEdit,.projectDelete,.projectEdit{\n  margin: 4px;\n}\n.todoDelete,.projectDelete{\n  background-color: transparent;\n  border-radius: 100%;\n  height: 30px;\n  width: 30px;\n  margin-left: auto;\n}\n.todoEdit,.projectEdit{\n  background-color: transparent;\n  border-radius: 100%;\n  height: 29px;\n  width: 29px;\n}\n#projectForm,#todoForm,#form,#blackout{\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n  z-index: 9;\n}\n.formContainer{\n  max-width: 300px;\n  padding: 10px;\n  background-color: white;\n  border-radius: 5px;\n}\n#container{\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\nheader{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 0.5;\n  min-height: 100px;\n  background-color: rgb(240, 213, 179);\n}\n#main{\nflex: 6;\ndisplay: flex;\n}\n#sideBar{\nwidth: 0px;\nz-index: 1;\noverflow-x: hidden;\ntransition: 0.5s;\nmin-width:250px;\nflex: 1 1 0%;\nbackground-color: rgb(230, 182, 124);\nborder-radius: 5px;\n}\n.content{\n  flex: 6; \n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  overflow: scroll;\n  background-color: antiquewhite;\n}\n.add{\n  height: 50px;\n  width: 500px;\n  background-color: beige;\n}\n.show{\n  min-height: 600px;\n  margin-top: 20px;\n  height: 85%;\n  width: 700px;\n  background-color: wheat;\n  display: flex;\n  flex-direction: column;\n}\nfooter{\nflex: 0.5;\n}\n#blackout{\n  height: 100%;\n  width: 100%;\n  position: absoulte;\n  display: none;\n  background-color: black;\n  opacity: 0.5;\n}\n#titleNoteBook{\n  height: 50px;\n  width: 50px;\n}\n#mainTitle{\n  display: flex;\n  transition: 0.5s;\n  margin-left: 250px;\n}\n#menuButtonIcon{\n  height: 50px;\n  width: 50px;\n  border-radius: 30%;\n  cursor: pointer;\n  background-color: lightblue;\n}\n#menuButtonIcon:hover{\n  transform: scale(1.1);\n}\n#menuButtonIcon:active{\n  transform: scale(0.99);\n}\n#menuButton{\n  position: absolute;\n  top: 10px;\n  left: 110px;\n}\n.sideBarItems{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 80px;\n  cursor: pointer;\n}\n.sideBarItems:active{\n  transform:scale(0.99);\n}\n#projectIcon,#todayIcon,#inboxIcon{\n  height: 30px;\n  width: 30px;\n}\n.deleteIcon,.editIcon{\n  background-color: transparent;\n  height: 30px;\n  width: 30px;\n}\n.deleteIcon{\n  height: 27px;\n  width: 27px;\n}\n.formatItems{\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 90%;\n  height: 55%;\n}\n.sideBarIcon{\n  margin-left: 4px;\n}"],"sourceRoot":""}]);
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/edit.png":
/*!**********************!*\
  !*** ./src/edit.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "20b23789e3450cf5cf5f.png";

/***/ }),

/***/ "./src/remove.png":
/*!************************!*\
  !*** ./src/remove.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c662b752278fc52f408.png";

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
/******/ 				scriptUrl = document.currentScript.src
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
/* harmony import */ var _remove_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove.png */ "./src/remove.png");
/* harmony import */ var _edit_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.png */ "./src/edit.png");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

 




let today = new Date();
let dd = String(today.getDate()).padStart(2,'0');
let mm = String(today.getMonth()+1).padStart(2,"0");
let yyyy = today.getFullYear();
today = yyyy+ '-' + mm + '-' + dd;
let identifier = 0;
const projectName = document.querySelector('#projectName');
const projectMessage = document.querySelector("#projectMessage");
const projectDate = document.querySelector('#projectDate');
const submit = document.querySelector("#submit");
const form = document.querySelector('#form');
const show = document.querySelector('.show');
let todoList = [];
let projectSet = new Set();
let projectList = [];
const todayButton = document.querySelector('#today');
const inboxButton = document.querySelector('#inbox');
const projectButton = document.querySelector('#project');
const projectShow = document.querySelector(".projectShow");
const todoForm = document.querySelector('#todoForm');
const projectForm = document.querySelector('#projectForm');
const proChangeName = document.querySelector('#projectChangeName');
const proSubmit = document.querySelector('#projectSubmit');
const projectCancel = document.querySelector('#projectCancel');
const todoSubmit = document.querySelector('#todoSubmit');
const todoCancel =document.querySelector('#todoCancel');
const todoChangeName = document.querySelector("#todoChangeName");
const todoChangeText = document.querySelector('#todoChangeText');
const todoChangeDate = document.querySelector("#todoChangeDate");
let objRefresh = {name:"",message:"",date:"",identifier:""};
let name2;
let swtch1=0;
let swtch2=0;
const add = document.querySelector('.add');
const blackout = document.querySelector('#blackout');
const fromCancel = document.querySelector('#formCancel');
const menuButton = document.querySelector('#menuButton');
const sideBar = document.querySelector('#sideBar');
const mainTitle = document.querySelector('#mainTitle');
const menuButtonIcon = document.querySelector('#menuButtonIcon');
let currentChoice = ''; //this will be used to default that todo project name or date, depending on tab clicked
const sideBarIcons = document.querySelectorAll('.sideBarIcon');
const sideBarItems = document.querySelectorAll('.sideBarItems');

sideBarItems.forEach(element => {
    element.addEventListener('mouseover',(event)=>{
        element.getElementsByTagName('img')[0].style.background = 'lightblue';
        element.getElementsByTagName('img')[0].style.borderRadius = '20%';
        element.getElementsByTagName('div')[0].style.background = 'antiquewhite';
        element.getElementsByTagName('div')[0].style.borderRadius = '15px';
    })
    element.addEventListener('mouseout',()=>{
        element.getElementsByTagName('img')[0].style.background = 'rgb(230, 182, 124)';
        element.getElementsByTagName('img')[0].style.borderRadius = '0%';
        element.getElementsByTagName('div')[0].style.background = 'rgb(230, 182, 124)';
    })
});


menuButton.addEventListener('click',()=>{
    console.log(sideBar.style.flex);
    if(sideBar.style.flex == '1 1 0%' || sideBar.style.flex == ""){
        sideBar.style.flex = '0 1 0%';
        sideBar.style.minWidth = '0px';
        mainTitle.style.marginLeft = '0px';
        menuButtonIcon.style.background = 'rgb(241, 224, 202)';
        console.log(sideBar.style.flex);
    }
    else{
        sideBar.style.minWidth = '250px';
        sideBar.style.flex = '1 1 0%';
        mainTitle.style.marginLeft = '250px';
        menuButtonIcon.style.background = 'lightblue';
    }
})

function showForm(){
form.style.display = 'block';
blackout.style.display = 'block';
}

function hideForm(){
    clearForm();
    form.style.display = 'none';
    blackout.style.display = 'none';
}

function clearForm(){
    projectName.value = "";
    projectMessage.value = "";
    projectDate.value = "";
}

function todo(name,message,date){
    if (message == null){
        message = "";
    }
    if (date == null || date == ""){
        date = 'n/a';
    }
    identifier : identifier;
    identifier++;
    return {
        name:name,
        message:message,
        date:date,
        identifier};
}

function redrawTodo(list){
    show.innerHTML = "";
    for(let i=0;i<list.length;i++){
        show.append(todoDiv(list[i]));
    } 
}

function redrawProject(proList){
    projectShow.innerHTML = "";
    for(let i=0;i<proList.length;i++){
        projectShow.append(projectDiv(proList[i]));
    }
}

function deleteProject(objName,proList,proSet){
    for(let i=0;i<proList.length;i++){
        if(objName == proList[i]){
            proList.splice(i,1);
            if(proSet.has(objName)){
                proSet.delete(objName)
            }
        }
    }
    return proList,proSet;
}

function deleteTodo(item,todoList){
    for(let i=0;i<todoList.length;i++){
        if(item.identifier == todoList[i].identifier){
            todoList.splice(i,1);
        }
    }
    return todoList;
}

function deleteWholeProject(objName,todoList,proList,proSet){
    for(let i=0;i<todoList.length;i++){
        if(todoList[i].name == objName){
            deleteTodo(todoList[i],todoList,proSet);
            i--;
        }
    }
    proList = deleteProject(objName,proList,proSet);
    return todoList,proList,proSet;
}


function setList(list){ 
    let set = new Set(list);
    let newArr = Array.from(set);
    return newArr;
}

function addProject(name,projectList,projectSet){
    if(!name == ""){
        if(projectList.length == 0){
            projectList.push(name);
        }
        else{
            projectList.unshift(name);
            projectList = setList(projectList);
        }
        projectSet.add(name);
    }
}


function todoDiv(obj){

    const todoContainer = document.createElement('div');
    const todoMessage = document.createElement('div');
    const todoDelete = document.createElement('div');
    const todoDate = document.createElement('div');
    const todoName = document.createElement('div');
    const todoIdentify = document.createElement('div');
    const todoEdit = document.createElement('div');
    const rIcon = new Image();
    const eIcon = new Image();
    rIcon.src = _remove_png__WEBPACK_IMPORTED_MODULE_0__;
    eIcon.src = _edit_png__WEBPACK_IMPORTED_MODULE_1__;
    rIcon.classList.add('deleteIcon');
    eIcon.classList.add('editIcon');

    todoContainer.classList.add('todoContainer');
    todoMessage.classList.add('todoMessage');
    todoDelete.classList.add('todoDelete');
    todoDelete.appendChild(rIcon);
    todoDate.classList.add('todoDate');
    todoName.classList.add("todoName");
    todoIdentify.classList.add('todoIdentify');
    todoEdit.classList.add('todoEdit');
    todoEdit.appendChild(eIcon);
    todoName.textContent = obj.name;
    todoIdentify.textContent = obj.identifier;
    todoMessage.textContent = obj.message;
    todoDate.textContent = obj.date;
    todoContainer.append(todoName,todoMessage,todoDate,todoDelete,todoEdit);
    todoDelete.addEventListener('click',()=>{
        todoList = deleteTodo(obj,todoList);
        redrawTodo(todoList);
    })
    todoEdit.addEventListener('click',()=>{

        objRefresh.name = obj.name;
        objRefresh.date = obj.date;
        objRefresh.message = obj.message;
        objRefresh.identifier = obj.identifier;

        todoChangeName.value = obj.name;
        todoChangeText.value = obj.message;
        todoChangeDate.value = obj.date;

        todoForm.style.display = 'block';

    });
    todoForm.onsubmit = function(){
        objRefresh.message = todoChangeText.value;
        objRefresh.date = todoChangeDate.value;
        objRefresh.name = todoChangeName.value;
        for(let i=0;i<todoList.length;i++){
            if(todoList[i].identifier == objRefresh.identifier){
                todoList[i].name = objRefresh.name;
                todoList[i].message = objRefresh.message;
                todoList[i].date = objRefresh.date;
            }
        }
        if(!projectSet.has(objRefresh.name)){
            if(objRefresh.name != ""){
                projectSet.add(objRefresh.name);
                projectList.unshift(objRefresh.name);
            }
        }
        redrawProject(projectList);
        redrawTodo(todoList);
        todoForm.style.display = 'none';
        return false;
    }
    todoSubmit.addEventListener('click',()=>{
        todoForm.style.display = 'none';
        return false;
    });
    todoCancel.addEventListener('click',()=>{
        todoForm.style.display = 'none';
    });
    return todoContainer;
}

function projectNameEdit(projectList,projectSet,todoList,newName,oldName){
    if(newName == oldName){
        return projectList,projectSet,todoList,newName;
    }
    else if(projectSet.has(newName)){
        for(let i=0;i<todoList.length;i++){
            if(todoList[i].name == oldName){
                todoList[i].name = newName;
            }
        }
        deleteProject(oldName,projectList,projectSet);
        return projectList,projectSet,todoList,newName;
    }
    else if(projectSet.has(newName) == false){
        if(newName != ""){
            addProject(newName,projectList,projectSet)
            for(let i=0;i<todoList.length;i++){
                if(todoList[i].name == oldName){
                    todoList[i].name = newName;
                }
            }
        }
        deleteProject(oldName,projectList,projectSet);
        return projectList,projectSet,todoList,newName;
    }
    else{
        return projectList,projectSet,todoList,newName;
    }
}

function projectDiv(name){ //should probably add list and set as parameters for reusability
    const rIcon = new Image();
    const eIcon = new Image();
    rIcon.src = _remove_png__WEBPACK_IMPORTED_MODULE_0__;
    eIcon.src = _edit_png__WEBPACK_IMPORTED_MODULE_1__;
    rIcon.classList.add('deleteIcon');
    eIcon.classList.add('editIcon');

    const projectContainer = document.createElement('div');
    const projectTitle = document.createElement('h1');
    const projectDelete = document.createElement('div');
    const projectEdit = document.createElement('div');
    projectContainer.classList.add('projectContainer');
    projectTitle.classList.add('projectTitle');
    projectDelete.classList.add('projectDelete');
    projectDelete.append(rIcon);
    projectEdit.classList.add('projectEdit');
    projectEdit.appendChild(eIcon);
    projectTitle.textContent = name;
    projectContainer.append(projectTitle,projectDelete,projectEdit);
    projectContainer.addEventListener('click',()=>{
        redrawTodo(todoList);
    });
    projectDelete.addEventListener('click',()=>{
        todoList,projectList,projectSet = deleteWholeProject(name,todoList,projectList,projectSet);
        redrawTodo(todoList);
        redrawProject(projectList);
    });
    projectEdit.addEventListener('click',()=>{
        projectForm.style.display = 'block';
        proChangeName.value = name;
        name2 = name;
    });
    projectForm.onsubmit = function(){
        if(name2 != proChangeName.value){
            if(projectSet.has(proChangeName.value)){
                for(let i=0;i<todoList.length;i++){
                    if(todoList[i].name == name2){
                        todoList[i].name = proChangeName.value;
                    }
                }
                projectList,projectSet = deleteProject(name2,projectList,projectSet);
            }
            else{
                projectList.unshift(proChangeName.value);
                for(let i=0;i<todoList.length;i++){
                    if(todoList[i].name == name2){
                        todoList[i].name = proChangeName.value;
                    }
                }
                projectList,projectSet = deleteProject(name2,projectList,projectSet);
            }
        }
        redrawProject(projectList);
        redrawTodo(todoList);
        projectForm.style.display = 'none';
        return false;
    }
    proSubmit.addEventListener('click',()=>{
        return false;
    });
    projectCancel.addEventListener("click", ()=>{
        projectForm.style.display = 'none';
    });
    return projectContainer;
}

form.onsubmit = function(){
    const object = todo(projectName.value, projectMessage.value, projectDate.value);
    todoList.unshift(object);
    if(!object.name == ""){
        if(projectList.length == 0){
            projectList.push(object.name);
        }
        else{
            projectList.unshift(object.name);
            projectList = setList(projectList);
        }
        if(projectSet.has(object.name) == false){
            if(projectShow.firstChild){
                projectShow.insertBefore(projectDiv(object.name),projectShow.firstChild);
            }
            else{
                projectShow.append(projectDiv(object.name));
            }
        }
        projectSet.add(object.name);
    }

    if(show.firstChild){
        show.insertBefore(todoDiv(object),show.firstChild)
    }
    else{
        show.append(todoDiv(object));
    }
    hideForm();
    return false;
}

submit.addEventListener('click',()=>{
    return false;
});

inboxButton.addEventListener('click', ()=>{
    redrawTodo(todoList);
});

todayButton.addEventListener('click', ()=>{
    show.innerHTML = "";
    for(let i=0;i<todoList.length;i++){
        if(todoList[i].date == today){
            show.append(todoDiv(todoList[i]));
        }
    } 
});

add.addEventListener('click',()=>{
    showForm();
});

fromCancel.addEventListener('click',()=>{
    hideForm();
});

blackout.addEventListener('click',()=>{
    hideForm();
});

projectButton.addEventListener('click', ()=>{
    show.innerHTML = "";
    for(let i=0;i<projectList.length;i++){
        show.append(projectDiv(projectList[i]));
    }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLGNBQWM7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0NBQVU7QUFDMUIsZ0JBQWdCLHNDQUFRO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsZ0JBQWdCLHdDQUFVO0FBQzFCLGdCQUFnQixzQ0FBUTtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtCQUFrQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtCQUFrQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsZ0JBQWdCLHFCQUFxQjtBQUNyQztBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSxodG1se1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcbi5jb250cm9se1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbn1cXG4ucHJvamVjdFNob3d7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBoZWlnaHQ6IDUyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMTgyLCAxMjQpO1xcbn1cXG4udG9kb0NvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuLnByb2plY3RDb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGZvbnQtc2l6ZTo4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi50b2RvTmFtZSwudG9kb01lc3NhZ2UsLnRvZG9EYXRlLC50b2RvRGVsZXRlLC50b2RvSWRlbnRpZnksLnRvZG9FZGl0LC5wcm9qZWN0RGVsZXRlLC5wcm9qZWN0RWRpdHtcXG4gIG1hcmdpbjogNHB4O1xcbn1cXG4udG9kb0RlbGV0ZSwucHJvamVjdERlbGV0ZXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbi50b2RvRWRpdCwucHJvamVjdEVkaXR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBoZWlnaHQ6IDI5cHg7XFxuICB3aWR0aDogMjlweDtcXG59XFxuI3Byb2plY3RGb3JtLCN0b2RvRm9ybSwjZm9ybSwjYmxhY2tvdXR7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbiAgei1pbmRleDogOTtcXG59XFxuLmZvcm1Db250YWluZXJ7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4jY29udGFpbmVye1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuaGVhZGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXg6IDAuNTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjEzLCAxNzkpO1xcbn1cXG4jbWFpbntcXG5mbGV4OiA2O1xcbmRpc3BsYXk6IGZsZXg7XFxufVxcbiNzaWRlQmFye1xcbndpZHRoOiAwcHg7XFxuei1pbmRleDogMTtcXG5vdmVyZmxvdy14OiBoaWRkZW47XFxudHJhbnNpdGlvbjogMC41cztcXG5taW4td2lkdGg6MjUwcHg7XFxuZmxleDogMSAxIDAlO1xcbmJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDE4MiwgMTI0KTtcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5jb250ZW50e1xcbiAgZmxleDogNjsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxufVxcbi5hZGR7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG59XFxuLnNob3d7XFxuICBtaW4taGVpZ2h0OiA2MDBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBoZWlnaHQ6IDg1JTtcXG4gIHdpZHRoOiA3MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbmZvb3RlcntcXG5mbGV4OiAwLjU7XFxufVxcbiNibGFja291dHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic291bHRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG4jdGl0bGVOb3RlQm9va3tcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG4jbWFpblRpdGxle1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBtYXJnaW4tbGVmdDogMjUwcHg7XFxufVxcbiNtZW51QnV0dG9uSWNvbntcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMzAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbn1cXG4jbWVudUJ1dHRvbkljb246aG92ZXJ7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbiNtZW51QnV0dG9uSWNvbjphY3RpdmV7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xcbn1cXG4jbWVudUJ1dHRvbntcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG4gIGxlZnQ6IDExMHB4O1xcbn1cXG4uc2lkZUJhckl0ZW1ze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2lkZUJhckl0ZW1zOmFjdGl2ZXtcXG4gIHRyYW5zZm9ybTpzY2FsZSgwLjk5KTtcXG59XFxuI3Byb2plY3RJY29uLCN0b2RheUljb24sI2luYm94SWNvbntcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG4uZGVsZXRlSWNvbiwuZWRpdEljb257XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG4uZGVsZXRlSWNvbntcXG4gIGhlaWdodDogMjdweDtcXG4gIHdpZHRoOiAyN3B4O1xcbn1cXG4uZm9ybWF0SXRlbXN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDU1JTtcXG59XFxuLnNpZGVCYXJJY29ue1xcbiAgbWFyZ2luLWxlZnQ6IDRweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCwrQkFBK0I7RUFDL0IsVUFBVTtBQUNaO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixvQ0FBb0M7QUFDdEM7QUFDQTtBQUNBLE9BQU87QUFDUCxhQUFhO0FBQ2I7QUFDQTtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1Ysa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixlQUFlO0FBQ2YsWUFBWTtBQUNaLG9DQUFvQztBQUNwQyxrQkFBa0I7QUFDbEI7QUFDQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSxodG1se1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcbi5jb250cm9se1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbn1cXG4ucHJvamVjdFNob3d7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBoZWlnaHQ6IDUyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMTgyLCAxMjQpO1xcbn1cXG4udG9kb0NvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuLnByb2plY3RDb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGZvbnQtc2l6ZTo4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi50b2RvTmFtZSwudG9kb01lc3NhZ2UsLnRvZG9EYXRlLC50b2RvRGVsZXRlLC50b2RvSWRlbnRpZnksLnRvZG9FZGl0LC5wcm9qZWN0RGVsZXRlLC5wcm9qZWN0RWRpdHtcXG4gIG1hcmdpbjogNHB4O1xcbn1cXG4udG9kb0RlbGV0ZSwucHJvamVjdERlbGV0ZXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbi50b2RvRWRpdCwucHJvamVjdEVkaXR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBoZWlnaHQ6IDI5cHg7XFxuICB3aWR0aDogMjlweDtcXG59XFxuI3Byb2plY3RGb3JtLCN0b2RvRm9ybSwjZm9ybSwjYmxhY2tvdXR7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbiAgei1pbmRleDogOTtcXG59XFxuLmZvcm1Db250YWluZXJ7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4jY29udGFpbmVye1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuaGVhZGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXg6IDAuNTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjEzLCAxNzkpO1xcbn1cXG4jbWFpbntcXG5mbGV4OiA2O1xcbmRpc3BsYXk6IGZsZXg7XFxufVxcbiNzaWRlQmFye1xcbndpZHRoOiAwcHg7XFxuei1pbmRleDogMTtcXG5vdmVyZmxvdy14OiBoaWRkZW47XFxudHJhbnNpdGlvbjogMC41cztcXG5taW4td2lkdGg6MjUwcHg7XFxuZmxleDogMSAxIDAlO1xcbmJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDE4MiwgMTI0KTtcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5jb250ZW50e1xcbiAgZmxleDogNjsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxufVxcbi5hZGR7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG59XFxuLnNob3d7XFxuICBtaW4taGVpZ2h0OiA2MDBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBoZWlnaHQ6IDg1JTtcXG4gIHdpZHRoOiA3MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbmZvb3RlcntcXG5mbGV4OiAwLjU7XFxufVxcbiNibGFja291dHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic291bHRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG4jdGl0bGVOb3RlQm9va3tcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG4jbWFpblRpdGxle1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBtYXJnaW4tbGVmdDogMjUwcHg7XFxufVxcbiNtZW51QnV0dG9uSWNvbntcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMzAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbn1cXG4jbWVudUJ1dHRvbkljb246aG92ZXJ7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbiNtZW51QnV0dG9uSWNvbjphY3RpdmV7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xcbn1cXG4jbWVudUJ1dHRvbntcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG4gIGxlZnQ6IDExMHB4O1xcbn1cXG4uc2lkZUJhckl0ZW1ze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2lkZUJhckl0ZW1zOmFjdGl2ZXtcXG4gIHRyYW5zZm9ybTpzY2FsZSgwLjk5KTtcXG59XFxuI3Byb2plY3RJY29uLCN0b2RheUljb24sI2luYm94SWNvbntcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG4uZGVsZXRlSWNvbiwuZWRpdEljb257XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG4uZGVsZXRlSWNvbntcXG4gIGhlaWdodDogMjdweDtcXG4gIHdpZHRoOiAyN3B4O1xcbn1cXG4uZm9ybWF0SXRlbXN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDU1JTtcXG59XFxuLnNpZGVCYXJJY29ue1xcbiAgbWFyZ2luLWxlZnQ6IDRweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCByZW1vdmVJY29uIGZyb20gJy4vcmVtb3ZlLnBuZyc7XG5pbXBvcnQgZWRpdEljb24gZnJvbSAnLi9lZGl0LnBuZyc7IFxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuXG5sZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xubGV0IGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwnMCcpO1xubGV0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkrMSkucGFkU3RhcnQoMixcIjBcIik7XG5sZXQgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG50b2RheSA9IHl5eXkrICctJyArIG1tICsgJy0nICsgZGQ7XG5sZXQgaWRlbnRpZmllciA9IDA7XG5jb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TmFtZScpO1xuY29uc3QgcHJvamVjdE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RNZXNzYWdlXCIpO1xuY29uc3QgcHJvamVjdERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdERhdGUnKTtcbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0XCIpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtJyk7XG5jb25zdCBzaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3cnKTtcbmxldCB0b2RvTGlzdCA9IFtdO1xubGV0IHByb2plY3RTZXQgPSBuZXcgU2V0KCk7XG5sZXQgcHJvamVjdExpc3QgPSBbXTtcbmNvbnN0IHRvZGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5Jyk7XG5jb25zdCBpbmJveEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmJveCcpO1xuY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Jyk7XG5jb25zdCBwcm9qZWN0U2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFNob3dcIik7XG5jb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvRm9ybScpO1xuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEZvcm0nKTtcbmNvbnN0IHByb0NoYW5nZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdENoYW5nZU5hbWUnKTtcbmNvbnN0IHByb1N1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0U3VibWl0Jyk7XG5jb25zdCBwcm9qZWN0Q2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RDYW5jZWwnKTtcbmNvbnN0IHRvZG9TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb1N1Ym1pdCcpO1xuY29uc3QgdG9kb0NhbmNlbCA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9DYW5jZWwnKTtcbmNvbnN0IHRvZG9DaGFuZ2VOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvQ2hhbmdlTmFtZVwiKTtcbmNvbnN0IHRvZG9DaGFuZ2VUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9DaGFuZ2VUZXh0Jyk7XG5jb25zdCB0b2RvQ2hhbmdlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0NoYW5nZURhdGVcIik7XG5sZXQgb2JqUmVmcmVzaCA9IHtuYW1lOlwiXCIsbWVzc2FnZTpcIlwiLGRhdGU6XCJcIixpZGVudGlmaWVyOlwiXCJ9O1xubGV0IG5hbWUyO1xubGV0IHN3dGNoMT0wO1xubGV0IHN3dGNoMj0wO1xuY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZCcpO1xuY29uc3QgYmxhY2tvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxhY2tvdXQnKTtcbmNvbnN0IGZyb21DYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybUNhbmNlbCcpO1xuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51QnV0dG9uJyk7XG5jb25zdCBzaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGVCYXInKTtcbmNvbnN0IG1haW5UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluVGl0bGUnKTtcbmNvbnN0IG1lbnVCdXR0b25JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnVCdXR0b25JY29uJyk7XG5sZXQgY3VycmVudENob2ljZSA9ICcnOyAvL3RoaXMgd2lsbCBiZSB1c2VkIHRvIGRlZmF1bHQgdGhhdCB0b2RvIHByb2plY3QgbmFtZSBvciBkYXRlLCBkZXBlbmRpbmcgb24gdGFiIGNsaWNrZWRcbmNvbnN0IHNpZGVCYXJJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlQmFySWNvbicpO1xuY29uc3Qgc2lkZUJhckl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGVCYXJJdGVtcycpO1xuXG5zaWRlQmFySXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsKGV2ZW50KT0+e1xuICAgICAgICBlbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXS5zdHlsZS5iYWNrZ3JvdW5kID0gJ2xpZ2h0Ymx1ZSc7XG4gICAgICAgIGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdLnN0eWxlLmJvcmRlclJhZGl1cyA9ICcyMCUnO1xuICAgICAgICBlbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdkaXYnKVswXS5zdHlsZS5iYWNrZ3JvdW5kID0gJ2FudGlxdWV3aGl0ZSc7XG4gICAgICAgIGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2RpdicpWzBdLnN0eWxlLmJvcmRlclJhZGl1cyA9ICcxNXB4JztcbiAgICB9KVxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCgpPT57XG4gICAgICAgIGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdLnN0eWxlLmJhY2tncm91bmQgPSAncmdiKDIzMCwgMTgyLCAxMjQpJztcbiAgICAgICAgZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0uc3R5bGUuYm9yZGVyUmFkaXVzID0gJzAlJztcbiAgICAgICAgZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZGl2JylbMF0uc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2IoMjMwLCAxODIsIDEyNCknO1xuICAgIH0pXG59KTtcblxuXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGNvbnNvbGUubG9nKHNpZGVCYXIuc3R5bGUuZmxleCk7XG4gICAgaWYoc2lkZUJhci5zdHlsZS5mbGV4ID09ICcxIDEgMCUnIHx8IHNpZGVCYXIuc3R5bGUuZmxleCA9PSBcIlwiKXtcbiAgICAgICAgc2lkZUJhci5zdHlsZS5mbGV4ID0gJzAgMSAwJSc7XG4gICAgICAgIHNpZGVCYXIuc3R5bGUubWluV2lkdGggPSAnMHB4JztcbiAgICAgICAgbWFpblRpdGxlLnN0eWxlLm1hcmdpbkxlZnQgPSAnMHB4JztcbiAgICAgICAgbWVudUJ1dHRvbkljb24uc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2IoMjQxLCAyMjQsIDIwMiknO1xuICAgICAgICBjb25zb2xlLmxvZyhzaWRlQmFyLnN0eWxlLmZsZXgpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBzaWRlQmFyLnN0eWxlLm1pbldpZHRoID0gJzI1MHB4JztcbiAgICAgICAgc2lkZUJhci5zdHlsZS5mbGV4ID0gJzEgMSAwJSc7XG4gICAgICAgIG1haW5UaXRsZS5zdHlsZS5tYXJnaW5MZWZ0ID0gJzI1MHB4JztcbiAgICAgICAgbWVudUJ1dHRvbkljb24uc3R5bGUuYmFja2dyb3VuZCA9ICdsaWdodGJsdWUnO1xuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIHNob3dGb3JtKCl7XG5mb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuYmxhY2tvdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIGhpZGVGb3JtKCl7XG4gICAgY2xlYXJGb3JtKCk7XG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGJsYWNrb3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRm9ybSgpe1xuICAgIHByb2plY3ROYW1lLnZhbHVlID0gXCJcIjtcbiAgICBwcm9qZWN0TWVzc2FnZS52YWx1ZSA9IFwiXCI7XG4gICAgcHJvamVjdERhdGUudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiB0b2RvKG5hbWUsbWVzc2FnZSxkYXRlKXtcbiAgICBpZiAobWVzc2FnZSA9PSBudWxsKXtcbiAgICAgICAgbWVzc2FnZSA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChkYXRlID09IG51bGwgfHwgZGF0ZSA9PSBcIlwiKXtcbiAgICAgICAgZGF0ZSA9ICduL2EnO1xuICAgIH1cbiAgICBpZGVudGlmaWVyIDogaWRlbnRpZmllcjtcbiAgICBpZGVudGlmaWVyKys7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTpuYW1lLFxuICAgICAgICBtZXNzYWdlOm1lc3NhZ2UsXG4gICAgICAgIGRhdGU6ZGF0ZSxcbiAgICAgICAgaWRlbnRpZmllcn07XG59XG5cbmZ1bmN0aW9uIHJlZHJhd1RvZG8obGlzdCl7XG4gICAgc2hvdy5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvcihsZXQgaT0wO2k8bGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgc2hvdy5hcHBlbmQodG9kb0RpdihsaXN0W2ldKSk7XG4gICAgfSBcbn1cblxuZnVuY3Rpb24gcmVkcmF3UHJvamVjdChwcm9MaXN0KXtcbiAgICBwcm9qZWN0U2hvdy5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvcihsZXQgaT0wO2k8cHJvTGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgcHJvamVjdFNob3cuYXBwZW5kKHByb2plY3REaXYocHJvTGlzdFtpXSkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChvYmpOYW1lLHByb0xpc3QscHJvU2V0KXtcbiAgICBmb3IobGV0IGk9MDtpPHByb0xpc3QubGVuZ3RoO2krKyl7XG4gICAgICAgIGlmKG9iak5hbWUgPT0gcHJvTGlzdFtpXSl7XG4gICAgICAgICAgICBwcm9MaXN0LnNwbGljZShpLDEpO1xuICAgICAgICAgICAgaWYocHJvU2V0LmhhcyhvYmpOYW1lKSl7XG4gICAgICAgICAgICAgICAgcHJvU2V0LmRlbGV0ZShvYmpOYW1lKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9MaXN0LHByb1NldDtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVG9kbyhpdGVtLHRvZG9MaXN0KXtcbiAgICBmb3IobGV0IGk9MDtpPHRvZG9MaXN0Lmxlbmd0aDtpKyspe1xuICAgICAgICBpZihpdGVtLmlkZW50aWZpZXIgPT0gdG9kb0xpc3RbaV0uaWRlbnRpZmllcil7XG4gICAgICAgICAgICB0b2RvTGlzdC5zcGxpY2UoaSwxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG9kb0xpc3Q7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVdob2xlUHJvamVjdChvYmpOYW1lLHRvZG9MaXN0LHByb0xpc3QscHJvU2V0KXtcbiAgICBmb3IobGV0IGk9MDtpPHRvZG9MaXN0Lmxlbmd0aDtpKyspe1xuICAgICAgICBpZih0b2RvTGlzdFtpXS5uYW1lID09IG9iak5hbWUpe1xuICAgICAgICAgICAgZGVsZXRlVG9kbyh0b2RvTGlzdFtpXSx0b2RvTGlzdCxwcm9TZXQpO1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb0xpc3QgPSBkZWxldGVQcm9qZWN0KG9iak5hbWUscHJvTGlzdCxwcm9TZXQpO1xuICAgIHJldHVybiB0b2RvTGlzdCxwcm9MaXN0LHByb1NldDtcbn1cblxuXG5mdW5jdGlvbiBzZXRMaXN0KGxpc3QpeyBcbiAgICBsZXQgc2V0ID0gbmV3IFNldChsaXN0KTtcbiAgICBsZXQgbmV3QXJyID0gQXJyYXkuZnJvbShzZXQpO1xuICAgIHJldHVybiBuZXdBcnI7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QobmFtZSxwcm9qZWN0TGlzdCxwcm9qZWN0U2V0KXtcbiAgICBpZighbmFtZSA9PSBcIlwiKXtcbiAgICAgICAgaWYocHJvamVjdExpc3QubGVuZ3RoID09IDApe1xuICAgICAgICAgICAgcHJvamVjdExpc3QucHVzaChuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcHJvamVjdExpc3QudW5zaGlmdChuYW1lKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0ID0gc2V0TGlzdChwcm9qZWN0TGlzdCk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdFNldC5hZGQobmFtZSk7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIHRvZG9EaXYob2JqKXtcblxuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0b2RvTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvZG9EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9kb0lkZW50aWZ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9kb0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBySWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IGVJY29uID0gbmV3IEltYWdlKCk7XG4gICAgckljb24uc3JjID0gcmVtb3ZlSWNvbjtcbiAgICBlSWNvbi5zcmMgPSBlZGl0SWNvbjtcbiAgICBySWNvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVJY29uJyk7XG4gICAgZUljb24uY2xhc3NMaXN0LmFkZCgnZWRpdEljb24nKTtcblxuICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kb0NvbnRhaW5lcicpO1xuICAgIHRvZG9NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ3RvZG9NZXNzYWdlJyk7XG4gICAgdG9kb0RlbGV0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvRGVsZXRlJyk7XG4gICAgdG9kb0RlbGV0ZS5hcHBlbmRDaGlsZChySWNvbik7XG4gICAgdG9kb0RhdGUuY2xhc3NMaXN0LmFkZCgndG9kb0RhdGUnKTtcbiAgICB0b2RvTmFtZS5jbGFzc0xpc3QuYWRkKFwidG9kb05hbWVcIik7XG4gICAgdG9kb0lkZW50aWZ5LmNsYXNzTGlzdC5hZGQoJ3RvZG9JZGVudGlmeScpO1xuICAgIHRvZG9FZGl0LmNsYXNzTGlzdC5hZGQoJ3RvZG9FZGl0Jyk7XG4gICAgdG9kb0VkaXQuYXBwZW5kQ2hpbGQoZUljb24pO1xuICAgIHRvZG9OYW1lLnRleHRDb250ZW50ID0gb2JqLm5hbWU7XG4gICAgdG9kb0lkZW50aWZ5LnRleHRDb250ZW50ID0gb2JqLmlkZW50aWZpZXI7XG4gICAgdG9kb01lc3NhZ2UudGV4dENvbnRlbnQgPSBvYmoubWVzc2FnZTtcbiAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IG9iai5kYXRlO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9OYW1lLHRvZG9NZXNzYWdlLHRvZG9EYXRlLHRvZG9EZWxldGUsdG9kb0VkaXQpO1xuICAgIHRvZG9EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIHRvZG9MaXN0ID0gZGVsZXRlVG9kbyhvYmosdG9kb0xpc3QpO1xuICAgICAgICByZWRyYXdUb2RvKHRvZG9MaXN0KTtcbiAgICB9KVxuICAgIHRvZG9FZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuXG4gICAgICAgIG9ialJlZnJlc2gubmFtZSA9IG9iai5uYW1lO1xuICAgICAgICBvYmpSZWZyZXNoLmRhdGUgPSBvYmouZGF0ZTtcbiAgICAgICAgb2JqUmVmcmVzaC5tZXNzYWdlID0gb2JqLm1lc3NhZ2U7XG4gICAgICAgIG9ialJlZnJlc2guaWRlbnRpZmllciA9IG9iai5pZGVudGlmaWVyO1xuXG4gICAgICAgIHRvZG9DaGFuZ2VOYW1lLnZhbHVlID0gb2JqLm5hbWU7XG4gICAgICAgIHRvZG9DaGFuZ2VUZXh0LnZhbHVlID0gb2JqLm1lc3NhZ2U7XG4gICAgICAgIHRvZG9DaGFuZ2VEYXRlLnZhbHVlID0gb2JqLmRhdGU7XG5cbiAgICAgICAgdG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICB9KTtcbiAgICB0b2RvRm9ybS5vbnN1Ym1pdCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIG9ialJlZnJlc2gubWVzc2FnZSA9IHRvZG9DaGFuZ2VUZXh0LnZhbHVlO1xuICAgICAgICBvYmpSZWZyZXNoLmRhdGUgPSB0b2RvQ2hhbmdlRGF0ZS52YWx1ZTtcbiAgICAgICAgb2JqUmVmcmVzaC5uYW1lID0gdG9kb0NoYW5nZU5hbWUudmFsdWU7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8dG9kb0xpc3QubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBpZih0b2RvTGlzdFtpXS5pZGVudGlmaWVyID09IG9ialJlZnJlc2guaWRlbnRpZmllcil7XG4gICAgICAgICAgICAgICAgdG9kb0xpc3RbaV0ubmFtZSA9IG9ialJlZnJlc2gubmFtZTtcbiAgICAgICAgICAgICAgICB0b2RvTGlzdFtpXS5tZXNzYWdlID0gb2JqUmVmcmVzaC5tZXNzYWdlO1xuICAgICAgICAgICAgICAgIHRvZG9MaXN0W2ldLmRhdGUgPSBvYmpSZWZyZXNoLmRhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoIXByb2plY3RTZXQuaGFzKG9ialJlZnJlc2gubmFtZSkpe1xuICAgICAgICAgICAgaWYob2JqUmVmcmVzaC5uYW1lICE9IFwiXCIpe1xuICAgICAgICAgICAgICAgIHByb2plY3RTZXQuYWRkKG9ialJlZnJlc2gubmFtZSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdExpc3QudW5zaGlmdChvYmpSZWZyZXNoLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlZHJhd1Byb2plY3QocHJvamVjdExpc3QpO1xuICAgICAgICByZWRyYXdUb2RvKHRvZG9MaXN0KTtcbiAgICAgICAgdG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0b2RvU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICB0b2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgdG9kb0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgdG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcbiAgICByZXR1cm4gdG9kb0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gcHJvamVjdE5hbWVFZGl0KHByb2plY3RMaXN0LHByb2plY3RTZXQsdG9kb0xpc3QsbmV3TmFtZSxvbGROYW1lKXtcbiAgICBpZihuZXdOYW1lID09IG9sZE5hbWUpe1xuICAgICAgICByZXR1cm4gcHJvamVjdExpc3QscHJvamVjdFNldCx0b2RvTGlzdCxuZXdOYW1lO1xuICAgIH1cbiAgICBlbHNlIGlmKHByb2plY3RTZXQuaGFzKG5ld05hbWUpKXtcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0b2RvTGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGlmKHRvZG9MaXN0W2ldLm5hbWUgPT0gb2xkTmFtZSl7XG4gICAgICAgICAgICAgICAgdG9kb0xpc3RbaV0ubmFtZSA9IG5ld05hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlUHJvamVjdChvbGROYW1lLHByb2plY3RMaXN0LHByb2plY3RTZXQpO1xuICAgICAgICByZXR1cm4gcHJvamVjdExpc3QscHJvamVjdFNldCx0b2RvTGlzdCxuZXdOYW1lO1xuICAgIH1cbiAgICBlbHNlIGlmKHByb2plY3RTZXQuaGFzKG5ld05hbWUpID09IGZhbHNlKXtcbiAgICAgICAgaWYobmV3TmFtZSAhPSBcIlwiKXtcbiAgICAgICAgICAgIGFkZFByb2plY3QobmV3TmFtZSxwcm9qZWN0TGlzdCxwcm9qZWN0U2V0KVxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTx0b2RvTGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICBpZih0b2RvTGlzdFtpXS5uYW1lID09IG9sZE5hbWUpe1xuICAgICAgICAgICAgICAgICAgICB0b2RvTGlzdFtpXS5uYW1lID0gbmV3TmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlUHJvamVjdChvbGROYW1lLHByb2plY3RMaXN0LHByb2plY3RTZXQpO1xuICAgICAgICByZXR1cm4gcHJvamVjdExpc3QscHJvamVjdFNldCx0b2RvTGlzdCxuZXdOYW1lO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICByZXR1cm4gcHJvamVjdExpc3QscHJvamVjdFNldCx0b2RvTGlzdCxuZXdOYW1lO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcHJvamVjdERpdihuYW1lKXsgLy9zaG91bGQgcHJvYmFibHkgYWRkIGxpc3QgYW5kIHNldCBhcyBwYXJhbWV0ZXJzIGZvciByZXVzYWJpbGl0eVxuICAgIGNvbnN0IHJJY29uID0gbmV3IEltYWdlKCk7XG4gICAgY29uc3QgZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBySWNvbi5zcmMgPSByZW1vdmVJY29uO1xuICAgIGVJY29uLnNyYyA9IGVkaXRJY29uO1xuICAgIHJJY29uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZUljb24nKTtcbiAgICBlSWNvbi5jbGFzc0xpc3QuYWRkKCdlZGl0SWNvbicpO1xuXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgcHJvamVjdERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByb2plY3RFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Q29udGFpbmVyJyk7XG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RUaXRsZScpO1xuICAgIHByb2plY3REZWxldGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdERlbGV0ZScpO1xuICAgIHByb2plY3REZWxldGUuYXBwZW5kKHJJY29uKTtcbiAgICBwcm9qZWN0RWRpdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0RWRpdCcpO1xuICAgIHByb2plY3RFZGl0LmFwcGVuZENoaWxkKGVJY29uKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3RUaXRsZSxwcm9qZWN0RGVsZXRlLHByb2plY3RFZGl0KTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICByZWRyYXdUb2RvKHRvZG9MaXN0KTtcbiAgICB9KTtcbiAgICBwcm9qZWN0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICB0b2RvTGlzdCxwcm9qZWN0TGlzdCxwcm9qZWN0U2V0ID0gZGVsZXRlV2hvbGVQcm9qZWN0KG5hbWUsdG9kb0xpc3QscHJvamVjdExpc3QscHJvamVjdFNldCk7XG4gICAgICAgIHJlZHJhd1RvZG8odG9kb0xpc3QpO1xuICAgICAgICByZWRyYXdQcm9qZWN0KHByb2plY3RMaXN0KTtcbiAgICB9KTtcbiAgICBwcm9qZWN0RWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHByb0NoYW5nZU5hbWUudmFsdWUgPSBuYW1lO1xuICAgICAgICBuYW1lMiA9IG5hbWU7XG4gICAgfSk7XG4gICAgcHJvamVjdEZvcm0ub25zdWJtaXQgPSBmdW5jdGlvbigpe1xuICAgICAgICBpZihuYW1lMiAhPSBwcm9DaGFuZ2VOYW1lLnZhbHVlKXtcbiAgICAgICAgICAgIGlmKHByb2plY3RTZXQuaGFzKHByb0NoYW5nZU5hbWUudmFsdWUpKXtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDtpPHRvZG9MaXN0Lmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZih0b2RvTGlzdFtpXS5uYW1lID09IG5hbWUyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9MaXN0W2ldLm5hbWUgPSBwcm9DaGFuZ2VOYW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb2plY3RMaXN0LHByb2plY3RTZXQgPSBkZWxldGVQcm9qZWN0KG5hbWUyLHByb2plY3RMaXN0LHByb2plY3RTZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdC51bnNoaWZ0KHByb0NoYW5nZU5hbWUudmFsdWUpO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8dG9kb0xpc3QubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRvZG9MaXN0W2ldLm5hbWUgPT0gbmFtZTIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0xpc3RbaV0ubmFtZSA9IHByb0NoYW5nZU5hbWUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvamVjdExpc3QscHJvamVjdFNldCA9IGRlbGV0ZVByb2plY3QobmFtZTIscHJvamVjdExpc3QscHJvamVjdFNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVkcmF3UHJvamVjdChwcm9qZWN0TGlzdCk7XG4gICAgICAgIHJlZHJhd1RvZG8odG9kb0xpc3QpO1xuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHByb1N1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIHByb2plY3RDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2plY3RDb250YWluZXI7XG59XG5cbmZvcm0ub25zdWJtaXQgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IG9iamVjdCA9IHRvZG8ocHJvamVjdE5hbWUudmFsdWUsIHByb2plY3RNZXNzYWdlLnZhbHVlLCBwcm9qZWN0RGF0ZS52YWx1ZSk7XG4gICAgdG9kb0xpc3QudW5zaGlmdChvYmplY3QpO1xuICAgIGlmKCFvYmplY3QubmFtZSA9PSBcIlwiKXtcbiAgICAgICAgaWYocHJvamVjdExpc3QubGVuZ3RoID09IDApe1xuICAgICAgICAgICAgcHJvamVjdExpc3QucHVzaChvYmplY3QubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LnVuc2hpZnQob2JqZWN0Lm5hbWUpO1xuICAgICAgICAgICAgcHJvamVjdExpc3QgPSBzZXRMaXN0KHByb2plY3RMaXN0KTtcbiAgICAgICAgfVxuICAgICAgICBpZihwcm9qZWN0U2V0LmhhcyhvYmplY3QubmFtZSkgPT0gZmFsc2Upe1xuICAgICAgICAgICAgaWYocHJvamVjdFNob3cuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICAgICAgcHJvamVjdFNob3cuaW5zZXJ0QmVmb3JlKHByb2plY3REaXYob2JqZWN0Lm5hbWUpLHByb2plY3RTaG93LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBwcm9qZWN0U2hvdy5hcHBlbmQocHJvamVjdERpdihvYmplY3QubmFtZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHByb2plY3RTZXQuYWRkKG9iamVjdC5uYW1lKTtcbiAgICB9XG5cbiAgICBpZihzaG93LmZpcnN0Q2hpbGQpe1xuICAgICAgICBzaG93Lmluc2VydEJlZm9yZSh0b2RvRGl2KG9iamVjdCksc2hvdy5maXJzdENoaWxkKVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBzaG93LmFwcGVuZCh0b2RvRGl2KG9iamVjdCkpO1xuICAgIH1cbiAgICBoaWRlRm9ybSgpO1xuICAgIHJldHVybiBmYWxzZTtcbn1cblxuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIHJldHVybiBmYWxzZTtcbn0pO1xuXG5pbmJveEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgcmVkcmF3VG9kbyh0b2RvTGlzdCk7XG59KTtcblxudG9kYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIHNob3cuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmb3IobGV0IGk9MDtpPHRvZG9MaXN0Lmxlbmd0aDtpKyspe1xuICAgICAgICBpZih0b2RvTGlzdFtpXS5kYXRlID09IHRvZGF5KXtcbiAgICAgICAgICAgIHNob3cuYXBwZW5kKHRvZG9EaXYodG9kb0xpc3RbaV0pKTtcbiAgICAgICAgfVxuICAgIH0gXG59KTtcblxuYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIHNob3dGb3JtKCk7XG59KTtcblxuZnJvbUNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICBoaWRlRm9ybSgpO1xufSk7XG5cbmJsYWNrb3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGhpZGVGb3JtKCk7XG59KTtcblxucHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgc2hvdy5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvcihsZXQgaT0wO2k8cHJvamVjdExpc3QubGVuZ3RoO2krKyl7XG4gICAgICAgIHNob3cuYXBwZW5kKHByb2plY3REaXYocHJvamVjdExpc3RbaV0pKTtcbiAgICB9XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==