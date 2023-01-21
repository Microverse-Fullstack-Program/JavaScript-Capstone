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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n*::before,\\r\\n*::after {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Questrial', sans-serif;\\r\\n  font-weight: 400;\\r\\n  font-style: normal;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: #c4dda4;\\r\\n}\\r\\n\\r\\n.NavBar {\\r\\n  font-weight: bold;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 30px;\\r\\n  margin: 10px 45px 15px 45px;\\r\\n  padding: 10px;\\r\\n  font-size: 16px;\\r\\n  background-color: azure;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  border-radius: 50%;\\r\\n  width: 70px;\\r\\n  height: 70px;\\r\\n  padding: 10px 5px;\\r\\n  background: #fff;\\r\\n  border: 3px solid #000;\\r\\n  color: #000;\\r\\n  text-align: center;\\r\\n  font-size: 13px;\\r\\n}\\r\\n\\r\\n.NavBar a {\\r\\n  margin: 0;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\na:hover {\\r\\n  text-decoration: underline;\\r\\n  color: crimson;\\r\\n}\\r\\n\\r\\na:active {\\r\\n  color: crimson;\\r\\n  background-color: #202d77;\\r\\n}\\r\\n\\r\\n#tab1,\\r\\n.counter {\\r\\n  font-weight: bold;\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  text-align: center;\\r\\n  font-size: 24px;\\r\\n  text-shadow: 1px 1px blue;\\r\\n}\\r\\n\\r\\n.content-Wrapper {\\r\\n  margin: 10px 45px 45px 45px;\\r\\n  padding: 1%;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-around;\\r\\n  gap: 5%;\\r\\n}\\r\\n\\r\\n.item {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 30%;\\r\\n  padding: 1%;\\r\\n  margin-bottom: 3%;\\r\\n  background-color: #f7fafa;\\r\\n  border: solid 2px rgb(27, 27, 27);\\r\\n}\\r\\n\\r\\n.imgWrapper img {\\r\\n  width: 100%;\\r\\n  height: 180px;\\r\\n  object-fit: cover;\\r\\n  margin-bottom: 5px;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.likes,\\r\\n.homepageBtn {\\r\\n  align-self: flex-end;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.likes button {\\r\\n  box-shadow: none;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.likes img {\\r\\n  width: 25px;\\r\\n  height: 25px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#comments {\\r\\n  margin-bottom: 15px;\\r\\n}\\r\\n\\r\\n.homepageBtn {\\r\\n  width: max-content;\\r\\n  padding: 0 5px;\\r\\n  border: 2px solid;\\r\\n  box-shadow: 3px 3px black;\\r\\n}\\r\\n\\r\\n.about-the,\\r\\n.contacts {\\r\\n  display: flex;\\r\\n  margin: 10px 45px 45px 45px;\\r\\n  padding: 1%;\\r\\n  font-size: 15px;\\r\\n  text-align: justify;\\r\\n}\\r\\n\\r\\n.about-the {\\r\\n  flex-direction: column;\\r\\n  gap: 5%;\\r\\n}\\r\\n\\r\\n.contacts {\\r\\n  justify-content: space-evenly;\\r\\n}\\r\\n\\r\\n.authors {\\r\\n  padding: 10px;\\r\\n  background-color: #eff0f1;\\r\\n}\\r\\n\\r\\n.authors address {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 3%;\\r\\n}\\r\\n\\r\\n.authors p {\\r\\n  margin-bottom: 1%;\\r\\n}\\r\\n\\r\\nh3 {\\r\\n  padding-left: 15px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.popupWrapper {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  background-color: rgb(182, 214, 214);\\r\\n  margin-left: 25%;\\r\\n  padding: 2% 5% 2% 5%;\\r\\n  z-index: 9999;\\r\\n}\\r\\n\\r\\n#close {\\r\\n  padding-left: 95%;\\r\\n  font-weight: 800;\\r\\n  font-size: 25px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.imgContainer {\\r\\n  width: 500px;\\r\\n  border-color: #000;\\r\\n  box-shadow: 0 0 5px #000;\\r\\n  padding: 2% 3% 2% 3%;\\r\\n  margin-bottom: 3%;\\r\\n  background-color: rgba(0, 0, 0, 0.418);\\r\\n}\\r\\n\\r\\n#Hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.title1 {\\r\\n  text-align: center;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.detail1 {\\r\\n  float: left;\\r\\n  width: 45%;\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\n.commentPost {\\r\\n  width: 60%;\\r\\n  margin: auto;\\r\\n  padding: 10px;\\r\\n  background-color: azure;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n#name {\\r\\n  margin-left: 2%;\\r\\n  border-radius: 5px;\\r\\n  border: 2px solid #8d8ea8;\\r\\n  margin-top: 5%;\\r\\n  padding: 5px;\\r\\n  width: 90%;\\r\\n}\\r\\n\\r\\n#name:focus {\\r\\n  outline: none;\\r\\n  border-color: #9ecaed;\\r\\n  box-shadow: 0 0 10px #9ecaed;\\r\\n}\\r\\n\\r\\n#dComment,\\r\\n#aComment {\\r\\n  text-align: left;\\r\\n  margin-top: 25px;\\r\\n  font-weight: 600;\\r\\n  margin-left: 150px;\\r\\n}\\r\\n\\r\\n#comment {\\r\\n  border-radius: 5px;\\r\\n  border: 2px solid #8d8ea8;\\r\\n  margin: 2% 30% 2% 2%;\\r\\n  padding: 5px 0 10% 5px;\\r\\n  width: 90%;\\r\\n}\\r\\n\\r\\n#comment:focus {\\r\\n  outline: none;\\r\\n  border-color: #9ecaed;\\r\\n  box-shadow: 0 0 10px #9ecaed;\\r\\n}\\r\\n\\r\\n.postCommentBtn {\\r\\n  border-radius: 5px;\\r\\n  border: 2px solid #8d8ea8;\\r\\n  padding: 0 3px 0 3px;\\r\\n  margin-right: 25px;\\r\\n  align-self: flex-end;\\r\\n}\\r\\n\\r\\n#fdate {\\r\\n  float: left;\\r\\n  padding-left: 2%;\\r\\n  width: 22%;\\r\\n}\\r\\n\\r\\n#fuser {\\r\\n  float: left;\\r\\n  width: 25%;\\r\\n}\\r\\n\\r\\n.Footer {\\r\\n  padding: 1% 0% 1% 2%;\\r\\n  border: solid 2px rgb(27, 27, 27);\\r\\n  font-size: 16px;\\r\\n  background-color: rgb(191, 221, 221);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/homepage.js */ \"./src/modules/homepage.js\");\n/* harmony import */ var _modules_postLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/postLikes.js */ \"./src/modules/postLikes.js\");\n/* harmony import */ var _modules_about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/about.js */ \"./src/modules/about.js\");\n/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/contact.js */ \"./src/modules/contact.js\");\n/* harmony import */ var _modules_popupWindow_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/popupWindow.js */ \"./src/modules/popupWindow.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// handling onclick event for the like, comment and reservation buttons\r\ndocument.addEventListener('click', (event) => {\r\n  event.preventDefault();\r\n  const parentClass = event.target.parentElement;\r\n  const objId = parentClass.dataset.index;\r\n\r\n  if (event.target.className === 'likeBtn') {\r\n    const likeCounts = parentClass.lastElementChild;\r\n    (0,_modules_postLikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(objId, likeCounts);\r\n  } else if (event.target.className === 'homepageBtn') {\r\n    if (event.target.id === 'comments') {\r\n      (0,_modules_popupWindow_js__WEBPACK_IMPORTED_MODULE_5__.popupWindow)(event.target.dataset.index);\r\n    } else if (event.target.id === 'reservation') {\r\n      // popup reservation page\r\n    }\r\n  }\r\n});\r\n\r\n// Handels all \"comments\" button popup execution\r\n// const commentBtn = document.querySelectorAll('.CommentsButton');\r\n// commentBtn.forEach((btn) => {\r\n//   btn.addEventListener('click', (e) => {\r\n    \r\n//   });\r\n// });\r\n\r\n// Script For Single Page Application\r\nconst navBtn = document.querySelectorAll('.NavBar a');\r\nconst section = document.querySelectorAll('section');\r\nconst title = document.querySelector('.heading');\r\nnavBtn.forEach((btn) => {\r\n  btn.addEventListener('click', (e) => {\r\n    if (e.target.className === 'home') {\r\n      section[0].style.display = 'flex';\r\n      section[1].style.display = 'none';\r\n      section[2].style.display = 'none';\r\n      title.innerHTML = 'Museum of Art';\r\n    } else if (e.target.className === 'about') {\r\n      section[0].style.display = 'none';\r\n      section[1].style.display = 'flex';\r\n      section[2].style.display = 'none';\r\n      title.innerHTML = 'The Museum of Art Collection API';\r\n      const aboutMA = document.querySelector('.about-the');\r\n      aboutMA.innerHTML = _modules_about_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\r\n    } else if (e.target.className === 'contact') {\r\n      section[0].style.display = 'none';\r\n      section[1].style.display = 'none';\r\n      section[2].style.display = 'flex';\r\n      title.innerHTML = 'Meet the Authors';\r\n      const authors = document.querySelector('.contacts');\r\n      authors.innerHTML = _modules_contact_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\r\n    }\r\n  });\r\n});\r\n\r\n// landing at home page\r\n(0,_modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n\n\n//# sourceURL=webpack://javascript-capstone/./src/main.js?");

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst about = `\r\n<p>The <a href=\"https://www.metmuseum.org\">Metropolitan Museum of Art</a> \r\npresents over 5,000 years of art from around the world for everyone to experience and enjoy. \r\nThe Museum lives in two iconic sites in New York City—The Met Fifth Avenue and The Met Cloisters. \r\nMillions of people also take part in The Met experience online.\r\n</p>\r\n<p>Since it was founded in 1870, The Met has always aspired to be more than a treasury of rare and \r\nbeautiful objects. Every day, art comes alive in the Museum’s galleries and through its exhibitions\r\nand events, revealing both new ideas and unexpected connections across time and across cultures.\r\n</p>\r\n<p>The Metropolitan Museum of Art provides select datasets of information on more than 470,000 artworks \r\nin its Collection for unrestricted commercial and noncommercial use. To the extent possible under law, \r\nThe Metropolitan Museum of Art has waived all copyright and related or neighboring rights to this dataset \r\nusing the <a href=\"https://creativecommons.org/publicdomain/zero/1.0/\">Creative Commons Zero</a> license. \r\nThis work is published from the United States of America. These select datasets are now available for use \r\nin any media without permission or fee; they also include identifying data for artworks under copyright. \r\nThe datasets support the search, use, and interaction with the Museum’s collection.\r\n</p>\r\n<p>The Met’s Open Access datasets are available through our API. \r\nThe API (RESTful web service in JSON format) gives access to all of The Met’s Open Access data \r\nand to corresponding high resolution images (JPEG format) that are in the public domain.\r\n</p>\r\n<h2 id=\"access-to-the-api\">Access to the API</h2>\r\n<p>At this time, we do not require API users to register or obtain an API key to use the service. \r\nPlease limit request rate to 80 requests per second.\r\n</p>\r\n<h2 id=\"endpoints\">Endpoints</h2>\r\n<p>There are API endpoints available for the following elements:</p>\r\n<ul>\r\n<li><strong><a href=\"#objects\">Objects</a>:</strong> \r\n    A listing of all valid Object IDs available for access.\r\n</li>\r\n<li><strong><a href=\"#object\">Object</a>:</strong> \r\n    A record for an object, containing all open access data about that object, \r\n    including its image (if the image is available under Open Access)\r\n</li>\r\n<li><strong><a href=\"#departments\">Departments</a>:</strong> \r\n    A listing of all valid departments, with their department ID and \r\n    the department display name\r\n</li>\r\n<li><strong><a href=\"#search\">Search</a>:</strong> \r\n    A listing of all Object IDs for objects that contain the search query \r\n    within the object’s data\r\n</li>\r\n</ul>`;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/about.js?");

/***/ }),

