import React, { useState } from "react";

function BookingUpdateForm({ selectedBooking, bookingSlots, tablesAvailable }) {
  const [numberOfPeople, setNumberOfPeople] = useState(
    selectedBooking.numberOfPeople
  );
  const [date, setDate] = useState(selectedBooking.date);
  const [time, setTime] = useState(selectedBooking.time);
  const [table, setTable] = useState(selectedBooking.table);
  // const[bookingSlots, setBookingSlots] = useState(bookingSlots)

  function handleNumberOfPeople(event) {
    setNumberOfPeople(event.target.value);
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

    if (tableAvailable.pax >= numberOfPeople) {
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

  return (
    <>
      <form>
        <label for="number of customer">Number of Customer</label>
        <input
          type="number"
          placeholder="Add number of customers"
          value={numberOfPeople}
          onChange={handleNumberOfPeople}
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
