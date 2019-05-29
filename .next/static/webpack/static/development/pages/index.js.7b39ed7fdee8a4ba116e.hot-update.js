webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _components_ReservationForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ReservationForm */ "./components/ReservationForm.js");
/* harmony import */ var _components_ResponseMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ResponseMessage */ "./components/ResponseMessage.js");
/* harmony import */ var _components_Accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Accordion */ "./components/Accordion.js");
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/PageTitle */ "./components/PageTitle.js");
/* harmony import */ var _components_WideForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/WideForm */ "./components/WideForm.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "C:\\Users\\succi\\Documents\\PROJECTS\\REACT\\reservation\\reservations-hotel\\pages\\index.js";








var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "groupFn", function (o) {
      _this.setState({
        controler: {
          identifier: o.myID,
          group: o.groupID
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "callbackFn", function (bool) {// Do some side effect
      // console.log("callbackFn(" + bool + ")");
    });

    _this.state = {
      responseData: "",
      isMobile: true,
      controler: {
        identifier: "",
        group: ""
      }
    };
    _this.resizeHandler = _this.resizeHandler.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.responseFn = _this.responseFn.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.breakpoint = 600;
    _this.bgImage = ["http://news.hiltonworldwide.com/assets/HWW/images/newsroom/2011/HiltonGuangzhouTianheExterior_Night_FP.jpg", "https://res.cloudinary.com/lastminute/image/upload/c_scale,w_630/q_auto/v1429779489/NYCBP_Exterior_2011_HR_ukzskh.jpg", "https://www.lastminute.com/hotels/img/city/New-York-NY-US.jpg?2.42.0-063942240519"];
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("resize", this.resizeHandler);
      this.resizeHandler();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.resizeHandler);
    }
  }, {
    key: "resizeHandler",
    value: function resizeHandler() {
      var _this2 = this;

      // const debounce = (func, delay) => {
      //   let inDebounce;
      //   return (function() {
      //     const context = this;
      //     const args = arguments;
      //     clearTimeout(inDebounce);
      //     inDebounce = setTimeout(() => func.apply(context, args), delay);
      //   })();
      // };
      var resizeLayout = function resizeLayout() {
        if (_this2.state.isMobile !== window.innerWidth < _this2.breakpoint) {
          console.log("this.state.isMobile", _this2.state.isMobile);

          _this2.setState({
            isMobile: window.innerWidth < _this2.breakpoint
          });
        }
      }; // debounce(resizeLayout, 200);


      resizeLayout();
    }
  }, {
    key: "responseFn",
    value: function responseFn(message) {
      this.setState({
        responseData: message
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        isMobile: this.state.isMobile,
        backgroundImage: this.bgImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_ResponseMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
        message: this.state.responseData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_PageTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
        isMobile: this.state.isMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "accordionTitle",
        id: "accordionClicker1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Make Your Reservations")), this.state.isMobile && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_ReservationForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
        callbackFn: this.responseFn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), this.state.isMobile || react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_WideForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
        callbackFn: this.responseFn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_PageTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
        isMobile: this.state.isMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Results"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_13___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.7b39ed7fdee8a4ba116e.hot-update.js.map