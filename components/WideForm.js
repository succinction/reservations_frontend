import React from "react";
import styled from "styled-components";

class WideForm extends React.Component {
  constructor(props) {
    super(props);
    this.nameElem = React.createRef();
    this.hotelElem = React.createRef();
    this.arriveElem = React.createRef();
    this.departElem = React.createRef();
  }

  submitHandler = event => {
    event.preventDefault();
    const name = this.nameElem.current.value;
    const hotel = this.hotelElem.current.value;
    const arriveDate = this.arriveElem.current.value;
    const departDate = this.departElem.current.value;
    if (name.trim().length === 0 || hotel.trim().length === 0) {
      return;
    }
    const requestBody = {
      query: `
      mutation {
        createBooking(bookingInput:{name:"${name}", hotel:"${hotel}", arrivalDate: "${arriveDate}", departureDate:"${departDate}"}) {
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
          throw new Error("Ffail");
        }
        return res.json();
      })
      .then(resData => {
        const message = {
          title: "Reservation Booked",
          name: resData.data.createBooking.name,
          hotel: resData.data.createBooking.hotel,
          arrivalDate: resData.data.createBooking.arrivalDate,
          departureDate: resData.data.createBooking.departureDate,
          _id: resData.data.createBooking._id
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
              <label htmlFor="name">Name</label>
              <input
                ref={this.nameElem}
                type="text"
                id="fname"
                name="fullname"
                placeholder="Your full name"
              />
              <span>Enter your full name here</span>
            </li>
            <li>
              <label htmlFor="Hotel">Hotel</label>
              <select id="hotel" name="hotel" ref={this.hotelElem}>
                <option value="Hilton Times">Hilton Times</option>
                <option value="Garden">Garden</option>
                <option value="Millennium">Millennium</option>
                <option value="Hampton">Hampton</option>
                <option value="DoubleTree">DoubleTree</option>
                <option value="Embassy">Embassy</option>
              </select>
              <span>Select Hotel</span>
            </li>
            <li>
              <label htmlFor="Hotel">Arrival</label>
              <input type="date" name="arriveDate" ref={this.arriveElem} />
              <span>Arrival Date</span>
            </li>
            <li>
              <label htmlFor="Hotel">Depart</label>
              <input type="date" name="departDate" ref={this.departElem} />
              <span>Departure Date</span>
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

export default WideForm;

const StyledForm = styled.div`
  div {
    background-color: transparent;
  }
  .form-style-7 {
    max-width: 400px;
    margin: 50px auto;
    background: #fff;
    border-radius: 2px;
    padding: 20px;
    font-family: Georgia, "Times New Roman", Times, serif;
  }
  .form-style-7 h1 {
    display: block;
    text-align: center;
    padding: 0;
    margin: 0px 0px 20px 0px;
    color: #5c5c5c;
    font-size: x-large;
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
