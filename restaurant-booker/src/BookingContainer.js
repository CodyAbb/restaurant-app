import React, { useState, useEffect } from "react";
import FormBox from "./Form/FormBox.js";
import BookingList from './Form/BookingList.js';
import Graph from './BookingGraph/Graph.js'

function BookingContainer() {
  const [bookings, setBookings] = useState([]);
  const [bookingSlots, setBookingSlots] = useState(["19:00", "20:00", "21:00"]);

  useEffect(() => {
    fetch("http://localhost:8080/bookings")
      .then(res => res.json())
      .then(response => response._embedded)
      .then(result => setBookings(result.bookings))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <p>Hello I am the booking container</p>
      <FormBox bookings={bookings}/>
      <BookingList bookings={bookings}/>
      <Graph bookings={bookings} bookingSlots={bookingSlots}></Graph>
      <p>{}</p>
    </>
  );
}

export default BookingContainer;
