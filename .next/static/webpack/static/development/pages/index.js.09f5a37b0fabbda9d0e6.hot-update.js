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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Accordion */ "./components/Accordion.js");








var _jsxFileName = "C:\\Users\\succi\\Documents\\PROJECTS\\REACT\\reservation\\reservations-hotel\\components\\ResponseMessage.js";




var ResponseMessage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ResponseMessage, _React$Component);

  function ResponseMessage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ResponseMessage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ResponseMessage).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "groupFn", function (o) {
      _this.setState({
        controler: {
          identifier: o.myID,
          group: o.groupID
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "callbackFn", function (bool) {
      // Do some side effect
      console.log("callbackFn(" + bool + ")");
    });

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
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-3225927699",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, this.props.message !== "" && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Accordion__WEBPACK_IMPORTED_MODULE_10__["default"], {
        ID: "accord",
        groupID: "AAA",
        groupFn: this.groupFn,
        controler: this.state.groupControl,
        callbackFn: this.callbackFn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-3225927699",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        className: "jsx-3225927699",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, this.props.message.title), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        className: "jsx-3225927699",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Name: ", this.props.message.name), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        className: "jsx-3225927699",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Hotel: ", this.props.message.hotel), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        className: "jsx-3225927699",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Arrival Date: ", this.props.message.arrivalDate), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        className: "jsx-3225927699",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Departure Date: ", this.props.message.departureDate), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("pre", {
        className: "jsx-3225927699",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.props.message)))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "3225927699",
        __self: this
      }, "pre.jsx-3225927699,h1.jsx-3225927699{font-family:\"Arial\";padding:20;color:#39f;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc3VjY2lcXERvY3VtZW50c1xcUFJPSkVDVFNcXFJFQUNUXFxyZXNlcnZhdGlvblxccmVzZXJ2YXRpb25zLWhvdGVsXFxjb21wb25lbnRzXFxSZXNwb25zZU1lc3NhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NvQixBQUlpQyxvQkFDVCxXQUNBLFdBQ2IiLCJmaWxlIjoiQzpcXFVzZXJzXFxzdWNjaVxcRG9jdW1lbnRzXFxQUk9KRUNUU1xcUkVBQ1RcXHJlc2VydmF0aW9uXFxyZXNlcnZhdGlvbnMtaG90ZWxcXGNvbXBvbmVudHNcXFJlc3BvbnNlTWVzc2FnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwiLi9BY2NvcmRpb25cIjtcclxuXHJcbmNsYXNzIFJlc3BvbnNlTWVzc2FnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0geyBjb250cm9sZXI6IHsgaWRlbnRpZmllcjogXCJcIiwgZ3JvdXA6IFwiXCIgfSB9O1xyXG4gIH1cclxuXHJcbiAgZ3JvdXBGbiA9IG8gPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyb2xlcjogeyBpZGVudGlmaWVyOiBvLm15SUQsIGdyb3VwOiBvLmdyb3VwSUQgfSB9KTtcclxuICB9O1xyXG5cclxuICBjYWxsYmFja0ZuID0gYm9vbCA9PiB7XHJcbiAgICAvLyBEbyBzb21lIHNpZGUgZWZmZWN0XHJcbiAgICBjb25zb2xlLmxvZyhcImNhbGxiYWNrRm4oXCIgKyBib29sICsgXCIpXCIpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3RoaXMucHJvcHMubWVzc2FnZSAhPT0gXCJcIiAmJiAoXHJcbiAgICAgICAgICA8QWNjb3JkaW9uXHJcbiAgICAgICAgICAgIElEPVwiYWNjb3JkXCJcclxuICAgICAgICAgICAgZ3JvdXBJRD1cIkFBQVwiXHJcbiAgICAgICAgICAgIGdyb3VwRm49e3RoaXMuZ3JvdXBGbn1cclxuICAgICAgICAgICAgY29udHJvbGVyPXt0aGlzLnN0YXRlLmdyb3VwQ29udHJvbH1cclxuICAgICAgICAgICAgY2FsbGJhY2tGbj17dGhpcy5jYWxsYmFja0ZufVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5tZXNzYWdlLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgPHA+TmFtZToge3RoaXMucHJvcHMubWVzc2FnZS5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICA8cD5Ib3RlbDoge3RoaXMucHJvcHMubWVzc2FnZS5ob3RlbH08L3A+XHJcbiAgICAgICAgICAgICAgPHA+QXJyaXZhbCBEYXRlOiB7dGhpcy5wcm9wcy5tZXNzYWdlLmFycml2YWxEYXRlfTwvcD5cclxuICAgICAgICAgICAgICA8cD5EZXBhcnR1cmUgRGF0ZToge3RoaXMucHJvcHMubWVzc2FnZS5kZXBhcnR1cmVEYXRlfTwvcD5cclxuICAgICAgICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLm1lc3NhZ2UpfTwvcHJlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgcHJlLFxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMDtcclxuICAgICAgICAgICAgY29sb3I6ICMzOWY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNlTWVzc2FnZTtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\succi\\Documents\\PROJECTS\\REACT\\reservation\\reservations-hotel\\components\\ResponseMessage.js */"));
    }
  }]);

  return ResponseMessage;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ResponseMessage);

/***/ })

})
//# sourceMappingURL=index.js.09f5a37b0fabbda9d0e6.hot-update.js.map