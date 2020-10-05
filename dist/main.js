/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"*,\\r\\n*::after,\\r\\n*::before {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  color: #b83b5e;\\r\\n  font-family: 'Oleo Script', cursive;\\r\\n  font-size: 3rem;\\r\\n}\\r\\n\\r\\n.form-container,\\r\\n.project-module {\\r\\n  width: 100%;\\r\\n  position: absolute;\\r\\n  height: 100vh;\\r\\n  background-color: rgba(0, 0, 0, 0.514);\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n}\\r\\n\\r\\n#todoForm,\\r\\n#projectForm {\\r\\n  position: relative;\\r\\n  background-color: #fff;\\r\\n  padding: 30px;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n#todoForm,\\r\\n#todoForm label,\\r\\n#projectForm,\\r\\n#projectForm label {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: space-evenly;\\r\\n}\\r\\n\\r\\n#todoForm label,\\r\\n#projectForm label {\\r\\n  padding: 10px 0;\\r\\n}\\r\\n\\r\\n.cta-btns {\\r\\n  margin-top: 20px;\\r\\n}\\r\\n\\r\\n#content {\\r\\n  display: flex;\\r\\n  min-height: 100vh;\\r\\n}\\r\\n\\r\\n.left-container {\\r\\n  width: 30%;\\r\\n  background-color: antiquewhite;\\r\\n}\\r\\n\\r\\n.left-container,\\r\\n.right-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  padding-top: 30px;\\r\\n}\\r\\n\\r\\n.left-section {\\r\\n  padding: 30px 0;\\r\\n}\\r\\n\\r\\n.left-section h2 {\\r\\n  padding-bottom: 10px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.right-container .right-info {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n\\r\\n  /* align-items: center; */\\r\\n  width: 100%;\\r\\n  min-height: 80%;\\r\\n}\\r\\n\\r\\n.right-info .right-section {\\r\\n  background-color: antiquewhite;\\r\\n  min-width: 300px;\\r\\n  max-width: 500px;\\r\\n  width: 100%;\\r\\n  min-height: 400px;\\r\\n  margin: 10%;\\r\\n  border-radius: 10px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  padding-top: 20px;\\r\\n\\r\\n}\\r\\n\\r\\n.right-section:last-child {\\r\\n  margin-left: 0;\\r\\n}\\r\\n\\r\\n.projects .project {\\r\\n  padding: 12px 0;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  cursor: pointer;\\r\\n  width: 200px;\\r\\n  margin: 10px 0;\\r\\n  border-radius: 10px;\\r\\n  background-color: rgb(255, 212, 155);\\r\\n}\\r\\n\\r\\n#projectToggle {\\r\\n  margin-right: 5rem;\\r\\n}\\r\\n\\r\\n.projects .project:hover,\\r\\n.projects .project[active],\\r\\n#formToggle:hover,\\r\\n#projectToggle:hover {\\r\\n  background-color: #6a2c70;\\r\\n}\\r\\n\\r\\n.projects .project h4 {\\r\\n  color: #6a2c70;\\r\\n  font-weight: 400;\\r\\n  padding-right: 10px;\\r\\n}\\r\\n\\r\\n.projects .project:hover h4,\\r\\n.projects .project:hover span,\\r\\n.projects .project[active] h4,\\r\\n.projects .project[active] span,\\r\\n#formToggle:hover,\\r\\n#projectToggle:hover {\\r\\n  color: antiquewhite;\\r\\n}\\r\\n\\r\\n.right-container {\\r\\n  width: 70%;\\r\\n}\\r\\n\\r\\n.d-none {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.v-hidden {\\r\\n  visibility: hidden;\\r\\n}\\r\\n\\r\\n.toggle > * {\\r\\n  padding: 5px 10px;\\r\\n  border-radius: 10px;\\r\\n  background-color: antiquewhite;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/Projects.js":
/*!*************************!*\
  !*** ./src/Projects.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_change__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-change */ \"./src/dom-change.js\");\n/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage */ \"./src/local-storage.js\");\n\n\n\nconst ldb = Object(_local_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst projectList = ldb.getAr('projectList') == null ? ldb.setAr('projectList', ['Default']) : ldb.getAr('projectList');\nclass TodoProject {\n  constructor(name = 'Default') {\n    this.name = name;\n    projectList.push(name);\n    ldb.setAr('projectList', projectList);\n  }\n}\nconst Projects = () => {\n  const getList = () => {\n    if (ldb.getAr('projectList') == null) {\n      ldb.setAr('projectList', ['Default']);\n    }\n    return ldb.getAr('projectList');\n  };\n  const insertProject = (projectName) => {\n    // eslint-disable-next-line no-unused-vars\n    const newProject = new TodoProject(projectName);\n    _dom_change__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectListNav(projectList);\n    _dom_change__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectOptions(projectList);\n  };\n  // const createFunction = () => {\n  //   const ProjectsDiv = document.createElement('div');\n  //   projectsDiv.setAttribute('class', 'projects mr-3');\n\n  //   for (let i = 0; i < projectList.length; i += 1) {\n  //     const projectSection = document.createElement('div');\n  //     projectSection.setAttribute('class', 'card p-3 mt-2');\n  //     const projectName = document.createElement('p');\n  //     projectName.setAttribute('class', 'project-text');\n  //     projectName.innerHTML = projectList[i].name;\n  //     const projectValue = document.createElement('p');\n  //     projectValue.innerHTML = projectList[i].value;\n\n  //     projectSection.appendChild(projectName);\n  //     projectSection.appendChild(projectValue);\n  //     ProjectsDiv.appendChild(projectSection);\n\n  //     const detailsProjectButton = document.createElement('button');\n  //     detailsProjectButton.innerHTML = 'View Details';\n  //     detailsProjectButton.setAttribute('class', 'btn btn-primary project-button');\n\n  //     projectSection.appendChild(detailsProjectButton);\n\n  //     detailsProjectButton.addEventListener('click', () => {\n  //       const toDoPageInstance = toDoPage();\n  //       toDoPageInstance.displayToDo(projectList[i].name, projectList[i].value);\n  //       document.querySelector('.projects').classList.add('hide-project');\n  //     });\n  //   }\n\n  //   document.querySelector('.all-content').appendChild(ProjectsDiv);\n  // };\n\n  const addToProjectList = (e) => {\n    console.log(document.querySelector('.project[active]'));\n    e.preventDefault();\n    if (document.forms.projectForm.reportValidity()) {\n      const newProjectName = document.querySelector('#addproject').value;\n      insertProject(newProjectName);\n      document.querySelector('.project-module').classList.add('d-none');\n      document.forms.projectForm.reset();\n    }\n    _dom_change__WEBPACK_IMPORTED_MODULE_0__[\"default\"].navListeners();\n  };\n\n  const addProject = () => {\n    const projectCard = document.createElement('div');\n    projectCard.setAttribute('class', 'project-module card d-none');\n    const projectForm = document.createElement('form');\n    projectForm.id = 'projectForm';\n    const projectFormH2 = document.createElement('h2');\n    const projectFormTitle = document.createTextNode('Enter the Project Name:');\n    projectFormH2.appendChild(projectFormTitle);\n    projectForm.appendChild(projectFormH2);\n    const projectLabel = document.createElement('label');\n    const projectInput = document.createElement('input');\n    projectInput.type = 'text';\n    projectInput.setAttribute('placeholder', 'Add new project');\n    projectInput.setAttribute('id', 'addproject');\n    projectInput.setAttribute('minlength', '3');\n    projectInput.required = true;\n\n    const submitProjectButton = document.createElement('button');\n    submitProjectButton.setAttribute('class', 'btn btn-success save-btn');\n    submitProjectButton.innerHTML = 'Submit';\n\n    const cancelProjectButton = document.createElement('button');\n    cancelProjectButton.setAttribute('class', 'btn btn-success cancel-btn');\n    cancelProjectButton.innerHTML = 'Cancel';\n\n    submitProjectButton.addEventListener('click', addToProjectList);\n    cancelProjectButton.addEventListener('click', (e) => {\n      e.preventDefault();\n      document.querySelector('.project-module').classList.add('d-none');\n    });\n    projectLabel.appendChild(projectInput);\n    projectForm.appendChild(projectLabel);\n    projectForm.appendChild(submitProjectButton);\n    projectForm.appendChild(cancelProjectButton);\n    projectCard.appendChild(projectForm);\n    document.querySelector('#content').appendChild(projectCard);\n  };\n\n  return {\n    getList, insertProject, addProject,\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\n//# sourceURL=webpack:///./src/Projects.js?");

