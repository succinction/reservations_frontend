webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Accordion.js":
/*!*********************************!*\
  !*** ./components/Accordion.js ***!
  \*********************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");







var _jsxFileName = "C:\\Users\\succi\\Documents\\PROJECTS\\REACT\\reservation\\reservations-hotel\\components\\Accordion.js";



var Accordion =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Accordion, _Component);

  function Accordion(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Accordion);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Accordion).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "initClosed", function () {
      var element = document.getElementById(_this.myID);
      gsap__WEBPACK_IMPORTED_MODULE_8__["TweenLite"].set(element, {
        height: 0
      });
      _this.isOpen = false;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_toggleSwitch", function () {
      _this.groupAccordionFn({
        myID: _this.myID,
        groupID: _this.groupID
      });

      _this._toggle(!_this.isOpen);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_toggle", function (ON) {
      var easing = !!_this.props.invertEasing ? Power2.easeIn : Power2.easeOut;
      var seconds = 0.4529;
      var element = document.getElementById(_this.myID);

      var complete = function complete(o) {
        document.getElementById(_this.myID).style.height = "auto";
      };

      if (ON) {
        var hite = document.getElementById(_this.myID).scrollHeight;
        gsap__WEBPACK_IMPORTED_MODULE_8__["TweenLite"].to(element, seconds + _this.timeAdjustment + _this.offsetTiming, {
          ease: easing,
          height: hite,
          onComplete: complete
        });
      } else {
        gsap__WEBPACK_IMPORTED_MODULE_8__["TweenLite"].to(element, seconds + _this.timeAdjustment - _this.offsetTiming, {
          ease: easing,
          height: 0
        });
      }

      _this.isOpen = ON;

      _this.callbackFn(_this.isOpen, _this.props.ID);
    });

    _this.myID = "accordion_".concat(_this.props.ID);
    _this.isOpen = true;
    _this.groupID = !!_this.props.groupID ? _this.props.groupID : "noID_" + _this.props.ID;
    _this.groupAccordionFn = !!_this.props.groupFn ? _this.props.groupFn : function (arg) {
      console.log(" !! NOT groupFn: ", arg);
    };
    _this.callbackFn = _this.props.callbackFn ? _this.props.callbackFn : function () {};
    _this.timeAdjustment = !!_this.props.addSeconds ? Number(_this.props.addSeconds) : 0;
    _this.offsetTiming = !!_this.props.offsetSeconds ? Number(_this.props.offsetSeconds) : 0;
    _this.initOpen = _this.props.initOpen;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Accordion, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.clickTarget = document.getElementById(this.props.actionID);

      if (!!this.clickTarget) {
        this.clickTarget.style.cursor = "pointer";
        this.clickTarget.addEventListener("click", function (event) {
          // console.log("click");
          _this2._toggleSwitch();
        });
        this.clickTarget.addEventListener("keypress", function (event) {
          if (event.key === "Enter") {
            _this2._toggleSwitch();
          }
        });
      }

      if (!this.initOpen) {
        this.initClosed();
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (nextProps.controler.group === this.groupID) {
        if (nextProps.controler.identifier !== this.myID) {
          if (this.isOpen) {
            this._toggle(false);
          }
        }
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var styles = {
        overflow: "hidden"
      };
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: this.myID,
        style: styles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "".concat(this.myID, "_inner_lining"),
        style: {
          background: "#ccc"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, this.props.children));
    }
  }]);

  return Accordion;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Accordion); ////////////////////////////////////////////////////////
/// ORIGINAL toggle
// _toggle = (ON) => {
//     const oneZero = ON ? 1 : 0
//     const seconds = .4529
//     const element = document.getElementById(this.myID)
//     const getHeight = () => element.scrollHeight
//     const height = getHeight() * oneZero + "px"
//     TweenLite.to(element, seconds, { ease: Power3.easeOut, maxHeight: height })
//     this.isOpen = ON
//     this.callbackFn(this.isOpen, this.props.ID)
// }
// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// // import Quiz from './components/Quiz'
// import Accordion from './components/Accordion'
// class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = { controler: { identifier: "", group: "" } }
//     }
//     groupFn = (o) => {
//         this.setState({ controler: { identifier: o.myID, group: o.groupID } })
//     }
//     callbackFn = (bool) => {
//         // Do some side effect
//         console.log("callbackFn(" + bool + ")")
//     }
//     render() {
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <img src={logo} className="App-logo" alt="logo" />
//                     <h1 className="App-title">Accordion Render Prop</h1>
//                 </header>
//                 <button id="accordionClicker1" >Take Quiz One</button>
//                 <Accordion ID="me_1" actionID="accordionClicker1" groupID="AAA"  groupFn={this.groupFn} controler={this.state.controler} callbackFn={this.callbackFn} >
//                     <div>
//                         <p>  stuff 1</p>
//                         <p>callback function called</p>
//                     </div>
//                 </Accordion>
//                 <hr />
//                 <button id="accordionClicker_2" >Take Another Quiz</button>
//                 <Accordion ID="my_2" actionID="accordionClicker_2" groupID="AAA" groupFn={this.groupFn} controler={this.state.controler} >
//                     <div>
//                         <p>  stuff 2</p>
//                     </div>
//                 </Accordion>
//                 <hr />
//                 <h2>another set of things:</h2>
//                 <button id="{this.keyID}" >Tell Us about it</button>
//                 <Accordion ID="{this.keyID}" actionID="{this.keyID}"  callbackFn={this.callbackFn}>
//                     <div>
//                         <p>These are independent</p>
//                         <p>callback function called</p>
//                     </div>
//                 </Accordion>
//                 <button id="accordionClicker_3b" >Tell Us about it</button>
//                 <Accordion ID="me_3b" actionID="accordionClicker_3b" >
//                     <div>
//                         <p>Accordions do not need to be grouped. Only ID and actionID are required.</p>
//                     </div>
//                 </Accordion>
//                 <hr />
//                 <button id="accordionClicker_4b" >Tell Us about it</button>
//                 <Accordion ID="me_4b" actionID="accordionClicker_4b" >
//                     <div>
//                         <p>  hi 4</p>
//                     </div>
//                 </Accordion>
//                 <hr />
//                 <button id="accordionClicker_5b" >Tell Us about it</button>
//                 <Accordion ID="me_5b" actionID="accordionClicker_5b" >
//                     <div>
//                         <p>  hi5 </p>
//                     </div>
//                 </Accordion>
//                 <hr />
//                 <h2>another set of things:</h2>
//                 <button id="accordionClicker_3" >Tell Us about it</button>
//                 <Accordion ID="me_3" actionID="accordionClicker_3" groupID="ABA"  groupFn={this.groupFn} controler={this.state.controler} >
//                     <div>
//                         <p>  hi 3</p>
//                     </div>
//                 </Accordion>
//                 <hr />
//                 <button id="accordionClicker_4" >Tell Us about it</button>
//                 <Accordion ID="me_4" actionID="accordionClicker_4" groupID="ABA"  groupFn={this.groupFn} controler={this.state.controler} >
//                     <div>
//                         <p>  hi 4</p>
//                     </div>
//                 </Accordion>
//                 <hr />
//                 <button id="accordionClicker_5" >Tell Us about it</button>
//                 <Accordion ID="me_5" actionID="accordionClicker_5" groupID="ABA"  groupFn={this.groupFn} controler={this.state.controler} >
//                     <div>
//                         <p>  hi5 </p>
//                     </div>
//                 </Accordion>
//                 <hr />
//             </div>
//         );
//     }
// }
// export default App;

/***/ })

})
//# sourceMappingURL=index.js.76dba7bb4b53e5afdb2f.hot-update.js.map