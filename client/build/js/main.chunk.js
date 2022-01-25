(this["webpackJsonp15-minutes"] = this["webpackJsonp15-minutes"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pics_TV_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pics/TV.png */ "./src/pics/TV.png");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Corben:wght@400;700&family=Racing+Sans+One&family=Work+Sans:wght@100;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_pics_TV_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  margin: 0 auto;\n  padding: 0;\n  margin: 0;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.App {\n  text-align: center;\n  font-family: 'Work Sans', sans-serif;\n  font-style: italic;\n  letter-spacing: .05rem;\n}\n\n.container {\n  font-family: 'Work Sans', sans-serif;\n  font-size: 1.2rem;\n  font-weight: 600;\n  padding: 1em;\n  width: 324px;\n  height: 482px;\n  margin: 2em auto 0 auto;\n  align-items: center;\n  text-align: center;\n  background-color: rgba(255, 251, 251, 0.3);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-blend-mode: lighten;\n  border: 15px solid #000000;\n  border-radius: 25%;\n  box-shadow: -20px 10px rgb(48, 47, 47);\n}\n\n.contentContainer {\n  font-size: .9rem;\n  letter-spacing: .1rem;\n  line-height: 1.3rem;\n  text-shadow: white -3px -3px;\n}\n\n.buttonsContainer {\n  display: flex;\n  font-weight: 600;\n  font-family: 'Work Sans', sans-serif;\n  width: 88%;\n  font-size: 1.1rem;\n  justify-content: space-between;\n  text-align: center;\n  margin: 0 auto;\n  z-index: 2;\n  margin-top: .7em;\n}\n\n.searchResultContainer {\n  width: 299px;\n  height: 717px;\n  margin: 0 auto;\n  background: #FFFFFF;\n  border: 5px solid #000000;\n  border-radius: 13px;\n}\n\n.searchBtnsContainer {\n  display: flex;\n  justify-content: center;\n  width: 23em;\n  margin: 0 auto;\n  padding: .3em;\n}\n\n.searchBtnUser,\n.searchBtnContent {\n  font-size: .4rem;\n  letter-spacing: .1rem;\n  line-height: .8rem;\n  text-transform: uppercase;\n  text-align: center;\n  width: 50px;\n  height: 50px;\n  margin: 0 .3em 0 .3em;\n  background: #FFFFFF;\n  border: 1px solid #000000;\n  box-sizing: border-box;\n  border-radius: 13px;\n  cursor: pointer;\n  padding: .1em;\n}\n\n.searchBtnUser:hover,\n.searchBtnContent:hover {\n  border: 3px solid aqua;\n}\n\n.searchBtnsContainer > input {\n  width: 266px;\n  height: 32px;\n  background: #FFFFFF;\n  border: 1px solid #000000;\n  box-sizing: border-box;\n  border-radius: 13px;\n}\n\n.showcaseResultContainer {\n  position: block;\n  width: 322px;\n  height: 597px;\n  margin: 0 auto;\n  background: #FFFFFF;\n  border: 5px solid #000000;\n  border-radius: 13px;\n}\n\n.selectBtn{\n  background: #FFFFFF;\n  border: 1px solid #000000;\n  box-sizing: border-box;\n  border-radius: 13px;\n  cursor: pointer;\n  margin: 0 .2em 1em .2em;\n  position: inline-block;\n  height: 32px;\n  width: 106px; \n  background: #FFFFFF;\n  font-size: .6rem;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  line-height: .8rem;\n  box-sizing: border-box;\n  border-radius: 13px;\n}\n\n.selectBtn:hover {\n  border: 4px solid aqua;\n}\n\n.showcaseBtnsContainer {\n  display: flex;\n  flex-wrap: wrap;\n  text-align: center;\n  align-items: center;\n  justify-content: space-between;\n  margin: .5em auto 1em auto;\n  width: 322px;\n  padding-bottom: .5em;\n}\n\n.hoveredLink {\n  color: magenta;\n  text-shadow: indigo -2px -2px;\n  transition: all .5s ease-in-out;\n}\n\n.hoveredButton {\n  border: 3px solid aqua;\n  transition: all .5s ease-in-out;\n}\n\n.active {\n  color: magenta;\n  text-shadow: indigo -2px -2px;\n  transition: all .5s ease-in-out;\n}\n\n.tweet {\n  border: 1px solid black;\n  border-radius: 13px;\n}\n\n.tweet_card {\n  text-align: left;\n}\n\n#buttonBorder {\n  border: 4px solid aqua;\n}\n\n#buttonBorderThin {\n  border: 3px solid aqua;\n}\n\n@media (min-width: 600px) {\n  .container {\n    width: 677px;\n    height: 470px;\n    margin: 3.5em auto 0 auto;\n  }\n\n  .contentContainer {\n    font-size: 1.3rem;\n    text-shadow: white -3px -3px;\n  }\n\n  .searchResultContainer {\n    width: 784px;\n    height: 930px;\n  }\n  .searchResult,\n  .showcaseResult {\n    position: relative; \n    border-left: 2px solid black;\n    border-right: 2px solid black;\n    border-top: 2px solid white;\n    border-bottom: 2px solid white;\n    margin: 0 auto;\n    width: 60%;\n    height: 100%; \n    overflow-y: scroll;\n    font-weight: 700;\n    padding: .4em;\n  }\n  \n  .showcaseResultContainer {\n    width: 778px;\n    height: 789px;\n    background: #FFFFFF;\n    border: 5px solid #000000;\n    border-radius: 13px;\n  }\n\n  .showcaseBtnsContainer {\n    width: 778px;\n  }\n}\n\n@media (min-width: 1025px) {\n\n  .container {\n    width: 857px;\n    height: 477px;\n    margin: 5em auto 0 auto;\n  }\n\n  .contentContainer {\n    font-size: 1.2rem;\n    text-shadow: white -3px -3px;\n  }\n  .buttonsContainer { \n    width: 40%;\n  }\n \n  .searchResultContainer {\n    width: 1232px;\n    height: 697px;\n    /* left: 104px;\n    top: 243px; */\n  }\n\n  .showcaseResultContainer {\n    width: 1219px;\n    height: 583px;\n    background: #FFFFFF;\n    border: 5px solid #000000;\n    border-radius: 13px;\n  }\n  .showcaseBtnsContainer {\n    width: 1219px;\n  }\n\n}", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,UAAU;EACV,SAAS;AACX;;AAEA;EACE,sBAAsB;AACxB;;AAIA;EACE,kBAAkB;EAClB,oCAAoC;EACpC,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,oCAAoC;EACpC,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,0CAA0C;EAC1C,yDAAsC;EACtC,8BAA8B;EAC9B,0BAA0B;EAC1B,kBAAkB;EAClB,sCAAsC;AACxC;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,mBAAmB;EACnB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,oCAAoC;EACpC,UAAU;EACV,iBAAiB;EACjB,8BAA8B;EAC9B,kBAAkB;EAClB,cAAc;EACd,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,WAAW;EACX,cAAc;EACd,aAAa;AACf;;AAEA;;EAEE,gBAAgB;EAChB,qBAAqB;EACrB,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,mBAAmB;EACnB,yBAAyB;EACzB,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,aAAa;AACf;;AAEA;;EAEE,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;EACzB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,uBAAuB;EACvB,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;EAChB,qBAAqB;EACrB,yBAAyB;EACzB,kBAAkB;EAClB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,8BAA8B;EAC9B,0BAA0B;EAC1B,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,cAAc;EACd,6BAA6B;EAC7B,+BAA+B;AACjC;;AAEA;EACE,sBAAsB;EACtB,+BAA+B;AACjC;;AAEA;EACE,cAAc;EACd,6BAA6B;EAC7B,+BAA+B;AACjC;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE;IACE,YAAY;IACZ,aAAa;IACb,yBAAyB;EAC3B;;EAEA;IACE,iBAAiB;IACjB,4BAA4B;EAC9B;;EAEA;IACE,YAAY;IACZ,aAAa;EACf;EACA;;IAEE,kBAAkB;IAClB,4BAA4B;IAC5B,6BAA6B;IAC7B,2BAA2B;IAC3B,8BAA8B;IAC9B,cAAc;IACd,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;EACf;;EAEA;IACE,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;EACrB;;EAEA;IACE,YAAY;EACd;AACF;;AAEA;;EAEE;IACE,YAAY;IACZ,aAAa;IACb,uBAAuB;EACzB;;EAEA;IACE,iBAAiB;IACjB,4BAA4B;EAC9B;EACA;IACE,UAAU;EACZ;;EAEA;IACE,aAAa;IACb,aAAa;IACb;iBACa;EACf;;EAEA;IACE,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;EACrB;EACA;IACE,aAAa;EACf;;AAEF","sourcesContent":["body {\n  margin: 0 auto;\n  padding: 0;\n  margin: 0;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Corben:wght@400;700&family=Racing+Sans+One&family=Work+Sans:wght@100;900&display=swap');\n\n.App {\n  text-align: center;\n  font-family: 'Work Sans', sans-serif;\n  font-style: italic;\n  letter-spacing: .05rem;\n}\n\n.container {\n  font-family: 'Work Sans', sans-serif;\n  font-size: 1.2rem;\n  font-weight: 600;\n  padding: 1em;\n  width: 324px;\n  height: 482px;\n  margin: 2em auto 0 auto;\n  align-items: center;\n  text-align: center;\n  background-color: rgba(255, 251, 251, 0.3);\n  background-image: url('./pics/TV.png');\n  background-blend-mode: lighten;\n  border: 15px solid #000000;\n  border-radius: 25%;\n  box-shadow: -20px 10px rgb(48, 47, 47);\n}\n\n.contentContainer {\n  font-size: .9rem;\n  letter-spacing: .1rem;\n  line-height: 1.3rem;\n  text-shadow: white -3px -3px;\n}\n\n.buttonsContainer {\n  display: flex;\n  font-weight: 600;\n  font-family: 'Work Sans', sans-serif;\n  width: 88%;\n  font-size: 1.1rem;\n  justify-content: space-between;\n  text-align: center;\n  margin: 0 auto;\n  z-index: 2;\n  margin-top: .7em;\n}\n\n.searchResultContainer {\n  width: 299px;\n  height: 717px;\n  margin: 0 auto;\n  background: #FFFFFF;\n  border: 5px solid #000000;\n  border-radius: 13px;\n}\n\n.searchBtnsContainer {\n  display: flex;\n  justify-content: center;\n  width: 23em;\n  margin: 0 auto;\n  padding: .3em;\n}\n\n.searchBtnUser,\n.searchBtnContent {\n  font-size: .4rem;\n  letter-spacing: .1rem;\n  line-height: .8rem;\n  text-transform: uppercase;\n  text-align: center;\n  width: 50px;\n  height: 50px;\n  margin: 0 .3em 0 .3em;\n  background: #FFFFFF;\n  border: 1px solid #000000;\n  box-sizing: border-box;\n  border-radius: 13px;\n  cursor: pointer;\n  padding: .1em;\n}\n\n.searchBtnUser:hover,\n.searchBtnContent:hover {\n  border: 3px solid aqua;\n}\n\n.searchBtnsContainer > input {\n  width: 266px;\n  height: 32px;\n  background: #FFFFFF;\n  border: 1px solid #000000;\n  box-sizing: border-box;\n  border-radius: 13px;\n}\n\n.showcaseResultContainer {\n  position: block;\n  width: 322px;\n  height: 597px;\n  margin: 0 auto;\n  background: #FFFFFF;\n  border: 5px solid #000000;\n  border-radius: 13px;\n}\n\n.selectBtn{\n  background: #FFFFFF;\n  border: 1px solid #000000;\n  box-sizing: border-box;\n  border-radius: 13px;\n  cursor: pointer;\n  margin: 0 .2em 1em .2em;\n  position: inline-block;\n  height: 32px;\n  width: 106px; \n  background: #FFFFFF;\n  font-size: .6rem;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  line-height: .8rem;\n  box-sizing: border-box;\n  border-radius: 13px;\n}\n\n.selectBtn:hover {\n  border: 4px solid aqua;\n}\n\n.showcaseBtnsContainer {\n  display: flex;\n  flex-wrap: wrap;\n  text-align: center;\n  align-items: center;\n  justify-content: space-between;\n  margin: .5em auto 1em auto;\n  width: 322px;\n  padding-bottom: .5em;\n}\n\n.hoveredLink {\n  color: magenta;\n  text-shadow: indigo -2px -2px;\n  transition: all .5s ease-in-out;\n}\n\n.hoveredButton {\n  border: 3px solid aqua;\n  transition: all .5s ease-in-out;\n}\n\n.active {\n  color: magenta;\n  text-shadow: indigo -2px -2px;\n  transition: all .5s ease-in-out;\n}\n\n.tweet {\n  border: 1px solid black;\n  border-radius: 13px;\n}\n\n.tweet_card {\n  text-align: left;\n}\n\n#buttonBorder {\n  border: 4px solid aqua;\n}\n\n#buttonBorderThin {\n  border: 3px solid aqua;\n}\n\n@media (min-width: 600px) {\n  .container {\n    width: 677px;\n    height: 470px;\n    margin: 3.5em auto 0 auto;\n  }\n\n  .contentContainer {\n    font-size: 1.3rem;\n    text-shadow: white -3px -3px;\n  }\n\n  .searchResultContainer {\n    width: 784px;\n    height: 930px;\n  }\n  .searchResult,\n  .showcaseResult {\n    position: relative; \n    border-left: 2px solid black;\n    border-right: 2px solid black;\n    border-top: 2px solid white;\n    border-bottom: 2px solid white;\n    margin: 0 auto;\n    width: 60%;\n    height: 100%; \n    overflow-y: scroll;\n    font-weight: 700;\n    padding: .4em;\n  }\n  \n  .showcaseResultContainer {\n    width: 778px;\n    height: 789px;\n    background: #FFFFFF;\n    border: 5px solid #000000;\n    border-radius: 13px;\n  }\n\n  .showcaseBtnsContainer {\n    width: 778px;\n  }\n}\n\n@media (min-width: 1025px) {\n\n  .container {\n    width: 857px;\n    height: 477px;\n    margin: 5em auto 0 auto;\n  }\n\n  .contentContainer {\n    font-size: 1.2rem;\n    text-shadow: white -3px -3px;\n  }\n  .buttonsContainer { \n    width: 40%;\n  }\n \n  .searchResultContainer {\n    width: 1232px;\n    height: 697px;\n    /* left: 104px;\n    top: 243px; */\n  }\n\n  .showcaseResultContainer {\n    width: 1219px;\n    height: 583px;\n    background: #FFFFFF;\n    border: 5px solid #000000;\n    border-radius: 13px;\n  }\n  .showcaseBtnsContainer {\n    width: 1219px;\n  }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _Showcase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Showcase */ "./src/Showcase.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Search */ "./src/Search.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Home */ "./src/Home.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/casvalkyriespicer/Documents/GitHub/15-minutes/client/src/App.js";








function App() {
  const [hoveredSearch, setHoveredSearch] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const [hoveredHome, setHoveredHome] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const [hoveredShow, setHoveredShow] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  function handleHoverOverSearch() {
    setHoveredSearch('hoveredLink');
  }

  function handleHoverOutSearch() {
    setHoveredSearch('');
  }

  function handleHoverOverHome() {
    setHoveredHome('hoveredLink');
  }

  function handleHoverOutHome() {
    setHoveredHome('');
  }

  function handleHoverOverShow() {
    setHoveredShow('hoveredLink');
  }

  function handleHoverOutShow() {
    setHoveredShow('');
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      className: "App",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "buttonsContainer",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
          exact: "true",
          activeclassname: "active",
          to: "/search",
          style: {
            textDecoration: 'none'
          },
          onMouseEnter: handleHoverOverSearch,
          onMouseLeave: handleHoverOutSearch,
          className: hoveredSearch,
          children: "Search Tweets"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
          exact: "true",
          activeclassname: "active",
          to: "/",
          style: {
            textDecoration: 'none'
          },
          onMouseEnter: handleHoverOverHome,
          onMouseLeave: handleHoverOutHome,
          className: hoveredHome,
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
          exact: "true",
          activeclassname: "active",
          to: "/showcase",
          style: {
            textDecoration: 'none'
          },
          onMouseEnter: handleHoverOverShow,
          onMouseLeave: handleHoverOutShow,
          className: hoveredShow,
          children: "Go to Showcase"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Routes"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/search",
          element: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Search__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 44
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/showcase",
          element: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Showcase__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 46
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/",
          element: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Home__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 38
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/casvalkyriespicer/Documents/GitHub/15-minutes/client/src/Home.js";



function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "contentContainer",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
          children: "15 Minutes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: ["A new way to search Twitter.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 21
          }, this), "How will you use your 15 minutes?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 21
          }, this), "Select \u2018Go to Showcase\u2019 to browse tweets from celebrities using their fame for good."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: ["Why did I build this?  Read the blog post ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            href: "#",
            children: "here."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 66
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/Image.js":
/*!**********************!*\
  !*** ./src/Image.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Image; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/casvalkyriespicer/Documents/GitHub/15-minutes/client/src/Image.js";


function Image(props) {
  console.log(props.result);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
      src: props.result.url,
      alt: "image",
      width: "100%",
      style: {
        borderRadius: `13px`
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/ProfileImage.js":
/*!*****************************!*\
  !*** ./src/ProfileImage.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProfileImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/casvalkyriespicer/Documents/GitHub/15-minutes/client/src/ProfileImage.js";


function ProfileImage(props) {
  console.log(props);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
      src: props.url ? props.url : '',
      alt: "profile image",
      width: "100%",
      style: {
        borderRadius: `50%`,
        height: `3em`,
        width: `3em`
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 11
  }, this);
}

/***/ }),

