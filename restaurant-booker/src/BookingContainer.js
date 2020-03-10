import React, { useState, useEffect } from "react";
import FormBox from "./Form/FormBox.js";
import BookingList from "./Form/BookingList.js";
import Graph from "./BookingGraph/Graph.js";
import BookingDetails from "./BookingDetails/BookingDetails.js";

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
    // if(!dateSelected && !timeSelected) {
    //   return null
    // }
    // else {

    
    console.log(`http://localhost:8080/desks/getAllDesksByTimeAndDate?date=${dateSelected}&time=${timeSelected}`);
    
    fetch(`http://localhost:8080/desks/getAllDesksByTimeAndDate?date=${dateSelected}&time=${timeSelected}`)
      .then(res => res.json())
      .then(response => console.log(response))
      .then(result => setTablesAvailable(result))
      .catch(error => console.log(error));
  }, [dateSelected, timeSelected]);

  function findBookingById(id) {
    return bookings.find(item => item.id === id);
  }

  function handleBookingItemClick(itemId) {
    let selectedBooking = findBookingById(itemId);
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
  
  function handleDateSelected(date){
    
    setDateSelected(date)
  }

  // useEffect(() => {handleBookingItemClick()}, [])

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
