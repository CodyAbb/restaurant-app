import React from "react";
import "./Booking.css";
import BookingDetails from "../BookingDetails/BookingDetails";

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
    <li
      key={bookingValue.id}
      className="booking-item"
      onClick={handleEditBooking}
    >
      <label>Name: </label>
      {bookingValue.customer.name}
      <br></br>
      <label>Date: </label>
      {bookingValue.date}
      <br></br>
      <label>Time: </label> {bookingValue.time}
    </li>
  );
}

export default Booking;