/***/ }),

/***/ "./src/dom-change.js":
/*!***************************!*\
  !*** ./src/dom-change.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ldb = __webpack_require__(/*! ./local-storage */ \"./src/local-storage.js\").default;\n\nconst domChanges = {\n  projectListNav: (projects) => {\n    let project = '';\n    projects.forEach((val) => {\n      project += `\n    <li class=\"project\" data-info=\"${val}\"><h4>${val}</h4><span class=\"project-nav-options\">&raquo;</span></li>\n    `;\n    });\n    project += `\n    <li class=\"all-project project\" data-info=\"all-projects\"><h4>View All Projects</h4></li>\n    `;\n    document.querySelector('.projects').innerHTML = project;\n  },\n  projectOptions: (projects) => {\n    const formProject = document.forms.todoForm.project;\n    let projectOptions = '';\n    projects.forEach((val) => {\n      projectOptions += `<option value=\"${val}\">${val}</option>`;\n    });\n    formProject.innerHTML = projectOptions;\n  },\n  projectListRightInfo: (projectList) => {\n    const rightSection = document.querySelector('.right-info .right-section:first-child');\n    let projectDOM = '';\n    projectList.forEach((project) => {\n      projectDOM += `\n        <h4>${project}</h4>\n      `;\n    });\n    rightSection.innerHTML = projectDOM;\n  },\n  changeNavCurrentActive: (node) => {\n    const currentActive = document.querySelector('li.project[active]');\n    if (currentActive) {\n      currentActive.removeAttribute('active');\n      node.setAttribute('active', '');\n    } else {\n      node.setAttribute('active', '');\n    }\n  },\n  invokeListeners: () => {\n    domChanges.addListeners();\n  },\n  navListeners: () => {\n    const allProjects = document.querySelectorAll('.projects .project');\n    allProjects.forEach((project) => {\n      project.addEventListener('click', (e) => {\n        const li = e.target.classList.length === 0 ? e.target.parentNode : e.target;\n        if (li.getAttribute('data-info') === 'all-projects') {\n          const projectList = ldb().getAr('projectList');\n          console.log('click');\n          domChanges.projectListRightInfo(projectList);\n        }\n        domChanges.changeNavCurrentActive(li);\n      });\n    });\n  },\n  addListeners: () => {\n    document.getElementById('formToggle').addEventListener('click', () => {\n      document.querySelector('.form-container').classList.remove('d-none');\n    });\n    document.querySelector('.form-container').addEventListener('click', (e) => {\n      if (e.target.classList[0] === 'form-container') {\n        document.querySelector('.form-container').classList.add('d-none');\n      }\n    });\n\n    document.getElementById('projectToggle').addEventListener('click', () => {\n      document.querySelector('.project-module').classList.remove('d-none');\n    });\n    document.querySelector('.project-module').addEventListener('click', (e) => {\n      if (e.target.classList[0] === 'project-module') {\n        document.querySelector('.project-module').classList.add('d-none');\n      }\n    });\n    domChanges.navListeners();\n  },\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (domChanges);\n\n//# sourceURL=webpack:///./src/dom-change.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_change__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-change */ \"./src/dom-change.js\");\n/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects */ \"./src/Projects.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\n\n\nconst importedProject = Object(_Projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst importedtoDoPage = Object(_todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\nwindow.onload = () => {\n  const projects = importedProject.getList('projectList');\n  _dom_change__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectOptions(projects);\n  _dom_change__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectListNav(projects);\n  importedProject.addProject();\n  _dom_change__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addListeners();\n  importedtoDoPage.addTodoLogic();\n};\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/local-storage.js":
