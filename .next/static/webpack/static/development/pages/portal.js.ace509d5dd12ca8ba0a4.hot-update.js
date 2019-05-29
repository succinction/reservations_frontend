webpackHotUpdate("static\\development\\pages\\portal.js",{

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
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ResponseMessage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ResponseMessage).call(this, props));
    _this.state = {
      controler: {
        identifier: "",
        group: ""
      }
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ResponseMessage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3225927699",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
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
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3225927699",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "jsx-3225927699",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, this.props.message.title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3225927699",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Name: ", this.props.message.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3225927699",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Hotel: ", this.props.message.hotel), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3225927699",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Arrival Date: ", this.props.message.arrivalDate), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3225927699",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Departure Date: ", this.props.message.departureDate), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("pre", {
        className: "jsx-3225927699",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.props.message)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3225927699",
        __self: this
      }, "pre.jsx-3225927699,h1.jsx-3225927699{font-family:\"Arial\";padding:20;color:#39f;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc3VjY2lcXERvY3VtZW50c1xcUFJPSkVDVFNcXFJFQUNUXFxyZXNlcnZhdGlvblxccmVzZXJ2YXRpb25zLWhvdGVsXFxjb21wb25lbnRzXFxSZXNwb25zZU1lc3NhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJvQixBQUlpQyxvQkFDVCxXQUNBLFdBQ2IiLCJmaWxlIjoiQzpcXFVzZXJzXFxzdWNjaVxcRG9jdW1lbnRzXFxQUk9KRUNUU1xcUkVBQ1RcXHJlc2VydmF0aW9uXFxyZXNlcnZhdGlvbnMtaG90ZWxcXGNvbXBvbmVudHNcXFJlc3BvbnNlTWVzc2FnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFjY29yZGlvbiBmcm9tICcuL0FjY29yZGlvbidcclxuXHJcbmNsYXNzIFJlc3BvbnNlTWVzc2FnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGNvbnRyb2xlcjogeyBpZGVudGlmaWVyOiBcIlwiLCBncm91cDogXCJcIiB9IH1cclxuICB9XHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLm1lc3NhZ2UgIT09IFwiXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxBY2NvcmRpb24gSUQ9XCJhY2NvcmRcIiBncm91cElEPVwiQUFBXCIgZ3JvdXBGbj17dGhpcy5ncm91cEZufSBjb250cm9sZXI9e3RoaXMuc3RhdGUuZ3JvdXBDb250cm9sfSBjYWxsYmFja0ZuPXt0aGlzLmNhbGxiYWNrRm59ID4gXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+e3RoaXMucHJvcHMubWVzc2FnZS50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8cD5OYW1lOiB7dGhpcy5wcm9wcy5tZXNzYWdlLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8cD5Ib3RlbDoge3RoaXMucHJvcHMubWVzc2FnZS5ob3RlbH08L3A+XHJcbiAgICAgICAgICAgIDxwPkFycml2YWwgRGF0ZToge3RoaXMucHJvcHMubWVzc2FnZS5hcnJpdmFsRGF0ZX08L3A+XHJcbiAgICAgICAgICAgIDxwPkRlcGFydHVyZSBEYXRlOiB7dGhpcy5wcm9wcy5tZXNzYWdlLmRlcGFydHVyZURhdGV9PC9wPlxyXG4gICAgICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLm1lc3NhZ2UpfTwvcHJlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICBwcmUsXHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzM5ZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUmVzcG9uc2VNZXNzYWdlO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\succi\\Documents\\PROJECTS\\REACT\\reservation\\reservations-hotel\\components\\ResponseMessage.js */"));
    }
  }]);

  return ResponseMessage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ResponseMessage);

/***/ })

})
//# sourceMappingURL=portal.js.ace509d5dd12ca8ba0a4.hot-update.js.map