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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"*,\\n*::after,\\n*::before {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n.logo {\\n  color: #b83b5e;\\n  font-family: 'Oleo Script', cursive;\\n  font-size: 3rem;\\n}\\n\\n.form-container,\\n.project-module {\\n  width: 100%;\\n  position: absolute;\\n  height: 100vh;\\n  background-color: rgba(0, 0, 0, 0.514);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  top: 0;\\n  left: 0;\\n}\\n\\n#todoForm,\\n#projectForm  {\\n  position: relative;\\n  background-color: #fff;\\n  padding: 30px;\\n  border-radius: 10px;\\n}\\n\\n#todoForm,\\n#todoForm label,\\n#projectForm,\\n#projectForm label {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: space-evenly;\\n}\\n\\n#todoForm label,\\n#projectForm label {\\n  padding: 10px 0;\\n}\\n\\n.cta-btns {\\n  margin-top: 20px;\\n}\\n\\n#content {\\n  display: flex;\\n  min-height: 100vh;\\n}\\n\\n.left-container {\\n  width: 30%;\\n  background-color: antiquewhite;\\n}\\n\\n.left-container,\\n.right-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding-top: 30px;\\n}\\n\\n.left-section {\\n  padding: 30px 0;\\n}\\n\\n.projects h2 {\\n  padding-bottom: 10px;\\n}\\n\\n.projects .project {\\n  padding-top: 15px;\\n}\\n\\n.projects .project a {\\n  color: #6a2c70;\\n  text-decoration: none;\\n}\\n\\n.right-container {\\n  width: 70%;\\n}\\n\\n.d-none {\\n  display: none;\\n}\\n\\n.toggle > * {\\n  padding: 5px 10px;\\n  border-radius: 10px;\\n  background-color: antiquewhite;\\n  cursor: pointer;\\n}\\n\\n#projectToggle {\\n  margin-right: 5rem;\\n}\\n\\n/* .card.project-module {\\n\\n} */\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_change__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-change */ \"./src/dom-change.js\");\n/* harmony import */ var _dom_change__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dom_change__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n/// function projects(name, value) {\n//   this.name = name;\n//   this.value = value;\n// }\nlet projectList = []\nclass TodoProject {\n  constructor(name = 'Default') {\n    this.name = name;\n    projectList.push(name);\n  }\n}\nconst Projects = () => {\n  const createFunction = () => {\n    const ProjectsDiv = document.createElement('div');\n    projectsDiv.setAttribute('class', 'projects mr-3');\n\n    for (let i = 0; i < projectList.length; i += 1) {\n      const projectSection = document.createElement('div');\n      projectSection.setAttribute('class', 'card p-3 mt-2');\n      const projectName = document.createElement('p');\n      projectName.setAttribute('class', 'project-text');\n      projectName.innerHTML = projectList[i].name;\n      const projectValue = document.createElement('p');\n      projectValue.innerHTML = projectList[i].value;\n\n      projectSection.appendChild(projectName);\n      projectSection.appendChild(projectValue);\n      ProjectsDiv.appendChild(projectSection);\n\n      const detailsProjectButton = document.createElement('button');\n      detailsProjectButton.innerHTML = 'View Details';\n      detailsProjectButton.setAttribute('class', 'btn btn-primary project-button');\n\n      projectSection.appendChild(detailsProjectButton);\n\n      detailsProjectButton.addEventListener('click', () => {\n        const toDoPageInstance = toDoPage();\n        toDoPageInstance.displayToDo(projectList[i].name, projectList[i].value);\n        document.querySelector('.projects').classList.add('hide-project');\n      });\n    }\n\n    document.querySelector('.all-content').appendChild(ProjectsDiv);\n  };\n\n  const addProject = () => {\n    const projectCard = document.createElement('div');\n    projectCard.setAttribute('class', 'project-module card d-none');\n    const projectForm = document.createElement('form');\n    projectForm.id = 'projectForm';\n    const projectFormH2 = document.createElement('h2');\n    const projectFormTitle = document.createTextNode('Enter the Project Name:');\n    projectFormH2.appendChild(projectFormTitle)\n    projectForm.appendChild(projectFormH2);\n    const projectLabel = document.createElement('label');\n    const projectInput = document.createElement('input');\n    projectInput.type = 'text';\n    projectInput.setAttribute('placeholder', 'Add new project');\n    projectInput.setAttribute('id', 'addproject');\n\n    const submitProjectButton = document.createElement('button');\n    submitProjectButton.setAttribute('class', 'btn btn-success save-btn');\n    submitProjectButton.innerHTML = 'Submit';\n\n    const cancelProjectButton = document.createElement('button');\n    cancelProjectButton.setAttribute('class', 'btn btn-success cancel-btn');\n    cancelProjectButton.innerHTML = 'Cancel';\n\n    submitProjectButton.addEventListener('click', addToProjectList);\n    cancelProjectButton.addEventListener('click', () => {document.querySelector('.project-module').classList.add('d-none');})\n    projectLabel.appendChild(projectInput);\n    projectForm.appendChild(projectLabel);\n    projectForm.appendChild(submitProjectButton);\n    projectForm.appendChild(cancelProjectButton);\n    projectCard.appendChild(projectForm);\n    document.querySelector('#content').appendChild(projectCard);\n  };\n\n  const addToProjectList = (e) => {\n    e.preventDefault();\n    const newProjectName = document.querySelector('#addproject').value;\n    const projectInstance = new TodoProject(newProjectName);\n    document.querySelector('.project-module').classList.add('d-none');\n    document.forms.projectForm.reset();\n    Object(_dom_change__WEBPACK_IMPORTED_MODULE_0__[\"projectListNav\"])(projectList);\n    Object(_dom_change__WEBPACK_IMPORTED_MODULE_0__[\"projectOptions\"])(projectList);\n  };\n\n  return { addProject, createFunction };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\n//# sourceURL=webpack:///./src/Projects.js?");

