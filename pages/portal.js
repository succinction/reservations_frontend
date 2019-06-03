import ReservationForm from "../components/ReservationForm";
import ResponseMessage from "../components/ResponseMessage";
import PageTitle from "../components/PageTitle";
import Layout from "../components/layout";
import React from "react";

class Portal extends React.Component {
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
        isMobile={this.state.isMobile}
        render={props => (
          <div>
            <ResponseMessage message={this.state.responseData} />
            <PageTitle isMobile={props.isMobile}>
              Find Your Reservations
            </PageTitle>
            <ReservationForm callbackFn={this.responseFn} />
          </div>
        )}
      />
    );
  }
}

export default Portal;
