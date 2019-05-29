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
        className: "jsx-4012139753",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form", {
        classsName: "form-style-7",
        className: "jsx-4012139753",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        className: "jsx-4012139753",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "jsx-4012139753",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "name",
        className: "jsx-4012139753",
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
        className: "jsx-4012139753",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "jsx-4012139753",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Enter your full name here")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "jsx-4012139753",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "Hotel",
        className: "jsx-4012139753",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Hotel"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
        id: "hotel",
        name: "hotel",
        ref: this.hotelElem,
        className: "jsx-4012139753",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Hilton Times",
        className: "jsx-4012139753",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Hilton Times"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Garden",
        className: "jsx-4012139753",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Garden"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Millennium",
        className: "jsx-4012139753",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Millennium"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Hampton",
        className: "jsx-4012139753",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Hampton"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "DoubleTree",
        className: "jsx-4012139753",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "DoubleTree"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Embassy",
        className: "jsx-4012139753",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Embassy")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "jsx-4012139753",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Select Hotel")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "jsx-4012139753",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "date",
        name: "arriveDate",
        ref: this.arriveElem,
        className: "jsx-4012139753",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "jsx-4012139753",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "date",
        name: "departDate",
        ref: this.departElem,
        className: "jsx-4012139753",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "jsx-4012139753",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "submit",
        value: "Submit",
        className: "jsx-4012139753",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "4012139753",
        __self: this
      }, "*.jsx-4012139753{box-sizing:border-box;}.form-style-7.jsx-4012139753{max-width:400px;margin:50px auto;background:#fff;border-radius:2px;padding:20px;font-family:Georgia,\"Times New Roman\",Times,serif;}.form-style-7.jsx-4012139753 h1.jsx-4012139753{display:block;text-align:center;padding:0;margin:0px 0px 20px 0px;color:#5C5C5C;font-size:x-large;}.form-style-7.jsx-4012139753 ul.jsx-4012139753{list-style:none;padding:0;margin:0;}.form-style-7.jsx-4012139753 li.jsx-4012139753{display:block;padding:9px;border:1px solid #DDDDDD;margin-bottom:30px;border-radius:3px;}.form-style-7.jsx-4012139753 li.jsx-4012139753:last-child{border:none;margin-bottom:0px;text-align:center;}.form-style-7.jsx-4012139753 li.jsx-4012139753>label.jsx-4012139753{display:block;float:left;margin-top:-19px;background:#FFFFFF;height:14px;padding:2px 5px 2px 5px;color:#B9B9B9;font-size:14px;overflow:hidden;font-family:Arial,Helvetica,sans-serif;}.form-style-7.jsx-4012139753 input[type=\"text\"].jsx-4012139753,.form-style-7.jsx-4012139753 input[type=\"date\"].jsx-4012139753,.form-style-7.jsx-4012139753 input[type=\"datetime\"].jsx-4012139753,.form-style-7.jsx-4012139753 input[type=\"email\"].jsx-4012139753,.form-style-7.jsx-4012139753 input[type=\"number\"].jsx-4012139753,.form-style-7.jsx-4012139753 input[type=\"search\"].jsx-4012139753,.form-style-7.jsx-4012139753 input[type=\"time\"].jsx-4012139753,.form-style-7.jsx-4012139753 input[type=\"url\"].jsx-4012139753,.form-style-7.jsx-4012139753 input[type=\"password\"].jsx-4012139753,.form-style-7.jsx-4012139753 textarea.jsx-4012139753,.form-style-7.jsx-4012139753 select.jsx-4012139753{box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;width:100%;display:block;outline:none;border:none;height:25px;line-height:25px;font-size:16px;padding:0;font-family:Georgia,\"Times New Roman\",Times,serif;}.form-style-7.jsx-4012139753 li.jsx-4012139753>span.jsx-4012139753{background:#F3F3F3;display:block;padding:3px;margin:0 -9px -9px -9px;text-align:center;color:#C0C0C0;font-family:Arial,Helvetica,sans-serif;font-size:11px;}.form-style-7.jsx-4012139753 textarea.jsx-4012139753{resize:none;}.form-style-7.jsx-4012139753 input[type=\"submit\"].jsx-4012139753,.form-style-7.jsx-4012139753 input[type=\"button\"].jsx-4012139753{background:#2471FF;border:none;padding:10px 20px 10px 20px;border-bottom:3px solid #5994FF;border-radius:3px;color:#D2E2FF;}.form-style-7.jsx-4012139753 input[type=\"submit\"].jsx-4012139753:hover,.form-style-7.jsx-4012139753 input[type=\"button\"].jsx-4012139753:hover{background:#6B9FFF;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc3VjY2lcXERvY3VtZW50c1xcUFJPSkVDVFNcXFJFQUNUXFxyZXNlcnZhdGlvblxccmVzZXJ2YXRpb25zLWhvdGVsXFxjb21wb25lbnRzXFxXaWRlRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtR29CLEFBR21DLEFBSVAsQUFRRCxBQVFDLEFBS0QsQUFPSCxBQUtHLEFBdUJRLEFBMkJILEFBVVIsQUFJUSxBQVNBLFlBN0VELEFBaUV0QixFQXJGc0IsQUFhTixBQVlELEVBakNLLEFBZ0JQLEdBbUVLLEFBY0YsQUFTRixHQTlHWixBQTREZ0MsR0F0QmIsQ0FqQlQsQUFLZ0IsSUFPTixBQThFdEIsQ0FUZ0MsQ0F6RmxCLENBUkssQUFtRkgsRUFsRWhCLE9BUjRCLEFBeUJMLEdBa0RLLEdBdkQ1QixDQTVCcUIsRUFxQkUsQ0FrQ1EsT0EwQ0ssRUEvRHBCLEtBekJFLENBUkYsRUFtRk0sQ0E5REEsR0FhTSxNQXFCYixDQXREMEMsQUFRcEMsT0EyRUgsQ0E5RGxCLEVBa0NrQixDQXlDSSxNQTlESixDQXpCbEIsR0EyRTZDLEdBNUI1QixLQXlDQyxFQTlEQyxNQXNCSCxNQXlDaEIsR0E5RG9CLEdBc0JKLENBekRoQixVQW9GbUIsQ0ExQkUsQ0F0QndCLGFBaUQ3QyxHQTFCbUIsZUFDTCxRQXZCZCxFQXdCeUQsa0RBQ3pEIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc3VjY2lcXERvY3VtZW50c1xcUFJPSkVDVFNcXFJFQUNUXFxyZXNlcnZhdGlvblxccmVzZXJ2YXRpb25zLWhvdGVsXFxjb21wb25lbnRzXFxXaWRlRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNsYXNzIFdpZGVGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5uYW1lRWxlbSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgdGhpcy5ob3RlbEVsZW0gPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuYXJyaXZlRWxlbSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgdGhpcy5kZXBhcnRFbGVtID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgfVxyXG5cclxuICBzdWJtaXRIYW5kbGVyID0gZXZlbnQgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWVFbGVtLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBob3RlbCA9IHRoaXMuaG90ZWxFbGVtLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBhcnJpdmVEYXRlID0gdGhpcy5hcnJpdmVFbGVtLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBkZXBhcnREYXRlID0gdGhpcy5kZXBhcnRFbGVtLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgaWYgKG5hbWUudHJpbSgpLmxlbmd0aCA9PT0gMCB8fCBob3RlbC50cmltKCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKCBcIm5hbWUsIGhvdGVsXCIsIG5hbWUsIGhvdGVsKTtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgcXVlcnk6IGBcclxuICAgICAgbXV0YXRpb24ge1xyXG4gICAgICAgIGNyZWF0ZUJvb2tpbmcoYm9va2luZ0lucHV0OntuYW1lOlwiJHtuYW1lfVwiLCBob3RlbDpcIiR7aG90ZWx9XCIsIGFycml2YWxEYXRlOiBcIiR7YXJyaXZlRGF0ZX1cIiwgZGVwYXJ0dXJlRGF0ZTpcIiR7ZGVwYXJ0RGF0ZX1cIn0pIHtcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGhvdGVsXHJcbiAgICAgICAgICBhcnJpdmFsRGF0ZVxyXG4gICAgICAgICAgZGVwYXJ0dXJlRGF0ZVxyXG4gICAgICAgICAgX2lkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGBcclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvZ3JhcGhxbFwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCAmJiByZXMuc3RhdHVzICE9PSAyMDEpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImZhaWxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihyZXNEYXRhID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc0RhdGFcIiwgcmVzRGF0YSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jYWxsYmFja0ZuKHJlc0RhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxmb3JtIGNsYXNzc05hbWU9XCJmb3JtLXN0eWxlLTdcIj5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgcmVmPXt0aGlzLm5hbWVFbGVtfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJmbmFtZVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZnVsbG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGZ1bGwgbmFtZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5FbnRlciB5b3VyIGZ1bGwgbmFtZSBoZXJlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJIb3RlbFwiPkhvdGVsPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiaG90ZWxcIiBuYW1lPVwiaG90ZWxcIiByZWY9e3RoaXMuaG90ZWxFbGVtfT5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIaWx0b24gVGltZXNcIj5IaWx0b24gVGltZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHYXJkZW5cIj5HYXJkZW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNaWxsZW5uaXVtXCI+TWlsbGVubml1bTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhhbXB0b25cIj5IYW1wdG9uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRG91YmxlVHJlZVwiPkRvdWJsZVRyZWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFbWJhc3N5XCI+RW1iYXNzeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDxzcGFuPlNlbGVjdCBIb3RlbDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJhcnJpdmVEYXRlXCIgcmVmPXt0aGlzLmFycml2ZUVsZW19IC8+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZGVwYXJ0RGF0ZVwiIHJlZj17dGhpcy5kZXBhcnRFbGVtfSAvPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICoge1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTd7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDo0MDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOjUwcHggYXV0bztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjJweDtcclxuICAgICAgICAgICAgcGFkZGluZzoyMHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybS1zdHlsZS03IGgxe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCAwcHggMjBweCAwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNUM1QzVDO1xyXG4gICAgICAgICAgICBmb250LXNpemU6eC1sYXJnZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0tc3R5bGUtNyB1bHtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTpub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1x0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLXN0eWxlLTcgbGl7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgI0RERERERDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybS1zdHlsZS03IGxpOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0tc3R5bGUtNyBsaSA+IGxhYmVse1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xOXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA1cHggMnB4IDVweDtcclxuICAgICAgICAgICAgY29sb3I6ICNCOUI5Qjk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwiZGF0ZVwiXSxcclxuICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJkYXRldGltZVwiXSxcclxuICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXHJcbiAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxyXG4gICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cInRpbWVcIl0sXHJcbiAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwidXJsXCJdLFxyXG4gICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG4gICAgICAgIC5mb3JtLXN0eWxlLTcgdGV4dGFyZWEsXHJcbiAgICAgICAgLmZvcm0tc3R5bGUtNyBzZWxlY3QgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcclxuICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJkYXRlXCJdOmZvY3VzLFxyXG4gICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cImRhdGV0aW1lXCJdOmZvY3VzLFxyXG4gICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxyXG4gICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cIm51bWJlclwiXTpmb2N1cyxcclxuICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Zm9jdXMsXHJcbiAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwidGltZVwiXTpmb2N1cyxcclxuICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJ1cmxcIl06Zm9jdXMsXHJcbiAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMsXHJcbiAgICAgICAgLmZvcm0tc3R5bGUtNyB0ZXh0YXJlYTpmb2N1cyxcclxuICAgICAgICAuZm9ybS1zdHlsZS03IHNlbGVjdDpmb2N1cyBcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLXN0eWxlLTcgbGkgPiBzcGFue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgLTlweCAtOXB4IC05cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNDMEMwQzA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLXN0eWxlLTcgdGV4dGFyZWF7XHJcbiAgICAgICAgICAgIHJlc2l6ZTpub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXHJcbiAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwiYnV0dG9uXCJde1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjQ3MUZGO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNTk5NEZGO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRDJFMkZGO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIsXHJcbiAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNkI5RkZGO1xyXG4gICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpZGVGb3JtO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\succi\\Documents\\PROJECTS\\REACT\\reservation\\reservations-hotel\\components\\WideForm.js */"));
    }
  }]);

  return WideForm;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (WideForm);

/***/ }),

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
      responseData: null,
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
      window.addEventListener("resize", this.resizeHandler); // this.setState({isMobile:})

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
          _this2.setState({
            isMobile: window.innerWidth < _this2.breakpoint
          });
        }
      }; // debounce(resizeLayout, 200);


      resizeLayout();
    } // responseFn = message => {

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
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_PageTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      }, "Make your reservations")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_Accordion__WEBPACK_IMPORTED_MODULE_9__["default"], {
        ID: "me_1",
        actionID: "accordionClicker1",
        groupID: "AAA",
        groupFn: this.groupFn,
        controler: this.state.controler,
        callbackFn: this.callbackFn,
        initOpen: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_WideForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
        callbackFn: this.responseFn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_PageTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
        isMobile: this.state.isMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Results"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_ResponseMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
        message: this.state.responseData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
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
//# sourceMappingURL=index.js.3a7b2a1bce12c182e126.hot-update.js.map