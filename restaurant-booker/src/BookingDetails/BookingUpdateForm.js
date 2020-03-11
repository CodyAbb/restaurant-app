import React, { useState } from "react";
import Axios from "axios";

function BookingUpdateForm({ selectedBooking, bookingSlots, tablesAvailable }) {
  const [pax, setPax] = useState(selectedBooking.numberOfPeople);
  const [date, setDate] = useState(selectedBooking.date);
  const [time, setTime] = useState(selectedBooking.time);
  const [table, setTable] = useState(selectedBooking.table);
  // const[bookingSlots, setBookingSlots] = useState(bookingSlots)

  function handlePax(event) {
    setPax(event.target.value);
  }

  function handleDate(event) {
    setDate(event.target.value);
  }

  function handleTime(event) {
    setTime(event.target.value);
  }

  const populateTimeOption = bookingSlots.map((timeSlot, index) => {
    let isItSelected = timeSlot === time ? "selected" : "";
    console.log(tablesAvailable);

    return (
      <option key={index} value={time} selected={isItSelected}>
        {time}
      </option>
    );
  });

  const populateAvailableTableOptions = tablesAvailable.map(tableAvailable => {
    let isItSelected = tableAvailable === table ? "selected" : "";

    if (tableAvailable.pax >= pax) {
      return (
        <option
          key={tableAvailable.id}
          value={tableAvailable}
          selected={isItSelected}
        >
          Table: {tableAvailable.id} | {tableAvailable.pax} pax
        </option>
      );
    }
  });

  function putUpdatedBooking() {
    const customer = `http://localhost:8080/customers/${selectedBooking.customer.id}`;
    const desk = `http://localhost:8080/desks/${selectedBooking.desk.id}`;
    const numberOfPeople = pax;
    JSON.stringify({ time, date, numberOfPeople, customer, desk });
    Axios.put(`http://localhost:8080/bookings/${selectedBooking.id}`, {
      time,
      date,
      numberOfPeople,
      customer,
      desk
    }).then(res => console.log(`the update res is ${res}`));
  }

  //   patchCustomerIdInBooking() {
  //     console.log(`${this.state.customer_id}`);
  //     const customer = `http://localhost:8080/customers/${this.state.customer_id}`;

  //     JSON.stringify({ customer });
  //     console.log(JSON.stringify({ customer }));

  //     console.log(`http://localhost:8080/bookings/${this.state.newBookingId}`);

  //     Axios.patch(`http://localhost:8080/bookings/${this.state.newBookingId}`, {
  //       customer: customer
  //     }).then(res => {
  //       console.log(`this is the res from the patch ${res}`);
  //     });
  //   }

  return (
    <>
      <form onSubmit={putUpdatedBooking}>
        <label for="number of customer">Number of Customer</label>
        <input
          type="number"
          placeholder="Add number of customers"
          value={pax}
          onChange={handlePax}
        />

        <label for="date">Date:</label>
        <input type="date" value={date} onChange={handleDate} />
        <select onChange={handleTime}>{populateTimeOption}</select>
        <select required>
          {/* <option default>{table.id}</option> */}
          {populateAvailableTableOptions}
        </select>
        <input type="submit" />
      </form>
    </>
  );
}

export default BookingUpdateForm;
