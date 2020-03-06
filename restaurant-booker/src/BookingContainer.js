import React, { useState, useEffect } from "react";
import FormBox from "./Form/FormBox.js";

function BookingContainer() {
  const [bookings, setBookings] = useState([]);

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
      <FormBox />
      <p>{}</p>
    </>
  );
}

export default BookingContainer;