/*!******************************!*\
  !*** ./src/local-storage.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst LocalDB = () => {\n  const getItem = (item) => localStorage.getItem(item);\n  const setItem = (name, val) => {\n    localStorage.setItem(name, val);\n  };\n  const getAr = (item) => JSON.parse(localStorage.getItem(item));\n  const setAr = (key, val) => {\n    localStorage.setItem(key, JSON.stringify(val));\n  };\n  const del = (key) => {\n    localStorage.removeItem(key);\n  };\n\n  return {\n    getItem, setItem, getAr, setAr, del,\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LocalDB);\n\n//# sourceURL=webpack:///./src/local-storage.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage */ \"./src/local-storage.js\");\n// import domchange from './dom-change';\n\n\nconst ldb = Object(_local_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst projects = ldb.getAr('projectList');\n\nclass TodoItem {\n  constructor(title,\n    description,\n    dueDate,\n    priority = 'low',\n    project = projects[0]) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.project = project;\n  }\n}\nconst toDoList = ldb.getAr('toDoList') == null ? ldb.setAr('toDoList', []) : ldb.getAr('toDoList');\n\nconst toDoPage = () => {\n  const getTodo = () => {\n    if (ldb.getAr('toDoList') == null) {\n      ldb.setAr('toDoList', []);\n    }\n    return ldb.getAr('toDoList');\n  };\n  const updatetoDoList = (todo) => {\n    toDoList.push(todo);\n    ldb.setAr('toDoList', toDoList);\n  };\n  const displayToDo = (name, value, x) => {\n    const toDoDiv = document.createElement('div');\n    toDoDiv.setAttribute('class', 'main-div');\n\n    document.querySelector('.all-content').appendChild(toDoDiv);\n\n    const toDoProjectTitle = document.createElement('h1');\n    toDoProjectTitle.innerHTML = name;\n\n    const addToDoButton = document.createElement('button');\n    addToDoButton.innerHTML = 'Add New Task';\n    addToDoButton.setAttribute('class', 'btn btn-primary todo-button');\n\n    toDoDiv.appendChild(toDoProjectTitle);\n    toDoDiv.appendChild(addToDoButton);\n\n    const toDoSectionMainDiv = document.createElement('div');\n    toDoSectionMainDiv.setAttribute('class', 'todo-section-div ');\n\n    toDoDiv.appendChild(toDoSectionMainDiv);\n\n    for (let i = 0; i < toDoList.length; i += 1) {\n      if (value === toDoList[i].project) {\n        const todoSection = document.createElement('div');\n        todoSection.setAttribute('class', 'todo-section');\n        const toDoParagraph = document.createElement('p');\n        toDoParagraph.setAttribute('class', 'p-title');\n        toDoParagraph.innerHTML = toDoList[i].title;\n        const toDoDate = document.createElement('p');\n        toDoDate.setAttribute('class', 'p-date');\n        toDoDate.innerHTML = toDoList[i].duedate;\n\n        todoSection.appendChild(toDoParagraph);\n        todoSection.appendChild(toDoDate);\n\n        if (toDoList[i].priority === 'High') {\n          const toDoSectionPriority = document.createElement('p');\n          toDoSectionPriority.setAttribute('class', 'high-priority');\n          toDoSectionPriority.innerHTML = toDoList[i].priority;\n          todoSection.appendChild(toDoSectionPriority);\n        } else if (toDoList[i].priority === 'Medium') {\n          const toDoSectionPriority = document.createElement('p');\n          toDoSectionPriority.setAttribute('class', 'medium-priority');\n          toDoSectionPriority.innerHTML = toDoList[i].priority;\n          todoSection.appendChild(toDoSectionPriority);\n        } else if (toDoList[i].priority === 'Low') {\n          const toDoSectionPriority = document.createElement('p');\n          toDoSectionPriority.setAttribute('class', 'low-priority');\n          toDoSectionPriority.innerHTML = toDoList[i].priority;\n          todoSection.appendChild(toDoSectionPriority);\n        }\n\n        const toDoObject = toDoList[i];\n\n        const editIcon = document.createElement('i');\n        editIcon.setAttribute('class', 'fas fa-edit');\n\n        const deleteIcon = document.createElement('i');\n        deleteIcon.setAttribute('class', 'fas fa-trash-alt');\n\n        todoSection.appendChild(editIcon);\n        todoSection.appendChild(deleteIcon);\n\n        toDoDiv.appendChild(todoSection);\n\n        toDoSectionMainDiv.appendChild(todoSection);\n      }\n    }\n\n    addToDoButton.addEventListener('click', () => {\n      // displayToDoForm(name, value);\n    });\n  };\n\n  const addTodoLogic = () => {\n    const submitToDoButton = document.querySelector('.todoFormButtons .save-btn');\n    submitToDoButton.addEventListener('click', (e) => {\n      e.preventDefault();\n      if (document.forms.todoForm.reportValidity()) {\n        const newtoDoTitle = document.getElementById('title-id').value;\n        const newtoDoDescription = document.getElementById('description-id').value;\n        const newtoDoDueDate = document.getElementById('dueDate-id').value;\n        const newtoDoPriority = document.getElementById('priority-id');\n        const newtoDoProject = document.getElementById('project-id');\n        const newUserProject = newtoDoProject.options[newtoDoProject.selectedIndex].value;\n        const newUserPriority = newtoDoPriority.options[newtoDoPriority.selectedIndex].value;\n\n        if (newtoDoTitle && newtoDoDescription && newtoDoDueDate) {\n          const newToDo = new TodoItem(\n            newtoDoTitle,\n            newtoDoDescription,\n            newtoDoDueDate,\n            newUserPriority,\n            newUserProject,\n          );\n          updatetoDoList(newToDo);\n          document.querySelector('.form-container').classList.add('d-none');\n          document.forms.todoForm.reset();\n          // ldb.getAr('taDoList', getTodo());\n        }\n      }\n    });\n    const cancelToDoButton = document.querySelector('.todoFormButtons .cancel-btn');\n    cancelToDoButton.addEventListener('click', (e) => {\n      e.preventDefault();\n      document.querySelector('.form-container').classList.add('d-none');\n    });\n  };\n  return { displayToDo, addTodoLogic };\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (toDoPage);\n\n\n//# sourceURL=webpack:///./src/todo.js?");

/***/ })

/******/ });