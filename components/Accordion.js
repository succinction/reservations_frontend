import React, { Component } from "react";
import { TweenLite, Power3 } from "gsap";

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.myID = `accordion_${this.props.ID}`;
    this.isOpen = true;
    this.groupID = !!this.props.groupID
      ? this.props.groupID
      : "noID_" + this.props.ID;
    this.groupAccordionFn = !!this.props.groupFn
      ? this.props.groupFn
      : arg => {
          console.log(" !! NOT groupFn: ", arg);
        };
    this.callbackFn = this.props.callbackFn ? this.props.callbackFn : () => {};
    this.timeAdjustment = !!this.props.addSeconds
      ? Number(this.props.addSeconds)
      : 0;
    this.offsetTiming = !!this.props.offsetSeconds
      ? Number(this.props.offsetSeconds)
      : 0;
      this.initOpen = !!this.props.initOpen ? this.props.initOpen : true
  }

  componentDidMount() {
    this.clickTarget = document.getElementById(this.props.actionID);

    if (!!this.clickTarget) {
      this.clickTarget.style.cursor = "pointer";
      this.clickTarget.addEventListener("click", event => {
        // console.log("click");
        this._toggleSwitch();
      });
      this.clickTarget.addEventListener("keypress", event => {
        if (event.key === "Enter") {
          this._toggleSwitch();
        }
      });
    }
    if (!this.initOpen) {
        this.initClosed()
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.controler.group === this.groupID) {
      if (nextProps.controler.identifier !== this.myID) {
        if (this.isOpen) {
          this._toggle(false);
        }
      }
    }
    return false;
  }

  initClosed = () => {
    const element = document.getElementById(this.myID);
    TweenLite.set(element, { height: 0 });
    this.isOpen = false;
  };

  _toggleSwitch = () => {
    this.groupAccordionFn({ myID: this.myID, groupID: this.groupID });
    this._toggle(!this.isOpen);
  };

  _toggle = ON => {
    const easing = !!this.props.invertEasing ? Power2.easeIn : Power2.easeOut;
    const seconds = 0.4529;
    const element = document.getElementById(this.myID);
    const complete = o => {
      document.getElementById(this.myID).style.height = "auto";
    };
    if (ON) {
      let hite = document.getElementById(this.myID).scrollHeight;
      TweenLite.to(element, seconds + this.timeAdjustment + this.offsetTiming, {
        ease: easing,
        height: hite,
        onComplete: complete
      });
    } else {
      TweenLite.to(element, seconds + this.timeAdjustment - this.offsetTiming, {
        ease: easing,
        height: 0
      });
    }
    this.isOpen = ON;
    this.callbackFn(this.isOpen, this.props.ID);
  };

  render() {
    let styles = { overflow: "hidden" };
    return (
      <div id={this.myID} style={styles}>
        <div id={`${this.myID}_inner_lining`} style={{background:"#ccc"}}>{this.props.children}</div>
      </div>
    );
  }
}

export default Accordion;

////////////////////////////////////////////////////////

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