/***/ "./src/modules/baseURLs.js":
/*!*********************************!*\
  !*** ./src/modules/baseURLs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentURL\": () => (/* binding */ commentURL),\n/* harmony export */   \"externalApi\": () => (/* binding */ externalApi),\n/* harmony export */   \"involvementApi\": () => (/* binding */ involvementApi)\n/* harmony export */ });\nconst externalApi = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';\r\nconst involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zbJ8UiXamkbOKYu3Pa9I/likes';\r\nconst commentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zbJ8UiXamkbOKYu3Pa9I/comments';\r\n\r\n\r\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/baseURLs.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = () => {\r\n  const commentCounter = document.querySelector('.feedback');\r\n  const counter = commentCounter.childElementCount;\r\n  return counter;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/commentPage.js":
/*!************************************!*\
  !*** ./src/modules/commentPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchComment.js */ \"./src/modules/fetchComment.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n\r\n\r\n\r\nconst body = document.querySelector('body');\r\nconst detailContainer = document.createElement('div');\r\n\r\nconst commentPage = async (objectDetails) => {\r\n  const commentsRes = await (0,_fetchComment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(objectDetails.objectID);\r\n  const objInfo = `\r\n    <section id=\"card\">\r\n        <p id='close'>X</p>\r\n        <image class=\"imgContainer\" src = \"${objectDetails.primaryImage}\" alt=\"Object Image\"/>\r\n        <h2 class='title1 detail'>${objectDetails.title}</h2>\r\n        <p class='detail1'><strong> Department:</strong> ${objectDetails.department}</p>\r\n        <p class='detail2'><strong>  Culture: </strong> ${objectDetails.culture}</p>\r\n        <p class='detail1'><strong>  Dimensions: </strong> ${objectDetails.dimensions}</p>\r\n        <p class='detail2'><strong> Date: </strong> ${objectDetails.objectBeginDate} to ${objectDetails.objectEndDate} </p>\r\n        `;\r\n\r\n  let comment = '';\r\n  if (commentsRes) {\r\n    comment += '<p id=\"dComment\"></p> <div class=\"feedback\">';\r\n    for (let i = 0; i < commentsRes.length; i += 1) {\r\n      comment += `\r\n        <div>\r\n          <p id='fdate'>${commentsRes[i].creation_date} </p>\r\n          <p id='fuser'>${commentsRes[i].username}: </p>\r\n          <p id='fcomment'>${commentsRes[i].comment}</p>\r\n        </div>`;\r\n    }\r\n    comment += '</div>';\r\n  }\r\n\r\n  const commentForm = `<p id='aComment'>Add a comment</p>\r\n      <div class=\"commentPost\">\r\n        <input id='name' placeholder='name' required></input>\r\n        <textarea id='comment' placeholder='Your insights' required></textarea>\r\n        <button type='button' class='postCommentBtn' data-index = \"${objectDetails.objectID}\">Comment</button>\r\n      </div>\r\n        </section>`;\r\n\r\n  detailContainer.innerHTML = objInfo + comment + commentForm;\r\n  detailContainer.className = 'popup';\r\n  detailContainer.classList.add('popupWrapper');\r\n  body.appendChild(detailContainer);\r\n\r\n  const commentCount = (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  if (_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\r\n    document.querySelector('#dComment').innerHTML = `Comments (${commentCount})`;\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentPage);\r\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/commentPage.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contact = `\r\n<div class=\"authors\">\r\n    <h3> Author 1 </h3>\r\n    <address>\r\n        <p><strong>Name: </strong> Chere Lemma </p>\r\n        <p><strong>Email: </strong> chere.lemma@aastu.edu.et </p>\r\n        <p><strong>Address: </strong> Addis Ababa, Ethiopia </p>\r\n        <p><strong>Time Zone: </strong> UTC + 3 </p>\r\n        <p><strong>Social Media Links</strong></p>\r\n        <ul>\r\n            <li><a href=\"https://github.com/cherelemma\">GitHub</a></li>\r\n            <li><a href=\"https://twitter.com/Chere21271613\">Linkedin</a></li>\r\n            <li><a href=\"https://www.linkedin.com/in/chere-lemma27211613\">Twitter</a></li>\r\n        </ul>\r\n    </address>\r\n</div>\r\n<div class=\"authors\">\r\n    <h3> Author 2 </h3>\r\n    <address>\r\n        <p><strong>Name:</strong> Thinus Van de Venter </p>\r\n        <p><strong>Email: </strong> thinusvdv2001@gmail.com </p>\r\n        <p><strong>Address:</strong> Johannesburg , South Africa </p>\r\n        <p><strong>Time Zone:</strong> UTC + 2 </p>\r\n        <p><strong>Social Media Links</strong></p>\r\n        <ul>\r\n            <li><a href=\"https://github.com/Thinus01\">GitHub</a></li>\r\n            <li><a href=\"https://twitter.com/thinus_v_d_v#gh-light-mode-only\">Linkedin</a></li>\r\n            <li><a href=\"https://www.linkedin.com/in/thinus-van-de-venter-99aa26203/#gh-light-mode-only\">Twitter</a></li>\r\n    </ul>\r\n    </address>\r\n</div>\r\n`;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/displayArtObject.js":
