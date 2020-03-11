// import React from "react";
// import Axios from "axios";

// function BookingDelete({ bookingToDelete }) {
//   const [booking, setBooking] = useState(bookingToDelete);

//   handleDeleteBooking = event => {
//     setBooking(event.target.value);
//   };

//   function deleteBooking() {
//     const booking = `http://localhost:8080/bookings/${bookingToDelete.id}`;

//     JSON.stringify({ booking });
//     Axios.delete(`http://localhost:8080/bookings/${bookingToDelete.id}`, {
//       booking
//     }).then(res => console.log("this is the booking gone" + res));
//   }

//   return (
//     <>
//       <form onSubmit={deleteBooking}></form>
//     </>
//   );
// }

// export default BookingDelete;
