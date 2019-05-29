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
      var __ID = _this.IDElem.current.value;

      if (name.trim().length === 0 || hotel.trim().length === 0) {
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
      }, "div.jsx-1317323813{background-color:transparent;}.form-style-7.jsx-1317323813{max-width:400px;margin:50px auto;background:#fff;border-radius:2px;padding:20px;font-family:Georgia,\"Times New Roman\",Times,serif;}.form-style-7.jsx-1317323813 h1.jsx-1317323813{display:block;text-align:center;padding:0;margin:0px 0px 20px 0px;color:#5c5c5c;font-size:x-large;}.form-style-7.jsx-1317323813 ul.jsx-1317323813{list-style:none;padding:0;margin:0;}.form-style-7.jsx-1317323813 li.jsx-1317323813{display:block;padding:9px;border:1px solid #dddddd;margin-bottom:30px;border-radius:3px;}.form-style-7.jsx-1317323813 li.jsx-1317323813:last-child{border:none;margin-bottom:0px;text-align:center;}.form-style-7.jsx-1317323813 li.jsx-1317323813>label.jsx-1317323813{display:block;float:left;margin-top:-19px;background:#ffffff;height:14px;padding:2px 5px 2px 5px;color:#b9b9b9;font-size:14px;overflow:hidden;font-family:Arial,Helvetica,sans-serif;}.form-style-7.jsx-1317323813 input[type=\"text\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"date\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"datetime\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"email\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"number\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"search\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"time\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"url\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"password\"].jsx-1317323813,.form-style-7.jsx-1317323813 textarea.jsx-1317323813,.form-style-7.jsx-1317323813 select.jsx-1317323813{box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;width:100%;display:block;outline:none;border:none;height:25px;line-height:25px;font-size:16px;padding:0;font-family:Georgia,\"Times New Roman\",Times,serif;}.form-style-7.jsx-1317323813 li.jsx-1317323813>span.jsx-1317323813{background:#f3f3f3;display:block;padding:3px;margin:0 -9px -9px -9px;text-align:center;color:#c0c0c0;font-family:Arial,Helvetica,sans-serif;font-size:11px;}.form-style-7.jsx-1317323813 textarea.jsx-1317323813{resize:none;}.form-style-7.jsx-1317323813 input[type=\"submit\"].jsx-1317323813,.form-style-7.jsx-1317323813 input[type=\"button\"].jsx-1317323813{background:#2471ff;border:none;padding:10px 20px 10px 20px;border-bottom:3px solid #5994ff;border-radius:3px;color:#d2e2ff;}.form-style-7.jsx-1317323813 input[type=\"submit\"].jsx-1317323813:hover,.form-style-7.jsx-1317323813 input[type=\"button\"].jsx-1317323813:hover{background:#6b9fff;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc3VjY2lcXERvY3VtZW50c1xcUFJPSkVDVFNcXFJFQUNUXFxyZXNlcnZhdGlvblxccmVzZXJ2YXRpb25zLWhvdGVsXFxjb21wb25lbnRzXFxSZXNlcnZhdGlvbkZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUVvQixBQUcwQyxBQUdiLEFBUUYsQUFRRSxBQUtGLEFBT0YsQUFLRSxBQXNCUSxBQTBCSCxBQVVQLEFBSU8sQUFTQSxZQTNFRCxBQStEcEIsRUFuRm9CLEFBYU4sQUFZRCxFQWpDTSxBQWdCUCxHQWlFSSxBQWNGLEFBU0QsR0FqRG1CLEdBckJiLENBakJSLEFBS2dCLEdBekIzQixDQWdDb0IsQUE0RXBCLENBVDhCLENBdkZsQixDQVJNLEFBaUZKLEVBaEVkLE9BUjBCLEFBeUJMLEdBZ0RLLEdBckQxQixDQTVCb0IsRUFxQkMsQ0FpQ1EsT0F5Q0ssRUE3RHBCLEtBekJFLENBUkQsRUFpRkssQ0E1REEsR0FhTSxNQW9CYixDQXJEMEMsQUFRbkMsT0F5RUosQ0E1RGhCLEVBaUNnQixDQXdDSSxNQTVESixDQXpCaEIsR0F5RTJDLEdBM0I1QixLQXdDQyxFQTVEQyxNQXFCSCxNQXdDZCxHQTVEa0IsR0FxQkosQ0F4RGQsVUFrRmlCLENBekJFLENBckJ3QixhQStDM0MsR0F6QmlCLGVBQ0wsUUF0QlosRUF1QnVELGtEQUN2RCIsImZpbGUiOiJDOlxcVXNlcnNcXHN1Y2NpXFxEb2N1bWVudHNcXFBST0pFQ1RTXFxSRUFDVFxccmVzZXJ2YXRpb25cXHJlc2VydmF0aW9ucy1ob3RlbFxcY29tcG9uZW50c1xcUmVzZXJ2YXRpb25Gb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY2xhc3MgUmVzZXJ2YXRpb25Gb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5JREVsZW0gPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdEhhbmRsZXIgPSBldmVudCA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgX19JRCA9IHRoaXMuSURFbGVtLmN1cnJlbnQudmFsdWU7XHJcbiAgICBpZiAobmFtZS50cmltKCkubGVuZ3RoID09PSAwIHx8IGhvdGVsLnRyaW0oKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coIFwiX19JRFwiLCBfX0lEKTtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgcXVlcnk6IGBcclxuICAgICAgcXVlcnkge1xyXG4gICAgICAgIGJvb2tpbmcoaWRJbnB1dDoge2lkOiR7X19JRH19KSB7XHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBob3RlbFxyXG4gICAgICAgICAgYXJyaXZhbERhdGVcclxuICAgICAgICAgIGRlcGFydHVyZURhdGVcclxuICAgICAgICAgIF9pZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBgXHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2dyYXBocWxcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgJiYgcmVzLnN0YXR1cyAhPT0gMjAxKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJmYWlsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzRGF0YSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNEYXRhXCIsIHJlc0RhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzRGF0YS5kYXRhLmJvb2tpbmdcIiwgcmVzRGF0YS5kYXRhLmJvb2tpbmcpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuY2FsbGJhY2tGbihyZXNEYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLXN0eWxlLTdcIiBvblN1Ym1pdD17dGhpcy5zdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgcmVmPXt0aGlzLklERWxlbX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciByZXNlcnZhdGlvbiBJRFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5FbnRlciB5b3VyIHJlc2VydmF0aW9uIElEIGhlcmU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBoMSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAyMHB4IDBweDtcclxuICAgICAgICAgICAgY29sb3I6ICM1YzVjNWM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgdWwge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGxpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDlweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBsaTpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgbGkgPiBsYWJlbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE5cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4IDVweCAycHggNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2I5YjliOTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJkYXRlXCJdLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwiZGF0ZXRpbWVcIl0sXHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cInRpbWVcIl0sXHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJ1cmxcIl0sXHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgdGV4dGFyZWEsXHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IHNlbGVjdCB7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cImRhdGVcIl06Zm9jdXMsXHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJkYXRldGltZVwiXTpmb2N1cyxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwibnVtYmVyXCJdOmZvY3VzLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOmZvY3VzLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyBpbnB1dFt0eXBlPVwidGltZVwiXTpmb2N1cyxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cInVybFwiXTpmb2N1cyxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmZvY3VzLFxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyB0ZXh0YXJlYTpmb2N1cyxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgc2VsZWN0OmZvY3VzIHtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgbGkgPiBzcGFuIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIC05cHggLTlweCAtOXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYzBjMGMwO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tc3R5bGUtNyB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcclxuICAgICAgICAgIC5mb3JtLXN0eWxlLTcgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNDcxZmY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM1OTk0ZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgY29sb3I6ICNkMmUyZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIsXHJcbiAgICAgICAgICAuZm9ybS1zdHlsZS03IGlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNmI5ZmZmO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VydmF0aW9uRm9ybTtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\succi\\Documents\\PROJECTS\\REACT\\reservation\\reservations-hotel\\components\\ReservationForm.js */"));
    }
  }]);

  return ReservationForm;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ReservationForm);

/***/ })

})
//# sourceMappingURL=index.js.c49b3e3a37f3e4246ed4.hot-update.js.map