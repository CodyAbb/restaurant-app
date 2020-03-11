import React from "react";
import Booking from "./Booking";

function BookingList({ bookings, handleBookingItemClick, showModalUpdate }) {
  const bookingItem = bookings.map(booking => {
    return (
      <Booking
        bookingValue={booking}
        handleBookingItemClick={handleBookingItemClick}
        showModalUpdate={showModalUpdate}
        // email={booking.email}
        // phoneNum={booking.phoneNum}
        key={booking.id}
      ></Booking>
    );
  });
  return (
    <>
      <p>Current Reservations: </p>
      <ul>{bookingItem}</ul>
    </>
  );
}

export default BookingList;
