import ResponseMessage from "../components/ResponseMessage";
import MobileForm from "../components/MobileForm";
import PageTitle from "../components/PageTitle";
import WideForm from "../components/WideForm";
import Layout from "../components/layout";
import React from "react";

interface IState {
  responseData: {
    title: String,
    name: String,
    hotel: String,
    arrivalDate: String,
    departureDate: String,
    _id: String
  } ;
}

interface IProps {
}


class Index extends React.Component<IProps, IState>  {
  state: IState = {
    responseData: {
      title: "String",
      name: "String",
      hotel: "String",
      arrivalDate: "String",
      departureDate: "String",
      _id: "String"
    }
  };


  responseFn =(message: { title: String; name: String; hotel: String; arrivalDate: String; departureDate: String; _id: String; }) => {
    this.setState({
      responseData: message
    });
  }

  render() {
    return (
      <Layout
        render={(props: { isMobile: boolean; })  => (
          <div>
            <ResponseMessage message={this.state.responseData} />
            <PageTitle>
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
