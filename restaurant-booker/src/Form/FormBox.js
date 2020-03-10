import React, { Component } from "react";
import Axios from "axios";
import emailjs from "emailjs-com";
import BookingList from "./BookingList";

const creds = require("../config/idconfig");

class FormBox extends Component {
  constructor({ bookings, bookingSlots }) {
    super({ bookings, bookingSlots });
    this.state = {
      pax: 0,
      date: "",
      selectedTime: "",
      // availableTimes: ["12:00", "12:30", "13:00", "13:30"],
      customerName: "",
      customerEmail: "",
      customerContactNumber: ""
      // customerAccessibility: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCustomerSubmit = this.handleCustomerSubmit.bind(this);
    // this.formatDate = this.formatDate.bind(this)
    // this.handleCustomerAccessibility = this.handleCustomerAccessibility.bind(this)
  }

  // formatDate(dateString) {
  //  const dateArray = dateString.split("-");
  //  return dateArray.reverse().join("/")

  // }

  handlePax = event => this.setState({ pax: event.target.value });

  handleDate = event => {
    this.setState({ date: event.target.value });
  };

  handleTime = event => this.setState({ selectedTime: event.target.value });
  handleCustomerName = event =>
    this.setState({ customerName: event.target.value });
  handleCustomerEmail = event =>
    this.setState({ customerEmail: event.target.value });
  handleCustomerContactNumber = event =>
    this.setState({ customerContactNumber: event.target.value });
  // handleCustomerAccessibility (event) {
  //     const target = event.target;
  //     const value = target.type === 'checkbox' ? target.checked : target.value
  //     const name = target.name;

  //     this.setState({customerAccessibility: value})
  // }

  handleSubmit(event) {
    event.preventDefault();

    const pax = this.state.pax;
    const date = this.state.date;
    const time = this.state.selectedTime;
    const desk = `http://localhost:8080/desks/2`;
    JSON.stringify({ pax, date, time, desk });

    Axios.post(`http://localhost:8080/bookings`, {
      pax,
      date,
      time,
      desk
    }).then(res => {
      console.log(res);
      console.log(res.data);
    });
  }

  handleCustomerSubmit(event) {
    event.preventDefault();

    const date = this.state.date;
    const time = this.state.selectedTime;

    const name = this.state.customerName;
    const emailAddress = this.state.customerEmail;
    const contactNumber = this.state.customerContactNumber;
    // const customerAccessibility = this.state.customerAccessibility;
    JSON.stringify({ name, emailAddress, contactNumber });
    console.log(JSON.stringify({ name, emailAddress, contactNumber }));
    Axios.post(`http://localhost:8080/customers`, {
      name,
      emailAddress,
      contactNumber
    }).then(res => {
      console.log(res);
    });

    // UNCOMMENT THESE TWO FUNCTIONS WHEN IMPLEMENTING EMAIL
    // let templateParams = {
    //   emailAddress: emailAddress,
    //   name: name,
    //   time: time,
    //   date: date
    // };
    // emailjs
    //   .send("gmail", "restaurantconfirmation", templateParams, creds.USERID)
    //   .then(
    //     result => {
    //       console.log(result.text);
    //     },
    //     error => {
    //       console.log(error.text);
    //     }
    //   );
  }

  // getToday(){
  //     var today = new Date();
  //     var dd = String(today.getDate()).padStart(2, '0');
  //     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  //     var yyyy = today.getFullYear();
  //     today = mm + '/' + dd + '/' + yyyy;
  // }

  handleCloseModal = () => {
    this.props.closePop();
  };

  render() {
    const populateTimeOption = this.props.bookingSlots.map((time, index) => {
      return (
        <option key={index} value={time}>
          {time}
        </option>
      );
    });

    if (!this.props.showPop) {
      return null;
    }
    return (
      <>
        <div className="newBookingModal">
          <p>Hello I am the FormBox</p>
          <button onClick={this.handleCloseModal}>&times;</button>
          <div className="newBookingModalContent">
            <form onSubmit={this.handleSubmit}>
              <input
                type="number"
                placeholder="Add number of customers"
                value={this.state.pax}
                onChange={this.handlePax}
              />
              <input
                type="date"
                value={this.state.date}
                onChange={this.handleDate}
              />
              <select onChange={this.handleTime}>{populateTimeOption}</select>

              <input type="submit" />
            </form>

            <form onSubmit={this.handleCustomerSubmit}>
              <input
                type="text"
                placeholder="Customer Name"
                value={this.state.customerName}
                onChange={this.handleCustomerName}
              />
              <input
                type="text"
                placeholder="Email Address"
                value={this.state.customerEmail}
                onChange={this.handleCustomerEmail}
              />
              <input
                type="text"
                placeholder="Contact Number"
                value={this.state.customerContactNumber}
                onChange={this.handleCustomerContactNumber}
              />
              {/* <>
                    <p>Accessibility Required: </p>
                    <input name="customerAccessibility" type="checkbox" checked={this.state.customerAccessibility} onChange={this.handleCustomerAccessibility}/>
                    </> */}

              <input type="submit" />
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default FormBox;
