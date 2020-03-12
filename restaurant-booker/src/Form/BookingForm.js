import React, { useState } from "react";
import Booking from "./Booking";

function BookingForm({
  bookingSlots,
  handlePax,
  handleDate,
  handleTime,
  handleSubmit,
  tablesAvailable,
  handleTable
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

  function handleSubmitSelection(event) {
    if (date && time && numberOfPeople && tableSelected) {
      event.preventDefault();
      console.log("loggin the handlesubmit child");

      handleSubmit(event);
    }
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
      <form onChange={handleSubmitSelection}>
        <input
          type="number"
          // placeholder="Add number of customers"
          value={numberOfPeople}
          onChange={handlePaxSelection}
          min="1"
          required
        />
        <input
          type="date"
          value={date}
          onChange={handleDateSelection}
          required
        />
        <select onChange={handleTimeSelection} required>
          <option default>select a time</option>
          {populateTimeOption}
        </select>
        <select onChange={handleTableSelection} required>
          <option default>select a Table</option>
          {populateAvailableTableOptions}
        </select>

        {/* <input type="submit" /> */}
      </form>
    );
  }
}

export default BookingForm;
