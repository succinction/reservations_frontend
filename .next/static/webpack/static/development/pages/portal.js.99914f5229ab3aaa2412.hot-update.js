webpackHotUpdate("static\\development\\pages\\portal.js",{

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
      var __ID = _this.IDElem.current.value;

      if (__ID.trim().length === 0) {
        return;
      }

      console.log("__ID", __ID);
      var requestBody = {
        query: "\n      query {\n        booking(idInput: {id:".concat(__ID, "}) {\n          name\n          hotel\n          arrivalDate\n          departureDate\n          _id\n        }\n      }\n      ")
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
        console.log("resData.data.booking", resData.data.booking);

        _this.props.callbackFn(resData);
      }).catch(function (err) {
        console.log(err);
      });
    });

    _this.IDElem = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ReservationForm, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form", {
        onSubmit: this.submitHandler,
        className: "jsx-1317323813" + " " + "form-style-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "name",
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        ref: this.IDElem,
        type: "text",
        placeholder: "Your reservation ID",
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Enter your reservation ID here")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "submit",
        value: "Submit",
        className: "jsx-1317323813",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "1317323813",
        __self: this
      }, "div.jsx-1317323813{background-color:transparent;}.form-style-7.jsx-1317323813{max-width:400px;margin:50px auto;background:#fff;border-radius:2px;padding:20px;font-family:Georgia,\"Times New Roman\",Times,serif;}.form-style-7.jsx-1317323813 h1.jsx-1317323813{display:block;text-align:center;padding:0;margin:0px 0px 20px 0px;color:#5c5c5c;font-size:x-large;}.form-style-7.jsx-1317323813 ul.jsx-1317323813{list-style:none;padding:0;margin:0;}.form-style-7.jsx-1317323813 li.jsx-1317323813{display:block;padding:9px;border:1px solid #dddddd;margin-bottom:30px;border-radius:3px;}.form-style-7.jsx-1317323813 li.jsx-1317323813:last-child{border:none;margin-bottom:0px;text-align:center;}.form-style-7.jsx-1317323813 li.jsx-1317323813>label.jsx-1317323813{display:block;float:left;margin-top:-19px;background:#ffffff;height:14px;padding:2px 5px 2px 5px;color:#b9b9b9;font-size:14px;overflow:hidden;font-family:Arial,Helvetica,sans-serif;}.form-style-7.jsx-1317323813 input[type=\"text\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"date\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"datetime\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"email\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"number\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"search\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"time\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"url\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"password\"].jsx-1317323813,.form-style-7.jsx-1317323813 textarea.jsx-1317323813,.form-style-7.jsx-1317323813 select.jsx-1317323813{box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;width:100%;display:block;outline:none;border:none;height:25px;line-height:25px;font-size:16px;padding:0;font-family:Georgia,\"Times New Roman\",Times,serif;}.form-style-7.jsx-1317323813 li.jsx-1317323813>span.jsx-1317323813{background:#f3f3f3;display:block;padding:3px;margin:0 -9px -9px -9px;text-align:center;color:#c0c0c0;font-family:Arial,Helvetica,sans-serif;font-size:11px;}.form-style-7.jsx-1317323813 textarea.jsx-1317323813{resize:none;}.form-style-7.jsx-1317323813 input[type=\"submit\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"button\"].jsx-1317323813{background:#2471ff;border:none;padding:10px 20px 10px 20px;border-bottom:3px solid #5994ff;border-radius:3px;color:#d2e2ff;}.form-style-7.jsx-1317323813 input[type=\"submit\"].jsx-1317323813:hover,.form-style-7.jsx-1317323813 input[type=\"button\"].jsx-1317323813:hover{background:#6b9fff;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc3VjY2lcXERvY3VtZW50c1xcUFJPSkVDVFNcXFJFQUNUXFxyZXNlcnZhdGlvblxccmVzZXJ2YXRpb25zLWhvdGVsXFxjb21wb25lbnRzXFxSZXNlcnZhdGlvbkZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUVvQixBQUcwQyxBQUdiLEFBUUYsQUFRRSxBQUtGLEFBT0YsQUFLRSxBQXNCUSxBQTBCSCxBQVVQLEFBSU8sQUFTQSxZQTNFRCxBQStEcEIsRUFuRm9CLEFBYU4sQUFZRCxFQWpDTSxBQWdCUCxHQWlFSSxBQWNGLEFBU0QsR0FqRG1CLEdBckJiLENBakJSLEFBS2dCLEdBekIzQixDQWdDb0IsQUE0RXBCLENBVDhCLENBdkZsQixDQVJNLEFBaUZKLEVBaEVkLE9BUjBCLEFBeUJMLEdBZ0RLLEdBckQxQixDQTVCb0IsRUFxQkMsQ0FpQ1EsT0F5Q0ssRUE3RHBCLEtBekJFLENBUkQsRUFpRkssQ0E1REEsR0FhTSxNQW9CYixDQXJEMEMsQUFRbkMsT0F5RUosQ0E1RGhCLEVBaUNnQixDQXdDSSxNQTVESixDQXpCaEIsR0F5RTJDLEdBM0I1QixLQXdDQyxFQTVEQyxNQXFCSCxNQXdDZCxHQTVEa0IsR0FxQkosQ0F4RGQsVUFrRmlCLENBekJFLENBckJ3QixhQStDM0MsR0F6QmlCLGVBQ0wsUUF0QlosRUF1QnVELGtEQUN2RCIsImZpbGUiOiJDOlxcVXNlcnNcXHN1Y2NpXFxEb2N1bWVudHNcXFBST0pFQ1RTXFxSRUFDVFxccmVzZXJ2YXRpb25cXHJlc2VydmF0aW9ucy1ob3RlbFxcY29tcG9uZW50c1xcUmVzZXJ2YXRpb25Gb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY2xhc3MgUmVzZXJ2YXRpb25Gb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5JREVsZW0gPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdEhhbmRsZXIgPSBldmVudCA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgX19JRCA9IHRoaXMuSURFbGVtLmN1cnJlbnQudmFsdWU7XHJcbiAgICBpZiAoX19JRC50cmltKCkubGVuZ3RoID09PSAwICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyggXCJfX0lEXCIsIF9fSUQpO1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBxdWVyeTogYFxyXG4gICAgICBxdWVyeSB7XHJcbiAgICAgICAgYm9va2luZyhpZElucHV0OiB7aWQ6JHtfX0lEfX0pIHtcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGhvdGVsXHJcbiAgICAgICAgICBhcnJpdmFsRGF0ZVxyXG4gICAgICAgICAgZGVwYXJ0dXJlRGF0ZVxyXG4gICAgICAgICAgX2lkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGBcclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvZ3JhcGhxbFwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCAmJiByZXMuc3RhdHVzICE9PSAyMDEpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImZhaWxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihyZXNEYXRhID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc0RhdGFcIiwgcmVzRGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNEYXRhLmRhdGEuYm9va2luZ1wiLCByZXNEYXRhLmRhdGEuYm9va2luZyk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jYWxsYmFja0ZuKHJlc0RhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0tc3R5bGUtN1wiIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICByZWY9e3RoaXMuSURFbGVtfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIHJlc2VydmF0aW9uIElEXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkVudGVyIHlvdXIgcmVzZXJ2YXRpb24gSUQgaGVyZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGgxIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDIwcHggMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzVjNWM1YztcclxuICAgICAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyB1bCB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgbGkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZzogOXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGxpOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBsaSA+IGxhYmVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTlweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHggNXB4IDJweCA1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYjliOWI5O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cImRhdGVcIl0sXHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJkYXRldGltZVwiXSxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwidGltZVwiXSxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cInVybFwiXSxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyB0ZXh0YXJlYSxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgc2VsZWN0IHtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwiZGF0ZVwiXTpmb2N1cyxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cImRhdGV0aW1lXCJdOmZvY3VzLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMsXHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJudW1iZXJcIl06Zm9jdXMsXHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Zm9jdXMsXHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJ0aW1lXCJdOmZvY3VzLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwidXJsXCJdOmZvY3VzLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMsXHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IHRleHRhcmVhOmZvY3VzLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBzZWxlY3Q6Zm9jdXMge1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBsaSA+IHNwYW4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgLTlweCAtOXB4IC05cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNjMGMwYzA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IHRleHRhcmVhIHtcclxuICAgICAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwic3VibWl0XCJdLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI0NzFmZjtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzU5OTRmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2QyZTJmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlcixcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cImJ1dHRvblwiXTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2YjlmZmY7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZXJ2YXRpb25Gb3JtO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\succi\\Documents\\PROJECTS\\REACT\\reservation\\reservations-hotel\\components\\ReservationForm.js */"));
    }
  }]);

  return ReservationForm;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ReservationForm);

/***/ })

})
//# sourceMappingURL=portal.js.99914f5229ab3aaa2412.hot-update.js.map