webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _comps_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comps/navbar */ "./pages/comps/navbar.js");
/* harmony import */ var _public_static_css_post_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/static/css/post.scss */ "./public/static/css/post.scss");
/* harmony import */ var _public_static_css_post_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_post_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/JacobBroughton/coding/projects/Word_Processor/pages/post.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Post = function Post() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      docName = _useState[0],
      setDocName = _useState[1];

  var handleDocName = function handleDocName(e) {
    setDocName(e.target.value);
  };

  var mouseUp = function mouseUp(e) {
    console.log(window.getSelection().toString());
    console.log("yeet");
  };

  return __jsx("div", {
    className: "postMother",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_comps_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("div", {
    className: "postMain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "editOptionsParent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "docNameInputDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("input", {
    value: docName,
    onChange: function onChange(e) {
      return handleDocName(e);
    },
    className: "docNameInput",
    placeholder: "Untitled Document",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }))), __jsx("div", {
    className: "postInputParent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("textarea", {
    onMouseUp: function onMouseUp(e) {
      return mouseUp(e);
    },
    placeholder: "Begin typing here...",
    minlength: "10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=post.js.d60509694c594a6de63a.hot-update.js.map