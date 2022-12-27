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
___CSS_LOADER_EXPORT___.push([module.id, "body,html{\n  padding: 0;\n  margin: 0;\n  height: 100vh;\n  width: 100vw;\n}\n.control{\n  width: 100px;\n  height: 25px;\n}\n#contentTitle{\n  height: 50px;\n  width: 400px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 20px;\n  font-size: 40px;\n}\n.projectShow{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 520px;\n  background-color: rgb(230, 182, 124);\n}\n.todoContainer{\n  display: flex;\n  width: 90%;\n  border: 1px solid rgb(240, 213, 179);\n  background-color: antiquewhite;\n  color: black;\n  margin: 5px;\n  justify-content: center;\n  align-items: center;\n  overflow: scroll;\n  border-radius: 5px;\n}\n.todoContainer:hover{\n  background-color: rgb(240, 213, 179);\n}\n.projectContainer{\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  overflow: scroll;\n  margin: 5px;\n  padding: 5px;\n  width: 90%;\n  font-size:8px;\n  background-color: antiquewhite;\n  border: 1px solid rgb(240, 213, 179);\n  border-radius: 5px;\n  color: black;\n}\n.projectContainer:hover{\n  background-color: lightblue;\n}\n.todoName,.todoMessage,.todoDate,.todoDelete,.todoIdentify,.todoEdit,.projectDelete,.projectEdit{\n  margin: 4px;\n}\n.todoDelete,.projectDelete{\n  background-color: transparent;\n  border-radius: 100%;\n  height: 30px;\n  width: 30px;\n  margin-left: auto;\n}\n.todoEdit,.projectEdit{\n  background-color: transparent;\n  border-radius: 100%;\n  height: 29px;\n  width: 29px;\n}\n#projectForm,#todoForm,#form,#blackout{\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n  z-index: 9;\n}\n#form{\nflex-direction: column;\njustify-content: center;\nalign-items: flex-start;\nborder-radius: 5px;\n}\n.buttons{\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n  align-items: center;\n}\n.formFormat{\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.formContainer{\n  max-width: 300px;\n  padding: 10px;\n  background-color: white;\n  border-radius: 5px;\n}\n#container{\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\nheader{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 0.5;\n  min-height: 100px;\n  background-color: rgb(240, 213, 179);\n}\n#main{\nflex: 6;\ndisplay: flex;\n}\n#sideBar{\nwidth: 0px;\nz-index: 1;\noverflow-x: hidden;\ntransition: 0.5s;\nmin-width:250px;\nflex: 1 1 0%;\nbackground-color: rgb(230, 182, 124);\nborder-radius: 5px;\n}\n.content{\n  flex: 6; \n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  overflow: scroll;\n  background-color: antiquewhite;\n}\n.add{\n  height: 50px;\n  width: 500px;\n  background-color: antiquewhite;\n  border:1px solid rgb(240, 213, 179);\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.add:hover{\n  background-color: rgb(240, 213, 179);\n  transform: scale(1.1);\n}\n.add:active{\n  transform: scale(0.9);\n}\n.show{\n  min-height: 600px;\n  margin-top: 20px;\n  height: 85%;\n  width: 700px;\n  background-color: transparent;\n  display: flex;\n  flex-direction: column;\n  border-radius: 5px;\n  display: flex;\n  justify-content:flex-start;\n  align-items:center;\n}\nfooter{\nflex: 0.5;\n}\n#blackout{\n  height: 100%;\n  width: 100%;\n  position: absoulte;\n  display: none;\n  background-color: black;\n  opacity: 0.5;\n}\n#titleNoteBook{\n  height: 50px;\n  width: 50px;\n}\n#mainTitle{\n  display: flex;\n  transition: 0.5s;\n  margin-left: 250px;\n}\n#menuButtonIcon{\n  height: 50px;\n  width: 50px;\n  border-radius: 30%;\n  cursor: pointer;\n  background-color: lightblue;\n}\n#menuButtonIcon:hover{\n  transform: scale(1.1);\n}\n#menuButtonIcon:active{\n  transform: scale(0.99);\n}\n#menuButton{\n  position: absolute;\n  top: 10px;\n  left: 110px;\n}\n.sideBarItems{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 80px;\n  cursor: pointer;\n}\n.sideBarItems:active{\n  transform:scale(0.99);\n}\n#projectIcon,#todayIcon,#inboxIcon{\n  height: 30px;\n  width: 30px;\n}\n.deleteIcon,.editIcon{\n  background-color: transparent;\n  height: 30px;\n  width: 30px;\n}\n.deleteIcon{\n  height: 27px;\n  width: 27px;\n}\n.formatItems{\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 90%;\n  height: 55%;\n}\n.sideBarIcon{\n  margin-left: 4px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,aAAa;EACb,YAAY;AACd;AACA;EACE,YAAY;EACZ,YAAY;AACd;AACA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,2BAA2B;EAC3B,aAAa;EACb,oCAAoC;AACtC;AACA;EACE,aAAa;EACb,UAAU;EACV,oCAAoC;EACpC,8BAA8B;EAC9B,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,oCAAoC;AACtC;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,UAAU;EACV,aAAa;EACb,8BAA8B;EAC9B,oCAAoC;EACpC,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,WAAW;AACb;AACA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,iBAAiB;AACnB;AACA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,YAAY;EACZ,WAAW;AACb;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,+BAA+B;EAC/B,UAAU;AACZ;AACA;AACA,sBAAsB;AACtB,uBAAuB;AACvB,uBAAuB;AACvB,kBAAkB;AAClB;AACA;EACE,aAAa;EACb,WAAW;EACX,6BAA6B;EAC7B,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,iBAAiB;EACjB,oCAAoC;AACtC;AACA;AACA,OAAO;AACP,aAAa;AACb;AACA;AACA,UAAU;AACV,UAAU;AACV,kBAAkB;AAClB,gBAAgB;AAChB,eAAe;AACf,YAAY;AACZ,oCAAoC;AACpC,kBAAkB;AAClB;AACA;EACE,OAAO;EACP,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,gBAAgB;EAChB,8BAA8B;AAChC;AACA;EACE,YAAY;EACZ,YAAY;EACZ,8BAA8B;EAC9B,mCAAmC;EACnC,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,oCAAoC;EACpC,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,6BAA6B;EAC7B,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,0BAA0B;EAC1B,kBAAkB;AACpB;AACA;AACA,SAAS;AACT;AACA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,YAAY;AACd;AACA;EACE,YAAY;EACZ,WAAW;AACb;AACA;EACE,aAAa;EACb,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,2BAA2B;AAC7B;AACA;EACE,qBAAqB;AACvB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,YAAY;EACZ,WAAW;AACb;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,WAAW;AACb;AACA;EACE,YAAY;EACZ,WAAW;AACb;AACA;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,UAAU;EACV,WAAW;AACb;AACA;EACE,gBAAgB;AAClB","sourcesContent":["body,html{\n  padding: 0;\n  margin: 0;\n  height: 100vh;\n  width: 100vw;\n}\n.control{\n  width: 100px;\n  height: 25px;\n}\n#contentTitle{\n  height: 50px;\n  width: 400px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 20px;\n  font-size: 40px;\n}\n.projectShow{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 520px;\n  background-color: rgb(230, 182, 124);\n}\n.todoContainer{\n  display: flex;\n  width: 90%;\n  border: 1px solid rgb(240, 213, 179);\n  background-color: antiquewhite;\n  color: black;\n  margin: 5px;\n  justify-content: center;\n  align-items: center;\n  overflow: scroll;\n  border-radius: 5px;\n}\n.todoContainer:hover{\n  background-color: rgb(240, 213, 179);\n}\n.projectContainer{\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  overflow: scroll;\n  margin: 5px;\n  padding: 5px;\n  width: 90%;\n  font-size:8px;\n  background-color: antiquewhite;\n  border: 1px solid rgb(240, 213, 179);\n  border-radius: 5px;\n  color: black;\n}\n.projectContainer:hover{\n  background-color: lightblue;\n}\n.todoName,.todoMessage,.todoDate,.todoDelete,.todoIdentify,.todoEdit,.projectDelete,.projectEdit{\n  margin: 4px;\n}\n.todoDelete,.projectDelete{\n  background-color: transparent;\n  border-radius: 100%;\n  height: 30px;\n  width: 30px;\n  margin-left: auto;\n}\n.todoEdit,.projectEdit{\n  background-color: transparent;\n  border-radius: 100%;\n  height: 29px;\n  width: 29px;\n}\n#projectForm,#todoForm,#form,#blackout{\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n  z-index: 9;\n}\n#form{\nflex-direction: column;\njustify-content: center;\nalign-items: flex-start;\nborder-radius: 5px;\n}\n.buttons{\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n  align-items: center;\n}\n.formFormat{\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.formContainer{\n  max-width: 300px;\n  padding: 10px;\n  background-color: white;\n  border-radius: 5px;\n}\n#container{\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\nheader{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 0.5;\n  min-height: 100px;\n  background-color: rgb(240, 213, 179);\n}\n#main{\nflex: 6;\ndisplay: flex;\n}\n#sideBar{\nwidth: 0px;\nz-index: 1;\noverflow-x: hidden;\ntransition: 0.5s;\nmin-width:250px;\nflex: 1 1 0%;\nbackground-color: rgb(230, 182, 124);\nborder-radius: 5px;\n}\n.content{\n  flex: 6; \n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  overflow: scroll;\n  background-color: antiquewhite;\n}\n.add{\n  height: 50px;\n  width: 500px;\n  background-color: antiquewhite;\n  border:1px solid rgb(240, 213, 179);\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.add:hover{\n  background-color: rgb(240, 213, 179);\n  transform: scale(1.1);\n}\n.add:active{\n  transform: scale(0.9);\n}\n.show{\n  min-height: 600px;\n  margin-top: 20px;\n  height: 85%;\n  width: 700px;\n  background-color: transparent;\n  display: flex;\n  flex-direction: column;\n  border-radius: 5px;\n  display: flex;\n  justify-content:flex-start;\n  align-items:center;\n}\nfooter{\nflex: 0.5;\n}\n#blackout{\n  height: 100%;\n  width: 100%;\n  position: absoulte;\n  display: none;\n  background-color: black;\n  opacity: 0.5;\n}\n#titleNoteBook{\n  height: 50px;\n  width: 50px;\n}\n#mainTitle{\n  display: flex;\n  transition: 0.5s;\n  margin-left: 250px;\n}\n#menuButtonIcon{\n  height: 50px;\n  width: 50px;\n  border-radius: 30%;\n  cursor: pointer;\n  background-color: lightblue;\n}\n#menuButtonIcon:hover{\n  transform: scale(1.1);\n}\n#menuButtonIcon:active{\n  transform: scale(0.99);\n}\n#menuButton{\n  position: absolute;\n  top: 10px;\n  left: 110px;\n}\n.sideBarItems{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 80px;\n  cursor: pointer;\n}\n.sideBarItems:active{\n  transform:scale(0.99);\n}\n#projectIcon,#todayIcon,#inboxIcon{\n  height: 30px;\n  width: 30px;\n}\n.deleteIcon,.editIcon{\n  background-color: transparent;\n  height: 30px;\n  width: 30px;\n}\n.deleteIcon{\n  height: 27px;\n  width: 27px;\n}\n.formatItems{\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 90%;\n  height: 55%;\n}\n.sideBarIcon{\n  margin-left: 4px;\n}\n"],"sourceRoot":""}]);
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
let contentTitle = document.querySelector('#contentTitle');

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
form.style.display = 'flex';
blackout.style.display = 'block';
}

