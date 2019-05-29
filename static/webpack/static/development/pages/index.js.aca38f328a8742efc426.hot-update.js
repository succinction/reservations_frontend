webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ReservationForm.js":
/*!***************************************!*\
  !*** ./components/ReservationForm.js ***!
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








var _jsxFileName = "C:\\Users\\succi\\Documents\\PROJECTS\\REACT\\reservation\\reservations-hotel\\components\\ReservationForm.js";



var ReservationForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ReservationForm, _React$Component);

  function ReservationForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ReservationForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ReservationForm).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "submitHandler", function (event) {
      event.preventDefault();
      var name = _this.nameElem.current.value;
      var hotel = _this.hotelElem.current.value;
      var arriveDate = _this.arriveElem.current.value;
      var departDate = _this.departElem.current.value;

      if (name.trim().length === 0 || hotel.trim().length === 0) {
        return;
      } // console.log( "name, hotel", name, hotel);


      var requestBody = {
        query: "\n      mutation {\n        createBooking(bookingInput:{name:\"".concat(name, "\", hotel:\"").concat(hotel, "\", arrivalDate: \"").concat(arriveDate, "\", departureDate:\"").concat(departDate, "\"}) {\n          name\n          hotel\n          arrivalDate\n          departureDate\n          _id\n        }\n      }\n      ")
      };
      fetch("http://localhost:5000/graphql", {
        method: "POST",
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(requestBody),
        headers: {
          "Content-type": "application/json"
        }
      }).then(function (res) {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("fail");
        }

        return res.json();
      }).then(function (resData) {
        console.log("resData", resData);

        _this.props.callbackFn(resData);
      }).catch(function (err) {
        console.log(err);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "jsxForm", function () {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form", {
        onSubmit: _this.submitHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "fname",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Name")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-75",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        ref: _this.nameElem,
        type: "text",
        id: "fname",
        name: "fullname",
        placeholder: "Your full name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "hotel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Hotel")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-75",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
        id: "hotel",
        name: "hotel",
        ref: _this.hotelElem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Hilton Times",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Hilton Times"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Garden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Garden"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Millennium",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Millennium"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Hampton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Hampton"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "DoubleTree",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "DoubleTree"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Embassy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Embassy")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "lname",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Arrival")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-75",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "date",
        name: "arriveDate",
        ref: _this.arriveElem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "lname",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Departure")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-75",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "date",
        name: "departDate",
        ref: _this.departElem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "submit",
        value: "Submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      })));
    });

    _this.nameElem = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.hotelElem = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.arriveElem = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.departElem = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ReservationForm, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-1649857628",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("jsxForm", {
        className: "jsx-1649857628",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "1649857628",
        __self: this
      }, "*.jsx-1649857628{box-sizing:border-box;}label.jsx-1649857628{font-family:Arial,Helvetica,sans-serif;}input[type=\"text\"].jsx-1649857628,select.jsx-1649857628,textarea.jsx-1649857628{width:100%;padding:12px;border:1px solid #ccc;border-radius:4px;resize:vertical;}label.jsx-1649857628{padding:12px 12px 12px 0;display:inline-block;}input[type=\"submit\"].jsx-1649857628{background-color:#4caf50;color:white;padding:12px 20px;border:none;border-radius:4px;cursor:pointer;float:right;}input[type=\"submit\"].jsx-1649857628:hover{background-color:#45a049;}.container.jsx-1649857628{border-radius:5px;background-color:#f2f2f2;padding:20px;}.col-25.jsx-1649857628{float:left;width:25%;margin-top:6px;}.col-75.jsx-1649857628{float:left;width:75%;margin-top:6px;}.row.jsx-1649857628:after{content:\"\";display:table;clear:both;}@media screen and (max-width:600px){.col-25.jsx-1649857628,.col-75.jsx-1649857628,input[type=\"submit\"].jsx-1649857628{width:100%;margin-top:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc3VjY2lcXERvY3VtZW50c1xcUFJPSkVDVFNcXFJFQUNUXFxyZXNlcnZhdGlvblxccmVzZXJ2YXRpb25zLWhvdGVsXFxjb21wb25lbnRzXFxSZXNlcnZhdGlvbkZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEhvQixBQUdtQyxBQUltQixBQU05QixBQVFjLEFBS0EsQUFVQSxBQUlQLEFBTVAsQUFNQSxBQU9BLEFBVUUsV0F2REEsQUFpQ0gsQUFNQSxBQU9JLEFBVUMsT0E3QlUsR0FPVixBQU1BLENBbERqQixFQVd3QixBQXdEdEIsQ0FqRHFCLEFBS1QsQUFVZCxBQXdCYSxXQVpiLEFBTUEsQUFPQSxDQWxDb0IsRUFwQnBCLElBa0NlLEdBMUJLLEFBT3BCLFNBTWMsQ0FjZCxRQTFCa0IsR0FhRSxhQVpwQixLQWFpQixlQUNILFlBQ2QiLCJmaWxlIjoiQzpcXFVzZXJzXFxzdWNjaVxcRG9jdW1lbnRzXFxQUk9KRUNUU1xcUkVBQ1RcXHJlc2VydmF0aW9uXFxyZXNlcnZhdGlvbnMtaG90ZWxcXGNvbXBvbmVudHNcXFJlc2VydmF0aW9uRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNsYXNzIFJlc2VydmF0aW9uRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMubmFtZUVsZW0gPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuaG90ZWxFbGVtID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB0aGlzLmFycml2ZUVsZW0gPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuZGVwYXJ0RWxlbSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0SGFuZGxlciA9IGV2ZW50ID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lRWxlbS5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgaG90ZWwgPSB0aGlzLmhvdGVsRWxlbS5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgYXJyaXZlRGF0ZSA9IHRoaXMuYXJyaXZlRWxlbS5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZGVwYXJ0RGF0ZSA9IHRoaXMuZGVwYXJ0RWxlbS5jdXJyZW50LnZhbHVlO1xyXG5cclxuICAgIGlmIChuYW1lLnRyaW0oKS5sZW5ndGggPT09IDAgfHwgaG90ZWwudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyggXCJuYW1lLCBob3RlbFwiLCBuYW1lLCBob3RlbCk7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgIG11dGF0aW9uIHtcclxuICAgICAgICBjcmVhdGVCb29raW5nKGJvb2tpbmdJbnB1dDp7bmFtZTpcIiR7bmFtZX1cIiwgaG90ZWw6XCIke2hvdGVsfVwiLCBhcnJpdmFsRGF0ZTogXCIke2Fycml2ZURhdGV9XCIsIGRlcGFydHVyZURhdGU6XCIke2RlcGFydERhdGV9XCJ9KSB7XHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBob3RlbFxyXG4gICAgICAgICAgYXJyaXZhbERhdGVcclxuICAgICAgICAgIGRlcGFydHVyZURhdGVcclxuICAgICAgICAgIF9pZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBgXHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2dyYXBocWxcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgJiYgcmVzLnN0YXR1cyAhPT0gMjAxKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJmYWlsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzRGF0YSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNEYXRhXCIsIHJlc0RhdGEpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuY2FsbGJhY2tGbihyZXNEYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAganN4Rm9ybSA9ICgpID0+IChcclxuICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTI1XCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNzVcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICByZWY9e3RoaXMubmFtZUVsZW19XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJmbmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJmdWxsbmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBmdWxsIG5hbWVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTI1XCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImhvdGVsXCI+SG90ZWw8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTc1XCI+XHJcbiAgICAgICAgICA8c2VsZWN0IGlkPVwiaG90ZWxcIiBuYW1lPVwiaG90ZWxcIiByZWY9e3RoaXMuaG90ZWxFbGVtfT5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhpbHRvbiBUaW1lc1wiPkhpbHRvbiBUaW1lczwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR2FyZGVuXCI+R2FyZGVuPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNaWxsZW5uaXVtXCI+TWlsbGVubml1bTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSGFtcHRvblwiPkhhbXB0b248L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRvdWJsZVRyZWVcIj5Eb3VibGVUcmVlPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFbWJhc3N5XCI+RW1iYXNzeTwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yNVwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsbmFtZVwiPkFycml2YWw8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC03NVwiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImFycml2ZURhdGVcIiByZWY9e3RoaXMuYXJyaXZlRWxlbX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTI1XCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxuYW1lXCI+RGVwYXJ0dXJlPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNzVcIj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkZXBhcnREYXRlXCIgcmVmPXt0aGlzLmRlcGFydEVsZW19IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8anN4Rm9ybSAvPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICoge1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgICAgICAgICBzZWxlY3QsXHJcbiAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDEycHggMTJweCAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY29sLTI1IHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY29sLTc1IHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cclxuICAgICAgICAgIC5yb3c6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSB3aGVuIHRoZSBzY3JlZW4gaXMgbGVzcyB0aGFuIDYwMHB4IHdpZGUsIG1ha2UgdGhlIHR3byBjb2x1bW5zIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyIGluc3RlYWQgb2YgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAuY29sLTI1LFxyXG4gICAgICAgICAgICAuY29sLTc1LFxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZhdGlvbkZvcm07XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\succi\\Documents\\PROJECTS\\REACT\\reservation\\reservations-hotel\\components\\ReservationForm.js */"));
    }
  }]);

  return ReservationForm;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ReservationForm);

/***/ })

})
//# sourceMappingURL=index.js.aca38f328a8742efc426.hot-update.js.map