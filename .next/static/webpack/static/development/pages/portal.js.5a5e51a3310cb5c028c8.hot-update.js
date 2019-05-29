webpackHotUpdate("static\\development\\pages\\portal.js",{

/***/ "./components/WideForm.js":
/*!********************************!*\
  !*** ./components/WideForm.js ***!
  \********************************/
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








var _jsxFileName = "C:\\Users\\succi\\Documents\\PROJECTS\\REACT\\reservation\\reservations-hotel\\components\\WideForm.js";



var WideForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(WideForm, _React$Component);

  function WideForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, WideForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(WideForm).call(this, props));

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
          title: "Reservation Booked",
          name: resData.data.createBooking.name,
          hotel: resData.data.createBooking.hotel,
          arrivalDate: resData.data.createBooking.arrivalDate,
          departureDate: resData.data.createBooking.departureDate
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(WideForm, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form", {
        onSubmit: this.submitHandler,
        className: "jsx-1317323813" + " " + "form-style-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "name",
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        ref: this.nameElem,
        type: "text",
        id: "fname",
        name: "fullname",
        placeholder: "Your full name",
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Enter your full name here")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "Hotel",
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Hotel"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
        id: "hotel",
        name: "hotel",
        ref: this.hotelElem,
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Hilton Times",
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Hilton Times"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Garden",
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Garden"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Millennium",
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Millennium"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Hampton",
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Hampton"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "DoubleTree",
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "DoubleTree"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Embassy",
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Embassy")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Select Hotel")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "Hotel",
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Arrival"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "date",
        name: "arriveDate",
        ref: this.arriveElem,
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Arrival Date")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "Hotel",
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Depart"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "date",
        name: "departDate",
        ref: this.departElem,
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Departure Date")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "submit",
        value: "Submit",
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "1317323813",
        __self: this
      }, "div.jsx-1317323813{background-color:transparent;}.form-style-7.jsx-1317323813{max-width:400px;margin:50px auto;background:#fff;border-radius:2px;padding:20px;font-family:Georgia,\"Times New Roman\",Times,serif;}.form-style-7.jsx-1317323813 h1.jsx-1317323813{display:block;text-align:center;padding:0;margin:0px 0px 20px 0px;color:#5c5c5c;font-size:x-large;}.form-style-7.jsx-1317323813 ul.jsx-1317323813{list-style:none;padding:0;margin:0;}.form-style-7.jsx-1317323813 li.jsx-1317323813{display:block;padding:9px;border:1px solid #dddddd;margin-bottom:30px;border-radius:3px;}.form-style-7.jsx-1317323813 li.jsx-1317323813:last-child{border:none;margin-bottom:0px;text-align:center;}.form-style-7.jsx-1317323813 li.jsx-1317323813>label.jsx-1317323813{display:block;float:left;margin-top:-19px;background:#ffffff;height:14px;padding:2px 5px 2px 5px;color:#b9b9b9;font-size:14px;overflow:hidden;font-family:Arial,Helvetica,sans-serif;}.form-style-7.jsx-1317323813 input[type=\"text\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"date\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"datetime\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"email\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"number\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"search\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"time\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"url\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"password\"].jsx-1317323813,.form-style-7.jsx-1317323813 textarea.jsx-1317323813,.form-style-7.jsx-1317323813 select.jsx-1317323813{box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;width:100%;display:block;outline:none;border:none;height:25px;line-height:25px;font-size:16px;padding:0;font-family:Georgia,\"Times New Roman\",Times,serif;}.form-style-7.jsx-1317323813 li.jsx-1317323813>span.jsx-1317323813{background:#f3f3f3;display:block;padding:3px;margin:0 -9px -9px -9px;text-align:center;color:#c0c0c0;font-family:Arial,Helvetica,sans-serif;font-size:11px;}.form-style-7.jsx-1317323813 textarea.jsx-1317323813{resize:none;}.form-style-7.jsx-1317323813 input[type=\"submit\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"button\"].jsx-1317323813{background:#2471ff;border:none;padding:10px 20px 10px 20px;border-bottom:3px solid #5994ff;border-radius:3px;color:#d2e2ff;}.form-style-7.jsx-1317323813 input[type=\"submit\"].jsx-1317323813:hover,.form-style-7.jsx-1317323813 input[type=\"button\"].jsx-1317323813:hover{background:#6b9fff;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc3VjY2lcXERvY3VtZW50c1xcUFJPSkVDVFNcXFJFQUNUXFxyZXNlcnZhdGlvblxccmVzZXJ2YXRpb25zLWhvdGVsXFxjb21wb25lbnRzXFxXaWRlRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4R29CLEFBRzBDLEFBR2IsQUFRRixBQVFFLEFBS0YsQUFPRixBQUtFLEFBc0JRLEFBMEJILEFBVVAsQUFJTyxBQVNBLFlBM0VELEFBK0RwQixFQW5Gb0IsQUFhTixBQVlELEVBakNNLEFBZ0JQLEdBaUVJLEFBY0YsQUFTRCxHQWpEbUIsR0FyQmIsQ0FqQlIsQUFLZ0IsR0F6QjNCLENBZ0NvQixBQTRFcEIsQ0FUOEIsQ0F2RmxCLENBUk0sQUFpRkosRUFoRWQsT0FSMEIsQUF5QkwsR0FnREssR0FyRDFCLENBNUJvQixFQXFCQyxDQWlDUSxPQXlDSyxFQTdEcEIsS0F6QkUsQ0FSRCxFQWlGSyxDQTVEQSxHQWFNLE1Bb0JiLENBckQwQyxBQVFuQyxPQXlFSixDQTVEaEIsRUFpQ2dCLENBd0NJLE1BNURKLENBekJoQixHQXlFMkMsR0EzQjVCLEtBd0NDLEVBNURDLE1BcUJILE1Bd0NkLEdBNURrQixHQXFCSixDQXhEZCxVQWtGaUIsQ0F6QkUsQ0FyQndCLGFBK0MzQyxHQXpCaUIsZUFDTCxRQXRCWixFQXVCdUQsa0RBQ3ZEIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc3VjY2lcXERvY3VtZW50c1xcUFJPSkVDVFNcXFJFQUNUXFxyZXNlcnZhdGlvblxccmVzZXJ2YXRpb25zLWhvdGVsXFxjb21wb25lbnRzXFxXaWRlRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNsYXNzIFdpZGVGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5uYW1lRWxlbSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgdGhpcy5ob3RlbEVsZW0gPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuYXJyaXZlRWxlbSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgdGhpcy5kZXBhcnRFbGVtID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgfVxyXG5cclxuICBzdWJtaXRIYW5kbGVyID0gZXZlbnQgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWVFbGVtLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBob3RlbCA9IHRoaXMuaG90ZWxFbGVtLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBhcnJpdmVEYXRlID0gdGhpcy5hcnJpdmVFbGVtLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBkZXBhcnREYXRlID0gdGhpcy5kZXBhcnRFbGVtLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgaWYgKG5hbWUudHJpbSgpLmxlbmd0aCA9PT0gMCB8fCBob3RlbC50cmltKCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgcXVlcnk6IGBcclxuICAgICAgbXV0YXRpb24ge1xyXG4gICAgICAgIGNyZWF0ZUJvb2tpbmcoYm9va2luZ0lucHV0OntuYW1lOlwiJHtuYW1lfVwiLCBob3RlbDpcIiR7aG90ZWx9XCIsIGFycml2YWxEYXRlOiBcIiR7YXJyaXZlRGF0ZX1cIiwgZGVwYXJ0dXJlRGF0ZTpcIiR7ZGVwYXJ0RGF0ZX1cIn0pIHtcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGhvdGVsXHJcbiAgICAgICAgICBhcnJpdmFsRGF0ZVxyXG4gICAgICAgICAgZGVwYXJ0dXJlRGF0ZVxyXG4gICAgICAgICAgX2lkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGBcclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvZ3JhcGhxbFwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCAmJiByZXMuc3RhdHVzICE9PSAyMDEpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImZhaWxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihyZXNEYXRhID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc0RhdGFcIixyZXNEYXRhKVxyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB7XHJcbiAgICAgICAgICB0aXRsZTogXCJSZXNlcnZhdGlvbiBCb29rZWRcIixcclxuICAgICAgICAgIG5hbWU6IHJlc0RhdGEuZGF0YS5jcmVhdGVCb29raW5nLm5hbWUsXHJcbiAgICAgICAgICBob3RlbDogcmVzRGF0YS5kYXRhLmNyZWF0ZUJvb2tpbmcuaG90ZWwsXHJcbiAgICAgICAgICBhcnJpdmFsRGF0ZTogcmVzRGF0YS5kYXRhLmNyZWF0ZUJvb2tpbmcuYXJyaXZhbERhdGUsXHJcbiAgICAgICAgICBkZXBhcnR1cmVEYXRlOiByZXNEYXRhLmRhdGEuY3JlYXRlQm9va2luZy5kZXBhcnR1cmVEYXRlLFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucHJvcHMuY2FsbGJhY2tGbihtZXNzYWdlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLXN0eWxlLTdcIiBvblN1Ym1pdD17dGhpcy5zdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgcmVmPXt0aGlzLm5hbWVFbGVtfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJmbmFtZVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZnVsbG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGZ1bGwgbmFtZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5FbnRlciB5b3VyIGZ1bGwgbmFtZSBoZXJlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJIb3RlbFwiPkhvdGVsPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiaG90ZWxcIiBuYW1lPVwiaG90ZWxcIiByZWY9e3RoaXMuaG90ZWxFbGVtfT5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIaWx0b24gVGltZXNcIj5IaWx0b24gVGltZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHYXJkZW5cIj5HYXJkZW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNaWxsZW5uaXVtXCI+TWlsbGVubml1bTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhhbXB0b25cIj5IYW1wdG9uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRG91YmxlVHJlZVwiPkRvdWJsZVRyZWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFbWJhc3N5XCI+RW1iYXNzeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDxzcGFuPlNlbGVjdCBIb3RlbDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiSG90ZWxcIj5BcnJpdmFsPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiYXJyaXZlRGF0ZVwiIHJlZj17dGhpcy5hcnJpdmVFbGVtfSAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkFycml2YWwgRGF0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiSG90ZWxcIj5EZXBhcnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkZXBhcnREYXRlXCIgcmVmPXt0aGlzLmRlcGFydEVsZW19IC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+RGVwYXJ0dXJlIERhdGU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBoMSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAyMHB4IDBweDtcclxuICAgICAgICAgICAgY29sb3I6ICM1YzVjNWM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgdWwge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGxpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDlweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBsaTpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgbGkgPiBsYWJlbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE5cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4IDVweCAycHggNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2I5YjliOTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJkYXRlXCJdLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwiZGF0ZXRpbWVcIl0sXHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cInRpbWVcIl0sXHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJ1cmxcIl0sXHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgdGV4dGFyZWEsXHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IHNlbGVjdCB7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cImRhdGVcIl06Zm9jdXMsXHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJkYXRldGltZVwiXTpmb2N1cyxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwibnVtYmVyXCJdOmZvY3VzLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOmZvY3VzLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwidGltZVwiXTpmb2N1cyxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cInVybFwiXTpmb2N1cyxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmZvY3VzLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyB0ZXh0YXJlYTpmb2N1cyxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgc2VsZWN0OmZvY3VzIHtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgbGkgPiBzcGFuIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIC05cHggLTlweCAtOXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYzBjMGMwO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNDcxZmY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM1OTk0ZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgY29sb3I6ICNkMmUyZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIsXHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNmI5ZmZmO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpZGVGb3JtO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\succi\\Documents\\PROJECTS\\REACT\\reservation\\reservations-hotel\\components\\WideForm.js */"));
    }
  }]);

  return WideForm;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (WideForm);

/***/ })

})
//# sourceMappingURL=portal.js.5a5e51a3310cb5c028c8.hot-update.js.map