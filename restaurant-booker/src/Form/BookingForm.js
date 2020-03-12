import React, { useState } from "react";
import Booking from "./Booking";
import "./BookingNewCustomerForm.css";

function BookingForm({
  bookingSlots,
  handlePax,
  handleDate,
  handleTime,
  handleSubmit,
  tablesAvailable,
  handleTable,
  handleBookingPartSubmitted
}) {
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [tableSelected, setTableSelected] = useState(null);

  function handlePaxSelection(event) {
    console.table("booking slots: ", bookingSlots);
    setNumberOfPeople(event.target.value);
    handlePax(event);
  }
  function handleDateSelection(event) {
    setDate(event.target.value);
    handleDate(event);
  }

  function handleTimeSelection(event) {
    setTime(event.target.value);
    handleTime(event);
  }

  function handleTableSelection(event) {
    setTableSelected(event.target.value);
    handleTable(event);
  }

  const populateTimeOption = bookingSlots.map((time, index) => {
    return (
      <option key={index} value={time}>
        {time}
      </option>
    );
  });

  const populateAvailableTableOptions = tablesAvailable.map(table => {
    if (table.pax >= numberOfPeople) {
      return (
        <option key={table.id} value={table.id}>
          Table: {table.id} | {table.pax} pax
        </option>
      );
    }
  });

  if (!bookingSlots) {
    return null;
  } else {
    return (
      <form className="new-customer-table">
        <label> Covers: </label>
        <input
          type="number"
          placeholder="Add number of customers"
          value={numberOfPeople}
          onChange={handlePaxSelection}
          min="1"
          required
        />
        <label> Date: </label>
        <input
          type="date"
          value={date}
          onChange={handleDateSelection}
          required
        />
        <label> Time: </label>
        <select onChange={handleTimeSelection} required>
          <option default>select a time</option>
          {populateTimeOption}
        </select>
        <label> Table: </label>
        <select onChange={handleTableSelection} required>
          <option default>select a Table</option>
          {populateAvailableTableOptions}
        </select>
      </form>
    );
  }
}

export default BookingForm;
