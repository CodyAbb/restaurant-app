import React, { useState, useEffect } from "react";
import FormBox from "./Form/FormBox.js";
import BookingList from "./Form/BookingList.js";
import Graph from "./BookingGraph/Graph.js";
import BookingDetails from "./BookingDetails/BookingDetails.js";
import { differenceWith, isEqual } from "lodash/fp";

function BookingContainer() {
  const [bookings, setBookings] = useState([]);
  const [bookingSlots, setBookingSlots] = useState([
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [tables, setTables] = useState([]);
  const [popShow, setPopShow] = useState(false);
  const [tablesAvailable, setTablesAvailable] = useState([]);
  const [tablesNotAvailable, setTablesNotAvailable] = useState([]);
  const [dateSelected, setDateSelected] = useState(null);
  const [timeSelected, setTimeSelected] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/bookings/customerAndDesk")
      .then(res => res.json())
      // .then(response => console.log(response))
      .then(result => setBookings(result))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    fetch(
      "http://localhost:8080/desks/getAllBookingsForAGivenDesk?date=06/07/2020"
    )
      .then(res => res.json())
      // .then(response => console.log(response))
      .then(result => setTables(result))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    // console.log(`http://localhost:8080/desks/getAllDesksByTimeAndDate?date=${dateSelected}&time=${timeSelected}`);
    fetch(
      `http://localhost:8080/desks/getAllDesksByTimeAndDate?date=${dateSelected}&time=${timeSelected}`
    )
      .then(res => res.json())
      .then(unavailableTables => {
        // console.log("tables:",tables);
        // console.log("unavailableTables:", unavailableTables);
        // const availableTables = tables.filter(table => !unavailableTables.some(unavailableTable => unavailableTable.id === table.id))
        const availableTables = differenceWith(
          isEqual,
          tables,
          unavailableTables
        );
        // console.log(availableTables);

        setTablesAvailable(availableTables);
      })

      .catch(error => console.log(error));
  }, [dateSelected, timeSelected]);

  function findBookingById(id) {
    return bookings.find(item => item.id === id);
  }

  function handleBookingItemClick(itemId) {
    let selectedBooking = findBookingById(itemId);
    handleTimeSelected(selectedBooking.time);
    handleDateSelected(selectedBooking.date);
    setSelectedBooking(selectedBooking);
  }

  function showModal() {
    setPopShow(true);
  }

  function closePop() {
    setPopShow(false);
  }

  function handleTimeSelected(time) {
    setTimeSelected(time);
  }

  function handleDateSelected(date) {
    setDateSelected(date);
  }

  return (
    <>
      <p>Hello I am the booking container</p>

      <button className="addBookingButton" onClick={showModal}>
        Add Booking
      </button>
      <FormBox
        bookings={bookings}
        bookingSlots={bookingSlots}
        showPop={popShow}
        closePop={closePop}
        tablesAvailable={tablesAvailable}
        handleTimeSelected={handleTimeSelected}
        handleDateSelected={handleDateSelected}
      />
      <BookingDetails
        selectedBooking={selectedBooking}
        bookingSlots={bookingSlots}
        tablesAvailable={tablesAvailable}
      />
      <BookingList
        bookings={bookings}
        handleBookingItemClick={handleBookingItemClick}
      />
      <Graph
        bookings={bookings}
        bookingSlots={bookingSlots}
        tables={tables}
      ></Graph>
      <p></p>
    </>
  );
}

export default BookingContainer;
