import React from "react";
import styled from 'styled-components'

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.IDElem = React.createRef();
  }

  submitHandler = event => {
    event.preventDefault();
    const __ID = this.IDElem.current.value;
    if (__ID.trim().length === 0) {
      return;
    }
    const requestBody = {
      query: `
      query {
        booking(idInput: {id:${__ID}}) {
          name
          hotel
          arrivalDate
          departureDate
          _id
        }
      }
      `
    };

    fetch("http://localhost:5000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("fail");
        }
        return res.json();
      })
      .then(resData => {
        const message = {
          title: "Reservation Found",
          name: resData.data.booking.name,
          hotel: resData.data.booking.hotel,
          arrivalDate: resData.data.booking.arrivalDate,
          departureDate: resData.data.booking.departureDate,
          _id: resData.data.booking._id
        };
        this.props.callbackFn(message);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <StyledForm>
        <form className="form-style-7" onSubmit={this.submitHandler}>
          <ul>
            <li>
              <label htmlFor="name">Reservation ID</label>
              <input
                ref={this.IDElem}
                type="text"
                placeholder="Your reservation ID"
              />
              <span>Enter your reservation ID here</span>
            </li>
            <li>
              <input type="submit" value="Submit" />
            </li>
          </ul>
        </form>
      </StyledForm>
    );
  }
}

export default ReservationForm;

const StyledForm = styled.div`
  .form-style-7 {
    max-width: 400px;
    margin: 50px auto;
    background: #fff;
    border-radius: 2px;
    padding: 20px;
    font-family: Georgia, "Times New Roman", Times, serif;
  }
  .form-style-7 ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .form-style-7 li {
    display: block;
    padding: 9px;
    border: 1px solid #dddddd;
    margin-bottom: 30px;
    border-radius: 3px;
  }
  .form-style-7 li:last-child {
    border: none;
    margin-bottom: 0px;
    text-align: center;
  }
  .form-style-7 li > label {
    display: block;
    float: left;
    margin-top: -19px;
    background: #ffffff;
    height: 14px;
    padding: 2px 5px 2px 5px;
    color: #b9b9b9;
    font-size: 14px;
    overflow: hidden;
    font-family: Arial, Helvetica, sans-serif;
  }
  .form-style-7 input[type="text"],
  .form-style-7 input[type="date"],
  .form-style-7 input[type="datetime"],
  .form-style-7 input[type="email"],
  .form-style-7 input[type="number"],
  .form-style-7 input[type="search"],
  .form-style-7 input[type="time"],
  .form-style-7 input[type="url"],
  .form-style-7 input[type="password"],
  .form-style-7 textarea,
  .form-style-7 select {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    width: 100%;
    display: block;
    outline: none;
    border: none;
    height: 25px;
    line-height: 25px;
    font-size: 16px;
    padding: 0;
    font-family: Georgia, "Times New Roman", Times, serif;
  }
  .form-style-7 input[type="text"]:focus,
  .form-style-7 input[type="date"]:focus,
  .form-style-7 input[type="datetime"]:focus,
  .form-style-7 input[type="email"]:focus,
  .form-style-7 input[type="number"]:focus,
  .form-style-7 input[type="search"]:focus,
  .form-style-7 input[type="time"]:focus,
  .form-style-7 input[type="url"]:focus,
  .form-style-7 input[type="password"]:focus,
  .form-style-7 textarea:focus,
  .form-style-7 select:focus {
  }
  .form-style-7 li > span {
    background: #f3f3f3;
    display: block;
    padding: 3px;
    margin: 0 -9px -9px -9px;
    text-align: center;
    color: #c0c0c0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 11px;
  }
  .form-style-7 textarea {
    resize: none;
  }
  .form-style-7 input[type="submit"],
  .form-style-7 input[type="button"] {
    background: #2471ff;
    border: none;
    padding: 10px 20px 10px 20px;
    border-bottom: 3px solid #5994ff;
    border-radius: 3px;
    color: #d2e2ff;
  }
  .form-style-7 input[type="submit"]:hover,
  .form-style-7 input[type="button"]:hover {
    background: #6b9fff;
    color: #fff;
  }
`;
