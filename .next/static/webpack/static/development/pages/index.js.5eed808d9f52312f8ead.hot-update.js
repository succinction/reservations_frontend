webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ResponseMessage.js":
/*!***************************************!*\
  !*** ./components/ResponseMessage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Accordion */ "./components/Accordion.js");






var _jsxFileName = "C:\\Users\\succi\\Documents\\PROJECTS\\REACT\\reservation\\reservations-hotel\\components\\ResponseMessage.js";




var ResponseMessage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ResponseMessage, _React$Component);

  function ResponseMessage(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ResponseMessage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ResponseMessage).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ResponseMessage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3225927699",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, this.props.message !== "" && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Accordion__WEBPACK_IMPORTED_MODULE_8__["default"], {
        ID: "accord",
        groupID: "AAA",
        groupFn: this.groupFn,
        controler: this.state.groupControl,
        callbackFn: this.callbackFn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3225927699",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "jsx-3225927699",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, this.props.message.title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3225927699",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Name: ", this.props.message.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3225927699",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Hotel: ", this.props.message.hotel), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3225927699",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Arrival Date: ", this.props.message.arrivalDate), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3225927699",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Departure Date: ", this.props.message.departureDate), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("pre", {
        className: "jsx-3225927699",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.props.message)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3225927699",
        __self: this
      }, "pre.jsx-3225927699,h1.jsx-3225927699{font-family:\"Arial\";padding:20;color:#39f;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc3VjY2lcXERvY3VtZW50c1xcUFJPSkVDVFNcXFJFQUNUXFxyZXNlcnZhdGlvblxccmVzZXJ2YXRpb25zLWhvdGVsXFxjb21wb25lbnRzXFxSZXNwb25zZU1lc3NhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJvQixBQUlpQyxvQkFDVCxXQUNBLFdBQ2IiLCJmaWxlIjoiQzpcXFVzZXJzXFxzdWNjaVxcRG9jdW1lbnRzXFxQUk9KRUNUU1xcUkVBQ1RcXHJlc2VydmF0aW9uXFxyZXNlcnZhdGlvbnMtaG90ZWxcXGNvbXBvbmVudHNcXFJlc3BvbnNlTWVzc2FnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFjY29yZGlvbiBmcm9tICcuL0FjY29yZGlvbidcclxuXHJcbmNsYXNzIFJlc3BvbnNlTWVzc2FnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIFxyXG4gIH1cclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3RoaXMucHJvcHMubWVzc2FnZSAhPT0gXCJcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPEFjY29yZGlvbiBJRD1cImFjY29yZFwiIGdyb3VwSUQ9XCJBQUFcIiBncm91cEZuPXt0aGlzLmdyb3VwRm59IGNvbnRyb2xlcj17dGhpcy5zdGF0ZS5ncm91cENvbnRyb2x9IGNhbGxiYWNrRm49e3RoaXMuY2FsbGJhY2tGbn0gPiBcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5tZXNzYWdlLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDxwPk5hbWU6IHt0aGlzLnByb3BzLm1lc3NhZ2UubmFtZX08L3A+XHJcbiAgICAgICAgICAgIDxwPkhvdGVsOiB7dGhpcy5wcm9wcy5tZXNzYWdlLmhvdGVsfTwvcD5cclxuICAgICAgICAgICAgPHA+QXJyaXZhbCBEYXRlOiB7dGhpcy5wcm9wcy5tZXNzYWdlLmFycml2YWxEYXRlfTwvcD5cclxuICAgICAgICAgICAgPHA+RGVwYXJ0dXJlIERhdGU6IHt0aGlzLnByb3BzLm1lc3NhZ2UuZGVwYXJ0dXJlRGF0ZX08L3A+XHJcbiAgICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMubWVzc2FnZSl9PC9wcmU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIHByZSxcclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcclxuICAgICAgICAgICAgcGFkZGluZzogMjA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzlmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBSZXNwb25zZU1lc3NhZ2U7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\succi\\Documents\\PROJECTS\\REACT\\reservation\\reservations-hotel\\components\\ResponseMessage.js */"));
    }
  }]);

  return ResponseMessage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ResponseMessage);

/***/ })

})
//# sourceMappingURL=index.js.5eed808d9f52312f8ead.hot-update.js.map