/*!*****************************************!*\
  !*** ./src/modules/displayArtObject.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_thumbs_up_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/thumbs_up.png */ \"./src/assets/thumbs_up.png\");\n/* harmony import */ var _fetchArtObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchArtObject.js */ \"./src/modules/fetchArtObject.js\");\n\r\n\r\n\r\nconst itemContainer = document.querySelector('.content-Wrapper');\r\n\r\nconst printItem = async (objectId, likes) => {\r\n  const result = await (0,_fetchArtObject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(objectId);\r\n\r\n  const itemCard = document.createElement('div');\r\n  itemCard.className = 'item';\r\n  const attr = document.createAttribute('data-index');\r\n  attr.value = result.objectID;\r\n  itemCard.setAttributeNode(attr);\r\n\r\n  itemCard.innerHTML += `<div class=\"imgWrapper\"><img src=\"${result.primaryImage}\"/></div>\r\n    <div class=\"title\" >\r\n        <p>${result.title}</p>\r\n        <div class=\"likes\" data-index = \"${result.objectID}\">\r\n          <img class=\"likeBtn\" src=\"${_assets_thumbs_up_png__WEBPACK_IMPORTED_MODULE_0__}\"/>\r\n          <p class=\"likeCount\"> ${likes} Likes</p>\r\n        </div>\r\n    </div>\r\n    <button class=\"homepageBtn\" id=\"comments\" data-index = \"${result.objectID}\"> Comments </button>`;\r\n  itemContainer.appendChild(itemCard);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printItem);\r\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/displayArtObject.js?");

