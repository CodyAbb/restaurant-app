import React, { Component } from "react";
import BookingList from "./BookingList";
import axios from "axios";

class FormBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pax: 0,
      date: "",
      selectedTime: "",
      availableTimes: ["12:00", "12:30", "13:00", "13:30"]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePax = event => this.setState({ pax: event.target.value });

  handleDate = event => this.setState({ date: event.target.value });

  handleTime = event => this.setState({ selectedTime: event.target.value });

  handleSubmit(event) {
    event.preventDefault();
    // TODO
    // this is where the db will be called to create a new booking

    const pax = this.state.pax;
    const date = this.state.date;
    const selectedTime = this.state.selectedTime;
    const customer_id = 1;
    console.log(JSON.stringify({ pax, date, selectedTime }));
    axios
      .post(`http://localhost:8080/bookings`, {
        pax,
        date,
        selectedTime,
        customer_id
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  }

  // getToday(){
  //     var today = new Date();
  //     var dd = String(today.getDate()).padStart(2, '0');
  //     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  //     var yyyy = today.getFullYear();
  //     today = mm + '/' + dd + '/' + yyyy;
  // }

  render() {
    const populateTimeOption = this.state.availableTimes.map((time, index) => {
      return (
        <option key={index} value={time}>
          {time}
        </option>
      );
    });

    return (
      <>
        <p>Hello I am the FormBox</p>
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
      </>
    );
  }
}

export default FormBox;
