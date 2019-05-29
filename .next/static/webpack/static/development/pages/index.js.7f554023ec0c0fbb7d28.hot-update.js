webpackHotUpdate("static\\development\\pages\\index.js",{

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
        className: "jsx-1365903695",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form", {
        onSubmit: this.submitHandler,
        className: "jsx-1365903695" + " " + "form-style-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        className: "jsx-1365903695",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "jsx-1365903695",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "name",
        className: "jsx-1365903695",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        ref: this.nameElem,
        type: "text",
        id: "fname",
        name: "fullname",
        placeholder: "Your full name",
        className: "jsx-1365903695",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "jsx-1365903695",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Enter your full name here")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "jsx-1365903695",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "Hotel",
        className: "jsx-1365903695",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Hotel"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
        id: "hotel",
        name: "hotel",
        ref: this.hotelElem,
        className: "jsx-1365903695",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Hilton Times",
        className: "jsx-1365903695",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Hilton Times"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Garden",
        className: "jsx-1365903695",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Garden"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Millennium",
        className: "jsx-1365903695",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Millennium"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Hampton",
        className: "jsx-1365903695",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Hampton"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "DoubleTree",
        className: "jsx-1365903695",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "DoubleTree"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Embassy",
        className: "jsx-1365903695",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Embassy")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "jsx-1365903695",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Select Hotel")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "jsx-1365903695",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "date",
        name: "arriveDate",
        ref: this.arriveElem,
        className: "jsx-1365903695",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "jsx-1365903695",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "date",
        name: "departDate",
        ref: this.departElem,
        className: "jsx-1365903695",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "jsx-1365903695",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "submit",
        value: "Submit",
        className: "jsx-1365903695",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "1365903695",
        __self: this
      }, "div.jsx-1365903695{background:#3990;}.form-style-7.jsx-1365903695{max-width:400px;margin:50px auto;background:#fff;border-radius:2px;padding:20px;font-family:Georgia,\"Times New Roman\",Times,serif;}.form-style-7.jsx-1365903695 h1.jsx-1365903695{display:block;text-align:center;padding:0;margin:0px 0px 20px 0px;color:#5c5c5c;font-size:x-large;}.form-style-7.jsx-1365903695 ul.jsx-1365903695{list-style:none;padding:0;margin:0;}.form-style-7.jsx-1365903695 li.jsx-1365903695{display:block;padding:9px;border:1px solid #dddddd;margin-bottom:30px;border-radius:3px;}.form-style-7.jsx-1365903695 li.jsx-1365903695:last-child{border:none;margin-bottom:0px;text-align:center;}.form-style-7.jsx-1365903695 li.jsx-1365903695>label.jsx-1365903695{display:block;float:left;margin-top:-19px;background:#ffffff;height:14px;padding:2px 5px 2px 5px;color:#b9b9b9;font-size:14px;overflow:hidden;font-family:Arial,Helvetica,sans-serif;}.form-style-7.jsx-1365903695 input[type=\"text\"].jsx-1365903695,.form-style-7.jsx-1365903695 input[type=\"date\"].jsx-1365903695,.form-style-7.jsx-1365903695 input[type=\"datetime\"].jsx-1365903695,.form-style-7.jsx-1365903695 input[type=\"email\"].jsx-1365903695,.form-style-7.jsx-1365903695 input[type=\"number\"].jsx-1365903695,.form-style-7.jsx-1365903695 input[type=\"search\"].jsx-1365903695,.form-style-7.jsx-1365903695 input[type=\"time\"].jsx-1365903695,.form-style-7.jsx-1365903695 input[type=\"url\"].jsx-1365903695,.form-style-7.jsx-1365903695 input[type=\"password\"].jsx-1365903695,.form-style-7.jsx-1365903695 textarea.jsx-1365903695,.form-style-7.jsx-1365903695 select.jsx-1365903695{box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;width:100%;display:block;outline:none;border:none;height:25px;line-height:25px;font-size:16px;padding:0;font-family:Georgia,\"Times New Roman\",Times,serif;}.form-style-7.jsx-1365903695 li.jsx-1365903695>span.jsx-1365903695{background:#f3f3f3;display:block;padding:3px;margin:0 -9px -9px -9px;text-align:center;color:#c0c0c0;font-family:Arial,Helvetica,sans-serif;font-size:11px;}.form-style-7.jsx-1365903695 textarea.jsx-1365903695{resize:none;}.form-style-7.jsx-1365903695 input[type=\"submit\"].jsx-1365903695,.form-style-7.jsx-1365903695 input[type=\"button\"].jsx-1365903695{background:#2471ff;border:none;padding:10px 20px 10px 20px;border-bottom:3px solid #5994ff;border-radius:3px;color:#d2e2ff;}.form-style-7.jsx-1365903695 input[type=\"submit\"].jsx-1365903695:hover,.form-style-7.jsx-1365903695 input[type=\"button\"].jsx-1365903695:hover{background:#6b9fff;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc3VjY2lcXERvY3VtZW50c1xcUFJPSkVDVFNcXFJFQUNUXFxyZXNlcnZhdGlvblxccmVzZXJ2YXRpb25zLWhvdGVsXFxjb21wb25lbnRzXFxXaWRlRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtR29CLEFBSVEsQUFFcUIsQUFRRixBQVFFLEFBS0YsQUFPRixBQUtFLEFBc0JRLEFBMEJILEFBVVAsQUFJTyxBQVNBLFlBM0VELEFBK0RwQixFQW5Gb0IsQUFhTixBQVlELEVBakNNLEFBZ0JQLENBbkJkLEVBb0ZrQixBQWNGLEFBU0QsR0FqRG1CLEdBckJiLENBakJSLEFBS2dCLElBT1AsQUE0RXBCLENBVDhCLENBdkZsQixDQVJNLEFBaUZKLEVBaEVkLE9BUjBCLEFBeUJMLEdBZ0RLLEdBckQxQixDQTVCb0IsRUFxQkMsQ0FpQ1EsT0F5Q0ssRUE3RHBCLEtBekJFLENBUkQsRUFpRkssQ0E1REEsR0FhTSxNQW9CYixDQXJEMEMsQUFRbkMsT0F5RUosQ0E1RGhCLEVBaUNnQixDQXdDSSxNQTVESixDQXpCaEIsR0F5RTJDLEdBM0I1QixLQXdDQyxFQTVEQyxNQXFCSCxNQXdDZCxHQTVEa0IsR0FxQkosQ0F4RGQsVUFrRmlCLENBekJFLENBckJ3QixhQStDM0MsR0F6QmlCLGVBQ0wsUUF0QlosRUF1QnVELGtEQUN2RCIsImZpbGUiOiJDOlxcVXNlcnNcXHN1Y2NpXFxEb2N1bWVudHNcXFBST0pFQ1RTXFxSRUFDVFxccmVzZXJ2YXRpb25cXHJlc2VydmF0aW9ucy1ob3RlbFxcY29tcG9uZW50c1xcV2lkZUZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jbGFzcyBXaWRlRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMubmFtZUVsZW0gPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuaG90ZWxFbGVtID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB0aGlzLmFycml2ZUVsZW0gPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuZGVwYXJ0RWxlbSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0SGFuZGxlciA9IGV2ZW50ID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lRWxlbS5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgaG90ZWwgPSB0aGlzLmhvdGVsRWxlbS5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgYXJyaXZlRGF0ZSA9IHRoaXMuYXJyaXZlRWxlbS5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZGVwYXJ0RGF0ZSA9IHRoaXMuZGVwYXJ0RWxlbS5jdXJyZW50LnZhbHVlO1xyXG5cclxuICAgIGlmIChuYW1lLnRyaW0oKS5sZW5ndGggPT09IDAgfHwgaG90ZWwudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyggXCJuYW1lLCBob3RlbFwiLCBuYW1lLCBob3RlbCk7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgIG11dGF0aW9uIHtcclxuICAgICAgICBjcmVhdGVCb29raW5nKGJvb2tpbmdJbnB1dDp7bmFtZTpcIiR7bmFtZX1cIiwgaG90ZWw6XCIke2hvdGVsfVwiLCBhcnJpdmFsRGF0ZTogXCIke2Fycml2ZURhdGV9XCIsIGRlcGFydHVyZURhdGU6XCIke2RlcGFydERhdGV9XCJ9KSB7XHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBob3RlbFxyXG4gICAgICAgICAgYXJyaXZhbERhdGVcclxuICAgICAgICAgIGRlcGFydHVyZURhdGVcclxuICAgICAgICAgIF9pZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBgXHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2dyYXBocWxcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgJiYgcmVzLnN0YXR1cyAhPT0gMjAxKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJmYWlsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzRGF0YSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNEYXRhXCIsIHJlc0RhdGEpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuY2FsbGJhY2tGbihyZXNEYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLXN0eWxlLTdcIiBvblN1Ym1pdD17dGhpcy5zdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgcmVmPXt0aGlzLm5hbWVFbGVtfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJmbmFtZVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZnVsbG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGZ1bGwgbmFtZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5FbnRlciB5b3VyIGZ1bGwgbmFtZSBoZXJlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJIb3RlbFwiPkhvdGVsPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiaG90ZWxcIiBuYW1lPVwiaG90ZWxcIiByZWY9e3RoaXMuaG90ZWxFbGVtfT5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIaWx0b24gVGltZXNcIj5IaWx0b24gVGltZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHYXJkZW5cIj5HYXJkZW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNaWxsZW5uaXVtXCI+TWlsbGVubml1bTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhhbXB0b25cIj5IYW1wdG9uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRG91YmxlVHJlZVwiPkRvdWJsZVRyZWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFbWJhc3N5XCI+RW1iYXNzeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDxzcGFuPlNlbGVjdCBIb3RlbDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJhcnJpdmVEYXRlXCIgcmVmPXt0aGlzLmFycml2ZUVsZW19IC8+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZGVwYXJ0RGF0ZVwiIHJlZj17dGhpcy5kZXBhcnRFbGVtfSAvPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzOTkwXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGgxIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDIwcHggMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzVjNWM1YztcclxuICAgICAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyB1bCB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgbGkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZzogOXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGxpOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBsaSA+IGxhYmVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTlweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHggNXB4IDJweCA1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYjliOWI5O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cImRhdGVcIl0sXHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJkYXRldGltZVwiXSxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwidGltZVwiXSxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cInVybFwiXSxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyB0ZXh0YXJlYSxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgc2VsZWN0IHtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwiZGF0ZVwiXTpmb2N1cyxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cImRhdGV0aW1lXCJdOmZvY3VzLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMsXHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJudW1iZXJcIl06Zm9jdXMsXHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Zm9jdXMsXHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJ0aW1lXCJdOmZvY3VzLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwidXJsXCJdOmZvY3VzLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMsXHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IHRleHRhcmVhOmZvY3VzLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBzZWxlY3Q6Zm9jdXMge1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBsaSA+IHNwYW4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgLTlweCAtOXB4IC05cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNjMGMwYzA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IHRleHRhcmVhIHtcclxuICAgICAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwic3VibWl0XCJdLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI0NzFmZjtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzU5OTRmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2QyZTJmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlcixcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cImJ1dHRvblwiXTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2YjlmZmY7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZUZvcm07XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\succi\\Documents\\PROJECTS\\REACT\\reservation\\reservations-hotel\\components\\WideForm.js */"));
    }
  }]);

  return WideForm;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (WideForm);

/***/ })

})
//# sourceMappingURL=index.js.7f554023ec0c0fbb7d28.hot-update.js.map