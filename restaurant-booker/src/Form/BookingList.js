import React, { useState, useEffect } from "react";
import Booking from "./Booking";
import "./BookingList.css";

function BookingList({
  bookings,
  searchedBookings,
  handleBookingItemClick,
  handleBookingDeleteClick,
  showModalUpdate
}) {
  let bookingItems;

  if (searchedBookings.length == 0) {
    bookingItems = bookings.map(booking => {
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
    // setBookingItem(bookingItem);
  } else {
    bookingItems = searchedBookings.map(booking => {
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
  }

  function returnBookingStuff(selectedArray) {
    return selectedArray.map(booking => {
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
  }

  // useEffect(() => {
  //   setBookingItem(
  //     searchedBookings
  //       ? returnBookingStuff(searchedBookings)
  //       : returnBookingStuff(bookings)
  //   );
  // }, []);

  return (
    <>
      <p>Current Reservations: </p>
      <ul>{bookingItems}</ul>
    </>
  );
}

export default BookingList;
