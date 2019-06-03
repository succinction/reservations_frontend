import MobileForm from "../components/MobileForm";
import ResponseMessage from "../components/ResponseMessage";
import PageTitle from "../components/PageTitle";
import WideForm from "../components/WideForm";
import Layout from "../components/layout";
import React from "react";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responseData: ""
    };
    this.responseFn = this.responseFn.bind(this);
  }

  responseFn(message) {
    this.setState({
      responseData: message
    });
  }

  render() {
    return (
      <Layout
        render={props => (
          <div>
            <ResponseMessage message={this.state.responseData} />
            <PageTitle isMobile={props.isMobile}>
              Make Your Reservations
            </PageTitle>
            {props.isMobile && <MobileForm callbackFn={this.responseFn} />}
            {props.isMobile || <WideForm callbackFn={this.responseFn} />}
          </div>
        )}
      />
    );
  }
}

export default Index;
