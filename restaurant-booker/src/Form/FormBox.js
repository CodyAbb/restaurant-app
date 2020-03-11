import React, { Component } from "react";
import Axios from "axios";
// import emailjs from "emailjs-com";
import BookingList from "./BookingList";
import "./formbox.css";

const creds = require("../config/IdConfig");

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
      customerContactNumber: "",
      newBookingId: null,
      customer_id: null,
      tableSelected: null

      // customerAccessibility: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCustomerSubmit = this.handleCustomerSubmit.bind(this);
  }

  handlePax = event => this.setState({ pax: event.target.value });

  handleDate = event => {
    this.setState({ date: event.target.value });
    this.props.handleDateSelected(event.target.value);
  };

  handleTime = event => {
    console.log(event.target.value);

    this.setState({ selectedTime: event.target.value });
    this.props.handleTimeSelected(event.target.value);
  };
  handleCustomerName = event =>
    this.setState({ customerName: event.target.value });
  handleCustomerEmail = event =>
    this.setState({ customerEmail: event.target.value });
  handleCustomerContactNumber = event =>
    this.setState({ customerContactNumber: event.target.value });
  handleTable = event => {
    this.setState({ tableSelected: event.target.value });
  };
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
    // call a query and the back end returns a desk to be placed in the const desk below

    const desk = `http://localhost:8080/desks/2`;

    JSON.stringify({ pax, date, time, desk });

    Axios.post(`http://localhost:8080/bookings`, {
      pax,
      date,
      time,
      desk
    }).then(res => {
      console.log(res);
      console.log(`this is new booking id ${res.data.id}`);
      this.setState({ newBookingId: res.data.id });
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
    // console.log(JSON.stringify({ name, emailAddress, contactNumber }));
    Axios.post(`http://localhost:8080/customers`, {
      name,
      emailAddress,
      contactNumber
    })
      .then(res => {
        this.setState({ customer_id: res.data.id });

        console.log(`this is new customer data from res ${res.data.id}`);
      })
      .then(res => {
        this.patchCustomerIdInBooking();
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

  patchCustomerIdInBooking() {
    console.log(`${this.state.customer_id}`);
    const customer = `http://localhost:8080/customers/${this.state.customer_id}`;

    JSON.stringify({ customer });
    console.log(JSON.stringify({ customer }));

    console.log(`http://localhost:8080/bookings/${this.state.newBookingId}`);

    Axios.patch(`http://localhost:8080/bookings/${this.state.newBookingId}`, {
      customer: customer
    }).then(res => {
      console.log(`this is the res from the patch ${res}`);
    });
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
    const populateAvailableTableOptions = this.props.tablesAvailable.map(
      table => {
        if (table.pax >= this.state.pax) {
          return (
            <option key={table.id} value={table}>
              Table: {table.id} | {table.pax} pax
            </option>
          );
        }
      }
    );

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
          <button className="closeButton" onClick={this.handleCloseModal}>
            &times;
          </button>
          <div className="newBookingModalContent">
            <form onSubmit={this.handleSubmit}>
              <input
                type="number"
                placeholder="Add number of customers"
                value={this.state.pax}
                onChange={this.handlePax}
                min="1"
                required
              />
              <input
                type="date"
                value={this.state.date}
                onChange={this.handleDate}
                required
              />
              <select onChange={this.handleTime} required>
                <option default>select a time</option>
                {populateTimeOption}
              </select>
              <select onChange={this.handleTable} required>
                <option default>select a Table</option>
                {populateAvailableTableOptions}
              </select>

              <input type="submit" />
            </form>

            <form onSubmit={this.handleCustomerSubmit}>
              <input
                type="text"
                placeholder="Customer Name"
                value={this.state.customerName}
                onChange={this.handleCustomerName}
                required
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
        <div className="modal-overlay" id="modal-overlay"></div>
      </>
    );
  }
}

export default FormBox;
