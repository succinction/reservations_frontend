import ReservationForm from "../components/ReservationForm";
import ResponseMessage from "../components/ResponseMessage";
import PageTitle from "../components/PageTitle";
// import WideForm from "../components/WideForm";
import Layout from "../components/layout";
import React from "react";
import Accordion from "../components/Accordion";

class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responseData: "",
      isMobile: true,
      controler: { identifier: "", group: "" }
    };
    this.resizeHandler = this.resizeHandler.bind(this);
    this.responseFn = this.responseFn.bind(this);
    this.breakpoint = 600;
    this.bgImage = [
      "http://news.hiltonworldwide.com/assets/HWW/images/newsroom/2011/HiltonGuangzhouTianheExterior_Night_FP.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/c_scale,w_630/q_auto/v1429779489/NYCBP_Exterior_2011_HR_ukzskh.jpg",
      "https://www.lastminute.com/hotels/img/city/New-York-NY-US.jpg?2.42.0-063942240519"
    ];
  }

  componentDidMount() {
    window.addEventListener("resize", this.resizeHandler);
    this.resizeHandler();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeHandler);
  }

  groupFn = o => {
    this.setState({ controler: { identifier: o.myID, group: o.groupID } });
  };

  callbackFn = bool => {
    // Do some side effect
    console.log("accordion call back");
  };

  resizeHandler() {
    const resizeLayout = () => {
      if (this.state.isMobile !== window.innerWidth < this.breakpoint) {
        // console.log("this.state.isMobile", this.state.isMobile);
        this.setState({
          isMobile: window.innerWidth < this.breakpoint
        });
      }
    };
    resizeLayout();
  }

  responseFn(message) {
    this.setState({
      responseData: message
    });
    document.getElementById("accordionAction").click();
  }

  render() {
    let msg = this.state.responseData;
    console.log("msg", msg);

    // const accordionContent = (msg) => (
    //   <>
    //     <ResponseMessage message={msg} />
    //     this is the message area
    //     {/* {console.log("props", props)} */}
    //     {console.log("this.props", this.props)}
    //   </>
    // );

    return (
      <Layout isMobile={this.state.isMobile} backgroundImage={this.bgImage}>
        <a id="accordionAction">Message</a>
        <Accordion
          initOpen={false}
          ID="responseWindow"
          actionID="accordionAction"
          groupID="AAA"
          groupFn={this.groupFn}
          controler={this.state.controler}
          callbackFn={this.callbackFn}
        >
          {/* <ResponseMessage message={msg} /> */}
          {/* this is the message area */}
          {/* {console.log("props", props)} */}
          {/* {console.log("this.props", this.props)} */}
        </Accordion>
        <ResponseMessage message={msg} />
        <p>{JSON.stringify(msg)}</p>
        <PageTitle isMobile={this.state.isMobile}>
          Find Your Reservations
        </PageTitle>
        <ReservationForm callbackFn={this.responseFn} />
      </Layout>
    );
  }
}

export default Portal;