function showTodo(){
    todoForm.style.display = 'block';
    blackout.style.display = 'block';
}
function showProject(){
    projectForm.style.display = 'block';
    blackout.style.display = 'block';
}
function hideProject(){
    projectForm.style.display = 'none';
    blackout.style.display = 'none';

}

function hideTodo(){
    todoForm.style.display = 'none';
    blackout.style.display = 'none';
}
function hideForm(){
    clearForm();
    form.style.display = 'none';
    blackout.style.display = 'none';
    projectForm.style.display = 'none';
    todoForm.style.display = 'none';
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

function redrawTodo(list,currentChoice){
    show.innerHTML = "";
    console.log(currentChoice);
    console.log(list);
    if(currentChoice!=undefined){
        for(let i=0;i<list.length;i++){
            if(list[i].name == currentChoice){
                console.log(list[i].name);
                show.append(todoDiv(list[i])); 
            }
        }  
    }
    else{
        console.log('here');
        for(let i=0;i<list.length;i++){
            show.append(todoDiv(list[i]));
        } 
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

        showTodo();

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
        blackout.style.display = 'none';
        return false;
    });
    todoCancel.addEventListener('click',()=>{
        todoForm.style.display = 'none';
        blackout.style.display = 'none';
    });
    return todoContainer;
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
        currentChoice = name;
        contentTitle.textContent = name;
        redrawTodo(todoList,currentChoice);
    });
    projectDelete.addEventListener('click',()=>{
        todoList,projectList,projectSet = deleteWholeProject(name,todoList,projectList,projectSet);
        redrawTodo(todoList);
        redrawProject(projectList);
    });
    projectEdit.addEventListener('click',()=>{
        projectForm.style.display = 'block';
        blackout.style.display = 'block';
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
        blackout.style.display = 'none';
        return false;
    }
    proSubmit.addEventListener('click',()=>{
        return false;
    });
    projectCancel.addEventListener("click", ()=>{
        projectForm.style.display = 'none';
        blackout.style.display = 'none';
    });
    return projectContainer;
}

