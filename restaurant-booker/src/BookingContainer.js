import React, { useState, useEffect } from "react";
import FormBox from "./Form/FormBox.js";
import BookingList from './Form/BookingList.js';
import Graph from './BookingGraph/Graph.js';
import BookingDetails from './BookingDetails/BookingDetails.js'

function BookingContainer() {
  const [bookings, setBookings] = useState([]);
  const [bookingSlots, setBookingSlots] = useState(["19:00", "20:00", "21:00", "22:00"]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [tables, setTables] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/bookings/customerAndDesk")
      .then(res => res.json())
      // .then(response => console.log(response))
      .then(result => setBookings(result))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    fetch( "http://localhost:8080/desks/getAllBookingsForAGivenDesk?date=06/07/2020")
    .then(res => res.json())
    // .then(response => console.log(response))
    .then(result => setTables(result))
    .catch(error => console.log(error));
}, []);

  function findBookingById(id) {
    return bookings.find(item => item.id === id)
  }

  function handleBookingItemClick(itemId) {
    let selectedBooking = findBookingById(itemId)
    setSelectedBooking(selectedBooking)
  }

  // useEffect(() => {handleBookingItemClick()}, [])

  return (
    <>
      <p>Hello I am the booking container</p>
      <FormBox bookings={bookings} bookingSlots={bookingSlots}/>
      <BookingDetails selectedBooking={selectedBooking} bookingSlots={bookingSlots}/>
      <BookingList bookings={bookings} handleBookingItemClick={handleBookingItemClick}/>
      <Graph bookings={bookings} bookingSlots={bookingSlots} tables={tables}></Graph>
      <p>{}</p>
    </>
  );
}

export default BookingContainer;