/***/ "./src/Search.js":
/*!***********************!*\
  !*** ./src/Search.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pics_TV_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pics/TV.png */ "./src/pics/TV.png");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TweetCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TweetCard */ "./src/TweetCard.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/casvalkyriespicer/Documents/GitHub/15-minutes/client/src/Search.js";






function Search() {
  const [searchresult, setSearchresult] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [getByUserButton, setGetByUserButton] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [getByContentButton, setGetByContentButton] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [inputValue, setInputValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [errorValueUser, setErrorValueUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [errorValueContent, setErrorValueContent] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [errorValueCharacters, setErrorValueCharacters] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [errorValueAuthorized, setErrorValueAuthorized] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  async function searchTweets() {
    try {
      var search = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/api/searchdata?search=${inputValue}`);
      return search;
    } catch (err) {
      console.log(err);
    }
  }

  async function searchByUsername() {
    try {
      var search = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/api/searchByUsername?search=${inputValue}`);
      return search;
    } catch (err) {
      console.log(err);
    }
  }

  async function searchUser(id) {
    try {
      var search = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/api/searchByUser?search=${id}`);
      return search;
    } catch (err) {
      console.log(err);
    }
  }

  function handleClickUser() {
    setErrorValueCharacters('');
    setSearchresult([]);
    setGetByContentButton(false);
    setGetByUserButton(true);
    setErrorValueContent(false);
  }

  function handleClickContent() {
    if (!/^[a-zA-Z0-9]+$/.test(inputValue)) {
      setErrorValueCharacters('Please enter only text - no special characters!');
    } else {
      setErrorValueCharacters('');
      setSearchresult([]);
      setGetByUserButton(false);
      setGetByContentButton(true);
      setErrorValueUser(false);
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (getByUserButton) {
      searchByUsername().then(res => {
        if (Object.keys(res.data).length === 0 || Object.keys(res.data).includes('stack')) {
          setErrorValueUser(true);
          setGetByUserButton(false);
        } else {
          setErrorValueUser(false);
          let usernameArray = res.data.data;
          usernameArray.forEach(element => {
            searchUser(element.id).then(res => {
              if (Object.keys(res.data).includes('errors')) {
                setErrorValueAuthorized("I'm sorry, that user has hidden their tweets from view.  Please try again.");
              } else {
                setErrorValueAuthorized('');
                setSearchresult([{
                  id: res.data[0].id,
                  dateString: res.data[0].dateString,
                  name: res.data[0].name,
                  username: res.data[0].username,
                  verified: res.data[0].verified,
                  profile_image_url: res.data[0].profile_image_url,
                  tweetString: res.data[0].tweetString,
                  url: res.data[0].url,
                  type: res.data[0].type,
                  like_count: res.data[0].like_count,
                  retweet_count: res.data[0].retweet_count,
                  url_string: res.data[0].url_string
                }, {
                  id: res.data[1].id,
                  dateString: res.data[1].dateString,
                  name: res.data[1].name,
                  username: res.data[1].username,
                  verified: res.data[1].verified,
                  profile_image_url: res.data[1].profile_image_url,
                  tweetString: res.data[1].tweetString,
                  url: res.data[1].url,
                  type: res.data[1].type,
                  like_count: res.data[1].like_count,
                  retweet_count: res.data[1].retweet_count,
                  url_string: res.data[1].url_string
                }, {
                  id: res.data[2].id,
                  dateString: res.data[2].dateString,
                  name: res.data[2].name,
                  username: res.data[2].username,
                  verified: res.data[2].verified,
                  profile_image_url: res.data[2].profile_image_url,
                  tweetString: res.data[2].tweetString,
                  url: res.data[2].url,
                  type: res.data[2].type,
                  like_count: res.data[2].like_count,
                  retweet_count: res.data[2].retweet_count,
                  url_string: res.data[2].url_string
                }, {
                  id: res.data[3].id,
                  dateString: res.data[3].dateString,
                  name: res.data[3].name,
                  username: res.data[3].username,
                  verified: res.data[3].verified,
                  profile_image_url: res.data[3].profile_image_url,
                  tweetString: res.data[3].tweetString,
                  url: res.data[3].url,
                  type: res.data[3].type,
                  like_count: res.data[3].like_count,
                  retweet_count: res.data[3].retweet_count,
                  url_string: res.data[3].url_string
                }, {
                  id: res.data[4].id,
                  dateString: res.data[4].dateString,
                  name: res.data[4].name,
                  username: res.data[4].username,
                  verified: res.data[4].verified,
                  profile_image_url: res.data[4].profile_image_url,
                  tweetString: res.data[4].tweetString,
                  url: res.data[4].url,
                  type: res.data[4].type,
                  like_count: res.data[4].like_count,
                  retweet_count: res.data[4].retweet_count,
                  url_string: res.data[4].url_string
                }, {
                  id: res.data[5].id,
                  dateString: res.data[5].dateString,
                  name: res.data[5].name,
                  username: res.data[5].username,
                  verified: res.data[5].verified,
                  profile_image_url: res.data[5].profile_image_url,
                  tweetString: res.data[5].tweetString,
                  url: res.data[5].url,
                  type: res.data[5].type,
                  like_count: res.data[5].like_count,
                  retweet_count: res.data[5].retweet_count,
                  url_string: res.data[5].url_string
                }, {
                  id: res.data[6].id,
                  dateString: res.data[6].dateString,
                  name: res.data[6].name,
                  username: res.data[6].username,
                  verified: res.data[6].verified,
                  profile_image_url: res.data[6].profile_image_url,
                  tweetString: res.data[6].tweetString,
                  url: res.data[6].url,
                  type: res.data[6].type,
                  like_count: res.data[6].like_count,
                  retweet_count: res.data[6].retweet_count,
                  url_string: res.data[6].url_string
                }, {
                  id: res.data[7].id,
                  dateString: res.data[7].dateString,
                  name: res.data[7].name,
                  username: res.data[7].username,
                  verified: res.data[7].verified,
                  profile_image_url: res.data[7].profile_image_url,
                  tweetString: res.data[7].tweetString,
                  url: res.data[7].url,
                  type: res.data[7].type,
                  like_count: res.data[7].like_count,
                  retweet_count: res.data[7].retweet_count,
                  url_string: res.data[7].url_string
                }, {
                  id: res.data[8].id,
                  dateString: res.data[8].dateString,
                  name: res.data[8].name,
                  username: res.data[8].username,
                  verified: res.data[8].verified,
                  profile_image_url: res.data[8].profile_image_url,
                  tweetString: res.data[8].tweetString,
                  url: res.data[8].url,
                  type: res.data[8].type,
                  like_count: res.data[8].like_count,
                  retweet_count: res.data[8].retweet_count,
                  url_string: res.data[8].url_string
                }, {
                  id: res.data[9].id,
                  dateString: res.data[9].dateString,
                  name: res.data[9].name,
                  username: res.data[9].username,
                  verified: res.data[9].verified,
                  profile_image_url: res.data[9].profile_image_url,
                  tweetString: res.data[9].tweetString,
                  url: res.data[9].url,
                  type: res.data[9].type,
                  like_count: res.data[9].like_count,
                  retweet_count: res.data[9].retweet_count,
                  url_string: res.data[9].url_string
                }]);
              }

              setGetByUserButton(false);
            });
          });
        }
      });
    } else if (getByContentButton) {
      searchTweets().then(res => {
        if (Object.keys(res.data).length === 0 || Object.keys(res.data).includes('stack')) {
          setErrorValueContent(true);
          setGetByContentButton(false);
        } else {
          setErrorValueAuthorized('');
          setSearchresult([{
            id: res.data[0].id,
            dateString: res.data[0].dateString,
            name: res.data[0].name,
            username: res.data[0].username,
            verified: res.data[0].verified,
            profile_image_url: res.data[0].profile_image_url,
            tweetString: res.data[0].tweetString,
            url: res.data[0].url,
            type: res.data[0].type,
            like_count: res.data[0].like_count,
            retweet_count: res.data[0].retweet_count,
            url_string: res.data[0].url_string
          }, {
            id: res.data[1].id,
            dateString: res.data[1].dateString,
            name: res.data[1].name,
            username: res.data[1].username,
            verified: res.data[1].verified,
            profile_image_url: res.data[1].profile_image_url,
            tweetString: res.data[1].tweetString,
            url: res.data[1].url,
            type: res.data[1].type,
            like_count: res.data[1].like_count,
            retweet_count: res.data[1].retweet_count,
            url_string: res.data[1].url_string
          }, {
            id: res.data[2].id,
            dateString: res.data[2].dateString,
            name: res.data[2].name,
            username: res.data[2].username,
            verified: res.data[2].verified,
            profile_image_url: res.data[2].profile_image_url,
            tweetString: res.data[2].tweetString,
            url: res.data[2].url,
            type: res.data[2].type,
            like_count: res.data[2].like_count,
            retweet_count: res.data[2].retweet_count,
            url_string: res.data[2].url_string
          }, {
            id: res.data[3].id,
            dateString: res.data[3].dateString,
            name: res.data[3].name,
            username: res.data[3].username,
            verified: res.data[3].verified,
            profile_image_url: res.data[3].profile_image_url,
            tweetString: res.data[3].tweetString,
            url: res.data[3].url,
            type: res.data[3].type,
            like_count: res.data[3].like_count,
            retweet_count: res.data[3].retweet_count,
            url_string: res.data[3].url_string
          }, {
            id: res.data[4].id,
            dateString: res.data[4].dateString,
            name: res.data[4].name,
            username: res.data[4].username,
            verified: res.data[4].verified,
            profile_image_url: res.data[4].profile_image_url,
            tweetString: res.data[4].tweetString,
            url: res.data[4].url,
            type: res.data[4].type,
            like_count: res.data[4].like_count,
            retweet_count: res.data[4].retweet_count,
            url_string: res.data[4].url_string
          }, {
            id: res.data[5].id,
            dateString: res.data[5].dateString,
            name: res.data[5].name,
            username: res.data[5].username,
            verified: res.data[5].verified,
            profile_image_url: res.data[5].profile_image_url,
            tweetString: res.data[5].tweetString,
            url: res.data[5].url,
            type: res.data[5].type,
            like_count: res.data[5].like_count,
            retweet_count: res.data[5].retweet_count,
            url_string: res.data[5].url_string
          }, {
            id: res.data[6].id,
            dateString: res.data[6].dateString,
            name: res.data[6].name,
            username: res.data[6].username,
            verified: res.data[6].verified,
            profile_image_url: res.data[6].profile_image_url,
            tweetString: res.data[6].tweetString,
            url: res.data[6].url,
            type: res.data[6].type,
            like_count: res.data[6].like_count,
            retweet_count: res.data[6].retweet_count,
            url_string: res.data[6].url_string
          }, {
            id: res.data[7].id,
            dateString: res.data[7].dateString,
            name: res.data[7].name,
            username: res.data[7].username,
            verified: res.data[7].verified,
            profile_image_url: res.data[7].profile_image_url,
            tweetString: res.data[7].tweetString,
            url: res.data[7].url,
            type: res.data[7].type,
            like_count: res.data[7].like_count,
            retweet_count: res.data[7].retweet_count,
            url_string: res.data[7].url_string
          }, {
            id: res.data[8].id,
            dateString: res.data[8].dateString,
            name: res.data[8].name,
            username: res.data[8].username,
            verified: res.data[8].verified,
            profile_image_url: res.data[8].profile_image_url,
            tweetString: res.data[8].tweetString,
            url: res.data[8].url,
            type: res.data[8].type,
            like_count: res.data[8].like_count,
            retweet_count: res.data[8].retweet_count,
            url_string: res.data[8].url_string
          }, {
            id: res.data[9].id,
            dateString: res.data[9].dateString,
            name: res.data[9].name,
            username: res.data[9].username,
            verified: res.data[9].verified,
            profile_image_url: res.data[9].profile_image_url,
            tweetString: res.data[9].tweetString,
            url: res.data[9].url,
            type: res.data[9].type,
            like_count: res.data[9].like_count,
            retweet_count: res.data[9].retweet_count,
            url_string: res.data[9].url_string
          }]);
          setGetByContentButton(false);
        }
      });
    }
  }, [getByUserButton, getByContentButton]);
  const tweetCards = searchresult.map(tweet => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_TweetCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      dateString: tweet.dateString,
      created_at: tweet.created_at,
      name: tweet.name,
      username: tweet.username,
      verified: tweet.verified,
      profile_image_url: tweet.profile_image_url,
      tweetString: tweet.tweetString,
      type: tweet.type,
      url: tweet.url,
      like_count: tweet.like_count,
      retweet_count: tweet.retweet_count,
      url_string: tweet.url_string
    }, tweet.id, false, {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 12
    }, this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: "searchContainer",
    style: {
      position: 'absolute',
      top: '50px',
      left: '0px',
      width: '100vw',
      height: '100%',
      backgroundColor: 'rgba(255, 251, 251, 0.3)',
      backgroundImage: `url(${_pics_TV_png__WEBPACK_IMPORTED_MODULE_2__["default"]})`,
      backgroundBlendMode: 'lighten',
      zIndex: '1'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "searchBtnsContainer",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
        className: "searchBtnUser",
        onClick: handleClickUser,
        children: "Search by User"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 415,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
        className: "searchBtnContent",
        onClick: handleClickContent,
        children: "Search by Content"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
        type: "text",
        placeholder: "Type search item here...",
        value: inputValue,
        onChange: event => setInputValue(event.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 423,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "searchResultContainer",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "searchResult",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
          children: errorValueUser ? `I couldn't find anyone Twitter by the username ${inputValue}.  May I recommend searching for Marilyn Monroe?` : ``
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 433,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
          children: errorValueContent ? `We couldn't find anything under ${inputValue}, but you can shop for tomato soup here.` : ``
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 434,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
          children: errorValueCharacters
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 435,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
          children: errorValueAuthorized
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 436,
          columnNumber: 21
        }, this), tweetCards]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 431,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
        style: {
          fontWeight: `600`,
          paddingBottom: `1em`
        },
        children: ["Why did I build this?  Read the blog post ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
          href: "#",
          children: "here."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 446,
          columnNumber: 64
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 441,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 401,
    columnNumber: 9
  }, this);
} //encodeURIComponent

