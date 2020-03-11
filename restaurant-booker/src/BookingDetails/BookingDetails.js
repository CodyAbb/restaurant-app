import React, { Component } from "react";
import BookingUpdateForm from "./BookingUpdateForm.js";
import BookingDelete from "./BookingDelete";

class BookingDetails extends Component {
  constructor(props) {
    super(props);
  }

  // handlePax = (event) => this.setState({pax: event.target.value})

  // handleDate = (event) => {
  //     this.setState({date: event.target.value})
  // }

  // handleTime = (event) => this.setState({selectedTime: event.target.value})

  render() {
    if (!this.props.selectedBooking) return null;

    const populateTimeOption = this.props.bookingSlots.map((time, index) => {
      return (
        <option key={index} value={time}>
          {time}
        </option>
      );
    });

    return (
      <>
        <h3>Booking Details:</h3>
        <BookingUpdateForm
          selectedBooking={this.props.selectedBooking}
          bookingSlots={this.props.bookingSlots}
          tablesAvailable={this.props.tablesAvailable}
        />
        {/* <BookingDelete bookingToDelete={this.props.bookingToDelete} /> */}

        {/* <h4> below just fixed data. So we know what's inside</h4>
                <section>
                    <header>Selected Booking ID: {this.props.selectedBooking.id}</header>
                    <main>
                        <p>Date: {this.props.selectedBooking.date}</p>
                        <p>Time: {this.props.selectedBooking.time}</p>
                        <p>Customer: {this.props.selectedBooking.customer.name} </p>
                    </main>
                
                </section> */}
      </>
    );
  }
}

export default BookingDetails;
