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

  var handleDocNameChange = function handleDocNameChange(e) {
    setDocName(e.target.value);
  };

  var highlightDocName = function highlightDocName(e) {
    e.target.select();
  }; // Set "anchors" around selected text
  // Count number of instances before last index of selection, use the last one


  var getSelection = function getSelection(e) {
    var text = e.target.value;
    var selectedText = window.getSelection().toString();

    if (text !== "" && selectedText !== "") {
      var selection = window.getSelection();
      var range = selection.getRangeAt(0);
      var regexText = new RegExp(selectedText, "g");
      var strMatch = text.match(selectedText);
      var regMatch = text.match(regexText);

      if (!selection.rangeCount) {
        return;
      }

      console.log(range.endContainer.firstElementChild.selectionStart);
      console.log(range.endContainer.firstElementChild.selectionEnd);
      console.log(selection);
      console.log(strMatch);
      console.log(regMatch);
      console.log(text.indexOf(regMatch[0]));
    }
  };

  return __jsx("div", {
    className: "postMother",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(_comps_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("div", {
    className: "postMain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: "editOptionsParent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "docNameInputDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("input", {
    onClick: function onClick(e) {
      return highlightDocName(e);
    },
    value: docName,
    onChange: function onChange(e) {
      return handleDocNameChange(e);
    },
    className: "docNameInput",
    placeholder: "Untitled Document",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }))), __jsx("div", {
    className: "postInputParent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("textarea", {
    onMouseUp: function onMouseUp(e) {
      return getSelection(e);
    },
    placeholder: "Begin typing here...",
    minLength: "10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=post.js.55c9657650cbe14c4944.hot-update.js.map