import React, { Component } from "react";
import Axios from "axios";
// import emailjs from "emailjs-com";
import BookingList from "./BookingList";
import "./formbox.css";
import BookingForm from "./BookingForm"

const creds = require("../config/Idconfig.js");

class FormBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPeople: 1,
      date: "",
      selectedTime: "",
      customerName: "",
      customerEmail: "",
      customerContactNumber: "",
      newBookingId: null,
      customer_id: null,
      tableSelectedId: null

      // customerAccessibility: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCustomerSubmit = this.handleCustomerSubmit.bind(this);


  }

  handlePax = event => {
    const numberOfPeople = event.target.value;
    this.setState({ numberOfPeople: numberOfPeople });

    this.props.handlePaxSelected(event.target.value);
  };

  handleDate = event => {
    this.setState({ date: event.target.value });
    this.props.handleDateSelected(event.target.value);
  };

  handleTime = event => {
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
    this.setState({ tableSelectedId: event.target.value });
  };
  // handleCustomerAccessibility (event) {
  //     const target = event.target;
  //     const value = target.type === 'checkbox' ? target.checked : target.value
  //     const name = target.name;

  //     this.setState({customerAccessibility: value})
  // }

  handleSubmit(event) {

    const numberOfPeople = this.state.numberOfPeople;
    const date = this.state.date;
    const time = this.state.selectedTime;

    // call a query and the back end returns a desk to be placed in the const desk below

    const desk = `http://localhost:8080/desks/${this.state.tableSelectedId}`;

    JSON.stringify({ numberOfPeople, date, time, desk });

    Axios.post(`http://localhost:8080/bookings`, {
      numberOfPeople,
      date,
      time,
      desk
    }).then(res => {
      console.log(res);
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
      })
      .then(() => this.patchCustomerIdInBooking())
      .then(this.props.handleFormSubmit);

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

    // CLOSE THE POPUP
    this.props.closePop();
  }

  patchCustomerIdInBooking() {
    console.log(`${this.state.customer_id}`);
    const customer = `http://localhost:8080/customers/${this.state.customer_id}`;

    JSON.stringify({ customer });
    console.log(JSON.stringify({ customer }));

    console.log(`http://localhost:8080/bookings/${this.state.newBookingId}`);

    return Axios.patch(
      `http://localhost:8080/bookings/${this.state.newBookingId}`,
      {
        customer: customer
      }
    );
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
            <BookingForm 
            handleSubmit={this.handleSubmit} 
            handlePax={this.handlePax} 
            handleDate={this.handleDate} 
            handleTime={this.handleTime} 
            bookingSlots={this.props.bookingSlots} 
            handleTable={this.handleTable}
            tablesAvailable={this.props.tablesAvailable}
            />

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