/***/ }),

/***/ "./src/modules/fetchArtObject.js":
/*!***************************************!*\
  !*** ./src/modules/fetchArtObject.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _baseURLs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseURLs.js */ \"./src/modules/baseURLs.js\");\n\r\n\r\nconst fetchArtObjects = async (objectId) => {\r\n  const response = await fetch(_baseURLs_js__WEBPACK_IMPORTED_MODULE_0__.externalApi + objectId);\r\n  const res = await response.json();\r\n  return res;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchArtObjects);\r\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/fetchArtObject.js?");

/***/ }),

/***/ "./src/modules/fetchComment.js":
/*!*************************************!*\
  !*** ./src/modules/fetchComment.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _baseURLs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseURLs.js */ \"./src/modules/baseURLs.js\");\n\r\n\r\nconst fetchComment = async (id) => {\r\n  const response = await fetch(`${_baseURLs_js__WEBPACK_IMPORTED_MODULE_0__.commentURL}?item_id=${id}`, {\r\n    method: 'GET',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  });\r\n  const res = await response.json();\r\n  return res;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchComment);\r\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/fetchComment.js?");

/***/ }),

/***/ "./src/modules/fetchObjDetails.js":
/*!****************************************!*\
  !*** ./src/modules/fetchObjDetails.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _baseURLs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseURLs.js */ \"./src/modules/baseURLs.js\");\n\r\n\r\nconst fetchObjDetails = async (id) => {\r\n  const response = await fetch(_baseURLs_js__WEBPACK_IMPORTED_MODULE_0__.externalApi + id);\r\n  const result = await response.json();\r\n  return result;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchObjDetails);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/fetchObjDetails.js?");

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _baseURLs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseURLs.js */ \"./src/modules/baseURLs.js\");\n\r\n\r\nconst getLikes = async () => {\r\n  const response = await fetch(_baseURLs_js__WEBPACK_IMPORTED_MODULE_0__.involvementApi);\r\n  const res = await response.json();\r\n  return res;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);\r\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/getLikes.js?");

