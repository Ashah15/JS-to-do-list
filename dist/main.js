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

/***/ "./src/Projects.js":
/*!*************************!*\
  !*** ./src/Projects.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_change__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-change */ \"./src/dom-change.js\");\n/* harmony import */ var _dom_change__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dom_change__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage */ \"./src/local-storage.js\");\n\n\n\nlet ldb = Object(_local_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n/// function projects(name, value) {\n//   this.name = name;\n//   this.value = value;\n// }\n\nlet projectList = ldb.getAr('projectList') == null ? ['Default'] : ldb.getAr('projectList');\nclass TodoProject {\n  constructor(name = 'Default') {\n    this.name = name;\n    projectList.push(name);\n    ldb.setAr('projectList',projectList);\n  }\n}\nconst Projects = () => {\n  const getList = () => {\n    return projectList;\n  }\n  const insertProject = (projectName) => {\n    new TodoProject(projectName)\n    Object(_dom_change__WEBPACK_IMPORTED_MODULE_0__[\"projectListNav\"])(projectList);\n    Object(_dom_change__WEBPACK_IMPORTED_MODULE_0__[\"projectOptions\"])(projectList);\n  }\n  const createFunction = () => {\n    const ProjectsDiv = document.createElement('div');\n    projectsDiv.setAttribute('class', 'projects mr-3');\n\n    for (let i = 0; i < projectList.length; i += 1) {\n      const projectSection = document.createElement('div');\n      projectSection.setAttribute('class', 'card p-3 mt-2');\n      const projectName = document.createElement('p');\n      projectName.setAttribute('class', 'project-text');\n      projectName.innerHTML = projectList[i].name;\n      const projectValue = document.createElement('p');\n      projectValue.innerHTML = projectList[i].value;\n\n      projectSection.appendChild(projectName);\n      projectSection.appendChild(projectValue);\n      ProjectsDiv.appendChild(projectSection);\n\n      const detailsProjectButton = document.createElement('button');\n      detailsProjectButton.innerHTML = 'View Details';\n      detailsProjectButton.setAttribute('class', 'btn btn-primary project-button');\n\n      projectSection.appendChild(detailsProjectButton);\n\n      detailsProjectButton.addEventListener('click', () => {\n        const toDoPageInstance = toDoPage();\n        toDoPageInstance.displayToDo(projectList[i].name, projectList[i].value);\n        document.querySelector('.projects').classList.add('hide-project');\n      });\n    }\n\n    document.querySelector('.all-content').appendChild(ProjectsDiv);\n  };\n\n  const addProject = () => {\n    const projectCard = document.createElement('div');\n    projectCard.setAttribute('class', 'project-module card d-none');\n    const projectForm = document.createElement('form');\n    projectForm.id = 'projectForm';\n    const projectFormH2 = document.createElement('h2');\n    const projectFormTitle = document.createTextNode('Enter the Project Name:');\n    projectFormH2.appendChild(projectFormTitle)\n    projectForm.appendChild(projectFormH2);\n    const projectLabel = document.createElement('label');\n    const projectInput = document.createElement('input');\n    projectInput.type = 'text';\n    projectInput.setAttribute('placeholder', 'Add new project');\n    projectInput.setAttribute('id', 'addproject');\n    projectInput.setAttribute('minlength', '3');\n    projectInput.required = true;\n\n    const submitProjectButton = document.createElement('button');\n    submitProjectButton.setAttribute('class', 'btn btn-success save-btn');\n    submitProjectButton.innerHTML = 'Submit';\n\n    const cancelProjectButton = document.createElement('button');\n    cancelProjectButton.setAttribute('class', 'btn btn-success cancel-btn');\n    cancelProjectButton.innerHTML = 'Cancel';\n\n    submitProjectButton.addEventListener('click', addToProjectList);\n    cancelProjectButton.addEventListener('click', (e) => {\n      e.preventDefault();\n      document.querySelector('.project-module').classList.add('d-none');})\n    projectLabel.appendChild(projectInput);\n    projectForm.appendChild(projectLabel);\n    projectForm.appendChild(submitProjectButton);\n    projectForm.appendChild(cancelProjectButton);\n    projectCard.appendChild(projectForm);\n    document.querySelector('#content').appendChild(projectCard);\n  };\n\n  const addToProjectList = (e) => {\n    e.preventDefault();\n    if(document.forms.projectForm.reportValidity()){\n      const newProjectName = document.querySelector('#addproject').value;\n      insertProject(newProjectName);\n      document.querySelector('.project-module').classList.add('d-none');\n      document.forms.projectForm.reset();\n    }\n  };\n\n  return { getList, insertProject, addProject, createFunction };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\n//# sourceURL=webpack:///./src/Projects.js?");

