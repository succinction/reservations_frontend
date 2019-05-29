import MobileForm from "../components/MobileForm";
import ResponseMessage from "../components/ResponseMessage";
import Accordion from "../components/Accordion";
import PageTitle from "../components/PageTitle";
import WideForm from "../components/WideForm";
import Layout from "../components/layout";
import React from "react";

class Index extends React.Component {
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
    // console.log("callbackFn(" + bool + ")");
  };

  resizeHandler() {
    // const debounce = (func, delay) => {
    //   let inDebounce;
    //   return (function() {
    //     const context = this;
    //     const args = arguments;
    //     clearTimeout(inDebounce);
    //     inDebounce = setTimeout(() => func.apply(context, args), delay);
    //   })();
    // };
    const resizeLayout = () => {
      if (this.state.isMobile !== window.innerWidth < this.breakpoint) {
        console.log("this.state.isMobile", this.state.isMobile);
        this.setState({
          isMobile: window.innerWidth < this.breakpoint
        });
      }
    };
    // debounce(resizeLayout, 200);
    resizeLayout();
  }

  responseFn(message) {
    this.setState({
      responseData: message
    });
  }

  render() {
    let show = this.state.isMobile;
    return (
      <Layout isMobile={this.state.isMobile} backgroundImage={this.bgImage}>
        <ResponseMessage message={this.state.responseData} />
        <PageTitle isMobile={this.state.isMobile}>
          Make Your Reservations
        </PageTitle>
        {show && <MobileForm callbackFn={this.responseFn} />}
        {show || <WideForm callbackFn={this.responseFn} />}
      </Layout>
    );
  }
}

export default Index;