/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _objectIds_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectIds.js */ \"./src/modules/objectIds.js\");\n/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLikes.js */ \"./src/modules/getLikes.js\");\n/* harmony import */ var _displayArtObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayArtObject.js */ \"./src/modules/displayArtObject.js\");\n/* harmony import */ var _objCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objCounter.js */ \"./src/modules/objCounter.js\");\n\r\n\r\n\r\n\r\n\r\nconst objectCount = document.querySelector('.counter');\r\n\r\n// retrieve likes count from the involvement API\r\nconst checkLikes = (likeCounts, objId) => {\r\n  for (let i = 0; i < likeCounts.length; i += 1) {\r\n    if (likeCounts[i].item_id === objId.toString()) {\r\n      return likeCounts[i].likes;\r\n    }\r\n  }\r\n  return false;\r\n};\r\n\r\n// print the objects on homepage\r\nconst loadHomePage = async () => {\r\n  const likeCounts = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n  _objectIds_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((id) => {\r\n    const likes = checkLikes(likeCounts, id);\r\n    if (likes) {\r\n      (0,_displayArtObject_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id, likes);\r\n    } else {\r\n      (0,_displayArtObject_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id, 0);\r\n    }\r\n  });\r\n\r\n  setTimeout(async () => {\r\n    const objCount = (0,_objCounter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    objectCount.innerHTML += ` (${objCount})`;\r\n  }, 2000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomePage);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/homepage.js?");

