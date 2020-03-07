import React from 'react'
import Booking from './Booking'

function BookingList ({bookings}){

    const bookingItem = bookings.map(booking => {
        return (
          <Booking 
          name={booking.name} 
          email={booking.email}
          phoneNum={booking.phoneNum}
          key={booking.id}>
            {booking.name}
          </Booking> )
        
    })
    return (
        <ul>
            {bookingItem}
        </ul>
    )
}

export default BookingList;