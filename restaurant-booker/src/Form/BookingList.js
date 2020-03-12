import React from "react";
import Booking from "./Booking";
import "./BookingList.css";

function BookingList({
  bookings,
  searchedBookings,
  handleBookingItemClick,
  handleBookingDeleteClick,
  showModalUpdate
}) {
  if (!searchedBookings) {
    const bookingItem = bookings.map(booking => {
      return (
        <>
          <ul>
            <Booking
              bookingValue={booking}
              handleBookingItemClick={handleBookingItemClick}
              handleBookingDeleteClick={handleBookingDeleteClick}
              showModalUpdate={showModalUpdate}
              // email={booking.email}
              // phoneNum={booking.phoneNum}
              key={booking.id}
            ></Booking>
          </ul>
        </>
      );
    });
    return bookingItem;
  } else {
    const bookingItem = searchedBookings.map(booking => {
      return (
        <>
          <ul>
            <Booking
              bookingValue={booking}
              handleBookingItemClick={handleBookingItemClick}
              handleBookingDeleteClick={handleBookingDeleteClick}
              showModalUpdate={showModalUpdate}
              // email={booking.email}
              // phoneNum={booking.phoneNum}
              key={booking.id}
            ></Booking>
          </ul>
        </>
      );
    });
    return bookingItem;
  }

  //   return (
  //     <>
  //       <p>Current Reservations: </p>
  //       <ul>{this.bookingItem}</ul>
  //     </>
  //   );
  // }
}
export default BookingList;