/***/ }),

/***/ "./src/modules/objCounter.js":
/*!***********************************!*\
  !*** ./src/modules/objCounter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst objectsCounter = () => {\r\n  const objectsWrapper = document.querySelector('.content-Wrapper');\r\n  const objCount = objectsWrapper.children.length;\r\n  return objCount;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (objectsCounter);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/objCounter.js?");

/***/ }),

/***/ "./src/modules/objectIds.js":
/*!**********************************!*\
  !*** ./src/modules/objectIds.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst objectsId = [2592, 13938, 188545, 195133, 195138, 251167, 288491, 312572, 451102];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (objectsId);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/objectIds.js?");

/***/ }),

/***/ "./src/modules/popupWindow.js":
/*!************************************!*\
  !*** ./src/modules/popupWindow.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"popupWindow\": () => (/* binding */ popupWindow)\n/* harmony export */ });\n/* harmony import */ var _fetchObjDetails_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchObjDetails.js */ \"./src/modules/fetchObjDetails.js\");\n/* harmony import */ var _commentPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentPage.js */ \"./src/modules/commentPage.js\");\n/* harmony import */ var _postComment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postComment.js */ \"./src/modules/postComment.js\");\n\r\n\r\n\r\n\r\n// eslint-disable-next-line import/prefer-default-export\r\nconst popupWindow = async (index) => {\r\n  const objDetails = await (0,_fetchObjDetails_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(index);\r\n  (0,_commentPage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(objDetails);\r\n};\r\n\r\ndocument.addEventListener('click', (event) => {\r\n  event.preventDefault();\r\n  if (event.target.className === 'postCommentBtn') {\r\n    const objId = event.target.dataset.index;\r\n    (0,_postComment_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(objId);\r\n    popupWindow(objId);\r\n  } else if (event.target.id === 'close') {\r\n    const body = document.querySelector('body');\r\n    const detailContainer = document.querySelector('.popup');\r\n    detailContainer.classList.remove('popupWrapper');\r\n    body.removeChild(detailContainer);\r\n  }\r\n});\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/popupWindow.js?");

/***/ }),

/***/ "./src/modules/postComment.js":
/*!************************************!*\
  !*** ./src/modules/postComment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _baseURLs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseURLs.js */ \"./src/modules/baseURLs.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n\r\n\r\n\r\nconst sendData = async (objId) => {\r\n  let username = document.getElementById('name').value;\r\n  let comment = document.getElementById('comment').value;\r\n  await fetch(_baseURLs_js__WEBPACK_IMPORTED_MODULE_0__.commentURL, {\r\n    method: 'POST',\r\n    headers: { 'content-type': 'application/json; charset=UTF-8' },\r\n    body: JSON.stringify({\r\n      item_id: `${objId}`,\r\n      username: `${username}`,\r\n      comment: `${comment}`,\r\n    }),\r\n\r\n  });\r\n  username = '';\r\n  comment = '';\r\n  const commentCount = (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  if (_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] > 0) {\r\n    document.querySelector('#dComment').innerHTML = `Comments (${commentCount})`;\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendData);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/postComment.js?");

/***/ }),

/***/ "./src/modules/postLikes.js":
/*!**********************************!*\
  !*** ./src/modules/postLikes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _baseURLs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseURLs.js */ \"./src/modules/baseURLs.js\");\n/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLikes.js */ \"./src/modules/getLikes.js\");\n\r\n\r\n\r\nconst postLikes = async (objId, likes) => {\r\n  const resource = await fetch(_baseURLs_js__WEBPACK_IMPORTED_MODULE_0__.involvementApi, {\r\n    method: 'POST',\r\n    headers: {\r\n      'content-type': 'application/json; charset=UTF-8',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: `${objId}`,\r\n    }),\r\n  });\r\n\r\n  const likeCount = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  likeCount.forEach((element) => {\r\n    if (element.item_id === objId) {\r\n      likes.innerHTML = `${element.likes} Likes`;\r\n    }\r\n  });\r\n  return resource;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLikes);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/postLikes.js?");

/***/ }),

/***/ "./src/assets/thumbs_up.png":
/*!**********************************!*\
  !*** ./src/assets/thumbs_up.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a3bcf865570ccc28ac77.png\";\n\n//# sourceURL=webpack://javascript-capstone/./src/assets/thumbs_up.png?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;