/***/ }),

/***/ "./src/dom-change.js":
/*!***************************!*\
  !*** ./src/dom-change.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  projectListNav: (projects) => {\n    let project = '';\n    projects.forEach((val) => {\n      project += `\n    <div class=\"project\"><a href=\"#\">${val}</a></div>\n    `\n    });\n    document.querySelector('.projects').innerHTML = project\n  },\n  projectOptions: (projects)=> {\n    let formProject = document.forms.todoForm.project;\n    let projectOptions = '';\n    projects.forEach((val, i) => {\n      projectOptions += `<option value=\"${val}\">${val}</option>`;\n    })\n    formProject.innerHTML = projectOptions;\n  }\n}\n\n//# sourceURL=webpack:///./src/dom-change.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_change__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-change */ \"./src/dom-change.js\");\n/* harmony import */ var _dom_change__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dom_change__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects */ \"./src/Projects.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nlet projects = [];\nclass TodoProject {\n  constructor(name = 'Default') {\n    this.name = name;\n    projects.push(name);\n  }\n}\nclass TodoItem {\n  constructor(title,\n    description,\n    dueDate = 'default',\n    priority = '5',\n    notes = '',\n    checklist = '',\n    project = projects[0]) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.notes = notes;\n    this.checklist = checklist;\n    this.project = project;\n  }\n}\n\nlet itemOne = new TodoItem('My work', 'na', new Date('2020-10-25T21:00'), '1', 'na', 'na');\nconsole.log(itemOne);\n\nwindow.onload = () => {\n  const defaultProject = new TodoProject();\n  new TodoProject('Yay')\n  Object(_dom_change__WEBPACK_IMPORTED_MODULE_0__[\"projectOptions\"])(projects);\n  Object(_dom_change__WEBPACK_IMPORTED_MODULE_0__[\"projectListNav\"])(projects);\n  document.getElementById('formToggle').addEventListener('click', (e)=> {\n    document.querySelector('.form-container').classList.remove('d-none');\n  });\n  document.querySelector('.form-container').addEventListener('click',(e)=>{\n    if(e.path[0].classList[0] == 'form-container'){\n      document.querySelector('.form-container').classList.add('d-none');\n    }\n  });\n  let p = Object(_Projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  p.addProject();\n  document.getElementById('projectToggle').addEventListener('click', (e)=> {\n    document.querySelector('.project-module').classList.remove('d-none');\n  });\n  document.querySelector('.project-module').addEventListener('click',(e)=>{\n    if(e.path[0].classList[0] == 'project-module'){\n      document.querySelector('.project-module').classList.add('d-none');\n    }\n  });\n\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ })

/******/ });