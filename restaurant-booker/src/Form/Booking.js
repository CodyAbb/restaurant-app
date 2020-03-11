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
    <li
      key={bookingValue.id}
      className="booking-item"
      onClick={handleEditBooking}
    >
      Name: {bookingValue.customer.name}
      Date: {bookingValue.date}
      Time: {bookingValue.time}
    </li>
  );
}

export default Booking;
