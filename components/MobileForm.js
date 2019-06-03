import React from "react";
import styled from "styled-components";

class MobileForm extends React.Component {
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
          throw new Error("fail");
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
        <form onSubmit={this.submitHandler}>
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">Name</label>
            </div>
            <div className="col-75">
              <input
                ref={this.nameElem}
                type="text"
                id="fname"
                name="fullname"
                placeholder="Your full name"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="hotel">Hotel</label>
            </div>
            <div className="col-75">
              <select id="hotel" name="hotel" ref={this.hotelElem}>
                <option value="Hilton Times">Hilton Times</option>
                <option value="Garden">Garden</option>
                <option value="Millennium">Millennium</option>
                <option value="Hampton">Hampton</option>
                <option value="DoubleTree">DoubleTree</option>
                <option value="Embassy">Embassy</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Arrival</label>
            </div>

            <div className="col-75">
              <input type="date" name="arriveDate" ref={this.arriveElem} />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Departure</label>
            </div>

            <div className="col-75">
              <input type="date" name="departDate" ref={this.departElem} />
            </div>
          </div>

          <div className="row">
            <input type="submit" value="Submit" />
          </div>
        </form>

      </StyledForm>
    );
  }
}

export default MobileForm;

const StyledForm = styled.div`
  * {
    box-sizing: border-box;
  }

  label {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    margin: 1rem .1rem;
    text-align: center;
    width: 9rem;
  }

  input[type="text"],
  select,
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
  }

  label {
    padding: 12px 12px 12px 0;
    display: inline-block;
    background: #99cccc;
  }

  input[type="submit"] {
    background-color: #4caf50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
  }

  input[type="submit"]:hover {
    background-color: #45a049;
  }

  .container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  }

  .col-25 {
    float: left;
    width: 25%;
    margin-top: 6px;
  }

  .col-75 {
    float: left;
    width: 75%;
    margin-top: 6px;
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  @media screen and (max-width: 600px) {
    .col-25,
    .col-75,
    input[type="submit"] {
      width: 80%;
      margin-top: 12px;
    }
  }
`;
