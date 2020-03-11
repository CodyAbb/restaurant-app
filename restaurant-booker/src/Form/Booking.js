import React from "react";
import "./Booking.css";

function Booking({
  bookingValue,
  handleBookingItemClick,
  handleBookingDeleteClick,
  showModalUpdate
}) {
  function handleEditBooking() {
    showModalUpdate();
    handleBookingItemClick(bookingValue.id);
  }

  function handleDeleteBooking() {
    handleBookingDeleteClick(bookingValue.id);
  }

  return (
    <li key={bookingValue.id} className="booking-item">
      ID: {bookingValue.id}
      <br></br>
      {bookingValue.time}
      <br></br>
      {bookingValue.date}
      <br></br>
      {bookingValue.numberOfPeople}
      <br></br>
      {bookingValue.customer.name}
      <br></br>
      <button onClick={handleEditBooking}>Edit</button>
      <button onClick={handleDeleteBooking}>Delete</button>
    </li>
  );
}

export default Booking;