form.onsubmit = function(){
    const object = todo(projectName.value, projectMessage.value, projectDate.value);
    todoList.unshift(object);
    if(!object.name == ""){
        projectList.unshift(object.name);
        projectList = setList(projectList);
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
    contentTitle.textContent = 'Inbox';
});

todayButton.addEventListener('click', ()=>{
    show.innerHTML = "";
    contentTitle.textContent = 'Today';
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
    currentChoice = 'project';
    contentTitle.textContent = 'Project';
    show.innerHTML = "";
    for(let i=0;i<projectList.length;i++){
        show.append(projectDiv(projectList[i]));
    }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0s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QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0JBQWtCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0JBQWtCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxQkFBcUI7QUFDckM7QUFDQTtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHksaHRtbHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG4uY29udHJvbHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMjVweDtcXG59XFxuI2NvbnRlbnRUaXRsZXtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDIwcHg7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcbi5wcm9qZWN0U2hvd3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGhlaWdodDogNTIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAxODIsIDEyNCk7XFxufVxcbi50b2RvQ29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA5MCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjQwLCAyMTMsIDE3OSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBtYXJnaW46IDVweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi50b2RvQ29udGFpbmVyOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjEzLCAxNzkpO1xcbn1cXG4ucHJvamVjdENvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGZvbnQtc2l6ZTo4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjQwLCAyMTMsIDE3OSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5wcm9qZWN0Q29udGFpbmVyOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbn1cXG4udG9kb05hbWUsLnRvZG9NZXNzYWdlLC50b2RvRGF0ZSwudG9kb0RlbGV0ZSwudG9kb0lkZW50aWZ5LC50b2RvRWRpdCwucHJvamVjdERlbGV0ZSwucHJvamVjdEVkaXR7XFxuICBtYXJnaW46IDRweDtcXG59XFxuLnRvZG9EZWxldGUsLnByb2plY3REZWxldGV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4udG9kb0VkaXQsLnByb2plY3RFZGl0e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgaGVpZ2h0OiAyOXB4O1xcbiAgd2lkdGg6IDI5cHg7XFxufVxcbiNwcm9qZWN0Rm9ybSwjdG9kb0Zvcm0sI2Zvcm0sI2JsYWNrb3V0e1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG4gIHotaW5kZXg6IDk7XFxufVxcbiNmb3Jte1xcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uYnV0dG9uc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZvcm1Gb3JtYXR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uZm9ybUNvbnRhaW5lcntcXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbiNjb250YWluZXJ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5oZWFkZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleDogMC41O1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMTMsIDE3OSk7XFxufVxcbiNtYWlue1xcbmZsZXg6IDY7XFxuZGlzcGxheTogZmxleDtcXG59XFxuI3NpZGVCYXJ7XFxud2lkdGg6IDBweDtcXG56LWluZGV4OiAxO1xcbm92ZXJmbG93LXg6IGhpZGRlbjtcXG50cmFuc2l0aW9uOiAwLjVzO1xcbm1pbi13aWR0aDoyNTBweDtcXG5mbGV4OiAxIDEgMCU7XFxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMTgyLCAxMjQpO1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLmNvbnRlbnR7XFxuICBmbGV4OiA2OyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG59XFxuLmFkZHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gIGJvcmRlcjoxcHggc29saWQgcmdiKDI0MCwgMjEzLCAxNzkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmFkZDpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIxMywgMTc5KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLmFkZDphY3RpdmV7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxufVxcbi5zaG93e1xcbiAgbWluLWhlaWdodDogNjAwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgaGVpZ2h0OiA4NSU7XFxuICB3aWR0aDogNzAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbn1cXG5mb290ZXJ7XFxuZmxleDogMC41O1xcbn1cXG4jYmxhY2tvdXR7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvdWx0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuI3RpdGxlTm90ZUJvb2t7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG59XFxuI21haW5UaXRsZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xcbn1cXG4jbWVudUJ1dHRvbkljb257XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuI21lbnVCdXR0b25JY29uOmhvdmVye1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4jbWVudUJ1dHRvbkljb246YWN0aXZle1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk5KTtcXG59XFxuI21lbnVCdXR0b257XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwcHg7XFxuICBsZWZ0OiAxMTBweDtcXG59XFxuLnNpZGVCYXJJdGVtc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogODBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNpZGVCYXJJdGVtczphY3RpdmV7XFxuICB0cmFuc2Zvcm06c2NhbGUoMC45OSk7XFxufVxcbiNwcm9qZWN0SWNvbiwjdG9kYXlJY29uLCNpbmJveEljb257XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG59XFxuLmRlbGV0ZUljb24sLmVkaXRJY29ue1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG59XFxuLmRlbGV0ZUljb257XFxuICBoZWlnaHQ6IDI3cHg7XFxuICB3aWR0aDogMjdweDtcXG59XFxuLmZvcm1hdEl0ZW1ze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA1NSU7XFxufVxcbi5zaWRlQmFySWNvbntcXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7QUFD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QkFBc0I7QUFDeEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5LGh0bWx7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuLmNvbnRyb2x7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxufVxcbiNjb250ZW50VGl0bGV7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG4ucHJvamVjdFNob3d7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBoZWlnaHQ6IDUyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMTgyLCAxMjQpO1xcbn1cXG4udG9kb0NvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogOTAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0MCwgMjEzLCAxNzkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4udG9kb0NvbnRhaW5lcjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIxMywgMTc5KTtcXG59XFxuLnByb2plY3RDb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBtYXJnaW46IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiA5MCU7XFxuICBmb250LXNpemU6OHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0MCwgMjEzLCAxNzkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4ucHJvamVjdENvbnRhaW5lcjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuLnRvZG9OYW1lLC50b2RvTWVzc2FnZSwudG9kb0RhdGUsLnRvZG9EZWxldGUsLnRvZG9JZGVudGlmeSwudG9kb0VkaXQsLnByb2plY3REZWxldGUsLnByb2plY3RFZGl0e1xcbiAgbWFyZ2luOiA0cHg7XFxufVxcbi50b2RvRGVsZXRlLC5wcm9qZWN0RGVsZXRle1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLnRvZG9FZGl0LC5wcm9qZWN0RWRpdHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGhlaWdodDogMjlweDtcXG4gIHdpZHRoOiAyOXB4O1xcbn1cXG4jcHJvamVjdEZvcm0sI3RvZG9Gb3JtLCNmb3JtLCNibGFja291dHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxuICB6LWluZGV4OiA5O1xcbn1cXG4jZm9ybXtcXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xcbmFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLmJ1dHRvbnN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mb3JtRm9ybWF0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmZvcm1Db250YWluZXJ7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4jY29udGFpbmVye1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuaGVhZGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXg6IDAuNTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjEzLCAxNzkpO1xcbn1cXG4jbWFpbntcXG5mbGV4OiA2O1xcbmRpc3BsYXk6IGZsZXg7XFxufVxcbiNzaWRlQmFye1xcbndpZHRoOiAwcHg7XFxuei1pbmRleDogMTtcXG5vdmVyZmxvdy14OiBoaWRkZW47XFxudHJhbnNpdGlvbjogMC41cztcXG5taW4td2lkdGg6MjUwcHg7XFxuZmxleDogMSAxIDAlO1xcbmJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDE4MiwgMTI0KTtcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5jb250ZW50e1xcbiAgZmxleDogNjsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxufVxcbi5hZGR7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICBib3JkZXI6MXB4IHNvbGlkIHJnYigyNDAsIDIxMywgMTc5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5hZGQ6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMTMsIDE3OSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi5hZGQ6YWN0aXZle1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbn1cXG4uc2hvd3tcXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGhlaWdodDogODUlO1xcbiAgd2lkdGg6IDcwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG59XFxuZm9vdGVye1xcbmZsZXg6IDAuNTtcXG59XFxuI2JsYWNrb3V0e1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb3VsdGU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcbiN0aXRsZU5vdGVCb29re1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcbiNtYWluVGl0bGV7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIG1hcmdpbi1sZWZ0OiAyNTBweDtcXG59XFxuI21lbnVCdXR0b25JY29ue1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzMCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxufVxcbiNtZW51QnV0dG9uSWNvbjpob3ZlcntcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuI21lbnVCdXR0b25JY29uOmFjdGl2ZXtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45OSk7XFxufVxcbiNtZW51QnV0dG9ue1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMHB4O1xcbiAgbGVmdDogMTEwcHg7XFxufVxcbi5zaWRlQmFySXRlbXN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zaWRlQmFySXRlbXM6YWN0aXZle1xcbiAgdHJhbnNmb3JtOnNjYWxlKDAuOTkpO1xcbn1cXG4jcHJvamVjdEljb24sI3RvZGF5SWNvbiwjaW5ib3hJY29ue1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcbi5kZWxldGVJY29uLC5lZGl0SWNvbntcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcbi5kZWxldGVJY29ue1xcbiAgaGVpZ2h0OiAyN3B4O1xcbiAgd2lkdGg6IDI3cHg7XFxufVxcbi5mb3JtYXRJdGVtc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogNTUlO1xcbn1cXG4uc2lkZUJhckljb257XFxuICBtYXJnaW4tbGVmdDogNHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHJlbW92ZUljb24gZnJvbSAnLi9yZW1vdmUucG5nJztcbmltcG9ydCBlZGl0SWNvbiBmcm9tICcuL2VkaXQucG5nJzsgXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuXG5cbmxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG5sZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCcwJyk7XG5sZXQgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSsxKS5wYWRTdGFydCgyLFwiMFwiKTtcbmxldCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbnRvZGF5ID0geXl5eSsgJy0nICsgbW0gKyAnLScgKyBkZDtcbmxldCBpZGVudGlmaWVyID0gMDtcbmNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lJyk7XG5jb25zdCBwcm9qZWN0TWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdE1lc3NhZ2VcIik7XG5jb25zdCBwcm9qZWN0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0RGF0ZScpO1xuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRcIik7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0nKTtcbmNvbnN0IHNob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvdycpO1xubGV0IHRvZG9MaXN0ID0gW107XG5sZXQgcHJvamVjdFNldCA9IG5ldyBTZXQoKTtcbmxldCBwcm9qZWN0TGlzdCA9IFtdO1xuY29uc3QgdG9kYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXknKTtcbmNvbnN0IGluYm94QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luYm94Jyk7XG5jb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKTtcbmNvbnN0IHByb2plY3RTaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0U2hvd1wiKTtcbmNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9Gb3JtJyk7XG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Rm9ybScpO1xuY29uc3QgcHJvQ2hhbmdlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Q2hhbmdlTmFtZScpO1xuY29uc3QgcHJvU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RTdWJtaXQnKTtcbmNvbnN0IHByb2plY3RDYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdENhbmNlbCcpO1xuY29uc3QgdG9kb1N1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvU3VibWl0Jyk7XG5jb25zdCB0b2RvQ2FuY2VsID1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0NhbmNlbCcpO1xuY29uc3QgdG9kb0NoYW5nZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9DaGFuZ2VOYW1lXCIpO1xuY29uc3QgdG9kb0NoYW5nZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0NoYW5nZVRleHQnKTtcbmNvbnN0IHRvZG9DaGFuZ2VEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvQ2hhbmdlRGF0ZVwiKTtcbmxldCBvYmpSZWZyZXNoID0ge25hbWU6XCJcIixtZXNzYWdlOlwiXCIsZGF0ZTpcIlwiLGlkZW50aWZpZXI6XCJcIn07XG5sZXQgbmFtZTI7XG5sZXQgc3d0Y2gxPTA7XG5sZXQgc3d0Y2gyPTA7XG5jb25zdCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkJyk7XG5jb25zdCBibGFja291dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGFja291dCcpO1xuY29uc3QgZnJvbUNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtQ2FuY2VsJyk7XG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnVCdXR0b24nKTtcbmNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZUJhcicpO1xuY29uc3QgbWFpblRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW5UaXRsZScpO1xuY29uc3QgbWVudUJ1dHRvbkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudUJ1dHRvbkljb24nKTtcbmxldCBjdXJyZW50Q2hvaWNlID0gJyc7IC8vdGhpcyB3aWxsIGJlIHVzZWQgdG8gZGVmYXVsdCB0aGF0IHRvZG8gcHJvamVjdCBuYW1lIG9yIGRhdGUsIGRlcGVuZGluZyBvbiB0YWIgY2xpY2tlZFxuY29uc3Qgc2lkZUJhckljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGVCYXJJY29uJyk7XG5jb25zdCBzaWRlQmFySXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZUJhckl0ZW1zJyk7XG5sZXQgY29udGVudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnRUaXRsZScpO1xuXG5zaWRlQmFySXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsKGV2ZW50KT0+e1xuICAgICAgICBlbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXS5zdHlsZS5iYWNrZ3JvdW5kID0gJ2xpZ2h0Ymx1ZSc7XG4gICAgICAgIGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdLnN0eWxlLmJvcmRlclJhZGl1cyA9ICcyMCUnO1xuICAgICAgICBlbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdkaXYnKVswXS5zdHlsZS5iYWNrZ3JvdW5kID0gJ2FudGlxdWV3aGl0ZSc7XG4gICAgICAgIGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2RpdicpWzBdLnN0eWxlLmJvcmRlclJhZGl1cyA9ICcxNXB4JztcbiAgICB9KVxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCgpPT57XG4gICAgICAgIGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdLnN0eWxlLmJhY2tncm91bmQgPSAncmdiKDIzMCwgMTgyLCAxMjQpJztcbiAgICAgICAgZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0uc3R5bGUuYm9yZGVyUmFkaXVzID0gJzAlJztcbiAgICAgICAgZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZGl2JylbMF0uc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2IoMjMwLCAxODIsIDEyNCknO1xuICAgIH0pXG59KTtcblxuXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGNvbnNvbGUubG9nKHNpZGVCYXIuc3R5bGUuZmxleCk7XG4gICAgaWYoc2lkZUJhci5zdHlsZS5mbGV4ID09ICcxIDEgMCUnIHx8IHNpZGVCYXIuc3R5bGUuZmxleCA9PSBcIlwiKXtcbiAgICAgICAgc2lkZUJhci5zdHlsZS5mbGV4ID0gJzAgMSAwJSc7XG4gICAgICAgIHNpZGVCYXIuc3R5bGUubWluV2lkdGggPSAnMHB4JztcbiAgICAgICAgbWFpblRpdGxlLnN0eWxlLm1hcmdpbkxlZnQgPSAnMHB4JztcbiAgICAgICAgbWVudUJ1dHRvbkljb24uc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2IoMjQxLCAyMjQsIDIwMiknO1xuICAgICAgICBjb25zb2xlLmxvZyhzaWRlQmFyLnN0eWxlLmZsZXgpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBzaWRlQmFyLnN0eWxlLm1pbldpZHRoID0gJzI1MHB4JztcbiAgICAgICAgc2lkZUJhci5zdHlsZS5mbGV4ID0gJzEgMSAwJSc7XG4gICAgICAgIG1haW5UaXRsZS5zdHlsZS5tYXJnaW5MZWZ0ID0gJzI1MHB4JztcbiAgICAgICAgbWVudUJ1dHRvbkljb24uc3R5bGUuYmFja2dyb3VuZCA9ICdsaWdodGJsdWUnO1xuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIHNob3dGb3JtKCl7XG5mb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5ibGFja291dC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gc2hvd1RvZG8oKXtcbiAgICB0b2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBibGFja291dC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cbmZ1bmN0aW9uIHNob3dQcm9qZWN0KCl7XG4gICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgYmxhY2tvdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5mdW5jdGlvbiBoaWRlUHJvamVjdCgpe1xuICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgYmxhY2tvdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxufVxuXG5mdW5jdGlvbiBoaWRlVG9kbygpe1xuICAgIHRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgYmxhY2tvdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cbmZ1bmN0aW9uIGhpZGVGb3JtKCl7XG4gICAgY2xlYXJGb3JtKCk7XG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGJsYWNrb3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0b2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBjbGVhckZvcm0oKXtcbiAgICBwcm9qZWN0TmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgcHJvamVjdE1lc3NhZ2UudmFsdWUgPSBcIlwiO1xuICAgIHByb2plY3REYXRlLnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gdG9kbyhuYW1lLG1lc3NhZ2UsZGF0ZSl7XG4gICAgaWYgKG1lc3NhZ2UgPT0gbnVsbCl7XG4gICAgICAgIG1lc3NhZ2UgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAoZGF0ZSA9PSBudWxsIHx8IGRhdGUgPT0gXCJcIil7XG4gICAgICAgIGRhdGUgPSAnbi9hJztcbiAgICB9XG4gICAgaWRlbnRpZmllciA6IGlkZW50aWZpZXI7XG4gICAgaWRlbnRpZmllcisrO1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6bmFtZSxcbiAgICAgICAgbWVzc2FnZTptZXNzYWdlLFxuICAgICAgICBkYXRlOmRhdGUsXG4gICAgICAgIGlkZW50aWZpZXJ9O1xufVxuXG5mdW5jdGlvbiByZWRyYXdUb2RvKGxpc3QsY3VycmVudENob2ljZSl7XG4gICAgc2hvdy5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRDaG9pY2UpO1xuICAgIGNvbnNvbGUubG9nKGxpc3QpO1xuICAgIGlmKGN1cnJlbnRDaG9pY2UhPXVuZGVmaW5lZCl7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8bGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGlmKGxpc3RbaV0ubmFtZSA9PSBjdXJyZW50Q2hvaWNlKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsaXN0W2ldLm5hbWUpO1xuICAgICAgICAgICAgICAgIHNob3cuYXBwZW5kKHRvZG9EaXYobGlzdFtpXSkpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoZXJlJyk7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8bGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIHNob3cuYXBwZW5kKHRvZG9EaXYobGlzdFtpXSkpO1xuICAgICAgICB9IFxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVkcmF3UHJvamVjdChwcm9MaXN0KXtcbiAgICBwcm9qZWN0U2hvdy5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvcihsZXQgaT0wO2k8cHJvTGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgcHJvamVjdFNob3cuYXBwZW5kKHByb2plY3REaXYocHJvTGlzdFtpXSkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChvYmpOYW1lLHByb0xpc3QscHJvU2V0KXtcbiAgICBmb3IobGV0IGk9MDtpPHByb0xpc3QubGVuZ3RoO2krKyl7XG4gICAgICAgIGlmKG9iak5hbWUgPT0gcHJvTGlzdFtpXSl7XG4gICAgICAgICAgICBwcm9MaXN0LnNwbGljZShpLDEpO1xuICAgICAgICAgICAgaWYocHJvU2V0LmhhcyhvYmpOYW1lKSl7XG4gICAgICAgICAgICAgICAgcHJvU2V0LmRlbGV0ZShvYmpOYW1lKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9MaXN0LHByb1NldDtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVG9kbyhpdGVtLHRvZG9MaXN0KXtcbiAgICBmb3IobGV0IGk9MDtpPHRvZG9MaXN0Lmxlbmd0aDtpKyspe1xuICAgICAgICBpZihpdGVtLmlkZW50aWZpZXIgPT0gdG9kb0xpc3RbaV0uaWRlbnRpZmllcil7XG4gICAgICAgICAgICB0b2RvTGlzdC5zcGxpY2UoaSwxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG9kb0xpc3Q7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVdob2xlUHJvamVjdChvYmpOYW1lLHRvZG9MaXN0LHByb0xpc3QscHJvU2V0KXtcbiAgICBmb3IobGV0IGk9MDtpPHRvZG9MaXN0Lmxlbmd0aDtpKyspe1xuICAgICAgICBpZih0b2RvTGlzdFtpXS5uYW1lID09IG9iak5hbWUpe1xuICAgICAgICAgICAgZGVsZXRlVG9kbyh0b2RvTGlzdFtpXSx0b2RvTGlzdCxwcm9TZXQpO1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb0xpc3QgPSBkZWxldGVQcm9qZWN0KG9iak5hbWUscHJvTGlzdCxwcm9TZXQpO1xuICAgIHJldHVybiB0b2RvTGlzdCxwcm9MaXN0LHByb1NldDtcbn1cblxuXG5mdW5jdGlvbiBzZXRMaXN0KGxpc3QpeyBcbiAgICBsZXQgc2V0ID0gbmV3IFNldChsaXN0KTtcbiAgICBsZXQgbmV3QXJyID0gQXJyYXkuZnJvbShzZXQpO1xuICAgIHJldHVybiBuZXdBcnI7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QobmFtZSxwcm9qZWN0TGlzdCxwcm9qZWN0U2V0KXtcbiAgICBpZighbmFtZSA9PSBcIlwiKXtcbiAgICAgICAgaWYocHJvamVjdExpc3QubGVuZ3RoID09IDApe1xuICAgICAgICAgICAgcHJvamVjdExpc3QucHVzaChuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcHJvamVjdExpc3QudW5zaGlmdChuYW1lKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0ID0gc2V0TGlzdChwcm9qZWN0TGlzdCk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdFNldC5hZGQobmFtZSk7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIHRvZG9EaXYob2JqKXtcblxuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0b2RvTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvZG9EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9kb0lkZW50aWZ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9kb0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBySWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IGVJY29uID0gbmV3IEltYWdlKCk7XG4gICAgckljb24uc3JjID0gcmVtb3ZlSWNvbjtcbiAgICBlSWNvbi5zcmMgPSBlZGl0SWNvbjtcbiAgICBySWNvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVJY29uJyk7XG4gICAgZUljb24uY2xhc3NMaXN0LmFkZCgnZWRpdEljb24nKTtcblxuICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kb0NvbnRhaW5lcicpO1xuICAgIHRvZG9NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ3RvZG9NZXNzYWdlJyk7XG4gICAgdG9kb0RlbGV0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvRGVsZXRlJyk7XG4gICAgdG9kb0RlbGV0ZS5hcHBlbmRDaGlsZChySWNvbik7XG4gICAgdG9kb0RhdGUuY2xhc3NMaXN0LmFkZCgndG9kb0RhdGUnKTtcbiAgICB0b2RvTmFtZS5jbGFzc0xpc3QuYWRkKFwidG9kb05hbWVcIik7XG4gICAgdG9kb0lkZW50aWZ5LmNsYXNzTGlzdC5hZGQoJ3RvZG9JZGVudGlmeScpO1xuICAgIHRvZG9FZGl0LmNsYXNzTGlzdC5hZGQoJ3RvZG9FZGl0Jyk7XG4gICAgdG9kb0VkaXQuYXBwZW5kQ2hpbGQoZUljb24pO1xuICAgIHRvZG9OYW1lLnRleHRDb250ZW50ID0gb2JqLm5hbWU7XG4gICAgdG9kb0lkZW50aWZ5LnRleHRDb250ZW50ID0gb2JqLmlkZW50aWZpZXI7XG4gICAgdG9kb01lc3NhZ2UudGV4dENvbnRlbnQgPSBvYmoubWVzc2FnZTtcbiAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IG9iai5kYXRlO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9OYW1lLHRvZG9NZXNzYWdlLHRvZG9EYXRlLHRvZG9EZWxldGUsdG9kb0VkaXQpO1xuICAgIFxuICAgIHRvZG9EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIHRvZG9MaXN0ID0gZGVsZXRlVG9kbyhvYmosdG9kb0xpc3QpO1xuICAgICAgICByZWRyYXdUb2RvKHRvZG9MaXN0KTtcbiAgICB9KVxuICAgIHRvZG9FZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuXG4gICAgICAgIG9ialJlZnJlc2gubmFtZSA9IG9iai5uYW1lO1xuICAgICAgICBvYmpSZWZyZXNoLmRhdGUgPSBvYmouZGF0ZTtcbiAgICAgICAgb2JqUmVmcmVzaC5tZXNzYWdlID0gb2JqLm1lc3NhZ2U7XG4gICAgICAgIG9ialJlZnJlc2guaWRlbnRpZmllciA9IG9iai5pZGVudGlmaWVyO1xuXG4gICAgICAgIHRvZG9DaGFuZ2VOYW1lLnZhbHVlID0gb2JqLm5hbWU7XG4gICAgICAgIHRvZG9DaGFuZ2VUZXh0LnZhbHVlID0gb2JqLm1lc3NhZ2U7XG4gICAgICAgIHRvZG9DaGFuZ2VEYXRlLnZhbHVlID0gb2JqLmRhdGU7XG5cbiAgICAgICAgc2hvd1RvZG8oKTtcblxuICAgIH0pO1xuICAgIHRvZG9Gb3JtLm9uc3VibWl0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgb2JqUmVmcmVzaC5tZXNzYWdlID0gdG9kb0NoYW5nZVRleHQudmFsdWU7XG4gICAgICAgIG9ialJlZnJlc2guZGF0ZSA9IHRvZG9DaGFuZ2VEYXRlLnZhbHVlO1xuICAgICAgICBvYmpSZWZyZXNoLm5hbWUgPSB0b2RvQ2hhbmdlTmFtZS52YWx1ZTtcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0b2RvTGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGlmKHRvZG9MaXN0W2ldLmlkZW50aWZpZXIgPT0gb2JqUmVmcmVzaC5pZGVudGlmaWVyKXtcbiAgICAgICAgICAgICAgICB0b2RvTGlzdFtpXS5uYW1lID0gb2JqUmVmcmVzaC5uYW1lO1xuICAgICAgICAgICAgICAgIHRvZG9MaXN0W2ldLm1lc3NhZ2UgPSBvYmpSZWZyZXNoLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgdG9kb0xpc3RbaV0uZGF0ZSA9IG9ialJlZnJlc2guZGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZighcHJvamVjdFNldC5oYXMob2JqUmVmcmVzaC5uYW1lKSl7XG4gICAgICAgICAgICBpZihvYmpSZWZyZXNoLm5hbWUgIT0gXCJcIil7XG4gICAgICAgICAgICAgICAgcHJvamVjdFNldC5hZGQob2JqUmVmcmVzaC5uYW1lKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdC51bnNoaWZ0KG9ialJlZnJlc2gubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVkcmF3UHJvamVjdChwcm9qZWN0TGlzdCk7XG4gICAgICAgIHJlZHJhd1RvZG8odG9kb0xpc3QpO1xuICAgICAgICB0b2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRvZG9TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIHRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGJsYWNrb3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICB0b2RvQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICB0b2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBibGFja291dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICAgIHJldHVybiB0b2RvQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0RGl2KG5hbWUpeyAvL3Nob3VsZCBwcm9iYWJseSBhZGQgbGlzdCBhbmQgc2V0IGFzIHBhcmFtZXRlcnMgZm9yIHJldXNhYmlsaXR5XG4gICAgY29uc3Qgckljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHJJY29uLnNyYyA9IHJlbW92ZUljb247XG4gICAgZUljb24uc3JjID0gZWRpdEljb247XG4gICAgckljb24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlSWNvbicpO1xuICAgIGVJY29uLmNsYXNzTGlzdC5hZGQoJ2VkaXRJY29uJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHJvamVjdEVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RDb250YWluZXInKTtcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdFRpdGxlJyk7XG4gICAgcHJvamVjdERlbGV0ZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0RGVsZXRlJyk7XG4gICAgcHJvamVjdERlbGV0ZS5hcHBlbmQockljb24pO1xuICAgIHByb2plY3RFZGl0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RFZGl0Jyk7XG4gICAgcHJvamVjdEVkaXQuYXBwZW5kQ2hpbGQoZUljb24pO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdFRpdGxlLHByb2plY3REZWxldGUscHJvamVjdEVkaXQpO1xuICAgIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGN1cnJlbnRDaG9pY2UgPSBuYW1lO1xuICAgICAgICBjb250ZW50VGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICByZWRyYXdUb2RvKHRvZG9MaXN0LGN1cnJlbnRDaG9pY2UpO1xuICAgIH0pO1xuICAgIHByb2plY3REZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIHRvZG9MaXN0LHByb2plY3RMaXN0LHByb2plY3RTZXQgPSBkZWxldGVXaG9sZVByb2plY3QobmFtZSx0b2RvTGlzdCxwcm9qZWN0TGlzdCxwcm9qZWN0U2V0KTtcbiAgICAgICAgcmVkcmF3VG9kbyh0b2RvTGlzdCk7XG4gICAgICAgIHJlZHJhd1Byb2plY3QocHJvamVjdExpc3QpO1xuICAgIH0pO1xuICAgIHByb2plY3RFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgYmxhY2tvdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHByb0NoYW5nZU5hbWUudmFsdWUgPSBuYW1lO1xuICAgICAgICBuYW1lMiA9IG5hbWU7XG4gICAgfSk7XG4gICAgcHJvamVjdEZvcm0ub25zdWJtaXQgPSBmdW5jdGlvbigpe1xuICAgICAgICBpZihuYW1lMiAhPSBwcm9DaGFuZ2VOYW1lLnZhbHVlKXtcbiAgICAgICAgICAgIGlmKHByb2plY3RTZXQuaGFzKHByb0NoYW5nZU5hbWUudmFsdWUpKXtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDtpPHRvZG9MaXN0Lmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZih0b2RvTGlzdFtpXS5uYW1lID09IG5hbWUyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9MaXN0W2ldLm5hbWUgPSBwcm9DaGFuZ2VOYW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb2plY3RMaXN0LHByb2plY3RTZXQgPSBkZWxldGVQcm9qZWN0KG5hbWUyLHByb2plY3RMaXN0LHByb2plY3RTZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdC51bnNoaWZ0KHByb0NoYW5nZU5hbWUudmFsdWUpO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8dG9kb0xpc3QubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRvZG9MaXN0W2ldLm5hbWUgPT0gbmFtZTIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0xpc3RbaV0ubmFtZSA9IHByb0NoYW5nZU5hbWUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvamVjdExpc3QscHJvamVjdFNldCA9IGRlbGV0ZVByb2plY3QobmFtZTIscHJvamVjdExpc3QscHJvamVjdFNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVkcmF3UHJvamVjdChwcm9qZWN0TGlzdCk7XG4gICAgICAgIHJlZHJhd1RvZG8odG9kb0xpc3QpO1xuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBibGFja291dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHByb1N1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIHByb2plY3RDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGJsYWNrb3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2plY3RDb250YWluZXI7XG59XG5cbmZvcm0ub25zdWJtaXQgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IG9iamVjdCA9IHRvZG8ocHJvamVjdE5hbWUudmFsdWUsIHByb2plY3RNZXNzYWdlLnZhbHVlLCBwcm9qZWN0RGF0ZS52YWx1ZSk7XG4gICAgdG9kb0xpc3QudW5zaGlmdChvYmplY3QpO1xuICAgIGlmKCFvYmplY3QubmFtZSA9PSBcIlwiKXtcbiAgICAgICAgcHJvamVjdExpc3QudW5zaGlmdChvYmplY3QubmFtZSk7XG4gICAgICAgIHByb2plY3RMaXN0ID0gc2V0TGlzdChwcm9qZWN0TGlzdCk7XG4gICAgICAgIGlmKHByb2plY3RTZXQuaGFzKG9iamVjdC5uYW1lKSA9PSBmYWxzZSl7XG4gICAgICAgICAgICBpZihwcm9qZWN0U2hvdy5maXJzdENoaWxkKXtcbiAgICAgICAgICAgICAgICBwcm9qZWN0U2hvdy5pbnNlcnRCZWZvcmUocHJvamVjdERpdihvYmplY3QubmFtZSkscHJvamVjdFNob3cuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHByb2plY3RTaG93LmFwcGVuZChwcm9qZWN0RGl2KG9iamVjdC5uYW1lKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdFNldC5hZGQob2JqZWN0Lm5hbWUpO1xuICAgIH1cblxuICAgIGlmKHNob3cuZmlyc3RDaGlsZCl7XG4gICAgICAgIHNob3cuaW5zZXJ0QmVmb3JlKHRvZG9EaXYob2JqZWN0KSxzaG93LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHNob3cuYXBwZW5kKHRvZG9EaXYob2JqZWN0KSk7XG4gICAgfVxuICAgIGhpZGVGb3JtKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgcmV0dXJuIGZhbHNlO1xufSk7XG5cbmluYm94QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICByZWRyYXdUb2RvKHRvZG9MaXN0KTtcbiAgICBjb250ZW50VGl0bGUudGV4dENvbnRlbnQgPSAnSW5ib3gnO1xufSk7XG5cbnRvZGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBzaG93LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29udGVudFRpdGxlLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgICBmb3IobGV0IGk9MDtpPHRvZG9MaXN0Lmxlbmd0aDtpKyspe1xuICAgICAgICBpZih0b2RvTGlzdFtpXS5kYXRlID09IHRvZGF5KXtcbiAgICAgICAgICAgIHNob3cuYXBwZW5kKHRvZG9EaXYodG9kb0xpc3RbaV0pKTtcbiAgICAgICAgfVxuICAgIH0gXG59KTtcblxuYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIHNob3dGb3JtKCk7XG59KTtcblxuZnJvbUNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICBoaWRlRm9ybSgpO1xufSk7XG5cbmJsYWNrb3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGhpZGVGb3JtKCk7XG59KTtcblxucHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgY3VycmVudENob2ljZSA9ICdwcm9qZWN0JztcbiAgICBjb250ZW50VGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdCc7XG4gICAgc2hvdy5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvcihsZXQgaT0wO2k8cHJvamVjdExpc3QubGVuZ3RoO2krKyl7XG4gICAgICAgIHNob3cuYXBwZW5kKHByb2plY3REaXYocHJvamVjdExpc3RbaV0pKTtcbiAgICB9XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==