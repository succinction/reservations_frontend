import styled from "styled-components";
import { TweenLite, Power4 } from "gsap";
import React from "react";

class ResponseMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let ON = this.props.message !== "";
    const easing = false ? Power4.easeIn : Power4.easeOut;
    const seconds = 1.4529;
    const complete = o => {
      document.getElementById("reveal").height = "auto";
    };
    if (ON) {
      setTimeout(() => {
        let hite = document.getElementById("reveal").scrollHeight;
        TweenLite.to("#reveal", seconds, {
          ease: easing,
          height: hite,
          onComplete: complete
        });
      }, 99);
    }

    let styles = { overflow: "hidden", height: 0 };
    return (
      <div id="reveal" style={styles}>
        {ON && (
          <MessageLayout>
            <H1>{this.props.message.title}</H1>
            <p>ID: {this.props.message._id}</p>
            <p>Name: {this.props.message.name}</p>
            <p>Hotel: {this.props.message.hotel}</p>
            <p>Arrival Date: {this.props.message.arrivalDate}</p>
            <p>Departure Date: {this.props.message.departureDate}</p>
          </MessageLayout>
        )}
      </div>
    );
  }
}

export default ResponseMessage;

const MessageLayout = styled.div`
  max-width: 400px;
  background: #eee;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: white;
  margin: 1rem auto;
  padding: 0.25em 1em;
  font-family: "Arial";
  p {
    color: #000;
    font-size: 1rem;
  }
`;
const H1 = styled.h1`
  font-family: "Arial";
  padding: 20;
  color: orange;
`;
