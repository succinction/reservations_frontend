webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/MobileForm.js":
/*!**********************************!*\
  !*** ./components/MobileForm.js ***!
  \**********************************/
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








var _jsxFileName = "C:\\Users\\succi\\Documents\\PROJECTS\\REACT\\reservation\\reservations-hotel\\components\\MobileForm.js";



var MobileForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MobileForm, _React$Component);

  function MobileForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MobileForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MobileForm).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "submitHandler", function (event) {
      event.preventDefault();
      var name = _this.nameElem.current.value;
      var hotel = _this.hotelElem.current.value;
      var arriveDate = _this.arriveElem.current.value;
      var departDate = _this.departElem.current.value;

      if (name.trim().length === 0 || hotel.trim().length === 0) {
        return;
      }

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
        var message = {
          title: "Reservation Found",
          name: resData.data.booking.name,
          hotel: resData.data.booking.hotel,
          arrivalDate: resData.data.booking.arrivalDate,
          departureDate: resData.data.booking.departureDate
        };

        _this.props.callbackFn(message);
      }).catch(function (err) {
        console.log(err);
      });
    });

    _this.nameElem = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.hotelElem = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.arriveElem = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.departElem = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MobileForm, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-1391361316",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form", {
        onSubmit: this.submitHandler,
        className: "jsx-1391361316",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-1391361316" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-1391361316" + " " + "col-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "fname",
        className: "jsx-1391361316",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Name")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-1391361316" + " " + "col-75",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        ref: this.nameElem,
        type: "text",
        id: "fname",
        name: "fullname",
        placeholder: "Your full name",
        className: "jsx-1391361316",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-1391361316" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-1391361316" + " " + "col-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "hotel",
        className: "jsx-1391361316",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Hotel")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-1391361316" + " " + "col-75",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
        id: "hotel",
        name: "hotel",
        ref: this.hotelElem,
        className: "jsx-1391361316",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Hilton Times",
        className: "jsx-1391361316",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Hilton Times"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Garden",
        className: "jsx-1391361316",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Garden"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Millennium",
        className: "jsx-1391361316",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Millennium"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Hampton",
        className: "jsx-1391361316",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Hampton"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "DoubleTree",
        className: "jsx-1391361316",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "DoubleTree"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Embassy",
        className: "jsx-1391361316",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Embassy")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-1391361316" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-1391361316" + " " + "col-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "lname",
        className: "jsx-1391361316",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Arrival")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-1391361316" + " " + "col-75",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "date",
        name: "arriveDate",
        ref: this.arriveElem,
        className: "jsx-1391361316",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-1391361316" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-1391361316" + " " + "col-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "lname",
        className: "jsx-1391361316",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Departure")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-1391361316" + " " + "col-75",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "date",
        name: "departDate",
        ref: this.departElem,
        className: "jsx-1391361316",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-1391361316" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "submit",
        value: "Submit",
        className: "jsx-1391361316",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "1391361316",
        __self: this
      }, "*.jsx-1391361316{box-sizing:border-box;}label.jsx-1391361316{font-family:Arial,Helvetica,sans-serif;}input[type=\"text\"].jsx-1391361316,select.jsx-1391361316,textarea.jsx-1391361316{width:100%;padding:12px;border:1px solid #ccc;border-radius:4px;resize:vertical;}label.jsx-1391361316{padding:12px 12px 12px 0;display:inline-block;background:#99cccc;}input[type=\"submit\"].jsx-1391361316{background-color:#4caf50;color:white;padding:12px 20px;border:none;border-radius:4px;cursor:pointer;float:right;}input[type=\"submit\"].jsx-1391361316:hover{background-color:#45a049;}.container.jsx-1391361316{border-radius:5px;background-color:#f2f2f2;padding:20px;}.col-25.jsx-1391361316{float:left;width:25%;margin-top:6px;}.col-75.jsx-1391361316{float:left;width:75%;margin-top:6px;}.row.jsx-1391361316:after{content:\"\";display:table;clear:both;}@media screen and (max-width:600px){.col-25.jsx-1391361316,.col-75.jsx-1391361316,input[type=\"submit\"].jsx-1391361316{width:80%;margin-top:12px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc3VjY2lcXERvY3VtZW50c1xcUFJPSkVDVFNcXFJFQUNUXFxyZXNlcnZhdGlvblxccmVzZXJ2YXRpb25zLWhvdGVsXFxjb21wb25lbnRzXFxNb2JpbGVGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStIb0IsQUFHbUMsQUFJbUIsQUFNOUIsQUFRYyxBQU1BLEFBVUEsQUFJUCxBQU1QLEFBTUEsQUFNQSxBQVNDLFVBQ00sQ0F2REwsQUFrQ0gsQUFNQSxBQU1JLE9BbEJXLEdBT1YsQUFNQSxDQW5EakIsRUFXd0IsQ0FPRCxBQU1ULEFBVWQsQUF1QmEsQ0FTWCxVQXBCRixBQU1BLEFBTUEsQ0FqQ29CLEVBckJwQixJQW1DZSxHQTNCSyxBQU9DLFNBT1AsQ0FjZCxRQTNCa0IsQ0FPbEIsRUFPb0IsYUFicEIsS0FjaUIsZUFDSCxZQUNkIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc3VjY2lcXERvY3VtZW50c1xcUFJPSkVDVFNcXFJFQUNUXFxyZXNlcnZhdGlvblxccmVzZXJ2YXRpb25zLWhvdGVsXFxjb21wb25lbnRzXFxNb2JpbGVGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY2xhc3MgTW9iaWxlRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMubmFtZUVsZW0gPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuaG90ZWxFbGVtID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB0aGlzLmFycml2ZUVsZW0gPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuZGVwYXJ0RWxlbSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0SGFuZGxlciA9IGV2ZW50ID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lRWxlbS5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgaG90ZWwgPSB0aGlzLmhvdGVsRWxlbS5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgYXJyaXZlRGF0ZSA9IHRoaXMuYXJyaXZlRWxlbS5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZGVwYXJ0RGF0ZSA9IHRoaXMuZGVwYXJ0RWxlbS5jdXJyZW50LnZhbHVlO1xyXG5cclxuICAgIGlmIChuYW1lLnRyaW0oKS5sZW5ndGggPT09IDAgfHwgaG90ZWwudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgIG11dGF0aW9uIHtcclxuICAgICAgICBjcmVhdGVCb29raW5nKGJvb2tpbmdJbnB1dDp7bmFtZTpcIiR7bmFtZX1cIiwgaG90ZWw6XCIke2hvdGVsfVwiLCBhcnJpdmFsRGF0ZTogXCIke2Fycml2ZURhdGV9XCIsIGRlcGFydHVyZURhdGU6XCIke2RlcGFydERhdGV9XCJ9KSB7XHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBob3RlbFxyXG4gICAgICAgICAgYXJyaXZhbERhdGVcclxuICAgICAgICAgIGRlcGFydHVyZURhdGVcclxuICAgICAgICAgIF9pZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBgXHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2dyYXBocWxcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgJiYgcmVzLnN0YXR1cyAhPT0gMjAxKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJmYWlsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzRGF0YSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNEYXRhXCIscmVzRGF0YSk7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBtZXNzYWdlID0ge1xyXG4gICAgICAgICAgdGl0bGU6IFwiUmVzZXJ2YXRpb24gRm91bmRcIixcclxuICAgICAgICAgIG5hbWU6IHJlc0RhdGEuZGF0YS5ib29raW5nLm5hbWUsXHJcbiAgICAgICAgICBob3RlbDogcmVzRGF0YS5kYXRhLmJvb2tpbmcuaG90ZWwsXHJcbiAgICAgICAgICBhcnJpdmFsRGF0ZTogcmVzRGF0YS5kYXRhLmJvb2tpbmcuYXJyaXZhbERhdGUsXHJcbiAgICAgICAgICBkZXBhcnR1cmVEYXRlOiByZXNEYXRhLmRhdGEuYm9va2luZy5kZXBhcnR1cmVEYXRlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnByb3BzLmNhbGxiYWNrRm4obWVzc2FnZSlcclxuICAgICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMjVcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC03NVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgcmVmPXt0aGlzLm5hbWVFbGVtfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJmbmFtZVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZnVsbG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGZ1bGwgbmFtZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yNVwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaG90ZWxcIj5Ib3RlbDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC03NVwiPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJob3RlbFwiIG5hbWU9XCJob3RlbFwiIHJlZj17dGhpcy5ob3RlbEVsZW19PlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhpbHRvbiBUaW1lc1wiPkhpbHRvbiBUaW1lczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdhcmRlblwiPkdhcmRlbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1pbGxlbm5pdW1cIj5NaWxsZW5uaXVtPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSGFtcHRvblwiPkhhbXB0b248L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJEb3VibGVUcmVlXCI+RG91YmxlVHJlZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVtYmFzc3lcIj5FbWJhc3N5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMjVcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxuYW1lXCI+QXJyaXZhbDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNzVcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiYXJyaXZlRGF0ZVwiIHJlZj17dGhpcy5hcnJpdmVFbGVtfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTI1XCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsbmFtZVwiPkRlcGFydHVyZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNzVcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZGVwYXJ0RGF0ZVwiIHJlZj17dGhpcy5kZXBhcnRFbGVtfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAqIHtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4gICAgICAgICAgc2VsZWN0LFxyXG4gICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICByZXNpemU6IHZlcnRpY2FsO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweCAxMnB4IDEycHggMDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOTljY2NjO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbC0yNSB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbC03NSB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnJvdzphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAuY29sLTI1LFxyXG4gICAgICAgICAgICAuY29sLTc1LFxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZUZvcm07XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\succi\\Documents\\PROJECTS\\REACT\\reservation\\reservations-hotel\\components\\MobileForm.js */"));
    }
  }]);

  return MobileForm;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MobileForm);

/***/ }),

/***/ "./components/ReservationForm.js":
false,

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
/* harmony import */ var _components_MobileForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MobileForm */ "./components/MobileForm.js");
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
      var show = this.state.isMobile;
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        isMobile: this.state.isMobile,
        backgroundImage: this.bgImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_ResponseMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
        message: this.state.responseData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_PageTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
        isMobile: this.state.isMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Make Your Reservations"), show && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_MobileForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
        callbackFn: this.responseFn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), show || react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_WideForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
        callbackFn: this.responseFn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_13___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.302e639b16be428ca563.hot-update.js.map