/***/ }),

/***/ "./src/dom-change.js":
/*!***************************!*\
  !*** ./src/dom-change.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const ldb = __webpack_require__(/*! ./local-storage */ \"./src/local-storage.js\").default;\n\nlet self = module.exports = {\n  projectListNav: (projects) => {\n    let project = '';\n    projects.forEach((val) => {\n      project += `\n    <li class=\"project\"><h4 data-info=\"${val}\">${val}</h4><span class=\"project-nav-options\">&raquo;</span></li>\n    `\n    });\n    project += `\n    <li class=\"all-project project\"><h4 data-info=\"all-projects\">View All Projects</h4></li>\n    `\n    document.querySelector('.projects').innerHTML = project;\n  },\n  projectOptions: (projects)=> {\n    let formProject = document.forms.todoForm.project;\n    let projectOptions = '';\n    projects.forEach((val, i) => {\n      projectOptions += `<option value=\"${val}\">${val}</option>`;\n    })\n    formProject.innerHTML = projectOptions;\n  },\n  projectListRightInfo: (projectList) => {\n    let rightSection = document.querySelector('.right-info .right-section:first-child');\n    let projectDOM = '';\n    projectList.forEach((project)=>{\n      projectDOM += `\n        <h4>${project}</h4>\n      `\n    });\n    rightSection.innerHTML = projectDOM;\n  },\n  changeNavCurrentActive: (node)=> {\n    let currentActive = document.querySelector('li.project[active]')\n    if(currentActive){\n      currentActive.removeAttribute('active');\n      node.setAttribute('active', '');\n    }else {\n      console.log(node)\n      node.setAttribute('active', '');\n    }\n  },\n  addListeners: () => {\n    document.getElementById('formToggle').addEventListener('click', (e)=> {\n    document.querySelector('.form-container').classList.remove('d-none');\n  });\n  document.querySelector('.form-container').addEventListener('click',(e)=>{\n    if(e.target.classList[0] == 'form-container'){\n      document.querySelector('.form-container').classList.add('d-none');\n    }\n  });\n \n  document.getElementById('projectToggle').addEventListener('click', (e)=> {\n    document.querySelector('.project-module').classList.remove('d-none');\n  });\n  document.querySelector('.project-module').addEventListener('click',(e)=>{\n    if(e.target.classList[0] == 'project-module'){\n      document.querySelector('.project-module').classList.add('d-none');\n    }\n  });\n\n  let allProjects = document.querySelectorAll('.projects .project h4');\n  allProjects.forEach((project)=> {\n    project.addEventListener('click',(e)=> {\n      if(e.target.getAttribute('data-info') === 'all-projects'){\n        let projectList = ldb().getAr('projectList')\n        self.projectListRightInfo(projectList);\n      }\n      self.changeNavCurrentActive(e.target);\n    })\n  });\n  },\n}\n\n//# sourceURL=webpack:///./src/dom-change.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_change__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-change */ \"./src/dom-change.js\");\n/* harmony import */ var _dom_change__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dom_change__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects */ \"./src/Projects.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './styles.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\nlet importedProject = Object(_Projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nwindow.onload = () => {\n  let projects = importedProject.getList();\n  Object(_dom_change__WEBPACK_IMPORTED_MODULE_0__[\"projectOptions\"])(projects);\n  Object(_dom_change__WEBPACK_IMPORTED_MODULE_0__[\"projectListNav\"])(projects);\n  importedProject.addProject();\n  Object(_dom_change__WEBPACK_IMPORTED_MODULE_0__[\"addListeners\"])();\n\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/local-storage.js":
/*!******************************!*\
  !*** ./src/local-storage.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst LocalDB = () => {\n\n  const getItem = (item) => {\n    return localStorage.getItem(item);\n  }\n  const setItem = (name, val) => {\n    localStorage.setItem(name, val);\n  }\n  const getAr = (item) => {\n    return  JSON.parse(localStorage.getItem(item));\n  }\n  const setAr = (key, val) => {\n    localStorage.setItem(key, JSON.stringify(val));\n  }\n  const del = (key) => {\n    localStorage.removeItem(key);\n  }\n\n  return { getItem, setItem, getAr, setAr, del }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LocalDB);\n\n//# sourceURL=webpack:///./src/local-storage.js?");

/***/ })

/******/ });