/***/ }),

/***/ "./src/Showcase.js":
/*!*************************!*\
  !*** ./src/Showcase.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Showcase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pics_TV_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pics/TV.png */ "./src/pics/TV.png");
/* harmony import */ var _ShowcaseResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShowcaseResult */ "./src/ShowcaseResult.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/casvalkyriespicer/Documents/GitHub/15-minutes/client/src/Showcase.js";






function Showcase() {
  const [show, setShow] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [buttonpushed, setButtonpushed] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [id, setId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  function handleClickGaga(event) {
    event.preventDefault();
    setButtonpushed('Lady Gaga');
    setId(14230524);
  }

  function handleClickOprah(event) {
    event.preventDefault();
    setButtonpushed('Oprah Winfrey');
    setId(19397785);
  }

  function handleClickReese(event) {
    event.preventDefault();
    setButtonpushed('Reese Witherspoon');
    setId(1198406491);
  }

  function handleClickAshton(event) {
    event.preventDefault();
    setButtonpushed('Ashton Kutcher');
    setId(19058681);
  }

  function handleClickBeyonce(event) {
    event.preventDefault();
    setButtonpushed('Beyonce Knowles');
    setId(31239408);
  }

  async function searchUser() {
    try {
      var search = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(`/api/searchByUser?search=${id}`);
      return search;
    } catch (err) {
      console.log(err);
    }
  }

  function getRandomNum() {
    let num = Math.round(Math.random() * 10);
    return num;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (buttonpushed) {
      setShow('');
      searchUser().then(res => {
        const randomTweet = res.data[getRandomNum()];
        setShow({
          type: randomTweet.type,
          url: randomTweet.url,
          retweet_count: randomTweet.retweet_count,
          like_count: randomTweet.like_count,
          dateString: randomTweet.dateString,
          id: randomTweet.id,
          name: randomTweet.name,
          username: randomTweet.username,
          verified: randomTweet.verified,
          profile_image_url: randomTweet.profile_image_url,
          tweetString: randomTweet.tweetString,
          url_string: randomTweet.url_string
        });
      });
    } else {
      setButtonpushed('');
    }
  }, [buttonpushed]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: "showcaseContainer",
    style: {
      position: 'absolute',
      top: '50px',
      left: '0px',
      width: '100vw',
      height: '100%',
      backgroundColor: 'rgba(255, 251, 251, 0.3)',
      backgroundImage: `url(${_pics_TV_png__WEBPACK_IMPORTED_MODULE_2__["default"]})`,
      backgroundBlendMode: 'lighten',
      zIndex: '1'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "showcaseBtnsContainer"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
      className: "selectBtn",
      onClick: handleClickGaga,
      children: "Gaga"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
      className: "selectBtn",
      onClick: handleClickOprah,
      children: "Oprah"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
      className: "selectBtn",
      onClick: handleClickReese,
      children: "Reese"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
      className: "selectBtn",
      onClick: handleClickAshton,
      children: "Ashton"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
      className: "selectBtn",
      onClick: handleClickBeyonce,
      children: "Beyonce"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "showcaseResultContainer",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "showcaseResult",
          children: [buttonpushed, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ShowcaseResult__WEBPACK_IMPORTED_MODULE_3__["default"], {
            result: {
              tweet: show,
              celebrity: buttonpushed,
              toggleDisplay: 'true'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
      style: {
        fontWeight: `600`,
        paddingBottom: `1em`
      },
      children: ["Why did I build this?  Read the blog post ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
        href: "#",
        children: "here."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 60
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/ShowcaseResult.js":
/*!*******************************!*\
  !*** ./src/ShowcaseResult.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowcaseResult; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Image_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image.js */ "./src/Image.js");
/* harmony import */ var _ProfileImage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileImage.js */ "./src/ProfileImage.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/casvalkyriespicer/Documents/GitHub/15-minutes/client/src/ShowcaseResult.js";




function ShowcaseResult(props) {
  console.log(props.result);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    style: {
      border: `1px solid black`,
      borderRadius: `13px`,
      fontWeight: `400`,
      fontStyle: `normal`,
      padding: `.5em`,
      margin: `.4em auto .4em auto`
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
      children: props.result.tweet.dateString ? props.result.tweet.dateString : ''
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this), props.result.tweet.profile_image_url ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_ProfileImage_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      url: props.result.tweet.profile_image_url
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 53
    }, this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
      children: [props.result.tweet.name ? props.result.tweet.name : '', " ", props.result.tweet.verified ? `☑️` : '']
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
      children: props.result.tweet.username ? `@${props.result.tweet.username}` : ''
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
      children: props.result.tweet.tweetString ? props.result.tweet.tweetString : 'Select a celebrity above to view one of their recent tweets.'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
        href: props.result.tweet.url_string ? props.result.tweet.url_string : '',
        children: props.result.tweet.url_string ? props.result.tweet.url_string : ''
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 16
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), props.result.tweet.type === 'photo' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_Image_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      result: props.result.tweet
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 52
    }, this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
      children: [" ", props.result.tweet.like_count ? `💚: ${props.result.tweet.like_count}` : '']
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
      children: [" ", props.result.tweet.retweet_count ? `🔁: ${props.result.tweet.retweet_count}` : '']
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/TweetCard.js":
/*!**************************!*\
  !*** ./src/TweetCard.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TweetCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Image_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image.js */ "./src/Image.js");
/* harmony import */ var _ProfileImage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileImage.js */ "./src/ProfileImage.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/casvalkyriespicer/Documents/GitHub/15-minutes/client/src/TweetCard.js";




function TweetCard(props) {
  console.log(props);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "tweet_card",
    style: {
      border: `1px solid black`,
      borderRadius: `13px`,
      fontWeight: `400`,
      fontStyle: `normal`,
      padding: `.5em`,
      margin: `.4em auto .4em auto`
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      style: {
        //width:`30em`,
        display: 'flex'
      },
      children: [props.profile_image_url ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_ProfileImage_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        url: props.profile_image_url
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 40
      }, this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        style: {
          display: 'flex'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          style: {
            padding: `.4em`,
            marginRight: `3em`
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            children: [props.name ? props.name : '', " ", props.verified ? `☑️` : '', " ", props.dateString ? props.dateString : '']
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            children: props.username ? `@${props.username}` : ''
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            children: props.tweetString ? props.tweetString : ''
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
              href: props.url_string ? props.url_string : '',
              children: props.url_string ? props.url_string : ''
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 24
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 21
          }, this), props.type === 'photo' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_Image_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
            result: props
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 47
          }, this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            children: [" ", props.like_count ? `💚: ${props.like_count}` : '']
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            children: [" ", props.retweet_count ? `🔁: ${props.retweet_count}` : '']
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/casvalkyriespicer/Documents/GitHub/15-minutes/client/src/index.js";







react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 3
}, undefined), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__["default"])();

/***/ }),

/***/ "./src/pics/TV.png":
/*!*************************!*\
  !*** ./src/pics/TV.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "media/TV.28380c92.png");

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js")).then(_ref => {
      let {
        getCLS,
        getFID,
        getFCP,
        getLCP,
        getTTFB
      } = _ref;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/casvalkyriespicer/Documents/GitHub/15-minutes/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/casvalkyriespicer/Documents/GitHub/15-minutes/client/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map