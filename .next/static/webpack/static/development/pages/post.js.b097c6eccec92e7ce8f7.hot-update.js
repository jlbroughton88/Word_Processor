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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Untitled Document"),
      docName = _useState[0],
      setDocName = _useState[1];

  var handleDocName = function handleDocName(e) {
    setDocName(e.target.value);
  };

  var highlightDocName = function highlightDocName(e) {
    e.target.select();
  };

  var getSelection = function getSelection(e) {
    var text = e.target.value; // for(let i = 0; i < text.length; i++) {

    if (text.includes(window.getSelection().toString())) {
      console.log("Yes it contains");
    } // }


    console.log(window.getSelection().toString());
  };

  return __jsx("div", {
    className: "postMother",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_comps_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("div", {
    className: "postMain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "editOptionsParent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "docNameInputDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("input", {
    onClick: function onClick(e) {
      return highlightDocName(e);
    },
    value: docName,
    onChange: function onChange(e) {
      return handleDocName(e);
    },
    className: "docNameInput",
    placeholder: "Untitled Document",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }))), __jsx("div", {
    className: "postInputParent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("textarea", {
    onMouseUp: function onMouseUp(e) {
      return getSelection(e);
    },
    placeholder: "Begin typing here...",
    minlength: "10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=post.js.b097c6eccec92e7ce8f7.hot-update.js.map