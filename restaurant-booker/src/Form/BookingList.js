import React from "react";
import Booking from "./Booking";
import "./BookingList.css";

function BookingList({
  bookings,
  handleBookingItemClick,
  handleBookingDeleteClick,
  showModalUpdate,
  searchString
}) 


// let filteredBookings = bookings.filter(booking => {
//   return booking.name
//     .toLowerCase()
//     .includes(searchString.toLowerCase());
// });

// const bookings = props.filteredBookings.map(booking => {
//   return (
//     <Booking
//       key={booking.///customer.id}
//       name={booking.//customer.name}
//       email={booking.email}
//     ></Booking>


  const bookingItem = bookings.map(booking => {
    return (
      <Booking

        bookingValue={booking}
        handleBookingItemClick={handleBookingItemClick}
        handleBookingDeleteClick={handleBookingDeleteClick}
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


export default BookingList;
